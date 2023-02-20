// palabra reservada New, utilizada para crear nuevas 
// instancias de objetos de js

// var carlos = new persona();


function Persona( nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    this.imprimirPersona = function(){
        return this.nombre + " " + this.apellido + "(" + this.edad + ")";
    }
}


var juan = new Persona("Juan", "Perez", 30);

console.log( juan );
console.log( juan.imprimirPersona() );
