//1. IMPORTACION DE LA LIBRERIA
const prompt = require('prompt-sync')();

// 2 - ENTRADA DE DATOS
// Pedimos los 3 candidatos. Es vital usar parseFloat para que '10' sea mayor   que '2'
// Si no usamos parseFloat, compararia alfabeticamente y '2' seria mayor que '10'
let n1 = parseFloat(prompt("Ingrese numero 1: "));
let n2 = parseFloat(prompt("Ingrese numero 2: "));
let n3 = parseFloat(prompt("Ingrese numero 3: "));

// 3 - EVALUACION DEL PRIMER CANDIDATO
// Pregunta: es n1 el "rey" del grupo?
if (n1 >= n2 && n1 >= n3){
    console.log("El mayor es el primero: " + n1);
}
// 4 - EVALUACION DEL SEGUNDO CANDIDATO
// Si llegamos aca, es porque n1 no es el mayor
// Preguntamos si n2 es el mayor
else if (n2 >= n1 && n2 >= n3){
    console.log("El mayor es el segundo: " + n2);
}
// 5 - EL DESCARTE FINAL
// Si llegamos aca, es porque n1 y n2 no son el mayor
// Entonces, n3 debe ser el mayor (o podria haber un empate)
else {
    console.log("El mayor es el tercero: " + n3);
}