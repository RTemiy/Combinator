const GENERATORS_DATA = {
  'stationery': { icon: '✏️', name: 'Склад канцелярии', desc: 'Хранилище писчих принадлежностей.', categories: ['stationery'], partIcon: '🧷' },
  'flowers': { icon: '🌱', name: 'Цветочная теплица', desc: 'Оазис для выращивания декоративной флоры.', categories: ['flowers'], partIcon: '🌿' },
  'sweets': { icon: '🧁', name: 'Кондитерская', desc: 'Уютное место, где создаются сладости и свежая выпечка.', categories: ['sweets', 'bakery'], isHybrid: true, partIcon: '🥣' },
  'accessories': { icon: '💎', name: 'Сокровищница', desc: 'Кованый ларь с ценными украшениями.', categories: ['accessories'], partIcon: '✨' },
  'gadgets': { icon: '⚙️', name: 'Завод электроники', desc: 'Конвейер высокотехнологичных микросхем.', categories: ['gadgets'], partIcon: '🎛' },
  'alcohol': { icon: '🍸', name: 'Барная стойка', desc: 'Место, где профессиональный бармен смешивает изысканные напитки.', categories: ['alcohol'], partIcon: '🧊' },
  'atelier': { icon: '🪡', name: 'Ателье', desc: 'Мастерская, где рождаются стильные наряды и эксклюзивная обувь.', categories: ['atelier', 'footwear'], isHybrid: true, partIcon: '🧶' },
  'household': { icon: '🧰', name: 'Хозяйственный склад', desc: 'Место, где хранятся инструменты и электроприборы.', categories: ['tools', 'electricity'], isHybrid: true, partIcon: '💡' },
  'transport': { icon: '🏠', name: 'Гараж', desc: 'Парк разнообразных транспортных средств.', categories: ['transport'], partIcon: '🛞' },
  'food_court': { icon: '🥙', name: 'Ресторанный дворик', desc: 'Место, где можно найти еду на любой вкус.', categories: ['fastfood', 'asian_food'], isHybrid: true, partIcon: '🍳' },
  'bonus_chest': { icon: '🎁', name: 'Подарочная коробка', desc: 'Коробка с сюрпризом. Содержит редкие предметы, но имеет ограниченное количество зарядов.', categories: [], isSpecial: true },
};

const CATEGORIES_CONFIG = {
  stationery: {
    name: 'Канцелярия',
    color: '#8a1b0b',
    generatorKey: 'stationery',
    items: [
      { level: 1, icon: '✏️', name: 'Простой карандаш', desc: 'Оставляет тонкий след на бумаге. Базовый инструмент художника.' },
      { level: 2, icon: '✒️', name: 'Гелевая ручка', desc: 'Пишет четко и ярко. Чернила сохнут мгновенно.' },
      { level: 3, icon: '✂️', name: 'Ножницы', desc: 'Острые стальные лезвия. Легко режут картон и бумагу.' },
      { level: 4, icon: '📔', name: 'Записная книжка', desc: 'Плотные листы в линейку. Хранит важные наброски сюжета.' },
      { level: 5, icon: '📚', name: 'Стопка учебников', desc: 'Сборник древних и современных знаний по всем наукам.' },
      { level: 6, icon: '🎒', name: 'Школьный рюкзак', desc: 'Вмещает в себя кучу тетрадей, учебников и пенал.' },
      { level: 7, icon: '🗄', name: 'Стеллаж с книгами', desc: 'Тут собраны все учебники, которые проходят в школе. ' }
    ]
  },
  flowers: {
    name: 'Растения',
    color: '#06d6a0',
    generatorKey: 'flowers',
    items: [
      { level: 1, icon: '🍃', name: 'Семена растений', desc: 'Маленькие спящие зерна. Посадите их в землю, чтобы дать жизнь.' },
      { level: 2, icon: '🌱', name: 'Зеленый росток', desc: 'Юный и хрупкий стебелек. Требует заботы, солнца и полива.' },
      { level: 3, icon: '🌿', name: 'Веточка мяты', desc: 'Свежие зеленые листочки. Источают приятный расслабляющий аромат.' },
      { level: 4, icon: '🪴', name: 'Растение в горшке', desc: 'Ухоженный цветок в керамике. Идеально подходит для украшения интерьера.' },
      { level: 5, icon: '🌹', name: 'Алая роза', desc: 'Прекрасный и гордый цветок с острыми защитными шипами.' },
      { level: 6, icon: '💐', name: 'Праздничный букет', desc: 'Красивая композиция из лучших цветов в подарочной упаковке.' },
      { level: 7, icon: '🌳', name: 'Раскидистое дерево', desc: 'Могучий вековой исполин. Может приносить плоды.', becomesGenerator: { category: 'fruits', charges: 7 } }
    ]
  },
  sweets: {
    name: 'Сладости',
    color: '#0353ff',
    generatorKey: 'sweets',
    items: [
      { level: 1, icon: '🍬', name: 'Мятная конфета', desc: 'Маленький леденец в шуршащей обертке.' },
      { level: 2, icon: '🍭', name: 'Леденец на палочке', desc: 'Сладкий карамельный кругляш.' },
      { level: 3, icon: '🍪', name: 'Овсяное печенье', desc: 'Ароматное печенье с кусочками шоколада.' },
      { level: 4, icon: '🍫', name: 'Плитка шоколада', desc: 'Настоящий темный шоколад.' },
      { level: 5, icon: '🍩', name: 'Глазированный пончик', desc: 'Пышное тесто с яркой посыпкой.' },
      { level: 6, icon: '🍰', name: 'Кусочек торта', desc: 'Бисквит с нежным ягодным кремом.' },
      { level: 7, icon: '🎂', name: 'Праздничный торт', desc: 'Шедевр со свечами — пик кондитерского искусства!' }
    ]
  },
  bakery: {
    name: 'Выпечка',
    color: '#d4a373',
    generatorKey: 'sweets',
    items: [
      { level: 1, icon: '🥠', name: 'Печенье с предсказанием', desc: 'Хрустящее лакомство с загадочной запиской внутри.' },
      { level: 2, icon: '🥨', name: 'Соленый крендель', desc: 'Классическая закуска с крупными кристаллами соли.' },
      { level: 3, icon: '🥐', name: 'Свежий круассан', desc: 'Воздушное слоеное тесто, тающее во рту.' },
      { level: 4, icon: '🥯', name: 'Бейгл с кунжутом', desc: 'Плотный бублик, идеально подходящий для сэндвичей.' },
      { level: 5, icon: '🥖', name: 'Французский багет', desc: 'Длинный хлеб с хрустящей корочкой и мягкой сердцевиной.' },
      { level: 6, icon: '🍞', name: 'Буханка хлеба', desc: 'Домашний пышный хлеб, основа любого стола.' },
      { level: 7, icon: '🥮', name: 'Каравай', desc: 'Традиционный большой хлеб на всю семью.' }
    ]
  },
  fruits: {
    name: 'Фрукты',
    color: '#ff8a5c',
    generatorKey: null,
    isItemGenerated: true,
    items: [
      { level: 1, icon: '🍋‍🟩', name: 'Лайм', desc: 'Кислый и освежающий, идеален для коктейлей.' },
      { level: 2, icon: '🍏', name: 'Зеленое яблоко', desc: 'Хрустящее и сочное, с легкой кислинкой.' },
      { level: 3, icon: '🍐', name: 'Груша', desc: 'Сладкая и ароматная, с нежной мякотью.' },
      { level: 4, icon: '🍊', name: 'Мандарин', desc: 'Символ праздника, легко чистится и вкусно пахнет.' },
      { level: 5, icon: '🍋', name: 'Лимон', desc: 'Ярко-желтый и кислый, богат витамином C.' },
      { level: 6, icon: '🍑', name: 'Персик', desc: 'Бархатистый и сочный, с неповторимым ароматом лета.' },
      { level: 7, icon: '🥭', name: 'Манго', desc: 'Король тропических фруктов, сладкий и экзотический.' }
    ]
  },
  accessories: {
    name: 'Драгоценности',
    color: '#e0aaff',
    generatorKey: 'accessories',
    items: [
      { level: 1, icon: '🪨', name: 'Необработанный камень', desc: 'Простой булыжник, в котором скрыт потенциал.' },
      { level: 2, icon: '🗝', name: 'Серебряный ключ', desc: 'Изящный ключ от шкатулки с драгоценностями.' },
      { level: 3, icon: '💍', name: 'Драгоценное кольцо', desc: 'Базовая заготовка для ювелирного изделия.' },
      { level: 4, icon: '💎', name: 'Ограненный алмаз', desc: 'Драгоценный камень, засиявший после обработки.' },
      { level: 5, icon: '👑', name: 'Золотая корона', desc: 'Корона, украшенная вставками из драгоценных камней.' },
      { level: 6, icon: '💰', name: 'Сундук с сокровищами', desc: 'Полная коллекция богатств, собранная старателем.' },
      { level: 7, icon: '🏆', name: 'Артефакт власти', desc: 'Легендарная реликвия, венчающая мастерство создателя.' }
    ]
  },
  gadgets: {
    name: 'Гаджеты',
    color: '#4cc9f0',
    generatorKey: 'gadgets',
    items: [
      { level: 1, icon: '📼', name: 'Видеокассета', desc: 'Старая магнитная лента с записью памятных моментов.' },
      { level: 2, icon: '💽', name: 'Компакт-диск', desc: 'Цифровой носитель информации начала эры технологий.' },
      { level: 3, icon: '🎧', name: 'Проводные наушники', desc: 'Классический аксессуар для погружения в мир музыки.' },
      { level: 4, icon: '⌚️', name: 'Смарт-часы', desc: 'Первый шаг в объединении стиля и умных технологий.' },
      { level: 5, icon: '📱', name: 'Смартфон', desc: 'Карманный центр управления всей вашей цифровой жизнью.' },
      { level: 6, icon: '🖥', name: 'Персональный компьютер', desc: 'Мощная рабочая станция для создания контента.' },
      { level: 7, icon: '💻', name: 'Ультрабук', desc: 'Вершина мобильных технологий и производительности.' }
    ]
  },
  fastfood: {
    name: 'Фастфуд',
    color: '#ff8a5c',
    generatorKey: 'food_court',
    items : [
      { level: 1, icon: '🥓', name: 'Хрустящий бекон', desc: 'Тонко нарезанные и хорошо прожаренные ломтики бекона.' },
      { level: 2, icon: '🍟', name: 'Картофель фри', desc: 'Хрустящие золотистые палочки.' },
      { level: 3, icon: '🥪', name: 'Сэндвич', desc: 'Классический сэндвич с ветчиной и сыром.' },
      { level: 4, icon: '🌭', name: 'Хот-дог', desc: 'Сочная сосиска в свежей булке.' },
      { level: 5, icon: '🍔', name: 'Двойной чизбургер', desc: 'Две котлеты с сыром в свежей булке.' },
      { level: 6, icon: '🌯', name: 'Сытный ролл', desc: 'Большая порция с овощами и мясом в лаваше.' },
      { level: 7, icon: '🍗', name: 'Куриный сет', desc: 'Целое ведерко горячих и хрустящих крылышек.' }
    ]
  },
  alcohol: {
    name: 'Алкоголь',
    color: '#ff5cf1',
    generatorKey: 'alcohol',
    items : [
      { level: 1, icon: '🍺', name: 'Светлое пиво', desc: 'Классическое холодное пиво в кружке.' },
      { level: 2, icon: '🍻', name: 'Две кружки', desc: 'Пара бокалов для приятной компании.' },
      { level: 3, icon: '🍷', name: 'Бокал вина', desc: 'Изысканное красное вино.' },
      { level: 4, icon: '🥂', name: 'Игристое вино', desc: 'Бокалы с шампанским для тоста.' },
      { level: 5, icon: '🍾', name: 'Бутылка шампанского', desc: 'Праздничное игристое в охлажденной бутылке.' },
      { level: 6, icon: '🥃', name: 'Виски', desc: 'Крепкий благородный напиток в стакане.' },
      { level: 7, icon: '🍹', name: 'Авторский коктейль', desc: 'Сложный напиток с украшениями. Может содержать экзотические ингредиенты.', becomesGenerator: { category: 'berries', charges: 7 } }
    ]
  },
  berries: {
    name: 'Ягоды и экзотика',
    color: '#8c1eff',
    generatorKey: null,
    isItemGenerated: true,
    items: [
      { level: 1, icon: '🫒', name: 'Оливка', desc: 'Маленький соленый плод, идеальная закуска.' },
      { level: 2, icon: '🍒', name: 'Вишня', desc: 'Сочная и сладкая ягода с косточкой.' },
      { level: 3, icon: '🍓', name: 'Клубника', desc: 'Ароматная красная ягода, любимица многих.' },
      { level: 4, icon: '🍇', name: 'Гроздь винограда', desc: 'Сладкие ягоды, собранные в гроздь.' },
      { level: 5, icon: '🥝', name: 'Киви', desc: 'Пушистый снаружи, ярко-зеленый и кислый внутри.' },
      { level: 6, icon: '🍌', name: 'Банан', desc: 'Мягкий и питательный тропический фрукт.' },
      { level: 7, icon: '🥥', name: 'Кокос', desc: 'Твердый орех с молоком и вкусной мякотью внутри.' }
    ]
  },
  atelier: {
    name: 'Ателье',
    color: '#00ffd0',
    generatorKey: 'atelier',
    items: [
      { level: 1, icon: '🪡', name: 'Игла', desc: 'Острый инструмент для начала большой работы.' },
      { level: 2, icon: '🧵', name: 'Катушка ниток', desc: 'Прочная нить для соединения деталей.' },
      { level: 3, icon: '🧤', name: 'Вязаные перчатки', desc: 'Первый результат рукоделия для защиты от холода.' },
      { level: 4, icon: '🧣', name: 'Теплый шарф', desc: 'Мягкий аксессуар, связанный с любовью.' },
      { level: 5, icon: '👚', name: 'Блузка', desc: 'Элегантный предмет повседневного гардероба.' },
      { level: 6, icon: '👗', name: 'Вечернее платье', desc: 'Изысканный наряд для особого случая.' },
      { level: 7, icon: '🧥', name: 'Дизайнерское пальто', desc: 'Вершина портновского искусства и стиля.' }
    ]
  },
  footwear: {
    name: 'Обувь',
    color: '#D2691E',
    generatorKey: 'atelier',
    items: [
      { level: 1, icon: '🩴', name: 'Пляжные шлепанцы', desc: 'Легкая обувь для прогулок по песку.' },
      { level: 2, icon: '🥿', name: 'Балетки', desc: 'Удобные и элегантные туфли на плоской подошве.' },
      { level: 3, icon: '👡', name: 'Босоножки', desc: 'Открытая летняя обувь на ремешках.' },
      { level: 4, icon: '👠', name: 'Туфли на каблуке', desc: 'Изящная женская обувь, добавляющая роста и уверенности.' },
      { level: 5, icon: '👞', name: 'Кожаные туфли', desc: 'Классическая мужская обувь для официальных мероприятий.' },
      { level: 6, icon: '🥾', name: 'Туристические ботинки', desc: 'Прочная и надежная обувь для походов и путешествий.' },
      { level: 7, icon: '👢', name: 'Дизайнерские сапоги', desc: 'Вершина обувного мастерства, сочетающая стиль и комфорт.' }
    ]
  },
  tools: {
    name: 'Инструменты',
    color: '#a9a9a9',
    generatorKey: 'household',
    items: [
      { level: 1, icon: '⚙️', name: 'Болт', desc: 'Простейший крепежный элемент.' },
      { level: 2, icon: '🔧', name: 'Гаечный ключ', desc: 'Инструмент для закручивания гаек.' },
      { level: 3, icon: '🔨', name: 'Молоток', desc: 'Надежный помощник для забивания гвоздей.' },
      { level: 4, icon: '🪚', name: 'Ручная пила', desc: 'Позволяет работать с деревом.' },
      { level: 5, icon: '🪓', name: 'Топор', desc: 'Тяжелый инструмент для рубки дров.' },
      { level: 6, icon: '🪏', name: 'Лопата', desc: 'Надежное приспособление для выкапывания земли.' },
      { level: 7, icon: '🧰', name: 'Ящик с инструментами', desc: 'Полный набор для любого ремонта.' }
    ]
  },
  electricity: {
    name: 'Электричество',
    color: '#ffc300',
    generatorKey: 'household',
    items: [
      { level: 1, icon: '⛓️‍💥', name: 'Провода', desc: 'Спутанные провода.' },
      { level: 2, icon: '🔌', name: 'Электрическая вилка', desc: 'Соединяет прибор с сетью.' },
      { level: 3, icon: '🔋', name: 'Батарейка', desc: 'Портативный источник энергии.' },
      { level: 4, icon: '🔦', name: 'Карманный фонарик', desc: 'Освещает путь в темноте.' },
      { level: 5, icon: '📻', name: 'Портативное радио', desc: 'Ловит сигналы из эфира.' },
      { level: 6, icon: '📺', name: 'Старый телевизор', desc: 'Показывает черно-белые фильмы.' },
      { level: 7, icon: '📡', name: 'Спутниковая тарелка', desc: 'Принимает сигналы из космоса.' }
    ]
  },
  transport: {
    name: 'Транспорт',
    color: '#74c69d',
    generatorKey: 'transport',
    items: [
      { level: 1, icon: '🛼', name: 'Ролики', desc: 'Простой способ быстро передвигаться по парку.' },
      { level: 2, icon: '🛴', name: 'Самокат', desc: 'Легкий и маневренный городской транспорт.' },
      { level: 3, icon: '🚲', name: 'Велосипед', desc: 'Экологичный транспорт для прогулок и поездок на работу.' },
      { level: 4, icon: '🛻', name: 'Пикап', desc: 'Небольшой грузовичок для перевозки малогабаритных грузов.' },
      { level: 5, icon: '🚗', name: 'Автомобиль', desc: 'Комфортное средство передвижения для всей семьи.' },
      { level: 6, icon: '🚚', name: 'Грузовик', desc: 'Мощная машина для транспортировки серьезных грузов.' },
      { level: 7, icon: '🚛', name: 'Фура', desc: 'Огромный автопоезд для междугородних перевозок.' }
    ]
  },
  asian_food: {
    name: 'Азиатская еда',
    color: '#e63946',
    generatorKey: 'food_court',
    items: [
      { level: 1, icon: '🥢', name: 'Палочки для еды', desc: 'Главный столовый прибор в Азии.' },
      { level: 2, icon: '🍚', name: 'Миска риса', desc: 'Основа для любого азиатского блюда.' },
      { level: 3, icon: '🍙', name: 'Онигири', desc: 'Треугольный рисовый шарик с начинкой.' },
      { level: 4, icon: '🍣', name: 'Суши', desc: 'Ломтик свежей рыбы на подушке из риса.' },
      { level: 5, icon: '🍛', name: 'Карри с рисом', desc: 'Пряное и сытное блюдо с густым соусом.' },
      { level: 6, icon: '🍲', name: 'Суп-лапша', desc: 'Насыщенный азиатский суп с лапшой и добавками.' },
      { level: 7, icon: '🍱', name: 'Бенто-бокс', desc: 'Коробочка с полноценным японским обедом.' }
    ]
  }
};

