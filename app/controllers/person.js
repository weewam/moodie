'use strict';

moodieApp.controller('PersonCtrl', function($scope, $window, $routeParams, $http, personService) {
    $scope.person = personService.getPerson();

    $scope.getBirthTown = function() {
        return ($scope.person.birth_place) ? $scope.person.birth_place.split(",")[0] : null;
    }

    $scope.getBackgroundUrl = function() {
      return "http://image.tmdb.org/t/p/w780" + $scope.person.picture; 
    };

    $scope.getAvatarUrl = function() {
      return "http://image.tmdb.org/t/p/w185" + $scope.person.picture;
    };

    $scope.getYear = function(date) {
        return (date) ? date.substring(0, 4) : null;
    };

    $scope.getPosterUrl = function(movie_id) {
      return "http://image.tmdb.org/t/p/w185" + movie_id;
    };

    personService.loadPerson.get({ id : $routeParams.PersonID }, function(data) {
        personService.setPerson(data);

        var arr = [];

        for (var i = 0; i < $scope.person.filmography.length;  i += 3) {
            arr.push($scope.person.filmography.slice(i, i+3));
        }

        $scope.person.filmography = arr;
        $window.scrollTo(0,0)
    });
});
