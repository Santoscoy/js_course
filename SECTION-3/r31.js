// Objeto fecha

  var hoy = new Date();
  var fechaMiliSegundos = new Date(1);
//   var dechaFija = new Date( year, month, day, hour, min, seg, mili );
  var fechaFija = new Date( 2023, 1, 2, 12, 32, 23, 1 );

  console.log(hoy);
  console.log(fechaMiliSegundos);
  console.log(fechaFija);


  console.log(hoy);
  console.log( hoy.getFullYear() );
  console.log( hoy.getDate() ); // obtiene el dia del objeto
  console.log( hoy.getHours() );
  console.log( hoy.getMinutes() );
  console.log( hoy.getMilliseconds() );
  console.log( hoy.getTime() ); // representacion numerica en milisegundos de una fecha utilizada para medir cuanto tiempo tarda en ejecutarse un chunck de codigo

// ejemplo para medicion de ejecuciones
// libreria para sumar fechas Momentjs
var inicio = new Date();

for (var i = 0; i < 1500; i++){
    console.log("calculando tiempo...")
}

var fin = new Date();

console.log(inicio);
console.log(fin);

console.log( fin.getTime() - inicio.getTime());


