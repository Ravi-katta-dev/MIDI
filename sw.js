const CACHE_NAME = 'midiano-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/css/bootstrap.min.css',
  '/css/Interface.css',
  '/css/Inputs.css',
  '/css/Settings.css',
  '/css/nano.min.css',
  '/css/bootstrap-theme.min.css',
  '/lib/Pickr/pickr.es5.min.js',
  '/lib/Base64.js',
  '/lib/Base64binary.js',
  '/js/main.js',
  '/mz_331_3.mid',
  '/images/logo.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }

        // Clone the request as it can only be consumed once
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          response => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response as it can only be consumed once
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
