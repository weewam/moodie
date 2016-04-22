'use strict';

moodieApp.controller('StartCtrl', function ($scope, discoverService, AuthService) { 
    var currentYear = new Date().getFullYear();
    $scope.user = AuthService.getUser();

    $scope.yearSlider = {
        min: discoverService.minYear,
        max: discoverService.maxYear,
        options: {
            floor: 1970,
            ceil: currentYear,
			onChange: function(id, minValue, maxValue) {
				discoverService.minYear = minValue;
				discoverService.maxYear = maxValue;
	   	 	}
			
        }
    };

    $scope.ratingSlider = {
        min: discoverService.minRat,
        max: discoverService.maxRat,
        options: {
            floor: 0,
            ceil: 10,
	    	onChange: function(id, lowValue, highValue) {
				discoverService.minRat = lowValue;
				discoverService.maxRat = highValue;
	    	}
        },
    };

	$scope.genres = function(){
		return discoverService.genres;
	}
   
	$scope.addGenre = function(genre){
		discoverService.addGenre(genre)
	}

	$scope.search = function() {
        $scope.status = "Searching...";

		discoverService.MovieSearch.get({with_genres:discoverService.setChosen(), 'vote_average.gte':discoverService.minRat, 'vote_average.lte':discoverService.maxRat, 'release_date.gte':(discoverService.minYear + '-01-01'), 'release_date.lte':(discoverService.maxYear + '-12-31')}, function(data) {
				
            $scope.movies=data.results;
            discoverService.currentSearch = data.results;
            $scope.status = "Showing " + data.results.length + " results";

		}, function(data){
            $scope.status = "There was an error";
		});
 	}	
});
