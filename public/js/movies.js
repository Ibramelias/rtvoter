
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

            let title = response.Search.map(function (element) {
                return `${element.Title}`;

            })

            let Poster = response.Search.map(function (element) {
                return `${element.Poster}`;

            })

            console.log(Poster[3]);

            for (var i = 0; i < title.length; i++) {
                console.log(title[i])
                var name = $("<p>").text(title[i]);
                var img = $("<img>").attr("src", Poster[i]);


                $("#films").addClass("info")
                $("#films").append(name,img);

                // for (var j = 0; j < Poster.length; j++){

                //    
                //     $("#films").append(img);
                    
                // }
              
            }

       

            // var imgURL = data[0].Poster;


            // console.log(img)




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