//1. IMPORTACION DE LA LIBRERIA
const prompt = require('prompt-sync')();

// 2 - ENTRADA DE DATOS
// Pedimos la edad
//Usamos parseInt porque la edad se suele contar con numeros enteros, no con decimales
let edad = parseInt(prompt("Ingrese su edad: "));

// 3 - EVALUACION DE LA CONDICION (SI / SINO)
// Evaluamos si la variable edad es mayor o igual a 18
// El operador es >= (mayor o igual que) incluye al numero 18 dentro del grupo de mayores.
if (edad >= 18){
    // Si la condicion es verdadera, entra aqui (18 o mas)
    console.log("Usted es mayor de edad.");
}else {
    // Si la condicion es falsa, entra aqui (menos de 18)
    console.log("Usted es menor de edad.");
}