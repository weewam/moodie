/* 
  Movie model
*/
moodieApp.factory('Movie', function ($http) {
    var MovieClass = function(data) {
        //Template
        var movie = {
          id: null,
          title: null,
          synopsis: null,
          runtime: null,
          release_date: null,
          background : null,
          trailer: null,
          genres: [],
          cast: [],
          crew: []
        };
        
        //Populate with actual data
        movie.id = data.id;
        movie.title = data.title;
        movie.synopsis = data.overview;
        movie.runtime = data.runtime;
        movie.background = "http://image.tmdb.org/t/p/w780/" + data.backdrop;
        movie.release_date = data.release_date;
        movie.trailer = (data.trailers.youtube) ? data.trailers.youtube.source : null;

        //Populate genre list with necessary data
        for (var i = 0; i < data.genres.length; i++) {
          movie.genres.push(data.genres[i].name);
        };

        //Populate cast list with necessary data
        for (var i = 0; i < data.credits.cast.length; i++) {
          var cast = {};
          
          cast.id = data.credits.cast[i].id;
          cast.name = data.credits.cast[i].name;
          cast.character = data.credits.cast[i].character;
          cast.avatar = (data.credits.cast[i].profile_path) ? "http://image.tmdb.org/t/p/w185/" + data.credits.cast[i].profile_path : null;

          movie.cast.push(cast);
        };

        //Populate cast list with necessary data
        for (var i = 0; i < data.credits.crew.length; i++) {
          var crew = {};
          
          crew.id = data.credits.crew[i].id,
          crew.name = data.credits.crew[i].name,
          crew.job = data.credits.crew[i].job

          movie.crew.push(crew);
        };
        
        //Getters
        this.getId = function() {
          return movie.id; 
        };

        this.getTitle = function() {
          return movie.title; 
        };

        this.getYear = function() {
          return parseInt(movie.release_date.split("-")[0]); 
        };

        this.getSynopsis = function() {
          return movie.synopsis; 
        };

        this.getRuntime = function() {
          var hours = Math.floor(movie.runtime/60),
              minutes = movie.runtime%60;

          return hours + "H " + minutes + "M";
        };

        this.getReleaseDate = function() {
          return movie.release_date; 
        };

        this.getBackground = function() {
          return movie.background; 
        };

        this.getTrailer = function() {
          return movie.trailer; 
        };

        this.getGenres = function() {
          return movie.genres; 
        };

        this.getGenres = function() {
          return movie.genres; 
        };

        this.getCast = function() {
          return movie.cast; 
        };

        this.getCrew = function() {
          return movie.crew; 
        };
    }

    return MovieClass;
});