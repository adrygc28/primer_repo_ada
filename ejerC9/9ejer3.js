//Declara dos variables booleanas condicion1 y condicion2
//Pide al usuario que ingrese dos valores booleanos (true o false)
// y muestre el resultado de diversas combinaciones logicas entre ellas (AND, OR, NOT)

const prompt = require("prompt-sync")();

// Si el usuario escribe 'true', la variable sera true, cualquier otra cosa sera false

let condicion1 = prompt("Ingrese el primer valor booleano ") === 'true';
let condicion2 = prompt("Ingrese el segundo valor booleano ") === 'true';

//Mostrar en la terminal los diversos resultados logicos

console.log("Resultados logicos");
console.log("AND && : " + (condicion1 && condicion2)); // Ambas debenn ser verdaderas
console.log("OR || : " + (condicion1 || condicion2)); // Al menos una debe ser verdadera
console.log("NOT !condicion1 : " + (!condicion1)); // Invierte el valor de condicion1


