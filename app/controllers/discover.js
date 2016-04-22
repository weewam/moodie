'use strict';

moodieApp.controller('DiscoverCtrl', function ($scope, discoverService, AuthService) {
	$scope.year = function(movie){
		return movie.release_date.substring(0,4);	
     }
     
	$scope.movies = function(){
		return discoverService.currentSearch;		
	}
	

	$scope.getGenres = function(movie){
		return discoverService.getGenres(movie);
	}
	
	$scope.getWatchlist = function(){
		AuthService.watchList.query({});
	}
	
	$scope.isInWatchlist = function(id){
		AuthService.watchList.get({ 'movie_id' : id });
	}
	
	$scope.removeFromWatchlist = function(id){
		AuthService.watchList.delete({ 'movie_id' : id });
	}
	
	$scope.addToWatchlist = function(id, name, year, poster){
       AuthService.watchList.save({ 'movie_id' : id }, { 'name' : name, 'year' : year, 'poster' : poster });
	}
});
