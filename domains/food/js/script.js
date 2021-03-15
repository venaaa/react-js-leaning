'use strict';
window.addEventListener('DOMContentLoaded', () => {

    const tabs = require('./modules/tabs'),
          modal = require('./modules/modal'),
          timer = require('./modules/timer'),
          cards = require('./modules/cards'),
          calc = require('./modules/calc'),
          forms = require('./modules/forms'),
          slider = require('./modules/slider');

    tabs();
    modal();
    timer();
    cards();
    calc();
    forms();
    slider();

    //  -------------------- // jsonplaceholder ------------------------
    fetch('http://localhost:3000/menu')
        .then(data => data.json())
    // .then(res => console.log(res));
});

    // npx json-server --watch PATH
    // npx json-server --watch .\domains\food\059-db.json