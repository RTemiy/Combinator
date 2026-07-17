export const GENERATORS_DATA = {
  'flowers': {
    name: 'Кашпо с землей',
    desc: 'Простое кашпо, наполненное плодородной землей. Идеальная основа для будущих растений.',
    categories: ['flowers'],
    parts: [
      { name: 'Земля', desc: 'Горсть плодородной земли, основа для любого растения.', icon: 'assets/icons/categories/flowers/part_lvl_01.png' },
      { name: 'Маленькое кашпо с землей', desc: 'Простое кашпо с землей, готовое принять первые семена.', icon: 'assets/icons/categories/flowers/part_lvl_02.png' },
      { name: 'Кашпо с удобренной землей', desc: 'Земля в этом кашпо обогащена питательными веществами для бурного роста.', icon: 'assets/icons/categories/flowers/part_lvl_03.png' }
    ],
    icons: [
      'assets/icons/categories/flowers/generator_lvl_01.png',
      'assets/icons/categories/flowers/generator_lvl_02.png',
      'assets/icons/categories/flowers/generator_lvl_02.png',
      'assets/icons/categories/flowers/generator_lvl_02.png',
      'assets/icons/categories/flowers/generator_lvl_02.png',
    ]
  },
  'coffee': {
    name: 'Кофейник',
    desc: 'Источник ароматного кофе. Чем выше уровень, тем сложнее и изысканнее напитки он может приготовить.',
    categories: ['coffee'],
    parts: [
      { name: 'Турка', desc: 'Классическая турка для варки насыщенного и ароматного кофе.', icon: 'assets/icons/categories/coffee/part_lvl_01.png' },
      { name: 'Кофемолка', desc: 'Ручная кофемолка, чтобы раскрыть весь аромат свежемолотых зерен.', icon: 'assets/icons/categories/coffee/part_lvl_02.png' },
      { name: 'Кофемолка и питчер', desc: 'Набор бариста: кофемолка и питчер для взбивания идеальной молочной пенки.', icon: 'assets/icons/categories/coffee/part_lvl_03.png' }
    ],
    icons: [
      'assets/icons/categories/coffee/generator_lvl_01.png',
      'assets/icons/categories/coffee/generator_lvl_02.png',
      'assets/icons/categories/coffee/generator_lvl_02.png',
      'assets/icons/categories/coffee/generator_lvl_02.png',
      'assets/icons/categories/coffee/generator_lvl_02.png',
    ]
  },
  'stationery': {
    name: 'Коробка с канцелярией',
    desc: 'Коробка, полная полезных вещей для учебы и творчества. От скрепки до всяких бумажек.',
    categories: ['books', 'stationery'],
    isHybrid: true,
    parts: [
      { name: 'Карандаши и ручки', desc: 'Базовый набор для письма и рисования. С чего-то нужно начинать.', icon: 'assets/icons/categories/writings/part_lvl_01.png' },
      { name: 'Карандаши, ручки, ластики и резинки', desc: 'Расширенный набор канцелярских принадлежностей. Теперь можно и ошибки исправлять.', icon: 'assets/icons/categories/writings/part_lvl_02.png' },
      { name: 'Канцелярский хлам', desc: 'Целая гора всего необходимого для учебы и творчества. Пора наводить порядок!', icon: 'assets/icons/categories/writings/part_lvl_03.png' }
    ],
    icons: [
      'assets/icons/categories/writings/generator_lvl_01.png',
      'assets/icons/categories/writings/generator_lvl_02.png',
      'assets/icons/categories/writings/generator_lvl_03.png',
      'assets/icons/categories/writings/generator_lvl_03.png',
      'assets/icons/categories/writings/generator_lvl_03.png',
    ]
  },
  'bakery': {
    name: 'Планетарный миксер',
    desc: 'Мощный помощник для смешивания ингредиентов. Создает основу для выпечки и кондитерских изделий.',
    categories: ['bakery', 'pastry'],
    isHybrid: true,
    parts: [
      { name: 'Вилка', desc: 'Простая вилка. Можно взбить яйцо, но для серьезной выпечки этого маловато.', icon: 'assets/icons/categories/dough/part_lvl_01.png' },
      { name: 'Венчик для взбивания', desc: 'Ручной венчик для создания воздушных кремов и легкого теста.', icon: 'assets/icons/categories/dough/part_lvl_02.png' },
      { name: 'Кухонный миксер', desc: 'Надежный ручной миксер, который значительно ускоряет процесс готовки.', icon: 'assets/icons/categories/dough/part_lvl_03.png' }
    ],
    icons: [
      'assets/icons/categories/dough/generator_lvl_01.png',
      'assets/icons/categories/dough/generator_lvl_02.png',
      'assets/icons/categories/dough/generator_lvl_02.png',
      'assets/icons/categories/dough/generator_lvl_02.png',
      'assets/icons/categories/dough/generator_lvl_02.png',
    ]
  },
  'currant': {
    name: 'Куст смородины',
    desc: 'Пышный куст, дающий сочные ягоды смородины. Источник витаминов и вдохновения для летних десертов.',
    categories: ['currant'],
    isStoryOnly: true,
    parts: [
      { name: 'Ветка с почками', desc: 'Крепкая ветка с набухшими почками, предвещающая богатый урожай.', icon: 'assets/icons/categories/currant/part_lvl_01.png' },
      { name: 'Черенок смородины', desc: 'Маленький черенок, готовый пустить корни и стать большим кустом.', icon: 'assets/icons/categories/currant/part_lvl_02.png' },
      { name: 'Саженец смородины', desc: 'Молодой саженец, уже с несколькими листочками. Ему нужен уход и забота.', icon: 'assets/icons/categories/currant/part_lvl_03.png' }
    ],
    icons: [
      'assets/icons/categories/currant/generator_lvl_01.png',
      'assets/icons/categories/currant/generator_lvl_02.png',
      'assets/icons/categories/currant/generator_lvl_03.png',
      'assets/icons/categories/currant/generator_lvl_03.png',
      'assets/icons/categories/currant/generator_lvl_03.png',
    ]
  },
  'beehive': {
    name: 'Улей',
    desc: 'Маленький домик для пчёл, источник сладкого мёда и ароматного воска.',
    categories: ['honey', 'wax'],
    isHybrid: true,
    isStoryOnly: true,
    parts: [
      { name: 'Пчелиная матка', desc: 'Сердце и душа любой пчелиной семьи. Без нее улей не построить.', icon: 'assets/icons/categories/honey/part_lvl_01.png' },
      { name: 'Сота', desc: 'Идеальная восковая ячейка, готовая для хранения мёда или выращивания потомства.', icon: 'assets/icons/categories/honey/part_lvl_02.png' },
      { name: 'Короб с сотами', desc: 'Целый корпус, заполненный сотами. Пчелиная семья будет рада такому жилищу.', icon: 'assets/icons/categories/honey/part_lvl_03.png' }
    ],
    icons: [
      'assets/icons/categories/honey/generator_lvl_01.png',
      'assets/icons/categories/honey/generator_lvl_02.png',
      'assets/icons/categories/honey/generator_lvl_02.png',
      'assets/icons/categories/honey/generator_lvl_02.png',
      'assets/icons/categories/honey/generator_lvl_02.png',
    ]
  },
  'bonus_chest': {
    name: 'Подарочная коробка', desc: 'Коробка с сюрпризом. Содержит редкие предметы, но имеет ограниченное количество зарядов.', categories: [], isSpecial: true,
    icons: [
      'assets/icons/bonus_chest_lvl1.png',
      'assets/icons/bonus_chest_lvl2.png',
    ]
  },
};