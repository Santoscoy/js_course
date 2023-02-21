//  Objeto Math

var PI = Math.PI;
var E = Math.E;

console.log(PI);
console.log(E);

var num1 = 10.556789

// Redondeo
console.log(num1);
console.log( Math.round( num1*100 )/ 100 );

// corta los decimales
console.log( Math.floor(num1 ));

// random entre 0 y 1
var rnd = Math.random();
console.log(rnd);


// funcion para random entre dos numeros
function randomEntre(min, max){
    return Math.floor( Math.random() * (max-min) + min );
}

console.log(randomEntre( 1, 6));

// Raiz cuadrada

console.log( Math.sqrt(4) );

// Exponentes

console.log( Math.pow( 7, 2 ));

