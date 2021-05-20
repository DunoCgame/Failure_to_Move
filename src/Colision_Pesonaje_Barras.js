var Tiempo_Cambio=0;
function Colisiones_Barras_Personaje(){
	
	for(var o=0; o<BarrasVisible; o++){
		/*COLISIONES JUGADOR CON BARRAS*/	/*COLISIONES JUGADOR CON BARRAS*/
	/*COLISION BARRA IZQUIERDA*/


var ColisionBarraI = Colision_por_cuadro(

barrasIzq.PosX+PosXBarra[o],
barrasIzq.PosY+PosYBarra[o],
barrasIzq.w+TipodeObj[o],
barrasIzq.h,

Personaje.PosX+X-35,
Personaje.PosY-35,
Personaje.W,
Personaje.H

);
/*Deteccionde colision dificultad 3*/
 if(BloquePuntos[o]==true ){
 if( Dificultad==3){
			if(ColisionBarraI==true && Tiempo_Cambio<10 && Dificultad==3){
				Tiempo_Cambio+=1;
				Sonido(true,"SonidoColi");
					   Personaje.draw=false;
					   
				  }
				  if(Tiempo_Cambio==2){
					EfectoColi=true;
				  } 
				  if(Tiempo_Cambio==10){
					  Gameover=true;
				  }
 }
	  /*Deteccionde colision dificultad 3*/
	  /*Deteccionde colision dificultad 1-2*/
	  if( Dificultad!=3  ){
				  if(ColisionBarraI==true && Vida_Jugador<=Vida_Jugador && CapaColi==true  ){
					  Sonido(true,"SonidoColi");
					  CapaColi=false;
					  Vida_Jugador-=1;
					  
				  }

					  //Vida =0
					  if(Vida_Jugador==0  && Tiempo_Cambio<50){
				Tiempo_Cambio+=1;
					   Personaje.draw=false;
				  }
				  if(Tiempo_Cambio==2){
					EfectoColi=true;
				  } 
				  if(Tiempo_Cambio==50){
					  Gameover=true;
				  }
	  }
 }
	  /*Deteccionde colision dificultad 1-2*/

							
	/*COLISION BARRA IZQUIERDA*/
	/*COLISION BARRA DERECHA*/


var ColisionBarraD = Colision_por_cuadro(

barrasDer.PosX+TipodeObj[o]+200,
barrasDer.PosY+PosYBarra[o],
barrasDer.w, 
barrasDer.h,

Personaje.PosX+X-35,
Personaje.PosY-35,
Personaje.W,
Personaje.H

);
/*Deteccionde colision dificultad 3*/
// if(BloquePuntos[o]==true){
if(Dificultad==3){
	if(ColisionBarraD==true && Tiempo_Cambio<10){
		Tiempo_Cambio+=1;
		Sonido(true,"SonidoColi");
			   Personaje.draw=false;
		  }
		  if(Tiempo_Cambio==2){
			EfectoColi=true;
		  } 
		  if(Tiempo_Cambio==10){
			  Gameover=true;
		  }
}
/*Deteccionde colision dificultad 3*/
/*Deteccionde colision dificultad 1-2*/
	  if( Dificultad!=3  ){
				  if(ColisionBarraD==true && Vida_Jugador<=Vida_Jugador && CapaColi==true  ){
					  Sonido(true,"SonidoColi");
 CapaColi=false;					 
					 Vida_Jugador-=1;
				  }
						}
	  
// }  
/*Deteccionde colision dificultad 1-2*/
							
	/*COLISION BARRA DERECHA*/
	
	
	
	/*COLISION DE BARRA PUNTOS*//*COLISION DE BARRA PUNTOS*/
	/*COLISION DE BARRA PUNTOS*//*COLISION DE BARRA PUNTOS*/
	/*COLISION DE BARRA PUNTOS*//*COLISION DE BARRA PUNTOS*/
	if(BloquePuntos[o]==true){
							
					 var ColiPuntos = Colision_por_cuadro(	
						barrasDer.PosX+TipodeObj[o], 
						barrasDer.PosY+PosYBarra[o]+10, 
						200, 6, 
						Personaje.PosX+X-35,
						Personaje.PosY-35,
						Personaje.W,Personaje.H
						); 
					 if( Dificultad==3  ){
					if (ColiPuntos==true && perdiste==false){
							Sonido(true,"SonidoPuntos");
						BloquePuntos[o]=false;
						ColorBarra[o]="rgba(116,10,15,1)";
						Puntos+=1;
						BarrasVisible+=1;
					}
						} 
						else
						if( Dificultad!=3  ){
					if (ColiPuntos==true && perdiste==false){
							Sonido(true,"SonidoPuntos");
						BloquePuntos[o]=false;
						ColorBarra[o]="rgba(116,10,15,1)";
						Puntos+=1;
						BarrasVisible+=1;
						if(Vida_Jugador!=6){
					Ciclo_nueva_vida+=1;
						}
					}
					if(Ciclo_nueva_vida==5 && Vida_Jugador!=5){
						Vida_Jugador+=1;
						Ciclo_nueva_vida=0;
					}
						}	
						
						 }

						
						
						if(Puntos==(TamanoPosicionesXY-2)){
							Escena=4;
					for (var C=0; C<TamanoPosicionesXY;  C++){   ColorBarra[C]="rgba(179,179,0,1)";        }
							Victoria=true;
						
						}
		
/*COLISION DE BARRA PUNTOS*//*COLISION DE BARRA PUNTOS*/

	
}//CIERRE DEL FOR 

if( CapaColi==false && Tiempo_de_Activacion_CapaColi<5 && Personaje.draw==true ){
	Tiempo_de_Activacion_CapaColi+=1;
}	
if( CapaColi==false && Tiempo_de_Activacion_CapaColi==5){
		
CapaColi=true;
Tiempo_de_Activacion_CapaColi=0;
}


	
}//CIERRE DE FUNCION