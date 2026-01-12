// Declarar dos variables numericas num 1 y num 2
// Pide al usuario que ingrese dos numeros y muestre cual es mayor o si son iguales

const prompt = require("prompt-sync")();

let num1 = parseFloat(prompt("Ingrese el primer numero: "));
let num2 = parseFloat(prompt("Ingrese el segundo numero: "));

if (num1 > num2) {
    console.log("El primer numero (" + num1 + ") es mayor que el segundo numero (" + num2 + ").");
} else if (num2 > num1) {
    console.log("El segundo numero (" + num2 + ") es mayor que el primer numero (" + num1 + ")." );
} else {
    console.log("Ambos numeros son iguales.");
}
