/***************************************************************************
REINICIA LOS DATOS DE PUNTUACION
***************************************************************************/
// var fs = require('fs');


	if(Dificultad==1){ 		DificultadEnlace="Easy"; 		} 
	else 
		if(Dificultad==2){ 	 DificultadEnlace="Normal";  		 } 
	else 
		if(Dificultad==3){ 	  			 DificultadEnlace="Extreme";}
	



function Borrar_Puntaje(){
	
	console.log("PUNTAJE_BORRADO");
	
	// console.log("Crear Archivos Puntajes en Ejecucion");

/**DATOS DE EASY**//**DATOS DE EASY**//**DATOS DE EASY**//**DATOS DE EASY**/

fs.readdir("./Puntajes/"+DificultadEnlace,function(err, files){
		
		
if(files!=null){
	
	// console.log( "NO hay Archivo Puestos dentro de"+" "+Dificultad_Agregado[1]);
		// console.log( "Agregando Archivos"+" "+Dificultad_Agregado[1]);
	
	
				/*****AGREGAR DATOS*****/	
/////puntos				
	/**************/
		fs.writeFile('./Puntajes/'+DificultadEnlace+'/Punto1.txt',0, function (err) {
		if (err) throw err; 
		// console.log('Saved! --Punto1'); 	 
		});
	/**************/
	/**************/
		fs.writeFile('./Puntajes/'+DificultadEnlace+'/Punto2.txt',0, function (err) {
		if (err) throw err; 
		// console.log('Saved! --Punto2'); 	 
		});
	/**************/
	/**************/
		fs.writeFile('./Puntajes/'+DificultadEnlace+'/Punto3.txt',0, function (err) {
		if (err) throw err; 
		// console.log('Saved! --Punto3'); 	
		});
	/**************/
/////puntos		
//////Nombre

	/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/Nombre1.txt',"***", function (err) {
	if (err) throw err;
	// console.log('Saved! --Nombre1');
	
	});
	/**************/
	/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/Nombre2.txt',"***", function (err) {
	if (err) throw err;
	// console.log('Saved! --Nombre2');
	});
	/**************/
	/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/Nombre3.txt',"***", function (err) {
	if (err) throw err;
	// console.log('Saved! --Nombre3');
	});
	/**************/
//////Nombre
///////SegundoR
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/SegundoR1.txt',0, function (err) {
	if (err) throw err;
	// console.log('Saved! --SegundoR1');
	});
			/**************/	
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/SegundoR2.txt',0, function (err) {
	if (err) throw err;
	// console.log('Saved! --SegundoR2');
	});
			/**************/	
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/SegundoR3.txt',0, function (err) {
	if (err) throw err;
	// console.log('Saved! --SegundoR3');
	});
			/**************/
///////SegundoR
/////Hora
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/Hora1.txt',0, function (err) {
	if (err) throw err;
	// console.log('Saved! --Hora1');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/Hora2.txt',0, function (err) {
	if (err) throw err;
	// console.log('Saved! --Hora2');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/Hora3.txt',0, function (err) {
	if (err) throw err;
	// console.log('Saved! --Hora3');
	});
			/**************/
/////Hora
////Min
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/Min1.txt',0, function (err) {
	if (err) throw err;
	// console.log('Saved! --Min1');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/Min2.txt',0, function (err) {
	if (err) throw err;
	// console.log('Saved! --Min2');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/Min3.txt',0, function (err) {
	if (err) throw err;
	// console.log('Saved! --Min3');
	});
			/**************/
////Min
//Seg
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/Seg1.txt',0, function (err) {
	if (err) throw err;
	// console.log('Saved! --Seg1');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/Seg2.txt',0, function (err) {
	if (err) throw err;
	// console.log('Saved! --Seg2');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/Seg3.txt',0, function (err) {
	if (err) throw err;
	// console.log('Saved! --Seg3');
	});
			/**************/
//Seg			
			/*****AGREGAR DATOS*****/
							/*****AGREGAR DATOS EMPATE*****/
//Epuntos						
	/**************/
		fs.writeFile('./Puntajes/'+DificultadEnlace+'/EPunto1.txt',0, function (err) {
		if (err) throw err; 
		// console.log('Saved! --EPunto1'); 	 
		});
	/**************/
	/**************/
		fs.writeFile('./Puntajes/'+DificultadEnlace+'/EPunto2.txt',0, function (err) {
		if (err) throw err; 
		// console.log('Saved! --EPunto2'); 	
		});
	/**************/
	/**************/
		fs.writeFile('./Puntajes/'+DificultadEnlace+'/EPunto3.txt',0, function (err) {
		if (err) throw err; 
		// console.log('Saved! --EPunto3'); 
	 	});
	/**************/
//Epuntos
//ENombre
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/ENombre1.txt',0, function (err) {
	if (err) throw err;
	// console.log('Saved! --ENombre1');
	});
			 /**************/	
			 /**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/ENombre2.txt',"***", function (err) {
	if (err) throw err;
	// console.log('Saved! --ENombre2');
	});
			 /**************/ 
			 /**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/ENombre3.txt',"***", function (err) {
	if (err) throw err;
	// console.log('Saved! --ENombre3');
	});
			 /**************/
//ENombre
//ESegundoR
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/ESegundoR1.txt',"***", function (err) {
	if (err) throw err;
	// console.log('Saved! --ESegundoR1');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/ESegundoR2.txt',0, function (err) {
	if (err) throw err;
	// console.log('Saved! --ESegundoR2');
	});
			/**************/	
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/ESegundoR3.txt',0, function (err) {
	if (err) throw err;
	// console.log('Saved! --ESegundoR3');
	});
			/**************/
//ESegundoR
//EHora
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/EHora1.txt',0, function (err) {
	if (err) throw err;
	// console.log('Saved! --EHora1');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/EHora2.txt',0, function (err) {
	if (err) throw err;
	// console.log('Saved! --EHora2');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/EHora3.txt',0, function (err) {
	if (err) throw err;
	// console.log('Saved! --EHora3');
	});
			/**************/
//EHora
//EMin
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/EMin1.txt',0, function (err) {
	if (err) throw err;
	// console.log('Saved! --EMin1');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/EMin2.txt',0, function (err) {
	if (err) throw err;
	// console.log('Saved! --EMin2');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/EMin3.txt',0, function (err) {
	if (err) throw err;
	// console.log('Saved! --EMin3');
	});
			/**************/
//EMin
//Esegun
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/ESeg1.txt',0, function (err) {
	if (err) throw err;
	// console.log('Saved! --ESeg1');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/ESeg2.txt',0, function (err) {
	if (err) throw err;
	// console.log('Saved! --ESeg2');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/ESeg3.txt',0, function (err) {
	if (err) throw err;
	// console.log('Saved! --ESeg3');
	});
			/**************/
//Esegun			
			/*****AGREGAR DATOS EMPATE*****/
			
	
	}//DETECCION DE EXISTENCIA DE ARCHIVOS
	// else{
// files.forEach(function(file){ 
// // console.log( "Ya existe"+" "+file+" "+DificultadEnlace);
// });	
				// }
				
	});//cierre de la lectura
	
/**DATOS DE EASY**//**DATOS DE EASY**//**DATOS DE EASY**//**DATOS DE EASY**/
	//////////////////////////////
	//////////////////////////////
	//////////////////////////////

}