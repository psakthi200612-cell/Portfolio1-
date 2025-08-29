const music = document.getElementById('music');

const playButton = document.getElementById('play');

playButton.addEventListener('click', () => {

  if (music.paused) {

    music.play();

    playButton.textContent = 'Pause';

  } else {

    music.pause();

    playButton.textContent = 'Play';

  }

});