const mainCacheName = 'ULTIMATE-SHELL-CACHE';

const filesToCache = [
  '.',
  'index.html',
  'manifest.json',
  'favicon.ico',
  'images/anonymous.png',
  'images/icons/icon-48x48.png',
  'images/icons/icon-72x72.png',
  'images/icons/icon-96x96.png',
  'images/icons/icon-144x144.png',
  'images/icons/icon-192x192.png',
  'images/icons/icon-512x512.png',
  'src/pages/page-home.html',
  'src/pages/page-one.html',
  'src/pages/page-two.html',
  'src/pages/page-settings.html',
  'src/pages/page-404.html',
  'src/css/app-theme.html',
  'src/css/css-reset.html',
  'src/css/default-theme.html',
  'src/css/paper-colors.html',
  'src/css/paper-shadows.html',
  'src/css/app-typography.html',
  'src/js/tools.js',
  'src/app-content.html',
  'src/app-data.html',
  'src/app-dialog.html',
  'src/app-drawer.html',
  'src/app-router.html',
  'src/app-search.html',
  'src/app-shell.html',
  'src/app-snackbar.html',
  'src/app-state.html',
  'src/app-toolbar.html',
  'src/fire-auth.html',
  'src/fire-data.html',
  'src/idb-data.html'
];

const cacheFiles = async (cacheName, files) => {
  const cache = await caches.open(cacheName);
  return cache.addAll(files);
};

const deleteOldCaches = async (cacheWhitelist) => {
  const cacheNames = await caches.keys();
  return cacheNames
    .filter(cacheName => cacheWhitelist.indexOf(cacheName) === -1)
    .map(cacheName => caches.delete(cacheName));
};

const fetchResponse = async (cacheName, request) => {
  const cache = await caches.open(cacheName);
  let response = await cache.match(request);
  if (!response) {
    response = await fetch(request);
    if (request.method == 'GET')
      cache.put(request, response.clone());
  }
  return response;
}

self.addEventListener('install', event => {
  event.waitUntil(
    cacheFiles(mainCacheName, filesToCache)
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    deleteOldCaches([mainCacheName])
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetchResponse(mainCacheName, event.request)
  )
})