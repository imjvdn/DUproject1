$(document).ready(function() {
  function gifDisplay() {
    var gif = $("#topic-input")
      .val()
      .trim();
    var queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      gif +
      "&limit=1&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      //   console.log(response.data[0]);
      var results = response.data;

      for (var i = 0; i < results.length; i++) {
        var gifRating = $("<p>").text("rating: g");
        var img = $("<img>").attr(
          "src",
          //   results[i].images.fixed_height_still.url
          results[i].images.original.url
        );
        $("#movie-gif").html(img);
      }
    });
  }
  $("#submitBttn").on("click", function(event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var gif = $("#topic-input")
      .val()
      .trim();
    gifDisplay();
  });

  $("#submitBttn").on("click", function(event) {
    event.preventDefault();

    // Here we grab the text from the input box
    var movie = $("#topic-input").val();

    // Here we construct our URL
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      //   console.log(response);
      var resultsInfo = response.data;
      $("#movie-review").text(JSON.stringify(response.Ratings[1].Source));

      $("#movie-review-percent").text(
        JSON.stringify(response.Ratings[1].Value)
      );

      $("#movie-review2").text(JSON.stringify(response.Ratings[0].Source));

      $("#movie-review-percent2").text(
        JSON.stringify(response.Ratings[0].Value)
      );

      $("#movie-review3").text(JSON.stringify(response.Ratings[2].Source));

      $("#movie-review-percent3").text(
        JSON.stringify(response.Ratings[2].Value)
      );

      $("#movie-title").text(JSON.stringify(response.Title));

      $("#movie-info").text(JSON.stringify(response.Plot));

      var img = $("<img>").attr("src", response.Poster);
      $("#movie-poster").html(img);

      $("#rating").text(JSON.stringify("Rated: " + response.Rated));

      $("#info").text(JSON.stringify("Released: " + response.Released));

      $("#info2").text(JSON.stringify("Runtime: " + response.Runtime));

      $("#info3").text(JSON.stringify("Genre: " + response.Genre));

      $("#info4").text(JSON.stringify("Awards: " + response.Awards));

      $("#director").text(JSON.stringify("Director: " + response.Director));

      $("#cast").text(JSON.stringify("Actors: " + response.Actors));

      $("#writer").text(JSON.stringify("Writer: " + response.Writer));
    });
  });

  // $("#submitBttn").on("click", function(event) {
  //   event.preventDefault();
  //   var movie = $("#topic-input");

  //   var settings = {
  //     async: true,
  //     crossDomain: true,
  //     url:
  //       "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=" +
  //       movie +
  //       "&country=us",
  //     method: "GET",
  //     headers: {
  //       "x-rapidapi-host":
  //         "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
  //       "x-rapidapi-key": "e2b7f71e0bmsh8b9eab57efd24e4p1eef53jsn8da49b3e89b2"
  //     }
  //   };

  //   $.ajax(settings).done(function(response) {
  //     console.log(response);
  //   });
  // });
});
