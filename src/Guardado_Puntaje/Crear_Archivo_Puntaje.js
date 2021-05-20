/***************************************************************************
LEE LAS CARPETAS EASY EASY, NORMAL Y EXTREME
Y CREA LOS ARCHIVOS DE PUNTAJE A LA VEZ QUE 
AGREGA LOS DATOS INICIALES DE POCISION SI NO EXITEN EN ELLAS
***************************************************************************/
// var fs = require('fs');
//
var Dificultad_Agregado=new Array(3);
Dificultad_Agregado[1]="Easy";
Dificultad_Agregado[2]="Normal";
Dificultad_Agregado[3]="Extreme";

function Crear_Archivos_Puntaje(){
	
	// console.log("Crear Archivos Puntajes en Ejecucion");

/**DATOS DE EASY**//**DATOS DE EASY**//**DATOS DE EASY**//**DATOS DE EASY**/

fs.readdir("./Puntajes/"+Dificultad_Agregado[1],function(err, files){
		
		
if(files==null){
	
	// console.log( "NO hay Archivo Puestos dentro de"+" "+Dificultad_Agregado[1]);
		// console.log( "Agregando Archivos"+" "+Dificultad_Agregado[1]);
	
	
				/*****AGREGAR DATOS*****/	
/////puntos				
	/**************/
		fs.writeFile('./Puntajes/'+Dificultad_Agregado[1]+'/Punto1.txt',Puntos1, function (err) {
		if (err) throw err; 
		// console.log('Saved! --Punto1'); 	 
		});
	/**************/
	/**************/
		fs.writeFile('./Puntajes/'+Dificultad_Agregado[1]+'/Punto2.txt',Puntos2, function (err) {
		if (err) throw err; 
		// console.log('Saved! --Punto2'); 	 
		});
	/**************/
	/**************/
		fs.writeFile('./Puntajes/'+Dificultad_Agregado[1]+'/Punto3.txt',Puntos3, function (err) {
		if (err) throw err; 
		// console.log('Saved! --Punto3'); 	
		});
	/**************/
/////puntos		
//////Nombre

	/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[1]+'/Nombre1.txt',Nombre1, function (err) {
	if (err) throw err;
	// console.log('Saved! --Nombre1');
	
	});
	/**************/
	/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[1]+'/Nombre2.txt',Nombre2, function (err) {
	if (err) throw err;
	// console.log('Saved! --Nombre2');
	});
	/**************/
	/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[1]+'/Nombre3.txt',Nombre3, function (err) {
	if (err) throw err;
	// console.log('Saved! --Nombre3');
	});
	/**************/
//////Nombre
///////SegundoR
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[1]+'/SegundoR1.txt',SegundoR1, function (err) {
	if (err) throw err;
	// console.log('Saved! --SegundoR1');
	});
			/**************/	
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[1]+'/SegundoR2.txt',SegundoR2, function (err) {
	if (err) throw err;
	// console.log('Saved! --SegundoR2');
	});
			/**************/	
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[1]+'/SegundoR3.txt',SegundoR3, function (err) {
	if (err) throw err;
	// console.log('Saved! --SegundoR3');
	});
			/**************/
///////SegundoR
/////Hora
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[1]+'/Hora1.txt',Hora1, function (err) {
	if (err) throw err;
	// console.log('Saved! --Hora1');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[1]+'/Hora2.txt',Hora2, function (err) {
	if (err) throw err;
	// console.log('Saved! --Hora2');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[1]+'/Hora3.txt',Hora3, function (err) {
	if (err) throw err;
	// console.log('Saved! --Hora3');
	});
			/**************/
/////Hora
////Min
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[1]+'/Min1.txt',Min1, function (err) {
	if (err) throw err;
	// console.log('Saved! --Min1');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[1]+'/Min2.txt',Min2, function (err) {
	if (err) throw err;
	// console.log('Saved! --Min2');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[1]+'/Min3.txt',Min3, function (err) {
	if (err) throw err;
	// console.log('Saved! --Min3');
	});
			/**************/
