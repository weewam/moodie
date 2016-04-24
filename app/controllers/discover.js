'use strict';

moodieApp.controller('DiscoverCtrl', function ($scope, DiscoverService) {
	$scope.movies = function(){
		return DiscoverService.currentSearch;		
	}
});
