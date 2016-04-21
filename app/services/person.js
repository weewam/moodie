/* 
    Person model
*/
moodieApp.factory('personService', function ($resource) {
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
        person.birth_place = data.place_of_birth;
        person.picture = data.profile_path;
        person.background = data.profile_path;

        //Populate filmography list
    	person.filmography = [];

        if (data.credits.cast.length > data.credits.crew.length) {
            for (var i = 0; i < data.credits.cast.length; i++) {
                var movie = {};

                movie.id = data.credits.cast[i].id;
                movie.name = data.credits.cast[i].original_title;
                movie.date = data.credits.cast[i].release_date;
                movie.poster = data.credits.cast[i].poster_path;

                person.filmography.push(movie);
            };
        } else {
            for (var i = 0; i < data.credits.crew.length; i++) {
                var movie = {};

                movie.id = data.credits.crew[i].id;
                movie.name = data.credits.crew[i].original_title;
                movie.date = data.credits.crew[i].release_date;
                movie.poster = data.credits.crew[i].poster_path;

                person.filmography.push(movie);
            };
        }

        return person;
    }

    this.getPerson = function() {
    	return person;
    }

    this.loadPerson = $resource('http://api.themoviedb.org/3/person/:id', { api_key : 'b0a5b20c668da9800946e85508c3c44f', append_to_response : 'credits,trailers'});

    return this;
});