////Min
//Seg
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[1]+'/Seg1.txt',Seg1, function (err) {
	if (err) throw err;
	// console.log('Saved! --Seg1');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[1]+'/Seg2.txt',Seg2, function (err) {
	if (err) throw err;
	// console.log('Saved! --Seg2');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[1]+'/Seg3.txt',Seg3, function (err) {
	if (err) throw err;
	// console.log('Saved! --Seg3');
	});
			/**************/
//Seg			
			/*****AGREGAR DATOS*****/
							/*****AGREGAR DATOS EMPATE*****/
//Epuntos						
	/**************/
		fs.writeFile('./Puntajes/'+Dificultad_Agregado[1]+'/EPunto1.txt',Epuntos1, function (err) {
		if (err) throw err; 
		// console.log('Saved! --EPunto1'); 	 
		});
	/**************/
	/**************/
		fs.writeFile('./Puntajes/'+Dificultad_Agregado[1]+'/EPunto2.txt',Epuntos2, function (err) {
		if (err) throw err; 
		// console.log('Saved! --EPunto2'); 	
		});
	/**************/
	/**************/
		fs.writeFile('./Puntajes/'+Dificultad_Agregado[1]+'/EPunto3.txt',Epuntos3, function (err) {
		if (err) throw err; 
		// console.log('Saved! --EPunto3'); 
	 	});
	/**************/
//Epuntos
//ENombre
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[1]+'/ENombre1.txt',Enombre1, function (err) {
	if (err) throw err;
	// console.log('Saved! --ENombre1');
	});
			 /**************/	
			 /**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[1]+'/ENombre2.txt',Enombre2, function (err) {
	if (err) throw err;
	// console.log('Saved! --ENombre2');
	});
			 /**************/ 
			 /**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[1]+'/ENombre3.txt',Enombre3, function (err) {
	if (err) throw err;
	// console.log('Saved! --ENombre3');
	});
			 /**************/
//ENombre
//ESegundoR
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[1]+'/ESegundoR1.txt',ESegundoR1, function (err) {
	if (err) throw err;
	// console.log('Saved! --ESegundoR1');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[1]+'/ESegundoR2.txt',ESegundoR2, function (err) {
	if (err) throw err;
	// console.log('Saved! --ESegundoR2');
	});
			/**************/	
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[1]+'/ESegundoR3.txt',ESegundoR3, function (err) {
	if (err) throw err;
	// console.log('Saved! --ESegundoR3');
	});
			/**************/
//ESegundoR
//EHora
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[1]+'/EHora1.txt',Ehora1, function (err) {
	if (err) throw err;
	// console.log('Saved! --EHora1');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[1]+'/EHora2.txt',Ehora2, function (err) {
	if (err) throw err;
	// console.log('Saved! --EHora2');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[1]+'/EHora3.txt',Ehora3, function (err) {
	if (err) throw err;
	// console.log('Saved! --EHora3');
	});
			/**************/
//EHora
//EMin
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[1]+'/EMin1.txt',Emin1, function (err) {
	if (err) throw err;
	// console.log('Saved! --EMin1');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[1]+'/EMin2.txt',Emin2, function (err) {
	if (err) throw err;
	// console.log('Saved! --EMin2');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[1]+'/EMin3.txt',Emin3, function (err) {
	if (err) throw err;
	// console.log('Saved! --EMin3');
	});
			/**************/
//EMin
//Esegun
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[1]+'/ESeg1.txt',Eseg1, function (err) {
	if (err) throw err;
	// console.log('Saved! --ESeg1');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[1]+'/ESeg2.txt',Eseg2, function (err) {
	if (err) throw err;
	// console.log('Saved! --ESeg2');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[1]+'/ESeg3.txt',Eseg3, function (err) {
	if (err) throw err;
	// console.log('Saved! --ESeg3');
	});
			/**************/
