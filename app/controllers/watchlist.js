'use strict';

moodieApp.controller('watchlistCtrl', function ($scope, UserService) {
	$scope.editMode = false;
		
	$scope.user = UserService.getUser();
	
	$scope.watchlist = [];

	$scope.getWatchlist = function(){
		UserService.watchList.query({}, function(data){
			$scope.watchlist = data;
		});
	}

	$scope.toggleEditMode = function(){
		$scope.editMode = !($scope.editMode);
	}

	$scope.removeFromWatchlist = function(id){
		UserService.watchList.delete({ 'movie_id' : id });
	}

	$scope.getWatchlist();
});
