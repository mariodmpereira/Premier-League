// creates the structure of the table

import { clubs } from '/src/js/data/clubs.js';

// create the table
(function createTable() {
    const CONTAINER = document.getElementsByClassName('js-container')[0],
        TABLE = document.createElement('table'),
        THEAD = document.createElement('thead'),
        TBODY = document.createElement('tbody'),
        THEAD_DATA = ['Pos', 'Club', 'GP', 'W', 'D', 'L', 'GF', 'GA', 'GD', 'Pts'];

    let tr, th, td;

    // create the table header
    (function header() {
        tr = document.createElement('tr');
        for (let i = 0, z = THEAD_DATA.length; i < z; i++) {
            th = document.createElement('th')
            th.setAttribute('scope', 'col')
            th.textContent = THEAD_DATA[i];
            tr.appendChild(th)
        }

        TABLE.setAttribute('class', 'table')
        TABLE.appendChild(THEAD)
        THEAD.appendChild(tr);
    })();

    // create the table body
    (function body() {
        const SELECTORS = ['js-table-position', 'js-table-name', 'js-table-gp', 'js-table-w', 'js-table-d', 'js-table-l', 'js-table-gf', 'js-table-ga', 'js-table-gd', 'js-table-pts'];
        for (let i = 0, z = clubs.length; i < z; i++) {
            tr = document.createElement('tr')
            for (let j = 0, z = THEAD_DATA.length; j < z; j++) {
                td = document.createElement('td')
                tr.appendChild(td)
                td.setAttribute('class', SELECTORS[j])
            }
            TBODY.appendChild(tr)
        }
        TABLE.appendChild(TBODY)
    })();

    CONTAINER.appendChild(TABLE)

})()