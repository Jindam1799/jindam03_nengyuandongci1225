const sentenceData = {
  day1: [
    // 문장1 묶음
    {
      id: 'sentence1',
      level: 1,
      isFinal: false,
      korean: '산에 오르다',
      chinese: {
        hanzi: ['爬山'],
        pinyin: ['pá shān'],
      },
    },
    {
      id: 'sentence1',
      level: 2,
      isFinal: true,
      korean: '산에 가다',
      chinese: {
        hanzi: ['去', '爬山'],
        pinyin: ['qù', 'pá shān'],
      },
    },

    // 문장2 묶음
    {
      id: 'sentence2',
      level: 1,
      isFinal: false,
      korean: '계획하다',
      chinese: {
        hanzi: ['打算'],
        pinyin: ['dǎsuàn'],
      },
    },
    {
      id: 'sentence2',
      level: 2,
      isFinal: false,
      korean: '나는 계획하다',
      chinese: {
        hanzi: ['我', '打算'],
        pinyin: ['wǒ', 'dǎsuàn'],
      },
    },
    {
      id: 'sentence2',
      level: 3,
      isFinal: true,
      korean: '나는 산에 가려고 계획 중이다',
      chinese: {
        hanzi: ['我', '打算', '去', '爬山'],
        pinyin: ['wǒ', 'dǎsuàn', 'qù', 'pá shān'],
      },
    },

    // 문장3 묶음
    {
      id: 'sentence3',
      level: 1,
      isFinal: false,
      korean: '스스로',
      chinese: {
        hanzi: ['自己'],
        pinyin: ['zìjǐ'],
      },
    },
    {
      id: 'sentence3',
      level: 2,
      isFinal: false,
      korean: '할 수 있다',
      chinese: {
        hanzi: ['可以'],
        pinyin: ['kěyǐ'],
      },
    },
    {
      id: 'sentence3',
      level: 3,
      isFinal: false,
      korean: '스스로 할 수 있다',
      chinese: {
        hanzi: ['自己', '可以'],
        pinyin: ['zìjǐ', 'kěyǐ'],
      },
    },
    {
      id: 'sentence3',
      level: 4,
      isFinal: true,
      korean: '나는 스스로 할 수 있다',
      chinese: {
        hanzi: ['我', '自己', '可以'],
        pinyin: ['wǒ', 'zìjǐ', 'kěyǐ'],
      },
    },

    // 문장4 묶음
    {
      id: 'sentence4',
      level: 1,
      isFinal: false,
      korean: '근데, 하지만',
      chinese: {
        hanzi: ['不过'],
        pinyin: ['búguò'],
      },
    },
    {
      id: 'sentence4',
      level: 2,
      isFinal: false,
      korean: '그래도',
      chinese: {
        hanzi: ['还是'],
        pinyin: ['háishi'],
      },
    },
    {
      id: 'sentence4',
      level: 3,
      isFinal: false,
      korean: '감사합니다',
      chinese: {
        hanzi: ['谢谢'],
        pinyin: ['xièxie'],
      },
    },
    {
      id: 'sentence4',
      level: 4,
      isFinal: false,
      korean: '(당신에게) 감사합니다',
      chinese: {
        hanzi: ['谢谢', '你'],
        pinyin: ['xièxie', 'nǐ'],
      },
    },
    {
      id: 'sentence4',
      level: 5,
      isFinal: false,
      korean: '감사합니다, 나는 스스로 할 수 있어요',
      chinese: {
        hanzi: ['谢谢', '我', '自己', '可以'],
        pinyin: ['xièxie', 'wǒ', 'zìjǐ', 'kěyǐ'],
      },
    },
    {
      id: 'sentence4',
      level: 6,
      isFinal: true,
      korean:
        '감사합니다, 나는 스스로 할 수 있지만 (근데) 그래도 (당신에게) 감사합니다',
      chinese: {
        hanzi: ['谢谢', '我', '自己', '可以', '不过', '还是', '谢谢', '你'],
        pinyin: [
          'xièxie',
          'wǒ',
          'zìjǐ',
          'kěyǐ',
          'búguò',
          'háishi',
          'xièxie',
          'nǐ',
        ],
      },
    },

    // 문장5 묶음
    {
      id: 'sentence5',
      level: 1,
      isFinal: false,
      korean: '비교적',
      chinese: {
        hanzi: ['比较'],
        pinyin: ['bǐjiào'],
      },
    },
    {
      id: 'sentence5',
      level: 2,
      isFinal: false,
      korean: '비교적 좋다',
      chinese: {
        hanzi: ['比较', '好'],
        pinyin: ['bǐjiào', 'hǎo'],
      },
    },
    {
      id: 'sentence5',
      level: 3,
      isFinal: false,
      korean: '이것',
      chinese: {
        hanzi: ['这个'],
        pinyin: ['zhè ge'],
      },
    },
    {
      id: 'sentence5',
      level: 4,
      isFinal: false,
      korean: '이것이 비교적 좋다',
      chinese: {
        hanzi: ['这个', '比较', '好'],
        pinyin: ['zhè ge', 'bǐjiào', 'hǎo'],
      },
    },
    {
      id: 'sentence5',
      level: 5,
      isFinal: false,
      korean: '나는 생각한다',
      chinese: {
        hanzi: ['我', '觉得'],
        pinyin: ['wǒ', 'juéde'],
      },
    },
    {
      id: 'sentence5',
      level: 6,
      isFinal: true,
      korean: '나는 이것이 비교적 좋다고 생각한다',
      chinese: {
        hanzi: ['我', '觉得', '这个', '比较', '好'],
        pinyin: ['wǒ', 'juéde', 'zhè ge', 'bǐjiào', 'hǎo'],
      },
    },

    // 문장6 묶음
    {
      id: 'sentence6',
      level: 1,
      isFinal: false,
      korean: '왜냐하면',
      chinese: {
        hanzi: ['因为'],
        pinyin: ['yīnwèi'],
      },
    },
    {
      id: 'sentence6',
      level: 2,
      isFinal: false,
      korean: '그것의 배터리',
      chinese: {
        hanzi: ['它的', '电池'],
        pinyin: ['tā de', 'diànchí'],
      },
    },
    {
      id: 'sentence6',
      level: 3,
      isFinal: false,
      korean: '더',
      chinese: {
        hanzi: ['更'],
        pinyin: ['gèng'],
      },
    },
    {
      id: 'sentence6',
      level: 4,
      isFinal: false,
      korean: '더 오래 간다',
      chinese: {
        hanzi: ['更', '耐用'],
        pinyin: ['gèng', 'nàiyòng'],
      },
    },
    {
      id: 'sentence6',
      level: 5,
      isFinal: false,
      korean: '그것의 배터리가 더 오래 간다',
      chinese: {
        hanzi: ['它的', '电池', '更', '耐用'],
        pinyin: ['tā de', 'diànchí', 'gèng', 'nàiyòng'],
      },
    },
    {
      id: 'sentence6',
      level: 6,
      isFinal: true,
      korean: `내 생각에 이것이 비교적 좋아, 왜냐하면 그것의 배터리가 더 오래 가기 때문이야 ***比较[bǐjiào]는 '비교적', '더', '좀' 이라고 해석됩니다. `,
      chinese: {
        hanzi: [
          '我',
          '觉得',
          '这个',
          '比较',
          '好',
          '因为',
          '它的',
          '电池',
          '更',
          '耐用',
        ],
        pinyin: [
          'wǒ',
          'juéde',
          'zhè ge',
          'bǐjiào',
          'hǎo',
          'yīnwèi',
          'tā de',
          'diànchí',
          'gèng',
          'nàiyòng',
        ],
      },
    },

    // 문장7 묶음
    {
      id: 'sentence7',
      level: 1,
      isFinal: false,
      korean: '멋지다',
      chinese: {
        hanzi: ['精彩'],
        pinyin: ['jīngcǎi'],
      },
    },
    {
      id: 'sentence7',
      level: 2,
      isFinal: false,
      korean: '너무...하다',
      chinese: {
        hanzi: ['太...', '了'],
        pinyin: ['tài', 'le'],
      },
    },
    {
      id: 'sentence7',
      level: 3,
      isFinal: false,
      korean: '너무 멋지다',
      chinese: {
        hanzi: ['太', '精彩', '了'],
        pinyin: ['tài', 'jīngcǎi', 'le'],
      },
    },
    {
      id: 'sentence7',
      level: 4,
      isFinal: false,
      korean: '정말',
      chinese: {
        hanzi: ['真是'],
        pinyin: ['zhēnshi'],
      },
    },
    {
      id: 'sentence7',
      level: 5,
      isFinal: false,
      korean: '정말 너무...하다',
      chinese: {
        hanzi: ['真是', '太...', '了'],
        pinyin: ['zhēnshi', 'tài', 'le'],
      },
    },
    {
      id: 'sentence7',
      level: 6,
      isFinal: true,
      korean: '정말 너무 멋집니다!',
      chinese: {
        hanzi: ['真是', '太', '精彩', '了'],
        pinyin: ['zhēnshi', 'tài', 'jīngcǎi', 'le'],
      },
    },

    // 문장8 묶음
    {
      id: 'sentence8',
      level: 1,
      isFinal: false,
      korean: '보았다',
      chinese: {
        hanzi: ['看了'],
        pinyin: ['kàn le'],
      },
    },
    {
      id: 'sentence8',
      level: 2,
      isFinal: false,
      korean: '특히',
      chinese: {
        hanzi: ['尤其是'],
        pinyin: ['yóuqí shì'],
      },
    },
    {
      id: 'sentence8',
      level: 3,
      isFinal: false,
      korean: '마지막',
      chinese: {
        hanzi: ['最后'],
        pinyin: ['zuìhòu'],
      },
    },
    {
      id: 'sentence8',
      level: 4,
      isFinal: false,
      korean: '마지막 몇 분',
      chinese: {
        hanzi: ['最后', '几分钟'],
        pinyin: ['zuìhòu', 'jǐ fēnzhōng'],
      },
    },
    {
      id: 'sentence8',
      level: 5,
      isFinal: false,
      korean: '특히 마지막 몇 분',
      chinese: {
        hanzi: ['尤其是', '最后', '几分钟'],
        pinyin: ['yóuqí shì', 'zuìhòu', 'jǐ fēnzhōng'],
      },
    },
    {
      id: 'sentence8',
      level: 6,
      isFinal: true,
      korean: '봤어요, 정말 너무 멋졌어요! 특히 마지막 몇 분이요.',
      chinese: {
        hanzi: ['看了', '真是', '太', '精彩', '了', '尤其是', '最后', '几分钟'],
        pinyin: [
          'kàn le',
          'zhēnshi',
          'tài',
          'jīngcǎi',
          'le',
          'yóuqí shì',
          'zuìhòu',
          'jǐ fēnzhōng',
        ],
      },
    },

    // 문장9 묶음
    {
      id: 'sentence9',
      level: 1,
      isFinal: false,
      korean: '징동(중국 쇼핑몰)',
      chinese: {
        hanzi: ['京东'],
        pinyin: ['Jīngdōng'],
      },
    },
    {
      id: 'sentence9',
      level: 2,
      isFinal: false,
      korean: '징동에서',
      chinese: {
        hanzi: ['在', '京东'],
        pinyin: ['zài', 'Jīngdōng'],
      },
    },
    {
      id: 'sentence9',
      level: 3,
      isFinal: false,
      korean: '징동에서 사다',
      chinese: {
        hanzi: ['在', '京东', '买'],
        pinyin: ['zài', 'Jīngdōng', 'mǎi'],
      },
    },
    {
      id: 'sentence9',
      level: 4,
      isFinal: true,
      korean: '징동에서 산 것이다 추가 ***앞에 是 (shì) 생략되었어요',
      chinese: {
        hanzi: ['在', '京东', '买', '的'],
        pinyin: ['zài', 'Jīngdōng', 'mǎi', 'de'],
      },
    },

    // 문장10 묶음
    {
      id: 'sentence10',
      level: 1,
      isFinal: false,
      korean: '할인하다',
      chinese: {
        hanzi: ['打折'],
        pinyin: ['dǎzhé'],
      },
    },
    {
      id: 'sentence10',
      level: 2,
      isFinal: false,
      korean: '...할 때',
      chinese: {
        hanzi: ['的时候'],
        pinyin: ['de shíhou'],
      },
    },
    {
      id: 'sentence10',
      level: 3,
      isFinal: false,
      korean: '할인할 때',
      chinese: {
        hanzi: ['打折', '的时候'],
        pinyin: ['dǎzhé', 'de shíhou'],
      },
    },
    {
      id: 'sentence10',
      level: 4,
      isFinal: false,
      korean: '할인할 때 산 것이다 추가 ***앞에 是 (shì) 생략되었어요',
      chinese: {
        hanzi: ['打折', '的时候', '买', '的'],
        pinyin: ['dǎzhé', 'de shíhou', 'mǎi', 'de'],
      },
    },
    {
      id: 'sentence10',
      level: 5,
      isFinal: false,
      korean: '매우 경제적이다',
      chinese: {
        hanzi: ['很', '划算'],
        pinyin: ['hěn', 'huásuàn'],
      },
    },
    {
      id: 'sentence10',
      level: 6,
      isFinal: true,
      korean: '징동에서 산 거예요. 할인할 때 산 거라 매우 경제적이에요.',
      chinese: {
        hanzi: [
          '在',
          '京东',
          '买',
          '的',
          '打折',
          '的时候',
          '买',
          '的',
          '很',
          '划算',
        ],
        pinyin: [
          'zài',
          'Jīngdōng',
          'mǎi',
          'de',
          'dǎzhé',
          'de shíhou',
          'mǎi',
          'de',
          'hěn',
          'huásuàn',
        ],
      },
    },
  ],

  day2: [
    // 문장11 묶음
    {
      id: 'sentence1',
      level: 1,
      isFinal: false,
      korean: '없다',
      chinese: {
        hanzi: ['没有'],
        pinyin: ['méiyǒu'],
      },
    },
    {
      id: 'sentence1',
      level: 2,
      isFinal: false,
      korean: '...했다',
      chinese: {
        hanzi: ['了'],
        pinyin: ['le'],
      },
    },
    {
      id: 'sentence1',
      level: 3,
      isFinal: true,
      korean: '없어졌다',
      chinese: {
        hanzi: ['没有', '了'],
        pinyin: ['méiyǒu', 'le'],
      },
    },

    // 문장12 묶음
    {
      id: 'sentence2',
      level: 1,
      isFinal: false,
      korean: '원하다',
      chinese: {
        hanzi: ['想'],
        pinyin: ['xiǎng'],
      },
    },
    {
      id: 'sentence2',
      level: 2,
      isFinal: false,
      korean: '마시다',
      chinese: {
        hanzi: ['喝'],
        pinyin: ['hē'],
      },
    },
    {
      id: 'sentence2',
      level: 3,
      isFinal: false,
      korean: '마시고 싶다',
      chinese: {
        hanzi: ['想', '喝'],
        pinyin: ['xiǎng', 'hē'],
      },
    },
    {
      id: 'sentence2',
      level: 4,
      isFinal: false,
      korean: '...하면',
      chinese: {
        hanzi: ['的话'],
        pinyin: ['de huà'],
      },
    },
    {
      id: 'sentence2',
      level: 5,
      isFinal: false,
      korean: '마시고 싶으면',
      chinese: {
        hanzi: ['想', '喝', '的话'],
        pinyin: ['xiǎng', 'hē', 'de huà'],
      },
    },
    {
      id: 'sentence2',
      level: 6,
      isFinal: false,
      korean: '...해야 한다',
      chinese: {
        hanzi: ['得'],
        pinyin: ['děi'],
      },
    },
    {
      id: 'sentence2',
      level: 7,
      isFinal: false,
      korean: '사러 가다',
      chinese: {
        hanzi: ['去', '买'],
        pinyin: ['qù', 'mǎi'],
      },
    },
    {
      id: 'sentence2',
      level: 8,
      isFinal: false,
      korean: '사러 가야 한다',
      chinese: {
        hanzi: ['得', '去', '买'],
        pinyin: ['děi', 'qù', 'mǎi'],
      },
    },
    {
      id: 'sentence2',
      level: 9,
      isFinal: false,
      korean: '마시고 싶으면 사러 가야 한다',
      chinese: {
        hanzi: ['想', '喝', '的话', '得', '去', '买'],
        pinyin: ['xiǎng', 'hē', 'de huà', 'děi', 'qù', 'mǎi'],
      },
    },
    {
      id: 'sentence2',
      level: 10,
      isFinal: true,
      korean: '없어졌어요, 마시고 싶으면 사러 가야 해요.',
      chinese: {
        hanzi: ['没有', '了,', '想', '喝', '的话', '得', '去', '买'],
        pinyin: ['méiyǒu', 'le', 'xiǎng', 'hē', 'de huà', 'děi', 'qù', 'mǎi'],
      },
    },

    // 문장13 묶음
    {
      id: 'sentence3',
      level: 1,
      isFinal: false,
      korean: '정말',
      chinese: {
        hanzi: ['真'],
        pinyin: ['zhēn'],
      },
    },
    {
      id: 'sentence3',
      level: 2,
      isFinal: false,
      korean: '대단하다',
      chinese: {
        hanzi: ['厉害'],
        pinyin: ['lìhai'],
      },
    },
    {
      id: 'sentence3',
      level: 3,
      isFinal: true,
      korean: '정말 대단하다',
      chinese: {
        hanzi: ['真', '厉害'],
        pinyin: ['zhēn', 'lìhai'],
      },
    },

    // 문장14 묶음
    {
      id: 'sentence4',
      level: 1,
      isFinal: false,
      korean: '정말이다',
      chinese: {
        hanzi: ['真是'],
        pinyin: ['zhēnshi'],
      },
    },
    {
      id: 'sentence4',
      level: 2,
      isFinal: false,
      korean: '한 사람',
      chinese: {
        hanzi: ['一个', '人'],
        pinyin: ['yí ge', 'rén'],
      },
    },
    {
      id: 'sentence4',
      level: 3,
      isFinal: false,
      korean: '다재다능한 사람',
      chinese: {
        hanzi: ['多才多艺', '的', '人'],
        pinyin: ['duōcáiduōyì', 'de', 'rén'],
      },
    },
    {
      id: 'sentence4',
      level: 4,
      isFinal: false,
      korean: '한 명의 다재다능한 사람',
      chinese: {
        hanzi: ['一个', '多才多艺', '的', '人'],
        pinyin: ['yí ge', 'duōcáiduōyì', 'de', 'rén'],
      },
    },
    {
      id: 'sentence4',
      level: 5,
      isFinal: false,
      korean: "정말 한 명의 다재다능한 사람이다 ***'一(yí)' 생략 가능",
      chinese: {
        hanzi: ['真是', '一个', '多才多艺', '的', '人'],
        pinyin: ['zhēnshi', '(yí)ge', 'duōcáiduōyì', 'de', 'rén'],
      },
    },
    {
      id: 'sentence4',
      level: 6,
      isFinal: false,
      korean: '그는 정말 한 명의 다재다능한 사람이다',
      chinese: {
        hanzi: ['他', '真是', '(一)个', '多才多艺', '的', '人'],
        pinyin: ['tā', 'zhēnshi', '(yí)ge', 'duōcáiduōyì', 'de', 'rén'],
      },
    },
    {
      id: 'sentence4',
      level: 7,
      isFinal: true,
      korean: '정말 대단해! 그는 정말 다재다능한 사람이야.',
      chinese: {
        hanzi: ['真', '厉害', '他', '真是', '(一)个', '多才多艺', '的', '人'],
        pinyin: [
          'zhēn',
          'lìhai',
          'tā',
          'zhēnshi',
          '(yí)ge',
          'duōcáiduōyì',
          'de',
          'rén',
        ],
      },
    },

    // 문장15 묶음
    {
      id: 'sentence5',
      level: 1,
      isFinal: false,
      korean: '맛있다',
      chinese: {
        hanzi: ['好吃'],
        pinyin: ['hǎochī'],
      },
    },
    {
      id: 'sentence5',
      level: 2,
      isFinal: true,
      korean: '매우 맛있다',
      chinese: {
        hanzi: ['很', '好吃'],
        pinyin: ['hěn', 'hǎochī'],
      },
    },

    // 문장16 묶음
    {
      id: 'sentence6',
      level: 1,
      isFinal: false,
      korean: '보이다',
      chinese: {
        hanzi: ['看起来'],
        pinyin: ['kànqǐlái'],
      },
    },
    {
      id: 'sentence6',
      level: 2,
      isFinal: false,
      korean: '모두 매우 맛있어 보인다',
      chinese: {
        hanzi: ['都', '很', '好吃'],
        pinyin: ['dōu', 'hěn', 'hǎochī'],
      },
    },
    {
      id: 'sentence6',
      level: 3,
      isFinal: false,
      korean: '모두 매우 맛있어 보인다',
      chinese: {
        hanzi: ['看起来', '都', '很', '好吃'],
        pinyin: ['kànqǐlái', 'dōu', 'hěn', 'hǎochī'],
      },
    },
    {
      id: 'sentence6',
      level: 4,
      isFinal: false,
      korean: '특히',
      chinese: {
        hanzi: ['特别是'],
        pinyin: ['tèbié shì'],
      },
    },
    {
      id: 'sentence6',
      level: 5,
      isFinal: false,
      korean: '이 동파육',
      chinese: {
        hanzi: ['这个', '红烧肉'],
        pinyin: ['zhè ge', 'Hóngshāoròu'],
      },
    },
    {
      id: 'sentence6',
      level: 6,
      isFinal: false,
      korean: '특히 이 동파육',
      chinese: {
        hanzi: ['特别是', '这个', '红烧肉'],
        pinyin: ['tèbié shì', 'zhè ge', 'Hóngshāoròu'],
      },
    },
    {
      id: 'sentence6',
      level: 7,
      isFinal: false,
      korean: '와 ***감탄하는 상황',
      chinese: {
        hanzi: ['哇'],
        pinyin: ['wa'],
      },
    },
    {
      id: 'sentence6',
      level: 8,
      isFinal: false,
      korean: '와, 모두 매우 맛있어 보인다',
      chinese: {
        hanzi: ['哇', '看起来', '都', '很', '好吃'],
        pinyin: ['wa', 'kànqǐlái', 'dōu', 'hěn', 'hǎochī'],
      },
    },
    {
      id: 'sentence6',
      level: 9,
      isFinal: true,
      korean: '와, 모두 매우 맛있어 보여요, 특히 이 동파육이요.',
      chinese: {
        hanzi: [
          '哇,',
          '看起来',
          '都',
          '很',
          '好吃，',
          '特别是',
          '这个',
          '红烧肉',
        ],
        pinyin: [
          'wa,',
          'kànqǐlái',
          'dōu',
          'hěn',
          'hǎochī',

          'tèbié shì',
          'zhè ge',
          'Hóngshāoròu',
        ],
      },
    },

    // 문장17 묶음
    {
      id: 'sentence7',
      level: 1,
      isFinal: false,
      korean: '등록하다',
      chinese: {
        hanzi: ['报名'],
        pinyin: ['bàomíng'],
      },
    },
    {
      id: 'sentence7',
      level: 2,
      isFinal: false,
      korean: '이미...했다',
      chinese: {
        hanzi: ['已经...', '了'],
        pinyin: ['yǐjing', 'le'],
      },
    },
    {
      id: 'sentence7',
      level: 3,
      isFinal: true,
      korean: '이미 등록했다',
      chinese: {
        hanzi: ['已经', '报名', '了'],
        pinyin: ['yǐjing', 'bàomíng', 'le'],
      },
    },

    // 문장18 묶음
    {
      id: 'sentence8',
      level: 1,
      isFinal: false,
      korean: '나는 이미 등록했다',
      chinese: {
        hanzi: ['我', '已经', '报名', '了'],
        pinyin: ['wǒ', 'yǐjing', 'bàomíng', 'le'],
      },
    },
    {
      id: 'sentence8',
      level: 2,
      isFinal: false,
      korean: '참가하다',
      chinese: {
        hanzi: ['参加'],
        pinyin: ['cānjiā'],
      },
    },
    {
      id: 'sentence8',
      level: 3,
      isFinal: true,
      korean: '참가합니다, 나는 이미 등록했어요.',
      chinese: {
        hanzi: ['参加，', '我', '已经', '报名', '了'],
        pinyin: ['cānjiā', 'wǒ', 'yǐjing', 'bàomíng', 'le'],
      },
    },

    // 문장19 묶음
    {
      id: 'sentence9',
      level: 1,
      isFinal: false,
      korean: '매우 열심히',
      chinese: {
        hanzi: ['很', '努力'],
        pinyin: ['hěn', 'nǔlì'],
      },
    },
    {
      id: 'sentence9',
      level: 2,
      isFinal: true,
      korean: '그는 매우 열심히 한다',
      chinese: {
        hanzi: ['他', '很', '努力'],
        pinyin: ['tā', 'hěn', 'nǔlì'],
      },
    },

    // 문장20 묶음
    {
      id: 'sentence10',
      level: 1,
      isFinal: false,
      korean: '공부하다',
      chinese: {
        hanzi: ['学习'],
        pinyin: ['xuéxí'],
      },
    },
    {
      id: 'sentence10',
      level: 2,
      isFinal: false,
      korean: '공부를 매우 열심히 한다',
      chinese: {
        hanzi: ['学习', '很', '努力'],
        pinyin: ['xuéxí', 'hěn', 'nǔlì'],
      },
    },
    {
      id: 'sentence10',
      level: 3,
      isFinal: false,
      korean: '그는 공부를 매우 열심히 한다',
      chinese: {
        hanzi: ['他', '学习', '很', '努力'],
        pinyin: ['tā', 'xuéxí', 'hěn', 'nǔlì'],
      },
    },
    {
      id: 'sentence10',
      level: 4,
      isFinal: true,
      korean: '감사합니다, 그는 공부를 매우 열심히 해요.',
      chinese: {
        hanzi: ['谢谢，', '他', '学习', '很', '努力'],
        pinyin: ['xièxie', 'tā', 'xuéxí', 'hěn', 'nǔlì'],
      },
    },
  ],

  day3: [
    // 문장21 묶음
    {
      id: 'sentence1',
      level: 1,
      isFinal: false,
      korean: '청소하다',
      chinese: {
        hanzi: ['打扫'],
        pinyin: ['dǎsǎo'],
      },
    },
    {
      id: 'sentence1',
      level: 2,
      isFinal: true,
      korean: '청소했다',
      chinese: {
        hanzi: ['打扫', '了'],
        pinyin: ['dǎsǎo', 'le'],
      },
    },

    // 문장22 묶음
    {
      id: 'sentence2',
      level: 1,
      isFinal: false,
      korean: '지금',
      chinese: {
        hanzi: ['现在'],
        pinyin: ['xiànzài'],
      },
    },
    {
      id: 'sentence2',
      level: 2,
      isFinal: false,
      korean: '지금 매우 깨끗하다',
      chinese: {
        hanzi: ['现在', '很', '干净'],
        pinyin: ['xiànzài', 'hěn', 'gānjìng'],
      },
    },
    {
      id: 'sentence2',
      level: 3,
      isFinal: true,
      korean: '청소했어요, 지금 매우 깨끗해요.',
      chinese: {
        hanzi: ['打扫', '了，', '现在', '很', '干净'],
        pinyin: ['dǎsǎo', 'le', 'xiànzài', 'hěn', 'gānjìng'],
      },
    },

    // 문장23 묶음
    {
      id: 'sentence3',
      level: 1,
      isFinal: false,
      korean: '계획하다',
      chinese: {
        hanzi: ['打算'],
        pinyin: ['dǎsuàn'],
      },
    },
    {
      id: 'sentence3',
      level: 2,
      isFinal: false,
      korean: '여행가다',
      chinese: {
        hanzi: ['去', '旅行'],
        pinyin: ['qù', 'lǚxíng'],
      },
    },
    {
      id: 'sentence3',
      level: 3,
      isFinal: false,
      korean: '여행 가려고 계획 중이다',
      chinese: {
        hanzi: ['打算', '去', '旅行'],
        pinyin: ['dǎsuàn', 'qù', 'lǚxíng'],
      },
    },
    {
      id: 'sentence3',
      level: 4,
      isFinal: true,
      korean: '나는 여행 가려고 계획 중이다',
      chinese: {
        hanzi: ['我', '打算', '去', '旅行'],
        pinyin: ['wǒ', 'dǎsuàn', 'qù', 'lǚxíng'],
      },
    },

    // 문장24 묶음
    {
      id: 'sentence4',
      level: 1,
      isFinal: false,
      korean: '바다에 가다',
      chinese: {
        hanzi: ['去', '海边'],
        pinyin: ['qù', 'hǎibiān'],
      },
    },
    {
      id: 'sentence4',
      level: 2,
      isFinal: false,
      korean: '바다에 가고 싶다',
      chinese: {
        hanzi: ['想', '去', '海边'],
        pinyin: ['xiǎng', 'qù', 'hǎibiān'],
      },
    },
    {
      id: 'sentence4',
      level: 3,
      isFinal: false,
      korean: '휴식하다',
      chinese: {
        hanzi: ['放松'],
        pinyin: ['fàngsōng'],
      },
    },
    {
      id: 'sentence4',
      level: 4,
      isFinal: false,
      korean: '한번...(하다)',
      chinese: {
        hanzi: ['...一下'],
        pinyin: ['yíxià'],
      },
    },
    {
      id: 'sentence4',
      level: 5,
      isFinal: false,
      korean: '휴식하다',
      chinese: {
        hanzi: ['放松', '一下'],
        pinyin: ['fàngsōng', 'yíxià'],
      },
    },
    {
      id: 'sentence4',
      level: 6,
      isFinal: false,
      korean: '바다에 가서 휴식하고 싶다',
      chinese: {
        hanzi: ['想', '去', '海边', '放松', '一下'],
        pinyin: ['xiǎng', 'qù', 'hǎibiān', 'fàngsōng', 'yíxià'],
      },
    },
    {
      id: 'sentence4',
      level: 7,
      isFinal: true,
      korean: '나는 여행 가려고 계획 중이에요, 바다에 가서 휴식하고 싶어요.',
      chinese: {
        hanzi: [
          '我',
          '打算',
          '去',
          '旅行，',
          '想',
          '去',
          '海边',
          '放松',
          '一下',
        ],
        pinyin: [
          'wǒ',
          'dǎsuàn',
          'qù',
          'lǚxíng',
          'xiǎng',
          'qù',
          'hǎibiān',
          'fàngsōng',
          'yíxià',
        ],
      },
    },

    // 문장25 묶음
    {
      id: 'sentence5',
      level: 1,
      isFinal: false,
      korean: '지하철 타다',
      chinese: {
        hanzi: ['坐', '地铁'],
        pinyin: ['zuò', 'dìtiě'],
      },
    },
    {
      id: 'sentence5',
      level: 2,
      isFinal: false,
      korean: '지하철 타고 가다',
      chinese: {
        hanzi: ['坐', '地铁', '去'],
        pinyin: ['zuò', 'dìtiě', 'qù'],
      },
    },
    {
      id: 'sentence5',
      level: 3,
      isFinal: true,
      korean: '나는 지하철 타고 갈 거예요',
      chinese: {
        hanzi: ['我', '坐', '地铁', '去'],
        pinyin: ['wǒ', 'zuò', 'dìtiě', 'qù'],
      },
    },

    // 문장26 묶음
    {
      id: 'sentence6',
      level: 1,
      isFinal: false,
      korean: '대략',
      chinese: {
        hanzi: ['大概'],
        pinyin: ['dàgài'],
      },
    },
    {
      id: 'sentence6',
      level: 2,
      isFinal: false,
      korean: '필요하다',
      chinese: {
        hanzi: ['需要'],
        pinyin: ['xūyào'],
      },
    },
    {
      id: 'sentence6',
      level: 3,
      isFinal: false,
      korean: '대략 필요하다',
      chinese: {
        hanzi: ['大概', '需要'],
        pinyin: ['dàgài', 'xūyào'],
      },
    },
    {
      id: 'sentence6',
      level: 4,
      isFinal: false,
      korean: '30분 ***시간의 양',
      chinese: {
        hanzi: ['30', '分钟'],
        pinyin: ['sānshí', 'fēnzhōng'],
      },
    },
    {
      id: 'sentence6',
      level: 5,
      isFinal: false,
      korean: '대략 30분 필요하다',
      chinese: {
        hanzi: ['大概', '需要', '30', '分钟'],
        pinyin: ['dàgài', 'xūyào', 'sānshí', 'fēnzhōng'],
      },
    },
    {
      id: 'sentence6',
      level: 6,
      isFinal: true,
      korean: '나는 지하철 타고 갈 거예요. 대략 30분 필요해요.',
      chinese: {
        hanzi: ['我', '坐', '地铁', '去', '大概', '需要', '30', '分钟'],
        pinyin: [
          'wǒ',
          'zuò',
          'dìtiě',
          'qù',
          'dàgài',
          'xūyào',
          'sānshí',
          'fēnzhōng',
        ],
      },
    },

    // 문장27 묶음
    {
      id: 'sentence7',
      level: 1,
      isFinal: false,
      korean: '받다',
      chinese: {
        hanzi: ['收到'],
        pinyin: ['shōudào'],
      },
    },
    {
      id: 'sentence7',
      level: 2,
      isFinal: true,
      korean: '받았다',
      chinese: {
        hanzi: ['收到', '了'],
        pinyin: ['shōudào', 'le'],
      },
    },

    // 문장28 묶음
    {
      id: 'sentence8',
      level: 1,
      isFinal: false,
      korean: '그러나',
      chinese: {
        hanzi: ['但是'],
        pinyin: ['dànshì'],
      },
    },
    {
      id: 'sentence8',
      level: 2,
      isFinal: false,
      korean: '지금 일이 있다 ***A有B: A는 B를 가지고 있다(A는 B가 있다)',
      chinese: {
        hanzi: ['现在', '有事'],
        pinyin: ['xiànzài', 'yǒu shì'],
      },
    },
    {
      id: 'sentence8',
      level: 3,
      isFinal: false,
      korean: '그러나 지금 일이 있다',
      chinese: {
        hanzi: ['但是', '现在', '有事'],
        pinyin: ['dànshì', 'xiànzài', 'yǒu shì'],
      },
    },
    {
      id: 'sentence8',
      level: 4,
      isFinal: false,
      korean: '잠시 후',
      chinese: {
        hanzi: ['一会儿'],
        pinyin: ['yíhuìr'],
      },
    },
    {
      id: 'sentence8',
      level: 5,
      isFinal: false,
      korean: '(당신에게) 답장하다',
      chinese: {
        hanzi: ['回', '你'],
        pinyin: ['huí', 'nǐ'],
      },
    },
    {
      id: 'sentence8',
      level: 6,
      isFinal: false,
      korean: '잠시 후에 답장할게',
      chinese: {
        hanzi: ['一会儿', '回', '你'],
        pinyin: ['yíhuìr', 'huí', 'nǐ'],
      },
    },
    {
      id: 'sentence8',
      level: 7,
      isFinal: false,
      korean: '그러나 나는 지금 일이 있다',
      chinese: {
        hanzi: ['但是', '我', '现在', '有事'],
        pinyin: ['dànshì', 'wǒ', 'xiànzài', 'yǒu shì'],
      },
    },
    {
      id: 'sentence8',
      level: 8,
      isFinal: false,
      korean: '그러나 나는 지금 일이 있어, 잠시 후에 답장할게',
      chinese: {
        hanzi: ['但是', '我', '现在', '有事,', '一会儿', '回', '你'],
        pinyin: ['dànshì', 'wǒ', 'xiànzài', 'yǒu shì', 'yíhuìr', 'huí', 'nǐ'],
      },
    },
    {
      id: 'sentence8',
      level: 9,
      isFinal: true,
      korean: '받았어, 그러나 나는 지금 일이 있어, 잠시 후에 답장할게.',
      chinese: {
        hanzi: [
          '收到',
          '了,',
          '但是',
          '我',
          '现在',
          '有事,',
          '一会儿',
          '回',
          '你',
        ],
        pinyin: [
          'shōudào',
          'le',
          'dànshì',
          'wǒ',
          'xiànzài',
          'yǒu shì',
          'yíhuìr',
          'huí',
          'nǐ',
        ],
      },
    },

    // 문장29 묶음
    {
      id: 'sentence9',
      level: 1,
      isFinal: false,
      korean: '가다',
      chinese: {
        hanzi: ['去'],
        pinyin: ['qù'],
      },
    },
    {
      id: 'sentence9',
      level: 2,
      isFinal: false,
      korean: '갔다',
      chinese: {
        hanzi: ['去', '了'],
        pinyin: ['qù', 'le'],
      },
    },
    {
      id: 'sentence9',
      level: 3,
      isFinal: false,
      korean: '가지 않았다',
      chinese: {
        hanzi: ['没', '去'],
        pinyin: ['méi', 'qù'],
      },
    },
    {
      id: 'sentence9',
      level: 4,
      isFinal: true,
      korean: '나는 가지 않았어요',
      chinese: {
        hanzi: ['我', '没', '去'],
        pinyin: ['wǒ', 'méi', 'qù'],
      },
    },

    // 문장30 묶음
    {
      id: 'sentence10',
      level: 1,
      isFinal: false,
      korean: '오랫동안',
      chinese: {
        hanzi: ['很久'],
        pinyin: ['hěn jiǔ'],
      },
    },
    {
      id: 'sentence10',
      level: 2,
      isFinal: false,
      korean:
        '오랫동안...했다 ***"很久...了"는 세트처럼 자주 쓰임! , "오래 전부터(지금도) 그 상태다"는 느낌! , Ex. 我很久没吃火锅了。 → 훠궈 오래 안 먹었고, 지금까지도 못 먹었어.',
      chinese: {
        hanzi: ['很久...', '了'],
        pinyin: ['hěn jiǔ', 'le'],
      },
    },
    {
      id: 'sentence10',
      level: 3,
      isFinal: false,
      korean: '오랫동안 가지 않았다',
      chinese: {
        hanzi: ['很久', '没去', '了'],
        pinyin: ['hěn jiǔ', 'méi qù', 'le'],
      },
    },
    {
      id: 'sentence10',
      level: 4,
      isFinal: false,
      korean: '나는 오랫동안 가지 않았다',
      chinese: {
        hanzi: ['我', '很久', '没去', '了'],
        pinyin: ['wǒ', 'hěn jiǔ', 'méi qù', 'le'],
      },
    },
    {
      id: 'sentence10',
      level: 5,
      isFinal: false,
      korean: "좋아요 ***'好'보다 경쾌한 느낌",
      chinese: {
        hanzi: ['好啊'],
        pinyin: ['hǎo a'],
      },
    },
    {
      id: 'sentence10',
      level: 6,
      isFinal: true,
      korean: '좋아요, 나는 오랫동안 가지 않았어요.',
      chinese: {
        hanzi: ['好啊，', '我', '很久', '没去', '了'],
        pinyin: ['hǎo a', 'wǒ', 'hěn jiǔ', 'méi qù', 'le'],
      },
    },
  ],

  day4: [
    // 문장31 묶음
    {
      id: 'sentence1',
      level: 1,
      isFinal: false,
      korean: '달리기',
      chinese: {
        hanzi: ['跑步'],
        pinyin: ['pǎobù'],
      },
    },
    {
      id: 'sentence1',
      level: 2,
      isFinal: false,
      korean: '매일 달리기',
      chinese: {
        hanzi: ['每天', '跑步'],
        pinyin: ['měitiān', 'pǎobù'],
      },
    },
    {
      id: 'sentence1',
      level: 3,
      isFinal: true,
      korean: '나는 매일 달리기를 해요',
      chinese: {
        hanzi: ['我', '每天', '跑步'],
        pinyin: ['wǒ', 'měitiān', 'pǎobù'],
      },
    },

    // 문장32 묶음
    {
      id: 'sentence2',
      level: 1,
      isFinal: false,
      korean: '아침에 달리기',
      chinese: {
        hanzi: ['早上', '跑步'],
        pinyin: ['zǎoshang', 'pǎobù'],
      },
    },
    {
      id: 'sentence2',
      level: 2,
      isFinal: false,
      korean: '매일 아침에 달리기',
      chinese: {
        hanzi: ['每天', '早上', '跑步'],
        pinyin: ['měitiān', 'zǎoshang', 'pǎobù'],
      },
    },
    {
      id: 'sentence2',
      level: 3,
      isFinal: false,
      korean: '맞아요',
      chinese: {
        hanzi: ['是的'],
        pinyin: ['shì de'],
      },
    },
    {
      id: 'sentence2',
      level: 4,
      isFinal: true,
      korean: '맞아요, 나는 매일 아침에 달리기를 해요',
      chinese: {
        hanzi: ['是的，', '我', '每天', '早上', '跑步'],
        pinyin: ['shì de', 'wǒ', 'měitiān', 'zǎoshang', 'pǎobù'],
      },
    },

    // 문장33 묶음
    {
      id: 'sentence3',
      level: 1,
      isFinal: false,
      korean: '편리하다',
      chinese: {
        hanzi: ['方便'],
        pinyin: ['fāngbiàn'],
      },
    },
    {
      id: 'sentence3',
      level: 2,
      isFinal: true,
      korean: '매우 편리하다',
      chinese: {
        hanzi: ['很', '方便'],
        pinyin: ['hěn', 'fāngbiàn'],
      },
    },

    // 문장34 묶음
    {
      id: 'sentence4',
      level: 1,
      isFinal: false,
      korean: '...에서 매우 가깝다',
      chinese: {
        hanzi: ['离...', '很', '近'],
        pinyin: ['lí', 'hěn', 'jìn'],
      },
    },
    {
      id: 'sentence4',
      level: 2,
      isFinal: false,
      korean: '지하철역',
      chinese: {
        hanzi: ['地铁站'],
        pinyin: ['dìtiězhàn'],
      },
    },
    {
      id: 'sentence4',
      level: 3,
      isFinal: false,
      korean: '지하철역에서 매우 가깝다',
      chinese: {
        hanzi: ['离', '地铁站', '很', '近'],
        pinyin: ['lí', 'dìtiězhàn', 'hěn', 'jìn'],
      },
    },
    {
      id: 'sentence4',
      level: 4,
      isFinal: true,
      korean: '매우 편리해요, 지하철역에서 매우 가까워요',
      chinese: {
        hanzi: ['很', '方便，', '离', '地铁站', '很', '近'],
        pinyin: ['hěn', 'fāngbiàn', 'lí', 'dìtiězhàn', 'hěn', 'jìn'],
      },
    },

    // 문장35 묶음
    {
      id: 'sentence5',
      level: 1,
      isFinal: false,
      korean: '바로',
      chinese: {
        hanzi: ['就'],
        pinyin: ['jiù'],
      },
    },
    {
      id: 'sentence5',
      level: 2,
      isFinal: false,
      korean: '바로 ...에 있어',
      chinese: {
        hanzi: ['就', '在...'],
        pinyin: ['jiù', 'zài'],
      },
    },
    {
      id: 'sentence5',
      level: 3,
      isFinal: false,
      korean: '앞',
      chinese: {
        hanzi: ['前面'],
        pinyin: ['qiánmiàn'],
      },
    },
    {
      id: 'sentence5',
      level: 4,
      isFinal: true,
      korean: '바로 앞에 있어',
      chinese: {
        hanzi: ['就', '在', '前面'],
        pinyin: ['jiù', 'zài', 'qiánmiàn'],
      },
    },

    // 문장36 묶음
    {
      id: 'sentence6',
      level: 1,
      isFinal: false,
      korean: '5분 ***시간의 양',
      chinese: {
        hanzi: ['五分钟'],
        pinyin: ['wǔ fēnzhōng'],
      },
    },
    {
      id: 'sentence6',
      level: 2,
      isFinal: false,
      korean: '(곧) 도착하다',
      chinese: {
        hanzi: ['就', '到', '了'],
        pinyin: ['jiù', 'dào', 'le'],
      },
    },
    {
      id: 'sentence6',
      level: 3,
      isFinal: false,
      korean: '5분이면 곧 도착해요',
      chinese: {
        hanzi: ['5分钟', '就', '到', '了'],
        pinyin: ['wǔ fēnzhōng', 'jiù', 'dào', 'le'],
      },
    },
    {
      id: 'sentence6',
      level: 4,
      isFinal: false,
      korean: '(길을)걷다',
      chinese: {
        hanzi: ['走路'],
        pinyin: ['zǒu lù'],
      },
    },
    {
      id: 'sentence6',
      level: 5,
      isFinal: false,
      korean: '걸어서 5분이면 곧 도착해요',
      chinese: {
        hanzi: ['走路', '5分钟', '就', '到', '了'],
        pinyin: ['zǒu lù', 'wǔ fēnzhōng', 'jiù', 'dào', 'le'],
      },
    },
    {
      id: 'sentence6',
      level: 6,
      isFinal: false,
      korean: '바로 앞에 있어요. 걸어서 5분이면 곧 도착해요',
      chinese: {
        hanzi: ['就', '在', '前面', '走路', '5分钟', '就', '到', '了'],
        pinyin: [
          'jiù',
          'zài',
          'qiánmiàn',
          'zǒu lù',
          'wǔ fēnzhōng',
          'jiù',
          'dào',
          'le',
        ],
      },
    },
    {
      id: 'sentence6',
      level: 7,
      isFinal: false,
      korean: '있어요',
      chinese: {
        hanzi: ['有'],
        pinyin: ['yǒu'],
      },
    },
    {
      id: 'sentence6',
      level: 8,
      isFinal: true,
      korean: '있어요, 바로 앞에 있어요. 걸어서 5분이면 도착해요',
      chinese: {
        hanzi: ['有,', '就', '在', '前面', '走路', '5分钟', '就', '到', '了'],
        pinyin: [
          'yǒu,',
          'jiù',
          'zài',
          'qiánmiàn',
          'zǒulù',
          'wǔ fēnzhōng',
          'jiù',
          'dào',
          'le',
        ],
      },
    },

    // 문장37 묶음
    {
      id: 'sentence7',
      level: 1,
      isFinal: false,
      korean: '감기에 걸리다',
      chinese: {
        hanzi: ['感冒'],
        pinyin: ['gǎnmào'],
      },
    },
    {
      id: 'sentence7',
      level: 2,
      isFinal: true,
      korean: '나는 감기에 걸렸어요',
      chinese: {
        hanzi: ['我', '感冒', '了'],
        pinyin: ['wǒ', 'gǎnmào', 'le'],
      },
    },

    // 문장38 묶음
    {
      id: 'sentence8',
      level: 1,
      isFinal: false,
      korean: '조금 ***불만을 나타내는 상황',
      chinese: {
        hanzi: ['有点'],
        pinyin: ['yǒudiǎn'],
      },
    },
    {
      id: 'sentence8',
      level: 2,
      isFinal: false,
      korean: '편안하다',
      chinese: {
        hanzi: ['舒服'],
        pinyin: ['shūfu'],
      },
    },
    {
      id: 'sentence8',
      level: 3,
      isFinal: false,
      korean: '불편하다',
      chinese: {
        hanzi: ['不', '舒服'],
        pinyin: ['bù', 'shūfu'],
      },
    },
    {
      id: 'sentence8',
      level: 4,
      isFinal: false,
      korean: '조금 불편해요',
      chinese: {
        hanzi: ['有点', '不', '舒服'],
        pinyin: ['yǒudiǎn', 'bù', 'shūfu'],
      },
    },
    {
      id: 'sentence8',
      level: 5,
      isFinal: true,
      korean: '나는 감기에 걸렸어요, 조금 불편해요',
      chinese: {
        hanzi: ['我', '感冒', '了，', '有点', '不', '舒服'],
        pinyin: ['wǒ', 'gǎnmào', 'le', 'yǒudiǎn', 'bù', 'shūfu'],
      },
    },

    // 문장39 묶음
    {
      id: 'sentence9',
      level: 1,
      isFinal: false,
      korean: '날씨',
      chinese: {
        hanzi: ['天气'],
        pinyin: ['tiānqì'],
      },
    },
    {
      id: 'sentence9',
      level: 2,
      isFinal: true,
      korean: '날씨가 (매우) 좋아요',
      chinese: {
        hanzi: ['天气', '很', '好'],
        pinyin: ['tiānqì', 'hěn', 'hǎo'],
      },
    },

    // 문장40 묶음
    {
      id: 'sentence10',
      level: 1,
      isFinal: false,
      korean: '사진 찍다',
      chinese: {
        hanzi: ['拍', '照片'],
        pinyin: ['pāi', 'zhàopiàn'],
      },
    },
    {
      id: 'sentence10',
      level: 2,
      isFinal: false,
      korean: '몇 장의 사진',
      chinese: {
        hanzi: ['一些', '照片'],
        pinyin: ['yìxiē', 'zhàopiàn'],
      },
    },
    {
      id: 'sentence10',
      level: 3,
      isFinal: false,
      korean: '몇 장의 사진을 찍다 ***一(yì) 생략 가능',
      chinese: {
        hanzi: ['拍', '(一)些', '照片'],
        pinyin: ['pāi', '(yì)xiē', 'zhàopiàn'],
      },
    },
    {
      id: 'sentence10',
      level: 4,
      isFinal: false,
      korean: '할 수 있다',
      chinese: {
        hanzi: ['可以'],
        pinyin: ['kěyǐ'],
      },
    },
    {
      id: 'sentence10',
      level: 5,
      isFinal: false,
      korean: '몇 장의 사진을 찍을 수 있다',
      chinese: {
        hanzi: ['可以', '拍', '(一)些', '照片'],
        pinyin: ['kěyǐ', 'pāi', '(yì)xiē', 'zhàopiàn'],
      },
    },
    {
      id: 'sentence10',
      level: 6,
      isFinal: false,
      korean: '겸사겸사',
      chinese: {
        hanzi: ['顺便'],
        pinyin: ['shùnbiàn'],
      },
    },
    {
      id: 'sentence10',
      level: 7,
      isFinal: false,
      korean: '겸사겸사 몇 장의 사진을 찍을 수 있어요',
      chinese: {
        hanzi: ['顺便', '可以', '拍', '些', '照片'],
        pinyin: ['shùnbiàn', 'kěyǐ', 'pāi', 'xiē', 'zhàopiàn'],
      },
    },
    {
      id: 'sentence10',
      level: 8,
      isFinal: false,
      korean: '좋아요',
      chinese: {
        hanzi: ['好啊'],
        pinyin: ['hǎo a'],
      },
    },
    {
      id: 'sentence10',
      level: 9,
      isFinal: true,
      korean:
        '좋아요, 날씨가 (매우) 좋아요. 그러면서(겸사겸사) 몇 장의 사진을 찍을 수 있어요',
      chinese: {
        hanzi: [
          '好啊,',
          '天气',
          '很',
          '好',
          '顺便',
          '可以',
          '拍',
          '些',
          '照片',
        ],
        pinyin: [
          'hǎo a,',
          'tiānqì',
          'hěn',
          'hǎo',
          'shùnbiàn',
          'kěyǐ',
          'pāi',
          'xiē',
          'zhàopiàn',
        ],
      },
    },
  ],

  day5: [
    // 문장41 묶음
    {
      id: 'sentence41',
      level: 1,
      isFinal: false,
      korean: '알아보다',
      chinese: {
        hanzi: ['看出来'],
        pinyin: ['kànchūlái'],
      },
    },
    {
      id: 'sentence41',
      level: 2,
      isFinal: false,
      korean: '알아볼 수 있다',
      chinese: {
        hanzi: ['看得出来'],
        pinyin: ['kàn de chūlái'],
      },
    },
    {
      id: 'sentence41',
      level: 3,
      isFinal: false,
      korean: '우리 모두',
      chinese: {
        hanzi: ['我们', '都'],
        pinyin: ['wǒmen', 'dōu'],
      },
    },
    {
      id: 'sentence41',
      level: 4,
      isFinal: true,
      korean: '우리 모두 알 수 있다',
      chinese: {
        hanzi: ['我们', '都', '看得出来'],
        pinyin: ['wǒmen', 'dōu', 'kàn de chūlái'],
      },
    },

    // 문장42 묶음
    {
      id: 'sentence42',
      level: 1,
      isFinal: false,
      korean: '모든 학생',
      chinese: {
        hanzi: ['每个', '学生'],
        pinyin: ['měi ge', 'xuésheng'],
      },
    },
    {
      id: 'sentence42',
      level: 2,
      isFinal: false,
      korean: '~에게 잘하다',
      chinese: {
        hanzi: ['对...', '很好'],
        pinyin: ['duì', 'hěn hǎo'],
      },
    },
    {
      id: 'sentence42',
      level: 3,
      isFinal: false,
      korean: '모든 학생에게',
      chinese: {
        hanzi: ['对', '每个', '学生'],
        pinyin: ['duì', 'měi ge', 'xuésheng'],
      },
    },
    {
      id: 'sentence42',
      level: 4,
      isFinal: false,
      korean: '모두 잘하다',
      chinese: {
        hanzi: ['都', '很好'],
        pinyin: ['dōu', 'hěn hǎo'],
      },
    },
    {
      id: 'sentence42',
      level: 5,
      isFinal: false,
      korean: '모든 학생에게 다 잘하다',
      chinese: {
        hanzi: ['对', '每个', '学生', '都', '很好'],
        pinyin: ['duì', 'měi ge', 'xuésheng', 'dōu', 'hěn hǎo'],
      },
    },
    {
      id: 'sentence42',
      level: 6,
      isFinal: false,
      korean: '그는 모든 학생에게 다 잘한다',
      chinese: {
        hanzi: ['他', '对', '每个', '学生', '都', '很好'],
        pinyin: ['tā', 'duì', 'měi ge', 'xuésheng', 'dōu', 'hěn hǎo'],
      },
    },
    {
      id: 'sentence42',
      level: 7,
      isFinal: false,
      korean: '응',
      chinese: {
        hanzi: ['嗯嗯'],
        pinyin: ['èng èng'],
      },
    },
    {
      id: 'sentence42',
      level: 8,
      isFinal: true,
      korean: '응, 우리 모두 알 수 있어. 그는 모든 학생에게 다 잘해',
      chinese: {
        hanzi: [
          '嗯嗯,',
          '我们',
          '都',
          '看得出来',
          '他',
          '对',
          '每个',
          '学生',
          '都',
          '很好',
        ],
        pinyin: [
          'èng èng',
          'wǒmen',
          'dōu',
          'kàn de chūlái',
          'tā',
          'duì',
          'měi ge',
          'xuésheng',
          'dōu',
          'hěn hǎo',
        ],
      },
    },

    // 문장43 묶음
    {
      id: 'sentence43',
      level: 1,
      isFinal: false,
      korean: '조금 ***불만을 나타내는 상황',
      chinese: {
        hanzi: ['有点'],
        pinyin: ['yǒudiǎn'],
      },
    },
    {
      id: 'sentence43',
      level: 2,
      isFinal: false,
      korean: '무섭다',
      chinese: {
        hanzi: ['害怕'],
        pinyin: ['hàipà'],
      },
    },
    {
      id: 'sentence43',
      level: 3,
      isFinal: true,
      korean: '조금 무섭다',
      chinese: {
        hanzi: ['有点', '害怕'],
        pinyin: ['yǒudiǎn', 'hàipà'],
      },
    },

    // 문장44 묶음
    {
      id: 'sentence44',
      level: 1,
      isFinal: false,
      korean: '특히',
      chinese: {
        hanzi: ['尤其是'],
        pinyin: ['yóuqí shì'],
      },
    },
    {
      id: 'sentence44',
      level: 2,
      isFinal: false,
      korean: '밤',
      chinese: {
        hanzi: ['晚上'],
        pinyin: ['wǎnshang'],
      },
    },
    {
      id: 'sentence44',
      level: 3,
      isFinal: false,
      korean: '특히 밤에',
      chinese: {
        hanzi: ['尤其是', '晚上'],
        pinyin: ['yóuqí shì', 'wǎnshang'],
      },
    },
    {
      id: 'sentence44',
      level: 4,
      isFinal: true,
      korean: '조금 무섭다, 특히 밤에',
      chinese: {
        hanzi: ['有点', '害怕,', '尤其是', '晚上'],
        pinyin: ['yǒudiǎn', 'hàipà', 'yóuqí shì', 'wǎnshang'],
      },
    },

    // 문장45 묶음
    {
      id: 'sentence45',
      level: 1,
      isFinal: false,
      korean: '후회하다',
      chinese: {
        hanzi: ['后悔'],
        pinyin: ['hòuhuǐ'],
      },
    },
    {
      id: 'sentence45',
      level: 2,
      isFinal: true,
      korean: '후회하지 않는다',
      chinese: {
        hanzi: ['不', '后悔'],
        pinyin: ['bù', 'hòuhuǐ'],
      },
    },

    // 문장46 묶음
    {
      id: 'sentence46',
      level: 1,
      isFinal: false,
      korean: '좋아하다',
      chinese: {
        hanzi: ['喜欢'],
        pinyin: ['xǐhuan'],
      },
    },
    {
      id: 'sentence46',
      level: 2,
      isFinal: false,
      korean: '나는 매우 좋아한다',
      chinese: {
        hanzi: ['我', '很', '喜欢'],
        pinyin: ['wǒ', 'hěn', 'xǐhuan'],
      },
    },
    {
      id: 'sentence46',
      level: 3,
      isFinal: true,
      korean: '후회하지 않는다, 나는 매우 좋아한다',
      chinese: {
        hanzi: ['不', '后悔', '我', '很', '喜欢'],
        pinyin: ['bú', 'hòuhuǐ', 'wǒ', 'hěn', 'xǐhuan'],
      },
    },

    // 문장47 묶음
    {
      id: 'sentence47',
      level: 1,
      isFinal: false,
      korean: '조용하다',
      chinese: {
        hanzi: ['安静'],
        pinyin: ['ānjìng'],
      },
    },
    {
      id: 'sentence47',
      level: 2,
      isFinal: true,
      korean: '매우 조용하다',
      chinese: {
        hanzi: ['很', '安静'],
        pinyin: ['hěn', 'ānjìng'],
      },
    },

    // 문장48 묶음
    {
      id: 'sentence48',
      level: 1,
      isFinal: false,
      korean: '매우 신선하다',
      chinese: {
        hanzi: ['很', '新鲜'],
        pinyin: ['hěn', 'xīnxiān'],
      },
    },
    {
      id: 'sentence48',
      level: 2,
      isFinal: false,
      korean: '공기가 매우 신선하다',
      chinese: {
        hanzi: ['空气', '很', '新鲜'],
        pinyin: ['kōngqì', 'hěn', 'xīnxiān'],
      },
    },
    {
      id: 'sentence48',
      level: 3,
      isFinal: false,
      korean: '공기도 매우 신선하다',
      chinese: {
        hanzi: ['空气', '也', '很', '新鲜'],
        pinyin: ['kōngqì', 'yě', 'hěn', 'xīnxiān'],
      },
    },
    {
      id: 'sentence48',
      level: 4,
      isFinal: false,
      korean: '그래',
      chinese: {
        hanzi: ['是啊'],
        pinyin: ['shì a'],
      },
    },
    {
      id: 'sentence48',
      level: 5,
      isFinal: true,
      korean: '그래, 매우 조용하고 공기도 매우 신선하다',
      chinese: {
        hanzi: ['是啊,', '很', '安静', '空气', '也', '很', '新鲜'],
        pinyin: ['shì a', 'hěn', 'ānjìng', 'kōngqì', 'yě', 'hěn', 'xīnxiān'],
      },
    },

    // 문장49 묶음
    {
      id: 'sentence49',
      level: 1,
      isFinal: false,
      korean: '학교 활동',
      chinese: {
        hanzi: ['学校', '活动'],
        pinyin: ['xuéxiào', 'huódòng'],
      },
    },
    {
      id: 'sentence49',
      level: 2,
      isFinal: false,
      korean: '학교 활동이 많다',
      chinese: {
        hanzi: ['学校', '活动', '多'],
        pinyin: ['xuéxiào', 'huódòng', 'duō'],
      },
    },
    {
      id: 'sentence49',
      level: 3,
      isFinal: false,
      korean: '최근에 학교 활동이 많다',
      chinese: {
        hanzi: ['最近', '学校', '活动', '多'],
        pinyin: ['zuìjìn', 'xuéxiào', 'huódòng', 'duō'],
      },
    },
    {
      id: 'sentence49',
      level: 4,
      isFinal: true,
      korean: '최근에 학교 활동이 많나요?',
      chinese: {
        hanzi: ['最近', '学校', '活动', '多', '吗?'],
        pinyin: ['zuìjìn', 'xuéxiào', 'huódòng', 'duō', 'ma'],
      },
    },

    // 문장50 묶음
    {
      id: 'sentence50',
      level: 1,
      isFinal: false,
      korean: '일어나다',
      chinese: {
        hanzi: ['起来'],
        pinyin: ['qǐlái'],
      },
    },
    {
      id: 'sentence50',
      level: 2,
      isFinal: false,
      korean: '활동(하다), 행사',
      chinese: {
        hanzi: ['活动'],
        pinyin: ['huódòng'],
      },
    },
    {
      id: 'sentence50',
      level: 3,
      isFinal: false,
      korean: '좀 움직여봐~',
      chinese: {
        hanzi: ['活动', '活动'],
        pinyin: ['huódòng', 'huódòng'],
      },
    },
    {
      id: 'sentence50',
      level: 4,
      isFinal: false,
      korean: '일어나서 좀 움직여봐~',
      chinese: {
        hanzi: ['起来', '活动', '活动'],
        pinyin: ['qǐlái', 'huódòng', 'huódòng'],
      },
    },
    {
      id: 'sentence50',
      level: 5,
      isFinal: false,
      korean: '왜냐하면(...때문에)',
      chinese: {
        hanzi: ['因为'],
        pinyin: ['yīnwèi'],
      },
    },
    {
      id: 'sentence50',
      level: 6,
      isFinal: false,
      korean: '최근에 학교 활동이 많아서 그래?',
      chinese: {
        hanzi: ['因为', '最近', '学校', '活动', '多', '吗?'],
        pinyin: ['yīnwèi', 'zuìjìn', 'xuéxiào', 'huódòng', 'duō', 'ma'],
      },
    },
    {
      id: 'sentence50',
      level: 7,
      isFinal: true,
      korean: '일어나서 좀 움직여봐, 최근에 학교 활동이 많아서 그래?',
      chinese: {
        hanzi: [
          '起来',
          '活动',
          '活动',
          '因为',
          '最近',
          '学校',
          '活动',
          '多',
          '吗?',
        ],
        pinyin: [
          'qǐlái',
          'huódòng',
          'huódòng',
          'yīnwèi',
          'zuìjìn',
          'xuéxiào',
          'huódòng',
          'duō',
          'ma',
        ],
      },
    },
  ],

  day6: [
    // 문장51 묶음
    {
      id: 'sentence51',
      level: 1,
      isFinal: false,
      korean: '(배워서)...할 줄 알다',
      chinese: {
        hanzi: ['会'],
        pinyin: ['huì'],
      },
    },
    {
      id: 'sentence51',
      level: 2,
      isFinal: false,
      korean: '만들 줄 알다',
      chinese: {
        hanzi: ['会', '做'],
        pinyin: ['huì', 'zuò'],
      },
    },
    {
      id: 'sentence51',
      level: 3,
      isFinal: true,
      korean: '나는 만들 줄 알아',
      chinese: {
        hanzi: ['我', '会', '做'],
        pinyin: ['wǒ', 'huì', 'zuò'],
      },
    },

    // 문장52 묶음
    {
      id: 'sentence52',
      level: 1,
      isFinal: false,
      korean: '모두, 전부, 다',
      chinese: {
        hanzi: ['都'],
        pinyin: ['dōu'],
      },
    },
    {
      id: 'sentence52',
      level: 2,
      isFinal: false,
      korean: '나 다(전부) 할 줄 알아 (또는 나 (조차도) 만들 줄 알아)',
      chinese: {
        hanzi: ['我', '都', '会', '做'],
        pinyin: ['wǒ', 'dōu', 'huì', 'zuò'],
      },
    },
    {
      id: 'sentence52',
      level: 3,
      isFinal: false,
      korean: '맞아요',
      chinese: {
        hanzi: ['是啊'],
        pinyin: ['shì a'],
      },
    },
    {
      id: 'sentence52',
      level: 4,
      isFinal: true,
      korean:
        '맞아요, 나(조차)도 만들 줄 알아요. ***이 문장에서 都 는 나 조차도 할 줄 안다는 강조의 뉘앙스로, 자연스럽게 해석하면 “나도 할 정도야”, “나조차도 할 줄 알아” 라는 느낌을 줘요. A: 이 요리는 간단해.   B: 맞아, 나도 만들 줄 알아.',
      chinese: {
        hanzi: ['是啊,', '我', '都', '会', '做'],
        pinyin: ['shì a,', 'wǒ', 'dōu', 'huì', 'zuò'],
      },
    },

    // 문장53 묶음
    {
      id: 'sentence53',
      level: 1,
      isFinal: false,
      korean: '확인하다',
      chinese: {
        hanzi: ['检查'],
        pinyin: ['jiǎnchá'],
      },
    },
    {
      id: 'sentence53',
      level: 2,
      isFinal: true,
      korean: '확인했다',
      chinese: {
        hanzi: ['检查', '了'],
        pinyin: ['jiǎnchá', 'le'],
      },
    },

    // 문장54 묶음
    {
      id: 'sentence54',
      level: 1,
      isFinal: false,
      korean: '문제가 있다',
      chinese: {
        hanzi: ['有', '问题'],
        pinyin: ['yǒu', 'wèntí'],
      },
    },
    {
      id: 'sentence54',
      level: 2,
      isFinal: false,
      korean: '문제가 없다',
      chinese: {
        hanzi: ['没有', '问题'],
        pinyin: ['méiyǒu', 'wèntí'],
      },
    },
    {
      id: 'sentence54',
      level: 3,
      isFinal: false,
      korean: '안심하다',
      chinese: {
        hanzi: ['放心'],
        pinyin: ['fàngxīn'],
      },
    },
    {
      id: 'sentence54',
      level: 4,
      isFinal: false,
      korean: '안심해',
      chinese: {
        hanzi: ['放心', '吧'],
        pinyin: ['fàngxīn', 'ba'],
      },
    },
    {
      id: 'sentence54',
      level: 5,
      isFinal: true,
      korean: '확인했어요, 문제가 없어요. 안심하세요.',
      chinese: {
        hanzi: ['检查', '了,', '没有', '问题', '放心', '吧'],
        pinyin: ['jiǎnchá', 'le', 'méiyǒu', 'wèntí', 'fàngxīn', 'ba'],
      },
    },

    // 문장55 묶음
    {
      id: 'sentence55',
      level: 1,
      isFinal: false,
      korean: '신체',
      chinese: {
        hanzi: ['身体'],
        pinyin: ['shēntǐ'],
      },
    },
    {
      id: 'sentence55',
      level: 2,
      isFinal: false,
      korean: '혁명의 자본 ***革命 gémìng 혁명 本钱 běnqián 밑천, 자본',
      chinese: {
        hanzi: ['革命', '的', '本钱'],
        pinyin: ['gémìng', 'de', 'běnqián'],
      },
    },
    {
      id: 'sentence55',
      level: 3,
      isFinal: true,
      korean: '건강이 혁명의 자본이다',
      chinese: {
        hanzi: ['身体', '是', '革命', '的', '本钱'],
        pinyin: ['shēntǐ', 'shì', 'gémìng', 'de', 'běnqián'],
      },
    },

    // 문장56 묶음
    {
      id: 'sentence56',
      level: 1,
      isFinal: false,
      korean: '그래서',
      chinese: {
        hanzi: ['所以'],
        pinyin: ['suǒyǐ'],
      },
    },
    {
      id: 'sentence56',
      level: 2,
      isFinal: false,
      korean: '운동을 많이 하다',
      chinese: {
        hanzi: ['多', '运动'],
        pinyin: ['duō', 'yùndòng'],
      },
    },
    {
      id: 'sentence56',
      level: 3,
      isFinal: false,
      korean: '운동을 많이 해야 한다',
      chinese: {
        hanzi: ['要', '多', '运动'],
        pinyin: ['yào', 'duō', 'yùndòng'],
      },
    },
    {
      id: 'sentence56',
      level: 4,
      isFinal: false,
      korean: '우리는 운동을 많이 해야 한다',
      chinese: {
        hanzi: ['我们', '要', '多', '运动'],
        pinyin: ['wǒmen', 'yào', 'duō', 'yùndòng'],
      },
    },
    {
      id: 'sentence56',
      level: 5,
      isFinal: false,
      korean: '그래서 우리는 운동을 많이 해야 한다',
      chinese: {
        hanzi: ['所以', '我们', '要', '多', '运动'],
        pinyin: ['suǒyǐ', 'wǒmen', 'yào', 'duō', 'yùndòng'],
      },
    },
    {
      id: 'sentence56',
      level: 6,
      isFinal: false,
      korean: '맞아',
      chinese: {
        hanzi: ['没错'],
        pinyin: ['méicuò'],
      },
    },
    {
      id: 'sentence56',
      level: 7,
      isFinal: true,
      korean:
        '맞아, 건강이 혁명의 밑천이야(최고야). 그래서 우리는 운동 많이 해야 해.',
      chinese: {
        hanzi: [
          '没错,',
          '身体',
          '是',
          '革命',
          '的',
          '本钱,',
          '所以',
          '我们',
          '要',
          '多',
          '运动',
        ],
        pinyin: [
          'méicuò,',
          'shēntǐ',
          'shì',
          'gémìng',
          'de',
          'běnqián',
          'suǒyǐ',
          'wǒmen',
          'yào',
          'duō',
          'yùndòng',
        ],
      },
    },

    // 문장57 묶음
    {
      id: 'sentence57',
      level: 1,
      isFinal: false,
      korean: '긴장하다',
      chinese: {
        hanzi: ['紧张'],
        pinyin: ['jǐnzhāng'],
      },
    },
    {
      id: 'sentence57',
      level: 2,
      isFinal: true,
      korean: '나는 매우 긴장해요',
      chinese: {
        hanzi: ['我', '很', '紧张'],
        pinyin: ['wǒ', 'hěn', 'jǐnzhāng'],
      },
    },

    // 문장58 묶음
    {
      id: 'sentence58',
      level: 1,
      isFinal: false,
      korean: '매번',
      chinese: {
        hanzi: ['每次'],
        pinyin: ['měicì'],
      },
    },
    {
      id: 'sentence58',
      level: 2,
      isFinal: false,
      korean: '나는 매번 모두...',
      chinese: {
        hanzi: ['我', '每次', '都...'],
        pinyin: ['wǒ', 'měicì', 'dōu'],
      },
    },
    {
      id: 'sentence58',
      level: 3,
      isFinal: false,
      korean: '나는 매번 모두 매우 긴장한다',
      chinese: {
        hanzi: ['我', '每次', '都', '很', '紧张'],
        pinyin: ['wǒ', 'měicì', 'dōu', 'hěn', 'jǐnzhāng'],
      },
    },
    {
      id: 'sentence58',
      level: 4,
      isFinal: false,
      korean: '(그럴)거야, 맞아, 응',
      chinese: {
        hanzi: ['会'],
        pinyin: ['huì'],
      },
    },
    {
      id: 'sentence58',
      level: 5,
      isFinal: true,
      korean: '응 (맞아), 나는 매 번 긴장돼',
      chinese: {
        hanzi: ['会，', '我', '每次', '都', '很', '紧张'],
        pinyin: ['huì,', 'wǒ', 'měicì', 'dōu', 'hěn', 'jǐnzhāng'],
      },
    },

    // 문장59 묶음
    {
      id: 'sentence59',
      level: 1,
      isFinal: false,
      korean: '지나가다',
      chinese: {
        hanzi: ['路过'],
        pinyin: ['lùguò'],
      },
    },
    {
      id: 'sentence59',
      level: 2,
      isFinal: true,
      korean: '나는 지나간다',
      chinese: {
        hanzi: ['我', '路过'],
        pinyin: ['wǒ', 'lùguò'],
      },
    },

    // 문장60 묶음
    {
      id: 'sentence60',
      level: 1,
      isFinal: false,
      korean: '출근하다',
      chinese: {
        hanzi: ['上班'],
        pinyin: ['shàng bān'],
      },
    },
    {
      id: 'sentence60',
      level: 2,
      isFinal: false,
      korean: '...할 때',
      chinese: {
        hanzi: ['...的时候'],
        pinyin: ['de shíhou'],
      },
    },
    {
      id: 'sentence60',
      level: 3,
      isFinal: false,
      korean: '출근할 때',
      chinese: {
        hanzi: ['上班', '的时候'],
        pinyin: ['shàng bān', 'de shíhou'],
      },
    },
    {
      id: 'sentence60',
      level: 4,
      isFinal: false,
      korean: '나는 출근할 때 지나간다',
      chinese: {
        hanzi: ['我', '上班', '的时候', '路过'],
        pinyin: ['wǒ', 'shàngbān', 'de shíhou', 'lùguò'],
      },
    },
    {
      id: 'sentence60',
      level: 5,
      isFinal: true,
      korean: '맞아요, 나는 출근할 때 지나가요',
      chinese: {
        hanzi: ['对，', '我', '上班', '的时候', '路过'],
        pinyin: ['duì,', 'wǒ', 'shàngbān', 'de shíhou', 'lùguò'],
      },
    },
  ],

  day7: [
    // 문장61 묶음
    {
      id: 'sentence61',
      level: 1,
      isFinal: false,
      korean: '회의하다',
      chinese: {
        hanzi: ['开会'],
        pinyin: ['kāi huì'],
      },
    },
    {
      id: 'sentence61',
      level: 2,
      isFinal: false,
      korean: '회의하러 가다',
      chinese: {
        hanzi: ['去', '开会'],
        pinyin: ['qù', 'kāi huì'],
      },
    },
    {
      id: 'sentence61',
      level: 3,
      isFinal: true,
      korean: '회의하러 갔어요',
      chinese: {
        hanzi: ['去', '开会', '了'],
        pinyin: ['qù', 'kāi huì', 'le'],
      },
    },

    // 문장62 묶음
    {
      id: 'sentence62',
      level: 1,
      isFinal: false,
      korean: '아마도',
      chinese: {
        hanzi: ['可能'],
        pinyin: ['kěnéng'],
      },
    },
    {
      id: 'sentence62',
      level: 2,
      isFinal: false,
      korean: '아마도 회의하러 갔을 거예요',
      chinese: {
        hanzi: ['可能', '去', '开会', '了'],
        pinyin: ['kěnéng', 'qù', 'kāi huì', 'le'],
      },
    },
    {
      id: 'sentence62',
      level: 3,
      isFinal: false,
      korean: '자리에 없다',
      chinese: {
        hanzi: ['不在'],
        pinyin: ['bú zài'],
      },
    },
    {
      id: 'sentence62',
      level: 4,
      isFinal: false,
      korean: '그는 나갔어요',
      chinese: {
        hanzi: ['他', '出去', '了'],
        pinyin: ['tā', 'chūqù', 'le'],
      },
    },
    {
      id: 'sentence62',
      level: 5,
      isFinal: true,
      korean: '자리에 없어요, 그는 나갔어요, 아마도 회의하러 갔을 거예요.',
      chinese: {
        hanzi: ['不在,', '他', '出去', '了,', '可能', '去', '开会', '了'],
        pinyin: [
          'bù zài',
          'tā',
          'chūqù',
          'le',
          'kěnéng',
          'qù',
          'kāi huì',
          'le',
        ],
      },
    },

    // 문장63 묶음
    {
      id: 'sentence63',
      level: 1,
      isFinal: false,
      korean: '화장실',
      chinese: {
        hanzi: ['厕所'],
        pinyin: ['cèsuǒ'],
      },
    },
    {
      id: 'sentence63',
      level: 2,
      isFinal: false,
      korean: '화장실에 가다',
      chinese: {
        hanzi: ['去', '厕所'],
        pinyin: ['qù', 'cèsuǒ'],
      },
    },
    {
      id: 'sentence63',
      level: 3,
      isFinal: true,
      korean: '나는 화장실에 가요',
      chinese: {
        hanzi: ['我', '去', '厕所'],
        pinyin: ['wǒ', 'qù', 'cèsuǒ'],
      },
    },

    // 문장64 묶음
    {
      id: 'sentence64',
      level: 1,
      isFinal: false,
      korean: '한번 가다 *** 一趟의 一는 생략 가능!',
      chinese: {
        hanzi: ['去', '一趟'],
        pinyin: ['qù', 'yí tàng'],
      },
    },
    {
      id: 'sentence64',
      level: 2,
      isFinal: false,
      korean: '화장실에 한번 가다',
      chinese: {
        hanzi: ['去', '(一)趟', '厕所'],
        pinyin: ['qù', '(yí)tàng', 'cèsuǒ'],
      },
    },
    {
      id: 'sentence64',
      level: 3,
      isFinal: false,
      korean: '나는 화장실에 한번 가요',
      chinese: {
        hanzi: ['我', '去', '(一)趟', '厕所'],
        pinyin: ['wǒ', 'qù', '(yí)tàng', 'cèsuǒ'],
      },
    },
    {
      id: 'sentence64',
      level: 4,
      isFinal: false,
      korean: '아이고',
      chinese: {
        hanzi: ['哎呀'],
        pinyin: ['āiyā'],
      },
    },
    {
      id: 'sentence64',
      level: 5,
      isFinal: true,
      korean: '아이고, 감사합니다! 나는 화장실에 한번 가요',
      chinese: {
        hanzi: ['哎呀，', '谢谢!', '我', '去', '(一)趟', '厕所'],
        pinyin: ['āiyā', 'xièxie', 'wǒ', 'qù', '(yí)tàng', 'cèsuǒ'],
      },
    },

    // 문장65 묶음
    {
      id: 'sentence65',
      level: 1,
      isFinal: false,
      korean: '아침',
      chinese: {
        hanzi: ['早上'],
        pinyin: ['zǎoshang'],
      },
    },
    {
      id: 'sentence65',
      level: 2,
      isFinal: true,
      korean: '아침 8시',
      chinese: {
        hanzi: ['早上', '八点'],
        pinyin: ['zǎoshang', 'bā diǎn'],
      },
    },

    // 문장66 묶음
    {
      id: 'sentence66',
      level: 1,
      isFinal: false,
      korean: '비행기 표',
      chinese: {
        hanzi: ['机票'],
        pinyin: ['jīpiào'],
      },
    },
    {
      id: 'sentence66',
      level: 2,
      isFinal: false,
      korean: '아침 8시 것',
      chinese: {
        hanzi: ['早上', '8点', '的'],
        pinyin: ['zǎoshang', 'bā diǎn', 'de'],
      },
    },
    {
      id: 'sentence66',
      level: 3,
      isFinal: false,
      korean: '비행기 표는 아침 8시예요',
      chinese: {
        hanzi: ['机票', '是', '早上', '8点', '的'],
        pinyin: ['jīpiào', 'shì', 'zǎoshang', 'bā diǎn', 'de'],
      },
    },
    {
      id: 'sentence66',
      level: 4,
      isFinal: false,
      korean: '내일',
      chinese: {
        hanzi: ['明天'],
        pinyin: ['míngtiān'],
      },
    },
    {
      id: 'sentence66',
      level: 5,
      isFinal: true,
      korean: '내일, 비행기 표는 아침 8시예요',
      chinese: {
        hanzi: ['明天,', '机票', '是', '早上', '8点', '的'],
        pinyin: ['míngtiān,', 'jīpiào', 'shì', 'zǎoshang', 'bā diǎn', 'de'],
      },
    },

    // 문장67 묶음
    {
      id: 'sentence67',
      level: 1,
      isFinal: false,
      korean: '어릴 때부터... ***从小 = 어릴 때부터 ***就 = 일찍이, 이미, 강조',
      chinese: {
        hanzi: ['从小', '就...'],
        pinyin: ['cóngxiǎo', 'jiù'],
      },
    },
    {
      id: 'sentence67',
      level: 2,
      isFinal: false,
      korean: '예의 바르다',
      chinese: {
        hanzi: ['有礼貌'],
        pinyin: ['yǒu lǐmào'],
      },
    },
    {
      id: 'sentence67',
      level: 3,
      isFinal: true,
      korean: '그는 어릴 때부터 예의 바릅니다',
      chinese: {
        hanzi: ['他', '从小', '就', '有礼貌'],
        pinyin: ['tā', 'cóngxiǎo', 'jiù', 'yǒu lǐmào'],
      },
    },

    // 문장68 묶음
    {
      id: 'sentence68',
      level: 1,
      isFinal: false,
      korean: '그래서',
      chinese: {
        hanzi: ['所以'],
        pinyin: ['suǒyǐ'],
      },
    },
    {
      id: 'sentence68',
      level: 2,
      isFinal: false,
      korean: '모두 다...',
      chinese: {
        hanzi: ['大家', '都...'],
        pinyin: ['dàjiā', 'dōu'],
      },
    },
    {
      id: 'sentence68',
      level: 3,
      isFinal: false,
      korean: '그래서 모두 다 그를 좋아한다',
      chinese: {
        hanzi: ['所以', '大家', '都', '喜欢', '他'],
        pinyin: ['suǒyǐ', 'dàjiā', 'dōu', 'xǐhuan', 'tā'],
      },
    },
    {
      id: 'sentence68',
      level: 4,
      isFinal: false,
      korean: '맞아요',
      chinese: {
        hanzi: ['是啊'],
        pinyin: ['shì a'],
      },
    },
    {
      id: 'sentence68',
      level: 5,
      isFinal: true,
      korean:
        '맞아요, 그는 어릴 때부터 예의 바르고, 그래서 모두 다 그를 좋아해요',
      chinese: {
        hanzi: [
          '是啊,',
          '他',
          '从小',
          '就',
          '有礼貌,',
          '所以',
          '大家',
          '都',
          '喜欢',
          '他',
        ],
        pinyin: [
          'shì a,',
          'tā',
          'cóngxiǎo',
          'jiù',
          'yǒu lǐmào,',
          'suǒyǐ',
          'dàjiā',
          'dōu',
          'xǐhuan',
          'tā',
        ],
      },
    },

    // 문장69 묶음
    {
      id: 'sentence69',
      level: 1,
      isFinal: false,
      korean: '관심',
      chinese: {
        hanzi: ['兴趣'],
        pinyin: ['xìngqù'],
      },
    },
    {
      id: 'sentence69',
      level: 2,
      isFinal: false,
      korean: '느끼다',
      chinese: {
        hanzi: ['感'],
        pinyin: ['gǎn'],
      },
    },
    {
      id: 'sentence69',
      level: 3,
      isFinal: true,
      korean: '관심을 느끼다',
      chinese: {
        hanzi: ['感', '兴趣'],
        pinyin: ['gǎn', 'xìngqù'],
      },
    },

    // 문장70 묶음
    {
      id: 'sentence70',
      level: 1,
      isFinal: false,
      korean: '자주',
      chinese: {
        hanzi: ['经常'],
        pinyin: ['jīngcháng'],
      },
    },
    {
      id: 'sentence70',
      level: 2,
      isFinal: false,
      korean: '역사책',
      chinese: {
        hanzi: ['历史书'],
        pinyin: ['lìshǐ shū'],
      },
    },
    {
      id: 'sentence70',
      level: 3,
      isFinal: false,
      korean: '역사책을 보다',
      chinese: {
        hanzi: ['看', '历史书'],
        pinyin: ['kàn', 'lìshǐ shū'],
      },
    },
    {
      id: 'sentence70',
      level: 4,
      isFinal: false,
      korean: '나는 자주 역사책을 본다',
      chinese: {
        hanzi: ['我', '经常', '看', '历史书'],
        pinyin: ['wǒ', 'jīngcháng', 'kàn', 'lìshǐ shū'],
      },
    },
    {
      id: 'sentence70',
      level: 5,
      isFinal: true,
      korean: '관심이 있어요, 나는 자주 역사책을 봐요',
      chinese: {
        hanzi: ['感', '兴趣,', '我', '经常', '看', '历史书'],
        pinyin: ['gǎn', 'xìngqù', 'wǒ', 'jīngcháng', 'kàn', 'lìshǐ shū'],
      },
    },
  ],

  day8: [
    // 문장71 묶음
    {
      id: 'sentence71',
      level: 1,
      isFinal: false,
      korean: 'A가 B에게 물어보다',
      chinese: {
        hanzi: ['问 A B'],
        pinyin: ['wèn'],
      },
    },
    {
      id: 'sentence71',
      level: 2,
      isFinal: false,
      korean: '너에게 물어보다',
      chinese: {
        hanzi: ['问', '你'],
        pinyin: ['wèn', 'nǐ'],
      },
    },
    {
      id: 'sentence71',
      level: 3,
      isFinal: false,
      korean: '다시 너에게 물어보다 ***再 zài 다시',
      chinese: {
        hanzi: ['再', '问', '你'],
        pinyin: ['zài', 'wèn', 'nǐ'],
      },
    },
    {
      id: 'sentence71',
      level: 4,
      isFinal: true,
      korean: '내가 다시 너에게 물어볼게',
      chinese: {
        hanzi: ['我', '再', '问', '你'],
        pinyin: ['wǒ', 'zài', 'wèn', 'nǐ'],
      },
    },

    // 문장72 묶음
    {
      id: 'sentence72',
      level: 1,
      isFinal: false,
      korean: '만약',
      chinese: {
        hanzi: ['如果'],
        pinyin: ['rúguǒ'],
      },
    },
    {
      id: 'sentence72',
      level: 2,
      isFinal: false,
      korean: '질문이 있다',
      chinese: {
        hanzi: ['有', '问题'],
        pinyin: ['yǒu', 'wèntí'],
      },
    },
    {
      id: 'sentence72',
      level: 3,
      isFinal: false,
      korean: '만약 질문이 있다면 ***问题 Wèntí 문제, 질문',
      chinese: {
        hanzi: ['如果', '有', '问题'],
        pinyin: ['rúguǒ', 'yǒu', 'wèntí'],
      },
    },
    {
      id: 'sentence72',
      level: 4,
      isFinal: false,
      korean: '만약 질문이 있다면, 내가 다시 너에게 물어볼게',
      chinese: {
        hanzi: ['如果', '有', '问题，', '我', '再', '问', '你'],
        pinyin: ['rúguǒ', 'yǒu', 'wèntí,', 'wǒ', 'zài', 'wèn', 'nǐ'],
      },
    },
    {
      id: 'sentence72',
      level: 5,
      isFinal: false,
      korean: '없어요, 감사합니다',
      chinese: {
        hanzi: ['没有', '了，', '谢谢'],
        pinyin: ['méiyǒu', 'le,', 'xièxie'],
      },
    },
    {
      id: 'sentence72',
      level: 6,
      isFinal: true,
      korean:
        '없어요, 감사합니다. 만약 질문이 있다면, 내가 다시 너에게 물어볼게요',
      chinese: {
        hanzi: [
          '没有',
          '了，',
          '谢谢',
          '如果',
          '有',
          '问题，',
          '我',
          '再',
          '问',
          '你',
        ],
        pinyin: [
          'méiyǒu',
          'le',
          'xièxie',
          'rúguǒ',
          'yǒu',
          'wèntí',
          'wǒ',
          'zài',
          'wèn',
          'nǐ',
        ],
      },
    },

    // 문장73 묶음
    {
      id: 'sentence73',
      level: 1,
      isFinal: false,
      korean: '들었다',
      chinese: {
        hanzi: ['听说'],
        pinyin: ['tīngshuō'],
      },
    },
    {
      id: 'sentence73',
      level: 2,
      isFinal: false,
      korean: '그곳의 풍경',
      chinese: {
        hanzi: ['那里', '的', '风景'],
        pinyin: ['nàlǐ', 'de', 'fēngjǐng'],
      },
    },
    {
      id: 'sentence73',
      level: 3,
      isFinal: false,
      korean: '매우 아름답다',
      chinese: {
        hanzi: ['很', '美'],
        pinyin: ['hěn', 'měi'],
      },
    },
    {
      id: 'sentence73',
      level: 4,
      isFinal: true,
      korean: '그곳의 풍경이 매우 아름답다고 들었어요.',
      chinese: {
        hanzi: ['听说', '那里', '的', '风景', '很', '美'],
        pinyin: ['tīngshuō', 'nàlǐ', 'de', 'fēngjǐng', 'hěn', 'měi'],
      },
    },

    // 문장74 묶음
    {
      id: 'sentence74',
      level: 1,
      isFinal: false,
      korean: '윈난에 가다',
      chinese: {
        hanzi: ['去', '云南'],
        pinyin: ['qù', 'Yúnnán'],
      },
    },
    {
      id: 'sentence74',
      level: 2,
      isFinal: false,
      korean: '계획하다',
      chinese: {
        hanzi: ['打算'],
        pinyin: ['dǎsuàn'],
      },
    },
    {
      id: 'sentence74',
      level: 3,
      isFinal: false,
      korean: '나는 윈난에 가려고 계획 중이다',
      chinese: {
        hanzi: ['我', '打算', '去', '云南'],
        pinyin: ['wǒ', 'dǎsuàn', 'qù', 'Yúnnán'],
      },
    },
    {
      id: 'sentence74',
      level: 4,
      isFinal: false,
      korean: '맞아요, 나는 윈난에 가려고 계획 중이에요',
      chinese: {
        hanzi: ['是的,', '我', '打算', '去', '云南'],
        pinyin: ['shì de', 'wǒ', 'dǎsuàn', 'qù', 'Yúnnán'],
      },
    },
    {
      id: 'sentence74',
      level: 5,
      isFinal: true,
      korean:
        '맞아요, 나는 윈난에 가려고 계획 중이에요. 그곳의 풍경이 매우 아름답다고 들었어요.',
      chinese: {
        hanzi: [
          '是的，',
          '我',
          '打算',
          '去',
          '云南',
          '听说',
          '那里',
          '的',
          '风景',
          '很',
          '美',
        ],
        pinyin: [
          'shì de,',
          'wǒ',
          'dǎsuàn',
          'qù',
          'Yúnnán',
          'tīngshuō',
          'nàlǐ',
          'de',
          'fēngjǐng',
          'hěn',
          'měi',
        ],
      },
    },

    // 문장75 묶음
    {
      id: 'sentence75',
      level: 1,
      isFinal: false,
      korean: '욕실 안에',
      chinese: {
        hanzi: ['浴室', '里'],
        pinyin: ['yùshì', 'lǐ'],
      },
    },
    {
      id: 'sentence75',
      level: 2,
      isFinal: true,
      korean: '욕실 안에 있어요',
      chinese: {
        hanzi: ['在', '浴室', '里'],
        pinyin: ['zài', 'yùshì', 'lǐ'],
      },
    },

    // 문장76 묶음
    {
      id: 'sentence76',
      level: 1,
      isFinal: false,
      korean:
        '그 (수건) = 그 (수건 한 개) ***중국어는 양사가 발달되어 있어 다양한 양사들이 존재해요. ***条 tiáo 가늘고 긴 것을 세는 양사 ',
      chinese: {
        hanzi: ['那条', '수건'],
        pinyin: ['nà tiáo', ''],
      },
    },
    {
      id: 'sentence76',
      level: 2,
      isFinal: false,
      korean:
        '그 (수건)은 내 것이다 ***수건을 말하는지 아는 상황이기 때문에 생략 했어요.',
      chinese: {
        hanzi: ['那条', '是', '我的'],
        pinyin: ['nà tiáo', 'shì', 'wǒ de'],
      },
    },
    {
      id: 'sentence76',
      level: 3,
      isFinal: false,
      korean:
        '파란색 그 (수건) ***수건을 말하는지 아는 상황이기 때문에 생략 했어요.',
      chinese: {
        hanzi: ['蓝色', '的', '那条'],
        pinyin: ['lánsè', 'de', 'nà tiáo'],
      },
    },
    {
      id: 'sentence76',
      level: 4,
      isFinal: true,
      korean:
        '욕실 안에 있어요. 파란색 그 (수건)은 제 것이에요. ***수건을 말하는지 아는 상황이기 때문에 생략 했어요.',
      chinese: {
        hanzi: ['在', '浴室', '里', '蓝色', '的', '那条', '是', '我的'],
        pinyin: [
          'zài',
          'yùshì',
          'lǐ',
          'lánsè',
          'de',
          'nà tiáo',
          'shì',
          'wǒ de',
        ],
      },
    },

    // 문장77 묶음
    {
      id: 'sentence77',
      level: 1,
      isFinal: false,
      korean: '이해하다',
      chinese: {
        hanzi: ['了解'],
        pinyin: ['liǎojiě'],
      },
    },
    {
      id: 'sentence77',
      level: 2,
      isFinal: false,
      korean: '조금 이해하다',
      chinese: {
        hanzi: ['了解', '一下'],
        pinyin: ['liǎojiě', 'yí xià'],
      },
    },
    {
      id: 'sentence77',
      level: 3,
      isFinal: false,
      korean: '조금 이해하고 싶다',
      chinese: {
        hanzi: ['想', '了解', '一下'],
        pinyin: ['xiǎng', 'liǎojiě', 'yí xià'],
      },
    },
    {
      id: 'sentence77',
      level: 4,
      isFinal: true,
      korean:
        '중국 문화를 조금 이해하고 싶어요 ***中国文化 Zhōngguó wénhuà 중국문화',
      chinese: {
        hanzi: ['想', '了解', '一下', '中国', '文化'],
        pinyin: ['xiǎng', 'liǎojiě', 'yí xià', 'Zhōngguó', 'wénhuà'],
      },
    },

    // 문장78 묶음
    {
      id: 'sentence78',
      level: 1,
      isFinal: false,
      korean: '중국어 공부하다',
      chinese: {
        hanzi: ['学习', '中文'],
        pinyin: ['xuéxí', 'Zhōngwén'],
      },
    },
    {
      id: 'sentence78',
      level: 2,
      isFinal: false,
      korean: '중국어 공부하러 오다',
      chinese: {
        hanzi: ['来', '学习', '中文'],
        pinyin: ['lái', 'xuéxí', 'Zhōngwén'],
      },
    },
    {
      id: 'sentence78',
      level: 3,
      isFinal: false,
      korean: '또한 이해하고 싶다',
      chinese: {
        hanzi: ['也', '想', '了解'],
        pinyin: ['yě', 'xiǎng', 'liǎojiě'],
      },
    },
    {
      id: 'sentence78',
      level: 4,
      isFinal: false,
      korean:
        '중국어 공부하러 오다, 또한 조금 이해하고 싶다 *** ...一下 yíxià 좀…하다',
      chinese: {
        hanzi: ['来', '学习', '中文，', '也', '想', '了解', '一下'],
        pinyin: [
          'lái',
          'xuéxí',
          'Zhōngwén',
          'yě',
          'xiǎng',
          'liǎojiě',
          'yí xià',
        ],
      },
    },
    {
      id: 'sentence78',
      level: 5,
      isFinal: false,
      korean: '중국어 공부하러 오다, 또한 중국 문화를 조금 이해하고 싶다',
      chinese: {
        hanzi: [
          '来',
          '学习',
          '中文,',
          '也',
          '想',
          '了解',
          '一下',
          '中国',
          '文化',
        ],
        pinyin: [
          'lái',
          'xuéxí',
          'Zhōngwén',
          'yě',
          'xiǎng',
          'liǎojiě',
          'yí xià',
          'Zhōngguó',
          'wénhuà',
        ],
      },
    },
    {
      id: 'sentence78',
      level: 6,
      isFinal: true,
      korean:
        '저는 중국어 공부하러 왔어요, 또한 중국 문화를 조금 이해하고 싶어요',
      chinese: {
        hanzi: [
          '我',
          '来',
          '学习',
          '中文,',
          '也',
          '想',
          '了解',
          '一下',
          '中国',
          '文化',
        ],
        pinyin: [
          'wǒ',
          'lái',
          'xué xí',
          'Zhōngwén',
          'yě',
          'xiǎng',
          'liǎojiě',
          'yí xià',
          'Zhōngguó',
          'wénhuà',
        ],
      },
    },

    // 문장79 묶음
    {
      id: 'sentence79',
      level: 1,
      isFinal: false,
      korean: '오랫동안',
      chinese: {
        hanzi: ['很久'],
        pinyin: ['hěn jiǔ'],
      },
    },
    {
      id: 'sentence79',
      level: 2,
      isFinal: false,
      korean: '운동하지 않다',
      chinese: {
        hanzi: ['没', '运动'],
        pinyin: ['méi', 'yùndòng'],
      },
    },
    {
      id: 'sentence79',
      level: 3,
      isFinal: false,
      korean: '오랫동안 운동하지 않았다',
      chinese: {
        hanzi: ['很久', '没', '运动'],
        pinyin: ['hěn jiǔ', 'méi', 'yùndòng'],
      },
    },
    {
      id: 'sentence79',
      level: 4,
      isFinal: true,
      korean: '나는 오랫동안 운동하지 않았어요',
      chinese: {
        hanzi: ['我', '很久', '没', '运动'],
        pinyin: ['wǒ', 'hěn jiǔ', 'méi', 'yùndòng'],
      },
    },

    // 문장80 묶음
    {
      id: 'sentence80',
      level: 1,
      isFinal: false,
      korean: '좋아요',
      chinese: {
        hanzi: ['好啊'],
        pinyin: ['hǎo a'],
      },
    },
    {
      id: 'sentence80',
      level: 2,
      isFinal: true,
      korean:
        '좋아요, 나는 오랫동안 운동하지 않았어요 ***“很久...了”는 세트처럼 자주 쓰임! ***지금까지도 계속 안 함 (지속 강조)',
      chinese: {
        hanzi: ['好啊，', '我', '很久', '没', '运动', '了'],
        pinyin: ['hǎo a', 'wǒ', 'hěn jiǔ', 'méi', 'yùndòng', 'le'],
      },
    },
  ],

  day9: [
    // 문장81 묶음
    {
      id: 'sentence81',
      level: 1,
      isFinal: false,
      korean: '특히...이다',
      chinese: {
        hanzi: ['特别是'],
        pinyin: ['tèbié shì'],
      },
    },
    {
      id: 'sentence81',
      level: 2,
      isFinal: false,
      korean: '청색의',
      chinese: {
        hanzi: ['青色', '的'],
        pinyin: ['qīngsè', 'de'],
      },
    },
    {
      id: 'sentence81',
      level: 3,
      isFinal: true,
      korean: '특히 청색의 것이요',
      chinese: {
        hanzi: ['特别是', '青色', '的'],
        pinyin: ['tèbié shì', 'qīngsè', 'de'],
      },
    },

    // 문장82 묶음
    {
      id: 'sentence82',
      level: 1,
      isFinal: false,
      korean: '새콤달콤하다',
      chinese: {
        hanzi: ['酸酸甜甜', '的'],
        pinyin: ['suānsuān tiántián', 'de'],
      },
    },
    {
      id: 'sentence82',
      level: 2,
      isFinal: false,
      korean: '매우 맛있다',
      chinese: {
        hanzi: ['很', '好吃'],
        pinyin: ['hěn', 'hǎochī'],
      },
    },
    {
      id: 'sentence82',
      level: 3,
      isFinal: false,
      korean: '새콤달콤하고 매우 맛있다',
      chinese: {
        hanzi: ['酸酸甜甜', '的', '很', '好吃'],
        pinyin: ['suānsuān tiántián', 'de', 'hěn', 'hǎochī'],
      },
    },
    {
      id: 'sentence82',
      level: 4,
      isFinal: false,
      korean: '특히 청색의 것이요. 새콤달콤하고 매우 맛있어요',
      chinese: {
        hanzi: ['特别是', '青色', '的', '酸酸甜甜', '的', '很', '好吃'],
        pinyin: [
          'tèbié shì',
          'qīngsè',
          'de',
          'suānsuān tiántián',
          'de',
          'hěn',
          'hǎo chī',
        ],
      },
    },
    {
      id: 'sentence82',
      level: 5,
      isFinal: true,
      korean: '좋아요, 특히 청색의 것이요. 새콤달콤하고 매우 맛있어요',
      chinese: {
        hanzi: [
          '喜欢，',
          '特别是',
          '青色',
          '的',
          '酸酸甜甜',
          '的',
          '很',
          '好吃',
        ],
        pinyin: [
          'xǐhuan',
          'tèbié shì',
          'qīngsè',
          'de',
          'suānsuān tiántián',
          'de',
          'hěn',
          'hǎochī',
        ],
      },
    },

    // 문장83 묶음
    {
      id: 'sentence83',
      level: 1,
      isFinal: false,
      korean: '다시 연락하다',
      chinese: {
        hanzi: ['再', '联系', '你'],
        pinyin: ['zài', 'liánxì', 'nǐ'],
      },
    },
    {
      id: 'sentence83',
      level: 2,
      isFinal: false,
      korean: '내가 다시 연락할게',
      chinese: {
        hanzi: ['我', '再', '联系', '你'],
        pinyin: ['wǒ', 'zài', 'liánxì', 'nǐ'],
      },
    },
    {
      id: 'sentence83',
      level: 3,
      isFinal: false,
      korean: '만약 있다면',
      chinese: {
        hanzi: ['如果', '有'],
        pinyin: ['rúguǒ', 'yǒu'],
      },
    },
    {
      id: 'sentence83',
      level: 4,
      isFinal: true,
      korean: '만약 있다면, 내가 다시 연락할게요',
      chinese: {
        hanzi: ['如果', '有，', '我', '再', '联系', '你'],
        pinyin: ['rúguǒ', 'yǒu,', 'wǒ', 'zài', 'liánxì', 'nǐ'],
      },
    },

    // 문장84 묶음
    {
      id: 'sentence84',
      level: 1,
      isFinal: false,
      korean: '없어요',
      chinese: {
        hanzi: ['没有', '了'],
        pinyin: ['méiyǒu', 'le'],
      },
    },
    {
      id: 'sentence84',
      level: 2,
      isFinal: false,
      korean: '없어요, 감사합니다',
      chinese: {
        hanzi: ['没有', '了，', '谢谢'],
        pinyin: ['méiyǒu', 'le,', 'xièxie'],
      },
    },
    {
      id: 'sentence84',
      level: 3,
      isFinal: false,
      korean: '없어요, 감사합니다. 만약 있다면, 내가 다시 연락할게요',
      chinese: {
        hanzi: [
          '没有',
          '了，',
          '谢谢',
          '如果',
          '有，',
          '我',
          '再',
          '联系',
          '你',
        ],
        pinyin: [
          'méiyǒu',
          'le',
          'xièxie',
          'rúguǒ',
          'yǒu',
          'wǒ',
          'zài',
          'liánxì',
          'nǐ',
        ],
      },
    },
    {
      id: 'sentence84',
      level: 4,
      isFinal: true,
      korean: '없어요, 감사합니다. 만약 있다면, 내가 다시 연락할게요',
      chinese: {
        hanzi: [
          '没有',
          '了，',
          '谢谢',
          '如果',
          '有，',
          '我',
          '再',
          '联系',
          '你',
        ],
        pinyin: [
          'méiyǒu',
          'le',
          'xièxie',
          'rúguǒ',
          'yǒu',
          'wǒ',
          'zài',
          'liánxì',
          'nǐ',
        ],
      },
    },

    // 문장85 묶음
    {
      id: 'sentence85',
      level: 1,
      isFinal: false,
      korean: '이렇게 하지 않다',
      chinese: {
        hanzi: ['不', '这样'],
        pinyin: ['bú', 'zhèyàng'],
      },
    },
    {
      id: 'sentence85',
      level: 2,
      isFinal: false,
      korean: '평소에',
      chinese: {
        hanzi: ['平时'],
        pinyin: ['píngshí'],
      },
    },
    {
      id: 'sentence85',
      level: 3,
      isFinal: true,
      korean: '그는 평소에 이렇게 하지 않아요',
      chinese: {
        hanzi: ['他', '平时', '不', '这样'],
        pinyin: ['tā', 'píngshí', 'bú', 'zhèyàng'],
      },
    },

    // 문장86 묶음
    {
      id: 'sentence86',
      level: 1,
      isFinal: false,
      korean: '맞아요',
      chinese: {
        hanzi: ['是啊'],
        pinyin: ['shì a'],
      },
    },
    {
      id: 'sentence86',
      level: 2,
      isFinal: false,
      korean: '맞아요, 그는 평소에 이렇게 하지 않아요',
      chinese: {
        hanzi: ['是啊，', '他', '平时', '不', '这样'],
        pinyin: ['shì a,', 'tā', 'píngshí', 'bú', 'zhèyàng'],
      },
    },
    {
      id: 'sentence86',
      level: 3,
      isFinal: false,
      korean: '아마도',
      chinese: {
        hanzi: ['可能'],
        pinyin: ['kěnéng'],
      },
    },
    {
      id: 'sentence86',
      level: 4,
      isFinal: false,
      korean: '무슨 고민이 있다 ***可能…吧 kěnéng…ba 아마도…인가봐(추측)',
      chinese: {
        hanzi: ['有', '什么', '心事'],
        pinyin: ['yǒu', 'shénme', 'xīnshì'],
      },
    },
    {
      id: 'sentence86',
      level: 5,
      isFinal: false,
      korean: '아마도 무슨 고민이 있겠죠',
      chinese: {
        hanzi: ['可能', '有', '什么', '心事', '吧'],
        pinyin: ['kěnéng', 'yǒu', 'shénme', 'xīnshì', 'ba'],
      },
    },
    {
      id: 'sentence86',
      level: 6,
      isFinal: true,
      korean:
        '맞아요, 그는 평소에 이렇게 하지 않아요. 아마도 무슨 고민이 있겠죠',
      chinese: {
        hanzi: [
          '是啊，',
          '他',
          '平时',
          '不',
          '这样',
          '可能',
          '有',
          '什么',
          '心事',
          '吧',
        ],
        pinyin: [
          'shì a,',
          'tā',
          'píngshí',
          'bú',
          'zhèyàng',
          'kěnéng',
          'yǒu',
          'shénme',
          'xīnshì',
          'ba',
        ],
      },
    },

    // 문장87 묶음
    {
      id: 'sentence87',
      level: 1,
      isFinal: false,
      korean: '다시 설명하다 ***解释 jiěshì 설명하다',
      chinese: {
        hanzi: ['再', '解释'],
        pinyin: ['zài', 'jiěshì'],
      },
    },
    {
      id: 'sentence87',
      level: 2,
      isFinal: true,
      korean: '내가 다시 설명할게요',
      chinese: {
        hanzi: ['我', '再', '解释'],
        pinyin: ['wǒ', 'zài', 'jiěshì'],
      },
    },

    // 문장88 묶음
    {
      id: 'sentence88',
      level: 1,
      isFinal: false,
      korean: '한번 설명하다',
      chinese: {
        hanzi: ['解释', '一遍'],
        pinyin: ['jiěshì', 'yí biàn'],
      },
    },
    {
      id: 'sentence88',
      level: 2,
      isFinal: false,
      korean: '다시 한번 설명하다',
      chinese: {
        hanzi: ['再', '解释', '一遍'],
        pinyin: ['zài', 'jiěshì', 'yí biàn'],
      },
    },
    {
      id: 'sentence88',
      level: 3,
      isFinal: false,
      korean: '좋아요',
      chinese: {
        hanzi: ['好的'],
        pinyin: ['hǎo de'],
      },
    },
    {
      id: 'sentence88',
      level: 4,
      isFinal: true,
      korean: '좋아요, 내가 다시 한번 설명할게요',
      chinese: {
        hanzi: ['好的，', '我', '再', '解释', '一遍'],
        pinyin: ['hǎo de,', 'wǒ', 'zài', 'jiěshì', 'yí biàn'],
      },
    },

    // 문장89 묶음
    {
      id: 'sentence89',
      level: 1,
      isFinal: false,
      korean: '가지 않다',
      chinese: {
        hanzi: ['不', '去'],
        pinyin: ['bú', 'qù'],
      },
    },
    {
      id: 'sentence89',
      level: 2,
      isFinal: false,
      korean: '이제 가지 않다 ***가려했는데 마음이 바뀐 상황',
      chinese: {
        hanzi: ['不', '去', '了'],
        pinyin: ['bú', 'qù', 'le'],
      },
    },
    {
      id: 'sentence89',
      level: 3,
      isFinal: true,
      korean: '우리는 이제 가지 않아요',
      chinese: {
        hanzi: ['我们', '不', '去', '了'],
        pinyin: ['wǒ men', 'bù', 'qù', 'le'],
      },
    },

    // 문장90 묶음
    {
      id: 'sentence90',
      level: 1,
      isFinal: false,
      korean: '만약...이면, 그러면...',
      chinese: {
        hanzi: ['如果……，', '就……'],
        pinyin: ['rúguǒ...', 'jiù...'],
      },
    },
    {
      id: 'sentence90',
      level: 2,
      isFinal: false,
      korean: '만약 비가 오면',
      chinese: {
        hanzi: ['如果', '下雨'],
        pinyin: ['rúguǒ', 'xià yǔ'],
      },
    },
    {
      id: 'sentence90',
      level: 3,
      isFinal: false,
      korean: '만약 비가 오면, 그러면 가지 않을 거예요',
      chinese: {
        hanzi: ['如果', '下雨，', '就', '不', '去', '了'],
        pinyin: ['rúguǒ', 'xià yǔ', 'jiù', 'bú', 'qù', 'le'],
      },
    },
    {
      id: 'sentence90',
      level: 4,
      isFinal: true,
      korean: '만약 비가 오면, 우리는 가지 않을 거예요',
      chinese: {
        hanzi: ['如果', '下雨，', '我们', '就', '不', '去', '了'],
        pinyin: ['rúguǒ', 'xià yǔ', 'wǒmen', 'jiù', 'bú', 'qù', 'le'],
      },
    },
  ],

  day10: [
    // 문장91 묶음
    {
      id: 'sentence91',
      level: 1,
      isFinal: false,
      korean: '기다리다',
      chinese: {
        hanzi: ['等'],
        pinyin: ['děng'],
      },
    },
    {
      id: 'sentence91',
      level: 2,
      isFinal: false,
      korean: '기다렸다',
      chinese: {
        hanzi: ['等', '了'],
        pinyin: ['děng', 'le'],
      },
    },
    {
      id: 'sentence91',
      level: 3,
      isFinal: false,
      korean: '오랫동안 기다렸다 ***很久 hěn jiǔ 오래',
      chinese: {
        hanzi: ['等', '了', '很久'],
        pinyin: ['děng', 'le', 'hěn jiǔ'],
      },
    },
    {
      id: 'sentence91',
      level: 4,
      isFinal: true,
      korean: '나는 오랫동안 기다렸어요',
      chinese: {
        hanzi: ['我', '等', '了', '很久'],
        pinyin: ['wǒ', 'děng', 'le', 'hěn jiǔ'],
      },
    },

    // 문장92 묶음
    {
      id: 'sentence92',
      level: 1,
      isFinal: false,
      korean: '늦었다',
      chinese: {
        hanzi: ['迟到', '了'],
        pinyin: ['chídào', 'le'],
      },
    },
    {
      id: 'sentence92',
      level: 2,
      isFinal: false,
      korean: '그가 늦었기 때문에',
      chinese: {
        hanzi: ['因为', '他', '迟到', '了'],
        pinyin: ['yīnwèi', 'tā', 'chídào', 'le'],
      },
    },
    {
      id: 'sentence92',
      level: 3,
      isFinal: true,
      korean: '그가 늦었기 때문이에요, 나는 오랫동안 기다렸어요.',
      chinese: {
        hanzi: ['因为', '他', '迟到', '了,', '我', '等', '了', '很久'],
        pinyin: ['yīnwèi', 'tā', 'chídào', 'le', 'wǒ', 'děng', 'le', 'hěn jiǔ'],
      },
    },

    // 문장93 묶음
    {
      id: 'sentence93',
      level: 1,
      isFinal: false,
      korean: '가고 싶다',
      chinese: {
        hanzi: ['想', '去'],
        pinyin: ['xiǎng', 'qù'],
      },
    },
    {
      id: 'sentence93',
      level: 2,
      isFinal: false,
      korean: '많은 나라에 가고 싶다 ***很多国家 hěn duō guójiā 많은 나라',
      chinese: {
        hanzi: ['想', '去', '很多', '国家'],
        pinyin: ['xiǎng', 'qù', 'hěn duō', 'guójiā'],
      },
    },
    {
      id: 'sentence93',
      level: 3,
      isFinal: true,
      korean: '나는 많은 나라에 가고 싶어요',
      chinese: {
        hanzi: ['我', '想', '去', '很多', '国家'],
        pinyin: ['wǒ', 'xiǎng', 'qù', 'hěn duō', 'guójiā'],
      },
    },

    // 문장94 묶음
    {
      id: 'sentence94',
      level: 1,
      isFinal: false,
      korean: '특히...이다',
      chinese: {
        hanzi: ['特别是'],
        pinyin: ['tèbié shì'],
      },
    },
    {
      id: 'sentence94',
      level: 2,
      isFinal: false,
      korean: '특히 유럽이요',
      chinese: {
        hanzi: ['特别是', '欧洲'],
        pinyin: ['tèbié shì', 'Ōuzhōu'],
      },
    },
    {
      id: 'sentence94',
      level: 3,
      isFinal: false,
      korean:
        '가고 싶다 ***대답할 때에는 想去 xiǎng qù 가고 싶어요 를 想 xiǎng 이라고 줄여서 말하는 편이에요.',
      chinese: {
        hanzi: ['想', '(去)'],
        pinyin: ['xiǎng', '(qù)'],
      },
    },
    {
      id: 'sentence94',
      level: 4,
      isFinal: true,
      korean:
        '가고 싶어요, 저는 많은 나라에 가고 싶어요, 특히 유럽이요 ***대답할 때에는 想去 xiǎng qù 가고 싶어요 를 想 xiǎng 이라고 줄여서 말하는 편이에요.',
      chinese: {
        hanzi: [
          '想',
          '(去)，',
          '我',
          '想',
          '去',
          '很多',
          '国家，',
          '特别是',
          '欧洲',
        ],
        pinyin: [
          'xiǎng',
          '(qù),',
          'wǒ',
          'xiǎng',
          'qù',
          'hěn duō',
          'guójiā,',
          'tèbié shì',
          'Ōuzhōu',
        ],
      },
    },

    // 문장95 묶음
    {
      id: 'sentence95',
      level: 1,
      isFinal: false,
      korean: '솜씨',
      chinese: {
        hanzi: ['手艺'],
        pinyin: ['shǒuyì'],
      },
    },
    {
      id: 'sentence95',
      level: 2,
      isFinal: true,
      korean: '솜씨가 정말 좋아요',
      chinese: {
        hanzi: ['手艺', '真', '好'],
        pinyin: ['shǒuyì', 'zhēn', 'hǎo'],
      },
    },

    // 문장96 묶음
    {
      id: 'sentence96',
      level: 1,
      isFinal: false,
      korean: '요리사 솜씨 ***厨师 chúshī 요리사',
      chinese: {
        hanzi: ['厨师', '手艺'],
        pinyin: ['chúshī', 'shǒuyì'],
      },
    },
    {
      id: 'sentence96',
      level: 2,
      isFinal: false,
      korean: '요리사 솜씨가 정말 좋아요',
      chinese: {
        hanzi: ['厨师', '手艺', '真', '好'],
        pinyin: ['chúshī', 'shǒuyì', 'zhēn', 'hǎo'],
      },
    },
    {
      id: 'sentence96',
      level: 3,
      isFinal: true,
      korean: '맞아요, 요리사 솜씨가 정말 좋아요',
      chinese: {
        hanzi: ['是啊，', '厨师', '手艺', '真', '好'],
        pinyin: ['shì a', 'chúshī', 'shǒuyì', 'zhēn', 'hǎo'],
      },
    },

    // 문장97 묶음
    {
      id: 'sentence97',
      level: 1,
      isFinal: false,
      korean: '말한 것이 맞다',
      chinese: {
        hanzi: ['说得对'],
        pinyin: ['shuō de duì'],
      },
    },
    {
      id: 'sentence97',
      level: 2,
      isFinal: true,
      korean: '당신이 말한 것이 맞아요',
      chinese: {
        hanzi: ['你', '说', '得', '对'],
        pinyin: ['nǐ', 'shuō', 'de', 'duì'],
      },
    },

    // 문장98 묶음
    {
      id: 'sentence98',
      level: 1,
      isFinal: false,
      korean: '내 생각에...',
      chinese: {
        hanzi: ['我', '觉得……'],
        pinyin: ['wǒ', 'juéde'],
      },
    },
    {
      id: 'sentence98',
      level: 2,
      isFinal: false,
      korean: '내 생각에 당신이 말한 것이 맞아요',
      chinese: {
        hanzi: ['我', '觉得', '你', '说', '得', '对'],
        pinyin: ['wǒ', 'juéde', 'nǐ', 'shuō', 'de', 'duì'],
      },
    },
    {
      id: 'sentence98',
      level: 3,
      isFinal: false,
      korean: '동의하다',
      chinese: {
        hanzi: ['同意'],
        pinyin: ['tóngyì'],
      },
    },
    {
      id: 'sentence98',
      level: 4,
      isFinal: true,
      korean: '동의해요, 내 생각에 당신이 말한 것이 맞아요',
      chinese: {
        hanzi: ['同意，', '我', '觉得', '你', '说', '得', '对'],
        pinyin: ['tóngyì', 'wǒ', 'juéde', 'nǐ', 'shuō', 'de', 'duì'],
      },
    },

    // 문장99 묶음
    {
      id: 'sentence99',
      level: 1,
      isFinal: false,
      korean: '뭐든지...',
      chinese: {
        hanzi: ['什么都……'],
        pinyin: ['shénme dōu'],
      },
    },
    {
      id: 'sentence99',
      level: 2,
      isFinal: false,
      korean: '소용없다',
      chinese: {
        hanzi: ['白搭'],
        pinyin: ['báidā'],
      },
    },
    {
      id: 'sentence99',
      level: 3,
      isFinal: true,
      korean: '뭐든지 다 소용없어요',
      chinese: {
        hanzi: ['什么', '都', '白搭'],
        pinyin: ['shénme', 'dōu', 'báidā'],
      },
    },

    // 문장100 묶음
    {
      id: 'sentence100',
      level: 1,
      isFinal: false,
      korean: '건강이 좋지 않다 ***身体 shēntǐ 몸',
      chinese: {
        hanzi: ['身体', '不', '好'],
        pinyin: ['shēntǐ', 'bù', 'hǎo'],
      },
    },
    {
      id: 'sentence100',
      level: 2,
      isFinal: false,
      korean: '건강이 좋지 않으면, 뭐든지 다 소용없어요',
      chinese: {
        hanzi: ['身体', '不', '好，', '什么', '都', '白搭'],
        pinyin: ['shēntǐ', 'bù', 'hǎo', 'shénme', 'dōu', 'báidā'],
      },
    },
    {
      id: 'sentence100',
      level: 3,
      isFinal: false,
      korean:
        '건강이 가장 중요하다 ***健康 Jiànkāng 건강 ***最重要 Zuì zhòngyào 가장 중요하다',
      chinese: {
        hanzi: ['健康', '最', '重要'],
        pinyin: ['jiànkāng', 'zuì', 'zhòngyào'],
      },
    },
    {
      id: 'sentence100',
      level: 4,
      isFinal: false,
      korean: '내 생각에 건강이 가장 중요하다',
      chinese: {
        hanzi: ['我', '觉得', '健康', '最', '重要'],
        pinyin: ['wǒ', 'juéde', 'jiànkāng', 'zuì', 'zhòngyào'],
      },
    },
    {
      id: 'sentence100',
      level: 5,
      isFinal: true,
      korean:
        '내 생각에 건강이 가장 중요해요, 건강이 좋지 않으면, 뭐든지 다 소용없어요',
      chinese: {
        hanzi: [
          '我',
          '觉得',
          '健康',
          '最',
          '重要,',
          '身体',
          '不',
          '好,',
          '什么',
          '都',
          '白搭',
        ],
        pinyin: [
          'wǒ',
          'juéde',
          'jiànkāng',
          'zuì',
          'zhòngyào',
          'shēntǐ',
          'bù',
          'hǎo',
          'shénme',
          'dōu',
          'báidā',
        ],
      },
    },
  ],
};