const CHARACTERS = [
  { icon: '🐱', name: 'Кот Том', desc: 'Местный пушистый сибарит. Ценит комфорт и уют, всегда в поисках чего-то приятного.' },
  { icon: '🦊', name: 'Лиса Алиса', desc: 'Хитрая авантюристка. Всегда в движении, ищет что-то необычное для своих приключений.' },
  { icon: '🐻', name: 'Мишка По', desc: 'Добродушный любитель природы. Ценит простые радости и всё, что приносит хорошее настроение.' },
  { icon: '🐸', name: 'Жабка Пепе', desc: 'Философ и ценитель мемов. Постоянно в раздумьях, ищет вдохновение в самых разных вещах.' },
  { icon: '🧙‍♂️', name: 'Маг Гендальф', desc: 'Древний волшебник. Ищет знания и артефакты, чтобы поддерживать баланс в мире.' },
  { icon: '🧝‍♀️', name: 'Эльфийка Лия', desc: 'Хранительница лесного спокойствия. Ценит красоту и гармонию, всегда рада новым открытиям.' },
  { icon: '🧛‍♂️', name: 'Граф Влад', desc: 'Загадочный аристократ из замка неподалеку. Предпочитает изысканные вещи, подчеркивающие его статус.' },
  { icon: '🦝', name: 'Енот Рокки', desc: 'Завзятый изобретатель и мастер на все руки. Постоянно ищет материалы для своих новых проектов.' },
  { icon: '🐼', name: 'Панда Мэй', desc: 'Милая любительница уюта и чаепитий. Всегда рада поднять настроение чем-то вкусным и приятным.' },
  { icon: '🦉', name: 'Сова Оливия', desc: 'Мудрая исследовательница местной академии. Собирает информацию и ценит всё, что способствует обучению.' },
  { icon: '👩‍🍳', name: 'Шеф-повар Анна', desc: 'Талантливый кулинар, который постоянно ищет новые ингредиенты для своих гастрономических шедевров.' },
  { icon: '👨‍🌾', name: 'Фермер Джон', desc: 'Трудолюбивый земледелец. Ему всегда нужны инструменты и материалы для своей фермы.' },
  { icon: '👨‍🚀', name: 'Астронавт Алекс', desc: 'Исследователь космоса. Собирает припасы и оборудование для долгой миссии на орбите.' },
  { icon: '🧜‍♀️', name: 'Русалка Ариэль', desc: 'Загадочная обитательница морских глубин. Интересуется всем, что связано с миром людей.' }
];

const STORY_CHARACTERS = [
  { icon: '🕵️‍♂️', name: 'Незнакомец', desc: 'Секретный агент под прикрытием. Его запросы всегда важны и окутаны тайной.' },
  { icon: '🦸‍♂️', name: 'Супергерой', desc: 'Защитник города. Ему экстренно требуются ресурсы для борьбы со вселенским злом.' },
  { icon: '👽', name: 'Пришелец', desc: 'Гость с далеких звезд. Изучает земную культуру через самые необычные запросы.' },
  { icon: '🤖', name: 'Киборг X-100', desc: 'Робот из будущего. Его алгоритмы требуют четких поставок для выполнения миссии.' },
  { icon: '👑', name: 'Королева', desc: 'Правительница далекого королевства. Ее указы требуют немедленного исполнения и лучших ресурсов.' },
  { icon: '🐉', name: 'Дракон', desc: 'Древнее и мудрое существо. Его запросы редки, но всегда имеют огромное значение для всего мира.' }
];

const ACHIEVEMENTS_DATA = {
  totalMerges: {
    id: 'totalMerges',
    name: 'Мастер комбинаций',
    desc: 'Совершите определенное количество слияний.',
    icon: '✨',
    tiers: [
      { goal: 50, reward: 100 },
      { goal: 250, reward: 250 },
      { goal: 1000, reward: 500 },
      { goal: 5000, reward: 1000 },
    ]
  },
  totalOrdersCompleted: {
    id: 'totalOrdersCompleted',
    name: 'Надежный поставщик',
    desc: 'Выполните определенное количество заказов.',
    icon: '📦',
    tiers: [
      { goal: 10, reward: 150 },
      { goal: 50, reward: 300 },
      { goal: 100, reward: 600 },
      { goal: 250, reward: 1200 },
    ]
  },
  totalCoinsEarned: {
    id: 'totalCoinsEarned',
    name: 'Богач',
    desc: 'Заработайте определенное количество монет за все время.',
    icon: '💰',
    tiers: [
      { goal: 1000, reward: 100 },
      { goal: 5000, reward: 250 },
      { goal: 20000, reward: 500 },
      { goal: 100000, reward: 1000 },
    ]
  },
  totalEnergySpent: {
    id: 'totalEnergySpent',
    name: 'Энерджайзер',
    desc: 'Потратьте определенное количество энергии.',
    icon: '⚡',
    tiers: [
      { goal: 500, reward: 50 },
      { goal: 2000, reward: 150 },
      { goal: 10000, reward: 400 },
      { goal: 50000, reward: 800 },
    ]
  }
};

const CONFIG = {
  // Grid and Board
  GRID_COLS: 5,
  GRID_ROWS: 7,
  MAX_ITEM_LEVEL: 7,
  MAX_GENERATOR_LEVEL: 5,
  STARTING_ITEMS_COUNT: 2,
  BLOCKED_ITEMS_AT_START: 23,

  // Energy
  MAX_ENERGY: 100,
  ENERGY_REGEN_INTERVAL: 10000,
  ENERGY_REGEN_AMOUNT: 1,
  STORY_ORDER_ENERGY_REWARD: 3,
  ORDER_ENERGY_REWARD: 1,
  OFFLINE_ENERGY_REGEN_RATE: 10000,

  // Coinss
  COIN_MULTIPLIER: 5,
  COINS_PER_ORDER_CANCEL: 75,
  BLOCKED_CLEAR_COST_COINS: 50,
  GENERATOR_RECHARGE_COST: 100,
  ENERGY_RECHARGE_COST_COINS: 250,

  // Orders
  MAX_ORDERS: 3,
  ORDER_GENERATION_STORY_CHANCE: 0.15,

  // Scoring and Progression
  ITEM_SCORE_MULTIPLIER: 50,

  // Timings and Animations
  ANIMATION: {
    FLY_DURATION: 400,
    FADE_DURATION: 400,
    PARTICLE_DURATION: 500,
    PARTICLE_COUNT: 12,
  },
  DRAG_THRESHOLD: 5,

  // Collection
  COLLECTION_BONUS_BASE_VALUE: 5, // 3 монеты за 1 уровень предмета

  // System
  VERSION_KEY: 'merge_game_version',
  GAME_VERSION: '1.1.6',
  SAVE_KEY: 'merge_game_save',
  LAST_LOGIN_KEY: 'last_login_time',
  ROMAN_NUMERALS: { 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V' },
};

const GEN_ENERGY_CONFIG = {
  1: { max: 25, cooldown: 30000 },
  2: { max: 25, cooldown: 25000 },
  3: { max: 25, cooldown: 20000 },
  4: { max: 30, cooldown: 20000 },
  5: { max: 30, cooldown: 15000 }
};

const SPAWN_CHANCES = {
  2: [{ level: 2, chance: 20  }],
  3: [{ level: 3, chance: 10 }, { level: 2, chance: 35 }],
  4: [{ level: 4, chance: 5 }, { level: 3, chance: 20 }, { level: 2, chance: 50 }],
  5: [{ level: 5, chance: 5 }, { level: 4, chance: 15 }, { level: 3, chance: 40 }, { level: 2, chance: 70 }]
};

const UNLOCK_THRESHOLDS = [
  { score: 1500, unlocked: false, level: 2, prevLimit: 0, orderLevels: { min: 3, max: 4 } },
  { score: 3000, unlocked: false, level: 3, prevLimit: 1500, orderLevels: { min: 4, max: 4 } },
  { score: 6000, unlocked: false, level: 4, prevLimit: 3000, orderLevels: { min: 4, max: 5 } },
  { score: 12000, unlocked: false, level: 5, prevLimit: 6000, orderLevels: { min: 5, max: 5 } },
  { score: 24000, unlocked: false, level: 6, prevLimit: 12000, orderLevels: { min: 5, max: 6 } },
  { score: 48000, unlocked: false, level: 7, prevLimit: 24000, orderLevels: { min: 6, max: 7 } }
];

// --- Game State ---
const gameState = {
  gridData: [],
  score: 0,
  coins: 0,
  energy: 100,
  orders: [],
  orderIdCounter: 1,
  lockedCells: [],
  newlyUnlockedCategories: [],
  activeCategories: [],
  rewardQueue: [],
  unlockedItemGenCategories: [],
  lockedCategories: [],
  discoveredItems: {},
  claimedAchievements: {},
  claimedCollectionBonuses: {},
  dragState: {
    element: null,
    startIndex: null,
    isMoved: false,
    isDragging: false,
    startX: 0,
    startY: 0,
  },
  lastClick: {
    index: null,
  }
};

const playerProfile = {
  name: 'Игрок',
  icon: '🧑‍🚀',
  startDate: Date.now(),
  timePlayed: 0, // в миллисекундах
  totalMerges: 0,
  totalOrdersCompleted: 0,
  totalCoinsEarned: 0,
  totalEnergySpent: 0,
  mergeCounts: {},
};

// --- Проверка версии игры ---
(function checkVersion() {
  const storedVersion = localStorage.getItem(CONFIG.VERSION_KEY);
  // Если версия не совпадает, сбрасываем сохранение и перезагружаем страницу
  if (storedVersion !== CONFIG.GAME_VERSION) {
    console.warn(`Обнаружена смена версии игры (была ${storedVersion}, стала ${CONFIG.GAME_VERSION}). Сохранение будет сброшено.`);
    localStorage.removeItem(CONFIG.SAVE_KEY);
    localStorage.removeItem(CONFIG.LAST_LOGIN_KEY); // Также очищаем время последнего входа
    localStorage.setItem(CONFIG.VERSION_KEY, CONFIG.GAME_VERSION); // Устанавливаем новую версию
    window.location.reload(); // Перезагружаем страницу, чтобы избежать ошибок
  }
})();

// --- DOM Elements ---
const DOMElements = {
  grid: document.getElementById('grid'),
  toastContainer: document.getElementById('toast-container'),
  infoModal: {
    overlay: document.getElementById('info-modal'),
    closeBtn: document.querySelector('#info-modal .modal-close'),
    icon: document.getElementById('m-icon'),
    title: document.getElementById('m-title'),
    subtitle: document.getElementById('m-subtitle'),
    desc: document.getElementById('m-desc'),
    actionBtn: document.getElementById('m-action-btn'),
    dangerGroup: document.getElementById('m-danger-group'),
    confirmBtn: document.getElementById('m-confirm-btn'),
    cancelBtn: document.querySelector('#m-danger-group .modal-btn-cancel'),
    infoBtn: document.getElementById('m-info-btn'),
  },
  detailModal: {
    overlay: document.getElementById('detail-modal'),
    closeBtn: document.getElementById('d-m-close'),
    icon: document.getElementById('d-m-icon'),
    title: document.getElementById('d-m-title'),
    body: document.getElementById('d-m-body'),
  },
  menuModal: {
    overlay: document.getElementById('menu-modal'),
    closeBtn: document.querySelector('#menu-modal .modal-close'),
    resetBtn: document.getElementById('reset-game-btn'),
    collectionBtn: document.getElementById('collection-btn'),
    profileBtn: document.getElementById('profile-btn'),
    achievementsBtn: document.getElementById('achievements-btn'),
    collectionNotificationDot: document.getElementById('collection-notification-dot'),
    achievementsNotificationDot: document.getElementById('achievements-notification-dot'),
  },
  profileModal: {
    overlay: document.getElementById('profile-modal'),
    closeBtn: document.getElementById('p-m-close'),
    icon: document.getElementById('p-m-icon'),
    title: document.getElementById('p-m-title'),
    body: document.getElementById('p-m-body'),
  },
  achievementsModal: {
    overlay: document.getElementById('achievements-modal'),
    closeBtn: document.getElementById('ach-m-close'),
    body: document.getElementById('ach-m-body'),
  },
  collectionModal: {
    overlay: document.getElementById('collection-modal'),
    closeBtn: document.getElementById('c-m-close'),
    body: document.getElementById('c-m-body'),
    footer: document.getElementById('c-m-footer'),
  },
  level: {
    bar: document.getElementById('level-bar'),
    text: document.getElementById('player-level'),
    score: document.getElementById('score-text'),
    container: document.querySelector('.level-container'),
  },
  energy: {
    value: document.getElementById('energy-val'),
    container: document.querySelector('.energy-container'),
  },
  coins: {
    value: document.getElementById('coins-val'),
    container: document.querySelector('.coins-container'),
  },
  menuBtn: document.querySelector('.menu-btn'),
  menuNotificationDot: document.getElementById('menu-notification-dot'),
  ordersList: document.getElementById('orders-list'),
  rewardQueuePanel: document.getElementById('reward-queue-panel'),
};

function initGame() {
  createGrid();
  if (localStorage.getItem(CONFIG.SAVE_KEY)) {
    loadGame();
  } else {
    startNewGame();
  }
  restoreGeneratorsEnergy();
  updateUI();
  addListeners();
  setInterval(() => {
    // Этот интервал отвечает за онлайн-регенерацию
    if (!document.hidden) {
      playerProfile.timePlayed += CONFIG.ENERGY_REGEN_INTERVAL;
    }
    regenerateEnergy();
    restoreGeneratorsEnergy();
    updateEnergyUI();

    // Также периодически сохраняем время последнего входа.
    // Это делает восстановление энергии после отсутствия более надежным,
    // особенно на мобильных устройствах, где событие закрытия вкладки может не сработать.
    localStorage.setItem(CONFIG.LAST_LOGIN_KEY, Date.now());
  }, CONFIG.ENERGY_REGEN_INTERVAL);
}

function addListeners() {
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseup', handleMouseUp);
  window.addEventListener('blur', cleanDragState);
  window.addEventListener('touchmove', handleTouchMove, { passive: false });
  window.addEventListener('touchend', handleTouchEnd);
  window.addEventListener('beforeunload', () => {
    localStorage.setItem(CONFIG.LAST_LOGIN_KEY, Date.now());
    saveGame();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      // При сворачивании вкладки сохраняем игру, чтобы учесть время
      saveGame();
    }
  });

  DOMElements.energy.container.addEventListener('click', () => {
    const modalOptions = {
      icon: '⚡️',
      title: 'Энергия',
      subtitle: 'Вечный движитель',
      desc: `За каждое использование генератора тратится 1 ед. энергии. Каждые ${CONFIG.ENERGY_REGEN_INTERVAL / 1000} сек. восстанавливается ${CONFIG.ENERGY_REGEN_AMOUNT} ед. энергии. За каждый выполненный сюжетный заказ вы получаете ${CONFIG.STORY_ORDER_ENERGY_REWARD} ед. энергии.`
    };

    // Добавляем кнопку восстановления, только если энергия не полная
    if (gameState.energy < CONFIG.MAX_ENERGY) {
      modalOptions.actionButton = {
        text: `Восстановить энергию (-${CONFIG.ENERGY_RECHARGE_COST_COINS}🪙)`,
        onClick: rechargePlayerEnergyWithCoins
      };
    }

    showModal(modalOptions);
  })

  DOMElements.level.container.addEventListener('click', () => {
    showModal({
      icon: '🚥',
      title: 'Уровень',
      subtitle: 'Главный показатель эффективности',
      desc: 'За сдачу заказов выдаются очки. Чем сложнее заказ, тем больше очков получается. При получении определенного количества очков, уровень повышается.'
    })
  })

  DOMElements.coins.container.addEventListener('click', () => {
    showModal({
      icon: '🪙',
      title: 'Монеты',
      subtitle: 'Игровая валюта',
      desc: `Монеты зарабатываются за выполнение заказов.`
    })
  })

  DOMElements.infoModal.closeBtn.addEventListener('click', closeModal);
  DOMElements.infoModal.cancelBtn.addEventListener('click', closeModal);
  DOMElements.menuBtn.addEventListener('click', openMenuModal);
  DOMElements.menuModal.closeBtn.addEventListener('click', closeMenuModal);
  DOMElements.menuModal.resetBtn.addEventListener('click', () => { closeMenuModal(); confirmReset(); });
  DOMElements.menuModal.collectionBtn.addEventListener('click', () => { closeMenuModal(); showCollectionModal(); });
  DOMElements.menuModal.profileBtn.addEventListener('click', () => { closeMenuModal(); openProfileModal(); });
  DOMElements.menuModal.achievementsBtn.addEventListener('click', () => { closeMenuModal(); openAchievementsModal(); });
  DOMElements.profileModal.closeBtn.addEventListener('click', closeProfileModal);
  DOMElements.detailModal.closeBtn.addEventListener('click', closeDetailModal);
  DOMElements.achievementsModal.closeBtn.addEventListener('click', closeAchievementsModal);
  DOMElements.collectionModal.closeBtn.addEventListener('click', closeCollectionModal);

  // Event delegation for dynamic order cards
  DOMElements.ordersList.addEventListener('click', (e) => {
    const target = e.target;
    const card = target.closest('.order-card');
    if (!card) return;

    const orderId = parseInt(card.dataset.orderId);
    if (isNaN(orderId)) return;

    const orderItemTarget = target.closest('.order-target');

    if (target.closest('.cancel-btn')) {
      confirmCancelOrder(orderId);
    } else if (target.closest('.complete-btn')) {
      completeOrder(orderId);
    } else if (target.closest('.order-header-info')) {
      showCharacterById(orderId);
    } else if (orderItemTarget) {
      const category = orderItemTarget.dataset.category;
      const icon = orderItemTarget.querySelector('.order-item-icon')?.innerHTML;
      if (category) {
        showCategoryProgressionModal(category, icon);
      }
    }
  });
}

