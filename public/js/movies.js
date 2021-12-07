
var categories = ['christmas', 'sad', 'happy', 'war', 'lie', 'life'];

$(document).ready(function () {
    function getResult(category) {
        var queryURL = "https://www.omdbapi.com/?s=" + category + "&apikey=trilogy";
        return $.get({ url: queryURL })
    }
    categories.forEach(function (category) {
        getResult(category).then(function (response) {
            console.log(response)
            response.Search.forEach(function (film) {
                $('#' + category).find('.film-poster').append('<img src=' + film.Poster + '/>')
            })
        })
    })



})
