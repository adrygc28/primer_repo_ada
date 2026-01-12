const prompt = require ('prompt-sync')();

//Pedimos al unsuario que ingrese cualquier numero
let numero = parseFloat (prompt("Ingrese un numero: "));

//Verificamos si el numero es positivo, negativo o cero
if (numero > 0) {
    console.log ("El numero ingresado es positivo.");
} else if (numero < 0) {
    console.log ("El numero ingresado es negativo.");
}
else {
    console.log ("El numero ingresado es cero.");
}
