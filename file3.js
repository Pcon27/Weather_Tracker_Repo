var apiKey = "2fe2a660ccee4f29bd7d0d10e5775d14"
var api2 = "42082d62a10f58d1d7078f37a523d7bf"
var cityName = $("#city")
var tempInput = $("#tempInput")

$("#button").on("click", function(event) {
    event.preventDefault();

    var city = $("#cityInput").val()
    var URL1 = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + apiKey;
    console.log(city);

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

        .then(function(data2) {
            console.log(data2);
            for (var i = 1; i < 6; i+++) {
                var { icon } = data.daily[i].weather[0]
                var { day } = data.daily[i].temp
            }

        })

    })


});
