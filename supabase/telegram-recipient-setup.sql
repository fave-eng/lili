-- Lili (student_id = lili), Telegram group topic from https://t.me/c/3974197904/5
-- This is idempotent and changes no recipients except lili.
-- NOT APPLIED. Run once in the Supabase SQL editor to enable notifications.
INSERT INTO public.telegram_recipients
  (student_id, chat_id, message_thread_id, enabled)
VALUES
  ('lili', -1003974197904, 5, true)
ON CONFLICT (student_id)
DO UPDATE SET
  chat_id = EXCLUDED.chat_id,
  message_thread_id = EXCLUDED.message_thread_id,
  enabled = EXCLUDED.enabled,
  updated_at = now();

-- Check this row without exposing other students:
SELECT student_id, chat_id, message_thread_id, enabled
FROM public.telegram_recipients
WHERE student_id = 'lili';
