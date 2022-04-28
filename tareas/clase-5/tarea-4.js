//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

let arrayNumeros = [];

function ingresarNumeros() {
  let pregunta;
  let crearLista = document.querySelector("ol");

  function preguntar() {
    pregunta = prompt(
      "Vamos a crear una lista de números. Ingresa un número y haz clic a aceptar, luego ingresa otro número, y así sucesivamente. Cuando hayas terminado, haz clic en Cancelar"
    );
  }
  preguntar();
  
  if (isNaN(pregunta) || pregunta == null || pregunta.trim().length === 0) {
    alert('El valor ingresado no es un número');
  } else {
    while (!isNaN(pregunta) && pregunta !== null && pregunta.trim().length !== 0) {
      let number = Number(pregunta);
      arrayNumeros.push(number);

      let elementoLista = document.createElement("li");
      crearLista.appendChild(elementoLista);
      elementoLista.innerText = number;

      preguntar();
    }
    mostrarElementosOcultos();
  }
}


function mostrarElementosOcultos() {
  const elementosOcultos = document.querySelectorAll(".hidden");
  elementosOcultos.forEach((em) => (em.style.visibility = "visible"));
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
