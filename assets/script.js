// global scope - scope 1
var checkList = document.getElementsByClassName('d-check');
for(i=0;i<checkList.length;i++){
	//for loop "local" scope - scope 2
	var anchor = checkList[i].querySelector('.anchor');
	anchor.addEventListener('click', function(event){
		//event listener "local" scope - scope 3
		if (event.target.parentElement.classList.contains('visible')){
			event.target.parentElement.classList.remove('visible');
			// if there is an input with a type range then add a class with display none 
		
		}else{
			event.target.parentElement.classList.add('visible');
			// if there is an input with a type range then remove the class with display none 
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


var pipMovies = [];
var moviecontainer = document.getElementById("movie-container")

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '126aa9a222msh511ea90b77f0d10p1b34d9jsnbf58338755b4',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/title/get-most-popular-movies', options)
	.then(response => { 
	return response.json();
	})
	.then(data => {
		
		for(i=0; i<20; i++) {
			var ert = data[i].split("/");
			var ID = ert.slice(-2,-1);
			//console.log(ID);
			pipMovies.push(ID);
			
			
			

		}; 
		getpipmovies()
		// console.log(popMovies[2])


}) 


// console.log(popMovies[2])


// var pipMovies = ["tt15791034", "tt1016150","tt10403420","tt6443346","tt4273800","tt1630029","tt9114286","tt17076046","tt15474916","tt14641788","tt2935622"] 

// console.log(pipMovies);
// console.log(pipMovies.length);
// var IDurl = "https://online-movie-database.p.rapidapi.com/title/get-overview-details?tconst=";
// console.log(IDurl);
// var movieid = IDurl.concat(pipMovies[1]);
// console.log(movieid);


function fetchMovie(movieinfo, options, index) {
	setTimeout(function(){
	fetch(movieinfo, options)
			.then(response => { 
			return response.json();
		})
		.then(data => {
		console.log(data)
		var Title = data.title.title
		var year = data.title.year
		var movieimg = data.title.image.url
		console.log(Title)
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
	},index*250)
}
		
function getpipmovies() {
	for(i=0; i<pipMovies.length; i++) {
		var IDurl = "https://online-movie-database.p.rapidapi.com/title/get-overview-details?tconst="
		console.log(IDurl)
		var movieinfo = IDurl.concat(pipMovies[i])
		fetchMovie(IDurl+pipMovies[i], options, i)
	}
}



// function checkGenre () {
// 	for(i=0; i <pipMovies.length; i++) {
// 		var IDurl = "https://online-movie-database.p.rapidapi.com/title/get-overview-details?tconst=";
// 		console.log(IDurl);
// 		var movieinfo = IDurl.concat(pipMovies[i]);
// 		fetch(movieinfo, options)
// 			.then(response => { 
// 			return response.json();
// 		})
// 		.then(data => {
// 		console.log(data)
// 		var currList = []
// 		var movieGenre = data.genres;

// 		var movieid = data.id;
// 		var ert = movieid.split("/");
// 		var ID = ert.slice(-2,-1);
// 		console.log(ID);

// 		var Horror = movieGenre.includes("Horror");
// 		var Action = movieGenre.includes("Action");
// 		var Adventure = movieGenre.includes("Adventure");
// 		var Comedy = movieGenre.includes("Comedy");
// 		var Documentary = movieGenre.includes("Documentary");
// 		var Biography = movieGenre.includes("Biography");
// 		var History = movieGenre.includes("History");
// 		var Drama = movieGenre.includes("Drama");
		
// 		console.log(Horror)

	
// // 		});
// // 	}
// // }


// // checkGenre()


  