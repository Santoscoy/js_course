
    
document.cookie = "nombre=Victor";
document.cookie = "apellido=Santoscoy";




// Funcion para creacion de cookies
function crearCookie(nombre, valor){
    
    valor = escape(valor);

    var expiration = new Date();
    expiration.setMonth( expiration.getMonth() + 1);

    document.cookie = nombre + "=" + valor + ";" + "expires=" + expiration.toUTCString() + ";";
    
}

// funcion para borrar cookies
function borrarCookie(nombre){
    
    
    var expiration = new Date();
    expiration.setMonth( expiration.getMonth() - 1);
    
    document.cookie = nombre + "=x;expires=" + expiration.toUTCString() + ";";

}

//  Funcion para obtener el valor de las cookies
function getCookie( nombre ){

    var cookies = document.cookie;

    var cookieArr = cookies.split("; ");
    console.log(cookieArr);

    for( var i = 0; i < cookieArr.length; i++){

        var parArr = cookieArr[i].split("=");
        cookieArr[i] = parArr;

        if( parArr[0] === nombre){
            return unescape( parArr[1] );
        }

    }

    return undefined;

}



// crearCookie("direccion", "Volcan Colima #2122");
console.log(getCookie("nombre"));
// console.log(getCookie("direccion"));

borrarCookie( "direccion");


var demo = "123;123*123'123/";

console.log(escape(demo));
console.log(unescape(demo));



var cookies = document.cookie;
console.log( cookies );


