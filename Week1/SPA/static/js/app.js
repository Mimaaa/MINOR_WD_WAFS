/*Zoals je in de README hebt gelezen heeft Pierre mij geholpen met het begrijpen van
de opdracht en hoe de code in elkaar "hoort" te zitten. Op het moment van schrijven
ben ik wel vergeten wat er op enkele plekken ook alweer gebeurd. Ik zal dat volgende
week even opfrissen. Excuus.*/

// Hier wordt een IFFE aangemaakt
(function() {

  // Hier zorg ik ervoor dat ik de strict mode aan heb staan
  "use strict";

  // Hier zeg ik dat de "homepagina" de hash "home" moet meekrijgen
  window.location.hash = '#home';

  // Hier selecteer ik alle secties en zeg ik dat de eerste child niet geselecteerd moet
  // worden waardoor ik er uiteindelijk voor zorg dat de navigatie niet verborgen wordt.
  var sectionsRemove = document.querySelectorAll('section:not(:first-child');

  // Hier maak ik weer gebruik van een IFFE om de for loop uit de global scope te houden.
  // In de for loop wordt gekeken naar hoeveel secties er zijn en die worden vervolgens verborgen.
  (function () {
    for (var i = 0; i < sectionsRemove.length; i++) {
      sectionsRemove[i].classList.add('hidden');
    }
  })();

  // Hier maak ik het app object aan met daarin een functie waarin routes wordt aangeroepen.
  var app = {
    init: function() {
      routes.init();

    }
  };

  /* Hier maak ik een routes object aan met daarin een functie. In de functie maak ik
  verschillende variabelen aan die uiteindelijk de locatie en het toggelen gaan verzorgen.*/

  /* Als ik het goed begrijp gebeurd het volgende: in het routes object zeg ik dat "location"
  het huidige scherm is (window). Vervolgens zeg ik dat oldHash de locatie + hash (ID) is.
  Vervolgens zeg ik dat de newHash het ID van de oude Hash overneemt?*/
  var routes = {
    init: function(){
        var location = window.location;
        var oldHash = location.hash;
        var newHash = oldHash;

          // Hieronder wordt de hashchange listener aangemaakt, de route wordt bepaald
          // en uiteindelijk wordt naar de toggle functie verwezen.
          window.onhashchange = function(){
            oldHash = newHash;
            newHash = location.hash;

            // Hier wordt route aangemaakt met daarin de old en new properties.
            var route = {
              old: oldHash,
              new: newHash
            };

              sections.toggle(route);
          };
    }
  };

  // Ik log hier het routes object om te kijken wat er gebeurd.
  console.log(routes);

  // Het object sections wordt hier aangemaakt met daarin de toggle functie die als
  // parameter de route heeft meegekregen.
  var sections = {
    toggle: function(route){

      // Hier zijn twee variabelen aangemaakt waarin ik verwijs naar de old en new properties
      // uit het routes object.
      var oldScreen = document.querySelector(route.old);
      var newScreen = document.querySelector(route.new);

      // Hier worden de schermen toegevoegd(weergegeven) of verwijderd (niet-weergegeven).
      oldScreen.classList.add('hidden');
      newScreen.classList.remove('hidden');
    }
  };
  app.init();
}());
