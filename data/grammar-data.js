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
  },
  {
    "id": "grammar-present-simple-1b",
    "order": 2,
    "title": "Present Simple · statements, negatives and questions",
    "level": "A2.1",
    "status": "available",
    "page": "grammar-topic.html?id=grammar-present-simple-1b",
    "lockOnPass": true,
    "revealAnswersOnError": false,
    "studyGuide": {
      "eyebrow": "English File A2 · Unit 1B",
      "intro": "Present Simple для привычек и фактов: утверждения, отрицания, вопросы, наречия частотности, окончания -s/-es и их произношение.",
      "promise": "После объяснения 4 разных упражнения по 4 задания. Тема засчитывается только при 16/16.",
      "sections": [
        {
          "id": "ef-1b-gram-1",
          "number": "01",
          "kicker": "Значение",
          "title": "Когда нужен Present Simple",
          "intro": "Present Simple используют для привычек, распорядка, фактов, регулярных действий и устойчивых состояний — не только для того, что происходит прямо сейчас.",
          "blocks": [
            {
              "type": "table",
              "title": "Подсказки контекста",
              "headers": [
                "Когда",
                "Пример",
                "Перевод"
              ],
              "rows": [
                [
                  "Привычка",
                  "I go out at weekends.",
                  "Я хожу куда-нибудь по выходным."
                ],
                [
                  "Факт / работа",
                  "Jamie works as a vet.",
                  "Джейми работает ветеринаром."
                ],
                [
                  "Постоянное отношение",
                  "She likes music.",
                  "Ей нравится музыка."
                ],
                [
                  "Регулярное действие",
                  "They play tennis on Saturdays.",
                  "Они играют в теннис по субботам."
                ]
              ]
            },
            {
              "type": "contrast",
              "title": "Сейчас ≠ обычно",
              "left": {
                "label": "Present Simple",
                "pattern": "I work every day.",
                "meaning": "Обычное действие, повторяющееся в жизни.",
                "examples": [
                  "She lives in a flat.",
                  "We often meet our friends."
                ]
              },
              "right": {
                "label": "Present Continuous",
                "pattern": "I am working now.",
                "meaning": "Действие в данный момент. Контраст для понимания; отдельную тему изучим позже.",
                "examples": [
                  "She is studying right now."
                ]
              }
            },
            {
              "type": "note",
              "title": "Что важно",
              "text": "Слова always / usually / often / sometimes / never часто встречаются с Present Simple, но одно наречие не определяет время автоматически.",
              "tone": "remember"
            }
          ]
        },
        {
          "id": "ef-1b-gram-2",
          "number": "02",
          "kicker": "Образование",
          "title": "Утверждение: I work / she works",
          "intro": "В Present Simple две модели: I / you / we / they + начальная форма глагола и he / she / it + глагол с -s или -es.",
          "blocks": [
            {
              "type": "table",
              "title": "Положительная форма",
              "headers": [
                "Подлежащее",
                "Формула",
                "Пример"
              ],
              "rows": [
                [
                  "I / you / we / they",
                  "subject + verb",
                  "They live together. — Они живут вместе."
                ],
                [
                  "he / she / it",
                  "subject + verb-s/-es",
                  "He watches TV. — Он смотрит телевизор."
                ]
              ]
            },
            {
              "type": "table",
              "title": "Правописание he/she/it",
              "headers": [
                "Случай",
                "Изменение",
                "Пример"
              ],
              "rows": [
                [
                  "Обычно",
                  "+ s",
                  "live → lives, like → likes"
                ],
                [
                  "-ch, -sh, -ss, -x, -o",
                  "+ es",
                  "watch → watches, go → goes"
                ],
                [
                  "Согласная + y",
                  "y → ies",
                  "study → studies"
                ],
                [
                  "Гласная + y",
                  "+ s",
                  "play → plays"
                ],
                [
                  "Нерегулярно",
                  "have → has",
                  "She has a brother."
                ]
              ]
            },
            {
              "type": "examples",
              "title": "Сравнение",
              "rows": [
                {
                  "en": "I study music. — She studies music.",
                  "ru": "Я изучаю музыку. — Она изучает музыку."
                },
                {
                  "en": "They work in a school. — He works in a school.",
                  "ru": "Они работают в школе. — Он работает в школе."
                }
              ]
            },
            {
              "type": "note",
              "title": "Не добавляй -s дважды",
              "text": "He watches TV. — правильно. He watch TV. — неверно. Does he watch TV? — после does суффикс -s исчезает.",
              "tone": "remember"
            }
          ]
        },
        {
          "id": "ef-1b-gram-3",
          "number": "03",
          "kicker": "Форма и смысл",
          "title": "Отрицание: don’t / doesn’t",
          "intro": "Чтобы сказать, что действие обычно не происходит, используем do not (don’t) или does not (doesn’t) + начальную форму основного глагола.",
          "blocks": [
            {
              "type": "table",
              "title": "Отрицательная форма",
              "headers": [
                "Кто?",
                "Схема",
                "Пример"
              ],
              "rows": [
                [
                  "I / you / we / they",
                  "do not / don’t + verb",
                  "I don’t see him often. — Я нечасто его вижу."
                ],
                [
                  "he / she / it",
                  "does not / doesn’t + verb",
                  "She doesn’t play tennis. — Она не играет в теннис."
                ]
              ]
            },
            {
              "type": "examples",
              "title": "Обрати внимание",
              "rows": [
                {
                  "en": "It doesn’t often rain in summer.",
                  "ru": "Летом дождь идёт нечасто."
                },
                {
                  "en": "He doesn’t like being in a group.",
                  "ru": "Ему не нравится находиться в группе."
                }
              ]
            },
            {
              "type": "note",
              "title": "Типичная ошибка",
              "text": "He doesn’t likes parties — неверно. Правильно: He doesn’t like parties. does уже обозначает 3-е лицо единственного числа.",
              "tone": "remember"
            }
          ]
        },
        {
          "id": "ef-1b-gram-4",
          "number": "04",
          "kicker": "Порядок слов",
          "title": "Общие и специальные вопросы",
          "intro": "У общего вопроса ответ часто Yes / No. Специальный вопрос начинается с вопросительного слова (What, Where, Who, How often).",
          "blocks": [
            {
              "type": "table",
              "title": "Вопросы с обычными глаголами",
              "headers": [
                "Вид",
                "Формула",
                "Пример"
              ],
              "rows": [
                [
                  "Общий I / you / we / they",
                  "Do + subject + verb?",
                  "Do you live here? — Ты живёшь здесь?"
                ],
                [
                  "Общий he / she / it",
                  "Does + subject + verb?",
                  "Does Anna work? — Анна работает?"
                ],
                [
                  "Специальный",
                  "Question word + do/does + subject + verb?",
                  "Where does she live? — Где она живёт?"
                ]
              ]
            },
            {
              "type": "examples",
              "title": "Короткие ответы",
              "rows": [
                {
                  "en": "Do you work? — Yes, I do. / No, I don’t.",
                  "ru": "Ты работаешь? — Да. / Нет."
                },
                {
                  "en": "Does he live alone? — Yes, he does. / No, he doesn’t.",
                  "ru": "Он живёт один? — Да. / Нет."
                }
              ]
            },
            {
              "type": "note",
              "title": "be не использует do / does",
              "text": "Are you shy? / Is Anna shy? — правильно. Do you be shy? — неверно. Когда сказуемое — be, ставим am/is/are перед подлежащим.",
              "tone": "remember"
            }
          ]
        },
        {
          "id": "ef-1b-gram-5",
          "number": "05",
          "kicker": "Место в предложении",
          "title": "Наречия частотности и время",
          "intro": "always, usually, often, sometimes, hardly ever, never показывают, насколько часто что-то происходит. Их место зависит от глагола.",
          "blocks": [
            {
              "type": "table",
              "title": "Где ставить наречие?",
              "headers": [
                "Ситуация",
                "Правило",
                "Пример"
              ],
              "rows": [
                [
                  "Обычный глагол",
                  "перед смысловым глаголом",
                  "I usually get up early. — Я обычно рано встаю."
                ],
                [
                  "be",
                  "после am/is/are",
                  "She is always busy. — Она всегда занята."
                ],
                [
                  "don’t / doesn’t",
                  "после отрицания, перед смысловым глаголом",
                  "He doesn’t often go out. — Он нечасто выходит."
                ],
                [
                  "every day",
                  "часто в конце предложения",
                  "I see him every day. — Я вижу его каждый день."
                ]
              ]
            },
            {
              "type": "examples",
              "title": "Сравни",
              "rows": [
                {
                  "en": "She never goes out.",
                  "ru": "Она никогда никуда не ходит."
                },
                {
                  "en": "You’re never too old to get married.",
                  "ru": "Никогда не бывает слишком поздно жениться / выйти замуж."
                },
                {
                  "en": "I hardly ever see Jamie.",
                  "ru": "Я почти никогда не вижу Джейми."
                }
              ]
            },
            {
              "type": "note",
              "title": "Не удваивай отрицание",
              "text": "Never и hardly ever уже имеют отрицательное или почти отрицательное значение. I don’t never go out — не стандартная нейтральная форма.",
              "tone": "remember"
            }
          ]
        },
        {
          "id": "ef-1b-gram-6",
          "number": "06",
          "kicker": "Произношение",
          "title": "Окончания -s и -es: произношение",
          "intro": "Форма he/she/it произносится по-разному. Выбор /s/, /z/ или /ɪz/ зависит от последнего звука основы, не от последней буквы.",
          "blocks": [
            {
              "type": "table",
              "title": "Три произношения",
              "headers": [
                "Звук",
                "После каких звуков",
                "Примеры"
              ],
              "rows": [
                [
                  "/s/",
                  "после глухих /p, t, k, f, θ/",
                  "works, likes, laughs"
                ],
                [
                  "/z/",
                  "после гласных и звонких звуков",
                  "lives, knows, runs, leaves"
                ],
                [
                  "/ɪz/",
                  "после шипящих/свистящих /s, z, ʃ, ʒ, tʃ, dʒ/",
                  "watches, washes, dresses, teaches"
                ]
              ]
            },
            {
              "type": "examples",
              "title": "Различаем",
              "rows": [
                {
                  "en": "She works. /s/ — He lives. /z/",
                  "ru": "Третье лицо выглядит одинаково с -s, но звук различается."
                },
                {
                  "en": "He watches TV. /ɪz/",
                  "ru": "Добавляется отдельный слог после /tʃ/."
                }
              ]
            },
            {
              "type": "note",
              "title": "Как проверить себя",
              "text": "После /s/ и /z/ не добавляй лишний слог: works — один слог, lives — один слог; watches — два слога.",
              "tone": "remember"
            }
          ]
        },
        {
          "id": "ef-1b-gram-7",
          "number": "07",
          "kicker": "Итог",
          "title": "Как не перепутать формы",
          "intro": "Перед ответом спроси себя: кто выполняет действие, утверждение это или вопрос, и есть ли слово о регулярности.",
          "blocks": [
            {
              "type": "decision",
              "title": "Быстрая схема",
              "steps": [
                {
                  "if": "Говоришь о факте или привычке?",
                  "then": "Present Simple.",
                  "example": "I live in a flat."
                },
                {
                  "if": "Подлежащее he / she / it и это утверждение?",
                  "then": "Добавь к глаголу -s/-es или -ies.",
                  "example": "She studies music."
                },
                {
                  "if": "Отрицание или вопрос с обычным глаголом?",
                  "then": "Используй do/don’t или does/doesn’t + базовую форму.",
                  "example": "Does she like parties?"
                },
                {
                  "if": "Есть наречие частотности?",
                  "then": "Проверь его позицию: обычно перед глаголом, после be.",
                  "example": "She is always busy."
                }
              ]
            },
            {
              "type": "note",
              "title": "Перед проверкой",
              "text": "Вспомни: She doesn’t lives — неверно, потому что doesn’t + live. It is always fun — always после be. Does Anna like...? — после does форма like.",
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
        "title": "1. Choose the correct form",
        "difficulty": "Easy",
        "instructions": "Choose the correct answer.",
        "hideAnswersOnError": true,
        "items": [
          {
            "id": "1",
            "number": 1,
            "input": "single",
            "prompt": "Jamie ___ as a vet.",
            "options": [
              "work",
              "works",
              "working"
            ],
            "answer": 1
          },
          {
            "id": "2",
            "number": 2,
            "input": "single",
            "prompt": "They ___ together.",
            "options": [
              "doesn’t live",
              "don’t live",
              "not lives"
            ],
            "answer": 1
          },
          {
            "id": "3",
            "number": 3,
            "input": "single",
            "prompt": "___ Anna live alone?",
            "options": [
              "Do",
              "Does",
              "Is"
            ],
            "answer": 1
          },
          {
            "id": "4",
            "number": 4,
            "input": "single",
            "prompt": "She ___ TV every evening.",
            "options": [
              "watches",
              "watchs",
              "watch"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "exercise",
        "id": "gram-2",
        "title": "2. Write the missing form",
        "difficulty": "Medium",
        "instructions": "Complete the gaps with the correct present simple form.",
        "hideAnswersOnError": true,
        "items": [
          {
            "id": "1",
            "number": 1,
            "input": "gaps",
            "segments": [
              "She ",
              " (study) music at university."
            ],
            "answers": [
              "studies"
            ]
          },
          {
            "id": "2",
            "number": 2,
            "input": "gaps",
            "segments": [
              "He ",
              " (not like) going to parties."
            ],
            "answers": [
              "doesn't like"
            ]
          },
          {
            "id": "3",
            "number": 3,
            "input": "gaps",
            "segments": [
              "Where ",
              " your friend live?"
            ],
            "answers": [
              "does"
            ]
          },
          {
            "id": "4",
            "number": 4,
            "input": "gaps",
            "segments": [
              "We ",
              " (have) dinner at 7.00."
            ],
            "answers": [
              "have"
            ]
          }
        ]
      },
      {
        "type": "exercise",
        "id": "gram-3",
        "title": "3. Correct the grammar",
        "difficulty": "Challenging",
        "instructions": "Rewrite the sentence correctly.",
        "hideAnswersOnError": true,
        "items": [
          {
            "id": "1",
            "number": 1,
            "input": "text",
            "prompt": "She don’t often go out.",
            "answer": "She doesn't often go out."
          },
          {
            "id": "2",
            "number": 2,
            "input": "text",
            "prompt": "Does he watches TV?",
            "answer": "Does he watch TV?"
          },
          {
            "id": "3",
            "number": 3,
            "input": "text",
            "prompt": "I am never go to parties.",
            "answer": "I never go to parties."
          },
          {
            "id": "4",
            "number": 4,
            "input": "text",
            "prompt": "He studys English every day.",
            "answer": "He studies English every day."
          }
        ]
      },
      {
        "type": "exercise",
        "id": "gram-4",
        "title": "4. Write complete sentences",
        "difficulty": "Advanced",
        "instructions": "Write the complete sentence or question from the prompts.",
        "hideAnswersOnError": true,
        "items": [
          {
            "id": "1",
            "number": 1,
            "input": "text",
            "prompt": "Anna / live / alone (positive)",
            "answer": "Anna lives alone."
          },
          {
            "id": "2",
            "number": 2,
            "input": "text",
            "prompt": "you / usually / see / friends / on Saturdays (question)",
            "answer": "Do you usually see friends on Saturdays?"
          },
          {
            "id": "3",
            "number": 3,
            "input": "text",
            "prompt": "Jamie / not / like / parties (negative)",
            "answer": "Jamie doesn't like parties."
          },
          {
            "id": "4",
            "number": 4,
            "input": "text",
            "prompt": "where / your sister / work (question)",
            "answer": "Where does your sister work?"
          }
        ]
      }
    ]
  }
];
