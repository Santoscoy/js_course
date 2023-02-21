// Polimorfismo
// funciones que reciben diferentes tipos de datos 


function determinaDato( a ){
    if( a === undefined ){
        console.log("(a) es undefined");
    }

    if( typeof a === "number" ){
        console.log("(a) es un numero, y puedo hacer operacion con numeros");
    }

    if( typeof a === "string"){
        console.log("(a) es un texto y puedo hacer operaciones con textos");
    }

    if( typeof a === "object" ){
        console.log("(a) es un objeto... pero puede ser cualquier cosa");

        if( a instanceof Number){
            console.log("(a) es un objeto numerico")
        }
    }
}

var b = new Number(3);

console.log(b);

determinaDato( b );