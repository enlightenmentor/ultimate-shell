const mainCacheName = 'ULTIMATE-SHELL-CACHE';

const filesToCache = [
  '.',
  'index.html',
  'manifest.json',
  'favicon.ico',
  'images/icons/icon-48x48.png',
  'images/icons/icon-72x72.png',
  'images/icons/icon-96x96.png',
  'images/icons/icon-144x144.png',
  'images/icons/icon-192x192.png',
  'images/icons/icon-512x512.png',
  'src/app-content.html',
  'src/app-data.html',
  'src/app-drawer.html',
  'src/app-router.html',
  'src/app-search.html',
  'src/app-shell.html',
  'src/app-snackbar.html',
  'src/app-state.html',
  'src/app-toolbar.html',
  'src/fire-auth.html',
  'src/fire-data.html',
  'src/idb-data.html',
  'src/storage-data.html',
  'src/js/tools.js',
  'src/css/app-theme.html',
  'src/css/css-reset.html',
  'src/css/paper-shadows.html',
  'src/css/paper-typography.html',
  'src/pages/page-home.html',
  'src/pages/page-one.html',
  'src/pages/page-two.html',
  'src/pages/page-settings.html',
  'src/pages/page-404.html',
  'images/anonymous.png',
  'images/covers/cream-disraeli-gears.jpg',
  'images/covers/jeff-beck-truth.jpg',
  'images/covers/led-zeppelin-ii.jpg',
  'images/covers/the-band-music-from-big-pink.jpg',
  'images/covers/the-beatles-abbey-road.jpg',
  'images/covers/the-beatles-revolver.jpg',
  'images/covers/the-doors-the-doors.jpg',
  'images/covers/the-jimi-hendrix-experience-are-you-experienced.jpg',
  'images/covers/the-jimi-hendrix-experience-electric-ladyland.jpg',
  'images/covers/the-small-faces-ogden-s-gone-nut-flake.jpg',
  'bower_components/font-roboto/roboto.html',
  'bower_components/idb-promised/lib/idb.js',
  'bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html',
  'bower_components/iron-behaviors/iron-button-state.html',
  'bower_components/iron-behaviors/iron-control-state.html',
  'bower_components/iron-flex-layout/iron-flex-layout.html',
  'bower_components/iron-icon/iron-icon.html',
  'bower_components/iron-icons/iron-icons.html',
  'bower_components/iron-icons/social-icons.html',
  'bower_components/iron-iconset-svg/iron-iconset-svg.html',
  'bower_components/iron-image/iron-image.html',
  'bower_components/iron-location/iron-location.html',
  'bower_components/iron-media-query/iron-media-query.html',
  'bower_components/iron-meta/iron-meta.html',
  'bower_components/iron-pages/iron-pages.html',
  'bower_components/iron-resizable-behavior/iron-resizable-behavior.html',
  'bower_components/iron-selector/iron-multi-selectable.html',
  'bower_components/iron-selector/iron-selectable.html',
  'bower_components/iron-selector/iron-selection.html',
  'bower_components/iron-selector/iron-selector.html',
  'bower_components/lazy-imports/lazy-imports-import.html',
  'bower_components/lazy-imports/lazy-imports-mixin.html',
  'bower_components/paper-behaviors/paper-inky-focus-behavior.html',
  'bower_components/paper-behaviors/paper-ripple-behavior.html',
  'bower_components/paper-icon-button/paper-icon-button.html',
  'bower_components/paper-item/paper-icon-item.html',
  'bower_components/paper-item/paper-item-behavior.html',
  'bower_components/paper-item/paper-item-shared-styles.html',
  'bower_components/paper-ripple/paper-ripple.html',
  'bower_components/paper-styles/color.html',
  'bower_components/paper-styles/default-theme.html',
  'bower_components/paper-styles/typography.html',
  'bower_components/polymer/lib/elements/array-selector.html',
  'bower_components/polymer/lib/elements/custom-style.html',
  'bower_components/polymer/lib/elements/dom-bind.html',
  'bower_components/polymer/lib/elements/dom-if.html',
  'bower_components/polymer/lib/elements/dom-module.html',
  'bower_components/polymer/lib/elements/dom-repeat.html',
  'bower_components/polymer/lib/legacy/class.html',
  'bower_components/polymer/lib/legacy/legacy-element-mixin.html',
  'bower_components/polymer/lib/legacy/mutable-data-behavior.html',
  'bower_components/polymer/lib/legacy/polymer-fn.html',
  'bower_components/polymer/lib/legacy/polymer.dom.html',
  'bower_components/polymer/lib/legacy/templatizer-behavior.html',
  'bower_components/polymer/lib/mixins/element-mixin.html',
  'bower_components/polymer/lib/mixins/gesture-event-listeners.html',
  'bower_components/polymer/lib/mixins/mutable-data.html',
  'bower_components/polymer/lib/mixins/property-accessors.html',
  'bower_components/polymer/lib/mixins/property-effects.html',
  'bower_components/polymer/lib/mixins/template-stamp.html',
  'bower_components/polymer/lib/utils/array-splice.html',
  'bower_components/polymer/lib/utils/async.html',
  'bower_components/polymer/lib/utils/boot.html',
  'bower_components/polymer/lib/utils/case-map.html',
  'bower_components/polymer/lib/utils/debounce.html',
  'bower_components/polymer/lib/utils/flattened-nodes-observer.html',
  'bower_components/polymer/lib/utils/flush.html',
  'bower_components/polymer/lib/utils/gestures.html',
  'bower_components/polymer/lib/utils/import-href.html',
  'bower_components/polymer/lib/utils/mixin.html',
  'bower_components/polymer/lib/utils/path.html',
  'bower_components/polymer/lib/utils/render-status.html',
  'bower_components/polymer/lib/utils/resolve-url.html',
  'bower_components/polymer/lib/utils/style-gather.html',
  'bower_components/polymer/lib/utils/templatize.html',
  'bower_components/polymer/lib/utils/unresolved.html',
  'bower_components/polymer/polymer-element.html',
  'bower_components/polymer/polymer.html',
  'bower_components/shadycss/apply-shim.html',
  'bower_components/shadycss/apply-shim.min.js',
  'bower_components/shadycss/custom-style-interface.html',
  'bower_components/shadycss/custom-style-interface.min.js',
  'bower_components/webcomponentsjs/webcomponents-loader.js'
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
  // if (request.url.startsWith('http://localhost:5000/'))
  //   sw.push(request.url.replace('http://localhost:5000/', ''));
  const cache = await caches.open(cacheName);
  let response = await cache.match(request);
  if (!response) {
    response = await fetch(request);
    if (request.method === 'GET')
      cache.put(request, response.clone());
  }
  return response;
};

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
});