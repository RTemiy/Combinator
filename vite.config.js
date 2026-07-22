import { defineConfig } from 'vite';

export default defineConfig({
  // Устанавливаем базовый путь для корректной работы на Яндекс Играх.
  // Это заставит Vite генерировать относительные пути к ассетам (например, ./assets/image.png).
  base: './',
  plugins: [],
  build: {
    outDir: 'dist',
    // Отключаем генерацию source map для продакшен-сборки
    sourcemap: false,
    // Очищаем папку dist перед каждой сборкой
    emptyOutDir: true,
  }
});