/* 
  Authenticaion Service,
  should probably been named userService
  Handles all user related calls.
*/
moodieApp.factory('AuthService', function($http, $auth) {
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
            $http.post('http://52.16.209.9/auth/facebook').then(handleSuccess, handleError);
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

	this.watchlist = [];


    return this;
});
