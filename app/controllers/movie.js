'use strict';

moodieApp.controller('MovieCtrl', function($scope, $window, $routeParams, movieService) {
    $scope.largeHeader = true;
    $scope.movie = movieService.getMovie();

    $scope.getYear = function() {
        return $scope.movie.release_date.substring(0, 4);
    };

    $scope.getRuntimeFormatted = function() {
      var hours = Math.floor($scope.movie.runtime/60),
          minutes = $scope.movie.runtime%60;

      return hours + "H " + minutes + "M";
    };

    $scope.getBackgroundUrl = function() {
      return "http://image.tmdb.org/t/p/w780" + $scope.movie.background; 
    };

    $scope.getAvatarUrl = function(actor_id) {
      return "http://image.tmdb.org/t/p/w185" + actor_id;
    };

    $scope.myScrollEvent = function() {
        var el = document.getElementById('backdrop');

        $scope.largeHeader = ($window.pageYOffset < (el.offsetHeight - 60));
    }

    movieService.loadMovie.get({ id : $routeParams.MovieID }, function(data) {
        movieService.setMovie(data);
        $window.scrollTo(0,0)
    });
});