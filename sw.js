const CACHE_NAME = 'voxera-v6';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icone.png'
];

// Instala o Service Worker e guarda os ficheiros
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Serve os ficheiros do cache quando offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
