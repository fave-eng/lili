(() => {
  'use strict';

  const CLIENT_DIAGNOSTICS_VERSION = 'lili-diagnostics-20261023-v4';
  const COMPATIBLE_DIAGNOSTIC_VERSIONS = new Set(['multi-student-diagnostics-v1', 'multi-student-diagnostics-v2']);
  const RAW_CHAT_ID = window.APP_CONFIG?.telegram?.expectedChatId;
  const EXPECTED_CHAT_ID = Number.isSafeInteger(Number(RAW_CHAT_ID)) && Number(RAW_CHAT_ID) < 0 ? Number(RAW_CHAT_ID) : null;
  const RAW_THREAD_ID = window.APP_CONFIG?.telegram?.expectedTopicId;
  const EXPECTED_THREAD_ID = Number.isInteger(Number(RAW_THREAD_ID)) && RAW_THREAD_ID !== null && RAW_THREAD_ID !== undefined && RAW_THREAD_ID !== '' ? Number(RAW_THREAD_ID) : null;
  const TELEGRAM_READY = window.APP_CONFIG?.features?.telegramNotifications === true && EXPECTED_CHAT_ID !== null;
  const config = window.APP_CONFIG || {};
  const student = config.student || {};
  const studentId = String(student.id || '').trim().toLowerCase();
  const checksEl = document.getElementById('checks');
  const summaryEl = document.getElementById('main-summary');
  const rawEl = document.getElementById('raw-output');
  const configInfoEl = document.getElementById('config-info');
  const telegramInfoEl = document.getElementById('telegram-info');
  const dbWriteResultEl = document.getElementById('db-write-result');
  const progressResultEl = document.getElementById('progress-result');
  const sendResultEl = document.getElementById('send-result');
  const runAllBtn = document.getElementById('run-all');
  const dbWriteBtn = document.getElementById('test-db-write');
  const progressBtn = document.getElementById('test-progress');
  const sendBtn = document.getElementById('send-test-report');
  let runningProgress = false;
  let supabaseClient = null;
  let lastReport = { clientDiagnosticsVersion: CLIENT_DIAGNOSTICS_VERSION, startedAt: null, checks: [], health: null, directRows: [], errors: [] };

  const esc = (value) => String(value ?? '')
    .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;').replaceAll("'", '&#039;');

  function addKV(target, key, value, mono = false) {
    target.insertAdjacentHTML('beforeend', `<div class="kv"><span>${esc(key)}</span><strong class="${mono ? 'mono' : ''}">${esc(value)}</strong></div>`);
  }

  function renderConfig() {
    configInfoEl.innerHTML = '';
    addKV(configInfoEl, 'student_id', studentId || '—', true);
    addKV(configInfoEl, 'Имя', student.nameRu || student.nameEn || '—');
    addKV(configInfoEl, 'Supabase URL', config.supabase?.url || 'не задан', true);
    addKV(configInfoEl, 'Anon key', config.supabase?.anonKey ? 'есть' : 'НЕТ');
    addKV(configInfoEl, 'cloudSync', String(config.features?.cloudSync !== false));
    addKV(configInfoEl, 'telegramNotifications', String(config.features?.telegramNotifications !== false));
    addKV(configInfoEl, 'Целевая группа Telegram', EXPECTED_CHAT_ID === null ? 'не настроена' : String(EXPECTED_CHAT_ID), true);
    addKV(configInfoEl, 'Тема Telegram', EXPECTED_THREAD_ID === null ? 'не указана (сообщение в группу)' : String(EXPECTED_THREAD_ID), true);
    addKV(configInfoEl, 'Origin', window.location.origin, true);
  }

  sendBtn.disabled = !TELEGRAM_READY;

  function resetChecks() {
    checksEl.innerHTML = '';
    lastReport = { clientDiagnosticsVersion: CLIENT_DIAGNOSTICS_VERSION, startedAt: new Date().toISOString(), checks: [], health: null, directRows: [], errors: [] };
  }

  function addCheck(name, status, detail) {
    const icon = status === 'ok' ? '✓' : status === 'bad' ? '!' : status === 'warn' ? '!' : '…';
    checksEl.insertAdjacentHTML('beforeend', `<div class="check ${status}"><div class="ico">${icon}</div><div><div class="name">${esc(name)}</div><div class="detail">${esc(detail || '')}</div></div></div>`);
    lastReport.checks.push({ name, status, detail: detail || '' });
  }

  function setSummary(status, text) {
    summaryEl.className = `summary ${status || ''}`.trim();
    summaryEl.textContent = text;
  }

  function getClient() {
    if (supabaseClient) return supabaseClient;
    if (!window.supabase?.createClient) throw new Error('Supabase JS SDK не загрузился');
    const url = String(config.supabase?.url || '').trim();
    const anonKey = String(config.supabase?.anonKey || '').trim();
    if (!url || !anonKey) throw new Error('В config.js отсутствуют supabase.url или supabase.anonKey');
    supabaseClient = window.supabase.createClient(url, anonKey, {
      auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false }
    });
    return supabaseClient;
  }

  function functionUrl() {
    const base = String(config.supabase?.url || '').replace(/\/+$/, '');
    return `${base}/functions/v1/notify-telegram`;
  }

  async function invokeDiagnostic(body) {
    const anonKey = String(config.supabase?.anonKey || '').trim();
    const response = await fetch(functionUrl(), {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'apikey': anonKey,
        'authorization': `Bearer ${anonKey}`
      },
      body: JSON.stringify(body)
    });
    const text = await response.text();
    let data = null;
    try { data = text ? JSON.parse(text) : null; } catch { data = { raw: text }; }
    return { ok: response.ok, status: response.status, data };
  }

  function explainFunctionFailure(result) {
    const message = String(result?.data?.error || result?.data?.message || result?.data?.raw || '').trim();
    if (result?.status === 404) return 'Edge Function notify-telegram не найдена или не задеплоена.';
    if (result?.status === 401 && /Unauthorized diagnostics request/i.test(message)) {
      const version = result?.data?.diagnosticVersion ? ` Версия функции: ${result.data.diagnosticVersion}.` : '';
      return `Edge Function отвечает, но не принимает публичный ключ из config.js.${version} Задеплой актуальную notify-telegram из этого архива.`;
    }
    if (result?.status === 401 && /Unauthorized/i.test(message)) return 'Edge Function отклонила запрос авторизации. Проверь актуальный deploy и verify_jwt=false.';
    if (result?.status === 403) return message || 'Диагностика запрещена для этого student_id.';
    if (/Failed to fetch/i.test(message)) return 'Браузер не смог вызвать Edge Function: проверь сеть, URL проекта и CORS.';
    return `HTTP ${result?.status || '—'}${message ? `: ${message}` : ''}`;
  }

  function formatError(error) {
    if (!error) return 'Неизвестная ошибка';
    const code = error.code ? `${error.code}: ` : '';
    const message = error.message || error.error_description || String(error);
    if (/row-level security|permission denied|42501/i.test(message)) {
      return `${code}${message}. Ошибка прав доступа / RLS Supabase.`;
    }
    return `${code}${message}`;
  }

  async function runAll() {
    runAllBtn.disabled = true;
    resetChecks();
    setSummary('', 'Проверяю подключения…');
    telegramInfoEl.innerHTML = '';

    try {
      const hasConfig = Boolean(config.supabase?.url && config.supabase?.anonKey && studentId);
      addCheck('1. config.js', hasConfig ? 'ok' : 'bad', hasConfig ? `Конфигурация загружена для ${studentId}.` : 'Нужны student.id, Supabase URL и anon key.');
      if (!hasConfig) throw new Error('Некорректный config.js');

      const sdkOk = Boolean(window.supabase?.createClient);
      addCheck('2. Supabase JS SDK', sdkOk ? 'ok' : 'bad', sdkOk ? 'Библиотека @supabase/supabase-js загружена.' : 'CDN Supabase JS не загрузился.');
      if (!sdkOk) throw new Error('Supabase SDK не загрузился');

      const client = getClient();
      const homeworkTable = config.supabase?.tables?.homework || 'homework_progress';
      const readResponse = await client
        .from(homeworkTable)
        .select('student_id,lesson_id,lesson_title,status,checked_at,submitted_at,updated_at,score_correct,score_total,score_percent,answers')
        .eq('student_id', studentId)
        .order('lesson_id', { ascending: false })
        .limit(100);

      if (readResponse.error) {
        const detail = formatError(readResponse.error);
        addCheck('3. Supabase Database / чтение homework_progress', 'bad', detail);
        lastReport.errors.push({ stage: 'database_read', error: detail });
      } else {
        lastReport.directRows = readResponse.data || [];
        addCheck('3. Supabase Database / чтение homework_progress', 'ok', `Доступ есть. Получено строк: ${(readResponse.data || []).length}.`);
      }

      if (!TELEGRAM_READY) {
        addCheck('4. Telegram / Edge Function', 'warn', 'Уведомления Лили отключены или не указана целевая группа. Проверка Telegram пропущена.');
        setSummary(readResponse.error ? 'bad' : 'warn', readResponse.error ? 'Ошибка подключения к Supabase.' : 'Основные настройки считаны. Telegram ещё не настроен, а облачную запись нужно проверить после публикации сайта.');
        return;
      }

      let edgeResult;
      try {
        edgeResult = await invokeDiagnostic({ kind: 'diagnostics_health', studentId });
      } catch (error) {
        edgeResult = { ok: false, status: 0, data: { error: error.message || String(error) } };
      }

      if (!edgeResult.ok || !COMPATIBLE_DIAGNOSTIC_VERSIONS.has(edgeResult.data?.diagnosticVersion)) {
        const detail = edgeResult.ok
          ? `Функция отвечает, но версия диагностики несовместима: ${edgeResult.data?.diagnosticVersion || 'не указана'}. Нужна актуализация обработчика.`
          : explainFunctionFailure(edgeResult);
        addCheck('4. Supabase Edge Function notify-telegram', 'bad', detail);
        lastReport.errors.push({ stage: 'edge_function', error: detail, response: edgeResult });
      } else {
        lastReport.health = edgeResult.data;
        addCheck('4. Supabase Edge Function notify-telegram', 'ok', `Совместимая установленная версия: ${edgeResult.data.diagnosticVersion}.`);

        const h = edgeResult.data;
        const browserRows = Array.isArray(lastReport.directRows) ? lastReport.directRows.filter((row) => !String(row.lesson_id || '').startsWith('__diagnostic_probe__')).length : 0;
        const serviceRows = Number(h.database?.homeworkRows || 0);
        const visibilityOk = !readResponse.error && browserRows === serviceRows;
        addCheck(
          '5. RLS / одинаковое чтение browser и service role',
          visibilityOk ? 'ok' : 'bad',
          visibilityOk
            ? `Браузер и сервер видят одинаковое количество рабочих строк ДЗ: ${serviceRows}.`
            : `Браузер видит ${browserRows}, Edge Function видит ${serviceRows}. Проверь SELECT policy для student_id=${studentId}.`
        );

        addCheck('6. Edge Function → Supabase (service role)', h.database?.ok ? 'ok' : 'bad', h.database?.ok ? `Сервер читает Supabase. Строк ДЗ: ${h.database.homeworkRows}.` : (h.database?.error || 'Сервер не может читать Supabase.'));
        addCheck('7. Получатель Telegram', h.recipient?.ok ? 'ok' : 'bad', h.recipient?.ok ? `Получатель найден и включён (${h.recipient.source || 'server'}).` : (h.recipient?.error || 'Получатель не найден/выключен.'));

        const recipientIsDatabase = h.recipient?.ok && h.recipient?.source === 'database';
        const threadMatches = EXPECTED_THREAD_ID === null
          ? (h.recipient?.threadId === null || h.recipient?.threadId === undefined)
          : Number(h.recipient?.threadId) === EXPECTED_THREAD_ID;
        const destinationOk = recipientIsDatabase && threadMatches && h.telegram?.chat?.ok;
        addCheck('8. Маршрут Telegram', destinationOk ? 'ok' : 'bad',
          !recipientIsDatabase ? 'Нет отдельного получателя Лили в базе: возможно использование запасной группы.'
          : !threadMatches ? `Сервер использует тему ${h.recipient?.threadId ?? 'NULL'}, ожидается ${EXPECTED_THREAD_ID ?? 'NULL'}.`
          : h.telegram?.chat?.ok ? 'Получатель взят из базы, бот видит чат. Точный chat_id проверяется в таблице telegram_recipients.'
          : 'Получатель взят из базы, но бот не имеет доступа к целевой группе.');
        addCheck('9. Telegram Bot API / бот', h.telegram?.bot?.ok ? 'ok' : 'bad', h.telegram?.bot?.ok ? `Telegram видит бота @${h.telegram.bot.username || 'без username'}.` : (h.telegram?.bot?.error || 'getMe завершился ошибкой.'));
        addCheck('10. Telegram Bot API / группа', h.telegram?.chat?.ok ? 'ok' : 'bad', h.telegram?.chat?.ok ? `Бот имеет доступ к целевому чату (${h.telegram.chat.type || 'chat'}).` : (h.telegram?.chat?.error || 'Бот не имеет доступа к целевому чату.'));

        const suspicious = Array.isArray(h.database?.suspiciousHomework) ? h.database.suspiciousHomework : [];
        addCheck(
          '11. Состояние сохранённых ДЗ',
          suspicious.length ? 'warn' : 'ok',
          suspicious.length ? `Есть записи с неожиданным status: ${suspicious.join(', ')}.` : 'Рабочие записи используют ожидаемые состояния checked/submitted.'
        );

        if (h.reportLog?.ok === false) {
          addCheck('12. Лог Telegram-отчётов', 'bad', h.reportLog.error || 'Не удалось прочитать homework_reports.');
        } else {
          const pending = Array.isArray(h.reportLog?.pendingOrFailed) ? h.reportLog.pendingOrFailed : [];
          addCheck(
            '12. Лог Telegram-отчётов',
            pending.length ? 'warn' : 'ok',
            pending.length ? `Есть неуспешные/незавершённые отчёты: ${pending.map((item) => `${item.lessonId} (${item.status})`).join(', ')}.` : 'Зависших или failed-отчётов среди последних записей нет.'
          );
        }

        const removed = Number(h.database?.staleDiagnosticProbesRemoved || 0);
        if (removed > 0) addCheck('13. Очистка диагностики', 'ok', `Удалено старых технических probe-записей: ${removed}.`);

        telegramInfoEl.innerHTML = '';
        addKV(telegramInfoEl, 'Edge version', h.diagnosticVersion || '—', true);
        addKV(telegramInfoEl, 'Recipient', h.recipient?.ok ? 'найден' : 'ошибка');
        addKV(telegramInfoEl, 'Ожидаемая группа', EXPECTED_CHAT_ID ?? '—', true);
        addKV(telegramInfoEl, 'Source', h.recipient?.source || '—', true);
        addKV(telegramInfoEl, 'Enabled', String(Boolean(h.recipient?.enabled)));
        addKV(telegramInfoEl, 'message_thread_id', h.recipient?.threadId ?? 'NULL', true);
        addKV(telegramInfoEl, 'Bot API', h.telegram?.bot?.ok ? 'OK' : 'ERROR');
        addKV(telegramInfoEl, 'Доступ к чату', h.telegram?.chat?.ok ? 'OK' : 'ERROR');
      }

      const bad = lastReport.checks.filter((item) => item.status === 'bad');
      const warn = lastReport.checks.filter((item) => item.status === 'warn');
      if (bad.length) {
        setSummary('bad', `Найдена проблема: ${bad[0].name}. Смотри первую красную строку выше.`);
      } else if (warn.length) {
        setSummary('warn', 'Основные подключения работают, но есть предупреждение по сохранённым данным или логам.');
      } else {
        setSummary('ok', 'Подключения проверены. Ниже автоматически проверяется сохранение прогресса; отправка Telegram проверяется отдельно.');
      }
    } catch (error) {
      const detail = formatError(error);
      addCheck('Проверка остановлена', 'bad', detail);
      lastReport.errors.push({ stage: 'fatal', error: detail });
      setSummary('bad', detail);
    } finally {
      lastReport.finishedAt = new Date().toISOString();
      rawEl.textContent = JSON.stringify(lastReport, null, 2);
      runAllBtn.disabled = false;
    }
  }

  async function bestEffortDeleteProbe(client, table, probeId) {
    try {
      await client.from(table).delete().eq('student_id', studentId).eq('lesson_id', probeId);
    } catch {}
  }

  async function testDatabaseWrite() {
    dbWriteBtn.disabled = true;
    dbWriteResultEl.innerHTML = '<div class="summary">Проверяю запись homework_progress…</div>';

    const client = getClient();
    const table = config.supabase?.tables?.homework || 'homework_progress';
    const probeId = `__diagnostic_probe__${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    try {
      const { error: insertError } = await client.from(table).insert({
        student_id: studentId,
        student_name: student.nameRu || student.nameEn || studentId,
        lesson_id: probeId,
        lesson_title: 'Diagnostics homework write probe',
        status: 'draft',
        answers: {},
        legacy_answers: null,
        migrated_from_legacy: false,
        score_correct: null,
        score_total: null,
        score_percent: null,
        checked_at: null,
        submitted_at: null,
        locked_at: null,
        report_status: 'not_sent',
        report_sent_at: null,
        report_error: null
      });

      if (insertError) throw new Error(`browser_draft_insert: ${formatError(insertError)}`);

      const probe = await invokeDiagnostic({
        kind: 'diagnostics_homework_probe',
        studentId,
        lessonId: probeId
      });

      if (!probe.ok || !probe.data?.ok) {
        throw new Error(probe.data?.error || explainFunctionFailure(probe));
      }

      dbWriteResultEl.innerHTML = '<div class="summary ok">✓ Путь homework_progress работает: browser draft → submitted_pending_report → submitted → cleanup. Реальные ДЗ не изменялись.</div>';
      lastReport.databaseWriteProbe = { ok: true, lessonId: probeId, stages: probe.data.stages || null };
    } catch (error) {
      const detail = formatError(error);
      dbWriteResultEl.innerHTML = `<div class="summary bad">✕ Ошибка пути homework_progress: ${esc(detail)}</div>`;
      lastReport.errors.push({ stage: 'database_write_probe', error: detail, lessonId: probeId });
      try { await invokeDiagnostic({ kind: 'diagnostics_cleanup_probe', studentId, lessonId: probeId }); } catch {}
      await bestEffortDeleteProbe(client, table, probeId);
    } finally {
      rawEl.textContent = JSON.stringify(lastReport, null, 2);
      dbWriteBtn.disabled = false;
    }
  }


  // A test uses unique, clearly non-production IDs and does not use app.js/localStorage.
  // Comparing reads from a *new* client confirms a round trip to the database.
  function createFreshClient() {
    if (!window.supabase?.createClient) throw new Error('Supabase JS SDK не загрузился');
    const url = String(config.supabase?.url || '').trim();
    const anonKey = String(config.supabase?.anonKey || '').trim();
    if (!url || !anonKey || studentId !== 'lili') throw new Error('Проверь student_id=lili и конфигурацию Supabase');
    return window.supabase.createClient(url, anonKey, {
      auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false }
    });
  }

  function probeToken() {
    // No normal lesson/topic/word ID can collide with this prefix.
    const suffix = typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID().replaceAll('-', '')
      : `${Date.now()}${Math.random().toString(36).slice(2)}`;
    return `__diagnostic_probe__lili_${suffix}`;
  }

  async function requireData(result, stage) {
    if (result.error) throw new Error(`${stage}: ${formatError(result.error)}`);
    return result.data;
  }

  function assertMatch(row, expected, stage) {
    if (!row) throw new Error(`${stage}: запись не найдена после сетевого чтения`);
    for (const [key, value] of Object.entries(expected)) {
      if (JSON.stringify(row[key]) !== JSON.stringify(value)) {
        throw new Error(`${stage}: ${key} отличается; ожидалось ${JSON.stringify(value)}, получено ${JSON.stringify(row[key])}`);
      }
    }
  }

  async function runPersistenceProbe(spec) {
    const writer = getClient();
    const reader = createFreshClient();
    const token = probeToken();
    const identity = { student_id: studentId, [spec.idColumn]: token };
    const filter = (query) => query.eq('student_id', studentId).eq(spec.idColumn, token);
    const keys = Object.keys({ ...spec.initial, ...spec.updated });
    const columns = [spec.idColumn, ...keys].join(',');
    const result = { table: spec.table, stages: [], cleaned: false };
    let failure = null;

    try {
      await requireData(await writer.from(spec.table).upsert({ ...identity, ...spec.initial }, { onConflict: `student_id,${spec.idColumn}` }), 'create/upsert');
      result.stages.push('create/upsert');

      let row = await requireData(await filter(reader.from(spec.table).select(columns)).maybeSingle(), 'read-after-create');
      assertMatch(row, spec.initial, 'read-after-create');
      result.stages.push('read-after-create/new-client');

      // Match the exact upsert strategy used in app.js when syncing progress.
      await requireData(await writer.from(spec.table).upsert({ ...identity, ...spec.initial, ...spec.updated }, { onConflict: `student_id,${spec.idColumn}` }), 'update/upsert');
      result.stages.push('update/upsert');

      row = await requireData(await filter(reader.from(spec.table).select(columns)).maybeSingle(), 'read-after-update');
      assertMatch(row, spec.updated, 'read-after-update');
      result.stages.push('read-after-update/new-client');
    } catch (error) {
      failure = error;
    } finally {
      // Always attempt cleanup; even if a validation step failed.
      try {
        await requireData(await filter(writer.from(spec.table).delete()), 'cleanup/delete');
        const left = await requireData(await filter(reader.from(spec.table).select(spec.idColumn)), 'cleanup/verify');
        if (left.length) throw new Error('cleanup/verify: служебная запись осталась в базе');
        result.cleaned = true;
        result.stages.push('cleanup/verified');
      } catch (cleanupError) {
        const part = `Не удалось полностью удалить временную запись (${spec.table}, ${token}): ${formatError(cleanupError)}`;
        failure = new Error(failure ? `${formatError(failure)}; ${part}` : part);
      }
    }

    if (failure) throw Object.assign(new Error(formatError(failure)), { probe: result });
    return result;
  }

  async function testProgressPersistence({ fromRunAll = false } = {}) {
    if (runningProgress) return;
    runningProgress = true;
    progressBtn.disabled = true;
    runAllBtn.disabled = true;
    progressResultEl.innerHTML = '<div class="summary">Проверяю сохранение прогресса во всех четырёх таблицах…</div>';
    const tables = config.supabase?.tables || {};
    const now = new Date().toISOString();
    const specs = [
      {
        label: 'Homework · черновик ответов', name: 'homework',
        table: tables.homework || 'homework_progress', idColumn: 'lesson_id',
        initial: { status: 'draft', lesson_title: 'Temporary diagnostics (not an assignment)', answers: { diagnostic: 'draft-v1' }, score_correct: null, score_total: null, score_percent: null },
        updated: { answers: { diagnostic: 'draft-v2', checked: true }, score_correct: 1, score_total: 2, score_percent: 50 }
      },
      {
        label: 'Vocabulary · изученные слова', name: 'vocabularyWords',
        table: tables.vocabulary || 'vocabulary_progress', idColumn: 'word_key',
        initial: { word_id: 'diagnostic-only', en: 'Temporary diagnostic', ru: 'Временная проверка', status: 'difficult' },
        updated: { status: 'known', learned_at: now }
      },
      {
        label: 'Vocabulary · результаты тестов', name: 'vocabularyTests',
        table: tables.vocabularyTopics || 'vocabulary_topic_progress', idColumn: 'topic_id',
        initial: { tests: [] },
        updated: { tests: [{ id: 'diagnostics-only', score: 1, total: 1 }] }
      },
      {
        label: 'Grammar · попытки и результаты', name: 'grammar',
        table: tables.grammar || 'grammar_progress', idColumn: 'topic_id',
        initial: { passed: false, attempts: 1, best_score: 30, answers: { diagnostic: 'before' } },
        updated: { passed: true, attempts: 2, best_score: 100, answers: { diagnostic: 'after' } }
      }
    ];
    const out = { startedAt: new Date().toISOString(), studentId, categories: {}, finishedAt: null };
    progressResultEl.innerHTML = '';
    try {
      for (const spec of specs) {
        const started = Date.now();
        try {
          const detail = await runPersistenceProbe(spec);
          out.categories[spec.name] = { ok: true, table: detail.table, stages: detail.stages, cleaned: detail.cleaned };
          progressResultEl.insertAdjacentHTML('beforeend', `<div class="check ok"><div class="ico">✓</div><div><div class="name">${esc(spec.label)}</div><div class="detail">Создание, чтение, обновление, повторное чтение и удаление прошли успешно (${Date.now() - started} мс).</div></div></div>`);
        } catch (error) {
          const message = formatError(error);
          out.categories[spec.name] = { ok: false, table: spec.table, error: message, stages: error.probe?.stages || [], cleaned: error.probe?.cleaned ?? null };
          lastReport.errors.push({ stage: `progress_${spec.name}`, error: message });
          progressResultEl.insertAdjacentHTML('beforeend', `<div class="check bad"><div class="ico">!</div><div><div class="name">${esc(spec.label)}</div><div class="detail">${esc(message)}</div></div></div>`);
        }
      }
      out.ok = Object.values(out.categories).every((item) => item.ok);
      const statuses = Object.entries(out.categories).map(([k, v]) => `${k}:${v.ok ? 'ok' : 'bad'}`).join(', ');
      progressResultEl.insertAdjacentHTML('beforeend', `<div class="summary ${out.ok ? 'ok' : 'bad'}">${out.ok ? '✓ Все четыре проверки сохранения прошли успешно. Временные записи удалены.' : 'Есть ошибки записи или удаления. Подробности выше и в отчёте.'}</div>`);
      if (fromRunAll) {
        addCheck('Сохранение Homework / Vocabulary / Grammar', out.ok ? 'ok' : 'bad', statuses);
        const anyBad = lastReport.checks.some((item) => item.status === 'bad');
        const anyWarn = lastReport.checks.some((item) => item.status === 'warn');
        if (anyBad) setSummary('bad', 'Есть неисправности: смотри красные результаты и технический отчёт ниже.');
        else if (anyWarn) setSummary('warn', 'Сохранение прогресса работает; есть предупреждения в проверке подключений.');
        else setSummary('ok', 'Подключения и сохранение Homework, Vocabulary, Grammar работают. Telegram-отправка проверяется отдельно.');
      }
    } finally {
      out.finishedAt = new Date().toISOString();
      lastReport.progressPersistence = out;
      lastReport.finishedAt = new Date().toISOString();
      rawEl.textContent = JSON.stringify(lastReport, null, 2);
      progressBtn.disabled = false;
      runAllBtn.disabled = false;
      runningProgress = false;
    }
  }

  async function sendTestReport() {
    if (!TELEGRAM_READY) return;
    sendBtn.disabled = true;
    sendResultEl.innerHTML = '<div class="summary">Отправляю тестовое Telegram-сообщение…</div>';
    try {
      const result = await invokeDiagnostic({ kind: 'diagnostics_send_report', studentId, pageUrl: window.location.href });
      if (!result.ok || !result.data?.ok) {
        const message = result.data?.error || explainFunctionFailure(result);
        const retry = result.data?.retryAfterSeconds ? ` Повтори через ${result.data.retryAfterSeconds} сек.` : '';
        throw new Error(`${message}${retry}`);
      }
      if (result.data.skipped) {
        const retry = Number(result.data.retryAfterSeconds || 30);
        sendResultEl.innerHTML = `<div class="summary warn">Тест уже отправлялся совсем недавно. Повтори примерно через ${retry} сек.</div>`;
      } else {
        sendResultEl.innerHTML = `<div class="summary ok">✓ Telegram принял тестовое сообщение. message_id=${esc(result.data.telegramMessageId)}; thread_id=${esc(result.data.threadId ?? 'NULL')}.</div>`;
      }
      lastReport.telegramSendProbe = result.data || null;
    } catch (error) {
      const detail = formatError(error);
      sendResultEl.innerHTML = `<div class="summary bad">✕ Тестовое сообщение не отправлено: ${esc(detail)}</div>`;
      lastReport.errors.push({ stage: 'telegram_test_send', error: detail });
    } finally {
      rawEl.textContent = JSON.stringify(lastReport, null, 2);
      sendBtn.disabled = false;
    }
  }

  async function copyReport() {
    const text = rawEl.textContent || '';
    try {
      await navigator.clipboard.writeText(text);
      const button = document.getElementById('copy-report');
      const old = button.textContent;
      button.textContent = 'Скопировано ✓';
      setTimeout(() => { button.textContent = old; }, 1300);
    } catch {
      window.prompt('Скопируй отчёт вручную:', text);
    }
  }

  document.getElementById('run-all').addEventListener('click', async () => { await runAll(); await testProgressPersistence({ fromRunAll: true }); });
  document.getElementById('test-progress').addEventListener('click', () => testProgressPersistence());
  document.getElementById('test-db-write').addEventListener('click', testDatabaseWrite);
  document.getElementById('send-test-report').addEventListener('click', sendTestReport);
  document.getElementById('copy-report').addEventListener('click', copyReport);
  document.getElementById('reload-page').addEventListener('click', () => window.location.reload());
  renderConfig();
})();

