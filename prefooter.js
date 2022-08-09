/**
 * Prefooter
 */

//Llamo al elemento creado en html
const prefooter = document.getElementById("prefooter");

//Creo otro contenedor vacio
const divPrefooter = document.createElement("div");
divPrefooter.classList.add('col-12', 'align-center');

//Le creo un contenedor donde se va a alojar el h2

const prefooterH2 = document.createElement("h2");
prefooterH2.textContent = "Sumate a nuestra comunidad"
prefooterH2.classList.add('pre-footer');

const prefooterH3 = document.createElement("h3");
prefooterH3.textContent = "¡Vivi tu experiencia N5!";

prefooter.appendChild(divPrefooter);
divPrefooter.appendChild(prefooterH2);
divPrefooter.appendChild(prefooterH3);
