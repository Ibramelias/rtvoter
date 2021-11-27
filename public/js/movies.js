
$(document).ready(function () {

    $("#btn").on("click", function getMovie() {

        // var movie = $("#movie").val();
        var queryURL = "https://www.omdbapi.com/?s=inception&apikey=trilogy";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (data) {
            console.log(data)
            
            // $("#films").text(JSON.stringify(data[i].Title));


            // for (var i = 0; i <data.length; i++) {

            //     // var name = data[i].Title;
            //     // var movie1 = $("<p>").text(name);
            //     console.log(data.Search.Title[0]);
               

            // }

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