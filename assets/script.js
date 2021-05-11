let searchForm = document.getElementById("city-search");
let searchButton = document.getElementById("search-button");
// let currentWeather= document.querySelector("current-weather-info")
let cityName = document.getElementById("place");
let cityTemp = document.getElementById("temperature");
let cityHumid = document.getElementById("humidity");
let cityWind = document.getElementById("wind");
let cityUV = document.getElementById("uv-index");

let APIkey = "8b52d118218ada38037edf0b7f02292b";


function currentWeather(name) {
  // $(searchButton).on("click", function () {
  //   // var person = $(this).attr("data-person");
  let city = name;
  // console.log(city)
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +
    name + "&appid=" + APIkey;
  fetch(queryURL)
  .then((response) => {
    return response.json()
  })
  .then(result => {
    console.log(result);
    //adds to local storage
    saveInput(city);
    
  })
  .catch(error => {
    console.log(error);
  });
};

// function captureSearch(event) {
//   event.preventDefault();

// };

function saveInput (city) {
  localStorage.setItem(localStorage.length, city)
};


$(searchButton).on("click", function (event) {
  // var person = $(this).attr("data-person");
  event.preventDefault();
  let userSearch = searchForm.value.trim();
  console.log(userSearch);
  currentWeather(userSearch);
});
