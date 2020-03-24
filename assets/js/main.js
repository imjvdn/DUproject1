$(document).ready(function() {
  function gifDisplay(gifSearchTerm) {
    var queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      gifSearchTerm +
      "&limit=1&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9";
    console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(response.data[0]);
      var results = response.data;

      for (var i = 0; i < results.length; i++) {
        var gifRating = $("<p>").text("rating: g");
        var img = $("<img style='width:400px'>").attr(
          "src",
          //   results[i].images.fixed_height_still.url
          results[i].images.original.url
        );
        $("#movie-gif").html(img);
      }
      console.log("done with the ajax call");
    });
  }
  $("#submitBttn").on("click", function(event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var gif = $("#topic-input")
      .val()
      .trim();
    gifDisplay(gif);
    console.log("hi");
    console.log(gif);
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
      console.log(response);
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
});
