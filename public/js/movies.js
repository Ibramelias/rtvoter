
$(document).ready(function () {

    $("#btn").on("click", function getMovie() {

        var movie = $("#movie").val();
        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            
            var name = response.Title;
           
            var movie1 = $("<p>").text(name);
            // console.log(movie1);
            $("#films").append(movie1);

        })



    })


})