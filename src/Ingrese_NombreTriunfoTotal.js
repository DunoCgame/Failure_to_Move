/*FUNCIONES DE INGRESO DE TEXTO*//*FUNCIONES DE INGRESO DE TEXTO*//*FUNCIONES DE INGRESO DE TEXTO*//*FUNCIONES DE INGRESO DE TEXTO*/

var INGRESE_NOMBRE="";
var insert="";
var Return="";

var a="*";
var b="*";
var c="*";

var Tecla_Pulsada_Codigo="*";
var Tecla_Pulsada_Text="*";

var Caracter=1;
// var conCaracteres=3;
var colorSelectext1="white";
var colorSelectext2="white";
var colorSelectext3="white";

var colorSelecFlechaA1="white";
var colorSelecFlechaA2="white";

var colorSelecFlechaB1="white";
var colorSelecFlechaB2="white";

var colorSelecFlechaC1="white";
var colorSelecFlechaC2="white";



var MovAyB=1;
var MovEnscrolltext=0;
var Letra=64;
var TeclaSelet="*";
var Insert=false;
var Rotacion=0;

document.onkeydown = TeclaPulsada;

function TeclaPulsada(){
	if(Escena==4){
		
	Tecla_Pulsada_Codigo = event.keyCode;
if (Tecla_Pulsada_Codigo>=65 && Tecla_Pulsada_Codigo<=90){
	
Tecla_Pulsada_Text = String.fromCharCode(Tecla_Pulsada_Codigo); 

 }
 
	}

}