//Esegun			
			/*****AGREGAR DATOS EMPATE*****/
			
	
	}//DETECCION DE EXISTENCIA DE ARCHIVOS
	// else{
// files.forEach(function(file){ 
// // console.log( "Ya existe"+" "+file+" "+Dificultad_Agregado[1]);
// });	
				// }
				
	});//cierre de la lectura
	
/**DATOS DE EASY**//**DATOS DE EASY**//**DATOS DE EASY**//**DATOS DE EASY**/
	//////////////////////////////
	//////////////////////////////
	//////////////////////////////
/**DATOS DE NORMAL**//**DATOS DE NORMAL**//**DATOS DE NORMAL**/
fs.readdir("./Puntajes/"+Dificultad_Agregado[2],function(err, files){
	
if(files==null){
		// console.log( "NO hay Archivo Puestos dentro de"+" "+Dificultad_Agregado[2]);
		// console.log( "Agregando Archivos"+" "+Dificultad_Agregado[2]);

		/////puntos				
	/**************/
		fs.writeFile('./Puntajes/'+Dificultad_Agregado[2]+'/Punto1.txt',Puntos1, function (err) {
		if (err) throw err; 
		// console.log('Saved! --Punto1'); 	 
		});
	/**************/
	/**************/
		fs.writeFile('./Puntajes/'+Dificultad_Agregado[2]+'/Punto2.txt',Puntos2, function (err) {
		if (err) throw err; 
		// console.log('Saved! --Punto2'); 	 
		});
	/**************/
	/**************/
		fs.writeFile('./Puntajes/'+Dificultad_Agregado[2]+'/Punto3.txt',Puntos3, function (err) {
		if (err) throw err; 
		// console.log('Saved! --Punto3'); 	 
		});
	/**************/
/////puntos		
//////Nombre

	/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[2]+'/Nombre1.txt',Nombre1, function (err) {
	if (err) throw err;
	// console.log('Saved! --Nombre1');
	});
	/**************/
	/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[2]+'/Nombre2.txt',Nombre2, function (err) {
	if (err) throw err;
	// console.log('Saved! --Nombre2');
	});
	/**************/
	/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[2]+'/Nombre3.txt',Nombre3, function (err) {
	if (err) throw err;
	// console.log('Saved! --Nombre3');
	});
	/**************/
//////Nombre
///////SegundoR
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[2]+'/SegundoR1.txt',SegundoR1, function (err) {
	if (err) throw err;
	// console.log('Saved! --SegundoR1');
	});
			/**************/	
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[2]+'/SegundoR2.txt',SegundoR2, function (err) {
	if (err) throw err;
	// console.log('Saved! --SegundoR2');
	
	});
			/**************/	
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[2]+'/SegundoR3.txt',SegundoR3, function (err) {
	if (err) throw err;
	// console.log('Saved! --SegundoR3');
	
	});
			/**************/
