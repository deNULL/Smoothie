(function(window) {

  window.addEventListener('message', function(event) {
    if (event.source != window)
      return;

    if (event.data.type && (event.data.type == 'VK_NOTES_UPDATE_LINKS')) {
      //updateLinks();
    }
  }, false);
})(window);