/*********************************************************************************************/
/*ACTUALIZAR DATOS DE PUNTAJE*/
/*******************************************************************************************/
function Actualizar_Datos_Puntaje(){
	console.log("ACTUALIZAR DATOS");
	// alert("ACTUALIZAR DATOS");
	
	/*****AGREGAR DATOS*****/	
/////puntos				
	/**************/
		fs.writeFile('./Puntajes/'+DificultadEnlace+'/Punto1.txt',Puntos1, function (err) {
		if (err) throw err; 
		console.log('Saved! --Punto1'); 	 	});
	/**************/
	/**************/
		fs.writeFile('./Puntajes/'+DificultadEnlace+'/Punto2.txt',Puntos2, function (err) {
		if (err) throw err; 
		console.log('Saved! --Punto2'); 	 	});
	/**************/
	/**************/
		fs.writeFile('./Puntajes/'+DificultadEnlace+'/Punto3.txt',Puntos3, function (err) {
		if (err) throw err; 
		console.log('Saved! --Punto3'); 	 	});
	/**************/
/////puntos		
//////Nombre

	/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/Nombre1.txt',Nombre1, function (err) {
	if (err) throw err;
	console.log('Saved! --Nombre1');});
	/**************/
	/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/Nombre2.txt',Nombre2, function (err) {
	if (err) throw err;
	console.log('Saved! --Nombre2');});
	/**************/
	/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/Nombre3.txt',Nombre3, function (err) {
	if (err) throw err;
	console.log('Saved! --Nombre3');});
	/**************/
//////Nombre
///////SegundoR
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/SegundoR1.txt',SegundoR1, function (err) {
	if (err) throw err;
	console.log('Saved! --SegundoR1');});
			/**************/	
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/SegundoR2.txt',SegundoR2, function (err) {
	if (err) throw err;
	console.log('Saved! --SegundoR2');});
			/**************/	
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/SegundoR3.txt',SegundoR3, function (err) {
	if (err) throw err;
	console.log('Saved! --SegundoR3');});
			/**************/
///////SegundoR
/////Hora
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/Hora1.txt',Hora1, function (err) {
	if (err) throw err;
	console.log('Saved! --Hora1');});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/Hora2.txt',Hora2, function (err) {
	if (err) throw err;
	console.log('Saved! --Hora2');});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/Hora3.txt',Hora3, function (err) {
	if (err) throw err;
	console.log('Saved! --Hora3');});
			/**************/
/////Hora
////Min
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/Min1.txt',Min1, function (err) {
	if (err) throw err;
	console.log('Saved! --Min1');});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/Min2.txt',Min2, function (err) {
	if (err) throw err;
	console.log('Saved! --Min2');});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/Min3.txt',Min3, function (err) {
	if (err) throw err;
	console.log('Saved! --Min3');});
			/**************/
////Min
//Seg
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/Seg1.txt',Seg1, function (err) {
	if (err) throw err;
	console.log('Saved! --Seg1');});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/Seg2.txt',Seg2, function (err) {
	if (err) throw err;
	console.log('Saved! --Seg2');});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/Seg3.txt',Seg3, function (err) {
	if (err) throw err;
	console.log('Saved! --Seg3');});
			/**************/
//Seg			
			/*****AGREGAR DATOS*****/
							/*****AGREGAR DATOS EMPATE*****/
//Epuntos						
	/**************/
		fs.writeFile('./Puntajes/'+DificultadEnlace+'/EPuntos1.txt',Epuntos1, function (err) {
		if (err) throw err; 
		console.log('Saved! --EPunto1'); 	 	});
	/**************/
	/**************/
		fs.writeFile('./Puntajes/'+DificultadEnlace+'/EPuntos2.txt',Epuntos2, function (err) {
		if (err) throw err; 
		console.log('Saved! --EPunto2'); 	 	});
	/**************/
	/**************/
		fs.writeFile('./Puntajes/'+DificultadEnlace+'/EPuntos3.txt',Epuntos3, function (err) {
		if (err) throw err; 
		console.log('Saved! --EPunto3'); 	 	});
	/**************/
//Epuntos
//ENombre
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/ENombre1.txt',Enombre1, function (err) {
	if (err) throw err;
	console.log('Saved! --ENombre1');});
			 /**************/	
			 /**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/ENombre2.txt',Enombre2, function (err) {
	if (err) throw err;
	console.log('Saved! --ENombre2');});
			 /**************/ 
			 /**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/ENombre3.txt',Enombre3, function (err) {
	if (err) throw err;
	console.log('Saved! --ENombre3');});
			 /**************/
//ENombre
//ESegundoR
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/ESegundoR1.txt',ESegundoR1, function (err) {
	if (err) throw err;
	console.log('Saved! --ESegundoR1');});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/ESegundoR2.txt',ESegundoR2, function (err) {
	if (err) throw err;
	console.log('Saved! --ESegundoR2');});
			/**************/	
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/ESegundoR3.txt',ESegundoR3, function (err) {
	if (err) throw err;
	console.log('Saved! --ESegundoR3');});
			/**************/
//ESegundoR
//EHora
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/EHora1.txt',Ehora1, function (err) {
	if (err) throw err;
	console.log('Saved! --EHora1');});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/EHora2.txt',Ehora2, function (err) {
	if (err) throw err;
	console.log('Saved! --EHora2');});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/EHora3.txt',Ehora3, function (err) {
	if (err) throw err;
	console.log('Saved! --EHora3');});
			/**************/
//EHora
//EMin
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/EMin1.txt',Emin1, function (err) {
	if (err) throw err;
	console.log('Saved! --EMin1');});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/EMin2.txt',Emin2, function (err) {
	if (err) throw err;
	console.log('Saved! --EMin2');});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/EMin3.txt',Emin3, function (err) {
	if (err) throw err;
	console.log('Saved! --EMin3');});
			/**************/
//EMin
//Esegun
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/ESeg1.txt',Eseg1, function (err) {
	if (err) throw err;
	console.log('Saved! --ESeg1');});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/ESeg2.txt',Eseg2, function (err) {
	if (err) throw err;
	console.log('Saved! --ESeg2');});
			/**************/
			/**************/
	fs.writeFile('./Puntajes/'+DificultadEnlace+'/ESeg3.txt',Eseg3, function (err) {
	if (err) throw err;
	console.log('Saved! --ESeg3');});
			/**************/
//Esegun			
			/*****AGREGAR DATOS EMPATE*****/
			
	

	
	
	


}

/*******************************************************************************************/
/*******************************************************************************************/
