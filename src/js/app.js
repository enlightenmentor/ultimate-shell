var webComponentsSupported = ('registerElement' in document &&
  'import' in document.createElement('link') &&
  'content' in document.createElement('template'));

if (!webComponentsSupported) {
  var script = document.createElement('script');
  script.async = true;
  script.src = '../../bower_components/webcomponentsjs/webcomponents-loader.min.js';
  script.onload = finishLazyLoading;
  document.head.appendChild(script);
} else {
  finishLazyLoading();
}

function finishLazyLoading() {
  // (Optional) Use native Shadow DOM if it's available in the browser.
  window.Polymer = window.Polymer || { dom: 'shadow' };

  // 6. Fade splash screen, then remove.
  var onPolymerLoaded = function() {
    console.log("polymer");
    Polymer.importHref("src/app-shell.html",
      function onLoad(e) {
        console.log("shell");
        var loadEl = document.getElementById('splash');
        loadEl.addEventListener('transitionend', loadEl.remove);
        document.body.removeAttribute('class');
      }.bind(this),
      function onError(err) {
        throw new Error(err);
      }.bind(this), true);
  };

  var polymerImport = document.querySelector('#polymer');

  polymerImport.addEventListener('load', onPolymerLoaded);
}