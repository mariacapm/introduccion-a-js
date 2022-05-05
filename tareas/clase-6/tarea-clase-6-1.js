/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
function crearLabel(i) {
  const nodoLabel = document.createElement("label");
  nodoLabel.htmlFor = "persona" + i;
  nodoLabel.innerText = "Edad Integrante " + i + ":";
  document.querySelector("form").appendChild(nodoLabel);
  const saltoLinea = document.createElement("br");
  nodoLabel.before(saltoLinea);
}

