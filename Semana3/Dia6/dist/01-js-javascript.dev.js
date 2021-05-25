"use strict";

console.log("hola mundo"); // VARIABLES
// una variable se crea solo una vez
// let es el identificador de varible
// TIPO DE DATO CADENA DE TEXTO /(STRING)

var nombre = "Roxana Liset";
var apellido = "Rodríguez Chambilla"; // reutilizando la variable

nombre = "Roxana";
console.log(nombre); // TIPO DE DATO NUMERICO

var edad = 29;
var sueldo = 950.20;
sueldo = 980.00;
sueldo = sueldo + 20; // concantenar

console.log("sueldo:" + sueldo); // TIPO DE DATO BOOLEAN (verdadero o falso)

var soltero = true;
var papeletas = false;
console.log("Soltero? : " + soltero); // TIPO DE DATO ARRAY

var meses = ["January", "February", "March", "April", "May"];
console.log(meses); // IMPRIMIR ALGUNA POSICION DE LOS ARREGLOS

console.log(meses[2]); // OPERACIONES MATEMATICAS SON IGUALES QUE EN EXCEL
// +, -, *, /
// % => (MÓDULO) S UNA OPERACION QUE RETORNA EL RESIDUO DE UNA DIVISION ENTERA

var modulo = 55 % 6;
console.log("55 % 6 =" + modulo); // operaciones simplificadas

var likes = 2; // incrementar automaticamente en una unidad a la likes con "+" sin espacio

likes++;
console.log(likes); // incrementar en una unidad lavariable likes

likes = likes + 1;
console.log(likes); // incrementar en una unidad lavariable likes

likes += 1;
console.log(likes);