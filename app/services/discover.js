// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
moodieApp.factory('discoverService', function ($resource) {

  // TODO in Lab 5: Add your model code from previous labs
  // feel free to remove above example code
  // you will need to modify the model (getDish and getAllDishes) 
  // a bit to take the advantage of Angular resource service
  // check lab 5 instructions for details
//DinnerModel Object constructor
	var currentYear = new Date().getFullYear();

	this.minYear = currentYear - 15;
	this.maxYear = currentYear;
 
	this.minRat = 5;
	this.maxRat = 10;

	this.currentSearch = [];

	

	this.genres = [
		{
                     name:"Action",
			id : 28,
			state : 0,
	},
	{
                     name:"Adventure",
			id : 12,
			state : 0,
	},
		{
                     name:"Animation",
			id : 16,
			state : 0,
	},
		{
                     name:"Comedy",
			id : 35,
			state : 0,
	},
		{
                     name:"Crime",
			id : 80,
			state : 0,
	},
		{
                     name:"Documentary",
			id : 99,
			state : 0,
	},
		{
                     name:"Drama",
			id : 18,
			state : 0,
	},
		{
                     name:"Family",
			id : 10751,
			state : 0,
	},
		{
                     name:"Fantasy",
			id : 14,
			state : 0,
	},
		{
                     name:"History",
			id : 36,
			state : 0,
	},
		{
                     name:"Horror",
			id : 27,
			state : 0,
	},
		{
                     name:"Music",
			id : 10402,
			state : 0,
	},
		{
                     name:"Mystery",
			id : 9648,
			state : 0,
	},
		{
                     name:"Romance",
			id : 10749,
			state : 0,
	},
		{
                     name:"Science Fiction",
			id : 878,
			state : 0,
	},
		{
                     name:"Thriller",
			id : 53,
			state : 0,
	},
		{
                     name:"War",
			id : 10752,
			state : 0,
	},
		{
                     name:"Western",
			id : 37,
			state : 0,
	}
                    ];

	this.addGenre = function(genre){
		if(genre.state === 0){
			genre.state = 1;
		}
		else if(genre.state === 1){
			genre.state = 0;
		}
		
	}
	
                                      
	this.getGenres = function(movie){
		var genreList = [];
		if (this.currentSearch.length){
		for(id in movie.genre_ids){
			for(u in this.genres){
				if(movie.genre_ids[id] === this.genres[u].id){
					genreList.push(this.genres[u].name);
				}
			}
		}
		}	
		return genreList;
	}
		

	this.setChosen = function(){
		var chosenGenres = '';

		for(i in this.genres){
			if(this.genres[i].state === 1){
				if(chosenGenres === ''){
					chosenGenres = this.genres[i].id;
				}
				else {
				chosenGenres = chosenGenres + ',' + this.genres[i].id;
				}
			}
		}
	return chosenGenres;
	}


	this.MovieSearch = $resource('http://api.themoviedb.org/3/discover/movie?api_key=b0a5b20c668da9800946e85508c3c44f');

return this;
});
