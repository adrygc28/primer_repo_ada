const prompt = require ('prompt-sync')();

// Pedimos al ususuario que ingrese dos numeros
let primerNum = parseFloat (prompt("Ingrese el primer numero: "));
let segundoNum = parseFloat (prompt("Ingrese el segundo numero: "));

//Calculo de la suma de los dos numeros
let suma = primerNum + segundoNum;

//Mostramos el resultado de la suma en terminal
console.log ("La suma de los numeros ingresados es: " + suma);