function claimReward(rewardIndex, startElement) {
  const emptyCells = getEmptyGridCells();
  if (emptyCells.length === 0) {
    showToast("Нет свободного места на поле!", "error");
    return;
  }

  // Немедленно удаляем элемент из UI, чтобы избежать двойного клика
  startElement.style.pointerEvents = 'none';
  startElement.style.opacity = '0.5';

  const reward = gameState.rewardQueue[rewardIndex];
  const targetCellIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  const targetCellElement = DOMElements.grid.children[targetCellIndex];

  let icon = '';
  if (reward.isGenerator) {
    icon = GENERATORS_DATA[reward.generatorKey].icon;
  } else if (reward.isUpgradePart) {
    icon = '🔩';
  } else if (reward.isMagicTool) {
    icon = '⚒️';
  }
  else if (reward.isGeneratorPart) {
    icon = GENERATORS_DATA[reward.generatorKey].partIcon;
  }

  moveItem3D(startElement, targetCellElement, icon).then(() => {
    // Удаляем награду из массива только после завершения анимации
    gameState.rewardQueue.splice(rewardIndex, 1);
    gameState.gridData[targetCellIndex] = reward;

    saveGame();
    updateUI(); // Перерисовывает и очередь, и поле
    animateCellPop(targetCellIndex);
  });
}

function startNewGame() {
  gameState.gridData = Array(CONFIG.GRID_COLS * CONFIG.GRID_ROWS).fill(null);
  gameState.score = 0;
  gameState.coins = 0;
  gameState.energy = CONFIG.MAX_ENERGY;
  UNLOCK_THRESHOLDS.forEach(t => t.unlocked = false);
  gameState.rewardQueue = [];
  gameState.newlyUnlockedCategories = [];
  gameState.unlockedItemGenCategories = [];
  gameState.discoveredItems = {};
  gameState.claimedAchievements = {};
  gameState.claimedCollectionBonuses = {};
  // Сброс профиля
  playerProfile.name = 'Игрок';
  playerProfile.icon = '🧑‍🚀';
  playerProfile.startDate = Date.now();
  playerProfile.timePlayed = 0;
  playerProfile.totalMerges = 0;
  playerProfile.totalOrdersCompleted = 0;
  playerProfile.totalCoinsEarned = 0;
  playerProfile.totalEnergySpent = 0;
  playerProfile.mergeCounts = {};

  // --- Новая логика генерации стартовых генераторов ---
  const allGeneratorKeys = Object.keys(GENERATORS_DATA).filter(k => k !== 'bonus_chest');
  const startingGenerators = [];
  const activeCategoriesSet = new Set();

  // Выбираем 2 уникальные случайные категории
  const shuffledGenKeys = [...allGeneratorKeys].sort(() => 0.5 - Math.random());
  const genKey1 = shuffledGenKeys[0];
  const genKey2 = shuffledGenKeys[1];

  // Создаем два генератора на основе этих категорий
  startingGenerators.push({ isGenerator: true, generatorKey: genKey1, genLevel: 1, genEnergy: GEN_ENERGY_CONFIG[1].max, lastRegenTime: Date.now() });
  startingGenerators.push({ isGenerator: true, generatorKey: genKey2, genLevel: 1, genEnergy: GEN_ENERGY_CONFIG[1].max, lastRegenTime: Date.now() });
  markItemAsDiscovered(genKey1, 'generator');
  markItemAsDiscovered(genKey2, 'generator');

  [genKey1, genKey2].forEach(key => GENERATORS_DATA[key].categories.forEach(cat => activeCategoriesSet.add(cat)));
  gameState.activeCategories = Array.from(activeCategoriesSet);
  gameState.lockedCategories = Object.keys(CATEGORIES_CONFIG).filter(cat => !gameState.activeCategories.includes(cat) && !CATEGORIES_CONFIG[cat].isItemGenerated);
  shuffleArray(gameState.lockedCategories);
  // --- Конец новой логики ---

  let availableIndices = Array.from({length: CONFIG.GRID_COLS * CONFIG.GRID_ROWS}, (_, i) => i);
  for (let i = 0; i < CONFIG.BLOCKED_ITEMS_AT_START; i++) {
    if (availableIndices.length > 5) {
      const randIdx = Math.floor(Math.random() * availableIndices.length);
      const cellIndex = availableIndices.splice(randIdx, 1)[0];
      // Теперь создаем реальный предмет, но заблокированный
      const randomCat = gameState.activeCategories[Math.floor(Math.random() * gameState.activeCategories.length)];
      const randomLevel = Math.floor(Math.random() * 3) + 1; // Блокируем предметы с 1 по 3 уровень
      gameState.gridData[cellIndex] = { category: randomCat, level: randomLevel, isBlocked: true };
      markItemAsDiscovered(randomCat, randomLevel);
    }
  }

  // Размещаем стартовые генераторы
  startingGenerators.forEach(gen => {
    if (availableIndices.length > 0) {
      const randIdx = Math.floor(Math.random() * availableIndices.length);
      const cellIndex = availableIndices.splice(randIdx, 1)[0];
      gameState.gridData[cellIndex] = gen;
    }
  });


  for(let i = 0; i < CONFIG.STARTING_ITEMS_COUNT; i++) {
    let emptyCells = getEmptyGridCells();
    if(emptyCells.length > 0) {
      let randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      gameState.gridData[randomCell] = { category: gameState.activeCategories[i % gameState.activeCategories.length], level: 1 };
      markItemAsDiscovered(gameState.activeCategories[i % gameState.activeCategories.length], 1);
    }
  }

  gameState.orders = [];
  for (let i = 0; i < CONFIG.MAX_ORDERS; i++) {
    generateOrder();
  }

  saveGame();
}

function saveGame() {
  const saveData = {
    gridData: gameState.gridData,
    score: gameState.score,
    coins: gameState.coins,
    energy: gameState.energy,
    orders: gameState.orders,
    orderIdCounter: gameState.orderIdCounter,
    rewardQueue: gameState.rewardQueue,
    activeCategories: gameState.activeCategories,
    newlyUnlockedCategories: gameState.newlyUnlockedCategories,
    unlockedItemGenCategories: gameState.unlockedItemGenCategories,
    lockedCategories: gameState.lockedCategories,
    discoveredItems: gameState.discoveredItems, // Данные профиля
    claimedAchievements: gameState.claimedAchievements,
    profile: playerProfile,
    claimedCollectionBonuses: gameState.claimedCollectionBonuses,
    thresholds: UNLOCK_THRESHOLDS.map(t => ({ score: t.score, unlocked: t.unlocked, level: t.level }))
  };
  localStorage.setItem(CONFIG.SAVE_KEY, JSON.stringify(saveData));
}

function loadGame() {
  try {
    const loaded = JSON.parse(localStorage.getItem(CONFIG.SAVE_KEY));
    if (!loaded) {
      startNewGame();
      return;
    }

    // Restore offline energy
    const lastTime = parseInt(localStorage.getItem(CONFIG.LAST_LOGIN_KEY)) || Date.now();
    const timePassed = Date.now() - lastTime;
    const energyToRestore = Math.floor(timePassed / CONFIG.OFFLINE_ENERGY_REGEN_RATE);

    gameState.gridData = loaded.gridData;
    gameState.score = loaded.score;
    gameState.coins = loaded.coins || 0;
    // Защита от случая, когда в сохранении нет энергии (например, старая версия)
    gameState.energy = loaded.energy || 0;
    gameState.orders = loaded.orders;
    gameState.orderIdCounter = loaded.orderIdCounter;
    gameState.rewardQueue = loaded.rewardQueue || [];
    gameState.activeCategories = loaded.activeCategories;
    gameState.lockedCategories = loaded.lockedCategories;
    gameState.newlyUnlockedCategories = loaded.newlyUnlockedCategories || [];
    gameState.unlockedItemGenCategories = loaded.unlockedItemGenCategories || [];
    gameState.discoveredItems = loaded.discoveredItems || {};
    gameState.claimedAchievements = loaded.claimedAchievements || {};
    gameState.claimedCollectionBonuses = loaded.claimedCollectionBonuses || {};
    // Загрузка профиля с проверкой на случай старых сохранений
    const loadedProfile = loaded.profile || {};
    playerProfile.name = loadedProfile.name || 'Игрок';
    playerProfile.icon = loadedProfile.icon || '🧑‍🚀';
    playerProfile.startDate = loadedProfile.startDate || Date.now();
    playerProfile.timePlayed = loadedProfile.timePlayed || 0;
    playerProfile.totalMerges = loadedProfile.totalMerges || 0;
    playerProfile.totalOrdersCompleted = loadedProfile.totalOrdersCompleted || 0;
    playerProfile.totalCoinsEarned = loadedProfile.totalCoinsEarned || 0;
    playerProfile.totalEnergySpent = loadedProfile.totalEnergySpent || 0;
    playerProfile.mergeCounts = loadedProfile.mergeCounts || {};

    if (energyToRestore > 0) {
      gameState.energy = Math.min(CONFIG.MAX_ENERGY, gameState.energy + energyToRestore);
      showToast(`Вы отсутствовали. Восстановлено ${energyToRestore <= 100 ? energyToRestore : 100}⚡ энергии!`, "success");
    }

    if (loaded.thresholds) {
      loaded.thresholds.forEach((t, i) => {
        if (UNLOCK_THRESHOLDS[i]) UNLOCK_THRESHOLDS[i].unlocked = t.unlocked;
      });
    }
  } catch (e) {
    console.error("Ошибка при чтении сохранения, начата новая игра", e);
    startNewGame();
  }
}

function restoreGeneratorsEnergy() {
  let changed = false;
  const now = Date.now();
  gameState.gridData.forEach(item => {
    if (item && item.isGenerator && item.generatorKey !== 'bonus_chest') {
      const lvl = item.genLevel || 1;
      const config = GEN_ENERGY_CONFIG[lvl];
      if (item.genEnergy === undefined) item.genEnergy = config.max;
      if (!item.lastRegenTime) item.lastRegenTime = now;

      if (item.genEnergy < config.max) {
        const timePassed = now - item.lastRegenTime;
        const earnedCharges = Math.floor(timePassed / config.cooldown);
        if (earnedCharges > 0) {
          item.genEnergy = Math.min(config.max, item.genEnergy + earnedCharges);
          item.lastRegenTime = item.lastRegenTime + (earnedCharges * config.cooldown);
          changed = true;
        }
      } else {
        item.lastRegenTime = now;
      }
    }
  });
  if (changed) saveGame();
}

function createGrid() {
  DOMElements.grid.innerHTML = '';
  for (let i = 0; i < CONFIG.GRID_COLS * CONFIG.GRID_ROWS; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.index = i;
    cell.addEventListener('mousedown', (e) => startDrag(e, i));
    cell.addEventListener('touchstart', (e) => {
      e.preventDefault();
      startDrag(e, i);
    }, { passive: false });
    DOMElements.grid.appendChild(cell);
  }
}

function getAvailableEmptyCells() {
  return gameState.gridData.map((val, idx) => (val === null && !gameState.lockedCells.includes(idx)) ? idx : null).filter(val => val !== null);
}

function getEmptyGridCells() {
  return gameState.gridData.map((val, idx) => val === null ? idx : null).filter(val => val !== null);
}

function getCurrentPlayerLevel() {
  let currentLvl = 1;
  UNLOCK_THRESHOLDS.forEach(t => {
    if (gameState.score >= t.score) currentLvl = t.level;
  });
  return currentLvl;
}

function updateLevelProgressBar() {
  const currentLvl = getCurrentPlayerLevel();
  const barFill = DOMElements.level.bar;

  if (currentLvl >= CONFIG.MAX_ITEM_LEVEL) {
    barFill.style.width = '100%';
    DOMElements.level.score.innerText = gameState.score;
    return;
  }

  const currentThreshold = UNLOCK_THRESHOLDS.find(t => t.level === currentLvl + 1);
  if (currentThreshold) {
    const min = currentThreshold.prevLimit;
    const max = currentThreshold.score;
    const percentage = Math.max(0, ((gameState.score - min) / (max - min)) * 100);
    barFill.style.width = `${Math.max(0, Math.min(100, percentage))}%`;
  }
  DOMElements.level.score.innerText = gameState.score;
}

function regenerateEnergy() {
  if (gameState.energy < CONFIG.MAX_ENERGY) {
    gameState.energy = Math.min(CONFIG.MAX_ENERGY, gameState.energy + CONFIG.ENERGY_REGEN_AMOUNT);
    saveGame();
    // Обновляем только текстовое значение энергии, без перерисовки всего
    DOMElements.energy.value.innerText = gameState.energy;
  }
}

function updateMenuNotification() {
    if (hasUnclaimedAchievements() || hasUnclaimedCollectionBonuses()) {
        DOMElements.menuNotificationDot.style.display = 'block';
    } else {
        DOMElements.menuNotificationDot.style.display = 'none';
    }
}

function updateUI() {
  checkOrdersAvailability();
  renderGrid();
  renderRewardQueue();
  renderOrders();
  DOMElements.coins.value.innerText = gameState.coins;
  DOMElements.energy.value.innerText = gameState.energy;
  DOMElements.level.text.innerText = getCurrentPlayerLevel();
  updateLevelProgressBar();
  updateMenuNotification();
}

function renderRewardQueue() {
  const panel = DOMElements.rewardQueuePanel;
  panel.innerHTML = '';

  const queue = gameState.rewardQueue;
  const count = queue.length;

  // Итерируемся в обратном порядке, чтобы верхний элемент стопки (последний в массиве)
  // был отрендерен последним и оказался поверх других.
  for (let i = 0; i < count; i++) {
    const reward = queue[i];
    const indexInStack = count - 1 - i; // 0 - верхний, 1 - следующий и т.д.

    const rewardElem = document.createElement('div');
    rewardElem.classList.add('reward-item');

    // Только верхний элемент (последний в массиве) является кликабельным
    if (i === count - 1) {
      rewardElem.classList.add('claimable');
      rewardElem.onclick = (e) => claimReward(i, e.currentTarget);
    }

    // Сдвигаем и уменьшаем нижние элементы для эффекта стопки
    rewardElem.style.transform = `translateY(${indexInStack * 8}px) scale(${1 - indexInStack * 0.05})`;
    rewardElem.style.zIndex = 10 - indexInStack; // Верхний элемент имеет больший z-index

    if (reward.isGenerator) {
      const genInfo = GENERATORS_DATA[reward.generatorKey];
      rewardElem.classList.add('generator');
      rewardElem.title = `Забрать: ${genInfo.name}`;
      rewardElem.innerHTML = `<div class="generator-icon-container"><span class="generator-box-bg">📦</span><span class="generator-item-fg">${genInfo.icon}</span></div>`;
    } else if (reward.isUpgradePart) {
      rewardElem.innerHTML = '🔩';
      rewardElem.title = 'Забрать: Новая деталь';
    } else if (reward.isMagicTool) {
      rewardElem.innerHTML = '⚒️';
      rewardElem.title = 'Забрать: Магические инструменты';
    } else if (reward.isGeneratorPart) {
      const genInfo = GENERATORS_DATA[reward.generatorKey];
      rewardElem.classList.add('generator-part');
      rewardElem.title = `Забрать: Деталь для "${genInfo.name}"`;
      rewardElem.innerHTML = `
          <div class="generator-part-icon-container">
              <span class="part-bg-box">📦</span>
              <span class="part-bg-icon">${genInfo.icon}</span>
              <span class="part-fg-icon">${genInfo.partIcon}</span>
          </div>`;
    }

    panel.appendChild(rewardElem);
  }

  panel.style.display = gameState.rewardQueue.length > 0 ? 'flex' : 'none';
}

function updateEnergyUI() {
  DOMElements.energy.value.innerText = gameState.energy;
  const cells = document.querySelectorAll('.cell');
  gameState.gridData.forEach((item, idx) => {
    if (item && item.isGenerator) {
      renderGeneratorBadges(cells[idx], item);
    }
  });
}

function createParticleEffectHTML() {
  let html = '<div class="particle-container">';
  const directions = [
    {x: '30px', y: '0px'}, {x: '-25px', y: '15px'}, {x: '20px', y: '-25px'},
    {x: '-15px', y: '-30px'}, {x: '10px', y: '28px'}, {x: '-28px', y: '-5px'}
  ];
  for (let i = 1; i <= 6; i++) {
    const dir = directions[i-1];
    html += `<div class="particle p${i}" style="--x: ${dir.x}; --y: ${dir.y};"></div>`;
  }
  return html + '</div>';
}

