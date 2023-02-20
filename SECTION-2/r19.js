// prototipos de JS, utilizados para hacer mas eficiente las clases, ahorra
// recursos en memoria.

function Persona(){
    this.nombre = "Fernando";
    this.apellido = "Herrera";
    this.edad = 30;
    this.pais = "Mexico"

}

Persona.prototype.imprimirInfo = function(){

    console.log( this.nombre + " " + this.apellido + "(" + this.edad + ")");

}

var fer = new Persona();

// fer.imprimirInfo();

console.log(fer);
console.log( fer.imprimirInfo() );

var a = "asdasd";

Number.prototype.es_positivo = function(){
    if(this > 0){
        return true;
    }else{
        return false;
    }
}