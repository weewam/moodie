'use strict';

moodieApp.controller('Start1Ctrl', function ($scope, Discover) {
    var currentYear = new Date().getFullYear();

    $scope.yearSlider = {
        min: Discover.minYear,
        max: Discover.maxYear,
        options: {
            floor: 1970,
            ceil: currentYear,
			onChange: function(id, minValue, maxValue) {
				Discover.minYear = minValue;
				Discover.maxYear = maxValue;
	   	 	}
			
        }
    };

    $scope.ratingSlider = {
        min: Discover.minRat,
        max: Discover.maxRat,
        options: {
            floor: 0,
            ceil: 10,
	    	onChange: function(id, lowValue, highValue) {
				Discover.minRat = lowValue;
				Discover.maxRat = highValue;
	    	}
        },
    };
                     
             
	$scope.genres = function(){
		return Discover.getGenres();
			
	}    

   
	$scope.addGenre = function(genre){
		Discover.addGenre(genre)
	}

		$scope.search = function() {
	
		$scope.status = "Searching...";
   			Discover.MovieSearch.get({with_genres:Discover.setChosen(), 'vote_average.gte':Discover.minRat, 'vote_average.lte':Discover.maxRat, 'release_date.gte':(Discover.minYear + '-01-01'), 'release_date.lte':(Discover.maxYear + '-12-31')}, function(data){

     				$scope.movies=data.results;
					console.log(data.results);
     				$scope.status = "Showing " + data.results.length + " results";
   					},function(data){
     				$scope.status = "There was an error";
   			});
 		}

		

});
