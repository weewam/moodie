/* 
  User model
*/
moodieApp.factory('User', function() {
    var UserClass = function(data) {
        //Template
        var user = {
          id: '',
          name: '',
          email: '',
          avatar: ''
        };

        user = data;

        this.getName = function() {
          return user.name; 
        };

        this.getEmail = function() {
          return user.email; 
        };

        this.getAvatar = function() {
          return user.avatar; 
        };
    }

    return UserClass;
});