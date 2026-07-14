export const STORY_DATA = {
  'gardener_arc': {
    id: 'gardener_arc',
    title: "Ветвь Садоводства",
    description: "Помогите местному садовнику вырастить редкое дерево и откройте для себя новую категорию предметов.",
    icon: 'assets/icons/characters/gardener.png',
    chapters: {
      1: {
        title: "Предложение садовника",
        steps: [
          { type: 'dialogue', character: 'assets/icons/characters/gardener.png', name: 'Садовник', text: 'Приветствую, коллега! Я вижу, у тебя тут своя лавочка. А я вот знаю способ, как можно расширить твой... ассортимент. И заработок, само собой.' },
          { type: 'dialogue', character: 'assets/icons/characters/gardener.png', name: 'Садовник', text: 'У меня есть семена одного очень редкого дерева. Оно не просто красивое, но и плодоносит! Правда, чтобы его вырастить до нужного состояния, нужны особые условия и, скажем так, первоначальные инвестиции.' },
          {
            type: 'task',
            character: 'assets/icons/characters/gardener.png',
            name: 'Садовник',
            text: 'Если вложишь 500 монет в наше общее дело, я подготовлю для тебя саженец, который быстро вырастет в могучее дерево. С него и начнется твой новый бизнес!',
            task: { type: 'spend_coins', amount: 500, buttonText: 'Вложиться в саженец' },
            reward: { type: 'item', category: 'flowers', level: 7 }
          },
          { type: 'dialogue', character: 'assets/icons/characters/gardener.png', name: 'Садовник', text: 'Отличный выбор! Вот, держи. Это не просто дерево, а настоящий генератор ягод! Ухаживай за ним, и оно принесет тебе немало выгоды. Удачи в новом начинании!' },
        ]
      }
    }
  },
  'alchemist_arc': {
    id: 'alchemist_arc',
    title: "Путь Алхимика",
    description: "Загадочный незнакомец предлагает вам приобщиться к древнему искусству. Готовы ли вы рискнуть?",
    icon: 'assets/icons/characters/magician.png',
    chapters: {
      1: {
        title: "Предложение Алхимика",
        steps: [
          { type: 'dialogue', character: 'assets/icons/characters/magician.png', name: 'Таинственный Алхимик', text: 'Я вижу в тебе потенциал, юный комбинатор. Твои таланты могут служить не только мирским делам, но и великому искусству... Алхимии.' },
          { type: 'dialogue', character: 'assets/icons/characters/magician.png', name: 'Таинственный Алхимик', text: 'Я готов поделиться с тобой секретами своего ремесла и предоставить необходимое оборудование. Но знания и редкие компоненты стоят дорого. Это будет стоить тебе...' },
          /*{
            type: 'task',
            character: 'assets/icons/characters/special_01.png',
            name: 'Таинственный Алхимик',
            text: 'Если ты готов встать на путь трансформации, вложись в это предприятие. Ты получишь доступ к моей лаборатории и сможешь создавать невиданные доселе предметы.',
            task: { type: 'spend_coins', amount: 1500, buttonText: 'Купить лабораторию' },
            reward: { type: 'generator', key: 'alchemy_lab', level: 1 }
          },
          { type: 'dialogue', character: 'assets/icons/characters/special_01.png', name: 'Таинственный Алхимик', text: 'Мудрое решение! Вот ключ от лаборатории. Помни, алхимия не терпит спешки. Изучай, сочетай и, возможно, однажды ты создашь Философский камень! Теперь категория "Алхимия" доступна для заказов.' },*/
        ]
      }
    }
  },
  'neighbor_arc': {
    id: 'neighbor_arc',
    title: "Соседские сплетни",
    description: "Познакомьтесь с вашей новой соседкой. Кто знает, к чему приведёт это знакомство?",
    icon: 'assets/icons/characters/neighbor.png',
    chapters: {
      1: {
        title: "Приглашение на ужин",
        steps: [
          { type: 'dialogue', character: 'assets/icons/characters/neighbor.png', name: 'Соседка', text: 'Ой, здравствуйте! А я вас и не заметила. Вы, должно быть, новый владелец этой чудесной лавочки? Я ваша соседка, живу прямо за углом. Так приятно познакомиться!' },
          { type: 'dialogue', character: 'assets/icons/characters/neighbor.png', name: 'Соседка', text: 'Слушайте, а раз уж мы теперь соседи, может, как-нибудь поужинаем вместе? Я бы с удовольствием рассказала вам все местные сплетни... то есть, новости! Я могу принести что-нибудь к чаю, а вы организуете основное блюдо?' },
          {
            type: 'task',
            character: 'assets/icons/characters/neighbor.png',
            name: 'Соседка',
            text: 'Правда? Замечательно! Чтобы произвести впечатление, нужно как следует подготовиться. Думаю, 750 монет хватит на закупку лучших продуктов для нашего ужина.',
            task: { type: 'spend_coins', amount: 750, buttonText: 'Подготовиться к ужину' },
            reward: { type: 'generator', key: 'bonus_chest', level: 1 }
          },
          { type: 'dialogue', character: 'assets/icons/characters/neighbor.png', name: 'Соседка', text: 'Договорились! Я так рада! Не волнуйтесь, с пустыми руками я не приду. Захвачу для вас небольшой, но очень полезный подарочек в знак нашей дружбы. До вечера!' },
        ]
      }
    }
  },
};