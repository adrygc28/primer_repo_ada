const prompt = require ('prompt-sync')();

//Solicitar al usuario un numero cualquiera
let numero = parseFloat (prompt("Ingrese un numero: "));

//Calculamos el doble del numero ingresado

let dobleNumero = numero * 2;

//Mostramos el resultado en terminal
console.log ("El doble del numero ingresado es: " + dobleNumero);
