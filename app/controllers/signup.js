'use strict';

moodieApp.controller('SignupCtrl', function ($scope, $http, $auth, AuthService) {
    $scope.credentials = {
        name: '',
        email: '',
        password: ''
    };

    $scope.signUp = function(credentials) {
	AuthService.signUp(credentials);
    };
});
