function playAudio(file) {
      let audio = new Audio("sounds/" + file); 
      audio.play();
}

function animateButton(button) {
  button.classList.add("pressed");
    setTimeout(function() {
      button.classList.remove("pressed");
    }, 100);
}

let sounds = ["crash.mp3", "kick-bass.mp3", "snare.mp3", "tom-1.mp3", "tom-2.mp3", "tom-3.mp3", "tom-4.mp3"]
let buttons = document.getElementsByClassName("drum");
let keyToSound = {
  "w": sounds[0],
  "a": sounds[1],
  "s": sounds[2],
  "d": sounds[3],
  "j": sounds[4],
  "k": sounds[5],
  "l": sounds[6]
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    playAudio(sounds[i]);
    animateButton(this);
  });
}

document.addEventListener("keydown", function(event) {
  if (keyToSound[event.key]) {
    playAudio(keyToSound[event.key]);
    let button = document.getElementsByClassName(event.key);
    animateButton(button[0]);
  }
});