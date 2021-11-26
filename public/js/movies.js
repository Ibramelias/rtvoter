

$(document).ready(function () {

    // var movie;
    // var queryurl;
    // var Apikey = "c9999e90";

    // "&apikey=trilogy"
    // "https://www.omdbapi.com/?t=" + movie + "&api_key=c9999e90";

    // var film = $("#films");

    $("#btn").on("click", function getMovie() {

        var movie = $("#movie").val();
        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            $("#films").text(JSON.stringify(response));
        })



    })


})