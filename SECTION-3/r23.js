// Arreglo parte 3

var arr = [
    true,
    {
        nombre: "Victor",
        apellido: "Santoscoy"
    },
    true,
    function(){
        console.log("Estoy viviendo en un arreglo")
    },
    function( persona ){
        console.log(persona.nombre + " " + persona.apellido)
    },
    [
        "Victor",
        "Pamela",
        "Cocco",
        "Eduardo",
        [
            "Juan",
            "Armando",
            "Miguel",
            function(){
                console.log( this );
            }
        ]
],
];

console.log(arr);
console.log( arr[0], arr[1].apellido );

arr[3]();
arr[4](arr[1]);

console.log(arr[5][4][1]);

var arr2 = arr[5][4];

arr2[1] = "Armanda"

console.log(arr);
console.log(arr2);

arr2[3]();
