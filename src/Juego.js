


function Jugador(){
	/*VIDA DE JUGADOR*/
	 if(teclado[teclaEnter]==false &&  Tecla_PresionadaEnter==1){ Tecla_PresionadaEnter=0;  }
 else if(teclado[teclaEnter]==undefined ){ 	teclado[teclaEnter]=false;   }
	
if(Personaje.draw==true  && Escena==2 && Dificultad!=3){
	if(Vida_Jugador==5){ColorPersonaje="rgba(13,0,255,1)";  ColorBorde="rgba(179,179,0,1)";}
	if(Vida_Jugador==4){ColorPersonaje="rgba(13,0,255,1)";  ColorBorde="rgba(196,196,196,1)";}
	if(Vida_Jugador==3){ColorPersonaje="rgba(13,0,255,1)";  ColorBorde="#000099";}
	if(Vida_Jugador==2){ColorPersonaje="rgba(13,0,255,0.4)"; ColorBorde="yellow";}
	if(Vida_Jugador==1){ColorPersonaje="rgba(13,0,255,0.2)";  ColorBorde="red";}
	
	}
	if(Personaje.draw==true  && Escena==2 && Dificultad==3){
		ColorPersonaje="blue"; 		ColorBorde="#000099";
	}
	/*VIDA DE JUGADOR*/
	if(Personaje.draw==true  && Escena==2){
		/*capa de colision*//*capa de colision && IngresNombre==false && Gameover==false*/
				// ctx.save();
				// ctx.fillStyle="orange";
				// ctx.fillRect(Personaje.PosX+X-35, Personaje.PosY-35, Personaje.W, Personaje.H);
				// ctx.restore();
		/*capa de colision*//*capa de colision*/
		
	/*JUGADOR*/
		/*borde*/
	
			if(CapaColi==true){
				ctx.save();
				ctx.fillStyle=ColorBorde;
				ctx.beginPath();
				ctx.arc( 	Personaje.PosX+X, 		Personaje.PosY, 	45, 	0,Math.PI*2,true 	);
				ctx.closePath;
				ctx.fill();
			
		}
		/*borde*/
/*JUGADOR*/

		ctx.save();
		ctx.fillStyle=ColorPersonaje;
		ctx.beginPath();
		ctx.arc(Personaje.PosX+X, Personaje.PosY,40,0,Math.PI*2,true 	);
		ctx.closePath;
		ctx.fill();
		

/*JUGADOR*/

}/*CIERRE-DEL-PINTADO-PRESONAJE*/
	if(EfectoColi==true){
		ColorPersonaje=ColorBorde;
	if( IngresNombre==false && Gameover==false){
						 /*EFECTO-COLISIONES*/
				/*Efecto-coli-1*/
				ctx.save();
				ctx.fillStyle=ColorPersonaje;
				ctx.beginPath();
				ctx.arc(EfectoColi1.PosX+X,EfectoColi1.PosY,20,0,Math.PI*2,true);
				ctx.closePath;
				ctx.fill();
				/*Efecto-coli-1*/
				/*Efecto-coli-2*/
				ctx.save();
				ctx.fillStyle=ColorPersonaje;
				ctx.beginPath();
				ctx.arc(EfectoColi2.PosX+X, EfectoColi2.PosY,20,0,Math.PI*2,true);
				ctx.closePath;
				ctx.fill();
				/*Efecto-coli-2*/
				/*Efecto-coli-3*/
				ctx.save();
				ctx.fillStyle=ColorPersonaje;
				ctx.beginPath();
				ctx.arc( EfectoColi3.PosX+X, EfectoColi3.PosY, 20, 0,Math.PI*2,true );
				ctx.closePath;
				ctx.fill();
				/*Efecto-coli-3*/
				/*Efecto-coli-4*/
				ctx.save();
				ctx.fillStyle=ColorPersonaje;
				ctx.beginPath();
				ctx.arc( EfectoColi4.PosX+X, EfectoColi4.PosY, 20, 0,Math.PI*2,true );
				ctx.closePath;
				ctx.fill();

				/*Efecto-coli-4*/
	}

					 // /*EFECTO-COLISIONES*/
					 EfectoColi1.PosX+=30;
					 EfectoColi1.PosY+=30; 
					 EfectoColi2.PosX-=30;
					 EfectoColi2.PosY-=30;
					 EfectoColi3.PosX+=30;
					 EfectoColi3.PosY-=30; 
					 EfectoColi4.PosX-=30;
					 EfectoColi4.PosY+=30;
					 // // /*EFECTO-COLISIONES*/
				 }
	
	/*MOVIMIENTO DE PERSONAJEP*/	/*MOVIMIENTO DE PERSONAJEP*/
	if(Pause==false && Gameover==false && IngresNombre==false && EfectoColi==false){
		
							if (teclado[teclaFlechaIzquierda] && (Personaje.PosX+X)>53        ){ 	
							Sonido(true,"SonidoMov");
							
						 Personaje.PosX-=Velocidad_Mov_Personaje;
									EfectoColi1.PosX-=Velocidad_Mov_Personaje;
								  EfectoColi2.PosX-=Velocidad_Mov_Personaje;
								  EfectoColi3.PosX-=Velocidad_Mov_Personaje;
								  EfectoColi4.PosX-=Velocidad_Mov_Personaje;


							} 	 	
							if (teclado[teclaFlechaDerecha] && (Personaje.PosX+X)<W-52             ){ 	
							Sonido(true,"SonidoMov");
								  
									  Personaje.PosX+=Velocidad_Mov_Personaje;
								  EfectoColi1.PosX+=Velocidad_Mov_Personaje;
								  EfectoColi2.PosX+=Velocidad_Mov_Personaje;
								  EfectoColi3.PosX+=Velocidad_Mov_Personaje;
								  EfectoColi4.PosX+=Velocidad_Mov_Personaje;


							}
							if (teclado[teclaFlechaArriba] && Personaje.PosY>90 ){
							Sonido(true,"SonidoMov");	
							
								Personaje.PosY-=Velocidad_Mov_Personaje;
								  EfectoColi1.PosY-=Velocidad_Mov_Personaje;
								  EfectoColi2.PosY-=Velocidad_Mov_Personaje;
								  EfectoColi3.PosY-=Velocidad_Mov_Personaje;
								  EfectoColi4.PosY-=Velocidad_Mov_Personaje;
							}
							if (teclado[teclaFlechaAbajo]){
							Sonido(true,"SonidoMov");
							
									  Personaje.PosY+=Velocidad_Mov_Personaje;
								  EfectoColi1.PosY+=Velocidad_Mov_Personaje;
								  EfectoColi2.PosY+=Velocidad_Mov_Personaje;
								  EfectoColi3.PosY+=Velocidad_Mov_Personaje;
								  EfectoColi4.PosY+=Velocidad_Mov_Personaje;

							}
													
							if(Dificultad==1){
								if (teclado[teclaFlechaAbajo]==true){Abajo=3.7;}
								if (teclado[teclaFlechaAbajo]==false){Abajo=0;}
							}
							if(Dificultad==2){
								if (teclado[teclaFlechaAbajo]==true){Abajo=4;}
								if (teclado[teclaFlechaAbajo]==false){Abajo=0;}
							}
							if(Dificultad==3){
								if (teclado[teclaFlechaAbajo]==true){Abajo=4;}
								if (teclado[teclaFlechaAbajo]==false){Abajo=0;}
							}
							// 
	
	}
	
	/*MOVIMIENTO DE PERSONAJEP*/	/*MOVIMIENTO DE PERSONAJEP*/
	
	

	
}/*CIERRE DE FUNCION*/


