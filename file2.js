var apiKey = "2fe2a660ccee4f29bd7d0d10e5775d14"

var temp = ("#temp")



// var city = $("#exampleDataList").val;

// var city = "Los Angeles"


$("#button").on("click", function(event) {

    event.preventDefault();

    var city = $("#cityInput").val()
    console.log(city);

   

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + apiKey)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log('Open Weather \n----------');
        //We need to examine the API response to know how to access the data we want to extract.
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].name);
            
          }
        })
        temp.text({temp} = data.main);
})





//     fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log('Open Weather \n----------');
//     //We need to examine the API response to know how to access the data we want to extract.
//     console.log(data);
//     for (var i = 0; i < data.length; i++) {
//         console.log(data[i].name);
//       }
//     })});


// fetch('https://api.github.com/orgs/twitter/repos')
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log('Twitter Repositories: Names only \n----------');
//     console.log(data);
//     //The response we receive is an array, meaning that we can loop through the data, accessing whatever specific data we want, as shown in the following code:
