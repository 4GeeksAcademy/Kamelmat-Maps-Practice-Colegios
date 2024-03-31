/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function () {

  let cole = [
    'La Salle',
    'San Andrés',
    'San Jorge'
  ];

  let grado = [
    '1ro',
    '2do',
    '3ro',
    '4to',
    '5to'
  ]
  let división = [
    'A',
    'B',
    'C'
  ]

  let textMap = '<ul class="list-group">'
  textMap += '<li class="list-group-item bg-primary text-light">Colegios()</li>'

  cole.map((iterator) => {
    grado.map((item) => {
      división.map((element) => {
        textMap += ` 
          <li class="list-group-item">
          ${iterator}${item}${element}
        </li>
        `
      })
    })
  })


  textMap += '</ul>';

  document.querySelector('#colegios').innerHTML = textMap;


}
