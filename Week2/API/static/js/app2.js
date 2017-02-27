(function () {
  "use strict";

  var sections = {
    toggle: function() {

    }
  };

  var routes = {
    init: function() {

    }
  };

/*
* Create app object
* @param {String} url with API url
 */

  var app = {
    init: function(){
      this.getData('http://rijks.website', function(data) {
        console.log(data);
      });
    },
    getData: function(url, callback) {
      var request = new XMLHttpRequest();

      request.open('GET', url, true);

      request.addEventListener('load', function() {
        var data = JSON.parse(request.responseText);

        callback(data);
      });

      request.send();
    }
  };

  app.init();

})();




var request = new XMLHttpRequest();

request.open('GET', 'https://api.themoviedb.org/3/movie/upcoming?api_key=5e48b23867c38eac28c83b9ed7e14521&language=en-US&page=1', true);

request.addEventListener('load', function() {
  var response = JSON.parse(request.responseText);
  console.log(response);





  var upcomingMovies = response.results;

  upcomingMovies.forEach(function(poster) {
    document.querySelector('#upcomingMovies').innerHTML += '<img src="https://image.tmdb.org/t/p/w500' + poster.poster_path + '" />';
  });
});

request.send();
