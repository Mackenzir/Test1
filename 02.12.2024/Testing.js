// Retro Tamagotchi Properties
let hunger = 0;
let happiness = 10;
let isAlive = true;

// DOM Elements
const hungerEl = document.getElementById('hunger');
const happinessEl = document.getElementById('happiness');
const tamagotchiEl = document.querySelector('.tamagotchi');
const feedBtn = document.getElementById('feedBtn');
const playBtn = document.getElementById('playBtn');

// Sounds
const feedSound = new Audio('https://freesound.org/data/previews/459/459143_8509671-lq.mp3');
const playSound = new Audio('https://freesound.org/data/previews/414/414209_5121236-lq.mp3');

// Update Stats
function updateStats() {
  hungerEl.textContent = hunger;
  happinessEl.textContent = happiness;

  if (hunger >= 10 || happiness <= 0) {
    tamagotchiEl.textContent = '☠️';
    isAlive = false;
    alert('GAME OVER: Your Tamagotchi has died!');
    clearInterval(gameLoop);
  }
}

// Actions
function feed() {
  if (isAlive && hunger > 0) {
    hunger--;
    feedSound.play();
    tamagotchiEl.textContent = '🍖';
    setTimeout(() => (tamagotchiEl.textContent = '🐾'), 1000);
    updateStats();
  }
}

function play() {
  if (isAlive) {
    happiness++;
    hunger++;
    playSound.play();
    tamagotchiEl.textContent = '🎾';
    setTimeout(() => (tamagotchiEl.textContent = '🐾'), 1000);
    updateStats();
  }
}

// Game Loop
const gameLoop = setInterval(() => {
  if (isAlive) {
    hunger++;
    happiness--;
    updateStats();
  }
}, 2000);

// Event Listeners
feedBtn.addEventListener('click', feed);
playBtn.addEventListener('click', play);

// Initialize Stats
updateStats();
