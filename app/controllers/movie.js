'use strict';

moodieApp.controller('MovieCtrl', function($scope, $window, $routeParams, movieService) {
    $scope.largeHeader = true;
    $scope.movie = movieService.getMovie();

    $scope.getYear = function(date) {
        return $scope.movie.release_date.substring(0, 4);
    };

    $scope.getRuntimeFormatted = function(time) {
      var hours = Math.floor($scope.movie.runtime/60),
          minutes = $scope.movie.runtime%60;

      return hours + "H " + minutes + "M";
    };

    $scope.getBackgroundUrl = function(id) {
      return "http://image.tmdb.org/t/p/w780" + id; 
    };

    $scope.getPersonPictureUrl = function(id) {
      return "http://image.tmdb.org/t/p/w185" + id;
    };

    $scope.myScrollEvent = function() {
        var el = document.getElementById('backdrop');

        $scope.largeHeader = ($window.pageYOffset < (el.offsetHeight - 60));
        console.log($window.pageYOffset < (el.offsetHeight - 60));
    }

    movieService.loadMovie.get({ id : $routeParams.MovieID }, function(data) {
        movieService.setMovie(data);
    }, function(data) {
        $scope.status = 'not-found';
    });
});