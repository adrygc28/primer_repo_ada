//1. IMPORTACION DE LA LIBRERIA
const prompt = require('prompt-sync')();

// 2 - ENTRADA DE DATOS
// pedimos el peso. es fundamental usar parseFloat para que tome decimales
//si usaramos parseInt, perderiamos la presicion de los gramos.
let pesoKg = parseFloat(prompt("Ingrese su peso en kg: "));

// 3 PROCESO (CALCULO MATEMATICO)
// creamos una nueva variable 'conversion' para guardar el resultado del calculo
// multiplicamos el valor que ingreso el usuario por el factor de conversion (1 kg = 2.20462 lb)
// el asterisco (*) es el operador de multiplicacion en programacion
let conversion = pesoKg * 2.20462;

// 4 - SALIDA DE DATOS
// mostramos el resultado en la terminal (conectamos texto y el valor calculado)
console.log("Su peso en libras es: " + conversion + " lb.");
