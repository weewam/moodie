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

        console.log(data);
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