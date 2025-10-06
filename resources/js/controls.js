// Recreates the initial position of the ball (for reset button)
// function ballReset() {
//     ballX = 50;
//     ballY = 50;
//     ballSpeedX = 4;
//     ballSpeedY = 10;
// }

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

function setAIDifficulty(speed, label) {
    window.AI = function(){
        let paddle2XCenter = paddle2X + (paddleWidth / 2);
        if (paddle2XCenter < ballX - 35) {
            paddle2X += speed;
        } else if (paddle2XCenter > ballX + 35) {
            paddle2X -= speed;
        }
    };
    console.log(label);
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
            setAIDifficulty(1, 'super easy');
            document.getElementById("image").src = "resources/img/Difficulty_0.png";
            break;
        case "easy":
            setAIDifficulty(4, 'easy');
            document.getElementById("image").src = "resources/img/Difficulty_1.png";
            break;
        case "normal":
            setAIDifficulty(15, 'normal');
            document.getElementById("image").src = "resources/img/Difficulty_2.png";
            break;
        case "hard":
            setAIDifficulty(30, 'hard');
            document.getElementById("image").src = "resources/img/Difficulty_3.png";
            break;
        case "super_hard":
            setAIDifficulty(50, 'super hard');
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
