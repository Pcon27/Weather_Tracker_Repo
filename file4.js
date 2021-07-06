var apiKey = "2fe2a660ccee4f29bd7d0d10e5775d14"
var cityName = $("#city")
var tempInput = $("#tempInput")

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

    .then(function(data){
        console.log(data);

        var { name } = data
        var { temp } = data.main
        // var { icon } = data
    
       cityName.text(name);
        tempInput.text("Current Temp: " + temp);
        console.log(temp);
       
        var { lat } = data.coord
        var { lon } =  data.coord
        console.log(lat);
        console.log(lon);

        var URL2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + apiKey;

        fetch(URL2)

        .then(function (response2) {
            return response2.json()
        })

    })








})