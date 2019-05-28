// loads the correct club page according to the index stored in the local storage (please check clubs.js)

import { playersList } from '/src/js/data/players.js';

// fetch the clicked club index from clubs.html
let getClubIndex = (function () {
  const clubIndex = localStorage.getItem('clubIndex')

  return {
    clubIndex: clubIndex
  };
})();

// update the page title
(function pageTitle() {
  const TITLE = document.getElementsByTagName('title')[0];

  TITLE.textContent += playersList[getClubIndex.clubIndex].club;
})();

// create the top club banner
(function createTopCard() {
  const CONTAINER = document.getElementsByClassName('js-container')[0];

  let divCard, divRow, divCol4, img, divCol8, divBody, h1Title;

  (function createElements() {
    divCard = document.createElement('div')
    divRow = document.createElement('div')
    divCol4 = document.createElement('div')
    img = document.createElement('img')
    divCol8 = document.createElement('div')
    divBody = document.createElement('div')
    h1Title = document.createElement('h1')
  })();

  (function appendChilds() {
    divCard.appendChild(divRow)
    divRow.appendChild(divCol4)
    divCol4.appendChild(img)
    divRow.appendChild(divCol8)
    divCol8.appendChild(divBody)
    divBody.appendChild(h1Title)
  })();

  (function setAttributes() {
    divCard.setAttribute('class', 'card mb-3')
    divRow.setAttribute('class', 'row no-gutters align-items-center')
    divCol4.setAttribute('class', 'col-md-4')
    img.setAttribute('src', `/src/img/logos/${playersList[getClubIndex.clubIndex].club}.svg`)
    img.setAttribute('class', 'card-img')
    img.setAttribute('alt', `${playersList[getClubIndex.clubIndex].club} Logo`)
    divCol8.setAttribute('class', 'col-md-8')
    divBody.setAttribute('class', 'card-body')
    h1Title.setAttribute('class', 'card-title text-right')
    h1Title.textContent = playersList[getClubIndex.clubIndex].club
  })();
  CONTAINER.appendChild(divCard);
})();

// create the card deck with all of the club players
(function createCardDeck() {
  const CONTAINER = document.getElementsByClassName('js-container')[0]

  let i, divDeck, divCard, divFooter, img, small;

  (function cardDeck() {
    const clubIndex = getClubIndex.clubIndex;
    for (i = 0; i < playersList[clubIndex].players.length; i++) {
      createElements()
      appendChilds()
      setAttributes()
      createDecks()
    }

    function createElements() {
      divCard = document.createElement('div')
      img = document.createElement('img')
      divFooter = document.createElement('div')
      small = document.createElement('small')
    }

    function appendChilds() {
      divCard.appendChild(img)
      divCard.appendChild(divFooter)
      divFooter.appendChild(small)
    }

    function setAttributes() {
      divCard.setAttribute('class', 'card card-player mx-auto')
      img.setAttribute('class', 'mx-auto player-photo')
      divFooter.setAttribute('class', 'card-footer')
      small.setAttribute('class', 'text-muted')
      img.setAttribute('src', `/src/img/players/${playersList[clubIndex].club}/${playersList[clubIndex].players[i].name}.png`)
      small.textContent = `${playersList[clubIndex].players[i].name}`
    }

    function createDecks() {
      if (i % 4 === 0) {
        divDeck = document.createElement('div')
        divDeck.setAttribute('class', 'card-deck')
        CONTAINER.appendChild(divDeck)
      }
      divDeck.appendChild(divCard)
    }
  })();
})();