///////SegundoR
/////Hora
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[2]+'/Hora1.txt',Hora1, function (err) {
	if (err) throw err;
	// console.log('Saved! --Hora1');
	
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[2]+'/Hora2.txt',Hora2, function (err) {
	if (err) throw err;
	// console.log('Saved! --Hora2');
	
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[2]+'/Hora3.txt',Hora3, function (err) {
	if (err) throw err;
	// console.log('Saved! --Hora3');
	
	});
			/**************/
/////Hora
////Min
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[2]+'/Min1.txt',Min1, function (err) {
	if (err) throw err;
	// console.log('Saved! --Min1');
	
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[2]+'/Min2.txt',Min1, function (err) {
	if (err) throw err;
	// console.log('Saved! --Min2');
	
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[2]+'/Min3.txt',Min1, function (err) {
	if (err) throw err;
	// console.log('Saved! --Min3');
	
	
	});
			/**************/
////Min
//Seg
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[2]+'/Seg1.txt',Seg1, function (err) {
	if (err) throw err;
	// console.log('Saved! --Seg1');
	
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[2]+'/Seg2.txt',Seg2, function (err) {
	if (err) throw err;
	// console.log('Saved! --Seg2');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[2]+'/Seg3.txt',Seg3, function (err) {
	if (err) throw err;
	// console.log('Saved! --Seg3');
	});
			/**************/
//Seg			
			/*****AGREGAR DATOS*****/
							/*****AGREGAR DATOS EMPATE*****/
//Epuntos						
	/**************/
		fs.writeFile('./Puntajes/'+Dificultad_Agregado[2]+'/EPunto1.txt',Epuntos1, function (err) {
		if (err) throw err; 
		// console.log('Saved! --EPunto1'); 	 
		});
	/**************/
	/**************/
		fs.writeFile('./Puntajes/'+Dificultad_Agregado[2]+'/EPunto2.txt',Epuntos2, function (err) {
		if (err) throw err; 
		// console.log('Saved! --EPunto2'); 	
		});
	/**************/
	/**************/
		fs.writeFile('./Puntajes/'+Dificultad_Agregado[2]+'/EPuntos3.txt',Epuntos3, function (err) {
		if (err) throw err; 
		// console.log('Saved! --EPunto3'); 	 
		});
	/**************/
//Epuntos
//ENombre
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[2]+'/ENombre1.txt',Enombre1, function (err) {
	if (err) throw err;
	// console.log('Saved! --ENombre1');
	});
			 /**************/	
			 /**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[2]+'/ENombre2.txt',Enombre2, function (err) {
	if (err) throw err;
	// console.log('Saved! --ENombre2');
	
	});
			 /**************/ 
			 /**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[2]+'/ENombre3.txt',Enombre3, function (err) {
	if (err) throw err;
	// console.log('Saved! --ENombre3');
	
	});
			 /**************/
//ENombre
//ESegundoR
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[2]+'/ESegundoR1.txt',ESegundoR1, function (err) {
	if (err) throw err;
	// console.log('Saved! --ESegundoR1');
	
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[2]+'/ESegundoR2.txt',ESegundoR2, function (err) {
	if (err) throw err;
	// console.log('Saved! --ESegundoR2');
	
	});
			/**************/	
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[2]+'/ESegundoR3.txt',ESegundoR3, function (err) {
	if (err) throw err;
	// console.log('Saved! --ESegundoR3');
	});
			/**************/
//ESegundoR
//EHora
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[2]+'/EHora1.txt',Ehora1, function (err) {
	if (err) throw err;
	// console.log('Saved! --EHora1');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[2]+'/EHora2.txt',Ehora2, function (err) {
	if (err) throw err;
	// console.log('Saved! --EHora2');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[2]+'/EHora3.txt',Ehora3, function (err) {
	if (err) throw err;
	// console.log('Saved! --EHora3');
	});
			/**************/
//EHora
//EMin
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[2]+'/EMin1.txt',Emin1, function (err) {
	if (err) throw err;
	// console.log('Saved! --EMin1');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[2]+'/EMin2.txt',Emin2, function (err) {
	if (err) throw err;
	// console.log('Saved! --EMin2');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[2]+'/EMin3.txt',Emin3, function (err) {
	if (err) throw err;
	// console.log('Saved! --EMin3');
	});
			/**************/
//EMin
//Esegun
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[2]+'/ESeg1.txt',Eseg1, function (err) {
	if (err) throw err;
	// console.log('Saved! --ESeg1');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[2]+'/ESeg2.txt',Eseg2, function (err) {
	if (err) throw err;
	// console.log('Saved! --ESeg2');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[2]+'/ESeg3.txt',Eseg3, function (err) {
	if (err) throw err;
	// console.log('Saved! --ESeg3');
	});
			/**************/
//Esegun			
			/*****AGREGAR DATOS EMPATE*****/
	
		
	
	
	}//DETECCION DE EXISTENCIA DE ARCHIVOS
	// else{
