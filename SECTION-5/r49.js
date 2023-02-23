// Rotulacion de ciclos



for_principal:
for(var i = 1; i <= 5; i++){

    console.log( i );

    for_secundario:
    for(var j= 1; j<= 5; j++){

        console.log("j: ", j);


        for(var x= 1; x<= 5; x++){
    
            console.log("   x: ", x);
    
            break for_secundario;
    
        }
    }
}