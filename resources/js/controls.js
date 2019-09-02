// Recreates the initial position of the ball (for reset button)
// function ballReset() {
//     ballX = 50;
//     ballY = 50;
//     ballSpeedX = 4;
//     ballSpeedY = 10;
//     }

// Toggle for mute all sonds
function mute(){
    hitSound1.muted ^= true;
    hitSound2.muted ^= true;
    sideHitSound.muted ^= true;
    offSideSound.muted ^= true;
    bellSound.muted ^= true;
    winSounds = [
        new Audio("resources/sound/winsound1.mp3"),
        new Audio("resources/sound/winsound2.mp3"),
        new Audio("resources/sound/winsound3.mp3"),
        new Audio("resources/sound/winsound4.mp3"),
        new Audio("resources/sound/winsound5.mp3")
        ].muted ^= true;
    lostSounds = [
            new Audio("resources/sound/lostsound1.mp3"),
            new Audio("resources/sound/lostsound2.mp3"),
            new Audio("resources/sound/lostsound3.mp3"),
            new Audio("resources/sound/lostsound4.mp3")
            ].muted ^= true;
}

// Changing The Execution Context Of AI function
function AI_super_easy() {
    window.AI = function(){
        let paddle2XCenter = paddle2X + (paddleWidth / 2);
    if (paddle2XCenter < ballX - 35) {
         paddle2X += 1;
    } else if (paddle2XCenter > ballX + 35) {
         paddle2X -= 1;
    }
    console.log('super easy');
  }
}

function AI_easy() {
    window.AI = function(){
        let paddle2XCenter = paddle2X + (paddleWidth / 2);
    if (paddle2XCenter < ballX - 35) {
         paddle2X += 4;
    } else if (paddle2XCenter > ballX + 35) {
         paddle2X -= 4;
    }
    console.log('easy');
  }
}

function AI_normal() {
    window.AI = function(){
    let paddle2XCenter = paddle2X + (paddleWidth / 2);
    if (paddle2XCenter < ballX - 35) {
        paddle2X += 15;
    } else if (paddle2XCenter > ballX + 35) {
        paddle2X -= 15;
    }
    console.log('normal');
  }
}

function AI_hard() {
    window.AI = function(){
    let paddle2XCenter = paddle2X + (paddleWidth / 2);
    if (paddle2XCenter < ballX - 35) {
        paddle2X += 30;
    } else if (paddle2XCenter > ballX + 35) {
        paddle2X -= 30;
    }
    console.log('hard');
  }
}

function AI_super_hard() {
    window.AI = function(){
    let paddle2XCenter = paddle2X + (paddleWidth / 2);
    if (paddle2XCenter < ballX - 35) {
        paddle2X += 50;
    } else if (paddle2XCenter > ballX + 35) {
        paddle2X -= 50;
    }
    console.log('super hard');
  }
}

//Difficulty selector
function changeDifficulty() {
    let z = document.getElementById("difficulty").value; 
switch
(z) { 
case
 "super_easy":
 AI_super_easy()
 document.getElementById("image").src = "resources/img/Difficulty_0.png";
    break;
case
 "easy":
 AI_easy()
 document.getElementById("image").src = "resources/img/Difficulty_1.png";
    break;
case
 "normal":
 AI_normal()
 document.getElementById("image").src = "resources/img/Difficulty_2.png";
    break;  
case
 "hard":
 AI_hard()
 document.getElementById("image").src = "resources/img/Difficulty_3.png";
    break; 
case
 "super_hard":
 AI_super_hard()
 document.getElementById("image").src = "resources/img/Difficulty_4.png";
    break; 
}
console.log(z);
  }

