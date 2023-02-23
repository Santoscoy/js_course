// Expresiones regulares parte 2 

var texto = "Aeropuerto"
console.log(texto);

// Busca vocales unidas al menos dos veces
var arr = texto.match(/[aeiou]{2,2}/ig);
console.log(arr);

// grupos de dos 
arr = texto.match(/\w{2,2}/ig);
console.log(arr);

// validacion para numeros o busqueda de palabras especificas
texto = "La Respuesta de la suma es: 45 + 60 = 105";
arr = texto.match(/\d{1,}|respuesta/ig);
console.log(arr);
 