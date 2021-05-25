/**
 * Condicionales
 */
// let unidades = 0;
// unidades = +prompt("¿Cuántos productos desea comprar");
// if (unidades >= 1000) {
//     console.log(`precio x producto: 0.85 centavos`);
//     console.log(`Total a pagar: ${unidades *0.85}`);
// } else
//     console.log(`precio x producto: 0.90 centavos`);
// console.log(`Total a pagar: ${unidades *0.90}`);

// let precio = 0,
//     total = 0;


// precio = +prompt("Ingrese el Precio");
// if (precio > 2500) {
//     console.log(`Tu descuento es 15%`)
//     total = precio - (precio * 0.15)

// } else {
//     console.log(`Tu descuento es 8%`)
//     total = precio - (precio * 0.08)
// }


// console.log(`total a pagar :${total} `)

// let n1 = 10,
//     n2 = 33,
//     n3 = 42,
//     mayor = 0
// if (n1 > n2 && n1 > n3) {
//     mayor = n1
// } else {
//     if (n2 > n3 && n2 > n1) {
//         mayor = n2
//     } else {
//         mayor = n3
//     }
// }
// document.write(`El mayor de :${n1} ${n2} y ${n3} es: ${mayor}`)

// let precio = 1000.00
// let dia = "martes"

// if (dia === "lunes" || dia === "martes") {
//     precio = precio * 0.85
// }
// document.write(`Total a pagar : ${precio}`)

// let horas = 8;
// let total = 0;

// if (hora <= 2) {
//     total = hora * 5;
// } else {
//     if (horas <= 5) {
//         total = (2 * 5) + (horas - 2) * 4
//     } else {
//         if (horas <= 10) {
//             total = (2 * 5) + (3 * 4) + (horas - 5) * 3
//         } else {
//             total = (2 * 5) + (3 * 4) + (5 * 3) + (horas - 10) * 2
//         }
//     }
// }
// document.write(`horas en el estacionamiento: ${horas} <br> total a pagar: ${total}`)

let bono = 0
let antiguedad = 0
let sueldo = 1000

if (antiguedad > 4 || sueldo < 2000) {
    bono = (sueldo * 0.25)
} else {
    bono = (sueldo * 0.20)
}
document.write(`el bono es: ${bono}`)