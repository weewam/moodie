'use strict';

moodieApp.controller('SignupCtrl', function ($scope, $http, $auth, User) {
    $scope.credentials = {
        name: '',
        email: '',
        password: ''
    };

    $scope.signUp = function(credentials) {
        $http.post('http://52.16.209.9/register', JSON.stringify(credentials)).then(function(response){
            $scope.user = new User(response.data);
        });
    };
});