const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const born_1500 = inventors.filter(
  (item) => item.year <= 1599 && item.year >= 1500
);
console.log(born_1500);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

const flNames = inventors.map((item) => {
  return [item.first, item.last].join(" ");
});

console.log(flNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const bro = inventors.sort((a, b) => {
  return a.year - b.year;
});

console.table(bro);

// Array.prototype.reduce()
// 4. How many years did all the inventors live

const lived = inventors.reduce((prev, curr) => {
  return curr.passed - curr.year + prev;
}, 0);

console.log(lived);

// 5. Sort the inventors by years lived

const winner = inventors.sort((item, b) => {
  return item.year - item.passed - (b.year - b.passed);
});

console.table(winner);

// people.

// 7. sort Exercise
// Sort the people alphabetically by last name
const peopleSort = people.sort((a, b) => {
  return a.split(" ")[1].localeCompare(b.split(" ")[1]);
});

console.table(peopleSort);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "plane",
  "truck",
  "truck",
  "bike",
  "plane",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const details = data.reduce((prev, curr) => {
  if (prev.hasOwnProperty(curr)) {
    prev[curr] += 1;
  } else {
    prev[curr] = 1;
  }
  return prev;
}, {});

console.log(details);
