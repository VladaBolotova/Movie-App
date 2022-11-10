var moviepic = document.getElementById("movie-img1")
var moviepic2 = document.getElementById("movie-img2")
var moviepic3 = document.getElementById("movie-img3")
var moviepic4 = document.getElementById("movie-img4")
var movietitle = document.getElementById("Title1")
var movietitle2 = document.getElementById("Title2")
var movietitle3 = document.getElementById("Title3")
var movietitle4 = document.getElementById("Title4")



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '126aa9a222msh511ea90b77f0d10p1b34d9jsnbf58338755b4',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/title/get-overview-details?tconst=tt14039582', options)
	.then(response => { 
		return response.json();
	})
	.then(data => {
		console.log(data)
		var movieid = data.id
		var newid = movieid.substring(7, 17);
		console.log(newid)
		var Title = data.title.title
		var year = data.title.year
		console.log(Title)
		var movieimg1 = data.title.image.url
		console.log(movieimg1)
		movietitle.textContent = Title+" "+"("+year+")"
		moviepic.src = movieimg1

});



fetch('https://online-movie-database.p.rapidapi.com/title/get-overview-details?tconst=tt15474916', options)
	.then(response => { 
		return response.json();
	})
	.then(data => {
		console.log(data)
		var movieid = data.id
		var newid = movieid.substring(7, 17);
		console.log(newid)
		var Title = data.title.title
		var year = data.title.year
		console.log(Title)
		var movieimg = data.title.image.url
		console.log(movieimg)
		movietitle2.textContent = Title+" "+"("+year+")"
		moviepic2.src = movieimg

});


fetch('https://online-movie-database.p.rapidapi.com/title/get-overview-details?tconst=tt15327088', options)
	.then(response => { 
		return response.json();
	})
	.then(data => {
		console.log(data)
		var movieid = data.id
		var newid = movieid.substring(7, 17);
		console.log(newid)
		var Title = data.title.title
		var year = data.title.year
		console.log(Title)
		var movieimg = data.title.image.url
		console.log(movieimg)
		movietitle3.textContent = Title+" "+"("+year+")"
		moviepic3.src = movieimg

});
	
	
fetch('https://online-movie-database.p.rapidapi.com/title/get-overview-details?tconst=tt0120737', options)
	.then(response => { 
		return response.json();
	})
	.then(data => {
		console.log(data)
		var movieid = data.id
		var newid = movieid.substring(7, 17);
		console.log(newid)
		var Title = data.title.title
		var year = data.title.year
		console.log(Title)
		var movieimg = data.title.image.url
		console.log(movieimg)
		movietitle4.textContent = Title+" "+"("+year+")"
		moviepic4.src = movieimg
	});


	





	//.then(response => console.log(response))
	//.catch(err => console.error(err))
	