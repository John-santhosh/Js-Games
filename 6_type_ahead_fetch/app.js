const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const input = document.querySelector("input");
const cities = [];
fetch(endpoint)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    cities.push(...res);
    input.addEventListener("input", (e) => {
      let value = e.target.value;
      let currentCities = findMatches(value, cities);
      currentCities.map((city) => console.log(city.city));
    });
  })
  .catch((err) => {
    console.log(err);
  });

function findMatches(wordToMatch, cities) {
  wordToMatch = wordToMatch.charAt(0).toUpperCase() + wordToMatch.slice(1);
  return cities.filter(
    (place) =>
      place.state.includes(wordToMatch) || place.city.includes(wordToMatch)
  );
}
