'use strict';

moodieApp.controller('SigninCtrl', function ($scope, $http, $auth, User) {
    $scope.user = null;
    $scope.credentials = {
        email: '',
        password: ''
    };

    $scope.signInFacebook = function() {
        $auth.authenticate('facebook').then(function(){
            $http.post('http://52.16.209.9/auth/facebook').then(function(response) {
                $scope.user = new User(response.data);
            });
        });
    };

    $scope.signIn = function(credentials) {
        $http.post('http://52.16.209.9/auth/email', JSON.stringify(credentials)).then(function(response){
            $scope.user = new User(response.data);
        });
    };
});