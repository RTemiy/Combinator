export const CATEGORIES_CONFIG = {
  flowers: {
    name: 'Растения',
    color: '#04c30e',
    generatorKey: 'flowers',
    items: [
      { level: 1, icon: new URL('/assets/icons/categories/flowers/seeds.png', import.meta.url), name: 'Семена растений', desc: 'Маленькие спящие зерна. Посадите их в землю, чтобы дать жизнь.' },
      { level: 2, icon: new URL('/assets/icons/categories/flowers/sprout.png', import.meta.url), name: 'Зеленый росток', desc: 'Юный и хрупкий стебелек, который только-только пробился из земли.' },
      { level: 3, icon: new URL('/assets/icons/categories/flowers/mint.png', import.meta.url), name: 'Небольшое растение', desc: 'Растение окрепло и обзавелось несколькими листочками.' },
      { level: 4, icon: new URL('/assets/icons/categories/flowers/potted_plant.png', import.meta.url), name: 'Большое в горшке', desc: 'Ухоженный цветок в керамике. Идеально подходит для украшения интерьера.' },
      { level: 5, icon: new URL('/assets/icons/categories/flowers/rose.png', import.meta.url), name: 'Алая роза', desc: 'Прекрасный и гордый цветок с острыми защитными шипами.' },
      { level: 6, icon: new URL('/assets/icons/categories/flowers/bouquet.png', import.meta.url), name: 'Праздничный букет', desc: 'Красивая композиция из лучших цветов в подарочной упаковке.' },
      { level: 7, icon: new URL('/assets/icons/categories/flowers/tree.png', import.meta.url), name: 'Яблоня', desc: 'Могучее дерево, которое весной цветет, а осенью дарит сочные яблоки. Начало яблочного производства.', becomesGenerator: { category: 'apples', charges: 7 } }
    ]
  },
  apples: {
    name: 'Яблочное производство',
    color: '#ff0000',
    generatorKey: null,
    isItemGenerated: true,
    items: [
      { level: 1, icon: new URL('/assets/icons/categories/apples/slice.png', import.meta.url), name: 'Долька яблока', desc: 'Сочный кусочек яблока, идеален для быстрого перекуса.' },
      { level: 2, icon: new URL('/assets/icons/categories/apples/apple.png', import.meta.url), name: 'Целое яблоко', desc: 'Спелое и хрустящее яблоко, полное витаминов.' },
      { level: 3, icon: new URL('/assets/icons/categories/apples/box.png', import.meta.url), name: 'Ящик яблок', desc: 'Полный ящик отборных яблок, готовых к переработке.' },
      { level: 4, icon: new URL('/assets/icons/categories/apples/juice_glass.png', import.meta.url), name: 'Стакан яблочного сока', desc: 'Свежевыжатый сок, сохранивший весь вкус и аромат яблок.' },
      { level: 5, icon: new URL('/assets/icons/categories/apples/juice_bottle.png', import.meta.url), name: 'Бутылка яблочного сока', desc: 'Удобная бутылка с натуральным соком, чтобы поделиться с друзьями.' },
      { level: 6, icon: new URL('/assets/icons/categories/apples/pie.png', import.meta.url), name: 'Шарлотка', desc: 'Классический яблочный пирог с нежным бисквитом и корицей.' },
      { level: 7, icon: new URL('/assets/icons/categories/apples/jelly_cake.png', import.meta.url), name: 'Желе-торт из яблок', desc: 'Легкий и освежающий десерт из яблочного желе и кусочков фруктов.' },
    ]
  },
  coffee: {
    name: 'Кофе',
    color: '#c5420d',
    generatorKey: 'coffee',
    items: [
      { level: 1, icon: new URL('/assets/icons/categories/coffee/empty_cup.png', import.meta.url), name: 'Пустой стаканчик', desc: 'Бумажный стаканчик, готовый к наполнению.' },
      { level: 2, icon: new URL('/assets/icons/categories/coffee/cup_coffee.png', import.meta.url), name: 'Стаканчик с кофе', desc: 'Горячий эспрессо в простом стаканчике.' },
      { level: 3, icon: new URL('/assets/icons/categories/coffee/ready_cup.png', import.meta.url), name: 'Стаканчик навынос', desc: 'Кофе с крышкой, который удобно взять с собой.' },
      { level: 4, icon: new URL('/assets/icons/categories/coffee/ceramic.png', import.meta.url), name: 'Пустая керамическая чашка', desc: 'Элегантная чашка для настоящих ценителей.' },
      { level: 5, icon: new URL('/assets/icons/categories/coffee/ceramic_coffee.png', import.meta.url), name: 'Чашка с кофе', desc: 'Ароматный американо в керамической чашке.' },
      { level: 6, icon: new URL('/assets/icons/categories/coffee/cappuccino.png', import.meta.url), name: 'Капучино', desc: 'Нежный кофе с пышной молочной пенкой.' },
      { level: 7, icon: new URL('/assets/icons/categories/coffee/best_coffee.png', import.meta.url), name: 'Сладкий кофе с допингами', desc: 'Авторский напиток с сиропом, сливками и маршмеллоу.' },
    ]
  },
  stationery: {
    name: 'Письменные принадлежности',
    color: '#0fffd4',
    generatorKey: 'stationery',
    items: [
      { level: 1, icon: new URL('/assets/icons/categories/stationery/clip.png', import.meta.url), name: 'Скрепка', desc: 'Маленький металлический помощник, удерживающий листы вместе.' },
      { level: 2, icon: new URL('/assets/icons/categories/stationery/eraser.png', import.meta.url), name: 'Ластик', desc: 'Стирает ошибки и неудачные наброски, давая второй шанс.' },
      { level: 3, icon: new URL('/assets/icons/categories/stationery/pencil.png', import.meta.url), name: 'Карандаш', desc: 'Простой инструмент для письма и рисования, основа творчества.' },
      { level: 4, icon: new URL('/assets/icons/categories/stationery/pen.png', import.meta.url), name: 'Ручка', desc: 'Оставляет четкий и уверенный след, идеальна для важных записей.' },
      { level: 5, icon: new URL('/assets/icons/categories/stationery/scissors.png', import.meta.url), name: 'Ножницы', desc: 'Острые лезвия для точной резки бумаги и картона.' },
      { level: 6, icon: new URL('/assets/icons/categories/stationery/pencil_case.png', import.meta.url), name: 'Пенал', desc: 'Вместилище для всех письменных сокровищ, поддерживает порядок.' },
      { level: 7, icon: new URL('/assets/icons/categories/stationery/organizer.png', import.meta.url), name: 'Органайзер', desc: 'Подставка для письменных принадлежностей, которая собирает все инструменты в одном месте.', becomesGenerator: { category: 'gadgets', charges: 13 } },
    ]
  },
  gadgets: {
    name: 'Гаджеты',
    color: '#00ffb2',
    generatorKey: null,
    isItemGenerated: true,
    items: [
      { level: 1, icon: new URL('/assets/icons/categories/gadgets/usb_cable.png', import.meta.url), name: 'USB-кабель', desc: 'Универсальный провод для зарядки и передачи данных. Без него никуда.' },
      { level: 2, icon: new URL('/assets/icons/categories/gadgets/powerbank.png', import.meta.url), name: 'Powerbank', desc: 'Портативный аккумулятор, который спасет в самый нужный момент.' },
      { level: 3, icon: new URL('/assets/icons/categories/gadgets/mouse.png', import.meta.url), name: 'Беспроводная мышь', desc: 'Удобный манипулятор, дающий свободу от проводов.' },
      { level: 4, icon: new URL('/assets/icons/categories/gadgets/headphones.png', import.meta.url), name: 'Беспроводные наушники', desc: 'Погрузитесь в музыку или подкаст, не мешая окружающим.' },
      { level: 5, icon: new URL('/assets/icons/categories/gadgets/smartwatch.png', import.meta.url), name: 'Умные часы', desc: 'Стильный аксессуар, который следит за активностью и показывает уведомления.' },
      { level: 6, icon: new URL('/assets/icons/categories/gadgets/tablet.png', import.meta.url), name: 'Планшет', desc: 'Большой экран для работы, игр и просмотра фильмов.' },
      { level: 7, icon: new URL('/assets/icons/categories/gadgets/laptop.png', import.meta.url), name: 'Ноутбук', desc: 'Мощный портативный компьютер для решения любых задач.' },
      ]
  },
  books: {
    name: 'Книги',
    color: '#0f1eff',
    generatorKey: 'stationery',
    items: [
      { level: 1, icon: new URL('/assets/icons/categories/books/sticker.png', import.meta.url), name: 'Липучая наклейка', desc: 'Маленький листок для быстрых заметок и напоминаний.' },
      { level: 2, icon: new URL('/assets/icons/categories/books/paper.png', import.meta.url), name: 'Упаковка наклеек', desc: 'Свежая упаковка наклеек, прямо из типографии. Все готово для мощного брейншторма.' },
      { level: 3, icon: new URL('/assets/icons/categories/books/spiral_notebook.png', import.meta.url), name: 'Блокнот на пружине', desc: 'Удобный блокнот для конспектов и зарисовок.' },
      { level: 4, icon: new URL('/assets/icons/categories/books/notebook.png', import.meta.url), name: 'Блокнот', desc: 'Надежный спутник для записи мыслей и планов в твердой обложке.' },
      { level: 5, icon: new URL('/assets/icons/categories/books/book.png', import.meta.url), name: 'Книжка', desc: 'Источник знаний или увлекательная история в переплете.' },
      { level: 6, icon: new URL('/assets/icons/categories/books/books_stack.png', import.meta.url), name: 'Стопка книг', desc: 'Коллекция мудрости и приключений, ожидающая своего читателя.' },
      { level: 7, icon: new URL('/assets/icons/categories/books/bookshelf.png', import.meta.url), name: 'Книжный шкаф', desc: 'Целая библиотека, хранящая в себе миры и эпохи.' },
    ]
  },
  bakery: {
    name: 'Выпечка',
    color: '#edca08',
    generatorKey: 'bakery',
    items: [
      { level: 1, icon: new URL('/assets/icons/categories/dough/toast.png', import.meta.url), name: 'Тост', desc: 'Поджаренный ломтик хлеба, хрустящий снаружи и мягкий внутри.' },
      { level: 2, icon: new URL('/assets/icons/categories/dough/bagel.png', import.meta.url), name: 'Бейгл', desc: 'Плотный бублик, который часто едят с начинкой.' },
      { level: 3, icon: new URL('/assets/icons/categories/dough/brioche.png', import.meta.url), name: 'Бриошь', desc: 'Сдобная булочка из воздушного теста, идеальна для завтрака.' },
      { level: 4, icon: new URL('/assets/icons/categories/dough/ciabatta.png', import.meta.url), name: 'Чиабатта', desc: 'Итальянский хлеб с пористой мякотью и хрустящей корочкой.' },
      { level: 5, icon: new URL('/assets/icons/categories/dough/focaccia.png', import.meta.url), name: 'Фокачча с оливками', desc: 'Пышная итальянская лепешка, сдобренная оливковым маслом и оливками.' },
      { level: 6, icon: new URL('/assets/icons/categories/dough/baguette.png', import.meta.url), name: 'Багет', desc: 'Длинный и тонкий французский хлеб с хрустящей корочкой.' },
      { level: 7, icon: new URL('/assets/icons/categories/dough/karavai.png', import.meta.url), name: 'Каравай', desc: 'Пышный и румяный праздничный хлеб, символ гостеприимства.' },
    ]
  },
  pastry: {
    name: 'Кондитерские изделия',
    color: '#ed08c7',
    generatorKey: 'bakery',
    items: [
      { level: 1, icon: new URL('/assets/icons/categories/candies/cacao.png', import.meta.url), name: 'Какао', desc: 'Упаковка какао-порошка, основа для будущих шоколадных шедевров.' },
      { level: 2, icon: new URL('/assets/icons/categories/candies/choco_candy.png', import.meta.url), name: 'Шоколадная конфета', desc: 'Маленькое шоколадное удовольствие с нежной начинкой.' },
      { level: 3, icon: new URL('/assets/icons/categories/candies/choco_bar.png', import.meta.url), name: 'Плитка шоколада', desc: 'Классическая плитка темного шоколада.' },
      { level: 4, icon: new URL('/assets/icons/categories/candies/muffin.png', import.meta.url), name: 'Шоколадный маффин', desc: 'Воздушный кекс с кусочками тающего шоколада.' },
      { level: 5, icon: new URL('/assets/icons/categories/candies/croissant.png', import.meta.url), name: 'Круассан с фисташковой пастой', desc: 'Слоеный круассан с ароматной и сладкой фисташковой начинкой.' },
      { level: 6, icon: new URL('/assets/icons/categories/candies/eclairs.png', import.meta.url), name: 'Упаковка эклеров', desc: 'Набор изысканных заварных пирожных с нежным кремом.' },
      { level: 7, icon: new URL('/assets/icons/categories/candies/bento_cake.png', import.meta.url), name: 'Бенто-торт', desc: 'Миниатюрный торт в коробочке, модный и вкусный десерт.' },
    ]
  },
  currant: {
    name: 'Смородина',
    color: '#8c00ff',
    generatorKey: 'currant',
    items: [
      { level: 1, icon: new URL('/assets/icons/categories/currant/single_berry.png', import.meta.url), name: 'Ягодка смородины', desc: 'Одна-единственная спелая и блестящая ягодка.' },
      { level: 2, icon: new URL('/assets/icons/categories/currant/bunch.png', import.meta.url), name: 'Гроздь смородины', desc: 'Целая веточка, усыпанная кисло-сладкими ягодами.' },
      { level: 3, icon: new URL('/assets/icons/categories/currant/handful.png', import.meta.url), name: 'Горсть смородины', desc: 'Несколько ягод, которых хватит, чтобы распробовать вкус лета.' },
      { level: 4, icon: new URL('/assets/icons/categories/currant/bowl.png', import.meta.url), name: 'Миска со смородиной', desc: 'Полная миска свежесобранных ягод, посыпанных сахаром.' },
      { level: 5, icon: new URL('/assets/icons/categories/currant/basket.png', import.meta.url), name: 'Корзинка смородины', desc: 'Небольшая плетеная корзинка, доверху наполненная урожаем.' },
      { level: 6, icon: new URL('/assets/icons/categories/currant/jam_jar.png', import.meta.url), name: 'Банка варенья', desc: 'Густое и сладкое смородиновое варенье, заготовленное на зиму.' },
      { level: 7, icon: new URL('/assets/icons/categories/currant/pie.png', import.meta.url), name: 'Пирог со смородиной', desc: 'Домашний пирог с ароматной ягодной начинкой.' },
    ]
  },
  honey: {
    name: 'Мёд',
    color: '#ffb703',
    generatorKey: 'beehive',
    items: [
      { level: 1, icon: new URL('/assets/icons/categories/honey/nectar.png', import.meta.url), name: 'Цветочный нектар', desc: 'Сладкая жидкость, собранная пчелами. Основа будущего мёда.' },
      { level: 2, icon: new URL('/assets/icons/categories/honey/honey_cell.png', import.meta.url), name: 'Ячейка сот', desc: 'Одна восковая ячейка, доверху наполненная свежим мёдом.' },
      { level: 3, icon: new URL('/assets/icons/categories/honey/honeycomb.png', import.meta.url), name: 'Кусочек сот', desc: 'Ароматный кусочек сот. Можно жевать прямо так!' },
      { level: 4, icon: new URL('/assets/icons/categories/honey/honey_jar.png', import.meta.url), name: 'Баночка жидкого мёда', desc: 'Классический цветочный мёд, прозрачный и тягучий.' },
      { level: 5, icon: new URL('/assets/icons/categories/honey/creamed_honey.png', import.meta.url), name: 'Крем-мёд', desc: 'Нежный взбитый мёд, который тает во рту. Идеально для тостов.' },
      { level: 6, icon: new URL('/assets/icons/categories/honey/honey_with_nuts.png', import.meta.url), name: 'Мёд с орехами', desc: 'Питательное лакомство: отборные орехи в цветочном мёде.' },
      { level: 7, icon: new URL('/assets/icons/categories/honey/honey_barrel.png', import.meta.url), name: 'Бочонок выдержанного мёда', desc: 'Большой бочонок редкого, выдержанного годами мёда. Настоящее сокровище.' },
    ]
  },
  wax: {
    name: 'Воск',
    color: '#fca311',
    generatorKey: 'beehive',
    items: [
      { level: 1, icon: new URL('/assets/icons/categories/wax/propolis.png', import.meta.url), name: 'Пчелиный клей (Прополис)', desc: 'Клейкое смолистое вещество, которое пчелы используют для дезинфекции улья.' },
      { level: 2, icon: new URL('/assets/icons/categories/wax/wax_piece.png', import.meta.url), name: 'Кусочек воска', desc: 'Небольшой комочек натурального пчелиного воска.' },
      { level: 3, icon: new URL('/assets/icons/categories/wax/wax_sheet.png', import.meta.url), name: 'Лист вощины', desc: 'Тонкий рифленый лист воска, основа для сот и свечей.' },
      { level: 4, icon: new URL('/assets/icons/categories/wax/wax_candle.png', import.meta.url), name: 'Свеча из вощины', desc: 'Скрученная вручную свеча с приятным медовым ароматом.' },
      { level: 5, icon: new URL('/assets/icons/categories/wax/shaped_candle.png', import.meta.url), name: 'Фигурная свеча', desc: 'Восковая свеча в форме цветка.' },
      { level: 6, icon: new URL('/assets/icons/categories/wax/sachet.png', import.meta.url), name: 'Флорентийское саше', desc: 'Ароматная восковая плитка с сухоцветами и эфирными маслами для ароматизации белья или небольших помещений.' },
      { level: 7, icon: new URL('/assets/icons/categories/wax/candle_set.png', import.meta.url), name: 'Набор свечей', desc: 'Коллекция декоративных свечей для уюта в доме.' },
    ]
  }
  /* Заготовка
  candies: {
    name: 'Выпечка',
    color: '#edca08',
    generatorKey: 'bakery',
    items: [
      { level: 1, icon: 'assets/icons/categories/dough/.png', name: '', desc: '' },
    ]
  }
  */
};