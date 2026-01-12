//Define dos constantes, RANGO_MIN Y RANGO_MAX con valores numericos de tu eleccion
//Pide al usuario que ingrese un numero y verifica si el numero esta dentro del rango definido por las constantes

const prompt = require("prompt-sync")();

const RANGO_MIN = 10;
const RANGO_MAX = 50;

let num = parseFloat(prompt("Ingrese un numero: "));

if (num >= RANGO_MIN && num <= RANGO_MAX) {
    console.log("El numero esta dentro del rango definido por las constantes.");
} else {
    console.log("El numero no esta dentro del rango definido por las constantes.");
}