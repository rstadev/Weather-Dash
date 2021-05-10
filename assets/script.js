let searchForm = document.getElementById("city-search");
let searchButton = document.getElementById("search-button");
// let currentWeather= document.querySelector("current-weather-info")
let cityName = document.getElementById("place");
let cityTemp = document.getElementById("temperature");
let cityHumid = document.getElementById("humidity");
let cityWind = document.getElementById("wind");
let cityUV = document.getElementById("uv-index");

let APIkey = "8b52d118218ada38037edf0b7f02292b";


function currentWeather(cityname) {
  $(searchButton).on("click", function () {
    // var person = $(this).attr("data-person");
    var queryURL = "api.openweathermap.org/data/2.5/weather?q=" +
      cityname + "&appid=" + APIkey;

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function (response) {
        var results = response.data;
        console.log(response);
        console.log(results);
      }
  )}
  );

}
