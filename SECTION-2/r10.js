//  En tipos de datos primitivos se guarda un espacio en 
//  la memoria para cada variable. 

var a = 10;
var b = a;

console.log("a: ", a);
console.log("b:", b);

var a = 20;

console.log("a: ", a);
console.log("b:", b);

// Cuando son tipos de datos compuestos se hace referencia
// al mismo espacio de memoria

var c = {
    pais: "Mexico",
    estado: "Jalisco"
}

var d = c;

console.log("c:", c);
console.log("d:", d);

c.pais = "Colmbia"

console.log("c:", c);
console.log("d:", d);

d.estado = "Cordoba"

console.log("c:", c);
console.log("d:", d);