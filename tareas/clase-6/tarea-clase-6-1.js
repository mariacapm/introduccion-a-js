/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $botonEnviar = document.querySelector("#boton-enviar");

let $cantidadGrupoFamiliar;

$botonEnviar.onclick = function () {
  $cantidadGrupoFamiliar = document.querySelector(
    "#cantidad-miembros-familia"
  ).value;

  let i;
  for (i = 1; i <= $cantidadGrupoFamiliar; i++) {
    crearLabel(i);
    crearInput(i);
  }
  quitarHidden($botonCalcular);
  moverBotonCalcular();
  deshabilitarBoton($botonEnviar);
  return false;
};

function deshabilitarBoton(boton) {
  boton.setAttribute("disabled", "");
}

function crearInput(i) {
  const nodoInput = document.createElement("input");
  nodoInput.type = "number";
  nodoInput.name = "persona" + i;
  nodoInput.id = "persona" + i;
  document.querySelector("form").appendChild(nodoInput);
}

function crearLabel(i) {
  const nodoLabel = document.createElement("label");
  nodoLabel.htmlFor = "persona" + i;
  nodoLabel.innerText = "Edad Integrante " + i + ":";
  document.querySelector("form").appendChild(nodoLabel);
  const saltoLinea = document.createElement("br");
  nodoLabel.before(saltoLinea);
}

function quitarHidden(elemento) {
  elemento.removeAttribute("hidden");
}

function moverBotonCalcular() {
  document
    .querySelector("form")
    .insertAdjacentElement(
      "beforeend",
      document.getElementById("boton-calcular")
    );
}

const $botonCalcular = document.querySelector("#boton-calcular");

const $resultados = document.querySelector("#resultados");

$botonCalcular.onclick = function () {
  obtenerNombreId();
  obtenerEdades();
  quitarHidden($resultados);
  calcularMayor();
  calcularMenor();
  calcularPromedio();
};

const arrayId = [];

function obtenerNombreId() {
  for (i = 1; i <= $cantidadGrupoFamiliar; i++) {
    const id = "persona" + i;
    arrayId.push(id);
  }
}

let arrayEdades = [];

function obtenerEdades() {
  let nombreId;
  let valorElemento;
  for (i = 0; i < arrayId.length; i++) {
    nombreId = arrayId[i];
    valorElemento = Number(document.getElementById(nombreId).value);
    arrayEdades.push(valorElemento);
  }
}

function calcularMenor() {
  arrayEdades.sort(function (a, b) {
    return a - b;
  });
  const menor = arrayEdades[0];
  document.querySelector("#menor").insertAdjacentText("beforeend", menor);
}

function calcularMayor() {
  arrayEdades.sort(function (a, b) {
    return b - a;
  });
  const mayor = arrayEdades[0];
  document.querySelector("#mayor").insertAdjacentText("beforeend", mayor);
}

function calcularPromedio() {
  let suma = 0;
  let edad;
  for (edad of arrayEdades) {
    suma += edad;
  }
  let promedio = suma / arrayEdades.length;
  document.querySelector("#promedio").insertAdjacentText("beforeend", promedio);
}

const $botonResetear = document.querySelector("#boton-resetear");

$botonResetear.onclick = function () {
  location.reload();
};

