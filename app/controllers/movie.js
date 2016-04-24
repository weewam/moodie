'use strict';

moodieApp.controller('MovieCtrl', function($scope, $window, $routeParams, MovieService) {
    $scope.movie = MovieService.getMovie();

    $scope.getRuntimeFormatted = function() {
      var hours = Math.floor($scope.movie.runtime/60),
          minutes = $scope.movie.runtime%60;

      return hours + "H " + minutes + "M";
    };

    $scope.getTrailerUrl = function() {
      return ($scope.movie.trailer) ? "https://www.youtube.com/embed/" + $scope.movie.trailer.source : null; 
    };

    MovieService.loadMovie.get({ id : $routeParams.MovieID }, function(data) {
        MovieService.setMovie(data);
        $window.scrollTo(0,0)
    });
});