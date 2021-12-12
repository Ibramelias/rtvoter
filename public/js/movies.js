

// var categories = ['christmas', 'sad', 'happy', 'war', 'lie', 'life'];
var categories = ['popular','upcoming', 'top_rated','now_playing'];
var imgURL = "https://image.tmdb.org/t/p/w154";

$(document).ready(function () {
    function getResult(category) {
        // var queryURL = "https://www.omdbapi.com/?s=" + category + "&apikey=trilogy";
        var queryURL = "https://api.themoviedb.org/3/movie/"+ category + "?api_key=881f34c3b978ff91294912c9151e1ff4&language=en-US&page=1";
        return $.get({ url: queryURL })
    }
    categories.forEach(function (category) {
        getResult(category).then(function (response) {
            console.log(response)
            response.results.forEach(function (film) {
                $('#' + category).find('.film-poster').append('<img src=' + imgURL + film.poster_path + '>')
                // $('#' + category).find('.name').append( "<p>" + film.title  +  "  " +  film.release_date +  "</p>")
            })
        })
    })
  
})
