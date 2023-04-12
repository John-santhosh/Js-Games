// setInterval(() => {
//   // console.log("john");
// }, 1000);

// console.log(date);

// console.log(current);

// const milliseconds = ;
// const hours = ;

function date1() {
  let date = new Date();
  let futureDate = new Date(2023, 3, 10, 11, 00, 00);
  let current = futureDate - date;
  const days = Math.floor(current / (1000 * 60 * 60 * 24));
  const hours = Math.floor((current / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((current / (1000 * 60)) % 24);
  const second = Math.floor((current / 1000) % 60);
  console.log(days, hours, minutes, second);
}
setInterval(date1, 1000);
// console.log(current / 1000 / 60 / 60 / 24);
// console.log(days, hours, minutes, second);

// console.log((current / hours) % 24);

// console.log("hours :" + hoursLeft);

// console.log(minutes);

// console.log(second);
