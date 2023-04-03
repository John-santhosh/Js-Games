function randomNumber1() {
  return Math.floor(Math.random() * 6) + 1;
}

$("button").click(() => {
  let p1 = randomNumber1();
  let p2 = randomNumber1();

  $(".img1").addClass("rotate");
  $(".img2").addClass("rotate");

  setTimeout(() => {
    $(".img1").removeClass("rotate");
    $(".img2").removeClass("rotate");

    $(".img1").attr("src", `images/dice${p1}.png`);
    $(".img2").attr("src", `images/dice${p2}.png`);
    $("h1").text(
      p1 > p2 ? "player 1 wins 🚩" : p2 > p1 ? "player 2 wins 🚩" : "draw"
    );
  }, 1100);
});
