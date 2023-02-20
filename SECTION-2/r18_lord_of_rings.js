// Juego del señor de los anillos
// cuando se inicia la funcion con la primera letra mayuscula
// indica que es una clase o funcion de primera clase.


function Jugador( nombre ){
    
    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;

    this.curar = function( jugadorObjetivo ){

        if(this.sp >= 40){
            
            this.sp -= 40;
            jugadorObjetivo.pv += 20;
        }else{
            console.info(this.nombre + " no tiene suficiente SP")
        }

        this.estado ( jugadorObjetivo );
    }

    this.tirarFlecha = function( jugadorObjetivo ){

        if(this.sp >= 50){

            jugadorObjetivo.pv -= 40;
            this.sp -= 50

            if( jugadorObjetivo.pv <= 0){     

                jugadorObjetivo.pv = 0;
                console.error(jugadorObjetivo.nombre + " murio!!");

            }
        }else{
            console.info(this.nombre + " no tiene suficiente SP")
        }

        this.estado( jugadorObjetivo );

    }

    this.golpeConEspada = function( jugadorObjetivo ){

        if(this.sp >= 60){

            jugadorObjetivo.pv -= 60;
            this.sp -= 60

            if( jugadorObjetivo.pv <= 0){     

                jugadorObjetivo.pv = 0;
                console.error(jugadorObjetivo.nombre + " murio!!");

            }
        }else{
            console.info(this.nombre + " no tiene suficiente SP")
        }

        this.estado( jugadorObjetivo );

    }

    this.estado = function ( jugadorObjetivo ){
        console.info( this );
        console.info( jugadorObjetivo );
    }
};

var gandalf = new Jugador( "Gandalf" );
var legolas = new Jugador( "Legolas" );
var hobbit = new Jugador("Hobbit");

console.log( gandalf );
console.log( legolas );
console.log( hobbit );






