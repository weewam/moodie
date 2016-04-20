'use strict';

moodieApp.controller('watchlistCtrl', function ($scope, AuthService) {

	//$scope.watchlist = AuthService.watchlist;
		
	//$scope.user = AuthService.user;

	$scope.user = {
		name: 'Lina',
		avatar: 'http://x.cdn-expressen.se/images/af/dd/afdd4906a0943db75b32a90cb67da4b7/original.jpg'
	}

	$scope.watchlist = [
		{
		name: '12 Years of Slave',
		id: 76203,
		poster: "http://image.tmdb.org/t/p/w185/kb3X943WMIJYVg4SOAyK0pmWL5D.jpg",
		year: 2013
		},
		{
		name: '12 Years of Slave',
		id: 76203,
		poster: "http://image.tmdb.org/t/p/w185/kb3X943WMIJYVg4SOAyK0pmWL5D.jpg",
		year: 2013
		},
		{
		name: '12 Years of Slave',
		id: 76203,
		poster: "http://image.tmdb.org/t/p/w185/kb3X943WMIJYVg4SOAyK0pmWL5D.jpg",
		year: 2013
		}];


});
