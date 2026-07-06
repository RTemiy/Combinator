(async function() {
  const FONT_URL = './NotoColorEmoji.ttf'; // <-- Укажите правильный путь к вашему файлу шрифта
  const FONT_FAMILY_NAME = 'NotoColorEmoji'; // <-- Укажите имя семейства шрифтов, как в CSS
  const CACHE_NAME = 'font-cache-v1';

  /**
   * Инъекция CSS-правила @font-face в <head> документа.
   * @param {string} fontUrl - URL шрифта (может быть blob URL).
   */
  function injectFontFaceStyle(fontUrl) {
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: '${FONT_FAMILY_NAME}';
        src: url(${fontUrl});
        font-display: swap;
      }
    `;
    document.head.appendChild(style);
  }

  try {
    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(FONT_URL);

    if (cachedResponse) {
      const fontBlob = await cachedResponse.blob();
      const fontUrl = URL.createObjectURL(fontBlob);
      injectFontFaceStyle(fontUrl);
    } else {
      const fetchResponse = await fetch(FONT_URL);

      if (fetchResponse.ok) {
        await cache.put(FONT_URL, fetchResponse.clone());
        const fontBlob = await fetchResponse.blob();
        const fontUrl = URL.createObjectURL(fontBlob);
        injectFontFaceStyle(fontUrl);
      } else {
        console.error('Не удалось загрузить шрифт:', fetchResponse.statusText);
      }
    }
  } catch (error) {
    console.error('Ошибка при работе с кэшем шрифтов:', error);
  }
})();