function renderGrid() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell, idx) => {
    const item = gameState.gridData[idx];
    cell.innerHTML = '';
    cell.className = 'cell';

    if (item) {
      if (item.isBlocked) {
        cell.classList.add('blocked');
      } else if (item.isGeneratorPart) {
        cell.classList.add('generator-part-cell');
      } else if (item.isUpgradePart || item.isMagicTool) {
        cell.classList.add('booster-cell');
      }

      const wrapper = document.createElement('div');
      wrapper.classList.add('item-wrapper');

      if (item.isGenerator) {
        const lvl = item.genLevel || 1;
        cell.classList.add('generator-slot');

        const container = document.createElement('div');
        container.classList.add('generator-icon-container');

        const bgBox = document.createElement('span');
        bgBox.classList.add('generator-box-bg');
        bgBox.innerText = '📦';

        const fgItem = document.createElement('span');
        fgItem.classList.add('generator-item-fg');
        const genInfo = GENERATORS_DATA[item.generatorKey];
        fgItem.innerText = genInfo.icon;

        container.appendChild(bgBox);
        container.appendChild(fgItem);
        wrapper.appendChild(container);
        renderGeneratorBadges(cell, item);
      } else if (item.isItemGenerator) {
        const itemInfo = CATEGORIES_CONFIG[item.category].items[item.level - 1];
        wrapper.innerHTML = itemInfo.icon;

        // Добавляем значок заряда
        const chargeBadge = document.createElement('span');
        chargeBadge.classList.add('gen-energy-badge', 'charges'); // Переиспользуем существующие стили
        chargeBadge.innerHTML = `🍃 ${item.charges}`; // Кастомная иконка
        if (item.charges === 0) {
          chargeBadge.classList.add('gen-energy-badge-no-energy');
        }
        cell.appendChild(chargeBadge);

        // Добавляем звезду и частицы, так как предмет достиг максимального уровня в своей ветке
        const starBadge = document.createElement('span');
        starBadge.classList.add('max-level-star');
        starBadge.innerText = '⭐';
        cell.appendChild(starBadge);
        // Вставляем частицы перед звездочкой, чтобы звезда была поверх
        starBadge.insertAdjacentHTML('beforebegin', createParticleEffectHTML());

        // Предмет-генератор может быть частью заказа
        if (item.isAllocatedToOrder) {
          cell.classList.add('allocated-for-order');
          const checkmark = document.createElement('div');
          checkmark.classList.add('item-checkmark');
          cell.appendChild(checkmark);
        }
      } else if (item.isGeneratorPart) {
        const genInfo = GENERATORS_DATA[item.generatorKey];
        wrapper.innerHTML = `
            <div class="generator-part-icon-container">
                <span class="part-bg-box">📦</span>
                <span class="part-bg-icon">${genInfo.icon}</span>
                <span class="part-fg-icon">${genInfo.partIcon}</span>
            </div>`;

        const levelBadge = document.createElement('span');
        levelBadge.classList.add('item-level');
        levelBadge.innerText = item.level;
        cell.appendChild(levelBadge);
      } else if (item.isUpgradePart || item.isMagicTool) {
        // Общая логика для деталей и инструментов
        wrapper.innerHTML = item.isUpgradePart ? '🔩' : '⚒️';

        // Добавляем звездочку, так как их нельзя улучшить
        const starBadge = document.createElement('span');
        starBadge.classList.add('max-level-star');
        starBadge.innerText = '⭐';
        cell.appendChild(starBadge);

        // Добавляем эффект частиц
        const particleHTML = createParticleEffectHTML();
        // Вставляем частицы перед звездочкой, чтобы звезда была поверх
        starBadge.insertAdjacentHTML('beforebegin', particleHTML);
      } else {
        wrapper.innerHTML = CATEGORIES_CONFIG[item.category].items[item.level - 1].icon;

        // Добавляем эффект частиц для предметов максимального уровня
        if (item.level === CONFIG.MAX_ITEM_LEVEL) {
          const starBadge = document.createElement('span');
          starBadge.classList.add('max-level-star');
          starBadge.innerText = '⭐';
          cell.appendChild(starBadge);
          // Вставляем частицы перед звездочкой, чтобы звезда была поверх
          starBadge.insertAdjacentHTML('beforebegin', createParticleEffectHTML());
        } else {
          const levelBadge = document.createElement('span');
          levelBadge.classList.add('item-level');
          levelBadge.innerText = item.level;
          cell.appendChild(levelBadge);
        }

        // Подсветка для предметов, подходящих под заказ (не заблокированных)
        if (item.isAllocatedToOrder) {
          cell.classList.add('allocated-for-order');
          const checkmark = document.createElement('div');
          checkmark.classList.add('item-checkmark');
          cell.appendChild(checkmark);
        }
      }
      cell.appendChild(wrapper);
    }
  });
}

function renderGeneratorBadges(cell, item) {
  if (!cell || !item || !item.isGenerator) return;

  let lvl = item.genLevel || 1;

  // Удаляем старые значки, чтобы избежать дублирования
  cell.querySelector('.gen-energy-badge')?.remove();
  cell.querySelector('.gen-level-badge')?.remove();
  cell.querySelector('.max-level-star')?.remove();

  // Обновляем значок энергии/зарядов
  const energyBadge = document.createElement('span');
  energyBadge.classList.add('gen-energy-badge');

  if (item.generatorKey === 'bonus_chest') {
    energyBadge.innerText = `🎁 ${item.genCharges}`;
    energyBadge.classList.add('charges');
    if (item.genCharges === 0) {
      energyBadge.classList.add('gen-energy-badge-no-energy');
    }
  } else {
    energyBadge.innerText = `⚡${item.genEnergy}`;
    // Обновляем классы ячейки в зависимости от энергии
    cell.classList.remove('generator-slot-no-energy', 'generator-slot-low-energy');
    energyBadge.classList.remove('gen-energy-badge-no-energy');

    if (item.genEnergy <= 5 && item.genEnergy > 0) {
      cell.classList.add('generator-slot-low-energy');
      energyBadge.classList.add('gen-energy-badge-no-energy');
    } else if (item.genEnergy === 0) {
      cell.classList.add('generator-slot-no-energy');
      energyBadge.classList.add('gen-energy-badge-no-energy');
    }
  }
  cell.appendChild(energyBadge);

  // Обновляем значок уровня
  const levelBadge = document.createElement('span');
  levelBadge.classList.add('gen-level-badge');
  levelBadge.innerText = CONFIG.ROMAN_NUMERALS[lvl];
  cell.appendChild(levelBadge);

  // Для подарочной коробки уровень 2 - максимальный
  if (item.generatorKey === 'bonus_chest' && lvl === 2) {
    lvl = CONFIG.MAX_GENERATOR_LEVEL;
  }

  // Добавляем звезду для генератора максимального уровня
  if (lvl === CONFIG.MAX_GENERATOR_LEVEL) {
    const starBadge = document.createElement('span');
    starBadge.classList.add('max-level-star');
    starBadge.innerText = '⭐';
    cell.appendChild(starBadge);
  }
}

function startDrag(e, index) {
  if (gameState.lockedCells.includes(index) || !gameState.gridData[index] || gameState.dragState.isDragging) return;

  gameState.dragState.isDragging = true; // Блокировка
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;

  gameState.dragState.startIndex = index;
  gameState.dragState.isMoved = false;
  gameState.dragState.startX = clientX;
  gameState.dragState.startY = clientY;
}

function handleDragMove(clientX, clientY) {
  const { startIndex, isMoved, startX, startY } = gameState.dragState;
  if (startIndex === null) return;

  if (!isMoved && (Math.abs(clientX - startX) > CONFIG.DRAG_THRESHOLD || Math.abs(clientY - startY) > CONFIG.DRAG_THRESHOLD)) {
    gameState.dragState.isMoved = true;
    document.body.classList.add('is-dragging');
    if (!gameState.dragState.element) {
      // Запрещаем перетаскивание заблокированных предметов
      if (gameState.gridData[startIndex] && gameState.gridData[startIndex].isBlocked) { cleanDragState(); return; }

      // Создаем "призрак" только при реальном начале перетаскивания (когда курсор сдвинулся)
      const cells = document.querySelectorAll('.cell');
      const targetCell = cells[startIndex];
      const originalWrapper = targetCell.querySelector('.item-wrapper');
      if (!originalWrapper) {
        gameState.dragState.isDragging = false;
        return;
      }

      gameState.dragState.element = originalWrapper.cloneNode(true);
      gameState.dragState.element.classList.add('dragging');
      const rect = originalWrapper.getBoundingClientRect();
      gameState.dragState.element.style.left = `${rect.left}px`;
      gameState.dragState.element.style.top = `${rect.top}px`;
      document.body.appendChild(gameState.dragState.element);

      originalWrapper.style.opacity = '0.3';
    }
  }

  if (gameState.dragState.element) {
    gameState.dragState.element.style.left = `${clientX - 27}px`;
    gameState.dragState.element.style.top = `${clientY - 27}px`;
  }
}

function handleMouseMove(e) {
  handleDragMove(e.clientX, e.clientY);
}

function handleTouchMove(e) {
  handleDragMove(e.touches[0].clientX, e.touches[0].clientY);
}

function handleMouseUp(e) {
  if (gameState.dragState.startIndex === null) return;
  endDrag(e.clientX, e.clientY);
}

function handleTouchEnd(e) {
  if (gameState.dragState.startIndex === null) return;
  const changedTouch = e.changedTouches[0];
  endDrag(changedTouch.clientX, changedTouch.clientY);
}

function endDrag(clientX, clientY) {
  const { element, isMoved, startIndex } = gameState.dragState;

  // Если это был клик, а не перетаскивание
  if (!isMoved) {
    handleCellClick(startIndex);
    cleanDragState();
    return;
  }

  // Если это было перетаскивание, но что-то пошло не так (нет "призрака")
  if (!element) {
    cleanDragState();
    return;
  }

  const elementUnder = document.elementFromPoint(clientX, clientY);
  const targetCell = elementUnder ? elementUnder.closest('.cell') : null;
  const dragTargetIndex = targetCell ? parseInt(targetCell.dataset.index) : -1;

  // Условие для невалидного броска (за пределы поля, на себя, на заблокированную ячейку)
  const isInvalidDrop = !targetCell || startIndex === dragTargetIndex || gameState.lockedCells.includes(dragTargetIndex);

  if (isInvalidDrop) {
    // Анимируем "призрак" обратно на исходную позицию
    const originalCell = DOMElements.grid.children[startIndex];
    const rect = originalCell.getBoundingClientRect();

    element.classList.add('returning');
    element.style.left = `${rect.left}px`;
    element.style.top = `${rect.top}px`;
    element.style.transform = 'scale(1)';

    // После анимации очищаем состояние. Это перерисует поле и вернет видимость исходному предмету.
    setTimeout(() => {
      cleanDragState(true); // Перерисовать, чтобы восстановить opacity
    }, 200); // Должно совпадать с длительностью transition в CSS
    return;
  }

  // Валидный бросок: анимируем "призрак" в целевую ячейку
  const targetRect = targetCell.getBoundingClientRect();
  element.classList.add('dropping');
  element.style.left = `${targetRect.left}px`;
  element.style.top = `${targetRect.top}px`;
  element.style.transform = 'scale(1)';

  // После анимации выполняем логику игры и очищаем состояние
  setTimeout(() => {
    executeMergeOrSwap(startIndex, dragTargetIndex); // Эта функция вызывает updateUI() -> renderGrid()
    cleanDragState(false); // Очищаем состояние перетаскивания без лишней перерисовки
  }, 150); // Должно совпадать с длительностью transition в CSS
}

function cleanDragState(shouldRender = true) {
  document.body.classList.remove('is-dragging');
  gameState.dragState.isDragging = false;
  if (gameState.dragState.element) {
    gameState.dragState.element.remove();
    gameState.dragState.element = null;
  }
  gameState.dragState.startIndex = null;
  gameState.dragState.isMoved = false;
  if (shouldRender) {
    renderGrid(); // Принудительный рендер восстановит все opacity
  }
}

function handleCellClick(index) {
  const item = gameState.gridData[index];
  if (!item) return;

  if (item.isGenerator) {
    // Логика двойного клика для генераторов
    if (gameState.lastClick.index === index) {
      triggerGenerator(item, index);
    } else {
      showItemInfoModal(item, index);
      gameState.lastClick = { index: index };
    }
  } else if (item.isItemGenerator) {
    if (gameState.lastClick.index === index) {
      triggerItemGenerator(item, index);
    } else {
      showItemInfoModal(item, index);
      gameState.lastClick = { index: index };
    }
  } else {
    // Одиночный клик для любого другого предмета показывает информацию
    showItemInfoModal(item, index);
    gameState.lastClick = { index: null }; // Сбрасываем состояние двойного клика
  }
}

function handleUnblockMerge(fromIdx, toIdx, source) {
  if (source.level >= CONFIG.MAX_ITEM_LEVEL) return false;
  gameState.gridData[fromIdx] = null;
  markItemAsDiscovered(source.category, source.level + 1);
  gameState.gridData[toIdx] = { ...source, level: source.level + 1, isBlocked: false };
  triggerMergeEffects(toIdx, source.category);
  // showToast("Паутина снята!", "success");
  return true;
}

function handleGeneratorUpgrade(partIdx, genIdx, generator) {
  const lvl = generator.genLevel || 1;
  if (lvl >= CONFIG.MAX_GENERATOR_LEVEL) return false;
  const nextLvl = lvl + 1;
  gameState.gridData[partIdx] = null;
  gameState.gridData[genIdx] = {
    ...generator,
    genLevel: nextLvl,
    genEnergy: GEN_ENERGY_CONFIG[nextLvl].max,
    lastRegenTime: Date.now()
  };
  markItemAsDiscovered(generator.generatorKey, 'generator'); // Re-mark to ensure it's counted
  triggerMergeEffects(genIdx, GENERATORS_DATA[generator.generatorKey].categories[0]);
  // showToast(`🎉 Генератор улучшен до уровня ${CONFIG.ROMAN_NUMERALS[nextLvl]}!`, "success");
  return true;
}

function handleGeneratorPartMerge(fromIdx, toIdx, source) {
  if (source.level >= 3) { // Max level for parts is 3. Merging two L3 parts.
    gameState.gridData[fromIdx] = null;
    // Create a new L1 generator
    gameState.gridData[toIdx] = {
      isGenerator: true,
      generatorKey: source.generatorKey,
      genLevel: 1,
      genEnergy: GEN_ENERGY_CONFIG[1].max,
      lastRegenTime: Date.now()
    };
    markItemAsDiscovered(source.generatorKey, 'generator');
    triggerMergeEffects(toIdx, GENERATORS_DATA[source.generatorKey].categories[0]);
    // showToast(`🛠️ Собран новый генератор!`, "success");
    return true;
  } else { // Levels 1 and 2 merge up
    gameState.gridData[fromIdx] = null;
    gameState.gridData[toIdx] = { isGeneratorPart: true, generatorKey: source.generatorKey, level: source.level + 1 };
    triggerMergeEffects(toIdx, GENERATORS_DATA[source.generatorKey].categories[0]);
    return true;
  }
}

function handleItemUpgradeWithTool(toolIdx, itemIdx, regularItem) {
  if (regularItem.level >= CONFIG.MAX_ITEM_LEVEL) return false;
  const nextLvl = regularItem.level + 1;
  gameState.gridData[toolIdx] = null;
  markItemAsDiscovered(regularItem.category, nextLvl);
  gameState.gridData[itemIdx] = { ...regularItem, level: nextLvl };
  triggerMergeEffects(itemIdx, regularItem.category);
  // showToast(`✨ Предмет улучшен до уровня ${nextLvl}!`, "success");
  return true;
}

function handleItemMerge(fromIdx, toIdx, source) {
  if (source.level >= CONFIG.MAX_ITEM_LEVEL) return false;

  const nextLevel = source.level + 1;
  const newItemInfo = CATEGORIES_CONFIG[source.category].items[nextLevel - 1];

  markItemAsDiscovered(source.category, nextLevel);
  // Проверяем, становится ли новый предмет генератором
  if (newItemInfo && newItemInfo.becomesGenerator) {
    const genInfo = newItemInfo.becomesGenerator;
    gameState.gridData[fromIdx] = null;
    gameState.gridData[toIdx] = {
      isItemGenerator: true,
      category: source.category,
      level: nextLevel,
      generatedCategory: genInfo.category,
      charges: genInfo.charges,
    };

    // Разблокируем новую категорию для заказов, если это впервые
    if (!gameState.unlockedItemGenCategories.includes(genInfo.category)) {
      gameState.unlockedItemGenCategories.push(genInfo.category);
      // showToast(`Новая категория "${CATEGORIES_CONFIG[genInfo.category].name}" теперь доступна в заказах!`, "success");
    }

  } else {
    // Стандартное слияние
    gameState.gridData[fromIdx] = null;
    gameState.gridData[toIdx] = { category: source.category, level: nextLevel };
  }

  triggerMergeEffects(toIdx, source.category);
  return true;
}

function handleGeneratorMerge(fromIdx, toIdx, source) {
  if (source.generatorKey === 'bonus_chest') {
    if (source.genLevel !== 1) return false;
    gameState.gridData[fromIdx] = null;
    gameState.gridData[toIdx] = {
      isGenerator: true,
      generatorKey: 'bonus_chest',
      genLevel: 2,
      genCharges: 3,
    };
    triggerMergeEffects(toIdx, 'stationery');
    markItemAsDiscovered('bonus_chest', 'generator');
    return true;
  }

  const lvl = source.genLevel || 1;
  if (lvl >= CONFIG.MAX_GENERATOR_LEVEL) return false;
  const nextLvl = lvl + 1;
  gameState.gridData[fromIdx] = null;
  gameState.gridData[toIdx] = {
    isGenerator: true,
    generatorKey: source.generatorKey,
    genLevel: nextLvl,
    genEnergy: GEN_ENERGY_CONFIG[nextLvl].max,
    lastRegenTime: Date.now()
  };
  markItemAsDiscovered(source.generatorKey, 'generator');
  triggerMergeEffects(toIdx, GENERATORS_DATA[source.generatorKey].categories[0]);
  // showToast(`🎉 Генератор улучшен до уровня ${CONFIG.ROMAN_NUMERALS[nextLvl]}!`, "success");
  return true;
}

