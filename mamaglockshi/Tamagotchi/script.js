let hunger = 100;
let happiness = 100;
let cleanliness = 100;
var audio = new Audio('./Assets/sound/JACG.mp3');
audio.play();


const states = {
    NORMAL: 'Assets/95c.png',
    ANGRY: 'Assets/95c-gun.png',
    DEADLY: 'Assets/95c-redeyes-gun.png',
    MUZZLEFLASH: 'Assets/95c-Muzzleflash.png',
    HUNGRY: 'Assets/95c-rolling.png',
    HAPPY: 'Assets/95c-rolling-smoking.png',
    CONTENT: 'Assets/95c-smokedup.png',
};

document.getElementById('justachillguy').src = states.NORMAL;

function updateMood() {
    const pet = document.getElementById('justachillguy');

    if (hunger < 3.5 || happiness < 3.5 || cleanliness < 3.5) {
        pet.src = states.MUZZLEFLASH;
        return;
    }
    
    if (hunger < 20 || happiness < 20 || cleanliness < 20) {
        pet.src = states.DEADLY;
        return;
    }
    
    if (hunger < 30 || happiness < 30 || cleanliness < 30) {
        pet.src = states.ANGRY;
        return;
    }
    
    if (hunger <= 50) {
        pet.src = states.HUNGRY;
        return;
    }
    
    if (hunger >= 80 && happiness >= 80 && cleanliness >= 80) {
        pet.src = states.HAPPY;
        return;
    }
    
    if (hunger >= 50 && happiness >= 50 && cleanliness >= 50) {
        pet.src = states.CONTENT;
        return;
    }
        if (hunger >= 50 && happiness >= 50 && cleanliness >= 50) {
        pet.src = states.CONTENT;
        return;
    }
    
    pet.src = states.NORMAL;
}

function updateStats() {
    document.getElementById('hunger-value').textContent = hunger + '%';
    document.getElementById('happiness-value').textContent = happiness + '%';
    document.getElementById('cleanliness-value').textContent = cleanliness + '%';
    
    document.getElementById('hunger-bar').style.width = hunger + '%';
    document.getElementById('happiness-bar').style.width = happiness + '%';
    document.getElementById('cleanliness-bar').style.width = cleanliness + '%';
    
    if (hunger <= 0 || happiness <= 0 || cleanliness <= 0) {
        alert('Boom! Du er død. Jeg flytter til en annen eier.');
        gameOver();
        return;
    }
    
    updateMood();
}

let gameInterval;
let isGameRunning = true;

function startGame() {
    hunger = 100;
    happiness = 100;
    cleanliness = 100;
    
    gameInterval = setInterval(() => {

        hunger -=2;
        happiness -=1.5;
        cleanliness -=1;
        
        updateStats();
        
        if (hunger <= 0 && happiness <= 0 && cleanliness <= 0) {
            gameOver();
        }
    }, 750); 
    
    isGameRunning = true;
}

function gameOver() {
    clearInterval(gameInterval);
    isGameRunning = false;
}

function feed() {
    if (!isGameRunning) return;
    hunger = Math.min(100, hunger + 25);
    cleanliness = Math.min(100, cleanliness - 1.25)
    updateStats();
}

function play() {
    if (!isGameRunning) return;
    happiness = Math.min(100, happiness + 25);
    hunger = Math.min(100, hunger - 1.75);
    updateStats();
}

function clean() {
    if (!isGameRunning) return;
    cleanliness = Math.min(100, cleanliness + 15);
    hunger = Math.min(100, hunger - 0.5);
    happiness = Math.min(100, happiness - 0.75)
    updateStats();
}

