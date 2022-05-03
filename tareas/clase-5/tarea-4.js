//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

let numero;
let arrayNumeros = [];

document.querySelector("#boton-enviar").onclick = function enviar() {
  guardarNumero();
  crearElementoLista();
  ingresarNumerosArray();
  return false;
};

function guardarNumero() {
  numero = Number(document.querySelector("#numero").value);
}

      preguntar();
    }
    mostrarElementosOcultos();
  }
function crearElementoLista() {
  let elementoLista = document.createElement("li");
  let crearLista = document.querySelector("ol");
  crearLista.appendChild(elementoLista);
}


function mostrarElementosOcultos() {
  const elementosOcultos = document.querySelectorAll(".hidden");
  elementosOcultos.forEach((em) => (em.style.visibility = "visible"));
}

function calcularPromedio() {
  let suma = 0;

  for (let numero of arrayNumeros) {
    suma += numero;
  }

  let promedio = suma / arrayNumeros.length;
  document.querySelector("#promedio").innerText = promedio;
}

function calcularNumeroMasPequenio() {
  arrayNumeros.sort(function (a, b) {
    return a - b;
  });
  let numeroMasPequenio = arrayNumeros[0];
  document.querySelector("#numero-mas-pequenio").innerText = numeroMasPequenio;
}

function calcularNumeroMasGrande() {
  arrayNumeros.sort(function (a, b) {
    return b - a;
  });
  let numeroMasGrande = arrayNumeros[0];
  document.querySelector("#numero-mas-grande").innerText = numeroMasGrande;
}

function calcularNumeroMasFrecuente() {
  let contador = 0;
  let masFrecuente = 1;
  let valor;
  for (let i = 0; i < arrayNumeros.length; i++) {
    for (let j = i; j < arrayNumeros.length; j++) {
      if (arrayNumeros[i] === arrayNumeros[j]) contador++;
      if (masFrecuente < contador) {
        masFrecuente = contador;
        valor = arrayNumeros[i];
      }
    }
    contador = 0;
  }
  if (valor !== undefined) {
    document.querySelector("#numero-mas-frecuente").innerText = valor;
  } else {
    document.querySelector("#numero-mas-frecuente").innerText =
      "ningún número se repite";
  }
}

ingresarNumeros();
calcularPromedio();
calcularNumeroMasPequenio();
calcularNumeroMasGrande();
calcularNumeroMasFrecuente();
