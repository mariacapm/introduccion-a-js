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
