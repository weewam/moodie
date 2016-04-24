'use strict';

moodieApp.controller('MovieCtrl', function($scope, $window, $routeParams, MovieService) {
    $scope.largeHeader = true;
    $scope.movie = MovieService.getMovie();

    $scope.getYear = function() {
        return $scope.movie.release_date.substring(0, 4);
    };

    $scope.getRuntimeFormatted = function() {
      var hours = Math.floor($scope.movie.runtime/60),
          minutes = $scope.movie.runtime%60;

      return hours + "H " + minutes + "M";
    };

    $scope.getBackgroundUrl = function() {
      return ($scope.movie.background) ? "http://image.tmdb.org/t/p/w780" + $scope.movie.background : null; 
    };

    $scope.getTrailerUrl = function() {
      return ($scope.movie.trailer) ? "https://www.youtube.com/embed/" + $scope.movie.trailer.source : null; 
    };

    $scope.getAvatarUrl = function(actor_id) {
      return "http://image.tmdb.org/t/p/w185" + actor_id;
    };

    $scope.scrollEvent = function() {
        var el = document.getElementById('backdrop');

        $scope.largeHeader = ($window.pageYOffset < (el.offsetHeight - 60));
    }

    MovieService.loadMovie.get({ id : $routeParams.MovieID }, function(data) {
        MovieService.setMovie(data);
        $window.scrollTo(0,0)
    });
});