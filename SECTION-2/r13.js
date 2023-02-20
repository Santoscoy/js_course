// Parametros

// Datos primitivos

function imprimir( nombre, apellido ){

    apellido = apellido || "xxx"
    
    console.log(nombre + " " + apellido);

}

imprimir ( "Victor", "Santoscoy");

// Objetos 

function imprimirDos( persona ){
    console.log( persona.nombre + " " + persona.apellido);
}

imprimirDos({

    nombre: "Victor",
    apellido: "Santoscoy"

});

var persona = {
    nombre: "Pamela",
    apellido: "Garcia"
}

imprimirDos(persona);

// Funciones

function imprimirTres( fn ){

    fn();

}

// Funcion anonima

imprimirTres( function(){

    console.log("Funcion anonima");

});

// Funcion explicita
var miFuncion = function(){
    console.log("miFuncion");
}

imprimirTres( miFuncion );