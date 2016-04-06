'use strict';

moodieApp.controller('FacebookCtrl', function ($scope, $http, $auth) {
    $scope.authenticate = function(provider) {
      $auth.authenticate(provider);
    };

    $scope.sendRequest = function(provider) {
      $http.get('http://52.16.209.9/', "test", {
        headers: {'Content-Type': 'text/plain'}
      });
    };
});