const inputs = document.querySelectorAll("input");

inputs.forEach((item) => {
  item.addEventListener("input", handleInput);
});

function handleInput() {
  let sizing = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    `${this.value + sizing}`
  );
}
