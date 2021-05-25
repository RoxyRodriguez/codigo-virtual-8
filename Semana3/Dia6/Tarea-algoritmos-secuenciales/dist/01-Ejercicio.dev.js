"use strict";

/**
 * Realice un diagrama de flujo y pseudocódigo que representen el algoritmo 
 * para obtener el área de un triángulo.
 */
var b = 0,
    a = 0,
    AT = 0;
b = +prompt("Ingrese la base del Triángulo ");
a = +prompt("Ingrese la altura del Triángulo");
AT = b * a / 2;
console.log("El \xE1rea es : ".concat(AT));