//1. IMPORTACION DE LA LIBRERIA
const prompt = require('prompt-sync')();

//2. DEFINICION DE CONSTANTES
// PI es un valor universal que nunca cambia en matematicas
// por eso usamos const y lo escribimos en mayusculas
const PI = 3.1416;

//3. ENTRADA DE DATOS
// pedimos el radio del circulo
// usamos parseFloat porque las medidas casi siempre tienen decimales
let radio = parseFloat(prompt("Ingrese el radio: "));

//4. CALCULO DEL AREA
//La formula matematica es AREA = PI * radio^2 (radio al cuadrado)
// En programacion basica, "Al cuadrado" es simplemente multiplicar el numero por si mismo
// entonces escribimos: PI * radio * radio
let area = PI * radio * radio;

//5. CALCULO DEL PERIMETRO
// La formula matematica es PERIMETRO = 2 * PI * radio
// El codigo es una multiplicacion encadenada simple
let perimetro = 2 * PI * radio;

//6. SALIDA DE DATOS
console.log("El area del circulo es: " + area);
console.log("El perimetro del circulo es: " + perimetro);