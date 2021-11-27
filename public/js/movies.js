
$(document).ready(function () {

    $("#btn").on("click", function getMovie() {

        // var movie = $("#movie").val();
        var queryURL = "https://www.omdbapi.com/?s=life&apikey=trilogy";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);


            // var name = response.Title;
            // var movie1 = $("<p>").text(name);
            // $("#films").append(movie1);


            // $("#films").text(JSON.stringify(data[i].Title));


            // for (var i = 0; i <response.lenght; i++) {

            //     var name = response.Search[i];
            //     var movie1 = $("<p>").text(name);
            //     console.log(movie1);


            // }

            let movieInfo = response.Search.map(function (element) {
                return `${element.Title}`;

            })

            let moviePoster = response.Search.map(function (element) {
                return `${element.Poster}`;

            })

            console.log(moviePoster);

            // var imgURL = data[0].Poster;

            var img = $("<img>").attr("src", moviePoster);
            $("#films").append(img[0]);
            console.log(img)

            $("#films").append(movieInfo[0]);


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