const uniqid = require('uniqid');

const posts = [
  {
    id: uniqid(),
    userId: 'admin',
    nation: 'korea',
    title: '전주',
    comments: [
      {
        id: uniqid(),
        userId: '천재효식',
        description: 'ㅋㅋㅋㅋ',
      },
    ],
    liked: false,
    image: './img/korea4.jpg',
    description: '전주 한옥마을...',
  },
  {
    id: uniqid(),
    userId: '진영쏭',
    nation: 'korea',
    title: '석가모니',
    comments: [
      {
        id: uniqid(),
        userId: 'moment',
        description: '잘봤습니다^^',
      },
    ],
    liked: true,
    image: './img/korea3.jpg',
    description: '석가모니가 너무 멋있습... ',
  },
  {
    id: uniqid(),
    userId: '천재효식',
    nation: 'korea',
    title: '동궁과 월지',
    comments: [
      {
        id: uniqid(),
        userId: '천재효식',
        description: '나는 천재다!',
      },
    ],
    liked: false,
    image: './img/korea2.jpg',
    description: '경주가 너무 멋있네용...',
  },
  {
    id: uniqid(),
    userId: 'moment',
    nation: 'korea',
    title: '수원 화성',
    comments: [
      {
        id: uniqid(),
        userId: 'minsoftk',
        description: 'ㅋㅋㅋㅋ',
      },
    ],
    liked: true,
    image: './img/korea1.jpg',
    description: '경주가 너무 멋있네용...',
  },
  {
    id: uniqid(),
    userId: 'moment',
    nation: 'korea',
    title: '수원 화성',
    comments: [
      {
        id: uniqid(),
        userId: 'someone',
        description: '어쩌라고',
      },
    ],
    liked: true,
    image: './img/korea1.jpg',
    description: '경주가 너무 멋있네용...',
  },
  {
    id: uniqid(),
    userId: '진영쏭',
    nation: 'france',
    title: '에펠탑',
    comments: [
      {
        id: uniqid(),
        userId: 'minsoftk',
        description: 'ㅋㅋㅋ',
      },
    ],
    liked: true,
    image: './img/france1.jpg',
    description: '경주가 너무 멋있네용...',
  },
  {
    id: uniqid(),
    userId: '천재효식',
    nation: 'france',
    title: '르브르 박물관',
    comments: [
      {
        id: uniqid(),
        userId: 'minsoftk',
        description: 'ㅋㅋㅋ',
      },
    ],
    liked: true,
    image: './img/france2.jpg',
    description: '경주가 너무 멋있네용...',
  },
  {
    id: uniqid(),
    userId: '천재효식',
    nation: 'france',
    title: '브루고뉴',
    comments: [
      {
        id: uniqid(),
        userId: 'minsoftk',
        description: 'ㅋㅋㅋ',
      },
    ],
    liked: false,
    image: './img/france3.jpg',
    description: '경주가 너무 멋있네용...',
  },
  {
    id: uniqid(),
    userId: '천재효식',
    nation: 'korea',
    title: '가로수 길',
    comments: [
      {
        id: uniqid(),
        userId: 'minsoftk',
        description: 'ㅋㅋㅋ',
      },
    ],
    liked: true,
    image: './img/korea5.jpg',
    description: '경주가 너무 멋있네용...',
  },
  {
    id: uniqid(),
    userId: 'minsoftk',
    nation: 'france',
    title: '프로방스',
    comments: [
      {
        id: uniqid(),
        userId: 'minsoftk',
        description: 'ㅋㅋㅋ',
      },
    ],
    liked: true,
    image: './img/france4.jpg',
    description: '경주가 너무 멋있네용...',
  },
  {
    id: uniqid(),
    userId: 'minsoftk',
    nation: 'france',
    title: '쁘띠미누 등대',
    comments: [
      {
        id: uniqid(),
        userId: 'minsoftk',
        description: 'ㅋㅋㅋ',
      },
    ],
    liked: true,
    image: './img/france5.jpg',
    description: '경주가 너무 멋있네용...',
  },
  {
    id: uniqid(),
    userId: 'minsoftk',
    nation: 'france',
    title: '노르망디',
    comments: [
      {
        id: uniqid(),
        userId: 'minsoftk',
        description: 'ㅋㅋㅋ',
      },
    ],
    liked: true,
    image: './img/france5.jpg',
    description: '경주가 너무 멋있네용...',
  },
  {
    id: uniqid(),
    userId: 'minsoftk',
    nation: 'france',
    title: '',
    comments: [
      {
        id: uniqid(),
        userId: 'minsoftk',
        description: 'ㅋㅋㅋ',
      },
    ],
    liked: true,
    image: './img/france6.jpg',
    description: '경주가 너무 멋있네용...',
  },
  {
    id: uniqid(),
    userId: 'minsoftk',
    nation: 'usa',
    title: '뉴욕',
    comments: [
      {
        id: uniqid(),
        userId: 'minsoftk',
        description: 'ㅋㅋㅋ',
      },
    ],
    liked: true,
    image: './img/usa3.jpg',
    description: '경치가 너무 멋있네용...',
  },
  {
    id: uniqid(),
    userId: 'minsoftk',
    nation: 'usa',
    title: '마이애미',
    comments: [
      {
        id: uniqid(),
        userId: 'minsoftk',
        description: 'ㅋㅋㅋ',
      },
    ],
    liked: true,
    image: './img/usa4.jpg',
    description: '경주가 너무 멋있네용...',
  },
  {
    id: uniqid(),
    userId: 'minsoftk',
    nation: 'usa',
    title: '마운트 러쉬모어',
    comments: [
      {
        id: uniqid(),
        userId: 'minsoftk',
        description: 'ㅋㅋㅋ',
      },
    ],
    liked: true,
    image: './img/usa1.jpg',
    description: '경주가 너무 멋있네용...',
  },
  {
    id: uniqid(),
    userId: 'minsoftk',
    nation: 'australia',
    title: '코알라',
    comments: [
      {
        id: uniqid(),
        userId: 'minsoftk',
        description: 'ㅋㅋㅋ',
      },
    ],
    liked: true,
    image: './img/australia1.jpg',
    description: '경주가 너무 멋있네용...',
  },
  {
    id: uniqid(),
    userId: 'minsoftk',
    nation: 'australia',
    title: '시드니',
    comments: [
      {
        id: uniqid(),
        userId: 'minsoftk',
        description: 'ㅋㅋㅋ',
      },
    ],
    liked: true,
    image: './img/australia2.jpg',
    description: '경주가 너무 멋있네용...',
  },
  {
    id: uniqid(),
    userId: 'minsoftk',
    nation: 'australia',
    title: '캥거루',
    comments: [
      {
        id: uniqid(),
        userId: 'minsoftk',
        description: 'ㅋㅋㅋ',
      },
    ],
    liked: true,
    image: './img/australia3.jpg',
    description: '경주가 너무 멋있네용...',
  },
  {
    id: uniqid(),
    userId: 'minsoftk',
    nation: 'australia',
    title: '오페라 하우스',
    comments: [
      {
        id: uniqid(),
        userId: 'minsoftk',
        description: 'ㅋㅋㅋ',
      },
    ],
    liked: true,
    image: './img/australia4.jpg',
    description: '경주가 너무 멋있네용...',
  },
  {
    id: uniqid(),
    userId: 'minsoftk',
    nation: 'canada',
    title: '오페라 하우스',
    comments: [
      {
        id: uniqid(),
        userId: 'minsoftk',
        description: 'ㅋㅋㅋ',
      },
    ],
    liked: true,
    image: './img/canada1.jpg',
    description: '경주가 너무 멋있네용...',
  },
  {
    id: uniqid(),
    userId: 'minsoftk',
    nation: 'canada',
    title: 'moraine-lake',
    comments: [
      {
        id: uniqid(),
        userId: 'minsoftk',
        description: 'ㅋㅋㅋ',
      },
    ],
    liked: true,
    image: './img/canada2.jpg',
    description: '경주가 너무 멋있네용...',
  },
  {
    id: uniqid(),
    userId: 'minsoftk',
    nation: 'china',
    title: '천국의 사원',
    comments: [
      {
        id: uniqid(),
        userId: 'minsoftk',
        description: 'ㅋㅋㅋ',
      },
    ],
    liked: false,
    image: './img/china1.jpg',
    description: '경주가 너무 멋있네용...',
  },
  {
    id: uniqid(),
    userId: 'minsoftk',
    nation: 'china',
    title: '만리장성',
    comments: [
      {
        id: uniqid(),
        userId: 'minsoftk',
        description: 'ㅋㅋㅋ',
      },
    ],
    liked: true,
    image: './img/china2.jpg',
    description: '경주가 너무 멋있네용...',
  },
];