function handleSwap(fromIdx, toIdx, source, target) {
  if (target && target.isBlocked) return false;
  [gameState.gridData[fromIdx], gameState.gridData[toIdx]] = [target, source];
  return true;
}

const MERGE_HANDLERS = [
  // Слияние с заблокированным предметом
  {
    canHandle: (s, t) => t?.isBlocked && !s.isGenerator && !s.isItemGenerator && s.category === t.category && s.level === t.level,
    execute: (from, to, src) => handleUnblockMerge(from, to, src)
  },
  // Улучшение генератора деталью (в обе стороны)
  {
    canHandle: (s, t) => s.isUpgradePart && t?.isGenerator && t.generatorKey !== 'bonus_chest',
    execute: (from, to, src, trg) => handleGeneratorUpgrade(from, to, trg)
  },
  {
    canHandle: (s, t) => t?.isUpgradePart && s.isGenerator && s.generatorKey !== 'bonus_chest',
    execute: (from, to, src, trg) => handleGeneratorUpgrade(to, from, src)
  },
  // Улучшение предмета магическим инструментом (в обе стороны)
  {
    canHandle: (s, t) => s.isMagicTool && t && !t.isGenerator && !t.isBlocked && !t.isUpgradePart && !t.isMagicTool && !t.isGeneratorPart,
    execute: (from, to, src, trg) => handleItemUpgradeWithTool(from, to, trg)
  },
  {
    canHandle: (s, t) => t?.isMagicTool && s && !s.isGenerator && !s.isBlocked && !s.isUpgradePart && !s.isMagicTool && !s.isGeneratorPart,
    execute: (from, to, src, trg) => handleItemUpgradeWithTool(to, from, src)
  },
  // Слияние двух деталей генератора
  {
    canHandle: (s, t) => t && s.isGeneratorPart && t.isGeneratorPart && s.generatorKey === t.generatorKey && s.level === t.level,
    execute: (from, to, src) => handleGeneratorPartMerge(from, to, src)
  },
  // Слияние двух генераторов
  {
    canHandle: (s, t) => t && s.isGenerator && t.isGenerator && s.generatorKey === t.generatorKey && s.genLevel === t.genLevel,
    execute: (from, to, src) => handleGeneratorMerge(from, to, src)
  },
  // Слияние двух обычных предметов (включая предметы-генераторы)
  {
    canHandle: (s, t) => t && !s.isGenerator && !t.isGenerator && !s.isUpgradePart && !t.isUpgradePart && !s.isGeneratorPart && !t.isGeneratorPart && s.category === t.category && s.level === t.level,
    execute: (from, to, src) => handleItemMerge(from, to, src)
  },
];

function executeMergeOrSwap(fromIdx, toIdx) {
  const source = gameState.gridData[fromIdx];
  const target = gameState.gridData[toIdx];

  for (const handler of MERGE_HANDLERS) {
    if (handler.canHandle(source, target)) {
      handler.execute(fromIdx, toIdx, source, target);
      playerProfile.totalMerges++;

      // --- NEW LOGIC FOR MERGE COUNTS ---
      let mergeCategory;
      // Case 1: Merging two regular items, or a regular item with a blocked one.
      if (source.category && !source.isGenerator && !source.isGeneratorPart && !source.isMagicTool && !source.isUpgradePart) {
        mergeCategory = source.category;
      }
      // Case 2: Merging two generators or two generator parts.
      else if ((source.isGenerator || source.isGeneratorPart) && target && (target.isGenerator || target.isGeneratorPart)) {
        mergeCategory = GENERATORS_DATA[source.generatorKey].categories[0];
      }
      // Case 3: Upgrading a generator with a part.
      else if (source.isUpgradePart && target && target.isGenerator) {
        mergeCategory = GENERATORS_DATA[target.generatorKey].categories[0];
      } else if (target && target.isUpgradePart && source.isGenerator) {
        mergeCategory = GENERATORS_DATA[source.generatorKey].categories[0];
      }
      // Case 4: Upgrading an item with a tool.
      else if (source.isMagicTool && target && target.category) {
        mergeCategory = target.category;
      } else if (target && target.isMagicTool && source.category) {
        mergeCategory = source.category;
      }

      if (mergeCategory) {
        playerProfile.mergeCounts[mergeCategory] = (playerProfile.mergeCounts[mergeCategory] || 0) + 1;
      }
      // --- END NEW LOGIC ---

      saveGame();
      updateUI();
      return;
    }
  }

  // Если ни один обработчик слияния не сработал, выполняем перемещение
  const wasSwapped = handleSwap(fromIdx, toIdx, source, target);
  saveGame();
  updateUI();

  if (wasSwapped) {
    setTimeout(() => {
      animateCellPop(toIdx);
      if (target) animateCellPop(fromIdx);
    }, 10); // Небольшая задержка, чтобы DOM успел обновиться
  }
}

function animateCellPop(index) {
  const cells = document.querySelectorAll('.cell');
  const wrapper = cells[index]?.querySelector('.item-wrapper');
  if (wrapper) {
    wrapper.classList.remove('merge-animate');
    void wrapper.offsetWidth; // Force reflow
    wrapper.classList.add('merge-animate');
  }
}

function triggerMergeEffects(idx, category) {
  // Оборачиваем в setTimeout, чтобы дать DOM возможность обновиться перед анимацией
  setTimeout(() => {
    animateCellPop(idx);

    const targetCell = DOMElements.grid.children[idx];
    if (targetCell) {
      const themeColor = CATEGORIES_CONFIG[category] ? CATEGORIES_CONFIG[category].color : '#ff477e';
      const flash = document.createElement('div');
      flash.classList.add('merge-flash');
      flash.style.setProperty('--flash-color', themeColor);
      targetCell.appendChild(flash);
      setTimeout(() => flash.remove(), CONFIG.ANIMATION.FADE_DURATION);

      const rect = targetCell.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      for (let i = 0; i < CONFIG.ANIMATION.PARTICLE_COUNT; i++) {
        const particle = document.createElement('div');
        particle.classList.add('merge-particle');
        particle.style.backgroundColor = themeColor;
        particle.style.left = `${centerX}px`;
        particle.style.top = `${centerY}px`;

        const angle = Math.random() * Math.PI * 2;
        const speed = 20 + Math.random() * 40;
        const pX = Math.cos(angle) * speed;
        const pY = Math.sin(angle) * speed;

        particle.style.setProperty('--x', `${pX}px`);
        particle.style.setProperty('--y', `${pY}px`);

        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), CONFIG.ANIMATION.PARTICLE_DURATION);
      }
    }
  }, 0);
}

function clearBlockedItemWithCoins(index) {
  if (gameState.coins < CONFIG.BLOCKED_CLEAR_COST_COINS) {
    showToast(`🪙 Недостаточно монет для расчистки (нужно ${CONFIG.BLOCKED_CLEAR_COST_COINS})!`, "error");
    closeModal();
    return;
  }

  gameState.coins -= CONFIG.BLOCKED_CLEAR_COST_COINS;
  delete gameState.gridData[index].isBlocked; // Просто убираем флаг блокировки
  closeModal();
  saveGame();
  updateUI();
  // showToast("Завал успешно расчищен!", "success");
  setTimeout(() => animateCellPop(index), 50);
}
function rechargeGeneratorWithCoins(index) {
  const item = gameState.gridData[index];
  if (!item || !item.isGenerator || item.generatorKey === 'bonus_chest') {
    closeModal();
    return;
  }

  if (gameState.coins < CONFIG.GENERATOR_RECHARGE_COST) {
    showToast(`🪙 Недостаточно монет (нужно ${CONFIG.GENERATOR_RECHARGE_COST})!`, "error");
    closeModal();
    return;
  }

  const lvl = item.genLevel || 1;
  const config = GEN_ENERGY_CONFIG[lvl];

  gameState.coins -= CONFIG.GENERATOR_RECHARGE_COST;
  item.genEnergy = config.max;
  item.lastRegenTime = Date.now();

  closeModal();
  saveGame();
  updateUI();
  showToast("📦 Энергия генератора полностью восстановлена!", "success");
}

function rechargePlayerEnergyWithCoins() {
  if (gameState.coins < CONFIG.ENERGY_RECHARGE_COST_COINS) {
    showToast(`🪙 Недостаточно монет (нужно ${CONFIG.ENERGY_RECHARGE_COST_COINS})!`, "error");
    closeModal();
    return;
  }

  if (gameState.energy >= CONFIG.MAX_ENERGY) {
    showToast("⚡ Ваша энергия уже полная!", "error");
    closeModal();
    return;
  }

  gameState.coins -= CONFIG.ENERGY_RECHARGE_COST_COINS;
  gameState.energy = CONFIG.MAX_ENERGY;

  closeModal();
  saveGame();
  updateUI();
  showToast("⚡ Энергия полностью восстановлена!", "success");
}

function getBlockedItemModalOptions(item, index) {
  const info = CATEGORIES_CONFIG[item.category].items[item.level - 1];
  return {
    icon: '🕸️',
    title: `Заблокированный: ${info.name}`,
    subtitle: 'В паутине',
    desc: 'Этот предмет в паутине. Чтобы его освободить, перетащите на него точно такой же предмет с поля, либо расчистите завал за монеты.',
    actionButton: {
      text: `Расчистить завал (-${CONFIG.BLOCKED_CLEAR_COST_COINS}🪙)`,
      onClick: () => clearBlockedItemWithCoins(index)
    },
    isBlocking: false
  };
}

function getGeneratorModalOptions(item, index) {
  const genInfo = GENERATORS_DATA[item.generatorKey];
  const lvl = item.genLevel || 1;

  if (item.generatorKey === 'bonus_chest') {
    return {
      icon: '🎁',
      title: `Подарочная коробка ${CONFIG.ROMAN_NUMERALS[lvl]}`,
      subtitle: 'Особый генератор',
      desc: `Этот генератор содержит редкие предметы. У него осталось ${item.genCharges} заряд(ов). Когда заряды закончатся, он исчезнет. Перетащите на него такую же коробку, чтобы улучшить и получить больше предметов.`,
      isBlocking: false,
    };
  }

  const config = GEN_ENERGY_CONFIG[lvl];
  const desc = `Создает предметы из своей категории.`;

  const modalOptions = {
    icon: `<div class="generator-icon-container"><span class="generator-box-bg">📦</span><span class="generator-item-fg">${genInfo.icon}</span></div>`,
    title: `${genInfo.name} ${CONFIG.ROMAN_NUMERALS[lvl]}`,
    subtitle: `Генератор • Уровень ${CONFIG.ROMAN_NUMERALS[lvl]}`,
    desc: desc,
    infoButton: {
      onClick: () => showGeneratorDetailModal(item)
    }
  };

  if (item.genEnergy < config.max) {
    modalOptions.actionButton = {
      text: `Восстановить (-${CONFIG.GENERATOR_RECHARGE_COST}🪙)`,
      onClick: () => rechargeGeneratorWithCoins(index),
    };
  }

  return modalOptions;
}

function getItemGeneratorModalOptions(item, index) {
  const itemInfo = CATEGORIES_CONFIG[item.category].items[item.level - 1];
  const generatedCatInfo = CATEGORIES_CONFIG[item.generatedCategory];
  return {
    icon: itemInfo.icon,
    title: itemInfo.name,
    subtitle: `Предмет-генератор • ${item.charges} заряд(ов)`,
    desc: `Этот предмет может произвести предметы из категории "${generatedCatInfo.name}". После использования всех зарядов он исчезнет. Его также можно сдать в заказе.`,
    infoButton: {
      onClick: () => showItemDetailModal(item)
    },
    isBlocking: false
  };
}

function getBoosterModalOptions(item) {
  if (item.isUpgradePart) {
    return {
      icon: '🔩',
      title: 'Новая деталь',
      subtitle: 'Универсальный улучшитель',
      desc: 'Редкая деталь, полученная за выполнение особого заказа. Перетащите ее на любой генератор (кроме подарочных коробок), чтобы повысить его уровень.',
      isBlocking: false
    };
  }
  if (item.isMagicTool) {
    return {
      icon: '⚒️',
      title: 'Магические инструменты',
      subtitle: 'Универсальный улучшитель',
      desc: 'Волшебные инструменты, способные улучшить любой предмет на один уровень. Перетащите их на предмет, который хотите улучшить.',
      isBlocking: false
    };
  }
  return {};
}

function getGeneratorPartModalOptions(item, index) {
  const genInfo = GENERATORS_DATA[item.generatorKey];
  const iconHTML = `
        <div class="generator-part-icon-container">
            <span class="part-bg-box">📦</span>
            <span class="part-bg-icon">${genInfo.icon}</span>
            <span class="part-fg-icon">${genInfo.partIcon}</span>
        </div>`;
  const sellPrice = (item.level || 1) * 3;

  return {
    icon: iconHTML,
    title: `Деталь для "${genInfo.name}"`,
    subtitle: `Деталь для сборки • Уровень ${item.level}`,
    desc: 'Часть будущего генератора. Объединяйте с такими же деталями. ',
    dangerButtons: {
      confirmButtonText: `Продать (+${sellPrice}🪙)`,
      onConfirm: () => deleteItem(index)
    },
    infoButton: {
      onClick: () => showGeneratorPartDetailModal(item)
    },
    isBlocking: false
  };
}

function getRegularItemModalOptions(item, index) {
  const info = CATEGORIES_CONFIG[item.category].items[item.level - 1];
  const sellPrice = (item.level || 1) * 3;
  return {
    icon: info.icon,
    title: info.name,
    subtitle: `${CATEGORIES_CONFIG[item.category].name} • Уровень ${item.level}`,
    desc: 'Предмет для выполнения заказов и слияния.',
    dangerButtons: {
      confirmButtonText: `Продать (+${sellPrice}🪙)`,
      onConfirm: () => deleteItem(index)
    },
    infoButton: {
      onClick: () => showItemDetailModal(item)
    },
    isBlocking: false
  };
}

const MODAL_OPTIONS_GETTERS = {
  blocked: getBlockedItemModalOptions,
  generator: getGeneratorModalOptions,
  itemGenerator: getItemGeneratorModalOptions,
  generatorPart: getGeneratorPartModalOptions,
  booster: getBoosterModalOptions,
  regular: getRegularItemModalOptions,
};

function getItemType(item) {
  if (item.isBlocked) return 'blocked';
  if (item.isGenerator) return 'generator';
  if (item.isItemGenerator) return 'itemGenerator';
  if (item.isGeneratorPart) return 'generatorPart';
  if (item.isUpgradePart || item.isMagicTool) return 'booster';
  return 'regular';
}

function isDiscovered(category, level) {
  // level может быть числом или строкой, например 'generator', 'part'
  const key = `${category}-${level}`;
  return !!gameState.discoveredItems[key];
}

function markItemAsDiscovered(category, level) {
  const key = `${category}-${level}`;
  if (!gameState.discoveredItems[key]) {
    gameState.discoveredItems[key] = true;
  }
}

function showItemInfoModal(item, index = -1) {
  const itemType = getItemType(item);
  const getOptions = MODAL_OPTIONS_GETTERS[itemType];
  if (getOptions) {
    const modalOptions = getOptions(item, index);
    showModal(modalOptions);
  }
}

function deleteItem(index) {
  const item = gameState.gridData[index];
  // Проверяем, что предмет существует и его можно продать (не генератор, не заблокирован)
  if (index === -1 || !item || item.isGenerator || item.isBlocked || item.isUpgradePart || item.isMagicTool) {
    closeModal();
    return;
  }

  // Цена продажи зависит от уровня предмета. Для деталей генератора тоже есть уровень.
  const sellPrice = (item.level || 1) * 3;

  gameState.coins += sellPrice;
  playerProfile.totalCoinsEarned += sellPrice;
  gameState.gridData[index] = null;

  closeModal();
  saveGame();
  updateUI();
}

function showCharacterModal(order) {
  showModal({
    icon: order.character.icon,
    title: order.character.name,
    subtitle: order.isStory ? "🔥 Важный гость (Сюжет)" : "Постоянный клиент",
    desc: order.character.desc || "Заглянул за покупками.",
  });
}

function showCategoryProgressionModal(categoryKeyOrKeys, icon = '⛓️') {
  const categoryKeys = Array.isArray(categoryKeyOrKeys) ? categoryKeyOrKeys : [categoryKeyOrKeys];
  if (categoryKeys.length === 0) return;
  const modal = DOMElements.detailModal; // Используем большой модал
  let contentHTML = '';
  let modalTitle = 'Цепочка эволюции';

  modal.icon.innerHTML = icon;

  categoryKeys.forEach((key, index) => {
    const category = CATEGORIES_CONFIG[key];
    if (!category) return;

    if (index > 0) {
      contentHTML += '<hr style="border-color: #444; margin: 15px 0 10px;">';
    }

    contentHTML += `<h4 style="margin-bottom: 10px; font-size: 0.9rem; text-transform: uppercase; color: var(--accent-color);">${category.name}</h4>`;

    contentHTML += `<div class="progression-container">`;
    category.items.forEach((item, itemIndex) => {
      const discovered = isDiscovered(key, item.level);
      const undiscoveredClass = discovered ? '' : 'undiscovered';
      const itemIcon = discovered ? item.icon : '?';
      contentHTML += `
        <div class="progression-item-square ${undiscoveredClass}" title="${discovered ? item.name : 'Не открыто'}">
          <div class="progression-item-icon">${itemIcon}</div>
          <div class="progression-item-level">${item.level}</div>
        </div>
      `;
      if (itemIndex < category.items.length - 1) {
        contentHTML += '<div class="progression-arrow-h">→</div>';
      }
    });
    contentHTML += '</div>';
  });

  modal.title.innerText = modalTitle;
  modal.body.innerHTML = contentHTML;
  modal.overlay.classList.add('active', 'blocking');
}

