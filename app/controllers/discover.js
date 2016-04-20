'use strict';

moodieApp.controller('DiscoverCtrl', function ($scope, Discover) {

	$scope.year = function(movie){
		return movie.release_date.substring(0,4);	
     }
     
	$scope.movies = function(){
		console.log(Discover.currentSearch);
		return Discover.currentSearch;
			
	}
	

	$scope.getGenres = function(movie){

		return Discover.getGenres(movie);

	}



});
