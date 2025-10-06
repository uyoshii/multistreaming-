const CACHE_NAME = 'agenda-escolar-cache-v1';
const urlsToCache = [
  '.',
    'index.html',
      'manifest.json',
        'icon.png',
          'https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js',
            'https://www.gstatic.com/firebasejs/9.22.0/firebase-database-compat.js'
            ];

            self.addEventListener('install', event => {
              event.waitUntil(
                  caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
                    );
                    });

                    self.addEventListener('fetch', event => {
                      event.respondWith(
                          caches.match(event.request).then(response => response || fetch(event.request))
                            );
                            });