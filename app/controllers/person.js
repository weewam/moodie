'use strict';

moodieApp.controller('PersonCtrl', function($scope, $routeParams, $http, Person) {
    

	var load = function(id) {
        var req = {
            method: 'GET',
            url: 'http://api.themoviedb.org/3/person/' + id + '?api_key=b0a5b20c668da9800946e85508c3c44f&append_to_response=credits,trailers',
            skipAuthorization: true
        }

        $http(req).then(function(response){
            Person.setPerson(response.data);
			console.log("person", Person.getPerson());

        });
    }

	$scope.person = function (){
		return Person.getPerson();
	}

    load($routeParams.PersonID);
});
