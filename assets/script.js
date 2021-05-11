let searchForm = document.getElementById("city-search");
let searchButton = document.getElementById("search-button");
let currentWeatherInfo= document.getElementById("current-weather-info")
let cityName = document.getElementById("place");
let cityTemp = document.getElementById("temperature");
let cityHumid = document.getElementById("humidity");
let cityWind = document.getElementById("wind");
let cityUV = document.getElementById("uv-index");
let pastSearchesField = document.getElementById("past-search-field")

let APIkey = "8b52d118218ada38037edf0b7f02292b";


function currentWeather(name) {
  // $(searchButton).on("click", function () {
  //   // var person = $(this).attr("data-person");
  let city = name;
  // console.log(city)
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +
    name + "&units=imperial" + "&appid=" + APIkey;
  fetch(queryURL)
  .then((response) => {
    return response.json()
  })
  .then(result => {
    console.log(result);
    //adds to local storage
    saveInput(city);
    let icon = "https://openweathermap.org/img/w/" + result.weather[0].icon + ".png";
    renderPastSearches();

    let currentTimeUnix = result.dt;
    let timeOffset = result.timezone / 360;
    let currentTime = moment.unix(currentTimeUnix).utc().utcOffset(timeOffset);
    console.log(currentTime);

    let currentWeatherHtml = `
    <div>
    <div class="col" id="city-name">
      <span id="place" class="align-middle">${result.name} ${currentTime._d}
      </span>
      <img id="weather-icon" src="${icon}" alt="weather-icon">
    </div>
    <div class="col">
      <p id="temperature">Temperature: ${result.main.temp} F</p>
    </div>
    <div class="col">
      <p id="humidity">Humidity: ${result.main.humidity}%</p>
    </div>
    <div class="col">
      <p id="wind">Wind Speed: ${result.wind.speed} mph</p>
    </div>
  </div>`;

    $(currentWeatherInfo).html(currentWeatherHtml);
  })
  .catch(error => {
    console.log(error);
  });
};

// function captureSearch(event) {
//   event.preventDefault();

// };

function saveInput (city) {
  localStorage.setItem(localStorage.length, city);
};

function renderPastSearches () {
  $(pastSearchesField).empty();

  for (let i = 0; i < localStorage.length; i++) {
    let pastCity = localStorage.getItem(i);
    let cityButton = `<a href="#" class="list-group-item list-group-item-action">${pastCity}</a>`;
    $(pastSearchesField).prepend(cityButton);
  }
}


$(searchButton).on("click", function (event) {
  // var person = $(this).attr("data-person");
  event.preventDefault();
  let userSearch = searchForm.value.trim();
  console.log(userSearch);
  currentWeather(userSearch);
});

renderPastSearches();
