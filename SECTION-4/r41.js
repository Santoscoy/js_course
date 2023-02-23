/* 
    Funciones especiales:
        ~   call()
        ~   apply()
        ~   bind()
*/


var carro = {
    color: "gris",
    marca: "dodge",
    imprimir: function(){
        var salida = this.marca + " - " + this.color;
        return salida;
    }
}
console.log(carro.imprimir());


// function bind();
var logCarro = function( arg1, arg2){
    console.log("Carro: ", this.imprimir() );
    console.log("Argumentos: ", arg1, arg2);
    console.log( "===============================" );
}

// Cachando el error por el objeto this
try{
    console.log( logCarro() );
}catch (e) {
    console.warn("Error: ", e)
}

// Apuntando funcion logCarro al objeto carro donde existe la funcion imprimir
var logModeloCarro = logCarro.bind( carro );

logModeloCarro("abc", "xyz");



//  funcion call()
// el primer parametro indica al objeto al cual tiene que apuntar la funcion
logCarro.call(carro, "123", "456");





//  funcion apply()
// el primer parametro indica al objeto al que tiene que apuntar la funcion,
// el segundo parametro indica los argumentos en forma de arreglo
logCarro.apply(carro, ["qwerty", "ghjkl"]);


// Funciones prestadas 

var carro2 = {
    color: "blanco",
    marca: "toyota"
}

console.log( carro.imprimir.call( carro2 ) );