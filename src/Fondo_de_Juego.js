
	
function Contadore_Reinicio_BARRAS(){
				if(Escena==2 && TiempoJuegoAnimacion<3){TiempoJuegoAnimacion++;}
}


var EstadoBarras=0;
function JuegoFondo(){
	
		if(TiempoJuegoAnimacion<3 ){
		/*GENERAR MOVIMIENTO DE BARRAS*/
				 barrasDer.PosY=barrasDer.PosY*0;
			 barrasIzq.PosY=barrasIzq.PosY*0;
		/*GENERAR MOVIMIENTO DE BARRAS*/
					}
	
/*FONDO DE PORTADA*/
		ctx.save();
		ctx.fillStyle="black";
		ctx.fillRect(0,0,W,H);
		ctx.restore();
/*FONDO DE PORTADA*/


	 for(var o=0; o<BarrasVisible; o++){
		 
				// ctx.save();
				// ctx.fillStyle="white";
				// ctx.font = '30px calibri black';
				// ctx.fillText(NUMERO[o],barrasIzq.PosX+PosXBarra[o],barrasIzq.PosY+PosYBarra[o]);
				// ctx.restore();
	 

/*Izquierda*//*Izquierda*//*Izquierda*//*Izquierda*/
	if(Estado[o]==true){
		ctx.save();
		ctx.fillStyle=ColorBarra[o];
	ctx.fillRect(
	barrasIzq.PosX+PosXBarra[o],
	barrasIzq.PosY+PosYBarra[o],
	barrasIzq.w+TipodeObj[o],
	barrasIzq.h	);
		ctx.restore();
		/*BARRA_INTERNA*/
		ctx.save(); 
		ctx.fillStyle=colorBarrasinter; 
		ctx.fillRect(barrasIzq.PosX+PosXBarra[o]-10, 	
		barrasIzq.PosY+PosYBarra[o]+5, 	
		barrasIzq.w+TipodeObj[o],20);
		ctx.restore();
		/*BARRA_INTERNA*/
	}
	
/*Izquierda*//*Izquierda*//*Izquierda*//*Izquierda*/



/*Derecha*/	/*Derecha*/	/*Derecha*/	/*Derecha*/	/*Derecha*/	/*Derecha*/
	if(Estado[o]==true){
		ctx.save();
		ctx.fillStyle=ColorBarra[o];
		ctx.fillRect(
		barrasDer.PosX+TipodeObj[o]+200,
		barrasDer.PosY+PosYBarra[o],
		barrasDer.w, barrasDer.h );
		ctx.restore();
		/*BARRA_INTERNA*/
		ctx.save();
		ctx.fillStyle=colorBarrasinter; 
		ctx.fillRect(barrasDer.PosX+TipodeObj[o]+200+10,
		barrasDer.PosY+PosYBarra[o]+5,barrasDer.w,20); 
		ctx.restore();
	   /*BARRA_INTERNA*/	
	}
/*Derecha*//*Derecha*/	/*Derecha*/	/*Derecha*/	/*Derecha*/	/*Derecha*/
	
/*BARRA PUNTOS*//*BARRA PUNTOS*/
	if(BloquePuntos[o]==true){
		ctx.save();
		ctx.fillStyle="blue";
		ctx.fillRect(barrasDer.PosX+TipodeObj[o], barrasDer.PosY+PosYBarra[o]+10, 200, 6); 
		ctx.restore();}	
/*BARRA PUNTOS*//*BARRA PUNTOS*/


	

	 }//cierre for
	 

	
	if(EstadoBarras==0){
			EstadoBarras=1;
	
	
		
		
		if(Dificultad==1){
		for (var ix=0; ix <TamanoPosicionesXY; ix++){  PosXBarra[ix]=0;             }
		for (var iy=2; iy <TamanoPosicionesXY; iy++){  PosYBarra[iy]=iy*190;        }
		for (var C =0; C  <TamanoPosicionesXY;  C++){   ColorBarra[C]="red";        }	  
		for (var D =0; D  <TamanoPosicionesXY;  D++){   Estado[D]=true;             }	  
		for (var n =0; n  <TamanoPosicionesXY;  n++){   NUMERO[n]=n;                }
		for (n =0;     n  <TamanoPosicionesXY;  n++){   BloquePuntos[n]=true;       } 
			for (var tr =0; tr <TamanoPosicionesXY; tr++){
				 TipodeObj[tr]=tr;
				 /*SECUENCIA-1*/	 
		if(TipodeObj[tr]%2==0){TipodeObj[tr]=Math.floor(Math.random() * 430    +      50);}		
						  else{TipodeObj[tr]=Math.floor(Math.random() * 520    +      50);}			  
				 /*SECUENCIA-1*/
				 }
		/*AGREGAR DATOS A LOS ARREGLOS*/	}
		
		if(Dificultad==2){
		for (var ix=0; ix <TamanoPosicionesXY; ix++){  PosXBarra[ix]=0;            }
		for (var iy=2; iy <TamanoPosicionesXY; iy++){  PosYBarra[iy]=iy*160;       }
		for (var C =0; C  <TamanoPosicionesXY;  C++){   ColorBarra[C]="red";        }	  
		for (var D =0; D  <TamanoPosicionesXY;  D++){   Estado[D]=true;             }	  
		for (var n =0; n  <TamanoPosicionesXY;  n++){   NUMERO[n]=n;                }
		for (n =0;     n  <TamanoPosicionesXY;  n++){   BloquePuntos[n]=true;       } 
			for (var tr =0; tr <TamanoPosicionesXY; tr++){
				 TipodeObj[tr]=tr;
				 /*SECUENCIA-1*/	 
		if(TipodeObj[tr]%2==0){TipodeObj[tr]=Math.floor(Math.random() * 25        +      50);}		
						  else{TipodeObj[tr]=Math.floor(Math.random() * 570       +      50);}			  
				 /*SECUENCIA-1*/
				 }
		/*AGREGAR DATOS A LOS ARREGLOS*/	 }
		
		if(Dificultad==3){
		for (var ix=0; ix <TamanoPosicionesXY; ix++){  PosXBarra[ix]=0;            }
		for (var iy=2; iy <TamanoPosicionesXY; iy++){  PosYBarra[iy]=iy*154;       }
		for (var C =0; C  <TamanoPosicionesXY;  C++){   ColorBarra[C]="red";        }	  
		for (var D =0; D  <TamanoPosicionesXY;  D++){   Estado[D]=true;             }	  
		for (var n =0; n  <TamanoPosicionesXY;  n++){   NUMERO[n]=n;                }
		for (n =0;     n  <TamanoPosicionesXY;  n++){   BloquePuntos[n]=true;       } 
			for (var tr =0; tr <TamanoPosicionesXY; tr++){
				 TipodeObj[tr]=tr;
				 /*SECUENCIA-1*/	 
		if(TipodeObj[tr]%2==0){TipodeObj[tr]=Math.floor(Math.random() * 150       +      50); 	}		
						  else{TipodeObj[tr]=560; 				  }			  
					 /*SECUENCIA-1*/ 				 }
			/*AGREGAR DATOS A LOS ARREGLOS*/}
	
	}//cierre estado barra
	 
	
		 /*GENERAR MOVIMIENTO DE BARRAS*/
if(TiempoJuegoAnimacion==3){
	 if(Pause==false && Escena==2 && Gameover==false && IngresNombre==false && Podio==false && Victoria==false){
						barrasDer.PosY-=VelocidadBarras+Abajo;
						barrasIzq.PosY-=VelocidadBarras+Abajo;
	 }  }
	/*GENERAR MOVIMIENTO DE BARRAS*/
	
	
			
	
	
}/*CIERRE DEL FONDO DE JUEGO*/
