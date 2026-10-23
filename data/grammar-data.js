window.GRAMMAR_DATA = [
  {
    "id": "grammar-questions-word-order",
    "order": 1,
    "title": "Word order in questions",
    "level": "A2.1",
    "status": "available",
    "page": "grammar-topic.html?id=grammar-questions-word-order",
    "lockOnPass": true,
    "revealAnswersOnError": false,
    "studyGuide": {
      "eyebrow": "English File A2 · Unit 1A",
      "intro": "Как правильно строить вопросы в Present Simple, Past Simple, с be и can.",
      "promise": "После объяснения — 4 разных упражнения, всего 16 заданий. Тема пройдена только при результате 16/16.",
      "sections": [
        {
          "id": "ef-1a-grammar-1",
          "number": "01",
          "kicker": "Правило",
          "title": "Как устроен вопрос",
          "intro": "В обычном вопросе порядок слов отличается от утверждения.",
          "blocks": [
            {
              "type": "syntax",
              "title": "Вопрос в Present Simple",
              "tokens": [
                {
                  "text": "Where",
                  "role": "вопросительное слово",
                  "tone": "neutral"
                },
                {
                  "text": "do",
                  "role": "вспомогательный глагол",
                  "tone": "verb"
                },
                {
                  "text": "you",
                  "role": "подлежащее",
                  "tone": "subject"
                },
                {
                  "text": "live?",
                  "role": "основной глагол",
                  "tone": "object"
                }
              ],
              "translation": "Где ты живёшь?",
              "note": "Если вопросительное слово не требуется, начинаем с вспомогательного глагола: Do you live here?"
            },
            {
              "type": "examples",
              "title": "Утверждение → вопрос",
              "rows": [
                {
                  "en": "You live in Ufa. → Do you live in Ufa?",
                  "ru": "Ты живёшь в Уфе. → Ты живёшь в Уфе?"
                },
                {
                  "en": "She likes music. → Does she like music?",
                  "ru": "Она любит музыку. → Она любит музыку?"
                }
              ]
            }
          ]
        },
        {
          "id": "ef-1a-grammar-2",
          "number": "02",
          "kicker": "Правило",
          "title": "Present Simple: do / does",
          "intro": "Для привычек, фактов и регулярных действий. После do/does глагол всегда в начальной форме.",
          "blocks": [
            {
              "type": "table",
              "title": "Форма вопросов",
              "headers": [
                "Подлежащее",
                "Общий вопрос",
                "Специальный вопрос"
              ],
              "rows": [
                [
                  "I / you / we / they",
                  "Do you work?",
                  "Where do you work?"
                ],
                [
                  "he / she / it",
                  "Does she work?",
                  "Where does she work?"
                ]
              ]
            },
            {
              "type": "contrast",
              "title": "Вспомогательный глагол и отрицание",
              "left": {
                "label": "Утверждение",
                "pattern": "She speaks English.",
                "meaning": "Глагол с -s/-es при he/she/it",
                "examples": [
                  "He works here."
                ]
              },
              "right": {
                "label": "Вопрос / отрицание",
                "pattern": "Does she speak English?",
                "meaning": "-s исчезает после does; в отрицании: She doesn’t speak English.",
                "examples": [
                  "Does he work here?"
                ]
              }
            },
            {
              "type": "note",
              "title": "Краткие ответы",
              "text": "Do you ...? → Yes, I do. / No, I don’t. Does she ...? → Yes, she does. / No, she doesn’t.",
              "tone": "remember"
            }
          ]
        },
        {
          "id": "ef-1a-grammar-3",
          "number": "03",
          "kicker": "Правило",
          "title": "Past Simple: did",
          "intro": "В вопросах о завершённых событиях используем did перед подлежащим и начальную форму смыслового глагола.",
          "blocks": [
            {
              "type": "syntax",
              "title": "Вопрос в Past Simple",
              "tokens": [
                {
                  "text": "Where",
                  "role": "вопросительное слово"
                },
                {
                  "text": "did",
                  "role": "вспомогательный глагол",
                  "tone": "verb"
                },
                {
                  "text": "you",
                  "role": "подлежащее",
                  "tone": "subject"
                },
                {
                  "text": "go?",
                  "role": "основной глагол",
                  "tone": "object"
                }
              ],
              "translation": "Куда ты ходила?",
              "note": "Не говори Did you went? — после did нужна форма go."
            },
            {
              "type": "examples",
              "rows": [
                {
                  "en": "You went out. → Did you go out?",
                  "ru": "Ты выходила. → Ты выходила?"
                },
                {
                  "en": "I didn’t see it.",
                  "ru": "Я этого не видела."
                },
                {
                  "en": "Did you see it? — Yes, I did. / No, I didn’t.",
                  "ru": "Ты это видела? — Да. / Нет."
                }
              ]
            }
          ]
        },
        {
          "id": "ef-1a-grammar-4",
          "number": "04",
          "kicker": "Правило",
          "title": "Вопросы с be: am / is / are / was / were",
          "intro": "С глаголом be не нужны do, does или did. Ставим be перед подлежащим.",
          "blocks": [
            {
              "type": "table",
              "title": "Время и формы",
              "headers": [
                "Время",
                "Утверждение",
                "Вопрос",
                "Отрицание"
              ],
              "rows": [
                [
                  "Present",
                  "You are a student.",
                  "Are you a student?",
                  "You aren’t a student."
                ],
                [
                  "Present",
                  "She is here.",
                  "Is she here?",
                  "She isn’t here."
                ],
                [
                  "Past",
                  "You were born in 2000.",
                  "Where were you born?",
                  "You weren’t born here."
                ],
                [
                  "Past",
                  "He was at home.",
                  "Was he at home?",
                  "He wasn’t at home."
                ]
              ]
            },
            {
              "type": "note",
              "title": "Краткие ответы",
              "text": "Are you...? → Yes, I am. / No, I’m not. Was he...? → Yes, he was. / No, he wasn’t. Were they...? → Yes, they were. / No, they weren’t.",
              "tone": "remember"
            }
          ]
        },
        {
          "id": "ef-1a-grammar-5",
          "number": "05",
          "kicker": "Правило",
          "title": "Модальный глагол can",
          "intro": "Can уже стоит перед подлежащим: никаких do/does/did.",
          "blocks": [
            {
              "type": "contrast",
              "title": "Сравнение",
              "left": {
                "label": "Правильно",
                "pattern": "Can I help you?",
                "meaning": "can + подлежащее + инфинитив без to",
                "examples": [
                  "She can swim.",
                  "She can’t swim.",
                  "Can she swim? — Yes, she can."
                ]
              },
              "right": {
                "label": "Неправильно",
                "pattern": "Do you can swim?",
                "meaning": "Вопрос не требует do.",
                "examples": [
                  "Can you swim? — No, I can’t."
                ]
              }
            },
            {
              "type": "note",
              "title": "Сокращение и отрицание",
              "text": "can not обычно пишут как cannot; сокращённая форма — can’t. Не добавляй -s к can (he can, не he cans).",
              "tone": "important"
            }
          ]
        },
        {
          "id": "ef-1a-grammar-6",
          "number": "06",
          "kicker": "Правило",
          "title": "Специальные вопросы и типичные ошибки",
          "intro": "What, Where, When, How often, What kind of... обычно стоят в начале вопроса.",
          "blocks": [
            {
              "type": "table",
              "title": "Формула по типам",
              "headers": [
                "О чём спросить",
                "Формула",
                "Пример"
              ],
              "rows": [
                [
                  "Привычки",
                  "Wh + do/does + subject + verb",
                  "What do you do at the weekend?"
                ],
                [
                  "Прошлое",
                  "Wh + did + subject + verb",
                  "Where did you go last Saturday?"
                ],
                [
                  "Место/состояние",
                  "Wh + be + subject",
                  "Where are you from?"
                ],
                [
                  "Возможность",
                  "Wh + can + subject + verb",
                  "What can you do?"
                ]
              ]
            },
            {
              "type": "examples",
              "title": "Ошибки и исправления",
              "rows": [
                {
                  "en": "Where you live? ✗ → Where do you live? ✓",
                  "ru": "В Present Simple обычно нужен do/does."
                },
                {
                  "en": "Did she learnt English? ✗ → Did she learn English? ✓",
                  "ru": "После did глагол без окончания прошедшего времени."
                },
                {
                  "en": "Does he speaks English? ✗ → Does he speak English? ✓",
                  "ru": "После does глагол без -s."
                },
                {
                  "en": "Where you were born? ✗ → Where were you born? ✓",
                  "ru": "С were меняем порядок без did."
                }
              ]
            }
          ]
        },
        {
          "id": "ef-1a-grammar-7",
          "number": "07",
          "kicker": "Правило",
          "title": "Как выбрать правильную структуру",
          "intro": "Сначала определи основной глагол и время.",
          "blocks": [
            {
              "type": "decision",
              "title": "Проверка перед вопросом",
              "steps": [
                {
                  "if": "Основной глагол — be?",
                  "then": "Поставь am/is/are/was/were перед подлежащим.",
                  "example": "Were you born here?"
                },
                {
                  "if": "Есть can?",
                  "then": "Поставь can перед подлежащим.",
                  "example": "Can I help you?"
                },
                {
                  "if": "Present Simple с обычным глаголом?",
                  "then": "Используй do или does.",
                  "example": "Does your sister have a job?"
                },
                {
                  "if": "Past Simple с обычным глаголом?",
                  "then": "Используй did и начальную форму.",
                  "example": "Did you watch TV?"
                }
              ]
            },
            {
              "type": "note",
              "title": "Проверка смысла",
              "text": "Короткий ответ часто показывает вспомогательный глагол: Do you...? — Yes, I do. Did you...? — No, I didn’t. Для Who как подлежащего (Who lives here?) do/does обычно не нужен.",
              "tone": "important"
            }
          ]
        }
      ]
    },
    "exercises": [
      {
        "type": "exercise",
        "id": "gram-1",
        "title": "1. Choose the correct auxiliary",
        "difficulty": "Easy",
        "instructions": "Choose the correct option.",
        "hideAnswersOnError": true,
        "items": [
          {
            "id": "1",
            "number": 1,
            "input": "single",
            "prompt": "___ you live in a flat?",
            "options": [
              "Do",
              "Does",
              "Did"
            ],
            "answer": 0
          },
          {
            "id": "2",
            "number": 2,
            "input": "single",
            "prompt": "___ your sister speak English?",
            "options": [
              "Do",
              "Does",
              "Can"
            ],
            "answer": 1
          },
          {
            "id": "3",
            "number": 3,
            "input": "single",
            "prompt": "___ you go out last night?",
            "options": [
              "Do",
              "Does",
              "Did"
            ],
            "answer": 2
          },
          {
            "id": "4",
            "number": 4,
            "input": "single",
            "prompt": "___ he a student?",
            "options": [
              "Is",
              "Does",
              "Do"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "exercise",
        "id": "gram-2",
        "title": "2. Complete the questions",
        "difficulty": "Medium",
        "instructions": "Write the missing word.",
        "hideAnswersOnError": true,
        "items": [
          {
            "id": "1",
            "number": 1,
            "input": "gaps",
            "answers": [
              "does"
            ],
            "segments": [
              "Where ",
              " she work?"
            ],
            "answer": "does"
          },
          {
            "id": "2",
            "number": 2,
            "input": "gaps",
            "answers": [
              "did"
            ],
            "segments": [
              "What ",
              " you watch last night?"
            ],
            "answer": "did"
          },
          {
            "id": "3",
            "number": 3,
            "input": "gaps",
            "answers": [
              "were"
            ],
            "segments": [
              "Where ",
              " you born?"
            ],
            "answer": "were"
          },
          {
            "id": "4",
            "number": 4,
            "input": "gaps",
            "answers": [
              "can"
            ],
            "segments": [
              "",
              " she drive?"
            ],
            "answer": "can"
          }
        ]
      },
      {
        "type": "exercise",
        "id": "gram-3",
        "title": "3. Correct the word order",
        "difficulty": "Challenging",
        "instructions": "Rewrite each incorrect question correctly.",
        "hideAnswersOnError": true,
        "items": [
          {
            "id": "1",
            "number": 1,
            "input": "text",
            "prompt": "Does she has a pet?",
            "answer": "Does she have a pet?"
          },
          {
            "id": "2",
            "number": 2,
            "input": "text",
            "prompt": "Did you saw him?",
            "answer": "Did you see him?"
          },
          {
            "id": "3",
            "number": 3,
            "input": "text",
            "prompt": "Where you are from?",
            "answer": "Where are you from?"
          },
          {
            "id": "4",
            "number": 4,
            "input": "text",
            "prompt": "Does he can speak English?",
            "answer": "Can he speak English?"
          }
        ]
      },
      {
        "type": "exercise",
        "id": "gram-4",
        "title": "4. Make a question from a sentence",
        "difficulty": "Advanced",
        "instructions": "Write the full question using the cue.",
        "hideAnswersOnError": true,
        "items": [
          {
            "id": "1",
            "number": 1,
            "input": "text",
            "prompt": "Your boyfriend works in a school. (Where ...?)",
            "answer": "Where does your boyfriend work?"
          },
          {
            "id": "2",
            "number": 2,
            "input": "text",
            "prompt": "You played tennis last weekend. (What ...?)",
            "answer": "What did you do last weekend?"
          },
          {
            "id": "3",
            "number": 3,
            "input": "text",
            "prompt": "You get up at seven. (What time ...?)",
            "answer": "What time do you get up?"
          },
          {
            "id": "4",
            "number": 4,
            "input": "text",
            "prompt": "She was at home yesterday. (Yes / No question)",
            "answer": "Was she at home yesterday?"
          }
        ]
      }
    ]
  }
];
