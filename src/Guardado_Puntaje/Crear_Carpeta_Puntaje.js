const fs=require('fs');

function Crear_Carpeta_Puntaje(){
	
// if(Activacion_de_CreacionCarpetasPuntos){
	
	
/***CREAR CARPETA PUNTAJE SI NO EXISTE***/
fs.mkdir('Puntajes',function(err) {
	// if (err){ console.log("DIRECTORIO YA CREADO!");          }
	// else{console.log("Directory -Puntaje created!"); 	} 
	 
});
/***CREAR CARPETA PUNTAJE SI NO EXISTE***/

/**
LEE LA CARPETA PUNTAJES Y CREA LAS CARPETAS
EASY, NORMAL Y EXTREME SI ESTAS NO EXSTEN
**/
/******************************************************************/
fs.readdir("./Puntajes",function(err, files) {
   // if (err) {       return console.error(err);    }
   
    // console.log("Existen"+" "+files.length+" "+"Carpetas dentro de Puntaje");
	
	if(files.length==0){
		
		// console.log( "NO hay Carpetas dentro de Puntaje ");
		// console.log( "Agregando Carpetas Easy-Normal-Extreme ");
		
		//carpeta Easy
		fs.mkdir('./Puntajes/Easy',function(err) {
		// if (err) { console.log("DIRECTORIO <<EASY>> YA CREADO!"); }
			// else{console.log("Directory Easy created success fully!");					}
		});
		//carpeta Easy
		
		//Carpeta NORMAL
		fs.mkdir('./Puntajes/Normal',function(err) {
		   if (err) {
			  // return console.error(err);
		   }
		   // console.log("Directory Normal created success fully!");
		});
	    //Carpeta NORMAL
	
	//Carpeta EXTREME
	 fs.mkdir('./Puntajes/Extreme',function(err) {
		if (err){
		// return console.error(err);
		}
	   // console.log("Directory Extreme created success fully!");
				
				});
	//Carpeta EXTREME
		
	}//SI NO HAY CAPETAS DENTRO DE PUNTOS SE CREAN
		// else{
				// console.log( "CARPETAS EXISTENTES ");
					 // files.forEach( function (file) {
					 // // console.log( file );
				   // });
		// }	
	//CIERRE
});
//CIERRE//CIERRE//CIERRE//CIERRE
}