// Objeto Booleano
// resultados que regresan false, 0, null, undefined, strings vacias

var a = true;
var b = false;

var c = new Boolean(false);

console.log(c);

if(c){
    console.log("Se evaluo");
}

if(c.valueOf()){
    console.log("something")
}else{
    console.log("no se evaluo")
}