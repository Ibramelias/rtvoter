

// var categories = ['christmas', 'sad', 'happy', 'war', 'lie', 'life'];
var categories = ['popular', 'upcoming', 'top_rated', 'now_playing'];
var imgURL = "https://image.tmdb.org/t/p/w154";


$(document).ready(function () {


  function renderModalDetails(modalTitle, modalPoster, modalYear, modalOverview, modalTagline, modalHomepage) {
    modalYear = modalYear.slice(0, 4);
    const modalTmeplate = `
        <div class="film-modal">
        <h2 class="modal_title">${modalTitle}</h2>
        <p>${modalTagline}</p>
            <div class="modal_poster">
                <img src=${modalPoster} alt=${modalTitle} class="img-fluid"/>
            </div>
            <div class="modal_date"><strong>Released:</strong> ${modalYear}</div>
            <div class="modal_overview"><strong>Movie overview:</strong> ${modalOverview}</div>
            <a  href="${modalHomepage}" class="modal_overview"><strong>Get It </strong>
        </div>
        `
    return modalTmeplate;
  }

  if(".modal" === false){
    $('.modal').empty()
  }


  $(document).on('click', '.film-card', function() {
    var filmId = $(this).attr('data-id')
    // console.log(filmId)
    queryURL = 'https://api.themoviedb.org/3/movie/' + filmId + '?api_key=881f34c3b978ff91294912c9151e1ff4&language=en-US';
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (res) {
      console.log(res)
      $('.modal').modal('show').find('.modal-body').append((renderModalDetails(res.title, imgURL + res.poster_path, res.release_date, res.overview, res.tagline, res.homepage)))
   
    })
  })

  $(document).on('click', '.modal', function(){
    $('.modal-body').empty()
  })



  function renderFilmDetails(filmTitle, filmPoster, filmYear, filmId) {
    filmYear = filmYear.slice(0, 4);

    const filmTmeplate = `
        <div class="film-card" data-id=${filmId}>
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
    var queryURL = "https://api.themoviedb.org/3/movie/" + category + "?api_key=881f34c3b978ff91294912c9151e1ff4&language=en-US&page=1";
    return $.get({ url: queryURL })
  }
  categories.forEach(function (category) {
    getResult(category).then(function (films) {
      films.results.forEach(function (film) {
        $('#' + category).find('.films-container').prepend(renderFilmDetails(film.title, imgURL + film.poster_path, film.release_date, film.id))
        // console.log(film.id)
        // $('.film-card').attr("data-id")
      })
      // $('.film-card').attr("data-id", filmId)
      // to get the best movies we need to cut the array so we used slice() ///
      var topTen = films.results.slice(0, 3)
      // create map funtion to get the best top ten movies details like name, year and poster 
      topTen.map(x => { $('#topTen').prepend(renderFilmDetails(x.title, imgURL + x.poster_path, x.release_date)) });
      console.log(films)
    })
  })
  // create another funtion to get TV series 
  function getTvResults() {
    var queryURL1 = 'https://api.themoviedb.org/3/tv/popular?api_key=881f34c3b978ff91294912c9151e1ff4&language=en-US'
    $.ajax({
      url: queryURL1,
      method: 'GET'
    }).then(function (results) {
      results.results.forEach(function (tv) {
        $("#tvSeries").prepend(renderFilmDetails(tv.name, imgURL + tv.poster_path, tv.first_air_date))
      })
    })
  }
  getTvResults()

})


