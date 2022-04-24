//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.


const botonEnviar = document.querySelector('#enviar');

let horas;
let minutos;
let segundos;

let sumaHoras = 0;
let sumaMinutos = 0;
let sumaSegundos = 0;

botonEnviar.onclick = function(){

    horas = Number(document.querySelector('#clase-horas').value);
    minutos = Number(document.querySelector('#clase-minutos').value);
    segundos = Number(document.querySelector('#clase-segundos').value);

    sumaHoras = sumaHoras + horas;
    sumaMinutos = sumaMinutos + minutos;
    sumaSegundos = sumaSegundos + segundos;

    return false;
}

const $botonCalcular = document.querySelector('#calcular-tiempo-total');

$botonCalcular.onclick = function() {
    const divisor = 60;
    let totalSegundos = sumaSegundos % divisor;
    let acumuladoMinutos = Math.trunc(sumaSegundos/60) + sumaMinutos;
    let totalMinutos = acumuladoMinutos % divisor;
    let totalHoras = sumaHoras + Math.trunc(sumaMinutos/60);
    
    document.querySelector('#resultado').removeAttribute('hidden');
    document.querySelector('strong').innerHTML = `La duración total de los videos del curso es de ${totalHoras} horas, ${totalMinutos} minutos, ${totalSegundos} segundos.`;



}



