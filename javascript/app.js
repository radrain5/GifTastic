



$("button").on("click", function() {
    var topics = $(this).attr("data-superhero");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=R1XbSReoEFZf3qBYF0wxRMgOFnabDriv&limit=10"; 


    
    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function(response) {
        console.log(queryURL);

        console.log(response);
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
          var superheroDiv = $("<div>"); 
          var p = $("<p>").text("Rating: " + results[i].rating);
          var superheroImage = $("<img>");         
          superheroImage.attr("src", results[i].images.fixed_height.url);
          superheroDiv.append(p);
          superheroDiv.append(superheroImage);
          $("#gifs-appear-here").prepend(superheroDiv);
        }
      });
  });