//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

const botonEnviar = document.querySelector("button");

botonEnviar.onclick = function () {
  const primerNombre = document.querySelector("#primer-nombre").value;
  const segundoNombre = document.querySelector("#segundo-nombre").value;
  const apellido = document.querySelector("#apellido").value;
  const edad = document.querySelector("#edad").value;

  const datosUsuario = `${primerNombre} ${segundoNombre} ${apellido}. Edad: ${edad}`;
  document.querySelector("textarea").removeAttribute("hidden");
  document.querySelector("textarea").innerText = datosUsuario;

  document.querySelector(
    "h1"
  ).innerText = `Bienvenido, ${primerNombre} ${segundoNombre} ${apellido}!`;

  return false;
};

function validarTextos(texto) {
  if (texto === "") {
    return "El campo no puede estar vacío";
  }

  if (texto.length <= 1) {
    return "El campo debe tener más de un caracter";
  }

  if (!isNaN(texto)) {
    return "El valor ingresado no es un texto";
  }
  return "";
}

}
