"use strict";

// /**
//  * 1. ALGORITMO PARA SUMAR 4 NOTAS E IMPRIMIR EL PROMEDIO DE LOS 4
//  */
// // type of (variable)=> devuelve unstring con el tipo de dato de una elemento
// let c1 = 0,
//     c2 = 0,
//     c3 = 0,
//     c4 = 0,
//     promedio = 0,
//     suma = 0;
// console.log(typeof c1);
// // prompt lo transforma en un string y lo muestra en string
// // para convertir la varible en un numero entero colocamos un + delante del prompt
// // OJO anteponer el simbolo "+" a una instruccion o variable la convierte automaticamente en un numero
// c1 = +prompt("ingrese la primera nota");
// c2 = +prompt("ingrese la segunda nota");
// c3 = +prompt("ingrese la tercera nota");
// c4 = +prompt("ingrese la cuarta nota");
// // como mostrar el tipo de dato de una variable
// console.log(typeof c1);
// console.log(c1);
// suma = c1 + c2 + c3 + c4;
// promedio = suma / 4;
// // uso de los backticks(`) nos ayudan a concatenar variables con strings en una sola linea sun eluso del operador (+)
// console.log(`El promedio es: ${promedio}`);
// AREA DE UN TRIANGULO
// let b = 0,
//     a = 0,
//     AT = 0;
// b = +prompt("Ingrese la base del Triángulo ");
// a = +prompt("Ingrese la altura del Triángulo");
// AT = (b * a) / 2
// console.log(`El área es : ${AT}`);

/** Una empresa importadora desea determinar cuántos dólares puede
adquirir con equis cantidad de dinero mexicano. Realice un diagrama
de flujo y pseudocódigo que representen el algoritmo para tal fin.*/
// let pm = 0,
//     tc = 0,
//     cantidad = 0;
// pm = +prompt("Ingrese la Cantidad de pesos mexicanos");
// tc = +prompt("Ingrese el tipo de Cambio");
// cantidad = pm / tc
// console.log(`La cantidad es : ${cantidad}`);

/**
 * Una empresa que contrata personal requiere determinar la edad de
las personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron. Realice el diagrama
de flujo y pseudocódigo que representen el algoritmo para solucionar
este problema.
 */
var añonac = 0,
    añoactual = 0,
    edad = 0;
añonac = +prompt("Ingrese el año de Nacimiento");
añoactual = +prompt("Ingrese el año Actual");
edad = añoactual - añonac;
console.log("Su edad es : ".concat(edad));