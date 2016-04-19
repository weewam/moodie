'use strict';

moodieApp.controller('MovieCtrl', function($scope, $routeParams, $http) {
    //template
    $scope.movie = {
        id: null,
        title: null,
        rating: null,
        synopsis: null,
        runtime: null,
        release_date: null,
        background : null,
        trailer: null,
        genres: [],
        cast: [],
        crew: []
    };

    var load = function(id) {
        var req = {
            method: 'GET',
            url: 'http://api.themoviedb.org/3/movie/' + id + '?api_key=b0a5b20c668da9800946e85508c3c44f&append_to_response=credits,trailers',
            skipAuthorization: true
        }

        $http(req).then(function(response){
            $scope.movie = new Movie(response.data);
        });
    }

    //Getters
    $scope.getId = function() {
      return $scope.movie.id; 
    };

    $scope.getRating = function() {
      return $scope.movie.rating; 
    };

    $scope.getTitle = function() {
      return $scope.movie.title; 
    };

    $scope.getSynopsis = function() {
      return $scope.movie.synopsis; 
    };

    $scope.getYear = function() {
        if ($scope.movie.release_date == null) {
            return null;
        } else {
            return parseInt($scope.movie.release_date.split("-")[0]); 
        }
    };

    $scope.getRuntime = function() {
      var hours = Math.floor($scope.movie.runtime/60),
          minutes = $scope.movie.runtime%60;

      return hours + "H " + minutes + "M";
    };

    $scope.getReleaseDate = function() {
      return $scope.movie.release_date; 
    };

    $scope.getBackground = function() {
      return $scope.movie.background; 
    };

    $scope.getTrailer = function() {
      return $scope.movie.trailer; 
    };

    $scope.getGenres = function() {
      return $scope.movie.genres; 
    };

    $scope.getGenres = function() {
      return $scope.movie.genres; 
    };

    $scope.getCast = function() {
      return $scope.movie.cast; 
    };

    $scope.getCrew = function() {
      return $scope.movie.crew; 
    };

    load($routeParams.MovieID);
});