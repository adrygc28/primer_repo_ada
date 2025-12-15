// Consigna

//Crear un programa que simule un sistema de clificacion basad en la nota de un estudiante
//(un valor numerico del 0 al 100). El programa debe determinar si el estudiante ha reprobado
//aprobado o ha obtenido una calificacion excelente segun los siguientes criterios:
//Reprobado: nota menor a 60, el estudiante a reprobado
//Aprobado: nota entre 60 y 89 (inclusive), el estudiante ha aprobado
//Excelente: nota de 90 o mas, el estudiante ha obtenido una calificacion excelente
//Usar el condicional if, else ir y else para mostrar el mensaje correspondiente en la consola

let nota = 59; 

if (nota < 60) {
    console.log("El estudiante ha reprobado");
} else if (nota >= 60 && nota <= 89) {
    console.log("El estudiante ha aprobado");   
} else {
    console.log("El estudiante ha obtenido una calificacion excelente");
}