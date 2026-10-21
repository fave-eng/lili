# Lili · English Space (A2.1)

Full initial site skeleton derived from Elina's site. All student-specific lesson, grammar, vocabulary and knowledge materials have been cleared.

## Current contents
- Homework: 0 (there is no lesson-1.json yet)
- Vocabulary: 0 topics, 0 words
- Grammar: 0 topics
- Knowledge Base: empty page
- Audio/images: no old student's media
- Student ID: `lili`; level: `A2.1`
- Telegram topic: https://t.me/c/3974197904/5 (`chat_id=-1003974197904`, `message_thread_id=5`)

## Installation
1. Upload *contents of `lili/`* to a separate GitHub Pages repository/site (not over Elina's files).
2. Confirm the same shared Supabase tables and Edge Function are available. The site uses the existing public anon key and per-student data isolation by `student_id`.
3. In Supabase SQL Editor run `supabase/telegram-recipient-setup.sql` to register Lili's Telegram destination. **The ZIP alone does not apply database settings or send messages.**
4. Open `diagnostics.html`, run all checks, then use the separate Telegram test button. The bot must be in that Telegram group with permission to send messages.
5. For Github Actions notifications configure `NOTIFY_WEBHOOK_SECRET` as a repository secret and publish under GitHub Pages.
6. When ready for first homework, create `data/lessons/lesson-1.json` from `data/lessons/lesson-template.json`; add topics in `data/vocabulary-data.js` and `data/grammar-data.js` as required.

Do not use the generic lesson template as an active homework assignment. Do not upload files into the other student's site.
