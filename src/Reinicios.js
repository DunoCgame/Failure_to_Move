
function Reinicio(){


	
	if(Escena!=1 && TiempoPortadaAnimacion==3){TiempoPortadaAnimacion=0; seleccionPrincipal=1; 		}
		
	if(Escena!=3 && TiempoOpcionesAnimacion==3){ TiempoOpcionesAnimacion=0; SeleccionOpciones=0; 		}
	
	if(EstadoReinicio==true){		
		
 for (var DE =0; DE<TamanoPosicionesXY;  DE++){   Estado[DE]=true;             }	  
for (var nE =0; nE<TamanoPosicionesXY;  nE++){   BloquePuntos[nE]=true;       } 
	 for (var CE =0; CE<TamanoPosicionesXY;  CE++){   ColorBarra[CE]="red";        }	
	
	
	colorNombre1="white";
	colorNombre2="white";
	colorNombre3="white";

EstadoBarras=0;


		TiempoJuegoAnimacion=1; 
TiempoJuegoAnimacion=0;
barrasDer.PosY=barrasDer.PosY*0;
barrasIzq.PosY=barrasIzq.PosY*0;



Personaje.draw=true;
Personaje.PosX=0;
Personaje.PosY=70;
Vida_Jugador=3;
Ciclo_nueva_vida=0;
	
	EfectoColi1.PosX=0;
	EfectoColi1.PosY=70;
	
	EfectoColi2.PosX=0;
	EfectoColi2.PosY=70;
	
	EfectoColi3.PosX=0;
	EfectoColi3.PosY=70;
	
	EfectoColi4.PosX=0;
	EfectoColi4.PosY=70;
	
	
	SelectLenguaje=false;

	
Gameover=false;
IngresNombre=false;
Podio=false;
perdiste=false;
Resultado=false;	
EfectoColi=false;
CapaColi=true;
Victoria=false;

Seg=0;
min=0;
hora=0;
Tiempo_Cambio=0;
Puntos=0;




 a="*";
b="*";
 c="*";
 
Caracter=1;

MovAyB=1;
MovEnscrolltext=0;
Letra=64;
TeclaSelet="-";
Insert=false;
Rotacion=0;



teclaFlechaDerecha=39;
teclaFlechaArriba=38;
teclaFlechaIzquierda=37;
teclaFlechaAbajo=40;
teclaEnter = 13;
teclaEspacio = 32;
// seleccionPrincipal=0;
/*Variables del teclado */
//valores de localhost
Tescritura=0;
Tresultado=0;

 // TamanoPosicionesXY=0;
BarrasVisible=6;
vcolorFondo="black";
colorBarras="red";
colorBarrasinter="black";

	


			
	}


}//Cierre de Funcion 