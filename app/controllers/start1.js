'use strict';

moodieApp.controller('Start1Ctrl', function ($scope, Discover) {
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
                     
             
	$scope.genres = function(){
		return Discover.getGenres();
			
	}    
	console.log($scope.genres()) 
   
	$scope.addGenre = function(genre){
		Discover.addGenre(genre)
	}

	$scope.setRating = function($scope.ratingSlider.min,$scope.ratingSlider.max){
		Discover.setRating($scope.ratingSlider.min,$scope.ratingSlider.max);
	}

	$scope.setRelYear = function($scope.yearSlider.min,$scope.yearSlider.max) {
		Discover.setRelYear($scope.yearSlider.min,$scope.yearSlider.max); 
	}

		

});
