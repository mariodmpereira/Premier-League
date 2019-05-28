// fills all the table with the correct information generated from table-data-fetch.js

import { clubs } from '/src/js/data/clubs.js';
import { gamesData } from '/src/js/pages/table-data-fetch.js';

// push the information from the tabe-data-fetch.js into the clubsArr
let clubsData = (function () {
    let clubsArr = [];

    for (let i = 0; i < clubs.length; i++) {
        clubsArr.push(
            {
                club: clubs[i].name,
                gp: gamesData.gp[i],
                w: gamesData.w[i],
                d: gamesData.d[i],
                l: gamesData.l[i],
                gf: gamesData.gf[i],
                ga: gamesData.ga[i],
                gd: gamesData.gd[i],
                pts: gamesData.pts[i]
            }
        )
    };

    // sorts the table by points and then goal difference
    clubsArr.sort((a, b) => b.pts - a.pts || b.gd - a.gd);

    return {
        clubsArr: clubsArr
    }
})();

// fill the table with the clubsData.clubsArr
(function fillTable() {
    const CLUBS_ARR = clubsData.clubsArr,
        CLUB_POS = document.getElementsByClassName('js-table-position'),
        CLUB_NAME = document.getElementsByClassName('js-table-name'),
        CLUB_GP = document.getElementsByClassName('js-table-gp'),
        CLUB_W = document.getElementsByClassName('js-table-w'),
        CLUB_D = document.getElementsByClassName('js-table-d'),
        CLUB_L = document.getElementsByClassName('js-table-l'),
        CLUB_GF = document.getElementsByClassName('js-table-gf'),
        CLUB_GA = document.getElementsByClassName('js-table-ga'),
        CLUB_GD = document.getElementsByClassName('js-table-gd'),
        CLUB_PTS = document.getElementsByClassName('js-table-pts');

    for (let i = 0, z = clubs.length; i < z; i++) {
        CLUB_POS[i].textContent = i + 1
        CLUB_NAME[i].textContent = CLUBS_ARR[i].club
        CLUB_GP[i].textContent = CLUBS_ARR[i].gp
        CLUB_W[i].textContent = CLUBS_ARR[i].w
        CLUB_D[i].textContent = CLUBS_ARR[i].d
        CLUB_L[i].textContent = CLUBS_ARR[i].l
        CLUB_GF[i].textContent = CLUBS_ARR[i].gf
        CLUB_GA[i].textContent = CLUBS_ARR[i].ga
        CLUB_GD[i].textContent = CLUBS_ARR[i].gd
        CLUB_PTS[i].textContent = CLUBS_ARR[i].pts
    }
})();