// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // ELEMENT REFERENCES

  const hornImage = document.querySelector('img:has(+ :is(select))');
  const hornDropdown = document.getElementById('horn-select');

  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('input + img');

  const playButton = document.querySelector('button');
  const audioElement = document.querySelector('audio');

  const jsConfetti = new JSConfetti();

  // EVENT LISTENERS

  // change horn dropdown menu
  hornDropdown.onchange = function() {
    let horn = hornDropdown.value;

    // set image and audio attributes
    hornImage.src = 'assets/images/' + horn + '.svg';
    audioElement.src = 'assets/audio/' + horn + '.mp3';
  }

  // change volume slider
  volumeSlider.oninput = function() {
    let volume = volumeSlider.value;
    let level;

    // determine volume level
    if (volume == 0) {
      level = 0;
    }
    else if (volume < 33) {
      level = 1;
    }
    else if (volume < 67) {
      level = 2;
    }
    else {
      level = 3;
    }

    // set icon and audio attributes
    volumeIcon.src = 'assets/icons/volume-level-' + level + '.svg';
    audioElement.volume = volume / 100.00;
  }

  // click "Play Sound" button
  playButton.onclick = function() {
    let horn = hornDropdown.value;
    
    // play sound at specified volume
    audioElement.currentTime = 0;
    audioElement.play();

    // shoot confetti if party horn
    if (horn == 'party-horn') {
      jsConfetti.addConfetti();
    }
  }
}


