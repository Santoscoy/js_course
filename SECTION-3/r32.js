// Operaciones con fechas 
// para manejo de fechas existe la libreria momentjs

var fecha = new Date(2016, 9, 20);

console.log( fecha );

// metodo .setDate para el manejo de fechas
fecha.setDate( 32 );

console.log( fecha );



Date.prototype.sumarDias = function( dias ){

    this.setDate( this.getDate() + dias );
    return this;

}

console.log(fecha);
console.log(fecha.sumarDias(-5));

Date.prototype.sumarAnios = function ( years  ){

    this.setFullYear( this.getFullYear() + years);
    return this;
}

console.log(fecha);
console.log(fecha.sumarAnios(5));