
$(document).ready(function () {

	// function renderGamesDetails(gameTitle, gamePoster, gameYear) {
	// 	// filmYear = filmYear.slice(0, 4);
	// 	const gameTmeplate = `
	// 		<div class="game-card">
	// 			<div class="games-card_poster">
	// 				<img src=${gamePoster} alt=${gameTitle} class="img-fluid"/>
	// 			</div>
	// 			<h2 class="game-card_title">${gameTitle}</h2>
	// 			// <div class="game-card_date">${gameYear}</div>
	// 		</div>
	// 		`
	// 	return gameTmeplate;
	//   }


	var rapidapiApiKey =  "d900d6eecdmsh4d24d7bb04a0f4dp1badabjsnad948b39d7fe";
	var rapidapiHost = "free-to-play-games-database.p.rapidapi.com";

	function getGames () {
		queryUrl = "https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc";
		$.ajax({
			url: queryUrl,
			method:"GET",
			header:{rapidapiHost,rapidapiApiKey}
		}).then(function(response){
			console.log(response)
			// response.map(x => {
			// 	title = x.title
			// 	console.log(title)
			// 	// $('.all-games').append(renderGamesDetails(x.title))
			// })
		})
	}
	getGames()

})







