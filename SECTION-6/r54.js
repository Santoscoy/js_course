// Cuadros de dialogos


/* 
    alert: arroja un cuadro de dialogo con una string
*/


//  alert("Hola mundo")


/* 
    confirm: retorna un valor booleano
*/

// var acepto = confirm("Esta seguro?")

// console.log(acepto);


/* 
    propmt: cuadro de dialogo con input
*/

// var nombre = prompt("Ingrese su nombre", "nombre");
// console.log(nombre);

/* 

Notes:
Js no es asicrono, si los cuadros de dialogo no se terminan de ejecutar 
la pagina quedara bloqueada hasta que se ejecute una accion en el cuadro 
de dialogo
*/

setInterval(function(){
    console.log("Segundo...")
}, 1000)

var nombre = prompt("Ingrese su nombre", "nombre");
console.log(nombre);

