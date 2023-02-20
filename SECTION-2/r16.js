// this es una palabra reservada para tomar valores de las 
// propiedades del objeto donde es utilizado, sin embargo
// para definiciones nuevas toma el contexto del objeto 
// global, es buena practica pasar por referencia el objeto this
// a una nueva variable llamada self, que apuntara al contexto donde
// self es definida.

var persona = {
    nombre: "Maria",
    apellido: "Juarez",
    imprimirNombre: function(){
        console.log( this.nombre, this.apellido );
    }, 
    direccion: {
        pais: "Mexico",
        obtenerPais: function(){
            console.log("La direccion es en " + this.pais);
            var self = this


            var nuevaDireccion = function(){
                console.log( self );
                console.log("La direccion es en: " + self.pais)
            }
            nuevaDireccion();
        }
    }
}

persona.direccion.obtenerPais();
