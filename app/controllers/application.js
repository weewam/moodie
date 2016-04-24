'use strict';

moodieApp.controller('ApplicationController', function($scope, $location, UserService) {
    $scope.user = UserService.getUser();

    //User is not logged in
    if (!UserService.getUser() && ($location.$$path === "/signin" || $location.$$path === "/signup")) {
        $location.path("/signin");
    };
    
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
