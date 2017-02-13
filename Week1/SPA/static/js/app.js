// Hier wordt een IFFE aangemaakt.
(function() {
  // Strict mode wordt aangezet.
  "use strict";

  // Ik maak hier drie objecten aan: app, routes en sections.
  // In het app-object wordt een functie aangemaakt waarin het routes-object wordt aangesproken met de init property.
  var app = {
    init: function() {
      routes.init();
    }
  };
  // In het routes-object wordt het sections-object aangesproken met de toggle property.
  var routes = {
    init: function(){
              sections.toggle();
              // Hier wordt gechecked welke hash op het moment aanwezig is.
              window.addEventListener('hashchange', sections.toggle, false);
          }
  };
  // In het sections object krijgt de toggle property een functie mee.
  var sections = {
    toggle: function(){
      // Ik heb hier een ternory staan waarin de route var wordt aangemaakt die window.location.hash representeert.
      // Als die gelijk staat aan niks dan krijgt die de hash #start mee.
      // Is er wel een hash aanwezig dan gaat 'ie naar die hash.
      var route = window.location.hash === '' ? '#start' : window.location.hash;
      // Met een querySelectorAll hide ik alle sections binnen het main element.
      document.querySelectorAll('main>section').forEach(function (section){
        section.classList.add('hidden');
      });
      //Met een querySelector haal ik de huidige route op en zet deze op visible.
      document.querySelector(route).classList.remove('hidden');
    }
  };
  app.init();
}());
