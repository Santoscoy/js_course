// Eventos

// Acciones que hacen que se dispare una funcion

function evento( arg ){
    console.log("me dispare");
    console.log( arg.x, arg.y );
    console.log( arg);
}

var objeto = document.getElementById("objDemo");
var boton = document.getElementById("button");


objeto.addEventListener("keypress", evento);
boton.addEventListener("click", evento);

