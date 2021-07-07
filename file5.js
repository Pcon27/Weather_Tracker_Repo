var apiKey = "2fe2a660ccee4f29bd7d0d10e5775d14"
var cityName = $("#city")
var currentWeather = $(".currentWeather")
var forcast1 = $("#forcast1")
var forcast2 = $("#forcast2")
var forcast3 = $("#forcast3")
var forcast4 = $("#forcast4")
var forcast5 = $("#forcast5")
var weatherIcon = $("#weatherIcon") 
var todaysDate = moment();
var day1Date = moment().add(1, 'days')
var day2Date = moment().add(2, 'days')
var day3Date = moment().add(3, 'days')
var day4Date = moment().add(4, 'days')
var day5Date = moment().add(5, 'days')
var searchHistory = $("#searchHistory")

// start function on the click of the seach function of HTML form
$("#button").on("click", function(event) {
    event.preventDefault();

    // link city input by user to weather data fetched
    var city = $("#cityInput").val()
    var URL1 = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + apiKey;
    console.log(city);

    // fetch and return API into a JSON
    fetch(URL1)

    .then(function (response) {
        return response.json()
    })

    

})