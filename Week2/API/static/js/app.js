(function () {
  "use strict";

  var app = {
    init: function(){
      this.getData();
    },
    getData: function() {
      var request = new XMLHttpRequest();

      request.open('GET', 'https://api.themoviedb.org/3/movie/upcoming?api_key=5e48b23867c38eac28c83b9ed7e14521&language=en-US&page=1', true);
      request.addEventListener('load', function() {
        var response = JSON.parse(request.responseText);
        sections.getMovie(response);

      });
      request.send();
    }
  };

  var routes = {
    init: function() {

    }
  };

  var sections = {
    getMovies: function(response) {
      response.forEach(function(poster) {
        document.querySelector('#upcomingMovies').innerHTML += '<img src="https://image.tmdb.org/t/p/w500' + poster.poster_path + '" />';
    });

  app.init();
}};














request.send();
