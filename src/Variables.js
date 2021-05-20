
/*VARIABLES ECSENA-1/PORTADA*/
var Escena=1;
var iniciarjuego=false;
/*VARIABLES ECSENA-1/PORTADA*/

/*Variables del teclado */
var teclado={};
var Tecla_Presionada=0;
var Tecla_PresionadaEnter=0;
var Tecla_PresionadaLetras=0;
var Tecla_PresionadaLetrasOP=0;
var Tecla_PresionadaOP=0;
var Tecla_PresionadaOPDificultad=0;
var Tecla_PresionadaPo=0;

var TeclapressEnterPortada=0;
var TeclapressMovAB=0;
var teclaFlechaDerecha=39;

var teclaFlechaIzquierda=37;

var teclaFlechaArriba=38;
var teclaFlechaAbajo=40;
var teclaEnter = 13;
var teclaEspacio = 32;
var seleccionPrincipal=0;

var EstadoSonido=true;
/*Variables del teclado */


//valores de localhost
var Tescritura=0;
var Tresultado=0;

/*Variable de intefas cronometro*/
/*Puntos*/
var Puntos=0;	
/*Puntos*/ 
var Seg=0;
var Min=0;
var Hora=0;
var SegundoR0=0;
/*Variable de intefas cronometro*/
var Tiempo_CarpetasArchivos=0;
var Activacion_de_CreacionCarpetasPuntos=false;
var Activacion_de_CreacionArchivos=false;

//Variables de entrada
		var Puntos1=0;
		var Nombre1="***";
		var Seg1=0;
		var Min1=0;
		var Hora1=0;
		var SegundoR1=0;

		var Puntos2=0;
		var Nombre2="***";
		var Seg2=0;
		var Min2=0;
		var Hora2=0;
		var SegundoR2=0;

		var Puntos3=0;
		var Nombre3="***";
		var Seg3=0;
		var Min3=0;
		var Hora3=0;
		var SegundoR3=0;
//variables de salida

var nombre1;
var puntos1;
var seg1;
var min1;
var hora1;
var Segundor1;

var nombre2;
var puntos2;
var seg2;
var min2;
var hora2;
var Segundor2;

var nombre3;
var puntos3;
var seg3;
var min3;
var hora3;
var Segundor3;

		
		

/////valores de Entrada Empate
////////1
var Enombre1="***";
var Epuntos1=0;
var Eseg1=0;
var Emin1=0;
var Ehora1=0;
var ESegundoR1=0;
///////2
var Enombre2="***";
var Epuntos2=0;
var Eseg2=0;
var Emin2=0;
var Ehora2=0;
var ESegundoR2=0;
///////3
var Enombre3="***";
var Epuntos3=0;
var Eseg3=0;
var Emin3=0;
var Ehora3=0;
var ESegundoR3=0;

/////valores en empate SALIDA
var enombre1;
var epuntos1;
var eseg1;
var emin1;
var ehora1;
var eSegundor1;

var enombre2;
var epuntos2;
var eseg2;
var emin2;
var ehora2;
var eSegundor2;

var enombre3;
var epuntos3;
var eseg3;
var emin3;
var ehora3;
var eSegundor3;
//SALIDA
		
		
		
		
/*POSICIONES*//*POSICIONES*/
var TiempoEmpate=0;
	
	
/*VARIABLES DE DETECCION DE MAUSE*//*VARIABLES DE DETECCION DE MAUSE*/
var Click=false; 
var Entrar=false;
document.getElementById("body").addEventListener("mousedown", function(){ Entrar=true; Click=true; }  );  
document.getElementById("body").addEventListener("mouseup", function (){  Entrar=false;  Click=false; }  ); 
/*VARIABLES DE DETECCION DE MAUSE*//*VARIABLES DE DETECCION DE MAUSE*/


	
	
/*VARIABLES DEL AREA DE JUEGO*//*VARIABLES DEL AREA DE JUEGO*//*VARIABLES DEL AREA DE JUEGO*/
/*PAUSE*/
var Pause=false;			
/*PAUSE*/ 

/*GameOver*//*GameOver*/
var Gameover=false;
var IngresNombre=false;
var Podio=false;
var perdiste=false;
var Resultado=false;
/*GameOver*//*GameOver*/

/*VICTORIA*/	/*VICTORIA*/
var Victoria=false;
/*VICTORIA*/	/*VICTORIA*/

var EstadoActivoBarra=true;

/*Personaje*/
var Abajo=0;
var Vida_Jugador=3;
var Ciclo_nueva_vida=0;
var OjX=0;
var OjY=0;
var Personaje={draw:true,PosX:0,PosY:70,W:70,H:70,radio:50};
var VidaJugador={draw:true,PosX:0,PosY:50,W:70,H:70,radio:50};
var EfectoColi1={draw:false,PosX:0,PosY:50,W:80,H:80,radio:50};
var EfectoColi2={draw:false,PosX:0,PosY:50,W:80,H:80,radio:50};
var EfectoColi3={draw:false,PosX:0,PosY:50,W:80,H:80,radio:50};
var EfectoColi4={draw:false,PosX:0,PosY:50,W:80,H:80,radio:50};
var EfectoColi=false;
var CapaColi=true;
var Tiempo_de_Activacion_CapaColi=0;
var TiempoJuegoAnimacion=0;
var Velocidad_Mov_Personaje=30;
var ColorPersonaje=" ";
var ColorBorde=" ";
 /*Personaje*/
 
 /*Variable de barras de caida zona de juego*/
var EstadoReinicio=false;
 
var TamanoPosicionesXY=0;
var PosXBarra= new Array(TamanoPosicionesXY);
var PosYBarra= new Array(TamanoPosicionesXY);
var ColorBarra= new Array(TamanoPosicionesXY);
var Estado= new Array(TamanoPosicionesXY);
var TipodeObj=new Array(TamanoPosicionesXY);
var BloquePuntos=new Array(TamanoPosicionesXY)
var NUMERO=new Array(TamanoPosicionesXY);

var barrasDer={draw:false,PosX:0,PosY:0,w:4500,h:30};
var barrasIzq={draw:false,PosX:0,PosY:0,w:0,h:30};	

var VelocidadBarras=0;
var colorFondo="black";
var colorBarras="red";
var colorBarrasinter="black";
/*Variable de barras de caida zona de juego*/
/*VARIABLES DEL AREA DE JUEGO*//*VARIABLES DEL AREA DE JUEGO*//*VARIABLES DEL AREA DE JUEGO*/

//////////////////
var SelectLenguaje=true;

var idioma="";
if(SelectLenguaje==true){
	idioma="ENG";
}
else
if(SelectLenguaje==false){
	idioma="ES";
}
"ES=>Español"
"ENG=>Ingles"


//Dificultad
var DificultadEnlace="";
var Dificultad=2;
var BarrasVisible=10;

if(Dificultad==1){
	  TamanoPosicionesXY=1000;
	VelocidadBarras=3.8;
	
}
else
if(Dificultad==2){
	TamanoPosicionesXY=10000;
	VelocidadBarras=4;
		
}
else
if(Dificultad==3){
	TamanoPosicionesXY=100000;
	VelocidadBarras=3.6;
		
}

/*
Dificultad=1
puntuacion 1000
vida 3
VelocidadBarras 2

Dificultad=2
puntuacion 10000
vida 3
VelocidadBarras 3

Dificultad=3
puntuacion 100000
vida 1
VelocidadBarras 3



*/

//MAIN
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var X,Y,W,H,r; 
var s = getComputedStyle(canvas);
var w = s.width;
var h = s.height;