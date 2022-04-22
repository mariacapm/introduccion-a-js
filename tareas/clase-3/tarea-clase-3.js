// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

const MI_NOMBRE = 'maria';
const NOMBRE_PARIENTE = 'pedro';

const nombreUsuario = (prompt('¿Cual es tu nombre?') || '').toLowerCase();

if (MI_NOMBRE === nombreUsuario) {
    console.log(`Hola Tocayo! Yo también me llamo ${nombreUsuario}`);
} else if (NOMBRE_PARIENTE === nombreUsuario) {
    console.log(`Hola ${nombreUsuario}, te llamás igual que mi pariente`);
} else if (nombreUsuario.trim().length === 0) {
    console.log('No ingresaste ningún nombre');
} else {
    console.log(`Hola ${nombreUsuario}!`);
}


//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

const MI_EDAD = 38;
const edadUsuario = Number(prompt('¿Cuantos años tienes?')); //si alquien escribe un texto, al convertir a número da NaN (not a number)


if (MI_EDAD === edadUsuario){
    console.log('Tenés mi misma edad');
} else if (MI_EDAD < edadUsuario) {
    console.log('Sos mayor que yo');
} else if (MI_EDAD > edadUsuario) {
    console.log('Sos menor que yo');
} else {
    console.log('Error de ingreso');
}


//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

const EDAD_MINIMA_PARA_ENTRAR = 18;
const RESPUESTA_SI = 'si';
const RESPUESTA_NO = 'no';

const usuarioTieneDocumento = (prompt('Tienes documento? (si/no)') || '').toLowerCase();

if (usuarioTieneDocumento === RESPUESTA_SI) {
    const edadUsuario = Number(prompt('¿Cuantos años tienes?'));

    if (edadUsuario >= EDAD_MINIMA_PARA_ENTRAR) {
        console.log('Puedes entrar al bar.');
    } else if (edadUsuario < EDAD_MINIMA_PARA_ENTRAR) {
        console.log('No puedes entrar al bar.');
    } else {
        console.log('No entendí la respuesta.');
    }
} else if (usuarioTieneDocumento === RESPUESTA_NO) {
    console.log('No puedes entrar al bar sin documento.');
} else {
    console.log('No entendí tu respuesta');
}