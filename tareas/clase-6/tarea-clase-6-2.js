/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const aniadir = document.querySelector("#aniadir");

let contador = 1;

aniadir.onclick = function () {
  if (contador >= 1) {
    contador++;
    crearLabel();
    crearInput();
  } else {
    contador = 1;
    contador++;
    crearLabel();
    crearInput();
  }
  return false;
};

const quitar = document.querySelector("#quitar");

quitar.onclick = function () {
  if (contador >= 1) {
    contador--;
    eliminarUltimoHijo();
    eliminarUltimoHijo();
  } else {
    contador = 1;
  }
};

function crearLabel() {
  const nodoLabel = document.createElement("label");
  nodoLabel.htmlFor = "salario" + contador;
  nodoLabel.innerText = "Integrante " + contador + ":";
  document.querySelector("div").appendChild(nodoLabel);
}

function crearInput() {
  const nodoInput = document.createElement("input");
  nodoInput.id = "salario" + contador;
  nodoInput.type = "number";
  document.querySelector("div").appendChild(nodoInput);
}

function eliminarUltimoHijo() {
  const div = document.querySelector("div");
  if (div.hasChildNodes()) {
    div.removeChild(div.lastChild);
  }
}

let arraySalarios = [];

const botonCalcular = document.querySelector("#calcular");

botonCalcular.onclick = function () {
  contarInputs();
  crearArray();
  quitarHidden();
  calcularMayor();
  calcularMenor();
  calcularPromedioAnual();
  calcularPromedioMensual();
  deshabilitarBoton(botonCalcular);
};

let cantidadInputs;

function contarInputs() {
  let inputs = document.getElementsByTagName("input");
  cantidadInputs = inputs.length;
}

function crearArray() {
  let salario;
  for (let i = 1; i <= cantidadInputs; i++) {
    const nombreId = document.querySelector("#salario" + i);
    salario = Number(nombreId.value);
    if (salario !== null && salario !== "" && salario !== 0) {
      arraySalarios.push(salario);
    }
  }
}

function quitarHidden() {
  document.querySelector("main").removeAttribute("hidden");
}

function calcularMayor() {
  arraySalarios.sort(function (a, b) {
    return b - a;
  });
  const mayorSalario = arraySalarios[0];
  document
    .querySelector("#mayor")
    .insertAdjacentText("beforeend", mayorSalario);
}

function calcularMenor() {
  arraySalarios.sort(function (a, b) {
    return a - b;
  });
  const menorSalario = arraySalarios[0];
  document
    .querySelector("#menor")
    .insertAdjacentText("beforeend", menorSalario);
}

let promedioAnual;
function calcularPromedioAnual() {
  let suma = 0;
  for (i = 0; i < arraySalarios.length; i++) {
    suma += arraySalarios[i];
  }
  promedioAnual = suma / arraySalarios.length;
  document
    .querySelector("#promedio-anual")
    .insertAdjacentText("beforeend", promedioAnual);
}

const ANIO = 12;

function calcularPromedioMensual() {
  const promedioMensual = promedioAnual / ANIO;
  document
    .querySelector("#promedio-mensual")
    .insertAdjacentText("beforeend", promedioMensual);
}

function deshabilitarBoton(boton) {
  boton.setAttribute("disabled", "");
}
