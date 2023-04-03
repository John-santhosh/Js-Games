function handleClick() {
  let sound = this.innerHTML;
  let a = makeSound(sound);
  a.play();
  buttonAnimation(sound);
}

let drumCount = document.querySelectorAll(".drum");

for (let i = 0; i < drumCount.length; i++) {
  drumCount[i].addEventListener("click", handleClick);
}

let audio = new Audio("sounds/crash.mp3");

//  this function(event) is called by us but its is called by the object that experienced the "KEY" press
document.addEventListener("keydown", function (event) {
  let a = event.key; //listen for which key is pressed in kbd and store it in the var a
  let b = makeSound(a);
  b?.play();
  buttonAnimation(a);
});

function makeSound(ret) {
  let obj = {
    w: new Audio("sounds/crash.mp3"),
    a: new Audio("sounds/kick-bass.mp3"),
    s: new Audio("sounds/snare.mp3"),
    d: new Audio("sounds/tom-1.mp3"),
    j: new Audio("sounds/tom-2.mp3"),
    k: new Audio("sounds/tom-3.mp3"),
    l: new Audio("sounds/tom-4.mp3"),
  };
  return obj?.[ret]; // optional chaining
}

function buttonAnimation(btn) {
  let a = document.querySelector(`.${btn}`);
  a?.classList.add("pressed");

  // setTimeout() The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
  setTimeout(function () {
    a?.classList.remove("pressed");
  }, 150);
}
