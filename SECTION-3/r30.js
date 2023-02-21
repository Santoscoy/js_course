// Objeto String

var a = new String("Victor Santoscoy");
console.log( a );


var b = "santoscoy";
console.log( b );

console.log( b.toUpperCase());
console.log( b.toLowerCase());

var i = a.indexOf("Santoscoy")
console.log(i);

i = b.lastIndexOf("s");
console.log(i);

var nombre = a.substr( 0, a.indexOf(" ") );
console.log(nombre);

var split = a.split(" ");
console.log( split );
console.log( split.length );



// 


document.write(a.italics());