

// var categories = ['christmas', 'sad', 'happy', 'war', 'lie', 'life'];
var categories = ['popular','upcoming', 'top_rated','now_playing'];
var imgURL = "https://image.tmdb.org/t/p/w154";

$(document).ready(function () {
    function renderFilmDetails(filmTitle, filmPoster, filmYear) {
        filmYear = filmYear.slice(0,4);
        const filmTmeplate = `
        <div class="film-card">
            <div class="film-card_poster">
                <img src=${filmPoster} alt=${filmTitle} class="img-fluid"/>
            </div>
            <h2 class="film-card_title">${filmTitle}</h2>
            <div class="film-card_date">${filmYear}</div>
        </div>
        `
        return filmTmeplate;
    }
    function getResult(category) {
        // var queryURL = "https://www.omdbapi.com/?s=" + category + "&apikey=trilogy";
        var queryURL = "https://api.themoviedb.org/3/movie/"+ category + "?api_key=881f34c3b978ff91294912c9151e1ff4&language=en-US&page=1";
        return $.get({ url: queryURL })
    }
    categories.forEach(function (category) {
        getResult(category).then(function (films) {
            films.results.forEach(function (film) {
                $('#' + category).find('.films-container').append(renderFilmDetails(film.title, imgURL+film.poster_path, film.release_date))
                // $('#top-ten').find('.films-container').append( renderFilmDetails(film.title, imgURL+film.poster_path, film.release_date))
               
            })
        })
    })
  
})


topTen = categories.films.slice(0,10);
// console.log(topTen);