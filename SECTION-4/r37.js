//  Comentarios


// Comentario de linea simple

/*
    comentario multilinea
*/

var arr = [

    // la primera posicion del arrelgo es una string
    "Victor", 

    /*
        La segunda posicion es un obj de js
     */
    {
    // Muchos comentarios
    // Muchos comentarios
    // Muchos comentarios
    // Muchos comentarios
    // Muchos comentarios
    // Muchos comentarios
    // Muchos comentarios
    // los espacios en js son ignorados al igal que los comentarios
    nombre: 
        "Victor",
    apellido: "Santoscoy",

    // Esta posicion del obj es una funcion...
    // que obtiene el nombre...
    getNombre: function (){
        return this.nombre + " " + this.apellido
        }  
    },
    // Muchos comentarios
    // Muchos comentarios
    // Muchos comentarios
    // Muchos comentarios
    // Muchos comentarios
    // Muchos comentarios
    // Muchos comentarios
    true,
    // Muchos comentarios
    // Muchos comentarios
    // Muchos comentarios
    // Muchos comentarios
    // Muchos comentarios
    // Muchos comentarios
    // Muchos comentarios
    function(){console.log( this )}
];

console.log(arr);
