/* 
  Authenticaion Service
  handles sign in and sign up
*/
moodieApp.factory('AuthService', function($http) {
    var user_id = null,
        user = null;

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

    return this;
});