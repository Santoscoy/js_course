
// Definicion de Funciones, invocacion y 
// referencia a la funcion

var a = 30;

function primeraFuncion(){

    var a =  20
    console.log(a);
}

primeraFuncion();

console.log(a);

function segundaFuncion(){
    console.log(b);
}

var b = 20;

segundaFuncion();

function terceraFuncion(){
    console.log("invocacion");
}

var miFuncion = terceraFuncion;

miFuncion();

