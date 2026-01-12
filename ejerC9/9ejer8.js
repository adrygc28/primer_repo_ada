//1. IMPORTACION DE LA LIBRERIA
const prompt = require('prompt-sync')();

// 2. ENTRADA DE DATOS
// pedimos la medida de cada lado
// es importante usar numeros (parseFloat) para que las comparaciones funcionen bien
let lado1 = parseFloat(prompt("Lado A: "));
let lado2 = parseFloat(prompt("Lado B: "));
let lado3 = parseFloat(prompt("Lado C: "));

// 3. PRIMER FILTRO: EQUILATERO (El mas exigente)
// Para ser equilatero, los 3 lados deben ser iguales
// Usamos el operador logico AND (&&) porque necesitamos que lado1 sea igual a lado2 Y lado2 igual a lado3
// Por logica si  A=B y B=C, entonces A=C automaticamente
if (lado1 === lado2 && lado2 === lado3){
    console.log("El triangulo es EQUILATERO (3 lados iguales).");
    //4. SEGUNDO FILTRO: ISOSCELES (El termino medio)
    //si llegamos a esta linea ya sabemos que no es EQUILATERO
    // ahora preguntamos: Hay al menos un par de lados iguales?
    //usamos el operador logico OR (||) porque basta que se cumpla una de las condiciones
    // A es igual a B? O B es igual a C? O A es igual a C?

}else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3){
    console.log("El triangulo es ISOSCELES (2 lados iguales).");
    //5. FILTRO FINAL: ESCALENO (El descarte)
    // Si llegamos a esta linea, ya sabemos que no es EQUILATERO ni ISOSCELES
    // Por descarte, debe ser ESCALENO (los 3 lados diferentes)
}else {
    console.log("El triangulo es ESCALENO (3 lados diferentes).");
}
