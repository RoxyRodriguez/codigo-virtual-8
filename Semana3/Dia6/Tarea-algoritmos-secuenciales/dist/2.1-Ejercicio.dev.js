"use strict";

/**
 * Realice un diagrama de flujo y pseudocódigo que representen el algoritmo 
 * para obtener el área de un triángulo.
 */
var b = 0,
    a = 0,
    area = 0;
b = +prompt("Ingrese la base del Triángulo ");
a = +prompt("Ingrese la altura del Triángulo");
area = b * a / 2;
console.log("Resultado");
console.log("El \xE1rea es : ".concat(area));