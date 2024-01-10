/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document
    .querySelector("#btnGenerarExcusa")
    .addEventListener("click", function() {
      generarExcusa();
    });

  console.log("Hello Rigo from the console!");
};

const parte1 = ["Mi papá", "Mi gato", "Tu novia", "Mi hermana", "Mi sobrina"];

const parte2 = [
  "me quitó el móvil",
  "enfermó",
  "dijo que no podías",
  "lo rompió",
  "me atrapó"
];

const parte3 = [
  "ayer",
  "esta mañana",
  "anoche",
  "el mes pasado",
  "el 31 de diciembre"
];

const parte4 = [
  "en mi coche.",
  "en el parque.",
  "en Paris.",
  "en Hawaii",
  "en tus sueños."
];

const excusas = [parte1, parte2, parte3, parte4];

function generarExcusa() {
  console.log("Generando excusa...");
  const excusaGenerada =
    getRandomElement(parte1) +
    " " +
    getRandomElement(parte2) +
    " " +
    getRandomElement(parte3) +
    " " +
    getRandomElement(parte4);

  document.getElementById("excusa").textContent = excusaGenerada;
}

function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
