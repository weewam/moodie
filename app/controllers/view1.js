'use strict';

moodieApp.controller('View1Ctrl', function ($scope, Movie, AuthService) {
	$scope.getMovie = function() {
		//return Movie.getCurrentMovie();
		return 3;
	}

	$scope.getUser = function() {
		//return User.getCurrentUser();
		return 2;
	}
});
