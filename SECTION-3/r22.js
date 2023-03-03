// Arreglos, colecciones de datos

var arr = [5, 4, 3, 2, 1];

console.log(arr);

// reversea el arreglo
arr.reverse();
console.log(arr);

// itera sobre los elementos y recibe como parametro una funcion que aplica
// sobre los mismos
arr = arr.map(function (elem) {
    elem *= elem;
    return elem;
});
console.log(arr)

arr = arr.map(Math.sqrt);

console.log(arr);

// crea una string de un arreglo, recibiendo como parametro el separador de los elementos
arr = arr.join("|");
console.log(arr);

// crea un arreglo de uns string, recibiendo como parametro el separador de los elementos
arr = arr.split("|");
console.log(arr);

// Agrega elementos al final del arreglo
arr.push("6");
console.log(arr);

// Agrega elementos al inicio del arreglo
arr.unshift("0");
console.log(arr);

// Similar a join con la diferencia de que separa los elementos solo con una coma, es mas eficiente que join
console.log(arr.toString());

// remueve el ultimo elemento de la lista y regresa su valor
var last = arr.pop();
console.log(arr, last);

// primer parametro: index donde inicia
// segundo parametro: index donde termina 
// tercer...n parametros: elementos que remplezan a las posiciones anteriores
arr.splice(1, 0, "10");
console.log(arr);

// primer parametro: posicion del arreglo donde empienza a cortar
// segundo paramentro: posicion donde quiere terminar de cortar sin contarse asi mismo

arr = arr.slice(1, 3);
console.log(arr);

