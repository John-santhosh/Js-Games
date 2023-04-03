const buttonColor = ["red", "blue", "green", "yellow"];
let userClickPattern = [];
let gamePattern = [];
let level = 0;
let randomNumber;
let isGameSTarted = false;

function checkAnswer(currentLevel) {
  if (userClickPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickPattern.length === gamePattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    makeSound("wrong");
    $("body").addClass("game-over");
    setTimeout(() => {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

//
function startOver() {
  level = 0;
  gamePattern = [];
  isGameSTarted = false;
}

// computer
function nextSequence() {
  userClickPattern = [];

  level++;
  $("h1").text(level);

  randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColor = buttonColor[randomNumber];
  gamePattern.push(randomChosenColor);
  // console.log(gamePattern);
  $(`#${randomChosenColor}`).fadeOut(200).fadeIn(200);
  var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.play();
}
$(".container").click((e) => {
  let userChosenColor;
  dataset = e.target.dataset.id;
  if (dataset) {
    userChosenColor = dataset;
    userClickPattern.push(userChosenColor);
    makeSound(dataset);
    animatePress(dataset);
    console.log(userClickPattern.length - 1);
    checkAnswer(userClickPattern.length - 1);
  }
});

// keyboard event

$(document).keyup((e) => {
  if (!isGameSTarted) {
    nextSequence();
    isGameSTarted = true;
    // level++;
    $("h1").text(`Level ${level}`);
  }
});
function animatePress(currentColor) {
  $(`#${currentColor}`).addClass("pressed");
  setTimeout(() => {
    $(`#${currentColor}`).removeClass("pressed");
  }, 200);
  // console.log(currentColor);
}

function makeSound(sound) {
  const soundObj = {
    blue: new Audio("sounds/blue.mp3"),
    green: new Audio("sounds/green.mp3"),
    red: new Audio("sounds/red.mp3"),
    yellow: new Audio("sounds/yellow.mp3"),
    wrong: new Audio("sounds/wrong.mp3"),
  };
  let audio = soundObj[sound];
  audio.play();
}
