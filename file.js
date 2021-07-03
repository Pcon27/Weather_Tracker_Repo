var apiKey = "2fe2a660ccee4f29bd7d0d10e5775d14"

function getData(City)
    var cityRequestUrl = "api.openweathermap.org/data/2.5/weather?q=" + city name + "&appid=" + apiKey;

    fetch(firstRequestUrl)
        .then(function (response) {
            console.log(response)
            return response.json();
        })
        .then(function (data){
            console.log(data)
        })