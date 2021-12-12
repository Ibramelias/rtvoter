
var categories = ['popular','upcoming', 'top_rated','now_playing'];

$(document).ready(function() {
// function getResult(category){
//     var queryURL = "https://fortnite-api.p.rapidapi.com/pveinfo" + category + "?api_key=d900d6eecdmsh4d24d7bb04a0f4dp1badabjsnad948b39d7fe" ;
//     return$.get({url :queryURL});
// }
// categories.forEach(function(category){
//     getResult(category).then(function(response){
//         console.log(response)
//         response.results.forEach(function(games){
//             $('#' + category).find().append()
//         })
//     })
// })

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://rawg-video-games-database.p.rapidapi.com/games/%7Bgame_pk%7D",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
		"x-rapidapi-key": "d900d6eecdmsh4d24d7bb04a0f4dp1badabjsnad948b39d7fe"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

})







