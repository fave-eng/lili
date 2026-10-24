/* Lili's vocabulary pronunciation: British English Web Speech API.
   Uses the same device speech method as Viktoria, with robust voice selection,
   persistent utterance references, and playback in all vocabulary modes.
   No recordings, network calls, or changes to vocabulary progress. */
(() => {
  'use strict';
  const synth = window.speechSynthesis || null;
  let activeUtterance = null;
  let activeButton = null;
  let browserVoices = [];
  const supported = !!synth && typeof window.SpeechSynthesisUtterance === 'function';

  function refreshVoices() {
    try { browserVoices = synth?.getVoices?.() || []; }
    catch (_) { browserVoices = []; }
  }
  if (supported) {
    refreshVoices();
    synth.addEventListener?.('voiceschanged', refreshVoices);
  }

  function showAudioError() {
    const toast = document.getElementById('app-toast');
    if (toast) {
      toast.textContent = 'Pronunciation is unavailable on this device. Check sound and browser settings.';
      toast.classList.add('show');
      window.setTimeout(() => toast.classList.remove('show'), 3500);
    }
  }

  function resetButton() {
    if (activeButton) {
      activeButton.classList.remove('is-speaking', 'iv-speaking');
      activeButton.setAttribute('aria-pressed', 'false');
    }
    activeButton = null;
    activeUtterance = null;
  }

  function stop() {
    if (synth) {
      try { synth.cancel(); } catch (_) { /* no speech available */ }
    }
    resetButton();
  }

  function normalizeSpeech(text) {
    return String(text || '').trim().replace(/\s*\/\s*/g, ', ');
  }

  function britishVoice() {
    if (!browserVoices.length) refreshVoices();
    return browserVoices.find(v => /^en[-_]GB$/i.test(v.lang)) ||
      browserVoices.find(v => /^en[-_]GB/i.test(v.lang)) ||
      browserVoices.find(v => /^en[-_]/i.test(v.lang)) || null;
  }

  function speak(text, button = null) {
    const cleaned = normalizeSpeech(text);
    if (!cleaned || !supported) { showAudioError(); return false; }

    // Speech must be initiated synchronously by the student's tap/click for Safari.
    stop();
    const utterance = new window.SpeechSynthesisUtterance(cleaned);
    utterance.lang = 'en-GB';
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;
    const voice = britishVoice();
    if (voice) utterance.voice = voice;

    activeUtterance = utterance; // prevent premature collection in WebKit/Safari
    activeButton = button;
    if (button) {
      button.classList.add('is-speaking', 'iv-speaking');
      button.setAttribute('aria-pressed', 'true');
    }
    const finish = () => {
      if (activeUtterance === utterance) resetButton();
    };
    utterance.onend = finish;
    utterance.onerror = (event) => {
      if (!['canceled', 'interrupted'].includes(event?.error)) showAudioError();
      finish();
    };
    try { synth.speak(utterance); }
    catch (_) { finish(); showAudioError(); return false; }
    return true;
  }

  function makeButton(word, className) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `pronounce-btn ${className}`;
    button.textContent = '🔊';
    button.setAttribute('aria-label', `Listen to the pronunciation: ${word}`);
    button.setAttribute('aria-pressed', 'false');
    button.title = `Listen: ${word}`;
    if (!supported) {
      button.disabled = true;
      button.classList.add('is-unavailable');
      button.title = 'Pronunciation unavailable on this device';
    }
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      speak(word, button);
    });
    return button;
  }

  function enhanceVocabulary() {
    const root = document.getElementById('vocabulary-root');
    if (!root) return;

    // Keep Viktoria's familiar vocabulary mode labels and ordering.
    const modes = root.querySelector('#vocab-modes');
    if (modes && modes.dataset.orderReady !== 'true') {
      const labels = { all: 'All words', cards: 'Flashcards', difficult: 'Difficult', test: 'Test' };
      ['all', 'cards', 'difficult', 'test'].forEach(name => {
        const button = modes.querySelector(`[data-mode="${name}"]`);
        if (!button) return;
        button.textContent = labels[name];
        modes.appendChild(button);
      });
      modes.dataset.orderReady = 'true';
      window.requestAnimationFrame(() => modes.querySelector('[data-mode="all"]')?.click());
    }

    const front = root.querySelector('.flash-front');
    const word = front?.querySelector('.flash-word');
    if (front && word && !front.querySelector('.flash-pronounce')) {
      front.appendChild(makeButton(word.textContent.trim(), 'flash-pronounce'));
    }

    root.querySelectorAll('.word-card').forEach(card => {
      if (card.querySelector('.word-card-pronounce')) return;
      const heading = card.querySelector('strong');
      if (!heading) return;
      card.classList.add('has-pronunciation');
      card.appendChild(makeButton(heading.textContent.trim(), 'word-card-pronounce'));
    });

    // The test reads only the visible English question; it never gives the translation.
    const testWord = root.querySelector('#vocab-mode-root .card > h2.flash-word');
    if (testWord && !testWord.parentElement?.querySelector('.quiz-pronounce')) {
      testWord.insertAdjacentElement('afterend', makeButton(testWord.textContent.trim(), 'quiz-pronounce'));
    }
  }

  window.LiliVocabularySpeech = { speak, stop, supported };

  const root = document.getElementById('vocabulary-root');
  if (root) {
    const observer = new MutationObserver(() => enhanceVocabulary());
    observer.observe(root, { childList: true, subtree: true });
    enhanceVocabulary();
  }
  window.addEventListener('pagehide', stop);
})();
