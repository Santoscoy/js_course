// Retorno de funciones
// Se pueden retornar: primitivos, objetos, undefined, nulos, y funciones

function obtenerAleatorio(){
    return Math.random();
}

function obtenerNombre(){
    return "Victor"
}

function esMayor05(){

    if(obtenerAleatorio() > 0.5){
        return true;
    }else{
        return false;
    }
}


// las respuetas de la funcion pueden ser de manera escrita o anonima

function crearPersona( nombre, apellido ){

    return {
        nombre: nombre,
        apellido: apellido
    }
}

function crearFuncion(){
    return function( nombre ){
        console.log("Me crearo " + nombre);
    }
}


console.log( obtenerNombre() + "Santoscoy" );
console.log( obtenerAleatorio() + 10 );

var esMayor = esMayor05()
console.log( esMayor );

if ( esMayor ){
    console.log("Es mayor a 0.5");
}else{
    console.log("Es menor a 0.5")
}

var persona = crearPersona("Maria", "Paz");

var nuevaFuncion = crearFuncion();
console.log(nuevaFuncion)

nuevaFuncion( persona.nombre );
