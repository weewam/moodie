'use strict';

moodieApp.controller('StartCtrl', function ($scope, DiscoverService) { 
    var currentYear = new Date().getFullYear();

    $scope.yearSlider = {
        min: DiscoverService.minYear,
        max: DiscoverService.maxYear,
        options: {
            floor: 1970,
            ceil: currentYear,
			onChange: function(id, minValue, maxValue) {
				DiscoverService.minYear = minValue;
				DiscoverService.maxYear = maxValue;
	   	 	}
			
        }
    };

    $scope.ratingSlider = {
        min: DiscoverService.minRat,
        max: DiscoverService.maxRat,
        options: {
            floor: 0,
            ceil: 10,
	    	onChange: function(id, lowValue, highValue) {
				DiscoverService.minRat = lowValue;
				DiscoverService.maxRat = highValue;
	    	}
        },
    };

	$scope.genres = function(){
		return DiscoverService.genres;
	}
   
	$scope.addGenre = function(genre){
		DiscoverService.addGenre(genre)
	}

	$scope.search = function() {
        $scope.status = "Searching...";

		DiscoverService.MovieSearch.get({with_genres:DiscoverService.setChosen(), 'vote_average.gte':DiscoverService.minRat, 'vote_average.lte':DiscoverService.maxRat, 'release_date.gte':(DiscoverService.minYear + '-01-01'), 'release_date.lte':(DiscoverService.maxYear + '-12-31')}, function(data) {
	
		
		
            $scope.movies=data.results;
            DiscoverService.currentSearch = data.results;
            $scope.status = "Showing " + data.results.length + " results";

		}, function(data){
            $scope.status = "There was an error";
		});
 	}	
});
