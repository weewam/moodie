/* 
  User Service
*/
moodieApp.factory('UserService', function($http, $auth, $resource) {
    /* Auth */
    var user = null

    try{
        var user = JSON.parse(localStorage.getItem('user'));
    } catch(e){
        var user = {
            id: null,
            name: "",
            email: "",
            avatar: ""
        };
    }

    this.getUser = function() {
        return user;
    }

    this.getUserId = function() {
        return user ? user.id : null;
    }

    this.setUser = function(data) {
        user = data;
        localStorage.setItem('user', JSON.stringify(data));
    }   

    this.signOut = function() {
        user = null;
    }

    /* Watchlist stuff */
    this.watchList = $resource('http://52.16.209.9/user/:user_id/watchlist/:movie_id', { 'user_id' : this.getUserId() }, {
                        add : { method : 'POST', params : { 'movie_id' : 2 }, url : 'http://52.16.209.9/user/:user_id/watchlist/:movie_id' }
                    });


    return this;
});
