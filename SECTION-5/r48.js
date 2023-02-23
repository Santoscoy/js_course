//  Ciclo for y for in

for( var i = 0; i <= 10; i++){

    if(i === 5)
        // continue;
        break;
    console.log(i);

}

// ejemplo for in


var Persona = function(){
    this.nombre = "Juan";
    this.apellido = "Pineda";
    this.edad = 18;
}

var juan = new Persona();

Persona.prototype.direccion = "Zapopoan"

for( prop in juan ){

    // refleccion
    if( juan.hasOwnProperty( prop ) ){
        continue;
    }

    console.log(prop, ":", juan[prop]);
}

// ejemplo 3
//  da el index del arreglo
for( num in [1,2,3,4,5,6,7,8,9, 10]){
    console.log(num);
}

[1,2,3,4,5,6,7,8,9, 10, true, false, "nombre"].forEach( val => console.log( val ));