module.exports = posts.map(post => ({ ...post, description: `${post.title} 너무 멋있네요!` }));

// module.exports = [
//   {
//     id: 1,
//     userId: 'someone',
//     nation: 'korea',
//     title: '경복궁',
//     commentss: [
//       {
//         id: 2,
//         userId: 'someone',
//         description: '어쩌라고',
//       },
//     ],
//     liked: false,
//     image: './img/france1.jpg',
//     description: '내가 경복궁에 가서...',
//   },
//   {
//     id: 2,
//     userId: 'someone2',
//     nation: 'usa',
//     title: '경복궁',
//     commentss: [
//       {
//         id: 3,
//         userId: 'someone',
//         description: '어쩌라고',
//       },
//     ],
//     liked: false,
//     image: './img/france2.jpg',
//     description: '내가 경복궁에 가서...',
//   },
//   {
//     id: 3,
//     userId: 'someone3',
//     nation: 'korea',
//     title: '경복궁',
//     commentss: [
//       {
//         id: 4,
//         userId: 'someone',
//         description: '어쩌라고',
//       },
//     ],
//     liked: false,
//     image: './img/france1.jpg',
//     description: '내가 경복궁에 가서...',
//   },
// ];

// module.exports = [
//   {
//     id: 1,
//     userId: 'someone',
//     nation: 'korea',
//     title: '경복궁',
//     commentss: [
//       {
//         id: 2,
//         userId: 'someone',
//         description: '어쩌라고',
//       },
//     ],
//     liked: false,
//     image: 'url',
//     description: '내가 경복궁에 가서...',
//   },
// ];
