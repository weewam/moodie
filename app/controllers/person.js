'use strict';

moodieApp.controller('PersonCtrl', function($scope, $window, $routeParams, $http, PersonService) {
    $scope.person = PersonService.getPerson();

    $scope.getBirthTown = function() {
        return ($scope.person.birth_place) ? $scope.person.birth_place.split(",")[0] : null;
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
