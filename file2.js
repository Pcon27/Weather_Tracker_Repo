var apiKey = "2fe2a660ccee4f29bd7d0d10e5775d14"
var temp = (".temp")
var tempInput = ("#tempInput")


$("#button").on("click", function(event) {
    event.preventDefault();

    var city = $("#cityInput").val()
    var URL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + apiKey
    console.log(city);

    fetch(URL)

        .then(function (response) {
      return response.json()
      .then(function(data){
        console.log(data);
        var {}
    })}



   
    // .then(function (data) {
    //     console.log('Open Weather \n----------');
    //     //We need to examine the API response to know how to access the data we want to extract.
    //     console.log(data);
    //     for (var i = 0; i < data.length; i++) {
    //         console.log(data[i].name);
    //         }