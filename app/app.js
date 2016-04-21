'use strict';

// Declare app level module which depends on views, and components
var moodieApp = angular.module('moodie', ['ngRoute','rzModule','satellizer','ngResource']);

moodieApp.config(function($routeProvider, $httpProvider, $authProvider) {
	$routeProvider.
		when('/', {
			templateUrl: 'views/start1.html',
			controller: 'Start1Ctrl'
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
		when('/movie/:MovieID/full-cast', {
			templateUrl: 'views/movie-cast.html',
			controller: 'MovieCtrl'
		}).
		when('/movie/:MovieID/full-crew', {
			templateUrl: 'views/movie-crew.html',
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
		when('/watchlist', {
			templateUrl: 'views/watchlist.html',
			controller: 'watchlistCtrl'
		}).
			otherwise({
			redirectTo: '/'
		});

	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];

	$authProvider.httpInterceptor = false;
	$authProvider.facebook({
		clientId: '1711083572465398',
		url: 'http://52.16.209.9/auth/facebook',
		responseType: 'token'
	});
});

moodieApp.directive('whenScrolled', function($window, $timeout) {
    return function(scope, elm, attr) {
        var raw = elm[0],
        	throttle = false;

        //Credits to David Walsh
        function debounce(func, wait, immediate) {
			var timeout;
			return function() {
				var context = this, args = arguments;
				var later = function() {
					timeout = null;
					if (!immediate) func.apply(context, args);
				};
				var callNow = immediate && !timeout;
				clearTimeout(timeout);
				timeout = setTimeout(later, wait);
				if (callNow) func.apply(context, args);
			};
		};

        angular.element($window).bind('scroll', debounce(function() {
			scope.$apply(attr.whenScrolled);
		}, 10));

        angular.element($window).bind('resize', debounce(function() {
			scope.$apply(attr.whenScrolled);
		}, 20));

        scope.$on('$destroy', function() {
            angular.element($window).off('scroll');
        });
    };
});

