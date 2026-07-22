import { initGame, startGameAndAudio } from './gameManager.js';
import {initSDK} from "./yandexSDK";

// 1. Инициализируем игру, как только загрузится структура страницы
document.addEventListener('DOMContentLoaded', () => {
  initSDK()
  initGame();
});


// 2. Ждем первого клика/касания от пользователя, чтобы запустить музыку и саму игру.
// Это необходимо для обхода ограничений автозапуска аудио в браузерах.
document.body.addEventListener('pointerdown', startGameAndAudio, { once: true });