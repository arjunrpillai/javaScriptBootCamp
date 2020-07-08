var movies = [
	{
		title:"Harry potter",
		rating:8,
		hasWatched:true
	},
	{
		title:"Simmba",
		rating:7,
		hasWatched:true
	},
	{
		title:"Dark",
		rating:8,
		hasWatched:false
	},
	{
		title:"Aarya",
		rating:6,
		hasWatched:false
	}
]
movies.forEach(function(movie){
	if(movie.hasWatched == true){
		console.log("You have watched " + '"' + movie.title + '"' +" - " + movie.rating)
	}else if(movie.hasWatched ==false){
		console.log("You have not watched " + '"' + movie.title + '"' +" - " + movie.rating)
	}
})