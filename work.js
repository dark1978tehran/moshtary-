self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('pickup-cache').then(cache => {
      return cache.addAll([
        'pickup-app.html',
        'manifest.json',
        'icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});