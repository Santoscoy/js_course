//  Expresiones Regulares parte 1

// Explicita

var regExp = RegExp("a");

// literal
var regLit = /a/;

var texto = "Hola mundo";

// null si no encuentra al menos una vez la expresion

// ^ busca en el texto en la primera posicion
var arr = texto.match( /^H/ ); 
console.log( arr );

// ^ busca en el texto en la ultima posicion
arr = texto.match( /o$/ ); 
console.log( arr );

// primeros tres caracteres que hagan match
arr = texto.match( /.../ ); 
console.log( arr );

// primer caracter indefinido y segundo explicito
arr = texto.match( /^.o/ ); 
console.log( arr );

texto += ", 12345."

// Rangos retorna el arreglo con el primer caracter que haga match
arr = texto.match( /[0-9]/ ); 
console.log( arr );

// Rango de caracteres
arr = texto.match( /[a-zA-Z]/ ); 
console.log( arr );

// Definiendo primera letra
arr = texto.match( /^H[a-z]/ ); 
console.log( arr );

// Cualquier vocal seguida de cualquier caracter al final
texto = "Hola mundo.";
arr = texto.match( /[aeiou].$/ ); 
console.log( arr );

// cualquier vocal seguida de cualquier caracter
arr = texto.match( /[aeiou]./ ); 
console.log( arr );

// Busca cualquier separacion por espacios que haya en el texto
arr = texto.match( /\s/ ); 
console.log( arr );

// cualquier palabra del codigo ASCII 
arr = texto.match( /[a-zA-Z0-9]/ ); 
arr = texto.match( /\w/ ); 
console.log( arr );

// solo numeros
texto = "Hola Mundo.1234";
arr = texto.match( /\d/ ); 
console.log( arr );

// reguladores que permiten controlar como funciona la reg exp   
//  i = insensible
//  g = todas las apariciones
//  m = multilinea
texto = "Hola MundO.\nQue tal";
console.log(texto);
arr = texto.match( /[aeiou]/ig ); 
console.log( arr );

// Estructuras de repeticion
// con cualquier cantidad de caracteres repetidas, evalua strings vacios

texto = "Holaa Mundoooo";
arr = texto.match( /o+/g ); 
console.log( arr );

// caracter definido o vacio, evalua strings vacios
arr = texto.match( /o?/g ); 
console.log( arr );

// funcionalidad de +?, evalua strings vacios
arr = texto.match( /o*/g ); 
console.log( arr );

// notacion de llaves para estructura de repeticion
arr = texto.match( /o{2}/ ); 
console.log( arr );
arr = texto.match( /o{2,}/ ); // rango de secuencias del caracter 
console.log( arr );











