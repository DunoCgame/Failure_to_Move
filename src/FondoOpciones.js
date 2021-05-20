var TiempoOpcionesAnimacion=0;

function Fondo_OpcionesBarras(){
	
	if(Escena==3 && TiempoOpcionesAnimacion<3){
	TiempoOpcionesAnimacion++;
}

else if(TiempoOpcionesAnimacion>3){
	TiempoOpcionesAnimacion=4;
}

	
	if(TiempoOpcionesAnimacion<3 ){
/*GENERAR MOVIMIENTO DE BARRAS*/
					barrasDerPortada.PosY=velocidad_de_subida_barraPortada*0;
					barrasIzqPortada.PosY=velocidad_de_subida_barraPortada*0;
/*GENERAR MOVIMIENTO DE BARRAS*/
	}

/*FONDO DE PORTADA*/
	ctx.save();
	ctx.fillStyle="black";
	ctx.fillRect(0,0,W,H);
	ctx.restore();
/*FONDO DE PORTADA*/


if(CapaColisionSuperio.draw==true){
	
/*CAPA DE COLISION*/
// ctx.save();
// ctx.fillStyle="BLUE";
// ctx.fillRect(CapaColisionSuperio.CapaPosX,CapaColisionSuperio.CapaPosY,
// CapaColisionSuperio.CapaW+W,CapaColisionSuperio.CapaH);
// ctx.restore();
}

/*CAPA DE COLISION*/
/*AGREGAR DATOS A LOS ARREGLOS*/
	
for (var ix=0; ix <TamanoPosicionesXYPortada; ix++){  XposPortada[ix]=0;            }
for (var iy=2; iy <TamanoPosicionesXYPortada; iy++){  YposPortada[iy]=iy*160;         }
for (var C =0; C <TamanoPosicionesXYPortada;  C++){   COLORBARASPortada[C]="red";         }	  
for (var D =0; D <TamanoPosicionesXYPortada;  D++){   EstadoPortada[D]=true;                }	  
for (var n =0; n <TamanoPosicionesXYPortada;  n++){   NUMEROPortada[n]=n;                     }
		for (var tr =0; tr <TamanoPosicionesXYPortada; tr++){
			 TipodeObjAPortada[tr]=tr;
			 /*SECUENCIA-1*/	 
	if(TipodeObjAPortada[tr]%2==0){TipodeObjAPortada[tr]=150;	  }		
							  else{TipodeObjAPortada[tr]=550;     }			  
			 /*SECUENCIA-1*/
			 }
/*AGREGAR DATOS A LOS ARREGLOS*/


	 for(var o=0; o<TamanoPosicionesXYPortada; o++){

		 
		// ctx.save();
		// ctx.fillStyle="white";
		// ctx.font = '30px calibri black';
		// ctx.fillText(NUMEROPortada[o],barrasIzqPortada.PosX+XposPortada[o],barrasIzqPortada.PosY+YposPortada[o]);
		// ctx.restore();
		 
		 
/*COLISION DE LA BARRAS EN EL LIMITE SUPERIOR*/

var ColisionBarraDerechaP = Colision_por_cuadro(

barrasDerPortada.PosX+TipodeObjAPortada[o]+200,
barrasDerPortada.PosY+YposPortada[o],
barrasDerPortada.w, 
barrasDerPortada.h,

CapaColisionSuperio.CapaPosX,
CapaColisionSuperio.CapaPosY,
CapaColisionSuperio.CapaW+W,
CapaColisionSuperio.CapaH
);

if(ColisionBarraDerechaP==true &&  CapaColisionSuperio.draw==true){

	TamanoPosicionesXYPortada+=1;
  EstadoPortada[o]=false;  CapaColisionSuperio.draw=false;     }

  if(CapaColisionSuperio.draw==false){
	TiempoBarraColi+=1;
  } 
  
  if(CapaColisionSuperio.draw==false && TiempoBarraColi==400){
	CapaColisionSuperio.draw=true
	TiempoBarraColi=0;
}



/*COLISION DE LA BARRAS EN EL LIMITE SUPERIOR*/
		 
	/*Izquierda*//*Izquierda*//*Izquierda*//*Izquierda*/
if(EstadoPortada[o]==true){
	ctx.save();
	ctx.fillStyle=COLORBARASPortada[o];
	ctx.fillRect(barrasIzqPortada.PosX+XposPortada[o],barrasIzqPortada.PosY+YposPortada[o],
	barrasIzqPortada.w+TipodeObjAPortada[o],barrasIzqPortada.h);
	ctx.restore();
	///////////////BARRA_INTERNA
	ctx.save(); 
	ctx.fillStyle=colorBarrasinter; 
	ctx.fillRect(barrasIzqPortada.PosX+XposPortada[o]-10,
	barrasIzqPortada.PosY+YposPortada[o]+5,
	barrasIzqPortada.w+TipodeObjAPortada[o],20); 
	ctx.restore();
}
/*Izquierda*//*Izquierda*//*Izquierda*//*Izquierda*/
	
	
	/*Derecha*/	/*Derecha*/	/*Derecha*/	/*Derecha*/	/*Derecha*/	/*Derecha*/
if(EstadoPortada[o]==true){
ctx.save();
 ctx.fillStyle=COLORBARASPortada[o];
// ctx.fillStyle="green";
ctx.fillRect(barrasDerPortada.PosX+TipodeObjAPortada[o]+200,
barrasDerPortada.PosY+YposPortada[o],
barrasDerPortada.w, barrasDerPortada.h );
ctx.restore();
///////////////BARRA_INTERNA
ctx.save();
ctx.fillStyle=colorBarrasinter; 
ctx.fillRect(barrasDerPortada.PosX+TipodeObjAPortada[o]+200+10,
barrasDerPortada.PosY+YposPortada[o]+5,barrasDerPortada.w,20); 
ctx.restore();

	
}/*Derecha*//*Derecha*/	/*Derecha*/	/*Derecha*/	/*Derecha*/	/*Derecha*/
	


 }//CIERRE DEL FOR	

if(TiempoOpcionesAnimacion==3){
			 /*GENERAR MOVIMIENTO DE BARRAS*/
					barrasDerPortada.PosY-=velocidad_de_subida_barraPortada;
					barrasIzqPortada.PosY-=velocidad_de_subida_barraPortada;
			/*GENERAR MOVIMIENTO DE BARRAS*/
 
}





}
// Fondo_Portada();