function showGeneratorDetailModal(item) {
  const modal = DOMElements.detailModal;
  const genInfo = GENERATORS_DATA[item.generatorKey];
  const lvl = item.genLevel || 1;

  modal.icon.innerHTML = `<div class="generator-icon-container"><span class="generator-box-bg">📦</span><span class="generator-item-fg">${genInfo.icon}</span></div>`;
  modal.title.innerText = `${genInfo.name} ${CONFIG.ROMAN_NUMERALS[lvl]}`;

  // --- Генерация контента ---
  let contentHTML = '';

  // 1. Описание генератора
  let desc = `<p class="modal-desc">${genInfo.desc} `;
  if (genInfo.isHybrid) {
    desc += `Производит предметы из категорий: ${genInfo.categories.map(c => CATEGORIES_CONFIG[c].name).join(' и ')}. `;
  }
  const cdSec = GEN_ENERGY_CONFIG[lvl].cooldown / 1000;
  const levelDescriptions = {
    1: `Базовый уровень. Создаёт предметы 1-го уровня. Восстанавливает 1 заряд каждые ${cdSec} сек.`,
    2: `Продвинутый ранг. Шансы получения: 80% (ур. 1), 20% (ур. 2). Заряд каждые ${cdSec} сек.`,
    3: `Профессиональный ранг. Шансы получения: 65% (ур. 1), 25% (ур. 2), 10% (ур. 3). Заряд каждые ${cdSec} сек.`,
    4: `Элитный ранг. Шансы получения: 50% (ур. 1), 30% (ур. 2), 15% (ур. 3), 5% (ур. 4). Заряд каждые ${cdSec} сек.`,
    5: `Легендарный ранг! Шансы: 30% (ур. 1), 30% (ур. 2), 25% (ур. 3), 10% (ур. 4), 5% (ур. 5). Самая быстрая перезарядка: ${cdSec} сек.`
  };
  desc += (levelDescriptions[lvl] || '') + '</p>';
  contentHTML += desc;

  // 2. Цепочка(и) предметов
  const categoryKeys = genInfo.categories;
  categoryKeys.forEach((key, index) => {
    const category = CATEGORIES_CONFIG[key];
    if (!category) return;

    if (index > 0) {
      contentHTML += '<hr style="border-color: #444; margin: 15px 0 10px;">';
    }

    contentHTML += `<h4 style="margin-bottom: 10px; font-size: 0.9rem; text-transform: uppercase; color: var(--accent-color);">${category.name}</h4>`;

    contentHTML += `<div class="progression-container">`;
    category.items.forEach((item, itemIndex) => {
      const discovered = isDiscovered(key, item.level);
      const undiscoveredClass = discovered ? '' : 'undiscovered';
      const itemIcon = discovered ? item.icon : '?';
      contentHTML += `
              <div class="progression-item-square ${undiscoveredClass}" title="${discovered ? item.name : 'Не открыто'}">
                  <div class="progression-item-icon">${itemIcon}</div>
                  <div class="progression-item-level">${item.level}</div>
              </div>
          `;
      if (itemIndex < category.items.length - 1) {
        contentHTML += '<div class="progression-arrow-h">→</div>';
      }
    });
    contentHTML += '</div>';
  });

  modal.body.innerHTML = contentHTML;
  modal.overlay.classList.add('active', 'blocking');
}

function showItemDetailModal(item) {
  const modal = DOMElements.detailModal;
  const category = CATEGORIES_CONFIG[item.category];
  const itemInfo = category.items[item.level - 1];

  modal.icon.innerHTML = itemInfo.icon;
  modal.title.innerText = itemInfo.name;

  let contentHTML = '';

  // 1. Описание самого предмета
  contentHTML += `<p class="modal-desc">${itemInfo.desc}</p>`;

  // --- Вспомогательная функция для отрисовки цепочки ---
  const renderProgressionChain = (cat, title, categoryKey) => {
    let chainHTML = `<h4 style="margin-bottom: 10px; font-size: 0.9rem; text-transform: uppercase; color: var(--accent-color);">${title}</h4>`;
    chainHTML += `<div class="progression-container">`;
    cat.items.forEach((progItem, itemIndex) => {
      const discovered = isDiscovered(categoryKey, progItem.level);
      const undiscoveredClass = discovered ? '' : 'undiscovered';
      const itemIcon = discovered ? progItem.icon : '?';
      chainHTML += `
          <div class="progression-item-square ${undiscoveredClass}" title="${discovered ? progItem.name : 'Не открыто'}">
              <div class="progression-item-icon">${itemIcon}</div>
              <div class="progression-item-level">${progItem.level}</div>
          </div>
      `;
      if (itemIndex < cat.items.length - 1) {
        chainHTML += '<div class="progression-arrow-h">→</div>';
      }
    });
    chainHTML += '</div>';
    return chainHTML;
  };

  contentHTML += '<hr style="border-color: #444; margin: 20px 0 15px;">';

  // 2. Цепочка эволюции самого предмета
  contentHTML += renderProgressionChain(category, `Цепочка: ${category.name}`, item.category);

  // 3. Цепочка производимых предметов (если применимо)
  if (item.isItemGenerator || itemInfo.becomesGenerator) {
    const genCategoryKey = item.generatedCategory || itemInfo.becomesGenerator.category;
    const genCategory = CATEGORIES_CONFIG[genCategoryKey];
    if (genCategory) {
      contentHTML += '<hr style="border-color: #444; margin: 20px 0 15px;">';
      contentHTML += renderProgressionChain(genCategory, `Производит: ${genCategory.name}`, genCategoryKey);
    }
  }

  modal.body.innerHTML = contentHTML;
  modal.overlay.classList.add('active', 'blocking');
}

function showGeneratorPartDetailModal(item) {
  const modal = DOMElements.detailModal;
  const genInfo = GENERATORS_DATA[item.generatorKey];

  modal.icon.innerHTML = `
        <div class="generator-part-icon-container">
            <span class="part-bg-box">📦</span>
            <span class="part-bg-icon">${genInfo.icon}</span>
            <span class="part-fg-icon">${genInfo.partIcon}</span>
        </div>`;
  modal.title.innerText = `Сборка: ${genInfo.name}`;

  let contentHTML = '';
  contentHTML += `<p class="modal-desc">Объединяйте детали, чтобы собрать полноценный генератор. Две детали 3-го уровня создают генератор 1-го уровня.</p>`;
  contentHTML += `<h4 style="margin-bottom: 10px; font-size: 0.9rem; text-transform: uppercase; color: var(--accent-color);">Цепочка сборки</h4>`;
  contentHTML += `<div class="progression-container">`;

  const partHTML = (level) => `
        <div class="progression-item-square" title="Деталь, Ур. ${level}">
            <div class="progression-item-icon">
                <div class="generator-part-icon-container">
                    <span class="part-bg-box">📦</span>
                    <span class="part-bg-icon">${genInfo.icon}</span>
                    <span class="part-fg-icon">${genInfo.partIcon}</span>
                </div>
            </div>
            <div class="progression-item-level">${level}</div>
        </div>
    `;

  const generatorHTML = `
        <div class="progression-item-square" title="${genInfo.name}, Ур. I">
            <div class="progression-item-icon">
                 <div class="generator-icon-container">
                    <span class="generator-box-bg">📦</span>
                    <span class="generator-item-fg">${genInfo.icon}</span>
                </div>
            </div>
            <div class="progression-item-level">I</div>
        </div>
    `;

  contentHTML += partHTML(1);
  contentHTML += '<div class="progression-arrow-h">→</div>';
  contentHTML += partHTML(2);
  contentHTML += '<div class="progression-arrow-h">→</div>';
  contentHTML += partHTML(3);
  contentHTML += '<div class="progression-arrow-h">→</div>';
  contentHTML += generatorHTML;
  contentHTML += '</div>';

  modal.body.innerHTML = contentHTML;
  modal.overlay.classList.add('active', 'blocking');
}


/**
 * Shows a modal with the given options.
 * @param {object} options
 * @param {string} options.icon - HTML for the icon.
 * @param {string} options.title - The main title.
 * @param {string} options.subtitle - The subtitle.
 * @param {string} options.desc - The description text.
 * @param {object} [options.actionButton] - Optional action button.
 * @param {string} options.actionButton.text - Text for the button.
 * @param {function} options.actionButton.onClick - Click handler.
 * @param {object} [options.dangerButtons] - Optional confirmation buttons.
 * @param {string} options.dangerButtons.confirmButtonText - Text for confirm button.
 * @param {function} options.dangerButtons.onConfirm - Confirm click handler.
 * @param {object} [options.infoButton] - Optional info button.
 * @param {boolean} [options.isBlocking=false] - If true, modal is blocking.
 */
function showModal(options) {
  const { icon, title, subtitle, desc, actionButton, dangerButtons, infoButton, isBlocking } = options;
  const modal = DOMElements.infoModal;

  modal.icon.innerHTML = icon;
  modal.title.innerText = title;
  modal.subtitle.innerText = subtitle;
  modal.desc.innerText = desc;

  // Если описание содержит HTML, используем innerHTML
  if (desc.startsWith('<div')) modal.desc.innerHTML = desc;

  modal.infoBtn.style.display = infoButton ? 'block' : 'none';
  if (infoButton) {
    modal.infoBtn.onclick = infoButton.onClick;
  }
  modal.actionBtn.style.display = actionButton ? 'block' : 'none';
  if (actionButton) {
    modal.actionBtn.innerText = actionButton.text;
    modal.actionBtn.onclick = actionButton.onClick;
  }

  modal.dangerGroup.style.display = dangerButtons ? 'flex' : 'none';
  if (dangerButtons) {
    modal.confirmBtn.innerText = dangerButtons.confirmButtonText;
    modal.confirmBtn.onclick = dangerButtons.onConfirm;
  }

  modal.overlay.className = `modal-overlay active ${isBlocking ? 'blocking' : ''}`;
}

function closeModal() {
  DOMElements.infoModal.overlay.className = 'modal-overlay';
}

function openMenuModal() {
  // Закрываем другие активные модальные окна, чтобы избежать наложения
  closeModal();
  closeDetailModal();
  closeCollectionModal();
  closeProfileModal();

  // Закрываем новое окно достижений
  closeAchievementsModal();

  // Обновляем точки-уведомления внутри меню
  DOMElements.menuModal.achievementsNotificationDot.style.display = hasUnclaimedAchievements() ? 'block' : 'none';
  DOMElements.menuModal.collectionNotificationDot.style.display = hasUnclaimedCollectionBonuses() ? 'block' : 'none';

  DOMElements.menuModal.overlay.classList.add('active', 'blocking');
}

function openProfileModal() {
  renderProfile();
  DOMElements.profileModal.overlay.classList.add('active', 'blocking');
}
function closeMenuModal() {
  DOMElements.menuModal.overlay.classList.remove('active', 'blocking');
}

function closeDetailModal() {
  const modal = DOMElements.detailModal;
  modal.overlay.classList.remove('active', 'blocking');
  // Очищаем контент после скрытия, чтобы не было "мелькания" при следующем открытии
  setTimeout(() => {
    modal.body.innerHTML = '';
  }, 300); // Должно совпадать с transition-duration
}

function closeProfileModal() {
  const modal = DOMElements.profileModal;
  modal.overlay.classList.remove('active', 'blocking');
}

function openAchievementsModal() {
  renderAchievementsModal();
  DOMElements.achievementsModal.overlay.classList.add('active', 'blocking');
}

function closeAchievementsModal() {
  const modal = DOMElements.achievementsModal;
  modal.overlay.classList.remove('active', 'blocking');
}

function closeCollectionModal() {
  const modal = DOMElements.collectionModal;
  modal.overlay.classList.remove('active', 'blocking');
  setTimeout(() => {
    modal.body.innerHTML = '';
    modal.footer.innerHTML = '';
  }, 300);
}
function formatTimePlayed(ms) {
  if (!ms || ms < 1000) return "меньше минуты";

  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));

  let parts = [];
  if (days > 0) parts.push(`${days} д`);
  if (hours > 0) parts.push(`${hours} ч`);
  if (minutes > 0) parts.push(`${minutes} м`);

  if (parts.length === 0 && seconds > 0) return `${seconds} сек`;

  return parts.slice(0, 2).join(' '); // Показываем только 2 самых крупных единицы времени
}

function renderProfile() {
  const modal = DOMElements.profileModal;
  const profile = playerProfile;

  modal.icon.innerText = profile.icon;

  // --- NEW LOGIC for favorite category ---
  let favoriteCategoryName = 'Нет';
  if (profile.mergeCounts && Object.keys(profile.mergeCounts).length > 0) {
    const favoriteCategoryKey = Object.keys(profile.mergeCounts).reduce((a, b) => profile.mergeCounts[a] > profile.mergeCounts[b] ? a : b);
    if (CATEGORIES_CONFIG[favoriteCategoryKey]) {
      favoriteCategoryName = CATEGORIES_CONFIG[favoriteCategoryKey].name;
    }
  }
  // --- END NEW LOGIC ---

  const timePlayedStr = formatTimePlayed(profile.timePlayed);
  const startDateStr = new Date(profile.startDate).toLocaleDateString('ru-RU');

  modal.body.innerHTML = `
    <div class="profile-header">
        <div class="profile-avatar">${profile.icon}</div>
        <input type="text" class="profile-name-input" value="${profile.name}" id="profile-name-input" maxlength="20" placeholder="Введите имя">
    </div>
    <div class="profile-stats">
        <div class="stat-item"><span>Комбинаций сделано:</span> <strong>${profile.totalMerges.toLocaleString('ru-RU')}</strong></div>
        <div class="stat-item"><span>Заказов выполнено:</span> <strong>${profile.totalOrdersCompleted.toLocaleString('ru-RU')}</strong></div>
        <div class="stat-item"><span>Всего потрачено энергии:</span> <strong>${(profile.totalEnergySpent || 0).toLocaleString('ru-RU')} ⚡</strong></div>
        <div class="stat-item"><span>Всего заработано:</span> <strong>${(profile.totalCoinsEarned || 0).toLocaleString('ru-RU')} 🪙</strong></div>
        <div class="stat-item"><span>Любимая категория:</span> <strong>${favoriteCategoryName}</strong></div>
        <div class="stat-item"><span>Время в игре:</span> <strong>${timePlayedStr}</strong></div>
        <div class="stat-item"><span>Дата начала:</span> <strong>${startDateStr}</strong></div>
    </div>
  `;

  // Добавляем обработчик для сохранения имени при потере фокуса
  const nameInput = modal.body.querySelector('#profile-name-input');
  nameInput.addEventListener('blur', () => {
    playerProfile.name = nameInput.value.trim() || 'Игрок';
    saveGame(); // Сохраняем игру после изменения имени
  });
}

function hasUnclaimedCollectionBonuses() {
  for (const catKey in CATEGORIES_CONFIG) {
    const category = CATEGORIES_CONFIG[catKey];
    for (const item of category.items) {
      const itemKey = `${catKey}-${item.level}`;
      const discovered = isDiscovered(catKey, item.level);
      const bonusClaimed = !!gameState.claimedCollectionBonuses[itemKey];
      if (discovered && !bonusClaimed) {
        return true; // Нашли одно!
      }
    }
  }
  return false;
}

function hasUnclaimedAchievements() {
  for (const key in ACHIEVEMENTS_DATA) {
    const achievement = ACHIEVEMENTS_DATA[key];
    const progress = playerProfile[key] || 0;
    for (let i = 0; i < achievement.tiers.length; i++) {
      const tier = achievement.tiers[i];
      const isUnlocked = progress >= tier.goal;
      const isClaimed = gameState.claimedAchievements[`${achievement.id}_${i}`];
      if (isUnlocked && !isClaimed) {
        return true; // Нашли одно!
      }
    }
  }
  return false;
}

function renderAchievementsModal() {
  const body = DOMElements.achievementsModal.body;
  let contentHTML = '';

  for (const key in ACHIEVEMENTS_DATA) {
    const achievement = ACHIEVEMENTS_DATA[key];
    const progress = playerProfile[key] || 0;

    contentHTML += `
      <div class="achievement-item">
        <div class="achievement-icon">${achievement.icon}</div>
        <div class="achievement-details">
          <h4 class="achievement-title">${achievement.name}</h4>
          <p class="achievement-desc">${achievement.desc}</p>
          <div class="achievement-tiers">
    `;

    achievement.tiers.forEach((tier, index) => {
      const isClaimed = !!gameState.claimedAchievements[`${achievement.id}_${index}`];
      const canClaim = progress >= tier.goal && !isClaimed;
      const percentage = Math.min(100, (progress / tier.goal) * 100);

      let btnHTML;
      if (isClaimed) {
        btnHTML = `<button class="achievement-claim-btn claimed" disabled>✔️</button>`;
      } else {
        btnHTML = `<button class="achievement-claim-btn" ${!canClaim ? 'disabled' : ''} onclick="claimAchievementReward('${achievement.id}', ${index}, this)">+${tier.reward}🪙</button>`;
      }

      contentHTML += `
        <div class="achievement-tier">
          <div class="achievement-progress-container">
            <div class="achievement-progress-text">${progress.toLocaleString('ru-RU')} / ${tier.goal.toLocaleString('ru-RU')}</div>
            <div class="achievement-progress-bar-bg">
              <div class="achievement-progress-bar-fill" style="width: ${percentage}%;"></div>
            </div>
          </div>
          ${btnHTML}
        </div>
      `;
    });

    contentHTML += `
          </div>
        </div>
      </div>
    `;
  }
  body.innerHTML = contentHTML;
}

