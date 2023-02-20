
// Notacion de punto

var persona = {
    nombre: "Juana",
    apellido: "Herrera",
    edad: 25,
    direccion: {
        pais: "Mexico",
        estado: "Jalisco",
        ciudad: "Zapopan",
        calle: "Copernico",
        edificio: {
            nombre: "HYAT",
            telefono: "2222-2222",
        }
    }
};

// La forma para acceder a los valores de las propiedas
// de un objeto es atraves de un punto. Cada punto representa
// un nivel anidado del objet. ej:

console.log( persona.nombre );
console.log( persona.direccion.pais );

// Adicion de nueva propiedad despues de la definicion

persona.direccion.zipcode = 230012;

console.log( persona.direccion.zipcode );

console.log( persona.direccion.edificio.telefono );

// Se pueden reservar espacios de memoria para propiedades
// de objetos

var edificio = persona.direccion.edificio;

edificio.nopiso = "Piso 22";

console.log(persona);

// Notacion de Corchete, utilizada para traer datos de manera
// dinamica.

var campo = "pais2";

console.log( persona["direccion"][campo] );

