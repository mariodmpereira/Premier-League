// generates a list of all the clubs and once clicked, it stores the clicked club index to the local storage

import { clubs } from '/src/js/data/clubs.js';

// create the card deck with all of the clubs
(function createCardDeck() {
  const CONTAINER = document.getElementsByClassName('js-container')[0];

  let i, divDeck, divCard, a, divFooter, img, small;

  (function cardDeck() {
    function createElements() {
      divCard = document.createElement('div')
      a = document.createElement('a')
      img = document.createElement('img')
      divFooter = document.createElement('div')
      small = document.createElement('small')
    }

    function appendChilds() {
      divCard.appendChild(a)
      a.appendChild(img)
      a.appendChild(divFooter)
      divFooter.appendChild(small)
    }
    
    function setAttributes() {
      divCard.setAttribute('class', 'card')
      a.setAttribute('href', `/src/html/club.html`)
      img.setAttribute('class', 'mx-auto club-logo')
      divFooter.setAttribute('class', 'card-footer')
      small.setAttribute('class', 'text-muted')
      img.setAttribute('src', `/src/img/logos/${clubs[i].name}.svg`)
      small.textContent = `${clubs[i].name}`
    }

    function createDecks() {
      if (i % 4 === 0) {
        divDeck = document.createElement('div')
        divDeck.setAttribute('class', 'card-deck')
        CONTAINER.appendChild(divDeck)
      }
      divDeck.appendChild(divCard)
    }

    for (i = 0; i < clubs.length; i++) {
      createElements()
      appendChilds()
      setAttributes()
      createDecks()
    }
  })();
})();

// stores the selected club index on the local storage
(function setClubIndex() {
  const CARDS = document.getElementsByClassName('card');

  for (let i = 0, z = CARDS.length; i < z; i++) {
    CARDS[i].addEventListener('click', function() {
      localStorage.setItem('clubIndex', i)
    });
  }
})();
