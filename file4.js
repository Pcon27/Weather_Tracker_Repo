var apiKey = "2fe2a660ccee4f29bd7d0d10e5775d14"
var cityName = $("#city")
var tempInput = $("#tempInput")

$("#button").on("click", function(event) {
    event.preventDefault();

    var city = $("#cityInput").val()
    var URL1 = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + apiKey;
    console.log(city);









})