// generate-asset-list.js
const fs = require('fs');
const path = require('path');

// Функция для рекурсивного обхода директории
function getFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getFiles(filePath, fileList);
    } else {
      // Преобразуем путь для веба (заменяем \ на /)
      fileList.push(filePath.replace(/\\/g, '/'));
    }
  });
  return fileList;
}

// --- НАСТРОЙКА ---
// Файлы в корне проекта
const rootFiles = [
  '/',
  'index.html',
  'style.css',
  'manifest.json',
  'assets/favicon.png',
  'assets/icon.png'
];

// Папки с ресурсами, которые нужно полностью закэшировать
const assetFolders = ['script', 'assets'];
// --- КОНЕЦ НАСТРОЙКИ ---

console.log('Генерация списка файлов для Service Worker...');

let allFiles = [...rootFiles];

assetFolders.forEach(folder => {
  if (fs.existsSync(folder)) {
    allFiles.push(...getFiles(folder));
  } else {
    console.warn(`[Внимание] Папка "${folder}" не найдена и будет пропущена.`);
  }
});

const uniqueFiles = [...new Set(allFiles)].sort();
const fileContent = `const URLS_TO_CACHE = ${JSON.stringify(uniqueFiles, null, 2)};`;
const outputPath =  'asset-list.js'
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, fileContent);
console.log(`✅ Список из ${uniqueFiles.length} файлов успешно создан: ${outputPath}`);