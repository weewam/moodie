'use strict';


moodieApp.controller('DiscoverCtrl', function($scope, Discover) {
	$scope.search = function() {
	
	$scope.status = "Searching...";
   		Discover.MovieSearch.get(function(data){
     			$scope.movies=data.Results;
     			$scope.status = "Showing " + data.Results.length + " results";
   			},function(data){
     				$scope.status = "There was an error";
   			});
 		}

)};
