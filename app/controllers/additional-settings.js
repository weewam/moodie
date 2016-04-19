'use strict';

moodieApp.controller('AdditionalSettingsCtrl', function($scope) {
    var currentYear = new Date().getFullYear();

    $scope.yearSlider = {
        min: currentYear - 15,
        max: currentYear,
        options: {
            floor: 1970,
            ceil: currentYear
        }
    };

    $scope.ratingSlider = {
        min: 5,
        max: 10,
        options: {
            floor: 0,
            ceil: 10
        }
    };
});
