// global scope - scope 1
var checkList = document.getElementsByClassName('d-check');
for(i=0;i<checkList.length;i++){
	//for loop "local" scope - scope 2
	var anchor = checkList[i].querySelector('.anchor');
	anchor.addEventListener('click', function(event){
		//event listener "local" scope - scope 3
		if (event.target.parentElement.classList.contains('visible')){
			event.target.parentElement.classList.remove('visible');
			
		
		}else{
			event.target.parentElement.classList.add('visible');
			 
		}
	}) 
}

$(".range-selector").click(function(){
	var range=$(this).children(".range-container")[0];
	if($(range).hasClass("hidden")){
		$(range).removeClass("hidden");
	}else{
		$(range).addClass("hidden");
	}
})

$("#points").on('change',function(){
	$("#pt").text(this.value)
})

$("#point").on('change',function(){
	$("#pf").text(this.value)
})

$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 1950,
      max: 2022,
      values: [ 1970, 2000],
      slide: function( event, ui ) {
    $("#min").html(ui.values[0]);
	$("#max").html(ui.values[1]);
      }
    });
} );

// const options = {
// 	method: 'POST',
// 	headers: {
// 		'X-RapidAPI-Key': '126aa9a222msh511ea90b77f0d10p1b34d9jsnbf58338755b4',
// 		'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com'
// 	}
// };

// fetch('https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=movies&count=1', options)
// 	.then(response => response.json())
// 	.then(data=> {
// 		console.log(data)
// 		console.log(data[0].author)
// 	})
// 	.catch(err => console.error(err));

$( function() {
    $( "#slider-range1" ).slider({
      range: true,
      min: 1,
      max: 4,
      values: [ 2, 3],
      slide: function( event, ui ) {
    $("#min1").html(ui.values[0]);
	$("#max1").html(ui.values[1]);

      }
    });
} );



var pipMovies = [];
var moviecontainer = document.getElementById("movie-container")

document.querySelector(".genre-ul").addEventListener("click",popMovies)

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '126aa9a222msh511ea90b77f0d10p1b34d9jsnbf58338755b4',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};
var moviedata = []
var filteredMovies = []
function popMovies(){
moviedata = []
filteredMovies = []
fetch('https://online-movie-database.p.rapidapi.com/title/get-most-popular-movies', options)
	.then(response => { 
	return response.json();
	})
	.then(data => {
		// console.log(data)
		for(i=0; i<data.length; i++) {
			var ert = data[i].split("/");
			var ID = ert.slice(-2,-1);
			//console.log(ID);
			pipMovies.push(ID);
		}; 
		getpipmovies()
		// console.log(popMovies[2])
}) 
};

function resolveAfter2Seconds(movieinfo, options) {
	return new Promise(resolve => {
	  setTimeout(() => {
		resolve(
			fetch(movieinfo, options)
			.then(response => { 
			return response.json();
			})
			.then(data => {
				console.log(data)
				moviedata.push(data);
				return data
			})
		);
	  }, 500);
	});
  }
	
async function getpipmovies() {
	for(i=0; i<10; i++) {
		var IDurl = "https://online-movie-database.p.rapidapi.com/title/get-overview-details?tconst="
		movieinfo = IDurl.concat(pipMovies[i])
		const result = await resolveAfter2Seconds(movieinfo, options);
		console.log('success: ', result)
	}
	checkGenre(moviedata)
}

function checkGenre (data) {
	// get checked genres
	var genreChecked = [];
	document.querySelectorAll(".checkgenre").forEach(function(checkbox){
		if (checkbox.checked){
			genreChecked.push(checkbox.parentElement.innerText);
		};
	});
	console.log("checkedGenre: " + genreChecked)

	//loop through movies then loop through their genre tag array,
	data.forEach(function(movieObj){
		var movie = movieObj
		var movieGenres = movie.genres
		movieGenres.forEach(function(type){
			if (genreChecked.includes(type)) {
				// check if already pushed if not push if yes dont push
				if(!filteredMovies.includes(movie)){
					filteredMovies.push(movie)
				}
			}
		})
	})
	console.log(filteredMovies)
	displayMovies()
	};

function displayMovies() {
	var moviestoDisplay
	if(filteredMovies.length > 0 ){
		moviestoDisplay = filteredMovies
		console.log(moviestoDisplay)
	}else{
		moviestoDisplay = moviedata
		console.log(moviestoDisplay)
	} 

	moviestoDisplay.forEach(function(data){
	var Title = data.title.title
	var year = data.title.year
	var movieimg = data.title.image.url
	var imgcon = document.createElement('img')
	imgcon.classList.add("img")
	var titlecon = document.createElement('h4')
	var moviebox = document.createElement('div')
	moviebox.classList.add("movie-box")
	imgcon.src = movieimg
	titlecon.textContent = Title+" "+"("+year+")"
	moviebox.appendChild(imgcon)
	moviebox.appendChild(titlecon)
	moviecontainer.appendChild(moviebox)
});
}


popMovies()