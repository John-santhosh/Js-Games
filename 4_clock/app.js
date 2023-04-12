const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

setInterval(() => {
  const now = new Date();
  const second = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();
  // console.log(second);
  secondHand.style.transform = `rotate(${(second / 60) * 360 + 90}deg)`;

  minuteHand.style.transform = `rotate(${(minute / 60) * 360 + 90}deg)`;

  hourHand.style.transform = `rotate(${(hour / 12) * 360 + 90}deg)`;
}, 1000);
