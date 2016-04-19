// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
moodieApp.factory('Discover', function ($resource) {

  // TODO in Lab 5: Add your model code from previous labs
  // feel free to remove above example code
  // you will need to modify the model (getDish and getAllDishes) 
  // a bit to take the advantage of Angular resource service
  // check lab 5 instructions for details
//DinnerModel Object constructor
 
	this.maxRat = 0;
	this.minRat = 0;
	this.APIkey= 'b0a5b20c668da9800946e85508c3c44f';	

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
		if(genre.state == 0){
			genre.state = 1;
		}
		else if(genre.state == 1){
			genre.state = 0;
		}
		console.log(genre.name, genre.state);
	}
	
                                      
	this.getGenres = function(){
		return this.genres;
	}
	
	this.setRating = function(Min,Max){
		console.log(this.maxRat = Max);
		console.log(this.minRat = Min);
	}
		

	this.MovieSearch = function(){
		var chosen = '';
		for(genre in this.genres){
			if(genre.state == 1){
				chosen = chosen + ',' + genre.id;
			}
		}
		$resource('http://api.themoviedb.org/3/discover',{with_genres:chosen, 'vote_average.gte':this.maxRat,'vote_average.lte':this.minRat, api_key:this.APIkey});
	}

return this;
});
