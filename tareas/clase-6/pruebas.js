function probarValidarCantidadGrupoFamiliar() {
    console.assert(
        validarCantidadGrupoFamiliar('') === 'Este campo no puede estar vacio',
        'ValidarCantidadGrupoFamiliar no validó un campo vacío.'
    );

    console.assert(
        validarCantidadGrupoFamiliar(0) === 'El grupo familiar debe tener al menos un integrante', 
        'ValidarCantidadGrupoFamiliar no validó un valor igual a 0'
    );

    console.assert(
        validarCantidadGrupoFamiliar(3) === '',
        'ValidarCantidadGrupoFamiliar no validó un valor válido.'
    );
}

function probarValidarCalcularMenor() {
    console.assert(
        validarCalcularMenor([5, 4, 9]) === 'CalcularMenor no está calculando bien el número menor',
        'validarCalcularMenor no está validando el menor número'
    );

    console.assert(
        validarCalcularMenor([2,2,9]) === 'El menor número está repetido',
        'validarCalcularMenor no está validando que el menor número esté repetido'
    );

    console.assert(
        validarCalcularMenor([2, 5, 9]) === '',
        'ValidarCalularMenor está validando un resultado esperado'
    );
}

function probarValidarCalcularMayor() {
    console.assert(
        validarCalcularMayor([5, 9, 4]) === 'CalcularMayor no está calculando bien el número mayor',
        'validarCalcularMayor no está validando el mayor número'
    );

    console.assert(
        validarCalcularMayor([9,9,2]) === 'El mayor número está repetido',
        'validarCalcularMayor no está validando que el mayor número esté repetido'
    );

    console.assert(
        validarCalcularMayor([9, 5, 2]) === '',
        'ValidarCalularMayor está validando un resultado esperado'
    );
}

function probarValidarPromedio() {
    console.assert(
        validarPromedio(0) === 'El promedio no puede dar cero.', 
        'ValidarPromedio no está validando que el promedio no de cero.'
    );
    console.assert(
        validarPromedio('') === 'El promedio no puede estar vacío.', 
        'ValidarPromedio no está validando que el promedio no esté vacío'
    );
}

probarValidarCantidadGrupoFamiliar();
probarValidarCalcularMenor();
probarValidarCalcularMayor();
probarValidarPromedio();