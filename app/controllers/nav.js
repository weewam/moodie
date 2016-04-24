'use strict';

moodieApp.controller('NavController', function($scope, $window, $location) {
  console.log("called");
    $scope.backButton = function() { 
      console.log("called");
        $window.history.back();
    };
});
