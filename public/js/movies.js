
$(document).ready(function () {

    $("#btn").on("click", function getMovie() {

        // var movie = $("#movie").val();
        var queryURL = "https://www.omdbapi.com/?s=inception&apikey=trilogy";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (data) {
            console.log(data);
            $("#films").text(JSON.stringify(data));

            // var imgURL = data[0].Poster;
            // var img = $("<img>").attr("src",imgURL );
            // $("#films").append(img);

            // var name = data.Title;
            // var movie1 = $("<p>").text(name);
            // $("#films").append(movie1);

            // var year = data.Released;
            // var release = $("<p>").text("Released on " + year );
            // $("#films").append(release);

        })



    })


})