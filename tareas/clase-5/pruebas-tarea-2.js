function probarValidarTextos(){
    console.assert(
        validarTextos('') === 'El campo no puede estar vacío',
        'ValidarTextos no validó que el campo esté vacío' 
    );

    console.assert(
        validarTextos('a') === 'El campo debe tener más de un caracter', 
        'ValidarTextos no validó que el campo tenga más de un caracter'
    );

    console.assert(
        validarTextos(256) === 'El valor ingresado no es un texto',
        'ValidarTextos no validó que no se puedan ingresar números'
    );

    console.assert(
        validarTextos('Juana') === '',
        'ValidarTextos no validó un valor correcto'
    );
}

function probarValidarEdad() {
    console.assert(
        validarEdad(0) === "El campo edad no puede ser igual a 0", 
        'ValidarEdad no validó que el campo no sea igual a 0'
    );

    console.assert(
        validarEdad('') === "El campo edad no puede estar vacío", 
        'validarEdad no validó que el campo no esté vacío.'
    );

    console.assert(
        validarEdad(55) === '',
        'ValidarEdad no validó un valor correcto'
    );
}


probarValidarTextos();
probarValidarEdad();