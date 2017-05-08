module.exports = {
  staticFileGlobs: [
    '/index.html',
    '/manifest.json',
    '/bower_components/webcomponentsjs/webcomponents-loader.js'
  ],
  cacheId: "shell-cache",
  navigateFallback: '/index.html',
  runtimeCaching: [{
    urlPattern: /^https:\/\/www.gstatic\.com\/firebasejs/,
    handler: 'cacheFirst',
    options: {
      cache: {
        name: 'firebase-cache'
      }
    }
  },{
    urlPattern: /\/images/,
    handler: 'fastest',
    options: {
      cache: {
        name: 'data-cache'
      }
    }
  }]
};