function claimItemBonus(category, level, element) {
  const key = `${category}-${level}`;
  // Проверяем, что бонус еще не был получен
  if (gameState.claimedCollectionBonuses[key]) {
    return;
  }

  // Отмечаем бонус как полученный
  gameState.claimedCollectionBonuses[key] = true;

  // Добавляем монеты
  const bonusAmount = level * CONFIG.COLLECTION_BONUS_BASE_VALUE;
  gameState.coins += bonusAmount;
  playerProfile.totalCoinsEarned += bonusAmount;

  // Анимация полета монетки
  animateRewardFly(element, DOMElements.coins.container, '🪙', 1, 'coin');

  // Обновляем вид элемента в модалке и запускаем анимации
  element.classList.remove('bonus-unclaimed');
  element.classList.add('bonus-claiming'); // Добавляем класс для анимации пульсации
  element.onclick = null; // Убираем возможность повторного клика

  const bonusIcon = element.querySelector('.unclaimed-bonus-icon');
  if (bonusIcon) {
    bonusIcon.classList.add('exploding'); // Добавляем класс для анимации "взрыва"
  }

  // Обновляем счетчик монет (можно сделать чуть раньше, чем закончится полет)
  setTimeout(() => {
    DOMElements.coins.value.innerText = gameState.coins;
    updateMenuNotification();
    saveGame();
  }, 300);

  // Убираем иконку и класс пульсации после завершения их анимаций
  setTimeout(() => {
    if (bonusIcon) bonusIcon.remove();
    element.classList.remove('bonus-claiming');
  }, 400); // Должно совпадать с длительностью анимаций
}

function claimAchievementReward(achievementId, tierIndex, buttonElement) {
  const achievement = ACHIEVEMENTS_DATA[achievementId];
  if (!achievement) return;

  const tier = achievement.tiers[tierIndex];
  const progress = playerProfile[achievementId] || 0;
  const key = `${achievementId}_${tierIndex}`;

  if (progress >= tier.goal && !gameState.claimedAchievements[key]) {
    // Добавляем награду
    gameState.coins += tier.reward;
    // Отмечаем как полученную
    gameState.claimedAchievements[key] = true;

    // Анимация
    animateRewardFly(buttonElement, DOMElements.coins.container, '🪙', 5, 'coin');

    // Обновляем UI
    buttonElement.classList.add('claimed');
    buttonElement.disabled = true;
    buttonElement.innerHTML = '✔️';
    buttonElement.onclick = null;

    DOMElements.coins.value.innerText = gameState.coins;
    updateMenuNotification();
    saveGame();
  }
}

function showCollectionModal() {
  const modal = DOMElements.collectionModal;
  let contentHTML = '';

  const allCategories = Object.keys(CATEGORIES_CONFIG);

  allCategories.forEach(key => {
    const category = CATEGORIES_CONFIG[key];
    // Проверяем, открыт ли хоть один предмет в этой категории
    const isCategoryVisible = category.items.some(item => isDiscovered(key, item.level));

    if (isCategoryVisible) {
      contentHTML += `<h4 style="margin-bottom: 10px; font-size: 0.9rem; text-transform: uppercase; color: var(--accent-color);">${category.name}</h4>`;
      contentHTML += `<div class="progression-container">`;
      category.items.forEach((item, itemIndex) => {
        const itemKey = `${key}-${item.level}`;
        const discovered = isDiscovered(key, item.level);
        const bonusClaimed = !!gameState.claimedCollectionBonuses[itemKey];

        let itemClasses = 'progression-item-square';
        let clickHandler = '';
        let title = 'Не открыто';
        let bonusIconHTML = '';

        if (discovered) {
          title = item.name;
          // Если бонус еще не собран, добавляем соответствующий класс, иконку и обработчик
          if (!bonusClaimed) {
            itemClasses += ' bonus-unclaimed';
            const bonusAmount = item.level * CONFIG.COLLECTION_BONUS_BASE_VALUE;
            clickHandler = `onclick="claimItemBonus('${key}', ${item.level}, this)"`;
            bonusIconHTML = `<div class="unclaimed-bonus-icon" title="Собрать бонус">+${bonusAmount}🪙</div>`;
          }
        } else {
          itemClasses += ' undiscovered';
        }

        const itemIcon = discovered ? item.icon : '?';

        contentHTML += `
          <div class="${itemClasses}" title="${title}" ${clickHandler}>
            <div class="progression-item-icon">${itemIcon}</div>
            <div class="progression-item-level">${item.level}</div>
            ${bonusIconHTML}
          </div>
        `;
        if (itemIndex < category.items.length - 1) {
          contentHTML += '<div class="progression-arrow-h">→</div>';
        }
      });
      contentHTML += `</div><hr style="border-color: #333; margin: 15px 0 10px;">`;
    }
  });

  modal.body.innerHTML = contentHTML;
  modal.footer.innerHTML = ''; // Очищаем футер, кнопка больше не нужна

  modal.overlay.classList.add('active', 'blocking');
}

function findClosestEmptyCell(fromIndex, emptyCells) {
  const genX = fromIndex % CONFIG.GRID_COLS;
  const genY = Math.floor(fromIndex / CONFIG.GRID_COLS);

  let closestCells = [];
  let minDistance = Infinity;

  emptyCells.forEach(cellIndex => {
    const cellX = cellIndex % CONFIG.GRID_COLS;
    const cellY = Math.floor(cellIndex / CONFIG.GRID_COLS);
    const distance = Math.abs(genX - cellX) + Math.abs(genY - cellY);

    if (distance < minDistance) {
      minDistance = distance;
      closestCells = [cellIndex];
    } else if (distance === minDistance) {
      closestCells.push(cellIndex);
    }
  });

  // Выбираем случайную ячейку из самых близких
  return closestCells[Math.floor(Math.random() * closestCells.length)];
}

function triggerSpecialGenerator(generator, fromIndex) {
  if (generator.genCharges <= 0) {
    return;
  }

  const emptyCells = getAvailableEmptyCells();
  if (emptyCells.length === 0) {
    showToast("Нет места для создания предмета!", "error");
    return;
  }

  generator.genCharges--;

  const targetCellIndex = findClosestEmptyCell(fromIndex, emptyCells);
  gameState.lockedCells.push(targetCellIndex);

  const rand = Math.random();
  const newItem = rand < 0.5 ? { isUpgradePart: true, icon: '🔩', name: 'Новая деталь' } : { isMagicTool: true, icon: '⚒️', name: 'Магические инструменты' };

  moveItem3D(DOMElements.grid.children[fromIndex], DOMElements.grid.children[targetCellIndex], newItem.icon).then(() => {
    markItemAsDiscovered(newItem.isUpgradePart ? 'upgrade_part' : 'magic_tool', 1);
    gameState.gridData[targetCellIndex] = newItem;
    gameState.lockedCells = gameState.lockedCells.filter(idx => idx !== targetCellIndex);
    if (generator.genCharges <= 0) {
      gameState.gridData[fromIndex] = null;
    }
    saveGame();
    updateUI();
    animateCellPop(targetCellIndex);
  });
}

function triggerItemGenerator(generator, fromIndex) {
  if (generator.charges <= 0) {
    showToast("У этого предмета закончились заряды.", "error");
    return;
  }
  if (gameState.energy <= 0) {
    showToast("⚡ Упс! Недостаточно энергии игрока!", "error");
    return;
  }
  const emptyCells = getAvailableEmptyCells();
  if (emptyCells.length === 0) {
    showToast("Нет места для создания предмета!", "error");
    return;
  }

  gameState.energy--;
  playerProfile.totalEnergySpent++;
  generator.charges--;

  const targetCellIndex = findClosestEmptyCell(fromIndex, emptyCells);
  gameState.lockedCells.push(targetCellIndex);

  const newItemCategory = generator.generatedCategory;
  const itemInfo = CATEGORIES_CONFIG[newItemCategory].items[0]; // Всегда создаем 1-й уровень

  moveItem3D(DOMElements.grid.children[fromIndex], DOMElements.grid.children[targetCellIndex], itemInfo.icon).then(() => {
    markItemAsDiscovered(newItemCategory, 1);
    gameState.gridData[targetCellIndex] = { category: newItemCategory, level: 1 };
    gameState.lockedCells = gameState.lockedCells.filter(idx => idx !== targetCellIndex);
    if (generator.charges <= 0) {
      const generatorInfo = CATEGORIES_CONFIG[generator.category].items[generator.level - 1];
      gameState.gridData[fromIndex] = null; // Исчезает
      // showToast(`"${generatorInfo.name}" исчерпал себя и исчез.`, "success");
    }
    saveGame();
    updateUI();
    animateCellPop(targetCellIndex);
  });
}

function triggerRegularGenerator(generator, fromIndex) {
  restoreGeneratorsEnergy();
  const lvl = generator.genLevel || 1;
  const config = GEN_ENERGY_CONFIG[lvl];

  if (generator.genEnergy === undefined) generator.genEnergy = config.max;

  if (generator.genEnergy <= 0) {
    showToast("📦 Генератор истощен! Подождите, пока накопятся заряды.", "error");
    return;
  }
  if (gameState.energy <= 0) {
    showToast("⚡ Упс! Недостаточно энергии игрока!", "error");
    return;
  }

  const emptyCells = getAvailableEmptyCells();
  if (emptyCells.length === 0) {
    showToast("Нет места для создания предмета!", "error");
    return;
  }

  if (generator.genEnergy === config.max) {
    generator.lastRegenTime = Date.now();
  }
  generator.genEnergy--;
  gameState.energy--;
  playerProfile.totalEnergySpent++;

  const targetCellIndex = findClosestEmptyCell(fromIndex, emptyCells);
  gameState.lockedCells.push(targetCellIndex);

  const genData = GENERATORS_DATA[generator.generatorKey];
  const spawnCategory = genData.isHybrid ? genData.categories[Math.random() < 0.5 ? 0 : 1] : genData.categories[0];

  const determineSpawnLevel = (generatorLevel, randomPercent) => {
    const chances = SPAWN_CHANCES[generatorLevel];
    if (!chances) return 1;
    for (const tier of chances) {
      if (randomPercent < tier.chance) return tier.level;
    }
    return 1;
  };
  const spawnLevel = determineSpawnLevel(lvl, Math.random() * 100);

  const itemInfo = CATEGORIES_CONFIG[spawnCategory].items[spawnLevel - 1];

  moveItem3D(DOMElements.grid.children[fromIndex], DOMElements.grid.children[targetCellIndex], itemInfo.icon).then(() => {
    markItemAsDiscovered(spawnCategory, spawnLevel);
    gameState.gridData[targetCellIndex] = { category: spawnCategory, level: spawnLevel };
    gameState.lockedCells = gameState.lockedCells.filter(idx => idx !== targetCellIndex);
    saveGame();
    updateUI();
    animateCellPop(targetCellIndex);
  });
}

function triggerGenerator(generator, fromIndex) {
  const genData = GENERATORS_DATA[generator.generatorKey];
  if (genData.isSpecial) {
    triggerSpecialGenerator(generator, fromIndex);
  } else {
    triggerRegularGenerator(generator, fromIndex);
  }
}

function moveItem3D(fromElem, toElem, icon) {
  return new Promise(resolve => {
    if (!fromElem || !toElem) {
      resolve();
      return;
    }

    const fromRect = fromElem.getBoundingClientRect();
    const toRect = toElem.getBoundingClientRect();

    const flyer = document.createElement('div');
    flyer.classList.add('flying-item');
    flyer.innerHTML = icon;

    const startX = fromRect.left + (fromRect.width - 40) / 2;
    const startY = fromRect.top + (fromRect.height - 40) / 2;
    const endX = toRect.left + (toRect.width - 40) / 2;
    const endY = toRect.top + (toRect.height - 40) / 2;

    flyer.style.left = `${startX}px`;
    flyer.style.top = `${startY}px`;
    document.body.appendChild(flyer);

    void flyer.offsetWidth;

    flyer.style.transform = `translate(${endX - startX}px, ${endY - startY}px) scale(0.8)`;

    setTimeout(() => {
      flyer.remove();
      resolve();
    }, CONFIG.ANIMATION.FLY_DURATION);
  });
}

function animateRewardFly(startElement, endElement, icon, count = 5, className = 'coin') {
  if (!startElement || !endElement) return;

  // Получаем координаты ОДИН РАЗ в самом начале
  const startRect = startElement.getBoundingClientRect();
  const endRect = endElement.getBoundingClientRect();
  const startXInitial = startRect.left + startRect.width / 2;
  const startYInitial = startRect.top + startRect.height / 2;
  const endX = endRect.left + endRect.width / 2;
  const endY = endRect.top + endRect.height / 2;

  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const startX = startXInitial + (Math.random() - 0.5) * 40;
      const startY = startYInitial + (Math.random() - 0.5) * 20;

      const flyer = document.createElement('div');
      flyer.classList.add('flying-reward', className);
      flyer.innerHTML = icon;
      flyer.style.left = `${startX}px`;
      flyer.style.top = `${startY}px`;
      document.body.appendChild(flyer);

      void flyer.offsetWidth;

      const dX = endX - startX;
      const dY = endY - startY;

      flyer.style.transform = `translate(${dX}px, ${dY}px) scale(0.5)`;
      flyer.style.opacity = '0';

      setTimeout(() => {
        flyer.remove();
      }, 700);
    }, i * 60);
  }
}

function confirmReset() {
  showModal({
    icon: '⚠️',
    title: 'Сбросить весь прогресс?',
    subtitle: 'Полное обнуление',
    desc: 'Вы потеряете все свои открытые предметы, генераторы, очки уровня и текущие заказы. Это действие нельзя отменить.',
    dangerButtons: {
      confirmButtonText: 'Да, сбросить',
      onConfirm: () => {
        closeModal();
        // Небольшая задержка, чтобы модальное окно успело закрыться перед выполнением тяжелой операции
        setTimeout(() => {
          localStorage.removeItem(CONFIG.SAVE_KEY);
          startNewGame();
          updateUI();
          showToast("Игра полностью перезапущена", "success");
        }, 50);
      }
    },
    isBlocking: true,
  });
}

function checkProgressiveUnlocks() {
  UNLOCK_THRESHOLDS.forEach(threshold => {
    if (gameState.score >= threshold.score && !threshold.unlocked) {
      threshold.unlocked = true;
      if (gameState.lockedCategories.length > 0) {
        // 1. Определяем, какой генератор будет разблокирован, по первой категории в списке.
        const representativeCategory = gameState.lockedCategories[0];
        const genKey = CATEGORIES_CONFIG[representativeCategory].generatorKey;
        const generatorData = GENERATORS_DATA[genKey];

        // 2. Находим ВСЕ категории, которые производит этот генератор.
        const categoriesToUnlock = generatorData.categories;

        // 3. Перемещаем все эти категории из locked в active.
        categoriesToUnlock.forEach(catToUnlock => {
          const indexInLocked = gameState.lockedCategories.indexOf(catToUnlock);
          if (indexInLocked > -1) {
            gameState.lockedCategories.splice(indexInLocked, 1);
          }
          if (!gameState.activeCategories.includes(catToUnlock)) {
            gameState.activeCategories.push(catToUnlock);
            gameState.newlyUnlockedCategories.push(catToUnlock);
          }
        });

        // 4. Добавляем сам генератор в очередь наград.
        gameState.rewardQueue.push({
          isGenerator: true,
          generatorKey: genKey,
          genLevel: 1,
          genEnergy: GEN_ENERGY_CONFIG[1].max,
          lastRegenTime: Date.now()
        });
        markItemAsDiscovered(genKey, 'generator');
        showToast(`🎉 Уровень ${threshold.level}! Новый генератор: ${generatorData.name}!`, "success");
      } else {
        spawnUpgradePart();
        showToast(`🎉 Уровень ${threshold.level}! Бонус: получена Новая деталь 🔩!`, "success");
      }
      updateUI(); // Обновляем UI, чтобы показать награду в очереди
    }
  });
}

function spawnBonusGenerator() {
  // Проверяем, есть ли еще заблокированные категории для открытия
  if (gameState.lockedCategories.length > 0) {
    // 1. Определяем, какой генератор будет разблокирован, по первой категории в списке.
    const representativeCategory = gameState.lockedCategories[0];
    const genKey = CATEGORIES_CONFIG[representativeCategory].generatorKey;
    const generatorData = GENERATORS_DATA[genKey];

    // 2. Находим ВСЕ категории, которые производит этот генератор.
    const categoriesToUnlock = generatorData.categories;

    // 3. Перемещаем все эти категории из locked в active.
    //    Это гарантирует, что новые заказы могут создаваться для этих категорий,
    //    даже если сам генератор еще не получен игроком из очереди наград.
    categoriesToUnlock.forEach(catToUnlock => {
      const indexInLocked = gameState.lockedCategories.indexOf(catToUnlock);
      if (indexInLocked > -1) {
        gameState.lockedCategories.splice(indexInLocked, 1);
      }
      if (!gameState.activeCategories.includes(catToUnlock)) {
        gameState.activeCategories.push(catToUnlock);
        gameState.newlyUnlockedCategories.push(catToUnlock);
      }
    });

    // 4. Добавляем сам генератор в очередь наград.
    gameState.rewardQueue.push({
      isGenerator: true,
      generatorKey: genKey,
      genLevel: 1,
      genEnergy: GEN_ENERGY_CONFIG[1].max,
      lastRegenTime: Date.now()
    });
    markItemAsDiscovered(genKey, 'generator');
    showToast(`🎁 Сюжет завершен! Вы открыли новый генератор: ${generatorData.name}!`, "story");
  } else {
    // Если все генераторы уже открыты, даем вместо этого деталь для улучшения
    spawnUpgradePart();
    showToast(`🎁 Сюжет завершен! Бонус: получена Новая деталь 🔩!`, "story");
  }
}

