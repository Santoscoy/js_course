// Funciones y su contexto, para crear contextos sanos se utilizan funciones anonimas

function crearFunciones(){

    var arr = [];

    for( var numero = 1; numero <=5; numero ++ ){
        arr.push(
            (function(numero){
            
                return function(){
                console.log( numero );
                }
            })(numero)
        );
    }

    return arr;
}

var funciones = crearFunciones();

funciones[0]();
funciones[1]();
funciones[2]();
funciones[3]();
funciones[4]();