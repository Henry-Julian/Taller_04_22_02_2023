//Pregunto si quiere el huevo frito.
//Si me dice que si, lo frito, si me dice que no, lo hago hervido.
//Una vez cocinado le pregunto si quiere sal en el huevo.
//Si me dice que no, lo sirvo en el Plato. Si me dice que si le echo sal y después lo sirvo en el plato.

let huevo_frito = confirm("¿Quieres comer huevo frito?");
let mensaje = "Ya está preparado y servido ";
if (huevo_frito) {
    cocido = false;
    mensaje += "el huevo frito";
} else {
    mensaje += "el huevo cocido";
}
let sal = confirm("¿Quieres adicionar sal al huevo?");
if (sal) {
    mensaje += " con sal";
} else {
    mensaje += " sin sal"
}
console.log(mensaje); 

