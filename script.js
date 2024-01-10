//Get buttons
let clap = document.getElementById("clap");
let hihat = document.getElementById("hihat");
let kick = document.getElementById("kick");
let openhat = document.getElementById("openhat");
let boom = document.getElementById("boom");
let ride = document.getElementById("ride");
let snare = document.getElementById("snare");
let tom = document.getElementById("tom");
let tink = document.getElementById("tink");

//Get audio element
let clapSound = document.getElementById("clapSound");
let hatSound = document.getElementById("hatSound");
let kickSound = document.getElementById("kickSound");
let openSound = document.getElementById("openSound");
let boomSound = document.getElementById("boomSound");
let rideSound = document.getElementById("rideSound");
let snareSound = document.getElementById("snareSound");
let tomSound = document.getElementById("tomSound");
let tinkSound = document.getElementById("tinkSound");

// add event listener to buttons
clap.addEventListener("click", playClap);
hihat.addEventListener("click", playHiHat);
kick.addEventListener("click", playKick);
openhat.addEventListener("click", playOpen);
boom.addEventListener("click", playBoom);
ride.addEventListener("click", playRide);
snare.addEventListener("click", playSnare);
tom.addEventListener("click", playTom);
tink.addEventListener("click", playTink);


function playClap() {
  clapSound.play();
}

function playHiHat() {
  hatSound.play();
}

function playKick() {
  kickSound.play();
}

function playOpen() {
  openSound.play();
}

function playBoom() {
  boomSound.play();
}

function playRide() {
  rideSound.play();
}

function playSnare() {
  snareSound.play();
}

function playTom() {
  tomSound.play();
}

function playTink() {
  tinkSound.play();
}
