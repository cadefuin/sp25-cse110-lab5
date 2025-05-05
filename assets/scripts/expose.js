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

  // EVENT LISTENERS

  // change horn dropdown menu
  hornDropdown.onchange = function() {
    let horn = hornDropdown.value;

    // set image and audio attributes
    hornImage.setAttribute('src', 'assets/images/' + horn + '.svg');
    audioElement.setAttribute('src', 'assets/audio/' + horn + '.mp3');
  }

  // change volume slider
  volumeSlider.onchange = function() {
    let volume; // get volume value

    // change based on volume level
    if (volume == 0) {

    }
    else if (volume < 33) {

    }
    else if (volume < 67) {

    }
    else {

    }
  }

  // click "Play Sound" button
  playButton.onclick = function() {
    let horn; // get horn value
    
    // play sound at specified volume

    // shoot confetti if party horn
    if (horn == 'party-horn') {

    }
  }
}


