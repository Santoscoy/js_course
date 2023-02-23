// JSON - Java Script Object Notation

var objetoJS = {
    nombre: "Victor",
    apellido: "Santoscoy",
    edad: 26, 
    imprimir: function(){
        console.log(this.nombre, this.edad)
    }
};

console.log( "Objeto literal", objetoJS);

var jsonString = JSON.stringify( objetoJS );
console.log( jsonString );

var objetoDeJson = JSON.parse( jsonString );
console.log( objetoDeJson.nombre, objetoDeJson.edad );

