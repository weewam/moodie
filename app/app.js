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
		when('/facebook', {
			templateUrl: 'views/facebook.html',
			controller: 'FacebookCtrl'
		}).
			otherwise({
			redirectTo: '/'
		});

	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $authProvider.facebook({
     	clientId: '1711083572465398',
     	url: 'http://52.16.209.9/auth/facebook/callback',
     	responseType: 'token'
    });
});