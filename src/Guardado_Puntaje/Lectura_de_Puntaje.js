/***********************************************************/
// var fs = require('fs');
/***********************************************************/
/***********************************************************/
// CAMBIAR DATOS EN RELAION CON EL JUEGOS
/*LEER ARCHIVOS*/




function Leer_Archivos(){
	
	
	if(Dificultad==1){
		DificultadEnlace="Easy"; 		}
else
if(Dificultad==2){
	
DificultadEnlace="Normal";

		
}
else
if(Dificultad==3){
	

			
DificultadEnlace="Extreme";			
			}
	
	
	
	
	
	
	
	



// console.log("LEYENDO ARCHIVOS DE"+" "+DificultadEnlace);
// console.log("LEYENDO ARCHIVOS DATOS NORMALES");
//LEE PUNTAJE
	fs.readFile('./Puntajes/'+DificultadEnlace+'/Punto1.txt', (error,datosPunto1) => {
	if (error){
		// console.log(error);
		}
	
	else{
		// console.log("Punto1"+" "+datosPunto1.toString());
	
puntos1=datosPunto1.toString();
	}
	});

	fs.readFile('./Puntajes/'+DificultadEnlace+'/Punto2.txt', (error,datosPunto2) => {
	if (error){
		// console.log(error);
		}
	else{
		// console.log("Punto2"+" "+datosPunto2.toString());

puntos2=datosPunto2.toString();	

	
	}
	});

	fs.readFile('./Puntajes/'+DificultadEnlace+'/Punto3.txt', (error,datosPunto3) => {
	if (error){
		// console.log(error);
		}
	else{
		// console.log("Punto3"+" "+datosPunto3.toString());
	
	puntos3=datosPunto3.toString();
	
	}
	});
//LEE PUNTAJE
//NOMBRE
	fs.readFile('./Puntajes/'+DificultadEnlace+'/Nombre1.txt', (error,datosNombre1) => {
	if (error){
		// console.log(error);
		}
	else{
		// console.log("Nombre1"+" "+datosNombre1.toString());
	nombre1=datosNombre1.toString();
	}
	});

	fs.readFile('./Puntajes/'+DificultadEnlace+'/Nombre2.txt', (error,datosNombre2) => {
	if (error){
		// console.log(error);
		}
	else{
		// console.log("Nombre2"+" "+datosNombre2.toString());
	nombre2=datosNombre2.toString();
	}
	});

	fs.readFile('./Puntajes/'+DificultadEnlace+'/Nombre3.txt', (error,datosNombre3) => {
	if (error){
		// console.log(error);
		}
	else{
		// console.log("Nombre3"+" "+datosNombre3.toString());
	nombre3=datosNombre3.toString();
	}
	});
//NOMBRE
//LEER TIEMPO
	fs.readFile('./Puntajes/'+DificultadEnlace+'/SegundoR1.txt', (error,datosTiempoR1) => {
	if (error){
		// console.log(error);
		}
	else{
		// console.log("Segundor1"+" "+datosTiempoR1.toString());
	
	Segundor1=datosTiempoR1.toString();
	}
	});

	fs.readFile('./Puntajes/'+DificultadEnlace+'/SegundoR2.txt', (error,datosTiempoR2) => {
	if (error){
		// console.log(error);
		}
	else{
		// console.log("Segundor2"+" "+datosTiempoR2.toString());
	
	Segundor2=datosTiempoR2.toString();
	
	}
	});

	fs.readFile('./Puntajes/'+DificultadEnlace+'/SegundoR3.txt', (error,datosTiempoR3) => {
	if (error){
		// console.log(error);
		}
	else{
		// console.log("Segundor3"+" "+datosTiempoR3.toString());
	
	Segundor3=datosTiempoR3.toString();
	}
});
//LEER TIEMPO
//Horas
	fs.readFile('./Puntajes/'+DificultadEnlace+'/Hora1.txt', (error,datosHora1) => {
	if (error){
		// console.log(error);
		}
	else{
		// console.log("Hora1"+" "+datosHora1.toString());
	
	hora1=datosHora1.toString();
	}
	});

	fs.readFile('./Puntajes/'+DificultadEnlace+'/Hora2.txt', (error,datosHora2) => {
	if (error){
		// console.log(error);
		}
	else{
		// console.log("Hora2"+" "+datosHora2.toString());
	hora2=datosHora2.toString();
	}
	});

	fs.readFile('./Puntajes/'+DificultadEnlace+'/Hora3.txt', (error,datosHora3) => {
	if (error){
		// console.log(error);
		}
	else{
		// console.log("Hora3"+" "+datosHora3.toString());
	
	hora3=datosHora3.toString();
	}
	});
//Horas
//Minutos
	fs.readFile('./Puntajes/'+DificultadEnlace+'/Min1.txt', (error,datosMin1) => {
	if (error){
		// console.log(error);
		}
	else{
		// console.log("Min1"+" "+datosMin1.toString());
	min1=datosMin1.toString();
	}
	});

	fs.readFile('./Puntajes/'+DificultadEnlace+'/Min2.txt', (error,datosMin2) => {
	if (error){
		// console.log(error);
		}
	else{
		// console.log("Min2"+" "+datosMin2.toString());
	min2=datosMin2.toString();
	}
	});

	fs.readFile('./Puntajes/'+DificultadEnlace+'/Min3.txt', (error,datosMin3) => {
	if (error){
		// console.log(error);
		}
	else{
		// console.log("Min3"+" "+datosMin3.toString());
	min3=datosMin3.toString();
	}
	});
//Minutos
//Segundos
	fs.readFile('./Puntajes/'+DificultadEnlace+'/Seg1.txt', (error,datosSeg1) => {
	if (error){
		// console.log(error);
		}
	else{
		// console.log("Seg1"+" "+datosSeg1.toString());
	seg1=datosSeg1.toString();
	
	}
	});

	fs.readFile('./Puntajes/'+DificultadEnlace+'/Seg2.txt', (error,datosSeg2) => {
	if (error){
		// console.log(error);
		}
	else{
		// console.log("Seg2"+" "+datosSeg2.toString());
	
	seg2=datosSeg2.toString();
	}
	});

	fs.readFile('./Puntajes/'+DificultadEnlace+'/Seg3.txt', (error,datosSeg3) => {
	if (error){
		// console.log(error);
		}
	else{
		// console.log("Seg3"+" "+datosSeg3.toString());
	seg3=datosSeg3.toString();
	}
	});
//Segundos
/**************************************************
ARCHIVOS DE EMPATE
***************************************************/
// console.log("LEYENDO ARCHIVOS DATOS EMPATE");
	//LEE PUNTAJE
	fs.readFile('./Puntajes/'+DificultadEnlace+'/EPunto1.txt', (error,datosEPuntos1) => {
	if (error){
		// console.log(error);
		}
	else{
		// console.log("EPuntos1"+" "+datosEPuntos1.toString());
	
	epuntos1=datosEPuntos1.toString();
	
	}
	});

	fs.readFile('./Puntajes/'+DificultadEnlace+'/EPunto2.txt', (error,datosEPuntos2) => {
	if (error){
		// console.log(error);
		}
	else{
		// console.log("EPunto2"+" "+datosEPuntos2.toString());
	
	epuntos2=datosEPuntos2.toString();
	
	}
	});

	fs.readFile('./Puntajes/'+DificultadEnlace+'/EPunto3.txt', (error,datosEPuntos3) => {
	if (error){
		// console.log(error);
		}
	else{
		// console.log("EPuntos3"+" "+datosEPuntos3.toString());
	
	epuntos3=datosEPuntos3.toString();
	
	}
	});
//LEE PUNTAJE
//NOMBRE
	fs.readFile('./Puntajes/'+DificultadEnlace+'/ENombre1.txt', (error,datosENombre1) => {
	if (error){
		// console.log(error);
		}
	else{
		// console.log("ENombre1"+" "+datosENombre1.toString());
	
	enombre1=datosENombre1.toString();
	
	}
	});

	fs.readFile('./Puntajes/'+DificultadEnlace+'/ENombre2.txt', (error,datosENombre2) => {
	if (error){
		// console.log(error);
		}
	else{
		// console.log("ENombre2"+" "+datosENombre2.toString());
	
	enombre2=datosENombre2.toString();
	}
	});

	fs.readFile('./Puntajes/'+DificultadEnlace+'/ENombre3.txt', (error,datosENombre3) => {
	if (error){
		// console.log(error);
		}
	else{
		// console.log("ENombre3"+" "+datosENombre3.toString());
	
	
	enombre3=datosENombre3.toString();
	}
	});
//NOMBRE
//LEER TIEMPO
	fs.readFile('./Puntajes/'+DificultadEnlace+'/ESegundoR1.txt', (error,datosETiempoR1) => {
	if (error){
		// console.log(error);
		}
	else{
		// console.log("ESegundoR1"+" "+datosETiempoR1.toString());
	
	eSegundor1=datosETiempoR1.toString();
	
	}
	});

	fs.readFile('./Puntajes/'+DificultadEnlace+'/ESegundoR2.txt', (error,datosETiempoR2) => {
	if (error){
		// console.log(error);
		}
	else{
		// console.log("ESegundoR2"+" "+datosETiempoR2.toString());
	

	eSegundor2=datosETiempoR2.toString();
	}
	});

	fs.readFile('./Puntajes/'+DificultadEnlace+'/ESegundoR3.txt', (error,datosETiempoR3) => {
	if (error){
		// console.log(error);
		}
	else{
		// console.log("ESegundoR3"+" "+datosETiempoR3.toString());
	
	eSegundor3=datosETiempoR3.toString();
	}
});
//LEER TIEMPO
//Horas
	fs.readFile('./Puntajes/'+DificultadEnlace+'/EHora1.txt', (error,datosEHora1) => {
	if (error){
		// console.log(error);
		}
	else{
		// console.log("EHora1"+" "+datosEHora1.toString());
	
	ehora1=datosEHora1.toString();
	}
	});

	fs.readFile('./Puntajes/'+DificultadEnlace+'/EHora2.txt', (error,datosEHora2) => {
	if (error){
		// console.log(error);
		}
	else{
		// console.log("EHora2"+" "+datosEHora2.toString());
	
	ehora2=datosEHora2.toString();
	
	}
	});

	fs.readFile('./Puntajes/'+DificultadEnlace+'/EHora3.txt', (error,datosEHora3) => {
	if (error){
		// console.log(error);
		}
	else{
		// console.log("EHora3"+" "+datosEHora3.toString());
	
	ehora3=datosEHora3.toString();
	}
	});
//Horas
//Minutos
	fs.readFile('./Puntajes/'+DificultadEnlace+'/EMin1.txt', (error,datosEMin1) => {
	if (error){
		// console.log(error);
		}
	else{
		
		// console.log("EMin1"+" "+datosEMin1.toString());
	
	
	emin1=datosEMin1.toString();
	
	}
	});

	fs.readFile('./Puntajes/'+DificultadEnlace+'/EMin2.txt', (error,datosEMin2) => {
	if (error){
		// console.log(error);
		}
	else{
		// console.log("EMin2"+" "+datosEMin2.toString());
	
	
	emin2=datosEMin2.toString();
	}
	});

	fs.readFile('./Puntajes/'+DificultadEnlace+'/EMin3.txt', (error,datosEMin3) => {
	if (error){
		// console.log(error);
		}
	else{
		// console.log("EMin3"+" "+datosEMin3.toString());
	
	
	emin3=datosEMin3.toString();
	}
	});
//Minutos
//Segundos
	fs.readFile('./Puntajes/'+DificultadEnlace+'/ESeg1.txt', (error,datosESeg1) => {
	if (error){
		// console.log(error);
		}
	else{
		// console.log("ESeg1"+" "+datosESeg1.toString());
	
	eseg1=datosESeg1.toString();
	
	}
	});

	fs.readFile('./Puntajes/'+DificultadEnlace+'/ESeg2.txt', (error,datosESeg2) => {
	if (error){
		// console.log(error);
		}
	else{
		// console.log("ESeg2"+" "+datosESeg2.toString());
	
	
	eseg2=datosESeg2.toString();
	}
	});

	fs.readFile('./Puntajes/'+DificultadEnlace+'/ESeg3.txt', (error,datosESeg3) => {
	if (error){
		// console.log(error);
	}
	else{
		// console.log("ESeg3"+" "+datosESeg3.toString());
	
	
	eseg3=datosESeg3.toString();
	
	}
	});
//Segundos
}//cierre de funcion
/*******************************************************/
/*******************************************************/