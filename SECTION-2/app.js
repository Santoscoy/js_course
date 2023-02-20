var a = 10;
var b = a;

console.log("a: ", a);
console.log("b:", b);

var a = 20;

console.log("a: ", a);
console.log("b:", b);

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