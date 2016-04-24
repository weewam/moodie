'use strict';

moodieApp.controller('DiscoverCtrl', function ($scope, DiscoverService) {
	$scope.year = function(movie){
		return movie.release_date.substring(0,4);	
     }
     
	$scope.movies = function(){
		return DiscoverService.currentSearch;		
	}
});
