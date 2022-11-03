const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '126aa9a222msh511ea90b77f0d10p1b34d9jsnbf58338755b4',
		'X-RapidAPI-Host': 'moviesdb5.p.rapidapi.com'
	}
};

fetch('https://moviesdb5.p.rapidapi.com/om?s=action', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));