function Ingreso_de_Texto_Triunfo_Total(){
	
	if(idioma=="ENG"){
INGRESE_NOMBRE="INSERT NAME";
insert="Insert";
Return="Return";

}
else
if(idioma=="ES"){

INGRESE_NOMBRE="INTRODUCIR NOMBRE";
insert="Introducir";
Return="Regreso";
}
		
			
//obtiene el valor de la tecka presionada
if (Letra>=65 && Letra<=90 && IngresNombre==true ){  
TeclaSelet = String.fromCharCode(Letra); 
}

//movimiento arriva y abajo
if(teclado[teclaEnter]==true && MovAyB==1  && IngresNombre==true && TeclapressMovAB==0 ){ 
Sonido(true,"SonidoSelect");
TeclapressMovAB=1;
	MovAyB=2; MovEnscrolltext=1; } 

if(teclado[teclaEnter]==true &&  MovAyB==2  && IngresNombre==true && MovEnscrolltext==2 && TeclapressMovAB==0){
	Sonido(true,"SonidoSelect");
	TeclapressMovAB=1;
	MovAyB=1; MovEnscrolltext=0;}	
	
if( MovEnscrolltext==1  &&  MovAyB==2  && IngresNombre==true &&  teclado[teclaEnter]==true && TeclapressMovAB==0 ){
	Sonido(true,"SonidoSelect");
	 TeclapressMovAB=1;
	 IngresNombre=false;
			Podio=true;
			
	}
	
	
	
	
	
	
	
	
	
if(teclado[ teclaFlechaDerecha] && MovAyB==2 && MovEnscrolltext!=1  && IngresNombre==true)	
{Sonido(true,"SonidoMenu");	
	MovEnscrolltext-=1;	 } 

if(teclado[teclaFlechaIzquierda] && MovAyB==2 && MovEnscrolltext!=2  && IngresNombre==true)
{Sonido(true,"SonidoMenu");
	MovEnscrolltext+=1;	 }

	//////////////////reinicio de teclas
	
if(teclado[teclaEnter]==false && TeclapressMovAB==1){ 	TeclapressMovAB=0; }
else if(teclado[teclaEnter]==undefined ){ 	teclado[teclaEnter]=false;   }
	//////////////////reinicio de teclas
//movimiento arriva y abajo	
	if(Escena==4){
	if(MovAyB==1){

if(teclado[teclaFlechaDerecha] && Tecla_Presionada==0 && 		Escena==4 && IngresNombre==true && Caracter!=3){
		Sonido(true,"SonidoMenu");	
		Tecla_Presionada=1;
		Caracter+=1;	Letra=64;
				} 
	
if(teclado[teclaFlechaIzquierda] && Tecla_Presionada==0  && 		Escena==4 && IngresNombre==true && Caracter!=1){ 
		Sonido(true,"SonidoMenu");	
		Tecla_Presionada=1;
		Caracter-=1;	Letra=64; 
		
	}
	
/*movimiento derecha a izquierda superior*/
if(teclado[teclaFlechaDerecha]==false && teclado[teclaFlechaIzquierda]==false &&  Tecla_Presionada==1){
	Tecla_Presionada=0;
}
else if(teclado[teclaFlechaDerecha]==undefined && teclado[teclaFlechaIzquierda]==undefined ){
	teclado[teclaFlechaDerecha]=false;
	 teclado[teclaFlechaIzquierda]=false;
}
//Movmiento derecha a izquierda

//C1
if(Caracter==1 && Tecla_PresionadaLetras==0 && teclado[teclaFlechaArriba]  && IngresNombre==true   && Letra!=91){
	Sonido(true,"SonidoMenu");	
	 Tecla_PresionadaLetras=1;
	Letra+=1;
	a=TeclaSelet;
}
else 
	if(Caracter==1 &&  Tecla_PresionadaLetras==0 && teclado[teclaFlechaAbajo]  && IngresNombre==true   && Letra!=64  ){
Sonido(true,"SonidoMenu");		
	Tecla_PresionadaLetras=1;
	Letra-=1;
	a=TeclaSelet;
}

//C2
if(Caracter==2 &&  Tecla_PresionadaLetras==0 && teclado[teclaFlechaArriba]  && IngresNombre==true && Letra!=91 ){
	Sonido(true,"SonidoMenu");	
 Tecla_PresionadaLetras=1;
	Letra+=1;
	b=TeclaSelet;
}else if(Caracter==2 &&  Tecla_PresionadaLetras==0 && teclado[teclaFlechaAbajo]  && IngresNombre==true && Letra!=64 ){
	Sonido(true,"SonidoMenu");	
	 Tecla_PresionadaLetras=1;
	Letra-=1;
	b=TeclaSelet;
}
//C3
if(Caracter==3 &&  Tecla_PresionadaLetras==0 && teclado[teclaFlechaArriba]  && IngresNombre==true && Letra!=91 ){
	Sonido(true,"SonidoMenu");	
	 Tecla_PresionadaLetras=1;
	Letra+=1;
	c=TeclaSelet;
}else if(Caracter==3 &&  Tecla_PresionadaLetras==0 && teclado[teclaFlechaAbajo]  && IngresNombre==true && Letra!=64 ){
	Sonido(true,"SonidoMenu");	
	 Tecla_PresionadaLetras=1;
	Letra-=1;
	c=TeclaSelet;
}

//Movimiento Caracter 1
if(teclado[teclaFlechaAbajo]==false && teclado[teclaFlechaArriba]==false &&
 Tecla_PresionadaLetras==1){
	Tecla_PresionadaLetras=0;
}
else if(teclado[teclaFlechaAbajo]==undefined && teclado[teclaFlechaArriba]==undefined){
	teclado[teclaFlechaAbajo]=false;
	teclado[teclaFlechaArriba]=false;
}
/*Seleccion*/	/*Seleccion*/

	/*momento derecha a izquierda superior*/
	}
	}
		if(idioma=="ENG"){
ctx.save();
ctx.fillStyle="white";
ctx.font = '50px calibri black';
ctx.fillText(INGRESE_NOMBRE,X-160,Y-100);
ctx.restore();
		}	if(idioma=="ES"){
ctx.save();
ctx.fillStyle="white";
ctx.font = '50px calibri black';
ctx.fillText(INGRESE_NOMBRE,X-245,Y-100);
ctx.restore();
		}

	

//////////////////////Flecha Superior
ctx.restore();
ctx.save();
ctx.fillStyle=colorSelecFlechaA1;
ctx.font = '50px calibri black';
ctx.fillText("^",X-100,Y-20);
ctx.restore(); 
	//////////////////////
ctx.save();
ctx.fillStyle=colorSelecFlechaB1;
ctx.font = '50px calibri black';
ctx.fillText("^",X-34,Y-20);
ctx.restore();
	//////////////////////
ctx.save();
ctx.fillStyle=colorSelecFlechaC1;
ctx.font = '50px calibri black';
ctx.fillText("^",X+30,Y-20);
ctx.restore
//////////////////////Flecha Superior


/////////////////////////Indicador
ctx.restore();
ctx.save();
ctx.fillStyle=colorSelectext1;
ctx.font = '50px calibri black';
ctx.fillText(a,X-100,Y+29);
ctx.restore(); 
	//////////////////////
ctx.save();
ctx.fillStyle=colorSelectext2;
ctx.font = '50px calibri black';
ctx.fillText(b,X-34,Y+29);
ctx.restore();
	//////////////////////
ctx.save();
ctx.fillStyle=colorSelectext3;
ctx.font = '50px calibri black';
ctx.fillText(c,X+30,Y+29);
ctx.restore
/////////////////////////Indicador
	
	//////////////////////Flecha Inferior
ctx.restore();
ctx.save();
ctx.fillStyle=colorSelecFlechaA2;
ctx.font = '50px calibri black';
 ctx.translate(X-75,Y+35);
 ctx.rotate(180* Math.PI / 180);
ctx.fillText("^",0,0);
ctx.restore(); 
	//////////////////////
ctx.save();
ctx.fillStyle=colorSelecFlechaB2;
ctx.font = '50px calibri black';
 ctx.translate(X-10,Y+35);
 ctx.rotate(180* Math.PI / 180);
ctx.fillText("^",0,0);
ctx.restore();
	//////////////////////
 
ctx.save();
ctx.fillStyle=colorSelecFlechaC2;
ctx.font = '50px calibri black';
 ctx.translate(X+55,Y+35);
 ctx.rotate(180* Math.PI / 180); 
ctx.fillText("^",0,0);
ctx.restore();
//////////////////////Flecha Inferior
/*animacion*//*animacion*/
/*animacion*/
/*CARACTER*/
if(MovAyB!=1){
			colorSelectext1="white";
			colorSelectext2="white";
			colorSelectext3="white";	
			colorSelecFlechaA1="white";
				colorSelecFlechaB1="white";
				colorSelecFlechaC1="white";
				colorSelecFlechaA2="white";
				colorSelecFlechaB2="white";
				colorSelecFlechaC2="white";
	}

	if(MovAyB==1 && Caracter==1 ){
		
			colorSelectext1="blue";
			colorSelectext2="white";
			colorSelectext3="white";
		
	}
	else
	if(MovAyB==1 && Caracter==2 ){
			colorSelectext1="white";
			colorSelectext2="blue";
			colorSelectext3="white";
			
	}
	else
	if(MovAyB==1 && Caracter==3){
			colorSelectext1="white";
			colorSelectext2="white";
			colorSelectext3="blue";
		
	}
	/*CARACTER*/
	
	if(MovAyB==1  && Letra==64  &&  Caracter==1){

	if(TiempoCentrar(4,2,true)==true){
colorSelecFlechaA1="red";

colorSelecFlechaB1="white";
colorSelecFlechaC1="white";

colorSelecFlechaA2="white";
colorSelecFlechaB2="white";
	colorSelecFlechaC2="white";
	}
	else{
colorSelecFlechaA1="blue";

colorSelecFlechaB1="white";
colorSelecFlechaC1="white";

colorSelecFlechaA2="white";
colorSelecFlechaB2="white";
colorSelecFlechaC2="white";
		

	}

}else
	if(MovAyB==1  && Letra==91 && Caracter==1){
		if(TiempoCentrar(4,2,true)==true){
		colorSelecFlechaA2="red";
		colorSelecFlechaB2="white";
		colorSelecFlechaC2="white";
		
		colorSelecFlechaA1="white";
		colorSelecFlechaB1="white";
		colorSelecFlechaC1="white";
		}
		else{
			colorSelecFlechaA2="blue";
		colorSelecFlechaB2="white";
		colorSelecFlechaC2="white";
		
		colorSelecFlechaA1="white";
		colorSelecFlechaB1="white";
		colorSelecFlechaC1="white";
			
		}

	}	
	//////////////////////////
		if(MovAyB==1  && Letra==64  &&  Caracter==2){
if(TiempoCentrar(4,2,true)==true){
colorSelecFlechaA1="white";

colorSelecFlechaB1="red";
colorSelecFlechaC1="white";

colorSelecFlechaA2="white";
colorSelecFlechaB2="white";
colorSelecFlechaC2="white";
}
else{
	colorSelecFlechaA1="white";

colorSelecFlechaB1="blue";
colorSelecFlechaC1="white";

colorSelecFlechaA2="white";
colorSelecFlechaB2="white";
colorSelecFlechaC2="white";
	
}

}else
	if(MovAyB==1  && Letra==91 && Caracter==2){
		if(TiempoCentrar(4,2,true)==true){
		colorSelecFlechaA2="white";
		colorSelecFlechaB2="red";
		colorSelecFlechaC2="white";
		
		colorSelecFlechaA1="white";
		colorSelecFlechaB1="white";
		colorSelecFlechaC1="white";}
		else{
			colorSelecFlechaA2="white";
		colorSelecFlechaB2="blue";
		colorSelecFlechaC2="white";
		
		colorSelecFlechaA1="white";
		colorSelecFlechaB1="white";
		colorSelecFlechaC1="white";
			
			
		}

	}	
	//////////////////////////
		if(MovAyB==1  && Letra==64  &&  Caracter==3){
if(TiempoCentrar(4,2,true)==true){
colorSelecFlechaA1="white";

colorSelecFlechaB1="white";
colorSelecFlechaC1="red";

colorSelecFlechaA2="white";
colorSelecFlechaB2="white";
colorSelecFlechaC2="white";
}
else{
	colorSelecFlechaA1="white";

colorSelecFlechaB1="white";
colorSelecFlechaC1="blue";

colorSelecFlechaA2="white";
colorSelecFlechaB2="white";
colorSelecFlechaC2="white";
	
}

}
else
	if(MovAyB==1  && Letra==91 && Caracter==3){
		if(TiempoCentrar(4,2,true)==true){
		colorSelecFlechaA2="white";
		colorSelecFlechaB2="white";
		colorSelecFlechaC2="red";
		
		colorSelecFlechaA1="white";
		colorSelecFlechaB1="white";
		colorSelecFlechaC1="white";}
		else{
			colorSelecFlechaA2="white";
		colorSelecFlechaB2="white";
		colorSelecFlechaC2="blue";
		
		colorSelecFlechaA1="white";
		colorSelecFlechaB1="white";
		colorSelecFlechaC1="white";
			
			
		}

	}	
	//////////////////////////
	

		

	
	/*Flecha/	/*Flecha*/
/*animacion*//*animacion*/
	if(MovAyB!=2){
				
							ctx.save();
							ctx.fillStyle="white";
							ctx.font = '50px calibri black';
							ctx.fillText(insert,X+150,Y+170);
							ctx.restore();
							
							ctx.fillStyle="white";
							ctx.font = '50px calibri black';
							ctx.fillText(Return,X-310,Y+170);
							ctx.restore();
				
			}
if(MovAyB==2){	

if(MovEnscrolltext==1){

			ctx.save();
			ctx.fillStyle="blue";
			ctx.font = '50px calibri black';
			ctx.fillText(insert,X+150,Y+170);
			ctx.restore();
			ctx.save();


			ctx.fillStyle="white";
			ctx.font = '50px calibri black';
			ctx.fillText(Return,X-310,Y+170);
			ctx.restore();
			}
			if(MovEnscrolltext==2){
			
				ctx.save();
			ctx.fillStyle="white";
			ctx.font = '50px calibri black';
			ctx.fillText(insert,X+150,Y+170);
			ctx.restore();
			
			ctx.fillStyle="blue";
			ctx.font = '50px calibri black';
			ctx.fillText(Return,X-310,Y+170);
			ctx.restore();
			
			
			
			
			}
		
				
			}

	

	}/*CIERRE DE Function*/
	