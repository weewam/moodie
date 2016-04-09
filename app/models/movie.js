/* 
    Movie model
*/
var Movie = function(data) {
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
    movie.background = "http://image.tmdb.org/t/p/w780" + data.backdrop_path;
    movie.release_date = data.release_date;
    movie.trailer = (data.trailers.youtube) ? data.trailers.youtube[0].source : null;
    
    //Populate genre list with necessary data
    for (var i = 0; i < data.genres.length; i++) {
        movie.genres.push(data.genres[i].name);
    };

    //Populate cast list with necessary data
    for (var i = 0; i < data.credits.cast.length; i++) {
        var person = {};

        person.id = data.credits.cast[i].id;
        person.name = data.credits.cast[i].name;
        person.character = data.credits.cast[i].character;
        person.avatar = (data.credits.cast[i].profile_path) ? "http://image.tmdb.org/t/p/w185" + data.credits.cast[i].profile_path : null;

        movie.cast.push(person);
    };

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