var TeclaPausa=0;
var idiomaPause="";

function Pausa(){
		if(idioma=="ENG"){ idiomaPause="PAUSE";}
		if(idioma=="ES"){idiomaPause="PAUSA";}
		if(Gameover==false && IngresNombre==false){
			
			/*PAUSE*/	/*PAUSE*/	/*PAUSE*/
		if (teclado[teclaEspacio]  && TeclaPausa==0){
			Sonido(true,"SonidoPausa");
			if(Pause==false){
				
				
				Pause=true; TeclaPausa=1;}
			else
			 if(Pause==true ){
		 
				 Pause=false; TeclaPausa=1;}

		}
			//////////////////reinicio de teclas
		
	if(teclado[teclaEspacio]==false && TeclaPausa==1){ 	TeclaPausa=0; }
	else if(teclado[teclaEspacio]==undefined ){ 	teclado[teclaEspacio]=false;   }
		//////////////////reinicio de teclas
		
		
		if(Pause==true && Gameover==false){
				if(TiempoCentrar(4,2,true)==true){
		ctx.save();
		ctx.fillStyle="blue";
		ctx.font = '200px calibri black';
		ctx.fillText(idiomaPause,X-250,Y+50);
		ctx.restore();
				}
				else{
					ctx.save();
		ctx.fillStyle="red";
		ctx.font = '200px calibri black';
		ctx.fillText(idiomaPause,X-250,Y+50);
		ctx.restore();
					
				}
		}
		/*PAUSE*/	/*PAUSE*/	/*PAUSE*/
		
		
		}


}


	