// files.forEach(function(file){ 
// // console.log( "Ya existe"+" "+file+" "+Dificultad_Agregado[2]);
// });	
				// }
				
	});//cierre de la lectura
/**DATOS DE NORMAL**//**DATOS DE NORMAL**//**DATOS DE NORMAL**/	
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////	
/**DATOS DE EXTREME**//**DATOS DE EXTREME**//**DATOS DE EXTREME**//**DATOS DE EXTREME**/



fs.readdir("./Puntajes/"+Dificultad_Agregado[3],function(err, files){
	
if(files==null){
	
		// console.log( "NO hay Archivo Puestos dentro de"+" "+Dificultad_Agregado[3]);
		// console.log( "Agregando Archivos"+" "+Dificultad_Agregado[3]);

/////puntos				
	/**************/
		fs.writeFile('./Puntajes/'+Dificultad_Agregado[3]+'/Punto1.txt',Puntos1, function (err) {
		if (err) throw err; 
		// console.log('Saved! --Punto1'); 
	 	});
	/**************/
	/**************/
		fs.writeFile('./Puntajes/'+Dificultad_Agregado[3]+'/Punto2.txt',Puntos2, function (err) {
		if (err) throw err; 
		// console.log('Saved! --Punto2'); 	
		});
	/**************/
	/**************/
		fs.writeFile('./Puntajes/'+Dificultad_Agregado[3]+'/Punto3.txt',Puntos3, function (err) {
		if (err) throw err; 
		// console.log('Saved! --Punto3'); 	
		});
	/**************/

/////puntos		
//////Nombre

	/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[3]+'/Nombre1.txt',Nombre1, function (err) {
	if (err) throw err;
	// console.log('Saved! --Nombre1');
	});
	/**************/
	/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[3]+'/Nombre2.txt',Nombre2, function (err) {
	if (err) throw err;
	// console.log('Saved! --Nombre2');
	});
	/**************/
	/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[3]+'/Nombre3.txt',Nombre3, function (err) {
	if (err) throw err;
	// console.log('Saved! --Nombre3');
	});
	/**************/
//////Nombre
///////SegundoR
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[3]+'/SegundoR1.txt',SegundoR1, function (err) {
	if (err) throw err;
	// console.log('Saved! --SegundoR1');
	});
			/**************/	
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[3]+'/SegundoR2.txt',SegundoR2, function (err) {
	if (err) throw err;
	// console.log('Saved! --SegundoR2');
	});
			/**************/	
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[3]+'/SegundoR3.txt',SegundoR3, function (err) {
	if (err) throw err;
	// console.log('Saved! --SegundoR3');
	});
			/**************/
///////SegundoR
/////Hora
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[3]+'/Hora1.txt',Hora1, function (err) {
	if (err) throw err;
	// console.log('Saved! --Hora1');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[3]+'/Hora2.txt',Hora2, function (err) {
	if (err) throw err;
	// console.log('Saved! --Hora2');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[3]+'/Hora3.txt',Hora3, function (err) {
	if (err) throw err;
	// console.log('Saved! --Hora3');
	});
			/**************/
/////Hora
////Min
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[3]+'/Min1.txt',Min1, function (err) {
	if (err) throw err;
	// console.log('Saved! --Min1');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[3]+'/Min2.txt',Min1, function (err) {
	if (err) throw err;
	// console.log('Saved! --Min2');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[3]+'/Min3.txt',Min1, function (err) {
	if (err) throw err;
	// console.log('Saved! --Min3');
	});
			/**************/
////Min
//Seg
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[3]+'/Seg1.txt',Seg1, function (err) {
	if (err) throw err;
	// console.log('Saved! --Seg1');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[3]+'/Seg2.txt',Seg2, function (err) {
	if (err) throw err;
	// console.log('Saved! --Seg2');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[3]+'/Seg3.txt',Seg3, function (err) {
	if (err) throw err;
	// console.log('Saved! --Seg3');
	});
			/**************/
