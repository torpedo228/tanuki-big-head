window.addEventListener("load", init, false);

window.addEventListener('mousedown', function (e) {
  const audio = document.querySelector(`audio[data-key="87"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  })
