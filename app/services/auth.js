/* 
  Authenticaion Service,
  should probably been named userService
  Handles all user related calls.
*/
moodieApp.factory('AuthService', function($http, $auth, $resource) {
    /* Auth */
    var user_id = 1,
        user = {
            id: 1,
            name: "Ibrahim Asfadai",
            email: "ibrahim.asfadai@gmail.com",
            avatar: "https://graph.facebook.com/v2.5/10156705467595290/picture?width=1920"
        };

    var handleSuccess = function(response) {
        user_id = response.data.id;
        user = new User(response.data);
        return { 'user' : user };
    };

    var handleError = function(response) {
        return { 'error' : response.data.message };
    };

    this.facebookSignIn = function() {
        $auth.authenticate('facebook').then(function(){
            $http.post('http://52.16.209.9/auth/facebook', { token : localStorage.getItem('satellizer_token') }).then(handleSuccess, handleError);
        }); 
    }

    this.emailSignIn = function(credentials) {
        $http.post('http://52.16.209.9/auth/email', JSON.stringify(credentials)).then(handleSuccess, handleError);
    }

    this.signUp = function(credentials) {
        $http.post('http://52.16.209.9/register', JSON.stringify(credentials)).then(handleSuccess, handleError);
    }

    this.signOut = function() {
        user = null;
        user_id = null;
    }

    this.getUser = function() {
        return user;
    }

    this.setUser = function(data) {
        user = data;
    }

    /* Watchlist stuff */
    this.watchList = $resource('http://52.16.209.9/user/:user_id/watchlist/:movie_id', { 'user_id' : user_id }, {
                        add : { method : 'POST', params : { 'movie_id' : 2 }, url : 'http://52.16.209.9/user/:user_id/watchlist/:movie_id' }
                    });


    return this;
});
