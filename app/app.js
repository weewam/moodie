'use strict';

// Declare app level module which depends on views, and components
var moodieApp = angular.module('moodie', ['ngRoute','satellizer']);

moodieApp.config(function($routeProvider, $httpProvider, $authProvider) {
	$routeProvider.
		when('/', {
			templateUrl: 'views/view1.html',
			controller: 'View1Ctrl'
		}).
		when('/view2', {
			templateUrl: 'views/view2.html',
			controller: 'View2Ctrl'
		}).
		when('/signin', {
			templateUrl: 'views/signin.html',
			controller: 'SigninCtrl'
		}).
		when('/signup', {
			templateUrl: 'views/signup.html',
			controller: 'SignupCtrl'
		}).
		when('/movie/:MovieID', {
			templateUrl: 'views/movie.html',
			controller: 'MovieCtrl'
		}).
			otherwise({
			redirectTo: '/'
		});

	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];

	$authProvider.facebook({
		clientId: '1711083572465398',
		url: 'http://52.16.209.9/auth/facebook',
		responseType: 'token'
	});
});