
var PODIO="";
var Play_again="";

var cambioTEXT6=0;
var cambioTEXT7=0;

var colorNombre1="white";
var colorNombre2="white";
var colorNombre3="white";
var Tiempo_activoRetorno=0;



//OBTIENE LOS DATOS DE LOCALSTORAGE
function Perdiste_Triunfo_Total(){
	
	if(idioma=="ENG"){
		PODIO="Game Complete";
		Play_again="Enter to Play Again";
		   }
			else
				if(idioma=="ES"){
						PODIO="Juego Completo";
						Play_again="Enter para Jugar de Nuevo";							
						}
	
	
if(teclado[teclaEnter] && Podio==true && Escena==4 && TeclapressMovAB==0 && IngresNombre==false){
	Sonido(true,"SonidoSelect");
		Escena=1; 
			TeclapressMovAB=1;
				Podio=false;
					EstadoReinicio=true;			 
			}
	
	//////////////////reinicio de teclas
if(teclado[teclaEnter]==false && TeclapressMovAB==1){ 	TeclapressMovAB=0; }
else if(teclado[teclaEnter]==undefined ){ 	teclado[teclaEnter]=false;   }
	//////////////////reinicio de teclas

	

//determinar que si no hay valores se muestre ---*/
	//verificacio de datos almacenados
						// nombre1=localStorage.getItem("Nombre1");
						// puntos1=localStorage.getItem("Puntos1");
						// tiempo1=localStorage.getItem("Tiempo1");
						// seg1=localStorage.getItem("Seg1");
						// min1=localStorage.getItem("Min1");
						// hora1=localStorage.getItem("Hora1");

						// nombre2=localStorage.getItem("Nombre2");
						// puntos2=localStorage.getItem("Puntos2");
						// tiempo2=localStorage.getItem("Tiempo2");
						// seg2=localStorage.getItem("Seg2");
						// min2=localStorage.getItem("Min2");
						// hora2=localStorage.getItem("Hora2");

						// nombre3=localStorage.getItem("Nombre3");
						// puntos3=localStorage.getItem("Puntos3");
						// seg3=localStorage.getItem("Seg3");
						// min3=localStorage.getItem("Min3");
						// hora3=localStorage.getItem("Hora3");
//verificacio de datos almacenados
	
ctx.save();
ctx.fillStyle="rgba(255,255,255,0.2)";
ctx.fillRect(0,0,W,H);
ctx.restore(); 			
 cambioTEXT7+=1;
if(cambioTEXT7>0 && cambioTEXT7<10){
	
// /*POSICION:1*//*POSICION:1*//*POSICION:1*/	
		ctx.save();	
		ctx.fillStyle="rgba(179,179,0,1)";
		ctx.font = '80px calibri black';
		ctx.fillText("1)"+" "+nombre1,X-350,Y);
		ctx.fillText(puntos1,X-50,Y); 
		ctx.fillText(hora1+":"+min1+":"+seg1,X+200,Y);
		ctx.restore();
/*POSICION:1*//*POSICION:1*//*POSICION:1*/
}
else{
	// /*POSICION:1*//*POSICION:1*//*POSICION:1*/	
		ctx.save();	
		ctx.fillStyle="white";
		ctx.font = '80px calibri black';
		ctx.fillText("1)"+" "+nombre1,X-350,Y);
		ctx.fillText(puntos1,X-50,Y); 
		ctx.fillText(hora1+":"+min1+":"+seg1,X+200,Y);
		ctx.restore();
/*POSICION:1*//*POSICION:1*//*POSICION:1*/
	
}
if(cambioTEXT7==15){
		cambioTEXT7=0;
	}

	
	
if(idioma=="ENG"){
ctx.save();	
ctx.fillStyle="rgba(179,179,0,1)";
ctx.font = '80px calibri black';
ctx.fillText(PODIO,X-270,80);
ctx.restore(); 
}
if(idioma=="ES"){
ctx.save();	
ctx.fillStyle="white";
ctx.font = '80px calibri black';
ctx.fillText(PODIO,X-270,80);
ctx.restore(); 
}



 //////////////////////volever1

 if(idioma=="ENG"){
	 cambioTEXT6++;
if(cambioTEXT6>0 && cambioTEXT6<5){

ctx.save();	
ctx.fillStyle="rgba(179,179,0,1)";
ctx.font = '60px calibri black';
ctx.fillText(Play_again,X-250,Y+175);
ctx.restore(); 
}
else{
 //////////////////////volever2
ctx.save();	
ctx.fillStyle="white";
ctx.font = '60px calibri black';
ctx.fillText(Play_again,X-250,Y+175);
ctx.restore();  
}

if(cambioTEXT6==10){
		cambioTEXT6=0;
	}
 } 
 ////
 if(idioma=="ES"){
	 cambioTEXT6++;
if(cambioTEXT6>0 && cambioTEXT6<5){

ctx.save();	
ctx.fillStyle="rgba(179,179,0,1)";
ctx.font = '60px calibri black';
ctx.fillText(Play_again,X-330,Y+175);
ctx.restore(); 
}
else{
 //////////////////////volever2
ctx.save();	
ctx.fillStyle="white";
ctx.font = '60px calibri black';
ctx.fillText(Play_again,X-330,Y+175);
ctx.restore();  }
if(cambioTEXT6==10){
		cambioTEXT6=0;
	}
 }

}//cierre funcion
