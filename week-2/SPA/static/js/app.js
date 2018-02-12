(function() {
  "use strict";

  const appSettings = {
    urlUpcoming: 'https://api.themoviedb.org/3/movie/upcoming?api_key=5e48b23867c38eac28c83b9ed7e14521&language=en-US&page=1'
  }

  const app = {
    init: function() {
      routes.init();
    }
  };

  const fetchData = {
    onReady: fetch(appSettings.urlUpcoming)
      .then(res => res.json())
      .then(data => data.results
        .filter(movie => (
          movie.vote_count > 100
        ))
        .map(createItem)
        .reduce((html, li) => html += li)
      )
      .then(html => document.getElementById('upcomingMovies').innerHTML = html)
      .catch(console.error),
  };

  const routes = {
    init: function(){
      sections.toggle();
      window.addEventListener('hashchange', sections.toggle, false);
    }
  };

  const sections = {
    toggle: function(){
      var route = window.location.hash === '' ? '#start' : window.location.hash;
      document.querySelectorAll('main>section').forEach(function (section){
        section.classList.add('hidden');
      });
      document.querySelector(route).classList.remove('hidden');
    }
  };

  function createItem({ title, overview, vote_count, poster_path }) {
    return `
    <li>
      <h2>${title}</h2>
      <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="Poster from a movie with the following story: ${overview}">
      <p>${overview}</p>
      <p>${vote_count}</p>
    </li>
  `;
  }

  app.init();

}());
