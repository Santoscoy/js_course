// Manejo de errores en Js


console.warn("EJEMPLO 1-----------------------")
try{
    var a = 100;
    console.log("El valor de a:", a);
}finally{
    console.log("Finalmente");
}


console.warn("EJEMPLO 2-----------------------")

try{
    var a = 100;
    if (a === 100){
        
        throw "Vaya vaya"
        
    }else{
        
        throw "Ohoh!"
        
    }
    
    
    console.log("ESTA PARTE NUNCA SE EJECUTA");
    
}catch( e ){
    if( e === "Vaya vaya"){
        
        console.log("Error tipo 1");
        
    }else if( e === "Ohoh!"){
        
        console.log("Error tipo 2")
        
    }
    // console.log("Error de catch: ", e);  
    
}finally{
    console.log("Finalmente");
}

console.warn("EJEMPLO 3-----------------------")

try{
    throw new Error("Error tipo 1")
    
    console.lo("ESTA PARTE NUNCA SE EJECUTA");
}catch( e ){
    
    console.log( e.message );

}finally{
    console.log("Finalmente")
}

console.warn("EJEMPLO 4-----------------------")

try{
    throw {
        nombreError: "Error tipo 1",
        accion: "Salir corriendo a hecharle agua al servidor",
        codeError: 1
    }
    
    console.lo("ESTA PARTE NUNCA SE EJECUTA");
}catch( e ){
    
    console.log( e );
    console.log( e.nombreError );
    console.log( e.accion );
    console.log( e.codeError );

    console.log( "Parte del catch" );

}finally{
    console.log("Finalmente")
}

console.warn("EJEMPLO 5-----------------------")

try{
        throw function(){
            console.log("Funcion del throw...");
        }
        
        console.lo("ESTA PARTE NUNCA SE EJECUTA");
}
catch( e ){
    
    e();
    console.log( "Parte del catch" );

}
finally{
    console.log("Finalmente")
}

// Manejar el error para crear un registro
console.warn("EJEMPLO 5-----------------------")

try{
        throw 1; //n cualquier numero
}
catch( e ){
    
    registroError( e );

}
finally{
    console.log("Finalmente")
}

function registroError( e ){

    var time = new Date();

    console.log("Se registro un error: ", e, " a las: ", time.getTime() );

}
