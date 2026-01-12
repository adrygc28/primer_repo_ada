//1. IMPORTACION DE LA LIBRERIA
const prompt = require('prompt-sync')();

//2. ENTRADA DE DATOS
// Pedimos un numero al usuario
//Usamos parseInt porque los dias se cuentan en numeros enteros
let dia = parseInt(prompt("Ingrese un numero del 1 al 7 para saber el dia de la semana: "));

//3. LA ESCALERA DE PREGUNTAS (IF / ELSE IF)
// El programa va a preguntar linea por linea hasta encontrar la coincidencia
if (dia === 1){
    console.log("El dia es LUNES.");
} else if (dia === 2){
    console.log("El dia es MARTES.");
} else if (dia === 3){
    console.log("El dia es MIERCOLES.");
} else if (dia === 4){
    console.log("El dia es JUEVES.");
} else if (dia === 5){
    console.log("El dia es VIERNES.");
} else if (dia === 6){
    console.log("El dia es SABADO.");
} else if (dia === 7){
    console.log("El dia es DOMINGO.");
}else {
    //4. MANEJO DE ERRORES
    // Si llegamos a esta linea, es porque el numero no esta entre 1 y 7
    // Este else atrapa cualquier caso no previsto
    console.log("Error: El numero ingresado no corresponde a ningun dia de la semana.");
}