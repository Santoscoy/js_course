// IF..ELSE

console.warn("Ejemplo 1 =========================")
var nota = 55;

if( nota >= 90){
    console.log("A");
}
else if( nota >= 80 ){
    console.log("B");
}
else if( nota >= 70 ){
    console.log("C");
}
else if( nota >= 60 ){
    console.log("D");
}
else{

    if (nota > 50)
        console.log("F");
    
    console.log("Something");
}




console.warn("Ejemplo 2 =========================")
//  ejemplo 2
var a = 10;
var b = 20;

var c = 0;

if( a > b ){
    c = a;
}
else{
    c = b;
}

console.log(c);

console.warn("Ejemplo 3 =========================")
// Ejemplo 3 operador ternario
var a = 10;
var b = 20;

var c = ( a > b )? function(){

    console.log("A es mayor a B");
    return a;

}() : function(){

    console.log("B es mayor a A");
    return b;

}();
console.log( c );


console.warn("Ejemplo 4 =========================")
// Ejemplo 4

var a = undefined;
var b = 50;

var c = a || b;

console.log(c);



console.warn("Ejemplo 5 =========================")
// Ejemplo 5

function getNombre( nombre ){

    var nomb = nombre || "Sin nombre";
    console.log(nomb);

}

getNombre();

