$(document).ready (function(){
    // This file just dose a GET request to figure out which user is looged in
    // and updates the HTML on the page 

    $.get("/api/user_data").then(function(data) {
        $(".memebr-name").text(data.email);
    });
});