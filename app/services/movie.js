/* 
  Movie Service
*/
moodieApp.factory('movieService', function($resource) {
    //Template
    var movie = {
        id: null,
        title: null,
        rating: null,
        synopsis: null,
        runtime: null,
        release_date: "",
        background : null,
        trailer: null,
        genres: [],
        cast: [],
        crew: []
    };

    this.setMovie = function(data) {
        //Populate with actual data
        movie.id = data.id;
        movie.title = data.title;
        movie.rating = data.vote_average;
        movie.synopsis = data.overview;
        movie.runtime = data.runtime;
        movie.background = data.backdrop_path;
        movie.release_date = data.release_date;
        movie.trailer = (data.trailers && data.trailers.youtube.length) ? data.trailers.youtube[0] : null;
        console.log(movie.trailer);

        movie.genres = [];
        //Populate genre list with necessary data
        for (var i = 0; i < data.genres.length; i++) {
            movie.genres.push(data.genres[i].name);
        };

        movie.cast = [];
        //Populate cast list with necessary data
        for (var i = 0; i < data.credits.cast.length; i++) {
            var person = {};

            person.id = data.credits.cast[i].id;
            person.name = data.credits.cast[i].name;
            person.character = data.credits.cast[i].character;
            person.avatar = data.credits.cast[i].profile_path;

            movie.cast.push(person);
        };

        movie.crew = [];
        //Populate cast list with necessary data
        for (var i = 0; i < data.credits.crew.length; i++) {
            var person = {};

            person.id = data.credits.crew[i].id,
            person.name = data.credits.crew[i].name,
            person.job = data.credits.crew[i].job

            movie.crew.push(person);
        };

        return movie;
    }

    this.getId = function() {
        return movie.id;
    }

    this.getCast = function() {
        return movie.cast;
    }

    this.getCrew = function() {
        return movie.crew;
    }

    this.getMovie = function() {
        return movie;
    }

    this.loadMovie = $resource('http://api.themoviedb.org/3/movie/:id', { api_key : 'b0a5b20c668da9800946e85508c3c44f', append_to_response : 'credits,trailers'});
    return this;
});
