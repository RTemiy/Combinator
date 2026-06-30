// Этот код просто говорит браузеру, что SW активен
self.addEventListener('install', (event) => {
  // console.log('Service Worker установлен');
});

self.addEventListener('fetch', (event) => {
  // Тут можно добавить логику кэширования, но для "установки" хватит и пустого обработчика
});