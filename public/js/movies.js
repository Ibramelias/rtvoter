// defined variables // 
var categories = ['popular', 'upcoming', 'top_rated', 'now_playing'];
var imgURL = "https://image.tmdb.org/t/p/w154";

// jquery function // 
$(document).ready(function () {



  // $("#textbox").bind("keyup", function () {
  //   var text = $(this).val().toLowerCase();
  //   var filmCards = $(".film-card_title")
  //   console.log(filmCards)
  // })


  // this function is to render Movie model for more details 
  function renderModalDetails(modalTitle, modalPoster, modalYear, modalOverview, modalTagline, modalHomepage, genres) {
    modalYear = modalYear.slice(0, 4);
    const modalTmeplate = `
        <div class="film-modal">
        <h2 class="modal_title">${modalTitle}</h2>
        <p>${modalTagline}</p>
        <div>${genres}</div>
            <div class="modal_poster">
                <img src=${modalPoster} alt=${modalTitle} class="img-fluid"/>
            </div>
            <div class="modal_date"><strong>Released:</strong> ${modalYear}</div>
            <div class="modal_overview"><strong>Movie overview:</strong> ${modalOverview}</div>
            <a  href="${modalHomepage}" target="_blank" class="modal_link"><strong>Get It </strong>
        </div>
        `
    return modalTmeplate;
  }

  // this function using ($this) to get the movie we choice and search on themoviedb by filmId
  $(document).on('click', '.film-card', function () {
    var filmId = $(this).attr('data-id')
    // console.log(filmId)
    queryURL = 'https://api.themoviedb.org/3/movie/' + filmId + '?api_key=881f34c3b978ff91294912c9151e1ff4&language=en-US';
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (res) {
      var genres = res.genres
      for (var i = 0; i < genres.length; i++) {
        var gen = genres[i].name
        console.log(gen)
      }
      // this line is to append what we choice from db 
      $('.modal').modal('show').find('.modal-body').append((renderModalDetails(res.title, imgURL + res.poster_path, res.release_date, res.overview, res.tagline, res.homepage, gen)))
    })
  })

  // this fuction is to make sure that the modal become empty after close 
  $(document).on('click', '.modal', function () {
    $('.modal-body').empty()
  })

  // this functon is to close the modal when the user clicks on get it 
  $(document).on('click', '.modal_link', function () {
    $('.modal').modal('hide')
  })

  // we created this funtion to render movies in cards
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

  // this function is responsible to get movies from db using  API's and AJAXS 
  function getResult(category) {
    var queryURL = "https://api.themoviedb.org/3/movie/" + category + "?api_key=881f34c3b978ff91294912c9151e1ff4&language=en-US&page=1";
    return $.get({ url: queryURL })
  }

  // after we get the data, start to loop to get what we need from results 
  categories.forEach(function (category) {
    getResult(category).then(function (films) {
      films.results.forEach(function (film) {
        $('#' + category).find('.films-container').prepend(renderFilmDetails(film.title, imgURL + film.poster_path, film.release_date, film.id))
      })

      // this section is to render only  12 movies from db use slice function to cut what we want from return result
      var topTen = films.results.slice(0, 3)
      // create map funtion to get the best top ten movies details like name, year and poster 
      topTen.map(x => { $('#topTen').prepend(renderFilmDetails(x.title, imgURL + x.poster_path, x.release_date)) });
    })
  })

  //  this section is to render TV series 
  function getTvResults() {
    var queryURL1 = 'https://api.themoviedb.org/3/tv/popular?api_key=881f34c3b978ff91294912c9151e1ff4&language=en-US'
    $.ajax({
      url: queryURL1,
      method: 'GET'
    }).then(function (results) {
      results.results.forEach(function (tv) {
        $("#tvSeries").prepend(renderFilmDetails(tv.name, imgURL + tv.poster_path, tv.first_air_date, tv.id))
      })
    })
  }
  getTvResults()
})

