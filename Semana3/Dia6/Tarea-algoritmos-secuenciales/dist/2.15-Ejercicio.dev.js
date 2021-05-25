"use strict";

/**
 * Se desea calcular la potencia eléctrica de circuito de la figura 2.6. 
 * Realice un diagrama de flujo y el pseudocódigo que representen el algoritmo para 
 * resolver el problema. Considere que: P = V*I y V = R*I.
 */
var I = 0,
    Voltaje = 0,
    R = 4,
    Potencia = 0;
I = +prompt("Ingrese la Corriente");
Voltaje = I * R;
Potencia = Voltaje * I;
console.log("La Corriente es: ".concat(I));
console.log("El Voltaje es: ".concat(Voltaje));
console.log("La Potencia es: ".concat(Potencia));