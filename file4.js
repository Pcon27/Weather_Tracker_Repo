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
var previousSearches = $("#previousSearches")
var children = previousSearches.children()
var UVIndex = $("#UVI")




// start function on the click of the seach function of HTML form
$("#button").on("click", function(event) {
    event.preventDefault();
    


// link city input by user to weather data fetched
    var city = $("#cityInput").val()
    var URL1 = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + apiKey;
    console.log(city);

    

    var previousSearch = JSON.parse(localStorage.getItem("previousSearch")) || []

    previousSearch.unshift(city)

    localStorage.setItem("previousSearch", JSON.stringify(previousSearch))

    $("#previousSearches").append("<button>" + city + "</button>") 
    





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
        var { humidity } = data.main
        var { speed } = data.wind
        var { icon } = data.weather[0]
    
        currentWeather.empty();

        weatherIcon.attr("src", "https://openweathermap.org/img/wn/" + icon + "@2x.png")
        currentWeather.append(weatherIcon)
        currentWeather.append("<h2>" + name + "</h2");
        currentWeather.append(todaysDate.format("l"));
        currentWeather.append("<p>" + "Current Temp: " + temp + "</p");
        currentWeather.append("<p>" + "Humidity : " + humidity +  "%" + "</p>")
        currentWeather.append("<p>" + "Wind Speed : " + speed + "</p>")
        
        
        // currentWeather.append("<img>" + "http://openweathermap.org/img/wn/" + icon + "@2px.png" + "</img>")

       
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
                var { humidity } = data2.daily[i]
                var { uvi } = data2.current
                console.log(icon)
                console.log(day)

                

                if (i===1){
                     
                    forcast1.empty();
                    $("#forcast1Icon").attr("src", "https://openweathermap.org/img/wn/" + icon + "@2x.png")
                    forcast1.append($("#forcast1Icon"))
                    forcast1.append("<p>" + day1Date.format("l") + "</p>")
                    forcast1.append("<p>" + "temp : " + day +  "</p>")
                    forcast1.append("<p>" + "humidity : " + humidity +  "%" + "</p>")
                    
                }

                if (i===2){
                    forcast2.empty();
                    $("#forcast2Icon").attr("src", "https://openweathermap.org/img/wn/" + icon + "@2x.png")
                    forcast2.append($("#forcast2Icon"))
                    forcast2.append("<p>" + day2Date.format("l") + "</p>")
                    forcast2.append("<p>" + "temp : " + day +  "</p>")
                    forcast2.append("<p>" + "humidity : " + humidity +  "%" + "</p>")
                    
                }

                if (i===3){
                    forcast3.empty();
                    $("#forcast3Icon").attr("src", "https://openweathermap.org/img/wn/" + icon + "@2x.png")
                    forcast3.append($("#forcast3Icon"))
                    forcast3.append("<p>" + day3Date.format("l") + "</p>")
                    forcast3.append("<p>" + "temp : " + day +  "</p>")
                    forcast3.append("<p>" + "humidity : " + humidity +  "%" + "</p>")
                    
                }

                if (i===4){
                    
                    forcast4.empty();
                    $("#forcast4Icon").attr("src", "https://openweathermap.org/img/wn/" + icon + "@2x.png")
                    forcast4.append($("#forcast4Icon"))
                    forcast4.append("<p>" + day4Date.format("l") + "</p>")
                    forcast4.append("<p>" + "temp : " + day +  "</p>")
                    forcast4.append("<p>" + "humidity : " + humidity +  "%" + "</p>")
                    
                }

                if (i===5){
                    forcast5.empty();
                    $("#forcast5Icon").attr("src", "https://openweathermap.org/img/wn/" + icon + "@2x.png")
                    forcast5.append($("#forcast5Icon"))
                    forcast5.append("<p>" + day5Date.format("l") + "</p>")
                    forcast5.append("<p>" + "temp : " + day +  "</p>")
                    forcast5.append("<p>" + "humidity : " + humidity +  "%" + "</p>")
                }

                if (uvi > 2){

                }
            }
            UVIndex.text("UV Index : " + uvi)
            currentWeather.append(UVIndex)
            
            if (uvi < 3){
                UVIndex.css ("background-color", "green")
            }
            else if (uvi > 7){
                UVIndex.css ("background-color", "red")
            }
            else {
                UVIndex.css ("background-color", "yellow")
            }
        })
    
    })
   
})


children.on("click", function(event) {

    var city2  = event.target.textcontent;
    console.log(city2)

})

 