function spawnRandomExistingGenerator() {
  // 1. Получаем все уникальные ключи генераторов из активных категорий.
  const activeGeneratorKeys = [...new Set(gameState.activeCategories.map(cat => CATEGORIES_CONFIG[cat].generatorKey))];

  // 2. Фильтруем специальные генераторы, такие как bonus_chest.
  const regularGeneratorKeys = activeGeneratorKeys.filter(key => !GENERATORS_DATA[key].isSpecial);

  if (regularGeneratorKeys.length > 0) {
    // 3. Выбираем один случайным образом.
    const randomGenKey = regularGeneratorKeys[Math.floor(Math.random() * regularGeneratorKeys.length)];
    const generatorData = GENERATORS_DATA[randomGenKey];

    // 4. Добавляем его в очередь наград.
    gameState.rewardQueue.push({
      isGenerator: true,
      generatorKey: randomGenKey,
      genLevel: 1,
      genEnergy: GEN_ENERGY_CONFIG[1].max,
      lastRegenTime: Date.now()
    });
    markItemAsDiscovered(randomGenKey, 'generator');
    showToast(`🎁 Сюжет завершен! Бонус: получен генератор "${generatorData.name}"!`, "story");
  } else {
    // Запасной вариант, если по какой-то причине нет активных обычных генераторов (маловероятно).
    spawnUpgradePart();
    showToast(`🎁 Сюжет завершен! Бонус: получена Новая деталь 🔩!`, "story");
  }
}

function spawnUpgradePart() {
  gameState.rewardQueue.push({
    isUpgradePart: true,
    icon: '🔩',
    name: 'Новая деталь'
  });
  markItemAsDiscovered('upgrade_part', 1);
}

function spawnMagicTool() {
  gameState.rewardQueue.push({
    isMagicTool: true,
    icon: '⚒️',
    name: 'Магические инструменты'
  });
  markItemAsDiscovered('magic_tool', 1);
}

function spawnGeneratorPart() {
  // 1. Get all unique generator keys from active categories.
  const activeGeneratorKeys = [...new Set(gameState.activeCategories.map(cat => CATEGORIES_CONFIG[cat].generatorKey))];

  // 2. Filter out special generators.
  const regularGeneratorKeys = activeGeneratorKeys.filter(key => !GENERATORS_DATA[key].isSpecial);

  if (regularGeneratorKeys.length > 0) {
    // 3. Pick one randomly.
    const randomGenKey = regularGeneratorKeys[Math.floor(Math.random() * regularGeneratorKeys.length)];
    const generatorData = GENERATORS_DATA[randomGenKey];

    // 4. Add it to the reward queue.
    gameState.rewardQueue.push({
      isGeneratorPart: true,
      generatorKey: randomGenKey,
      level: 1
    });
    markItemAsDiscovered(randomGenKey, 'part');
    // showToast(`⚙️ Получена деталь для "${generatorData.name}"!`, "success");
  }
}

function showToast(text, type = "success") {
  const toast = document.createElement('div');
  toast.classList.add('game-toast', type);
  toast.innerText = text;

  DOMElements.toastContainer.appendChild(toast);

  // Показываем уведомление
  setTimeout(() => {
    toast.classList.add('show');
  }, 10); // Небольшая задержка для срабатывания transition

  // Скрываем и удаляем уведомление через время
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300); // Удаляем после завершения анимации скрытия
  }, 2800);
}

function generateOrder() {
  const isStoryRoll = Math.random() < CONFIG.ORDER_GENERATION_STORY_CHANCE;
  const hasActiveStory = gameState.orders.some(o => o.isStory);

  if (isStoryRoll && !hasActiveStory) {
    generateStoryOrder(1);
    return;
  }

  // --- Новая логика выбора персонажа ---
  // 1. Получаем имена персонажей, у которых уже есть заказы
  const activeCharacterNames = gameState.orders.map(o => o.character.name);
  // 2. Фильтруем список доступных персонажей, исключая уже активных
  const availableCharacters = CHARACTERS.filter(c => !activeCharacterNames.includes(c.name));
  // 3. Выбираем случайного персонажа из доступных. Если все заняты, выбираем из полного списка.
  const characterPool = availableCharacters.length > 0 ? availableCharacters : CHARACTERS;
  const char = characterPool[Math.floor(Math.random() * characterPool.length)];
  let baseCategory;
  if (gameState.newlyUnlockedCategories && gameState.newlyUnlockedCategories.length > 0) {
    baseCategory = gameState.newlyUnlockedCategories.shift();
  }

  const itemsCount = Math.floor(Math.random() * 3) + 1;
  const requestedItems = [];

  // Determine item levels based on player's progress
  const playerLevel = getCurrentPlayerLevel();
  let orderLevelConfig = { min: 1, max: 2 }; // Default for level 1

  const threshold = UNLOCK_THRESHOLDS.find(t => t.level === playerLevel);
  if (threshold && threshold.orderLevels) {
    orderLevelConfig = threshold.orderLevels;
  } else if (playerLevel > UNLOCK_THRESHOLDS.length) { // Max level reached
    orderLevelConfig = { min: 4, max: CONFIG.MAX_ITEM_LEVEL };
  }

  const { min: minLevel, max: maxLevel } = orderLevelConfig;

  for (let i = 0; i < itemsCount; i++) {
    const orderableCategories = [...gameState.activeCategories, ...gameState.unlockedItemGenCategories];
    const randomCat = (i === 0 && baseCategory)
      ? baseCategory
      : orderableCategories[Math.floor(Math.random() * orderableCategories.length)];
    const randomLevel = Math.floor(Math.random() * (maxLevel - minLevel + 1)) + minLevel;
    requestedItems.push({ category: randomCat, level: randomLevel });
  }

  requestedItems.sort((a, b) => a.level - b.level);

  gameState.orders.push({
    id: gameState.orderIdCounter++,
    character: char,
    items: requestedItems,
    canComplete: false,
    isStory: false
  });
}

function generateStoryOrder(step, fixedChar = null) {
  let char;
  if (fixedChar) {
    char = fixedChar;
  } else {
    // --- Новая логика выбора персонажа ---
    const activeCharacterNames = gameState.orders.map(o => o.character.name);
    const availableCharacters = STORY_CHARACTERS.filter(c => !activeCharacterNames.includes(c.name));
    const characterPool = availableCharacters.length > 0 ? availableCharacters : STORY_CHARACTERS;
    char = characterPool[Math.floor(Math.random() * characterPool.length)];
    // --- Конец новой логики ---
  }

  const requestedItems = [];

  let targetLevel = Math.min(CONFIG.MAX_ITEM_LEVEL, step + 2);
  const orderableCategories = [...gameState.activeCategories, ...gameState.unlockedItemGenCategories];
  const randomCat = orderableCategories[Math.floor(Math.random() * orderableCategories.length)];
  requestedItems.push({ category: randomCat, level: targetLevel });

  if (step >= 2) {
    const randomCat2 = orderableCategories[Math.floor(Math.random() * orderableCategories.length)];
    requestedItems.push({ category: randomCat2, level: Math.max(1, targetLevel - 2) });
  }

  requestedItems.sort((a, b) => a.level - b.level);

  gameState.orders.push({
    id: gameState.orderIdCounter++,
    character: char,
    items: requestedItems,
    canComplete: false,
    isStory: true,
    storyStep: step
  });

  if (step === 1 && !fixedChar) {
    showToast(`🕵️‍♂️ Появился сюжетный персонаж с особым заказом!`, "story");
  }
}

function checkOrdersAvailability() {
  // 1. Сброс выделения и сбор всех требуемых предметов в Set для быстрой проверки
  const requiredItemsSet = new Set();
  gameState.orders.forEach(order => order.items.forEach(req => requiredItemsSet.add(`${req.category}-${req.level}`)));

  // 2. Создаем частотную карту доступных предметов на поле и одновременно подсвечиваем их
  const availableItemsMap = new Map();
  gameState.gridData.forEach((item, idx) => {
    if (!item) return;

    item.isAllocatedToOrder = false; // Сброс

    const isAvailableForOrder = item && !item.isGenerator && !item.isBlocked && !item.isUpgradePart && !item.isGeneratorPart && !item.isMagicTool && !gameState.lockedCells.includes(idx);
    if (!isAvailableForOrder) return;

    const key = `${item.category}-${item.level}`;

    // Подсветка, если предмет нужен для любого из заказов
    if (requiredItemsSet.has(key)) {
      item.isAllocatedToOrder = true;
    }

    // Добавление в карту доступных предметов
    if (!availableItemsMap.has(key)) {
      availableItemsMap.set(key, []);
    }
    availableItemsMap.get(key).push(idx);
  });

  // 3. Проверяем каждый заказ на выполнимость
  gameState.orders.forEach((order) => {
    // Для каждого заказа создаем временную копию карты доступных предметов
    const tempAvailableMap = new Map(Array.from(availableItemsMap.entries()).map(([k, v]) => [k, [...v]]));
    let canComplete = true;
    const allocatedForThisOrder = [];

    for (const reqItem of order.items) {
      const key = `${reqItem.category}-${reqItem.level}`;
      const availableIndices = tempAvailableMap.get(key);

      if (availableIndices && availableIndices.length > 0) {
        const gridIndex = availableIndices.shift(); // "Берем" один предмет с поля
        allocatedForThisOrder.push(gridIndex);
      } else {
        canComplete = false; // Если нужного предмета нет, заказ невыполним
        break;
      }
    }

    order.canComplete = canComplete;
    order.allocatedIndices = order.canComplete ? allocatedForThisOrder : [];
  });

  // Проверяем, появился ли новый готовый к сдаче заказ
  const hasNewlyCompletedOrder = gameState.orders.some(o => o.canComplete && !o.wasCompletableBefore);

  // Автоматическое перемещение готовых к сдаче заказов влево
  gameState.orders.sort((a, b) => {
    if (a.canComplete && !b.canComplete) return -1;
    if (!a.canComplete && b.canComplete) return 1;
    return 0;
  });

  // Если появился новый выполненный заказ, плавно прокручиваем панель влево
  if (hasNewlyCompletedOrder) {
    setTimeout(() => {
      DOMElements.ordersList.scrollTo({ left: 0, behavior: 'smooth' });
    }, 50); // Небольшая задержка, чтобы DOM успел обновиться перед прокруткой
  }

}


function renderOrders() {
  const ordersList = DOMElements.ordersList;

  // Сохраняем предыдущее состояние для отслеживания изменений
  gameState.orders.forEach(order => {
    order.wasCompletableBefore = order.canComplete;
  });

  // Получаем список старых ID для сохранения структуры
  const currentCards = Array.from(ordersList.children);

  // Создаем временный список доступных на поле предметов для проверки
  const availableItemsOnGrid = gameState.gridData.filter(item =>
    item && !item.isGenerator && !item.isBlocked && !item.isUpgradePart && !item.isMagicTool
  );

  // Создаем или обновляем карточки на основе отсортированного массива
  gameState.orders.forEach((order, index) => {
    const cardId = `order-card-${order.id}`;
    let card = document.getElementById(cardId);
    // Создаем копию доступных предметов для этого конкретного заказа, чтобы не влиять на другие
    let tempAvailable = [...availableItemsOnGrid];

    if (!card) {
      card = document.createElement('div');
      card.id = cardId;
      card.dataset.orderId = order.id;
      card.classList.add('order-card');
      if (order.isStory) card.classList.add('story-card');
      ordersList.appendChild(card);
    }

    // Перемещаем карточку в правильный индекс в DOM для CSS transition
    if (ordersList.children[index] !== card) {
      ordersList.insertBefore(card, ordersList.children[index]);
    }

    let itemsHTML = '<div class="order-items-list">';
    order.items.forEach(item => {
      const itemInfo = CATEGORIES_CONFIG[item.category].items[item.level - 1];
      // Ищем, есть ли подходящий предмет на поле
      const foundItemIndex = tempAvailable.findIndex(gridItem =>
        gridItem.category === item.category && gridItem.level === item.level
      );

      let isFulfilled = foundItemIndex !== -1;
      if (isFulfilled) {
        // Если предмет найден, "удаляем" его из временного списка, чтобы он не засчитался дважды
        tempAvailable.splice(foundItemIndex, 1);
      }

      const fulfilledClass = isFulfilled ? 'fulfilled' : '';
      itemsHTML += `<div class="order-target ${fulfilledClass}" title="${itemInfo.name}" data-category="${item.category}"><span class="order-item-icon">${itemInfo.icon}</span></div>`;
    });
    itemsHTML += '</div>';

    card.innerHTML = `
                    <div class="order-header">
                        <div class="order-header-info" title="${order.character.name}">
                            <span class="character-avatar">${order.character.icon}</span>
                            <span style="font-weight:bold; overflow:hidden; text-overflow:ellipsis;">${order.character.name}</span>
                        </div>
                        ${!order.isStory ? `<button class="cancel-btn" title="Отменить заказ">&times;</button>` : `<span style="font-size:0.65rem; color:#ffb703; font-weight:bold;">⚡Сюжет ${order.storyStep}/3</span>`}
                    </div>
                    ${itemsHTML}
                    <button class="complete-btn ${order.canComplete ? 'visible' : ''}">Сдать заказ</button>
                `;
  });

  // Удаляем карточки, которых больше нет в логике игры
  const activeIds = gameState.orders.map(o => `order-card-${o.id}`);
  currentCards.forEach(c => {
    if (!activeIds.includes(c.id) && !c.classList.contains('fade-out')) {
      c.remove();
    }
  });
}

function showCharacterById(id) {
  const order = gameState.orders.find(o => o.id === id);
  if (order) showCharacterModal(order);
}

function confirmCancelOrder(id) {
  const order = gameState.orders.find(o => o.id === id);
  if (!order || order.isStory) return;

  showModal({
    icon: '❓',
    title: 'Отменить заказ?',
    subtitle: 'Подтверждение действия',
    desc: `Вы уверены, что хотите отменить этот заказ? Это будет стоить ${CONFIG.COINS_PER_ORDER_CANCEL} монет.`,
    dangerButtons: {
      confirmButtonText: `Да, отменить (-${CONFIG.COINS_PER_ORDER_CANCEL}🪙)`,
      onConfirm: () => {
        if (gameState.coins < CONFIG.COINS_PER_ORDER_CANCEL) { showToast(`🪙 Недостаточно монет для отмены (нужно ${CONFIG.COINS_PER_ORDER_CANCEL})!`, "error"); closeModal(); return; }

        gameState.coins -= CONFIG.COINS_PER_ORDER_CANCEL;
        const idx = gameState.orders.findIndex(o => o.id === id);
        if (idx !== -1) {
          gameState.orders.splice(idx, 1);
          generateOrder();
          saveGame();
          updateUI();
          showToast("Заказ отменен", "error");
        }
        closeModal();
      }
    },
    isBlocking: true,
  });
}

function completeOrder(id) {
  checkOrdersAvailability();
  const orderIndex = gameState.orders.findIndex(o => o.id === id);
  if (orderIndex === -1) return;

  const order = gameState.orders[orderIndex];
  if (!order.canComplete) {
    showToast("У вас нет необходимых предметов на поле!", "error");
    return;
  }

  // Находим карточку в DOM для запуска анимации испарения
  const cardElement = DOMElements.ordersList.querySelector(`#order-card-${id}`);
  if (cardElement) {
    cardElement.classList.add('fade-out');
  }

  const cellElements = document.querySelectorAll('.cell');
  const targetAvatarElement = cardElement ? cardElement.querySelector('.character-avatar') : null;

  // Используем предварительно рассчитанные индексы из checkOrdersAvailability
  const elementsToAnimate = order.allocatedIndices.map(idx => {
    const item = gameState.gridData[idx];
    return {
      idx: idx,
      icon: CATEGORIES_CONFIG[item.category].items[item.level - 1].icon,
      level: item.level
    };
  });

  elementsToAnimate.forEach(el => {
    gameState.lockedCells.push(el.idx);
    gameState.gridData[el.idx] = null;
  });
  renderGrid();

  const animationPromises = elementsToAnimate.map(el => {
    gameState.score += el.level * CONFIG.ITEM_SCORE_MULTIPLIER;
    gameState.coins += el.level * CONFIG.COIN_MULTIPLIER;
    return moveItem3D(cellElements[el.idx], targetAvatarElement, el.icon).then(() => {
      gameState.lockedCells = gameState.lockedCells.filter(idx => idx !== el.idx);
    });
  });

  // After all items have flown to the card
  Promise.all(animationPromises).then(() => {
    const coinsEarned = elementsToAnimate.reduce((sum, el) => sum + el.level * CONFIG.COIN_MULTIPLIER, 0);
    playerProfile.totalCoinsEarned += coinsEarned;
    playerProfile.totalOrdersCompleted++;
    const energyReward = order.isStory ? CONFIG.STORY_ORDER_ENERGY_REWARD : CONFIG.ORDER_ENERGY_REWARD;

    // Анимация полета наград
    animateRewardFly(targetAvatarElement, DOMElements.coins.value, '🪙', Math.min(10, Math.ceil(coinsEarned / 5)), 'coin');
    if (energyReward > 0) animateRewardFly(targetAvatarElement, DOMElements.energy.value, '⚡', energyReward, 'energy');

    // Wait for the card fade-out animation to complete
    setTimeout(() => {
      const wasStory = order.isStory;
      const currentStep = order.storyStep;
      const storyChar = order.character;
      gameState.orders.splice(orderIndex, 1);
      checkProgressiveUnlocks();
      gameState.energy = Math.min(CONFIG.MAX_ENERGY, gameState.energy + energyReward);

      if (wasStory) {
        if (currentStep < 3) {
          generateStoryOrder(currentStep + 1, storyChar);
          showToast(`🔮 Сюжет выполнен! Шаг ${currentStep + 1}/3 начался.`, "story");
        } else {
          const rand = Math.random();
          if (rand < 0.3) {
            // 30% шанс на подарочную коробку
            gameState.rewardQueue.push({
              isGenerator: true,
              generatorKey: 'bonus_chest',
              genLevel: 1, genCharges: 1
            });
            showToast(`🎁 Сюжет завершен! Вы получили Подарочную коробку!`, "story");
          } else if (rand < 0.6) {
            // 30% шанс на новый генератор (или деталь, если все открыто)
            spawnBonusGenerator();
          } else {
            // 40% шанс на случайный уже открытый генератор
            spawnRandomExistingGenerator();
          }
          generateOrder();
        }
      } else {
        generateOrder();
        spawnGeneratorPart();
      }

      saveGame();
      updateUI();
    }, CONFIG.ANIMATION.FADE_DURATION);
  });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

window.onload = initGame;