document.addEventListener('DOMContentLoaded', ready);
function ready() {
  allImagesLoaded();
  // wifiDetect();
}


function allImagesLoaded() {
      var imagesLoaded = 0;
  var totalImages = $('img').length;

  $('img').each(function(idx, img) {
    $('<img>').on('load', imageLoaded).attr('src', $(img).attr('src'));
  });

  function imageLoaded() {
    imagesLoaded++;
    if (imagesLoaded == totalImages) {
      $('#wait').hide();
      $('#go').toggle();
    }
  }

  }

function wifiDetect() {
  let content = document.getElementById('wrapper');
  let message = document.getElementById('intro');
  handleStateChange();

  function handleStateChange() {
    if (navigator.onLine) {
      content.classList.add('invisible');
      message.classList.remove('invisible');
    } else {
      content.classList.remove('invisible');
      message.classList.add('invisible');
    }
  }

  window.addEventListener('online', handleStateChange);
  window.addEventListener('offline', handleStateChange);
}
