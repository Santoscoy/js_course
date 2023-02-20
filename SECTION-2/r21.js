// funciones tpeof, instanceof
// typeof: detecta cualquier tipo primitivo, funciones y objetos
// instanceof: retorna True si el objeto es instancia de una 
// objeto de primera clase


function identifica( param ){

    console.log( typeof param );
    console.log( param instanceof Persona );

}

function Persona(){
    this.nombre = "Fernando";
    this.edad = 30;
}


var fer = new Persona();

// identifica(  function(){ console.log("soy anonima") }); 
// identifica( 2 ); 

identifica( fer );