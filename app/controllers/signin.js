'use strict';

moodieApp.controller('SigninCtrl', function ($scope, AuthService) {
    $scope.user = null;
    $scope.credentials = {
        email: '',
        password: ''
    };

    $scope.signInFacebook = function() {
	AuthService.facebookSignIn();
    };

    $scope.signIn = function(credentials) {
	console.log(AuthService.emailSignIn(credentials));
    };
});
