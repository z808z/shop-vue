const _products = [
  {
    'id': 1,
    'title': 'Товар 1',
    'price': 5000,
    'description': 'Повседневная практика показывает, что новая модель организационной деятельности влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач.',
    'img': 'https://bulma.io/images/placeholders/640x480.png',
    'content': '<p>Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности играет важную роль в формировании существенных финансовых и административных условий. Таким образом сложившаяся структура организации в значительной степени обуславливает создание существенных финансовых и административных условий.</p><p>Товарищи! начало повседневной работы по формированию позиции требуют от нас анализа систем массового участия. Не следует, однако забывать, что новая модель организационной деятельности играет важную роль в формировании соответствующий условий активизации. Значимость этих проблем настолько очевидна, что укрепление и развитие структуры требуют от нас анализа дальнейших направлений развития. Разнообразный и богатый опыт реализация намеченных плановых заданий позволяет оценить значение соответствующий условий активизации.</p>'
  },
  {
    'id': 2,
    'title': 'Товар 2',
    'price': 1099,
    'description': 'Товарищи! постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям.',
    'img': 'https://bulma.io/images/placeholders/640x480.png',
    'content': '<p>Идейные соображения высшего порядка, а также рамки и место обучения кадров требуют определения и уточнения направлений прогрессивного развития. Разнообразный и богатый опыт укрепление и развитие структуры требуют определения и уточнения форм развития.</p><p>Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач.</p><p>Значимость этих проблем настолько очевидна, что сложившаяся структура организации влечет за собой процесс внедрения и модернизации новых предложений. Задача организации, в особенности же реализация намеченных плановых заданий играет важную роль в формировании направлений прогрессивного развития.</p>'
  },
  {
    'id': 3,
    'title': 'Товар 3',
    'price': 1999,
    'description': 'Не следует, однако забывать, что укрепление и развитие структуры позволяет выполнять важные задания по разработке систем массового участия.',
    'img': 'https://bulma.io/images/placeholders/640x480.png',
    'content': '<p>Идейные соображения высшего порядка, а также консультация с широким активом позволяет оценить значение форм развития. Значимость этих проблем настолько очевидна, что рамки и место обучения кадров способствует подготовки и реализации соответствующий условий активизации. Товарищи! укрепление и развитие структуры позволяет оценить значение форм развития.</p><p>Разнообразный и богатый опыт реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Задача организации, в особенности же реализация намеченных плановых заданий способствует подготовки и реализации форм развития. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки дальнейших направлений развития.</p>'
  },
  {
    'id': 4,
    'title': 'Товар 4',
    'price': 999,
    'description': 'Значимость этих проблем настолько очевидна, что рамки и место обучения кадров способствует подготовки и реализации соответствующий условий активизации.',
    'img': 'https://bulma.io/images/placeholders/640x480.png',
    'content': '<p>Значимость этих проблем настолько очевидна, что рамки и место обучения кадров способствует подготовки и реализации соответствующий условий активизации. Товарищи! укрепление и развитие структуры позволяет оценить значение форм развития.</p><p>Разнообразный и богатый опыт реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Задача организации, в особенности же реализация намеченных плановых заданий способствует подготовки и реализации форм развития. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки дальнейших направлений развития.</p>'
  }
]

export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  }
}
