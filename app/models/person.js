/* 
    Person model
*/
var Person = function(data) {
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

    //Populate with actual data
    person.id = data.id;
    person.name = data.name;
    person.biography = data.biography;
    person.birthday = data.birthday;
    person.birth_place = (data.place_of_birth) ? data.place_of_birth : null;
    person.picture = (data.profile_path) ? "http://image.tmdb.org/t/p/w185" + data.profile_path : null;
    person.background = (data.profile_path) ? "http://image.tmdb.org/t/p/w780" + data.profile_path : null;

    //Populate filmography list
    for (var i = 0; i < data.credits.crew.length; i++) {
        var movie = {};

        movie.id = data.credits.crew[i].id;
        movie.name = data.credits.crew[i].original_title;
        movie.year = data.credits.crew[i].release_date.split("-")[0];
        movie.poster = (data.credits.crew[i].poster_path) ? "http://image.tmdb.org/t/p/w185" + data.credits.crew[i].poster_path : null;

        person.filmography.push(movie);
    };

    for (var i = 0; i < data.credits.cast.length; i++) {
        var movie = {};

        movie.id = data.credits.cast[i].id;
        movie.name = data.credits.cast[i].original_title;
        movie.year = data.credits.cast[i].release_date.split("-")[0];
        movie.poster = (data.credits.cast[i].poster_path) ? "http://image.tmdb.org/t/p/w185" + data.credits.cast[i].poster_path : null;

        person.filmography.push(movie);
    };

    return person;
}