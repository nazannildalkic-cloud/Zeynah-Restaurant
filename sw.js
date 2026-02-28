// ZEYNAH Service Worker – Offline-Unterstützung
const CACHE_NAME = 'zeynah-v1';

const ASSETS_TO_CACHE = [
  'index.html',
  'demos.html',
  'zeynah.html',
  'styles.css',
  'script.js',
  'i18n.js',
  'manifest.json',
  'zeynahlogo.jpg.jpeg'
];

// Install: Cache kritische Dateien
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).catch(() => {}).then(() => self.skipWaiting())
  );
});

// Activate: Alte Caches entfernen
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: Cache-first, fallback auf Netzwerk
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  if (e.request.url.includes('vapi') || e.request.url.includes('api.') || e.request.url.includes('esm.sh')) {
    return; // API/ESM nicht cachen
  }
  e.respondWith(
    caches.match(e.request).then((cached) => {
      if (cached) return cached;
      return fetch(e.request).then((res) => {
        const clone = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
        return res;
      }).catch(() => {
        if (e.request.mode === 'navigate') {
          return caches.match('index.html');
        }
        return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
      });
    })
  );
});
