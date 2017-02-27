// Made us of the IIFE
(function(){

// Used strict mode
"use strict";

// Set all variables within the appSettings object
var appSettings = {
  upcomingMovies: document.querySelector('#upcomingMovies'),
  playingNow: document.querySelector('#playingNow'),
  topRated: document.querySelector('#topRated'),
  templateUpcomingMovies: Handlebars.compile(document.querySelector('#templateUpcomingMovies').innerHTML),
  templatePlayingNow: Handlebars.compile(document.querySelector('#templatePlayingNow').innerHTML),
  templateTopRated: Handlebars.compile(document.querySelector('#templateTopRated').innerHTML),
  urlUpcomingMovies: 'https://api.themoviedb.org/3/movie/upcoming?api_key=5e48b23867c38eac28c83b9ed7e14521&language=en-US&page=1',
  urlPlayingNow: 'https://api.themoviedb.org/3/movie/now_playing?api_key=5e48b23867c38eac28c83b9ed7e14521&language=en-US&page=1',
  urlTopRated: 'https://api.themoviedb.org/3/movie/top_rated?api_key=5e48b23867c38eac28c83b9ed7e14521&language=en-US&page=1',
  html:  '',
};

  // App object with a function that downlads all the needed data from the API
  var app = {
    init: function () {
      getData.init(appSettings.urlUpcomingMovies);
      getData.init(appSettings.urlPlayingNow);
      getData.init(appSettings.urlTopRated);
    }
  };

  // Routes are getting defined : still not working
  var routes = {
    init: function(){
              sections.toggle();
              window.addEventListener('hashchange', sections.toggle, false);
          }
  };

  // Sections object with a toggle method that has a function
  var sections = {
    toggle: function(){
      // Used a ternary that looks if there is section present and which sections gets the homepage
      var route = window.location.hash === '' ? '#upcomingMovies' : window.location.hash;
      // With the querySelectorAll I'm hiding all the sections within the main element
      document.querySelectorAll('main>section').forEach(function (section){
        section.classList.add('hidden');
      });
      document.querySelector(route).classList.remove('hidden');
    }
  };


  // Render object with a function that gets the data param
  // I use this function to
  var render = function (data) {
      data.results.forEach(function (item) {
        appSettings.html = appSettings.templateUpcomingMovies(item);
        appSettings.upcomingMovies.innerHTML += appSettings.html;
      console.log(data);
    });
  };



  // get data object
  var getData = {
    init: function (url) {
      aja()
      .url(url)
      .on('success', function(data){
         render(data);
      })
      .go();
    }
  };

  app.init();

})();


// MICROLIBS:
// Handlebars (http://handlebarsjs.com/)
// Aja (http://krampstudio.com/aja.js/)
