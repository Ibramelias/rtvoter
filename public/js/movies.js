
var category;
// var categoryTwo = "funny";
// var categoryThree = "sad";
// var categoryFour = "happy";
// var categoryFive = "gold";




$(document).ready(function () {

    function getResult() {

        var queryURL = "https://www.omdbapi.com/?s=" + category + "&apikey=trilogy";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            //  let title = response.Search.map(function (element) {
            //      return `${element.Title}`;

            //  })

            // crreate a map function to loop in every result and get movie poster from data response //  
            let Poster = response.Search.map(function (element) {
                return `${element.Poster}`;
            })

            // console.log(Poster[3]);

        })

    } // function (getResults)
    getResult();

    


    // var movie = $("#movie").val();



})






// for (var i = 0; i < Poster.length; i++) {
//     //  console.log(title[i])
//     //  var name = $("<p>").text(title[i]);
//     var img = $("<img>").attr("src", Poster[i]);


//     $("#categoryOne").addClass("info")
//     $("#categoryOne").append(img);


// }




// $("#two").click(function(){
//     category = 'sad';
//     getResult();

// })