
$(document).ready(function () {


     // var movie = $("#movie").val();
     var queryURL = "https://www.omdbapi.com/?s=life&apikey=trilogy";

     $.ajax({
         url: queryURL,
         method: "GET"
     }).then(function (response) {
         console.log(response);


        //  let title = response.Search.map(function (element) {
        //      return `${element.Title}`;

        //  })

         let Poster = response.Search.map(function (element) {
             return `${element.Poster}`;

         })

         console.log(Poster[3]);

         for (var i = 0; i < Poster.length; i++) {
            //  console.log(title[i])
            //  var name = $("<p>").text(title[i]);
             var img = $("<img>").attr("src", Poster[i]);


             $("#films").addClass("info")
             $("#films").append(img);

           
         }

 

     })


})