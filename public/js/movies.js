
// var categories = ['christmas', 'sad', 'happy', 'war', 'lie', 'life'];
var categories = ['popular', 'upcoming', 'top_rated', 'now_playing'];
var imgURL = "https://image.tmdb.org/t/p/w154";


$(document).ready(function () {
  function renderFilmDetails(filmTitle, filmPoster, filmYear, filmOverview) {
    filmYear = filmYear.slice(0, 4);
    const filmTmeplate = `
        <div class="film-card">
            <div class="film-card_poster">
                <img src=${filmPoster} alt=${filmTitle} class="img-fluid"/>
            </div>
            <h2 class="film-card_title">${filmTitle}</h2>
            <div class="film-card_date">${filmYear}<span><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
            info</button></span></div>
          <!-- Modal -->
          <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ...
              </div>
            </div>
          </div>
        </div>
        </div>
        `
    return filmTmeplate;
  }

  function getResult(category) {
    // var queryURL = "https://www.omdbapi.com/?s=" + category + "&apikey=trilogy";
    var queryURL = "https://api.themoviedb.org/3/movie/" + category + "?api_key=881f34c3b978ff91294912c9151e1ff4&language=en-US&page=1";
    return $.get({ url: queryURL })
  }
  categories.forEach(function (category) {
    getResult(category).then(function (films) {
      films.results.forEach(function (film) {
        // console.log(films)
        $('#' + category).find('.films-container').append(renderFilmDetails(film.title, imgURL + film.poster_path, film.release_date, film.overview))
        // var overview = film.overview
        // console.log(overview)
        // $('#movieInfo').on('show.bs.modal', function(event){
        //   var modal = $(this)
        //   modal.find(".overview").append(film.overview)
        // })
      })
    })
  })
})


