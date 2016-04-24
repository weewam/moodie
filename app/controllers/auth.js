'use strict';

moodieApp.controller('AuthCtrl', function($scope, $window, $location, $auth, $http, UserService) {
    var handleSuccess = function(response) {
        UserService.setUser(response.data);
        $window.location.href = "/#/welcome";
    }
    
    $scope.credentials = {
        name: '',
        email: '',
        password: ''
    };

    $scope.signInFacebook = function() {
        $auth.authenticate('facebook').then(function(){
            $http.post('http://52.16.209.9/auth/facebook', { token : localStorage.getItem('satellizer_token') }).then(handleSuccess, function(response) {
            });
        });
    };

    $scope.signIn = function(credentials) {
        $http.post('http://52.16.209.9/auth/email', JSON.stringify(credentials)).then(handleSuccess, function(response) {
			$scope.err = response.data.message;

        });
    };

    $scope.signUp = function(credentials) {
        $http.post('http://52.16.209.9/register', JSON.stringify(credentials)).then(handleSuccess, function(response) {
            $scope.err = response.data.message;
        });
    };

    $scope.signOut = function() {
        UserService.signOut();
        $window.location.href = "/#/signin";
    };
});
