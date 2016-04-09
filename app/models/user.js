/* 
    Movie model
*/
var User = function(data) {
    var user = {
        name: '',
        email: '',
        avatar: ''
    };

    user.name = data.name;
    user.email = data.email;
    user.avatar = data.data;

    return user;
}