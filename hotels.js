const hotels = [
  {
    slug: 'paris-luxe',
    country: 'Франция',
    name: 'Парижский люкс',
    price: 8400,
    rating: 4.9,
    guests: '2 гостя',
    description: 'Уютный номер рядом с Эйфелевой башней и завтрак включён.',
    tag: 'Париж',
    image: './images/paris.svg',
    gallery: [
      './images/paris.svg',
      './images/paris.svg',
      './images/paris.svg',
      './images/paris.svg'
    ],
    details: 'Расположен в самом центре Парижа, в нескольких шагах от Эйфелевой башни и Сены. Идеально подходит для романтической поездки или семейного отдыха.',
    reviews: [
      {
        name: 'Ольга',
        date: '2026-03-15',
        rating: 5,
        text: 'Отличный отель и идеальное расположение. Вид из окна просто сказка.'
      },
      {
        name: 'Алексей',
        date: '2026-02-28',
        rating: 4,
        text: 'Комфортно, чисто, превосходный персонал. Завтрак был вкусным.'
      }
    ]
  },
  {
    slug: 'dubai-view',
    country: 'ОАЭ',
    name: 'Номер с видом на Дубай',
    price: 9800,
    rating: 4.8,
    guests: '3 гостя',
    description: 'Современный отель в небоскрёбе со спа и панорамным бассейном.',
    tag: 'Дубай',
    image: './images/dubai.svg',
    gallery: [
      './images/dubai.svg',
      './images/dubai.svg',
      './images/dubai.svg',
      './images/dubai.svg'
    ],
    details: 'Отель находится в самом сердце Дубая, с потрясающим видом на небоскрёбы и море. Идеально для тех, кто любит роскошь и яркие впечатления.',
    reviews: [
      {
        name: 'Марина',
        date: '2026-01-10',
        rating: 5,
        text: 'Невероятный вид на город и очень комфортное обслуживание. Рекомендую.'
      },
      {
        name: 'Игорь',
        date: '2025-12-22',
        rating: 4,
        text: 'Прекрасный бассейн и сауна, номера стильные и чистые.'
      }
    ]
  },
  {
    slug: 'bangkok-villa',
    country: 'Таиланд',
    name: 'Вилла на пляже',
    price: 5200,
    rating: 4.7,
    guests: '4 гостя',
    description: 'Комфортный номер у моря с террасой и доступом к пляжу.',
    tag: 'Бангкок',
    image: './images/bangkok.svg',
    gallery: [
      './images/bangkok.svg',
      './images/bangkok.svg',
      './images/bangkok.svg',
      './images/bangkok.svg'
    ],
    details: 'Расположен прямо на берегу, с просторной террасой и зелёными садами. Отличный выбор для отдыха у моря и прогулок по пляжу.',
    reviews: [
      {
        name: 'Екатерина',
        date: '2026-04-02',
        rating: 5,
        text: 'Люблю этот отель за спокойную атмосферу и прямой доступ к пляжу.'
      },
      {
        name: 'Павел',
        date: '2026-03-18',
        rating: 4,
        text: 'Хороший сервис и отличная еда. Вид на океан восхитительный.'
      }
    ]
  },
  {
    slug: 'seville-suite',
    country: 'Испания',
    name: 'Севилья Сьют',
    price: 6300,
    rating: 4.6,
    guests: '2 гостя',
    description: 'Традиционный испанский отель с террасой в историческом центре.',
    tag: 'Севилья',
    image: './images/seville.svg',
    gallery: [
      './images/seville.svg',
      './images/seville.svg',
      './images/seville.svg',
      './images/seville.svg'
    ],
    details: 'Отель находится в старом квартале Севильи, рядом с узкими улочками, историческими площадями и атмосферными кафе.',
    reviews: [
      {
        name: 'Наталья',
        date: '2026-02-04',
        rating: 5,
        text: 'Очень атмосферное место, персонал был дружелюбным и полезным.'
      },
      {
        name: 'Дмитрий',
        date: '2026-01-29',
        rating: 4,
        text: 'Хорошие номера и отличное расположение рядом с исторической частью города.'
      }
    ]
  },
  {
    slug: 'rome-apartments',
    country: 'Италия',
    name: 'Римские апартаменты',
    price: 7100,
    rating: 4.8,
    guests: '2 гостя',
    description: 'Удобный номер в центре Рима, рядом с древними достопримечательностями.',
    tag: 'Рим',
    image: './images/rome.svg',
    gallery: [
      './images/rome.svg',
      './images/rome.svg',
      './images/rome.svg',
      './images/rome.svg'
    ],
    details: 'Расположен в шаговой доступности от Колизея и Форум Романум. Идеально подходит для тех, кто хочет увидеть Рим пешком.',
    reviews: [
      {
        name: 'Сергей',
        date: '2026-03-11',
        rating: 5,
        text: 'Великолепное местоположение и уютный номер. Завтраки были отличные.'
      },
      {
        name: 'Мария',
        date: '2026-02-21',
        rating: 4,
        text: 'Комфортно и стильно. Всё, что нужно для прогулок по Риму.'
      }
    ]
  },
  {
    slug: 'tokyo-deluxe',
    country: 'Япония',
    name: 'Токийский делюкс',
    price: 8800,
    rating: 4.9,
    guests: '2 гостя',
    description: 'Современный отель в сердце Токио с быстрым Wi-Fi и видом на город.',
    tag: 'Токио',
    image: './images/tokyo.svg',
    gallery: [
      './images/tokyo.svg',
      './images/tokyo.svg',
      './images/tokyo.svg',
      './images/tokyo.svg'
    ],
    details: 'Расположен рядом со станцией метро и популярными районами Синдзюку и Сибуя. Отличный выбор для любителей города.',
    reviews: [
      {
        name: 'Юлия',
        date: '2026-03-03',
        rating: 5,
        text: 'Современный дизайн и отличное расположение рядом с метро. Очень удобно.'
      },
      {
        name: 'Владимир',
        date: '2026-01-17',
        rating: 4,
        text: 'Номер был чистым, персонал внимательный и отзывчивый.'
      }
    ]
  }
];