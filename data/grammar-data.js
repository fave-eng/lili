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
      "intro": "Чем отличаются Are you?, Can you?, Do you?, Did you? и специальные вопросы — с понятными схемами, переводами и сопоставлениями.",
      "promise": "После объяснения — 4 разных упражнения, всего 16 заданий. Тема пройдена только при результате 16/16.",
      "sections": [
        {
          "id": "ef-1a-grammar-compare",
          "number": "01",
          "kicker": "Сравнение",
          "title": "Are you? Can you? Do you? Did you? — что выбрать и почему",
          "intro": "В русском мы часто меняем только интонацию. В английском тип вопроса показывает, говорим ли мы о состоянии, возможности, регулярном действии или событии в прошлом. Сначала определяем смысл, затем выбираем первое слово.",
          "blocks": [
            {
              "type": "table",
              "title": "Четыре разных вопроса — четыре смысла",
              "headers": [
                "Начало",
                "Когда используем",
                "Общий вопрос",
                "Специальный вопрос"
              ],
              "rows": [
                [
                  "Are you…?",
                  "be: кто ты / где ты / какой ты сейчас",
                  "Are you tired? — Ты устала?",
                  "Where are you from? — Откуда ты?"
                ],
                [
                  "Can you…?",
                  "can: умение, возможность, просьба",
                  "Can you swim? — Ты умеешь плавать?",
                  "What can you do? — Что ты умеешь?"
                ],
                [
                  "Do you…?",
                  "Present Simple: привычка, факт, регулярное действие",
                  "Do you work? — Ты работаешь?",
                  "Where do you work? — Где ты работаешь?"
                ],
                [
                  "Did you…?",
                  "Past Simple: завершённое действие в прошлом",
                  "Did you work yesterday? — Ты работала вчера?",
                  "Where did you work last year? — Где ты работала в прошлом году?"
                ]
              ]
            },
            {
              "type": "contrast",
              "title": "Сравни смысл — похожие слова, разные вопросы",
              "left": {
                "label": "Be — состояние / местонахождение",
                "pattern": "Are you at home?",
                "meaning": "Ты дома сейчас? Are уже форма глагола be, поэтому do здесь не нужен.",
                "examples": [
                  "Are you a student?",
                  "Are you happy?",
                  "Where are you?"
                ]
              },
              "right": {
                "label": "Do — действие / привычка",
                "pattern": "Do you stay at home on Sundays?",
                "meaning": "Ты остаёшься дома по воскресеньям? Есть основной глагол stay, поэтому в Present Simple нужен do.",
                "examples": [
                  "Do you study English?",
                  "Do you live here?",
                  "Where do you study?"
                ]
              }
            },
            {
              "type": "examples",
              "title": "Как меняется вопрос со временем и значением",
              "rows": [
                {
                  "en": "Can you drive? — Yes, I can. / No, I can’t.",
                  "ru": "Умение водить машину; не спрашиваем, водила ли ты вчера."
                },
                {
                  "en": "Do you drive to work? — Yes, I do. / No, I don’t.",
                  "ru": "Привычка: ездишь ли ты на работу на машине."
                },
                {
                  "en": "Did you drive yesterday? — Yes, I did. / No, I didn’t.",
                  "ru": "Одно действие вчера; после did используется drive, не drove."
                },
                {
                  "en": "Are you driving now? — Yes, I am. / No, I’m not.",
                  "ru": "Действие именно сейчас — Present Continuous: am/is/are + -ing; не путай с Are you + прилагательное."
                }
              ]
            },
            {
              "type": "note",
              "title": "Главное правило",
              "text": "Вопрос с be: Are you…? Вопрос с can: Can you + глагол? Вопрос о привычке: Do you + глагол? Вопрос о прошлом: Did you + глагол? В одном обычном вопросе не смешиваем «Are you do…?» или «Do you can…?».",
              "tone": "remember"
            }
          ]
        },
        {
          "id": "ef-1a-grammar-1",
          "number": "02",
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
          "number": "03",
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
          "number": "04",
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
          "number": "05",
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
          "number": "06",
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
          "number": "07",
          "kicker": "Правило",
          "title": "Специальные вопросы и типичные ошибки",
          "intro": "Общий вопрос (Yes/No question) начинается с am/is/are, can, do/does или did, и ответом может быть Yes или No. Специальный вопрос (Wh-question) начинается с вопросительного слова и просит конкретную информацию.",
          "blocks": [
            {
              "type": "table",
              "title": "Сравнение общего и специального вопроса",
              "headers": [
                "Тип",
                "Схема",
                "Примеры"
              ],
              "rows": [
                [
                  "Общий — с be",
                  "Are + you + …?",
                  "Are you hungry? — Yes, I am. / No, I’m not."
                ],
                [
                  "Специальный — с be",
                  "Where + are + you + …?",
                  "Where are you from? — I’m from Russia."
                ],
                [
                  "Общий — с can",
                  "Can + you + verb?",
                  "Can you speak Italian? — Yes, I can."
                ],
                [
                  "Специальный — с can",
                  "What + can + you + verb?",
                  "What languages can you speak? — English and Russian."
                ],
                [
                  "Общий — с do/does",
                  "Do/Does + subject + verb?",
                  "Do you work? — Yes, I do."
                ],
                [
                  "Специальный — с do/does",
                  "Where + do/does + subject + verb?",
                  "Where do you work? — At a school."
                ],
                [
                  "Общий — с did",
                  "Did + subject + verb?",
                  "Did you go out? — Yes, I did."
                ],
                [
                  "Специальный — с did",
                  "When + did + subject + verb?",
                  "When did you go out? — Last Saturday."
                ]
              ]
            },
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
            },
            {
              "type": "examples",
              "title": "Как спросить о разных деталях",
              "rows": [
                {
                  "en": "Who are you? / Where are you? / How old are you?",
                  "ru": "Кто? Где? Сколько лет? — используем be."
                },
                {
                  "en": "What do you do? / Where do you live? / How often do you go out?",
                  "ru": "Работа, место проживания и частота привычных действий — do/does."
                },
                {
                  "en": "What did you do last night? / Where did you go?",
                  "ru": "Что ты делала вчера вечером? Куда ходила? — did + глагол в начальной форме."
                },
                {
                  "en": "What can you cook? / How well can you swim?",
                  "ru": "Какие блюда ты умеешь готовить? Насколько хорошо плаваешь? — can + глагол."
                }
              ]
            },
            {
              "type": "note",
              "title": "Важный особый случай: Who…? — вопрос к подлежащему",
              "text": "Если Who или What сами обозначают того, кто выполняет действие, в обычном вопросе часто не нужны do/does/did: Who called you? — Кто тебе звонил? (но: Who did you call? — Кому ты звонила?). На уровне A2 сначала запомни стандартные схемы в таблице выше.",
              "tone": "important"
            }
          ]
        },
        {
          "id": "ef-1a-grammar-7",
          "number": "08",
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
            },
            {
              "type": "note",
              "title": "Проверка перед ответом",
              "text": "1) Вопрос о состоянии/месте/профессии? Выбирай be. 2) О возможности/умении? Can. 3) Об обычном действии? Do/Does + глагол. 4) О завершённом действии? Did + глагол. 5) Нужна конкретная информация? Добавь What, Where, When, How often и т. п. в начало.",
              "tone": "remember"
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
