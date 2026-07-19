export const GENERATORS_DATA = {
  'flowers': {
    name: 'Кашпо с землей',
    desc: 'Простое кашпо, наполненное плодородной землей. Идеальная основа для будущих растений.',
    categories: ['flowers'],
    parts: [
      { name: 'Земля', desc: 'Горсть плодородной земли, основа для любого растения.', icon: new URL('/assets/icons/categories/flowers/part_lvl_01.png', import.meta.url) },
      { name: 'Маленькое кашпо с землей', desc: 'Простое кашпо с землей, готовое принять первые семена.', icon: new URL('/assets/icons/categories/flowers/part_lvl_02.png', import.meta.url) },
      { name: 'Кашпо с удобренной землей', desc: 'Земля в этом кашпо обогащена питательными веществами для бурного роста.', icon: new URL('/assets/icons/categories/flowers/part_lvl_03.png', import.meta.url) }
    ],
    icons: [
      new URL('/assets/icons/categories/flowers/generator_lvl_01.png', import.meta.url),
      new URL('/assets/icons/categories/flowers/generator_lvl_02.png', import.meta.url),
      new URL('/assets/icons/categories/flowers/generator_lvl_02.png', import.meta.url),
      new URL('/assets/icons/categories/flowers/generator_lvl_02.png', import.meta.url),
      new URL('/assets/icons/categories/flowers/generator_lvl_02.png', import.meta.url),
    ]
  },
  'coffee': {
    name: 'Кофейник',
    desc: 'Источник ароматного кофе. Чем выше уровень, тем сложнее и изысканнее напитки он может приготовить.',
    categories: ['coffee'],
    parts: [
      { name: 'Турка', desc: 'Классическая турка для варки насыщенного и ароматного кофе.', icon: new URL('/assets/icons/categories/coffee/part_lvl_01.png', import.meta.url) },
      { name: 'Кофемолка', desc: 'Ручная кофемолка, чтобы раскрыть весь аромат свежемолотых зерен.', icon: new URL('/assets/icons/categories/coffee/part_lvl_02.png', import.meta.url) },
      { name: 'Кофемолка и питчер', desc: 'Набор бариста: кофемолка и питчер для взбивания идеальной молочной пенки.', icon: new URL('/assets/icons/categories/coffee/part_lvl_03.png', import.meta.url) }
    ],
    icons: [
      new URL('/assets/icons/categories/coffee/generator_lvl_01.png', import.meta.url),
      new URL('/assets/icons/categories/coffee/generator_lvl_02.png', import.meta.url),
      new URL('/assets/icons/categories/coffee/generator_lvl_02.png', import.meta.url),
      new URL('/assets/icons/categories/coffee/generator_lvl_02.png', import.meta.url),
      new URL('/assets/icons/categories/coffee/generator_lvl_02.png', import.meta.url),
    ]
  },
  'stationery': {
    name: 'Коробка с канцелярией',
    desc: 'Коробка, полная полезных вещей для учебы и творчества. От скрепки до всяких бумажек.',
    categories: ['books', 'stationery'],
    isHybrid: true,
    parts: [
      { name: 'Карандаши и ручки', desc: 'Базовый набор для письма и рисования. С чего-то нужно начинать.', icon: new URL('/assets/icons/categories/stationery/part_lvl_01.png', import.meta.url) },
      { name: 'Карандаши, ручки, ластики и резинки', desc: 'Расширенный набор канцелярских принадлежностей. Теперь можно и ошибки исправлять.', icon: new URL('/assets/icons/categories/stationery/part_lvl_02.png', import.meta.url) },
      { name: 'Канцелярский хлам', desc: 'Целая гора всего необходимого для учебы и творчества. Пора наводить порядок!', icon: new URL('/assets/icons/categories/stationery/part_lvl_03.png', import.meta.url) }
    ],
    icons: [
      new URL('/assets/icons/categories/stationery/generator_lvl_01.png', import.meta.url),
      new URL('/assets/icons/categories/stationery/generator_lvl_02.png', import.meta.url),
      new URL('/assets/icons/categories/stationery/generator_lvl_03.png', import.meta.url),
      new URL('/assets/icons/categories/stationery/generator_lvl_03.png', import.meta.url),
      new URL('/assets/icons/categories/stationery/generator_lvl_03.png', import.meta.url),
    ]
  },
  'bakery': {
    name: 'Планетарный миксер',
    desc: 'Мощный помощник для смешивания ингредиентов. Создает основу для выпечки и кондитерских изделий.',
    categories: ['bakery', 'pastry'],
    isHybrid: true,
    parts: [
      { name: 'Вилка', desc: 'Простая вилка. Можно взбить яйцо, но для серьезной выпечки этого маловато.', icon: new URL('/assets/icons/categories/dough/part_lvl_01.png', import.meta.url) },
      { name: 'Венчик для взбивания', desc: 'Ручной венчик для создания воздушных кремов и легкого теста.', icon: new URL('/assets/icons/categories/dough/part_lvl_02.png', import.meta.url) },
      { name: 'Кухонный миксер', desc: 'Надежный ручной миксер, который значительно ускоряет процесс готовки.', icon: new URL('/assets/icons/categories/dough/part_lvl_03.png', import.meta.url) }
    ],
    icons: [
      new URL('/assets/icons/categories/dough/generator_lvl_01.png', import.meta.url),
      new URL('/assets/icons/categories/dough/generator_lvl_02.png', import.meta.url),
      new URL('/assets/icons/categories/dough/generator_lvl_02.png', import.meta.url),
      new URL('/assets/icons/categories/dough/generator_lvl_02.png', import.meta.url),
      new URL('/assets/icons/categories/dough/generator_lvl_02.png', import.meta.url),
    ]
  },
  'currant': {
    name: 'Куст смородины',
    desc: 'Пышный куст, дающий сочные ягоды смородины. Источник витаминов и вдохновения для летних десертов.',
    categories: ['currant'],
    isStoryOnly: true,
    parts: [
      { name: 'Ветка с почками', desc: 'Крепкая ветка с набухшими почками, предвещающая богатый урожай.', icon: new URL('/assets/icons/categories/currant/part_lvl_01.png', import.meta.url) },
      { name: 'Черенок смородины', desc: 'Маленький черенок, готовый пустить корни и стать большим кустом.', icon: new URL('/assets/icons/categories/currant/part_lvl_02.png', import.meta.url) },
      { name: 'Саженец смородины', desc: 'Молодой саженец, уже с несколькими листочками. Ему нужен уход и забота.', icon: new URL('/assets/icons/categories/currant/part_lvl_03.png', import.meta.url) }
    ],
    icons: [
      new URL('/assets/icons/categories/currant/generator_lvl_01.png', import.meta.url),
      new URL('/assets/icons/categories/currant/generator_lvl_02.png', import.meta.url),
      new URL('/assets/icons/categories/currant/generator_lvl_03.png', import.meta.url),
      new URL('/assets/icons/categories/currant/generator_lvl_03.png', import.meta.url),
      new URL('/assets/icons/categories/currant/generator_lvl_03.png', import.meta.url),
    ]
  },
  'beehive': {
    name: 'Улей',
    desc: 'Маленький домик для пчёл, источник сладкого мёда и ароматного воска.',
    categories: ['honey', 'wax'],
    isHybrid: true,
    isStoryOnly: true,
    parts: [
      { name: 'Пчелиная матка', desc: 'Сердце и душа любой пчелиной семьи. Без нее улей не построить.', icon: new URL('/assets/icons/categories/honey/part_lvl_01.png', import.meta.url) },
      { name: 'Сота', desc: 'Идеальная восковая ячейка, готовая для хранения мёда или выращивания потомства.', icon: new URL('/assets/icons/categories/honey/part_lvl_02.png', import.meta.url) },
      { name: 'Короб с сотами', desc: 'Целый корпус, заполненный сотами. Пчелиная семья будет рада такому жилищу.', icon: new URL('/assets/icons/categories/honey/part_lvl_03.png', import.meta.url) }
    ],
    icons: [
      new URL('/assets/icons/categories/honey/generator_lvl_01.png', import.meta.url),
      new URL('/assets/icons/categories/honey/generator_lvl_02.png', import.meta.url),
      new URL('/assets/icons/categories/honey/generator_lvl_02.png', import.meta.url),
      new URL('/assets/icons/categories/honey/generator_lvl_02.png', import.meta.url),
      new URL('/assets/icons/categories/honey/generator_lvl_02.png', import.meta.url),
    ]
  },
  'bonus_chest': {
    name: 'Подарочная коробка',
    desc: 'Коробка с сюрпризом. Содержит редкие предметы, но имеет ограниченное количество зарядов.',
    categories: [],
    isSpecial: true,
    icons: [
      new URL('/assets/icons/bonus_chest_lvl1.png', import.meta.url),
      new URL('/assets/icons/bonus_chest_lvl2.png', import.meta.url),
      new URL('/assets/icons/bonus_chest_lvl3.png', import.meta.url),
    ],
    // Таблица добычи. 'weight' - относительный шанс выпадения.
    drops: [
      {
        weight: 33,
        item: {
          isUpgradePart: true,
          icon: new URL('/assets/icons/upgrade_part.png', import.meta.url),
          name: 'Новая деталь',
          discoveryKey: 'upgrade_part'
        }
      },
      {
        weight: 33,
        item: {
          isMagicTool: true,
          icon: new URL('/assets/icons/magic_tool.png', import.meta.url),
          name: 'Магические инструменты',
          discoveryKey: 'magic_tool'
        }
      }
      ,
      {
        weight: 34,
        item: {
          isCopyBubble: true,
          icon: new URL('/assets/icons/copy_bubble.png', import.meta.url),
          name: 'Копирующий пузырь',
          discoveryKey: 'copy_bubble'
        }
      }
    ]
  },
};