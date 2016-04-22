'use strict';

moodieApp.controller('watchlistCtrl', function ($scope, AuthService) {
	$scope.editMode = false;
		
	$scope.user = AuthService.getUser();
	
	$scope.watchlist = [];

	$scope.getWatchlist = function(){
		AuthService.watchList.query({}, function(data){
			$scope.watchlist = data;
		});
	}

	$scope.toggleEditMode = function(){
		$scope.editMode = !($scope.editMode);
	}

	$scope.removeFromWatchlist = function(id){
		AuthService.watchList.delete({ 'movie_id' : id });
	}

	$scope.getWatchlist();
});
