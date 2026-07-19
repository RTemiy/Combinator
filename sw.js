import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute, NavigationRoute } from 'workbox-routing';
import { NetworkFirst } from 'workbox-strategies';
import { clientsClaim } from 'workbox-core';

// Эта команда заставляет SW немедленно брать под контроль страницу после активации.
clientsClaim();

// 1. Предварительное кэширование всех статических ассетов (JS, CSS, картинки и т.д.).
// self.__WB_MANIFEST — это массив файлов, который Parcel автоматически подставит сюда при сборке.
precacheAndRoute(self.__WB_MANIFEST || []);

// 2. Настройка кэширования для HTML-страницы (навигационных запросов).
// Мы используем стратегию NetworkFirst:
// - Сначала пытаемся загрузить страницу из сети.
// - Если сеть недоступна, отдаем последнюю сохраненную версию из кэша.
const navigationStrategy = new NetworkFirst({
  cacheName: 'pages', // Кэш для хранения HTML-страниц
  plugins: [
    // Сюда можно добавить плагины, например, для кэширования только успешных ответов (статус 200)
  ],
});

// Создаем маршрут, который будет применять эту стратегию ко всем навигационным запросам.
const navigationRoute = new NavigationRoute(navigationStrategy, {
  // denylist по-прежнему полезен, чтобы этот маршрут не срабатывал для прямых запросов к файлам (например, style.css)
  denylist: [new RegExp('/[^/?]+\\.[^/]+$')],
});

// Регистрируем маршрут в Workbox.
registerRoute(navigationRoute);

// 3. Логика для обновления Service Worker по команде от пользователя.
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});