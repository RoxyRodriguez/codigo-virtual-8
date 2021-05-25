"use strict";

/**
 * Se requiere determinar el costo que tendrá realizar una llamada telefónica 
 * con base en el tiempo que dura la llamada y en el costo por
minuto. Realice un diagrama de flujo y pseudocódigo que representen el 
algoritmo para tal fin
 */
var tiempo = 0,
    costo = 0,
    total = 0;
tiempo = +prompt("Ingrese Tiempo de Duración de la Llamada en Minutos");
costo = +prompt("Ingrese el Costo por Minuto");
total = tiempo * costo;
console.log("La Duraci\xF3n de la Llamada en Minutos es: ".concat(tiempo, " \n El costo por minuto es: ").concat(costo));
console.log("El Costo de su Llamada es: ".concat(total));