"use strict";

/**
 * La CONAGUA requiere determinar el pago que debe realizar una
persona por el total de metros cúbicos que consume de agua. 
Realice un diagrama de flujo y pseudocódigo que representen el algoritmo 
que permita determinar ese pago.
 */
var metrocubicos = 0,
    costo = 0,
    total = 0;
metrocubicos = +prompt("Ingrese la Cantidad de metros Cúbicos Consumidos");
costo = +prompt("Ingrese el Costo del Metro Cúbico");
total = metrocubicos * costo;
console.log("La Cantidad Consumida en Metros C\xFAbicos es: ".concat(metrocubicos, " \n El Costo por Metro C\xFAbico es: ").concat(costo));
console.log("El total a Pagar es: ".concat(total));