//Seg			
			/*****AGREGAR DATOS*****/
							/*****AGREGAR DATOS EMPATE*****/
//Epuntos						
	/**************/
		fs.writeFile('./Puntajes/'+Dificultad_Agregado[3]+'/EPunto1.txt',Epuntos1, function (err) {
		if (err) throw err; 
		// console.log('Saved! --EPunto1'); 	
		});
	/**************/
	/**************/
		fs.writeFile('./Puntajes/'+Dificultad_Agregado[3]+'/EPunto2.txt',Epuntos2, function (err) {
		if (err) throw err; 
		// console.log('Saved! --EPunto2'); 	 
		});
	/**************/
	/**************/
		fs.writeFile('./Puntajes/'+Dificultad_Agregado[3]+'/EPunto3.txt',Epuntos3, function (err) {
		if (err) throw err; 
		// console.log('Saved! --EPunto3'); 	
		});
	/**************/
//Epuntos
//ENombre
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[3]+'/ENombre1.txt',Enombre1, function (err) {
	if (err) throw err;
	// console.log('Saved! --ENombre1');
	});
			 /**************/	
			 /**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[3]+'/ENombre2.txt',Enombre2, function (err) {
	if (err) throw err;
	// console.log('Saved! --ENombre2');
	});
			 /**************/ 
			 /**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[3]+'/ENombre3.txt',Enombre3, function (err) {
	if (err) throw err;
	// console.log('Saved! --ENombre3');
	});
			 /**************/
//ENombre
//ESegundoR
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[3]+'/ESegundoR1.txt',ESegundoR1, function (err) {
	if (err) throw err;
	// console.log('Saved! --ESegundoR1');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[3]+'/ESegundoR2.txt',ESegundoR2, function (err) {
	if (err) throw err;
	// console.log('Saved! --ESegundoR2');
	});
			/**************/	
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[3]+'/ESegundoR3.txt',ESegundoR3, function (err) {
	if (err) throw err;
	// console.log('Saved! --ESegundoR3');
	
	});
			/**************/
//ESegundoR
//EHora
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[3]+'/EHora1.txt',Ehora1, function (err) {
	if (err) throw err;
	// console.log('Saved! --EHora1');
	
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[3]+'/EHora2.txt',Ehora2, function (err) {
	if (err) throw err;
	// console.log('Saved! --EHora2');
	
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[3]+'/EHora3.txt',Ehora3, function (err) {
	if (err) throw err;
	// console.log('Saved! --EHora3');
	});
			/**************/
//EHora
//EMin
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[3]+'/EMin1.txt',Emin1, function (err) {
	if (err) throw err;
	// console.log('Saved! --EMin1');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[3]+'/EMin2.txt',Emin2, function (err) {
	if (err) throw err;
	// console.log('Saved! --EMin2');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[3]+'/EMin3.txt',Emin3, function (err) {
	if (err) throw err;
	// console.log('Saved! --EMin3');
	});
			/**************/
//EMin
//Esegun
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[3]+'/ESeg1.txt',Eseg1, function (err) {
	if (err) throw err;
	// console.log('Saved! --ESeg1');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[3]+'/ESeg2.txt',Eseg2, function (err) {
	if (err) throw err;
	// console.log('Saved! --ESeg2');
	});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+Dificultad_Agregado[3]+'/ESeg3.txt',Eseg3, function (err) {
	if (err) throw err;
	// console.log('Saved! --ESeg3');
	});
			/**************/
//Esegun					
	
		
	}//DETECCION DE EXISTENCIA DE ARCHIVOS
	
	// else{ files.forEach(function(file){ console.log( "Ya existe"+" "+file+" "+Dificultad_Agregado[3]);});	 }
				
	});//cierre de la lectura
/**DATOS DE EXTREME**//**DATOS DE EXTREME**//**DATOS DE EXTREME**//**DATOS DE EXTREME**/	

/*******************************************************/
}