var OpcioneColor1="white";
var TextBack="Back";



var tex0="";
var tex1="";
var tex2="";
var tex3="";
var tex4="";
var tex5="";
var tex6="";
var tex7="";
var tex8="";
var tex9="";
var tex10="";
var tex11="";
var tex12="";
var tex13="";
var tex14="";

var texSondo="";
var texidioma="";
var Option="";


var letf="";
var riht="";
var Dow="";
var up="";
var Ente="";
var Pau="";
	
	
	


function textllamada(){


if(idioma=="ENG"){
		letf="Left";
		riht="Right";
		Dow="Down";
		up="Up";
		Ente="Enter";
		Pau="Space";

	}
else
	if(idioma=="ES" ){
		letf="Izquierda";
		riht="Derecha";
		Dow="Abajo";
		up="Arriba";
		Ente="Enter";
		Pau="Espacio";
	}
}
textllamada();



var Secolor0="white";
var Secolor1="white";
var Secolor2="white";
var Secolor3="white";
var Secolor4="white";
var Secolor5="white";
var Secolor6="white";
var Secolor7="white";
var Secolor8="white";
var Secolor9="white";
var Secolor10="white";
colorSelecFlechaA1="rgba(255,255,255, 0.5)";
colorSelecFlechaA2="rgba(255,255,255, 0.5)";

colorSelecFlechaB1="rgba(255,255,255, 0.5)";
colorSelecFlechaB2="rgba(255,255,255, 0.5)";

colorSelecFlechaC1="rgba(255,255,255, 0.5)";
colorSelecFlechaC2="rgba(255,255,255, 0.5)";

colorSelecFlechaD1="rgba(255,255,255, 0.5)";
colorSelecFlechaD2="rgba(255,255,255, 0.5)";

colorSelecFlechaE1="rgba(255,255,255, 0.5)";
colorSelecFlechaE2="rgba(255,255,255, 0.5)";

colorSelecFlechaF1="rgba(255,255,255, 0.5)";
colorSelecFlechaF2="rgba(255,255,255, 0.5)";

colorSelecFlechaG1="rgba(255,255,255, 0.5)";
colorSelecFlechaG2="rgba(255,255,255, 0.5)";

colorSelecFlechaH1="rgba(255,255,255, 0.5)";
colorSelecFlechaH2="rgba(255,255,255, 0.5)";

colorSelecFlechaI1="rgba(255,255,255, 0.5)";
colorSelecFlechaI2="rgba(255,255,255, 0.5)";

colorSelecFlechaJ1="rgba(255,255,255, 0.5)";
colorSelecFlechaJ2="rgba(255,255,255, 0.5)";
var SeleccionOpciones=0;


var TA="";
var TC="";

var SeleccionDificulta=1;
var SeleccionSonido=1;
var SeleccionBorrarPuntaje=1;
var SeleccionLenguaje=1;

var LetraOp=65;
var TeclaSelet="-";



