'use strict';

// Declare app level module which depends on views, and components
var moodieApp = angular.module('moodie', ['ngRoute','rzModule','satellizer','ngResource']);

moodieApp.config(function($routeProvider, $httpProvider, $authProvider) {
	$routeProvider.
		when('/', {
			templateUrl: 'views/start1.html',
			controller: 'Start1Ctrl'
		}).
		when('/additional-settings', {
			templateUrl: 'views/additional-settings.html',
			controller: 'AdditionalSettingsCtrl'
		}).
		when('/signin', {
			templateUrl: 'views/view1.html',
			controller: 'SigninCtrl'
		}).
		when('/signup', {
			templateUrl: 'views/view2.html',
			controller: 'SignupCtrl'
		}).
		when('/movie/:MovieID', {
			templateUrl: 'views/movie.html',
			controller: 'MovieCtrl'
		}).
		when('/person/:PersonID', {
			templateUrl: 'views/person.html',
			controller: 'PersonCtrl'
		}).
		when('/start1', {
			templateUrl: 'views/start1.html',
			controller: 'Start1Ctrl'
		}).
		when('/start2', {
			templateUrl: 'views/start2.html',
			controller: 'Start2Ctrl'
		}).
		when('/discover', {
			templateUrl: 'views/discover.html',
			controller: 'DiscoverCtrl'
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
