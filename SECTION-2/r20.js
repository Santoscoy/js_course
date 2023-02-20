// Funciones anonimas
// Definir una variable dentro del contexto de una funcion anonima, previene
// que la variable interactue con el objeto global

(function(){

    var a = 10;
    
    console.log(a);
    
    function cambiarA(){
        a = 20;
    }
    
    cambiarA();
    
    console.log(a);

})();

function ejecutarFuncion ( fn ){
    if ( fn() === 1){
        return true;
    }else{
        return false;
    }
}

console.log( 
    ejecutarFuncion( function(){
        console.log("funcion anonima ejecutada");
        return 0;
    })
);


