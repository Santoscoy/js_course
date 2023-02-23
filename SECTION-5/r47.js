// Ciclos While y Do While


//  while
var i = 0;
while( i < 10 ){

    i++;

    if( i === 5){
        // break;
        continue;
    }

    console.log(i);

}


 
do{

    i--;
    if(i ==5 )
        continue;
        
    console.log(i);


}
while( i > 1);