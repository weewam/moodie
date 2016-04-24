'use strict';

moodieApp.controller('ApplicationController', function($scope, $window, $location, UserService) {
    $scope.user = UserService.getUser();

    if(!$scope.user) {
        $location.path("signin");
    }

    $scope.largeHeader = true;
    
    /*
     * Helper functions
     */
    $scope.getYear = function(date) {
        return date.substring(0, 4);
    };

    $scope.getLargePicUrl = function(src) {
      return (src) ? "http://image.tmdb.org/t/p/w780" + src : null; 
    };

    $scope.getSmallPicUrl = function(src) {
      return (src) ? "http://image.tmdb.org/t/p/w185" + src : null; 
    };

    /*
     * Event helpers
     */
    $scope.scrollEvent = function() {
        var el = document.getElementById('backdrop');
        $scope.largeHeader = ($window.pageYOffset < (el.offsetHeight - 60));
    }

    $scope.backButton = function() { 
      console.log("called");
        $window.history.back();
    };

    /*
     * Watchlist functions
     */
    $scope.isInWatchlist = function(id){
        UserService.watchList.get({ 'movie_id' : id });
    }
    
    $scope.removeFromWatchlist = function(id){
        UserService.watchList.delete({ 'movie_id' : id });
    }
    
    $scope.addToWatchlist = function(id, name, year, poster){
       UserService.watchList.save({ 'movie_id' : id }, { 'name' : name, 'year' : year, 'poster' : poster });
    }
});
