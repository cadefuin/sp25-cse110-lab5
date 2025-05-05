// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // ELEMENT REFERENCES

  const hornDropdown = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const playButton = document.querySelector('button');

  // EVENT LISTENERS

  // change horn dropdown menu
  hornDropdown.onchange = function() {
    // change image

    // change audio file
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


