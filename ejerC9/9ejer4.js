//1. IMPORTACION DE LA LIBRERIA
const prompt = require('prompt-sync')();

//2. DEFINICION DE VARIABLE "PATRON"
//Guardamos el nombre correcto contra el cual vamos a comparar
// JavaScript distingue entre mayusculas y mminusculas (Case Sensitive)

let nombre = 'Adriana';

//3 - Entrada de datos
// Guardar lo que escribe el usuario en otra variable
let nombreUsuario = prompt("Ingrese su nombre: ");

// 4 Comparacion exacta (===)
// Preguntamos: El texto A es identico al texto B?
// Importante: "adriana" no es igual a "Adriana", debe coincidir letra por letra, recordar que hay distincion tambien entre mayusculas y minusculas
if (nombre === nombreUsuario){
    //si son identicos debe entrar aqui
    console.log("Hola tenemos el mismo nombre.");
}else {
    //Si cambia aun que sea una letra (o mayuscula), entra aqui.
    console.log("Tu nombre no es igual al mio.");
}