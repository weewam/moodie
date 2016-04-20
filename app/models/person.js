/* 
    Person model
*/
moodieApp.factory('Person', function ($resource) {

    //Template
    var person = {
        id : null,
        name : null,
        biography : null,
        birthday : null,
        birth_place : null,
        picture: null,
        background: null,
        filmography: [],
        roles: []
    };
this.setPerson = function(data) {
    //Populate with actual data
    person.id = data.id;
    person.name = data.name;
    person.biography = data.biography;
    person.birthday = data.birthday;
    person.birth_place = (data.place_of_birth) ? data.place_of_birth : null;
    person.picture = (data.profile_path) ? "http://image.tmdb.org/t/p/w185" + data.profile_path : null;
    person.background = (data.profile_path) ? "http://image.tmdb.org/t/p/w780" + data.profile_path : null;

    //Populate filmography list
	person.filmography = [];
    for (var i = 0; i < data.credits.crew.length; i++) {
        var movie = {};
        movie.id = data.credits.crew[i].id;
        movie.name = data.credits.crew[i].original_title;
        movie.year = (data.credits.crew[i].release_date) ? data.credits.crew[i].release_date.substring(0,4) : null;
        movie.poster = (data.credits.crew[i].poster_path) ? "http://image.tmdb.org/t/p/w185" + data.credits.crew[i].poster_path : null;

        person.filmography.push(movie);
    };

    for (var i = 0; i < data.credits.cast.length; i++) {
        var movie = {};

        movie.id = data.credits.cast[i].id;
        movie.name = data.credits.cast[i].original_title;
        movie.year = (data.credits.cast[i].release_date) ? data.credits.cast[i].release_date.substring(0,4) : null;
        movie.poster = (data.credits.cast[i].poster_path) ? "http://image.tmdb.org/t/p/w185" + data.credits.cast[i].poster_path : null;

        person.filmography.push(movie);
    };

    return person;
}

this.getPerson = function() {
	return person;
}

return this;
});
