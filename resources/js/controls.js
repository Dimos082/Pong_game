let aiSpeed = 0;
let aiSpeedRange = null;
let aiSpeedFrames = 0;

function updateWinScore() {
    let roundsInput = document.getElementById("rounds");
    winScore = roundsInput.value;
    console.log(roundsInput.value);
}

// Number of rounds to win listener
document.getElementById("rounds").addEventListener("keyup", updateWinScore);
document.getElementById("rounds").addEventListener("click", updateWinScore);

// Functions for ball speed full stop and resume
function pauseGame() {
    gamePaused = true;
    currentXspeed = ballSpeedX;
    currentYspeed = ballSpeedY;
    ballSpeedX = 0;
    ballSpeedY = 0;
}

function resumeGame() {
    gamePaused = false;
    ballSpeedX = currentXspeed;
    ballSpeedY = currentYspeed;
}

// Toggle for mute
function muteEverything() {
    hitSound1.muted ^= true;
    hitSound2.muted ^= true;
    sideHitSound.muted ^= true;
    offSideSound.muted ^= true;
    bellSound.muted ^= true;
    naniSound.muted ^= true;
    console.log('mute');
}
// Random number generator between min and max for AI speed variation
function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}
// Sets AI difficulty and speed variation
function setAIDifficulty(speed, label) {
    aiSpeedRange = Array.isArray(speed) ? speed : null;
    aiSpeed = Array.isArray(speed) ? randomBetween(speed[0], speed[1]) : speed;
    aiSpeedFrames = Array.isArray(speed) ? Math.floor(randomBetween(20, 60)) : 0;
    console.log(label);
    window.AI = function() {
        if (aiSpeedRange && --aiSpeedFrames <= 0) {
            aiSpeed = randomBetween(aiSpeedRange[0], aiSpeedRange[1]);
            aiSpeedFrames = Math.floor(randomBetween(20, 60));
            console.log("AI speed:", aiSpeed);
        }
        const paddle2XCenter = paddle2X + (paddleWidth / 2);
        if (paddle2XCenter < ballX - 35) paddle2X += aiSpeed;
        else if (paddle2XCenter > ballX + 35) paddle2X -= aiSpeed;
    };
}

function setTheme(color) {
    setBackgroundColor(color);
    document.getElementById("color").style.color = color;
}

//Difficulty selector
function changeDifficulty() {
    let z = document.getElementById("difficulty").value;
    switch (z) {
        case "super_easy":
            setAIDifficulty([2, 10], 'super easy');
            document.getElementById("image").src = "resources/img/Difficulty_0.png";
            break;
        case "easy":
            setAIDifficulty([8, 12], 'easy');
            document.getElementById("image").src = "resources/img/Difficulty_1.png";
            break;
        case "normal":
            setAIDifficulty([9, 15], 'normal');
            document.getElementById("image").src = "resources/img/Difficulty_2.png";
            break;
        case "hard":
            setAIDifficulty([10, 30], 'hard');
            document.getElementById("image").src = "resources/img/Difficulty_3.png";
            break;
        case "super_hard":
            setAIDifficulty([15, 40], 'super hard');
            document.getElementById("image").src = "resources/img/Difficulty_4.png";
            naniSound.play();
            break;
    }
    console.log(z);
}
//Color selector
function changeColor() {
    let c = document.getElementById("color").value;
    switch (c) {
        case "skyblue":
            setTheme('skyblue');
            break;
        case "black":
            setTheme('black');
            break;
        case "green":
            setTheme('green');
            break;
        case "red":
            setTheme('red');
            break;
        case "blue":
            setTheme('blue');
            break;
        case "orange":
            setTheme('orange');
            break;
    }
    console.log(c);
}