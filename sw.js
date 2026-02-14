const CACHE_NAME = 'vocab-app-v1';
const ASSETS = [
  './',
  './index.html',
  './dexie.js',
  './manifest.json'
];

// 1. Cài đặt Service Worker
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// 2. Lấy dữ liệu từ Cache khi không có mạng
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});