var apiKey = "2fe2a660ccee4f29bd7d0d10e5775d14"

function getData(city) {
    var cityRequestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

    fetch(cityRequestUrl) 
        .then(function(response) {
            console.log(response)
            return response.json();
        })
        .then(function(data){
            console.log(data)

            for (var i = 0; i < data.length; i++) {
                // Creating elements, tablerow, tabledata, and anchor
                var createTableRow = document.createElement('tr');
                var tableData = document.createElement('td');
                var link = document.createElement('a');
        
                // Setting the text of link and the href of the link
                link.textContent = data[i].html_url;
                link.href = data[i].html_url;
        
                // Appending the link to the tabledata and then appending the tabledata to the tablerow
                // The tablerow then gets appended to the tablebody
                tableData.appendChild(link);
                createTableRow.appendChild(tableData);
                tableBody.appendChild(createTableRow);
              }
            });
    }

    getData();
