'use strict';

moodieApp.controller('watchlistCtrl', function ($scope, UserService) {
	$scope.editMode = false;

	$scope.user = UserService.getUser();

	$scope.queryWatchlist = function(){
		UserService.watchList.query({}, function(data){
			UserService.setWatchlist(data);

			$scope.watchlist = UserService.getWatchlist();
		});
	}

	$scope.toggleEditMode = function(){
		$scope.editMode = !($scope.editMode);
	}

	$scope.removeFromWatchlist = function(id){
		UserService.watchList.delete({ 'movie_id' : id }, function(){
			$scope.queryWatchlist();
		})
	}

	$scope.queryWatchlist();
});
