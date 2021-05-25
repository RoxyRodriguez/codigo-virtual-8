"use strict";

/**
 * Realice un diagrama de flujo y pseudocódigo que 
 * representen el algoritmo para determinar aproximadamente cuántos meses, 
 * semanas, días y horas ha vivido una persona
 */
var edad = 0,
    meses = 0,
    semanas = 0,
    días = 0,
    horas = 0;
edad = +prompt("Ingrese su Edad");
meses = edad * 12;
semanas = meses * 4.34524;
dias = semanas * 7;
horas = dias * 24;
console.log("Tu edad es ".concat(edad));
console.log("Los meses que has vivido son: ".concat(meses));
console.log("Las Semanas que has vivido son: ".concat(semanas));
console.log("Los d\xEDas que has vivido son: ".concat(dias));
console.log("Las horas que has vivido son: ".concat(horas));