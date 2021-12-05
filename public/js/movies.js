
var category;
// var categoryTwo = "funny";
// var categoryThree = "sad";
// var categoryFour = "happy";
// var categoryFive = "gold";

$(document).ready(function () {

    function getResult() {
        // category = 'life';
        var queryURL = "https://www.omdbapi.com/?s=" + category + "&apikey=trilogy";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            // console.log(response);
            // crreate a map function to loop in every result and get movie poster from data response //  
            let Poster = response.Search.map(function (element) {
                return `${element.Poster}`;
            })
            for (var i = 0; i < Poster.length; i++) {
                //  console.log(title[i])
                //  var name = $("<p>").text(title[i]);
                var img = $("<img>").attr("src", Poster[i]);
                $("#categoryOne, #categoryTwo, #categoryThree, #categoryFour, #categoryFive").addClass("info")
                $("#categoryOne").append(img);
            }
        })
    } // function (getResults)
   
    $("#one").append(function () {
        category = "life";
        // $("#categoryOne").append();
        getResult();
        
    })


    $("#two").append(function () {
        category = "happy";
        // $("#categoryTwo").append(getResult(category));
        getResult();
        
    })



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