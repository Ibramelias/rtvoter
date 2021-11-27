
$(document).ready(function () {

    $("#btn").on("click", function getMovie() {

        var movie = $("#movie").val();
        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            var imgURL = response.Poster;
            var img = $("<img>").attr("src",imgURL );
            $("#films").append(img);

            var name = response.Title;
            var movie1 = $("<p>").text(name);
            $("#films").append(movie1);

        })



    })


})