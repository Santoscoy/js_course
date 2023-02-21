// Argumentos
// la variable arguments guarda un arreglo con los parametro
// que recibe la funcion cuando es invocada

var arguments = 10;

function miFuncion(a,b,c,d){

    if (arguments.length !== 4){
        console.error("La funcion necesita 4 parametros")
        return;
    }
    console.log( a+b+c+d );

}

miFuncion(10, 20, 30, 40);