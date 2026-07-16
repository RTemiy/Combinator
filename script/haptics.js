// script/haptics.js
import { gameSettings } from './state.js';

/**
 * Проверяет, поддерживается ли вибрация и включена ли она в настройках.
 * @returns {boolean}
 */
function canVibrate() {
  return gameSettings.hapticsEnabled && 'vibrate' in navigator;
}

/**
 * Легкий виброотклик, для кликов и простых действий.
 */
export function hapticLight() {
  if (!canVibrate()) return;
  navigator.vibrate(10);
}

/**
 * Средний виброотклик, для значимых действий (использование генератора).
 */
export function hapticMedium() {
  if (!canVibrate()) return;
  navigator.vibrate(12);
}

/**
 * Сильный виброотклик, для успешных действий (слияние, получение награды).
 */
export function hapticSuccess() {
  if (!canVibrate()) return;
  navigator.vibrate([10, 4, 10]); // Двойная короткая вибрация
}

/**
 * Виброотклик для ошибки или неверного действия.
 */
export function hapticError() {
  if (!canVibrate()) return;
  navigator.vibrate([50, 30, 50]); // "Дребезжание"
}