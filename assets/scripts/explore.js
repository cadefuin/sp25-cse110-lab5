// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // ELEMENT REFERENCES

  const smileyImage = document.querySelector('img');
  const textInput = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');


  // populate "Select Voice" dropdown
  const synth = window.speechSynthesis;
  let voices;

  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);

      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }


  // EVENT LISTENERS

  function stopSpeaking() {
    smileyImage.src = 'assets/images/smiling.png';
  }


  // click "Press to Talk" button
  talkButton.onclick = function() {
    synth.cancel();
    
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");
    
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterance.voice = voices[i];
      }
    }
    
    smileyImage.src = 'assets/images/smiling-open.png';
    synth.speak(utterance);
    
    utterance.onend = function() {
      smileyImage.src = 'assets/images/smiling.png';
    };
  };
}