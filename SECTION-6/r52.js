// bloqueando el click derecho de la pagina

document.onmousedown = function(arg){
    
    if( arg.button === 2){
        
        alert("click bloqueado!");
        
    }

    console.log(arg);
}

// Para obtener el texto seleccionado con el mous

document.onmouseup = function(){

    var texto = window.getSelection().toString();

    console.log( texto );

}