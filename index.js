document.addEventListener('DOMContentLoaded', ready);
function ready() {
  wifiDetect();
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
