'use strict';

moodieApp.controller('PersonCtrl', function($scope, $window, $routeParams, $http, PersonService) {
    $scope.largeHeader = true;
    $scope.person = PersonService.getPerson();

    $scope.getBirthTown = function() {
        return ($scope.person.birth_place) ? $scope.person.birth_place.split(",")[0] : null;
    }

    $scope.getBackgroundUrl = function() {
      return ($scope.person.background) ? "http://image.tmdb.org/t/p/w780" + $scope.person.background : null; 
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

    $scope.scrollEvent = function() {
        var el = document.getElementById('backdrop');

        $scope.largeHeader = ($window.pageYOffset < (el.offsetHeight - 60));
    }

    PersonService.loadPerson.get({ id : $routeParams.PersonID }, function(data) {
        PersonService.setPerson(data);

        var arr = [];

        for (var i = 0; i < $scope.person.filmography.length;  i += 3) {
            arr.push($scope.person.filmography.slice(i, i+3));
        }

        $scope.person.filmography = arr;
        $window.scrollTo(0,0)
    });
});
