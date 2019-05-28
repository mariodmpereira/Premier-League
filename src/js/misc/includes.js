// navbar creation that is shared among all of the html's

(function navBar() {
    const BODY = document.getElementsByTagName('body')[0],
        DIV = document.createElement('div'),
        NAV = document.createElement('nav'),
        A_IMG = document.createElement('a'),
        IMG = document.createElement('img'),
        UL = document.createElement('ul');
    let li, aLinks;

    (function appendChilds() {
        DIV.appendChild(NAV)
        NAV.appendChild(A_IMG)
        A_IMG.appendChild(IMG)
        NAV.appendChild(UL)
    })();

    (function setAttributes() {
        DIV.setAttribute('class', 'wrapper')
        DIV.setAttribute('id', 'nav')
        NAV.setAttribute('class', 'd-flex container')
        A_IMG.setAttribute('href', '/src/index.html')
        IMG.setAttribute('class', 'img-fluid')
        IMG.setAttribute('src', '/src/img/logos/premier-league-logo.png')
        IMG.setAttribute('alt', 'Premier League Logo')
        UL.setAttribute('class', 'nav align-self-center ml-auto')
    })();

    (function createLinks() {
        const ARR = ['homepage', 'table', 'clubs'];
        for (let i = 0; i < ARR.length; i++) {
            li = document.createElement('li')
            aLinks = document.createElement('a')
            UL.appendChild(li);
            li.setAttribute('class', 'nav-item')
            li.appendChild(aLinks)
            aLinks.setAttribute('class', 'nav-link')
            if (ARR[i] === ARR[0]) {
                aLinks.setAttribute('href', '/src/index.html')
            } else {
                aLinks.setAttribute('href', `/src/html/${ARR[i]}.html`)
            }
            aLinks.textContent = ARR[i]
        }

    })();
    BODY.prepend(DIV);
})();