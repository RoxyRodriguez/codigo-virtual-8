"use strict";

/** Una empresa importadora desea determinar cuántos dólares puede
adquirir con equis cantidad de dinero mexicano. Realice un diagrama
de flujo y pseudocódigo que representen el algoritmo para tal fin.*/
var pesos = 0,
    tipocambio = 0,
    cantidad = 0;
pesos = +prompt("Ingrese la Cantidad de pesos mexicanos");
tipocambio = +prompt("Ingrese el tipo de Cambio");
cantidad = pesos / tipocambio;
console.log("Sus pesos mexicanos son: ".concat(pesos, "  El tipo de cambio es: ").concat(tipocambio));
console.log("La cantidad es : ".concat(cantidad));