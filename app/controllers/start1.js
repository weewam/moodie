'use strict';

moodieApp.controller('Start1Ctrl', function ($scope, Discover) {
                     
             
	$scope.genres = function(){
		return Discover.getGenres();
			
	}    
	console.log($scope.genres()) 
   
	$scope.addGenre = function(genre){
		Discover.addGenre(genre)
	}


		

});