function Opciones(){
	


	
if(SeleccionOpciones==0	){
	
if(teclado[teclaFlechaDerecha] && Escena==3  && SeleccionSonido==1 ){ 
Sonido(true,"SonidoMenu");
	SeleccionSonido=2; 	 } 		
	else
if(teclado[teclaFlechaIzquierda]  && Escena==3 && SeleccionSonido==2 ){  
Sonido(true,"SonidoMenu");
SeleccionSonido=1;  } 			
	
	}
	
	if(SeleccionOpciones==1){
	
if(teclado[teclaFlechaDerecha] && Escena==3  && SeleccionBorrarPuntaje==1 ){ 
Sonido(true,"SonidoMenu");
	SeleccionBorrarPuntaje=2; 	 } 		
	else
if(teclado[ teclaFlechaIzquierda]  && Escena==3 && SeleccionBorrarPuntaje==2 ){ 
Sonido(true,"SonidoMenu");
 SeleccionBorrarPuntaje=1;  } 			
	
	}
	
if(SeleccionOpciones==2	){
	if(teclado[teclaEnter]  && Escena==3){
	Sonido(true,"SonidoSelect");
	}
	
	if(teclado[teclaFlechaIzquierda] && Escena==3  && Dificultad!=1 && Tecla_PresionadaOPDificultad==0){
			 Sonido(true,"SonidoMenu");	
			Tecla_PresionadaOPDificultad=1;
			
			Dificultad-=1;
			 } 		
		
	if( teclado[teclaFlechaDerecha] && Escena==3 && Dificultad!=3 && Tecla_PresionadaOPDificultad==0){ 
			Sonido(true,"SonidoMenu");

			Tecla_PresionadaOPDificultad=1;
		
			Dificultad+=1;
			 } 
	}
	
	
if(teclado[teclaFlechaDerecha]==false && teclado[teclaFlechaIzquierda]==false && Tecla_PresionadaOPDificultad==1 ){	
	Tecla_PresionadaOPDificultad=0;
								}
								
else if(teclado[teclaFlechaDerecha]==undefined && teclado[teclaFlechaIzquierda]==undefined){
	teclado[teclaFlechaDerecha]=false;
	teclado[teclaFlechaIzquierda]=false;
								}
	
	
	if(SeleccionOpciones==3	){
	
if(teclado[teclaFlechaDerecha] && Escena==3  && SeleccionLenguaje==1 ){ 
Sonido(true,"SonidoMenu");
	SeleccionLenguaje=2; 	 } 		
	else
		if(teclado[teclaFlechaIzquierda]  && Escena==3 && SeleccionLenguaje==2 ){
Sonido(true,"SonidoMenu");
	SeleccionLenguaje=1;  } 			
	
	}
	

	
		
		
	if(	SeleccionOpciones==4 
		|| SeleccionOpciones==5 || SeleccionOpciones==6 
		|| SeleccionOpciones==7 || SeleccionOpciones==8 || SeleccionOpciones==9
				){
		
		
		
if(teclado[teclaFlechaDerecha] && Escena==3 && LetraOp!=91 && 
Tecla_PresionadaLetrasOP==0){
	Sonido(true,"SonidoMenu");
	Tecla_PresionadaLetrasOP=1;
								LetraOp+=1;
								TA = String.fromCharCode(LetraOp);
								TC=LetraOp;
								
								}
									else 
	if(teclado[ teclaFlechaIzquierda]  && Escena==3 && LetraOp!=64 &&
Tecla_PresionadaLetrasOP==0){
	Sonido(true,"SonidoMenu");
	Tecla_PresionadaLetrasOP=1;
								LetraOp-=1;
								TA = String.fromCharCode(LetraOp);
								TC=LetraOp;
											
								} 	
								   }
if(teclado[teclaFlechaDerecha]==false && teclado[teclaFlechaIzquierda]==false && Tecla_PresionadaLetrasOP==1){
	Sonido(false,"SonidoMenu");
	Tecla_PresionadaLetrasOP=0;
}
	else if(teclado[teclaFlechaDerecha]==undefined && teclado[teclaFlechaIzquierda]==undefined){
	teclado[teclaFlechaDerecha]=false;
	teclado[teclaFlechaIzquierda]=false;
}

								   if(LetraOp>64 && LetraOp<91){
//Izquierda	//Izquierda	//Izquierda								
if(SeleccionOpciones==4 && teclado[teclaFlechaDerecha]){
		teclaFlechaIzquierda=TC;
		letf=TA;
}
if(SeleccionOpciones==4 && teclado[teclaFlechaIzquierda]){
		teclaFlechaIzquierda=TC;
		letf=TA;
}
//Izquierda	//Izquierda	//Izquierda	
//Derecha//Derecha//Derecha//Derecha
if(SeleccionOpciones==5 && teclado[teclaFlechaDerecha]  ){
teclaFlechaDerecha=TC;
riht=TA;      
}
if(SeleccionOpciones==5 && teclado[teclaFlechaIzquierda]  ){
teclaFlechaDerecha=TC;
riht=TA;      
}
//Derecha//Derecha//Derecha//Derecha
//	ariba//	ariba//	ariba//	ariba
if(SeleccionOpciones==6 && teclado[teclaFlechaDerecha]  ){
teclaFlechaArriba=TC;
up=TA;      
}
if(SeleccionOpciones==6 && teclado[teclaFlechaIzquierda]  ){
teclaFlechaArriba=TC;
up=TA;      
}
//	ariba//	ariba//	ariba//	ariba
//abajo//abajo//abajo//abajo//abajo//abajo//abajo//abajo
if(SeleccionOpciones==7 && teclado[teclaFlechaDerecha]  ){
teclaFlechaArriba=TC;
Dow=TA;      
}
if(SeleccionOpciones==7 && teclado[teclaFlechaIzquierda]  ){
teclaFlechaArriba=TC;
Dow=TA;      
}
//abajo//abajo//abajo//abajo//abajo//abajo//abajo//abajo
// //Ente// //Ente// //Ente// //Ente
if(SeleccionOpciones==8 && teclado[teclaFlechaDerecha]  ){
teclaEnter=TC;
Ente=TA;}
if(SeleccionOpciones==8 && teclado[teclaFlechaIzquierda]  ){
teclaEnter=TC;
Ente=TA;}
// //Ente// //Ente// //Ente// //Ente
//pausa//pausa//pausa//pausa//pausa//pausa//pausa//pausa
if(SeleccionOpciones==9 && teclado[teclaFlechaDerecha]  ){
	teclaEspacio=TC;
	Pau=TA; }
if(SeleccionOpciones==9 && teclado[teclaFlechaIzquierda]  ){
	teclaEspacio=TC;
	Pau=TA; }
//pausa//pausa//pausa//pausa//pausa//pausa//pausa//pausa
								   }//cierre
	
	if(idioma=="ENG"  ){
		
		tex0="Difficulty";
		tex1="Sound";
		tex2="Yes";
		tex3="Not";
		tex4="Remove Score";
		tex5="Languaje";
		tex6="Spanish";
		tex7="English";
		tex8="Left";
		tex9="Right";
		tex10="Up";
		tex11="Down";
		tex12="Select";
		tex13="Pause";
		tex14="Back";
		
		//
		tex15="Easy";
		tex16="Normal";
		tex17="Extreme";
			Option="Option";
		}
		if(idioma=="ES" ){
			tex0="Dificultad";
		tex1="Sonido";
		tex2="Si";
		tex3="No";
		tex4="Eliminar Puntos";
		tex5="Idioma";
		tex6="Espa\u00F1ol";
		tex7="Ingles";
		tex8="Izquierda";
		tex9="Derecha";
		tex10="Arriba";
		tex11="Abajo";
		tex12="Selección";
		tex13="Pausa";
		tex14="Regresar";
		
		//
		tex15="Fácil";
		tex16="Normal";
		tex17="Extremo";
		
		Option="Opción";
		}

//movimiento


if( teclado[teclaFlechaAbajo]  && Tecla_Presionada==0 && Escena==3){ 
Sonido(true,"SonidoMenu");
	switch(SeleccionOpciones){
		
		case 0:
	Tecla_Presionada=1;
	SeleccionOpciones=1;
		break;
		
		case 1:
	Tecla_Presionada=1;
	SeleccionOpciones=2;
		break;
		
		case 2:
	Tecla_Presionada=1;
	SeleccionOpciones=3;
		break;
		
		case 3:
    Tecla_Presionada=1;
	SeleccionOpciones=4;
		break;
		
		case 4:
    Tecla_Presionada=1;
	SeleccionOpciones=5;
		break;	
		
		case 5:
    Tecla_Presionada=1;
	SeleccionOpciones=6;
		break;	
		
		case 6:
    Tecla_Presionada=1;
	SeleccionOpciones=7;
		break;
		
		case 7:
    Tecla_Presionada=1;
	SeleccionOpciones=8;
		break;	
		
		case 8:
    Tecla_Presionada=1;
	SeleccionOpciones=9;
		break;
		
		case 9:
    Tecla_Presionada=1;
	SeleccionOpciones=10;
		break;
		
		case 10:
    Tecla_Presionada=1;
	SeleccionOpciones=0;
		break;	
		default:
		console.log("ERROR_MENU");

	}
			}
			//Arriba
			else if(teclado[teclaFlechaArriba] && Tecla_Presionada==0){
				Sonido(true,"SonidoMenu");
				switch(SeleccionOpciones){
		
		case 0:
	Tecla_Presionada=1;
	SeleccionOpciones=10;
		break;
		
		case 1:
	Tecla_Presionada=1;
	SeleccionOpciones=0;
		break;
		
		case 2:
	Tecla_Presionada=1;
	SeleccionOpciones=1;
		break;
		
		case 3:
    Tecla_Presionada=1;
	SeleccionOpciones=2;
		break;
		
		case 4:
    Tecla_Presionada=1;
	SeleccionOpciones=3;
		break;
		
		case 5:
    Tecla_Presionada=1;
	SeleccionOpciones=4;
		break;
		
		case 6:
    Tecla_Presionada=1;
	SeleccionOpciones=5;
		break;
		
		case 7:
    Tecla_Presionada=1;
	SeleccionOpciones=6;
		break;
		
		case 8:
    Tecla_Presionada=1;
	SeleccionOpciones=7;
		break;
		
		case 9:
    Tecla_Presionada=1;
	SeleccionOpciones=8;
		break;
		
		case 10:
    Tecla_Presionada=1;
	SeleccionOpciones=9;
		break;
		
		
		
		
		
		default:
		console.log("ERROR_MENU");

	}				
			}

if(teclado[teclaFlechaAbajo]==false && teclado[teclaFlechaArriba]==false && Tecla_Presionada==1){
		Tecla_Presionada=0;
	}
	else if(teclado[teclaFlechaAbajo]==undefined && teclado[teclaFlechaArriba]==undefined){
		teclado[teclaFlechaAbajo]=false;
		teclado[teclaFlechaArriba]=false;
	}



if(teclado[teclaEnter]  && SeleccionOpciones==0  && Escena==3 && Tecla_PresionadaEnter==0 ){
Sonido(true,"SonidoSelect");
	if(SeleccionSonido==1){ EstadoSonido=true;}
		else
	if(SeleccionSonido==2){ EstadoSonido=false;} 
		
					}
					
					
				

if(teclado[teclaEnter]  && SeleccionOpciones==3  && Escena==3 && Tecla_PresionadaEnter==0){
	Sonido(true,"SonidoSelect");
	
if(SeleccionLenguaje==1){ SelectLenguaje=true;  idioma="ENG"; textllamada(); }
else
if(SeleccionLenguaje==2){ SelectLenguaje=false; idioma="ES"; textllamada(); } 
  
  }


if(teclado[teclaEnter]  && SeleccionOpciones==1 && Escena==3 && Tecla_PresionadaEnter==0){
	Sonido(true,"SonidoSelect");
			if(SeleccionBorrarPuntaje==2){

			SelecaBorrarctivo=true;  
	//Borrar Valores
Borrar_Puntaje();
	//Borrar Valores



	
	}
else if(SeleccionBorrarPuntaje==1){ SelecaBorrarctivo=false;} 	


}if(teclado[teclaEnter]  && SeleccionOpciones==10 && Escena==3 && Tecla_PresionadaOP==0 && Tecla_PresionadaEnter==0){
	Sonido(true,"SonidoSelect");
	Tecla_PresionadaOP=1;
	seleccionPrincipal=2;
	Escena=1;
 }
 
if(teclado[teclaEnter]==false && Tecla_PresionadaOP==1 ){
	Tecla_PresionadaOP=0; 
	}
	if(teclado[teclaEnter]==false  && Tecla_PresionadaEnter==1){
	Tecla_PresionadaEnter=0;
	}
else if(teclado[teclaEnter]==undefined ){ 	teclado[teclaEnter]=false;   }




//movimiento
if(SeleccionOpciones==0){
		Secolor0="blue";
		Secolor1="white";
	Secolor2="white";
	Secolor3="white";
	Secolor4="white";
	Secolor5="white";
	Secolor6="white";
	Secolor7="white";
	Secolor8="white";
	Secolor10="white";
	Secolor9="white";	
	
}
	if(SeleccionOpciones==1){
			Secolor0="white";
	Secolor1="blue";
	Secolor2="white";
	Secolor3="white";
	Secolor4="white";
	Secolor5="white";
	Secolor6="white";
	Secolor7="white";
	Secolor8="white";
	Secolor10="white";
	Secolor9="white";	

}

if(SeleccionOpciones==2){
		Secolor0="white";
	Secolor2="blue";
	Secolor1="white";
	Secolor3="white";
	Secolor4="white";
	Secolor5="white";
	Secolor6="white";
	Secolor7="white";
	Secolor8="white";
	Secolor10="white";
	Secolor9="white";
	
}

if(SeleccionOpciones==3){
		Secolor0="white";
	Secolor3="blue";
	Secolor1="white";
	Secolor2="white";
	Secolor4="white";
	Secolor5="white";
	Secolor6="white";	
	Secolor7="white";
	Secolor8="white";	
	Secolor10="white";
	Secolor9="white";
}

if(SeleccionOpciones==4){
		Secolor0="white";
	Secolor4="blue";
	Secolor1="white";
	Secolor2="white";
	Secolor3="white";
	Secolor5="white";
	Secolor6="white";	
	Secolor7="white";
	Secolor8="white";	
	Secolor10="white";
	Secolor9="white";
}
if(SeleccionOpciones==5){
		Secolor0="white";
	Secolor5="blue";
	Secolor1="white";
	Secolor2="white";
	Secolor3="white";
	Secolor4="white";
	Secolor6="white";	
	Secolor7="white";
	Secolor8="white";
	Secolor10="white";
	Secolor9="white";
		
}
if(SeleccionOpciones==6){
		Secolor0="white";
	Secolor6="blue";
	Secolor1="white";
	Secolor2="white";
	Secolor3="white";
	Secolor4="white";
	Secolor5="white";	
	Secolor7="white";
	Secolor8="white";
	Secolor10="white";
	Secolor9="white";
		
}
if(SeleccionOpciones==7){
		Secolor0="white";
	Secolor7="blue";
	Secolor6="white";
	Secolor1="white";
	Secolor2="white";
	Secolor3="white";
	Secolor4="white";
	Secolor5="white";	
	Secolor8="white";
	Secolor10="white";
	Secolor9="white";	
}
if(SeleccionOpciones==8){
		Secolor0="white";
	Secolor8="blue";
	Secolor7="white";
	Secolor6="white";
	Secolor1="white";
	Secolor2="white";
	Secolor3="white";
	Secolor4="white";
	Secolor5="white";	
	Secolor10="white";
	Secolor9="white";

			
}
if(SeleccionOpciones==9){
		Secolor0="white";
	Secolor9="blue";
	Secolor8="white";
	Secolor7="white";
	Secolor6="white";
	Secolor1="white";
	Secolor2="white";
	Secolor3="white";
	Secolor4="white";
	Secolor5="white";	
	Secolor10="white";


		
}if(SeleccionOpciones==10){
		Secolor0="white";
	Secolor10="blue";
	Secolor9="white";
	Secolor8="white";
	Secolor7="white";
	Secolor6="white";
	Secolor1="white";
	Secolor2="white";
	Secolor3="white";
	Secolor4="white";
	Secolor5="white";	


		
}

//flechas
//sonido

	
	
	
	
	
	
}/*Cierre function*/