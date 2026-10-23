(() => {
  'use strict';
  const TOPIC_ID = 'vocab-irregular-verbs';
  const KIND = 'irregular-forms-verified-v1';
  const rawTopic = (window.VOCABULARY_DATA || []).find(topic => topic.id === TOPIC_ID);
  const verbs = Array.isArray(rawTopic?.words) ? rawTopic.words : [];
  if (!verbs.length) return;
  const byId = new Map(verbs.map(word => [word.id, word]));
  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const elem = id => document.getElementById(id);
  const normalize = value => String(value ?? '').toLocaleLowerCase('en').trim()
    .replace(/[‘’]/g, "'").replace(/\s+/g, ' ');

  // For variants in the source (was/were, dreamt/dreamed, learnt/learned),
  // one legitimate variant is enough. can has no V3 in the given table.
  function accepts(value, canonical) {
    const entered = normalize(value);
    const alternatives = canonical.split(/\s*\/\s*/).map(normalize);
    if (!entered || canonical === '—') return false;
    const whole = normalize(canonical).replace(/\s*\/\s*/g, '/');
    const requiresBoth = whole === 'was/were';
    const enteredParts = entered.split(/\s*[/;,]\s*/).filter(Boolean);
    return (!requiresBoth && alternatives.includes(entered))
      || entered.replace(/\s*\/\s*/g, '/') === whole
      || (enteredParts.length > 1 && enteredParts.length === alternatives.length
        && enteredParts.every(part => alternatives.includes(part))
        && new Set(enteredParts).size === alternatives.length);
  }

  function progress() {
    return window.ProgressService?.loadVocabularyProgress?.() || {words:{},topics:{}};
  }
  function masteredSet(current = progress()) {
    const tests = current.topics?.[TOPIC_ID]?.tests || [];
    return new Set(tests.filter(test => test.kind === KIND && test.correct === true && byId.has(test.wordId))
      .map(test => test.wordId));
  }
  function translationCount(current = progress()) {
    return verbs.filter(word => current.words?.[word.uniqueKey]?.status === 'known').length;
  }
  function formCount(current = progress()) {
    return masteredSet(current).size;
  }
  function barMarkup(value, total, color) {
    const percent = Math.round(value / total * 100);
    return `<div class="iv-meter" role="progressbar" aria-valuenow="${value}" aria-valuemin="0" aria-valuemax="${total}" aria-label="${esc(color)}"><span style="width:${percent}%"></span></div>`;
  }
  function progressMarkup(current) {
    const forms = formCount(current), learned = translationCount(current);
    return `<div class="iv-progress-columns">
      <div><span class="iv-progress-label">Тест 1 · Перевод — общий Vocabulary</span><strong>${learned} / ${verbs.length}</strong>${barMarkup(learned,verbs.length,'Перевод')}</div>
      <div><span class="iv-progress-label">Тест 2 · Три формы — отдельный результат</span><strong>${forms} / ${verbs.length}</strong>${barMarkup(forms,verbs.length,'Формы')}</div>
    </div>`;
  }
  function updateIndicators() {
    const current = progress();
    if (elem('irregular-forms-progress')) elem('irregular-forms-progress').innerHTML = progressMarkup(current);
    if (elem('kb-irregular-forms-progress')) elem('kb-irregular-forms-progress').innerHTML = progressMarkup(current);
  }
  function speakWord(word, which, button) {
    const synth = window.speechSynthesis;
    if (!synth || typeof SpeechSynthesisUtterance === 'undefined') {
      if (button) button.title = 'Озвучка недоступна в этом браузере';
      return;
    }
    let text = which === 'base' ? word.base : which === 'past' ? word.past : word.participle;
    if (text === '—') return;
    // Isolated read is ambiguous. A short tense context reliably disambiguates it.
    if (word.base === 'read' && which === 'past') text = 'Yesterday I read a book.';
    if (word.base === 'read' && which === 'participle') text = 'I have read a book.';
    text = text.replace(/\s*\/\s*/g, ', ');
    synth.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-GB';
    utterance.rate = 0.9;
    utterance.pitch = 1;
    const voices = synth.getVoices?.() || [];
    const british = voices.find(voice => /^en[-_]GB$/i.test(voice.lang));
    if (british) utterance.voice = british;
    if (button) button.classList.add('iv-speaking');
    const cleanup = () => button?.classList.remove('iv-speaking');
    utterance.onend = cleanup;
    utterance.onerror = cleanup;
    synth.speak(utterance);
  }
  document.addEventListener('click', event => {
    const button = event.target.closest?.('[data-iv-say]');
    if (!button) return;
    const word = byId.get(button.dataset.ivSay);
    if (word && ['base','past','participle'].includes(button.dataset.ivForm)) {
      event.preventDefault();
      speakWord(word, button.dataset.ivForm, button);
    }
  });
  const tts = (word, form) => (form === 'participle' && word.participle === '—')
    ? '' : `<button class="iv-sound" type="button" data-iv-say="${esc(word.id)}" data-iv-form="${form}" aria-label="Прослушать: ${esc(word[form])}" title="Прослушать форму">🔊</button>`;
  function drawVocabTable() {
    const output = elem('irregular-table-body');
    if (!output) return;
    const search = normalize(elem('irregular-table-search')?.value);
    const matches = verbs.filter(v => !search || [v.base,v.past,v.participle,v.ru].some(x => normalize(x).includes(search)));
    output.innerHTML = matches.map(word => `<tr>
      <td><strong>${esc(word.base)}</strong> ${tts(word,'base')}</td>
      <td>${esc(word.past)} ${tts(word,'past')}</td>
      <td>${esc(word.participle)} ${tts(word,'participle')}</td>
      <td>${esc(word.ru)}</td></tr>`).join('') || '<tr><td colspan="4">Ничего не найдено</td></tr>';
    if (elem('irregular-table-count')) elem('irregular-table-count').textContent = `Показано ${matches.length} из ${verbs.length}`;
  }

  const state = {queue:[],index:0,rerun:false};
  function queueRemaining(includeMastered = false) {
    const passed = masteredSet();
    state.queue = verbs.filter(v => includeMastered || !passed.has(v.id));
    state.index = 0;
    state.rerun = includeMastered;
  }
  function drawTest() {
    const root = elem('irregular-forms-test');
    if (!root) return;
    if (state.index >= state.queue.length) {
      const done = formCount();
      root.innerHTML = `<div class="iv-complete"><p><strong>${done === verbs.length ? 'Все формы изучены!' : 'На сегодня тест завершён.'}</strong></p><p>Отдельный прогресс: ${done} / ${verbs.length} глаголов. Результат сохраняется между посещениями сайта.</p><div class="iv-actions"><button type="button" class="iv-action iv-primary" id="iv-start-remaining">Практиковать неизученные</button><button type="button" class="iv-action" id="iv-retest-all">Повторить все 68</button></div></div>`;
      return;
    }
    const word = state.queue[state.index];
    if (masteredSet().has(word.id) && !state.rerun) {state.index++; drawTest(); return;}
    const noThird = word.participle === '—';
    root.innerHTML = `<form id="iv-forms-form" novalidate>
      <div class="iv-counter">Глагол ${state.index + 1} из ${state.queue.length} · Вторая проверка</div>
      <h3 class="iv-question-heading">${esc(word.ru)}</h3>
      <p class="iv-caption">Напиши формы по-английски без подсказок. Каждая форма проверяется отдельно, но глагол засчитывается только при всех правильных ответах.</p>
      <div class="iv-inputs"><label>V1 · Present<input name="base" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" required placeholder="V1"></label>
      <label>V2 · Past Simple<input name="past" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" required placeholder="V2"></label>
      <label>V3 · Participle<input name="participle" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" ${noThird ? 'value="—" disabled' : 'required placeholder="V3"'}></label></div>
      ${noThird ? '<p class="iv-caption">У модального can третьей формы нет: её не нужно писать.</p>' : word.base === 'be' ? '<p class="iv-caption">Для be укажи оба варианта V2 через / (например, в формате word / word).</p>' : ''}
      <p id="iv-form-feedback" class="iv-form-feedback" role="status" aria-live="polite"></p>
      <div class="iv-actions"><button type="submit" class="iv-action iv-primary" id="iv-form-check" disabled>Проверить формы</button><button type="button" class="iv-action" id="iv-form-next" hidden>Следующий глагол →</button><button type="button" class="iv-action iv-skip" id="iv-form-skip">Пропустить →</button></div></form>`;
    const form = elem('iv-forms-form');
    const checkButton = elem('iv-form-check');
    const requiredForms = noThird ? ['base', 'past'] : ['base', 'past', 'participle'];
    const allFormsEntered = () => requiredForms.every(name => form.elements[name].value.trim().length > 0);
    // Never validate a partly filled verb. Editing an answer removes old feedback,
    // but does not check the new answer until the student presses Check again.
    form.addEventListener('input', event => {
      const input = event.target;
      if (!input.matches('input[type="text"]')) return;
      input.classList.remove('iv-wrong', 'iv-correct');
      input.removeAttribute('aria-invalid');
      const feedback = elem('iv-form-feedback');
      feedback.className = 'iv-form-feedback';
      feedback.textContent = '';
      checkButton.disabled = !allFormsEntered();
    });
    checkButton.disabled = !allFormsEntered();
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!allFormsEntered()) {
        checkButton.disabled = true;
        return;
      }
      const checks = {base:accepts(form.elements.base.value,word.base),past:accepts(form.elements.past.value,word.past),participle:noThird || accepts(form.elements.participle.value,word.participle)};
      for(const [name,passed] of Object.entries(checks)) {
        const input = form.elements[name];
        input.classList.toggle('iv-wrong',!passed);
        input.classList.toggle('iv-correct',passed);
        input.setAttribute('aria-invalid',passed ? 'false' : 'true');
      }
      const feedback = elem('iv-form-feedback');
      if (Object.values(checks).every(Boolean)) {
        const p = progress();
        if (!p.topics[TOPIC_ID]) p.topics[TOPIC_ID] = {tests:[]};
        if (!Array.isArray(p.topics[TOPIC_ID].tests)) p.topics[TOPIC_ID].tests = [];
        const old = new Set(p.topics[TOPIC_ID].tests.filter(t=>t.kind===KIND&&t.correct).map(t=>t.wordId));
        if (!old.has(word.id)) {
          p.topics[TOPIC_ID].tests.push({kind:KIND,wordId:word.id,correct:true,completedAt:new Date().toISOString()});
          window.ProgressService.saveVocabularyProgress(p);
        }
        feedback.className = 'iv-form-feedback iv-success';
        feedback.textContent = 'Все формы написаны правильно. Глагол засчитан во втором прогрессе.';
        for (const input of form.querySelectorAll('input')) input.disabled = true;
        elem('iv-form-check').hidden = true;
        elem('iv-form-next').hidden = false;
        updateIndicators();
      } else {
        feedback.className = 'iv-form-feedback iv-error';
        feedback.textContent = `Проверь ${Object.entries(checks).filter(([,passed])=>!passed).map(([name])=>name.toUpperCase()).join(' и ')}. Правильные формы не раскрываются, попробуй снова.`;
      }
    });
    elem('iv-form-next').addEventListener('click', () => {state.index++; drawTest();});
    elem('iv-form-skip').addEventListener('click', () => {state.index++; drawTest();});
  }
  function startTest(includeMastered = false) {
    const table = elem('irregular-table-details');
    if (table) table.open = false;
    queueRemaining(includeMastered);
    drawTest();
    const form = elem('iv-forms-form');
    if (form) form.elements.base.focus({preventScroll:true});
  }
  function init() {
    updateIndicators();
    if (elem('irregular-forms-feature')) {
      elem('irregular-forms-feature').hidden = false;
      elem('irregular-forms-test').innerHTML = `<div class="iv-intro"><p>Тест перевода расположен ниже в обычном тренажёре (<strong>Test</strong>). Он учитывается в общем прогрессе Vocabulary. Здесь отдельный тест написания форм V1, V2 и V3.</p><div class="iv-actions"><button class="iv-action iv-primary" id="iv-start-remaining" type="button">Учить ещё не засчитанные формы</button><button class="iv-action" id="iv-retest-all" type="button">Повторить все формы</button></div></div>`;
      elem('irregular-forms-test').addEventListener('click',event=>{
        if(event.target.closest('#iv-start-remaining')) startTest(false);
        if(event.target.closest('#iv-retest-all')) startTest(true);
      });
      elem('irregular-table-search')?.addEventListener('input',drawVocabTable);
      drawVocabTable();
      if(location.hash==='#irregular-forms-feature') setTimeout(()=>elem('irregular-forms-feature')?.scrollIntoView({behavior:'auto',block:'start'}),80);
    }
  }
  window.addEventListener('lili-vocabulary-progress-updated',updateIndicators);
  window.addEventListener('focus',updateIndicators);
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)updateIndicators()});
  document.addEventListener('DOMContentLoaded',init);
})();
