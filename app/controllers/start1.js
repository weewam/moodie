'use strict';

moodieApp.controller('Start1Ctrl', function ($scope, Model) {


	$scope.search = function() {
   		Model.MovieSearch.get(function(data){
     			$scope.movies=data.Results;
   			});
 		}

search();

});
