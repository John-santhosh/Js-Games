const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.toggle("open");
}
function toggleActive(e) {
  this.classList.toggle("open-active");
  // console.log(e.propertyName);
  // console.log(this);
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
console.log(panels);
