// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

for (let i = 3; i <= 22; i += 3) {
    console.log(i);
  }
  
  // TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
  //       diez a uno.
  
  let numero1 = 11;
  
  while (numero1 > 1) {
    numero1 -= 1;
    console.log(numero1);
  }
  
  // TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
  // Cuenta del 1 al 50 e imprime los números:
  // * Si un número es múltiplo de tres, imprime 'Fizz'.
  // * Si es un múltiplo de 5, imprime 'Buzz'.
  // * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
  // * Para todo lo demás, imprime el número mismo.
  // NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
  // Calcula el resto al dividir.
  // 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
  // 16% 4 = 0 - en 16 tenemos 4 * 4
  // 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.
  
  for (let numero2 = 1; numero2 <= 50; numero2++) {
    if (numero2 % 3 === 0 && numero2 % 5 === 0) {
      console.log("FizzBuzz");
    } else if (numero2 % 3 === 0) {
      console.log("Fizz");
    } else if (numero2 % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(numero2);
    }
  }
  
  //Otra forma de resolverlo
  
  /* function fizzBuzz() {
    for (let i = 1; i <= 50; i++) {
      let texto = '';
  
      if(i % 3 === 0){
        texto = 'Fizz';
      }
  
      if(i % 5 === 0) {
        texto += 'Buzz';
      }
  
      console.log(texto || i);
    }
  }
  
  fizzBuzz(); */
  
  // Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
  // ej.: calcularPromedio([10,5,4,2,8])
  
  let notaParciales = [10, 4, 5, 6, 8];
  
  function calcularPromedio(notaParciales) {
    let totalNotas = 0;
    for (let i = 0; i < notaParciales.length; i++) {
      totalNotas += notaParciales[i];
    }
  
    return totalNotas / notaParciales.length;
  }
  
  console.log(`El promedio de tus notas es ${calcularPromedio(notaParciales)}`);
  
  
  //Ejemplo operador ternario
  //Ejemplo parámetro predeterminado / Default parameter
  
  function verificarEdadEntrada(edad = 18) {
  
    edad >= 18 ? console.log('Bienvenido al bar!') : console.log('Sos menor de edad');
  
    /*
    if(edad >= 18) {
      console.log('Bienvenido al bar!');
    } else {
      console.log('Sos menor de edad');
    }
  
    */
  
  }
  //verificarEdadEntrada(16);
  // verificarEdadEntrada(); No hace falta poner parámetro porque ejecuta igual con el parámetro predeterminado
  
  