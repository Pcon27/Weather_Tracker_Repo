var apiKey = "2fe2a660ccee4f29bd7d0d10e5775d14"
var cityName = $("#city")
var tempInput = $("#tempInput")
var forcast1 = $("#forcast1")
var forcast2 = $("#forcast2")
var forcast3 = $("#forcast3")
var forcast4 = $("#forcast4")
var forcast5 = $("#forcast5")


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

// sort through data and create variavles for temp and city name
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

        // create second API fetch
        
        var URL2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + apiKey;
        
        fetch(URL2)

        .then(function (response2) {
            return response2.json()
        })

        // loop through data to sort through weather for days of the week 
        .then(function(data2) {
            console.log(data2);
            for (var i = 1; i < 6; i++) {
                var { icon } = data2.daily[i].weather[0]
                var { day } = data2.daily[i].temp
                var { humidity } =data2.daily[i]
                console.log(icon)
                console.log(day)

                if (i===1){
                    forcast1.append("<p>" + "temp : " + day +  "</p>")
                    forcast1.append("<p>" + "humidity : " + humidity +  "</p>")

                }

                if (i===2){
                    forcast2.append("<p>" + "temp : " + day +  "</p>")
                    forcast2.append("<p>" + "humidity : " + humidity +  "</p>")

                }

                if (i===3){
                    forcast3.append("<p>" + "temp : " + day +  "</p>")
                    forcast3.append("<p>" + "humidity : " + humidity +  "</p>")
                }

                if (i===4){
                    forcast4.append("<p>" + "temp : " + day +  "</p>")
                    forcast4.append("<p>" + "humidity : " + humidity +  "</p>")
                }

                if (i===5){
                    forcast5.append("<p>" + "temp : " + day +  "</p>")
                    forcast5.append("<p>" + "humidity : " + humidity +  "</p>")
                }


            }
        })
    
    })

})