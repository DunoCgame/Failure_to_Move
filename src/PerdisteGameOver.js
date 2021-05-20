
var PODIO="";
var Play_again="";

var cambioTEXT6=0;
var colorNombre1="white";
var colorNombre2="white";
var colorNombre3="white";
var Tiempo_activoRetorno=0;

//OBTIENE LOS DATOS DE LOCALSTORAGE
function Perdiste(){
	
	if(idioma=="ENG"){
		PODIO="TRUMP";
		Play_again="Enter to Play Again";
		}
			else
				if(idioma=="ES"){

						PODIO="TRIUNFO";
						Play_again="Enter para Jugar de Nuevo";
							
							
						}
	
	
if(teclado[teclaEnter] && Podio==true && Escena==2 && TeclapressMovAB==0 && IngresNombre==false){    
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

	




	
	 ctx.save();
 ctx.fillStyle="rgba(255,255,255,0.2)";
ctx.fillRect(0,0,W,H);
ctx.restore(); 			


	// /*POSICION:1*//*POSICION:1*//*POSICION:1*/
	if(puntos1!=0){
	
	if(puntos1!=epuntos1 && Segundor1!=eSegundor1){
	ctx.save();	
ctx.fillStyle=colorNombre1;
ctx.font = '60px calibri black';
 ctx.fillText("1)"+" "+nombre1,X-400,Y-100);
 ctx.fillText(puntos1,X-50,Y-100); 
 ctx.fillText(hora1+":"+min1+":"+seg1,X+200,Y-100);
ctx.restore(); 

	}
	   else
if(puntos1==epuntos1 && Segundor1==eSegundor1){
	
TiempoEmpate+=1;
	

if(TiempoEmpate>0 && TiempoEmpate<10 ){
	// /*POSICION:1*//*POSICION:1*//*POSICION:1*/
	ctx.save();	
ctx.fillStyle="white";
ctx.font = '60px calibri black';
 ctx.fillText("1)"+" "+enombre1,X-400,Y-100);
 ctx.fillText(epuntos1,X-50,Y-100); 
 ctx.fillText(ehora1+":"+emin1+":"+eseg1,X+200,Y-100);
ctx.restore(); 

/*POSICION:1*//*POSICION:1*//*POSICION:1*/
}
	else{
			ctx.save();	
			ctx.fillStyle="red";
			ctx.font = '60px calibri black';
			ctx.fillText("1)"+" "+nombre1,X-400,Y-100);
			ctx.fillText(puntos1,X-50,Y-100); 
			ctx.fillText(hora1+":"+min1+":"+seg1,X+200,Y-100);
			ctx.restore(); 
	}

	if(TiempoEmpate==20 ){
		TiempoEmpate=0;	
	}

}
	}
if(puntos1==0){
		ctx.save();	
		ctx.fillStyle=colorNombre1;
		ctx.font = '60px calibri black';
		ctx.fillText("1)"+" "+nombre1,X-400,Y-100);
		ctx.fillText(puntos1,X-50,Y-100); 
		ctx.fillText(hora1+":"+min1+":"+seg1,X+200,Y-100);
		ctx.restore();
	
}
/*POSICION:1*//*POSICION:1*//*POSICION:1*/


//////////////////////
/*POSICION:2*//*POSICION:2*//*POSICION:2*/
if(puntos2!=0){

	if(puntos2!=epuntos2 && Segundor2!=eSegundor2){
	ctx.save();	
ctx.fillStyle=colorNombre2;
ctx.font = '60px calibri black';
 ctx.fillText("2)"+" "+nombre2,X-400,Y);
 ctx.fillText(puntos2,X-50,Y); 
 ctx.fillText(hora2+":"+min2+":"+seg2,X+200,Y);
ctx.restore(); 

	}
	   else
if(puntos2==epuntos2 && Segundor2==eSegundor2   ){
				
			TiempoEmpate+=1;
				

			if(TiempoEmpate>0 && TiempoEmpate<10 ){
			
				ctx.save();	
			ctx.fillStyle="white";
			ctx.font = '60px calibri black';
			 ctx.fillText("2)"+" "+enombre2,X-400,Y);
			 ctx.fillText(epuntos2,X-50,Y); 
			 ctx.fillText(ehora2+":"+emin2+":"+eseg2,X+200,Y);
			ctx.restore(); 

			}
			else{
				
				ctx.save();	
			ctx.fillStyle="red";
			ctx.font = '60px calibri black';
			 ctx.fillText("2)"+" "+nombre2,X-400,Y);
			 ctx.fillText(puntos2,X-50,Y); 
			 ctx.fillText(hora2+":"+min2+":"+seg2,X+200,Y);
			ctx.restore();
			 }

				if(TiempoEmpate==20 ){
					TiempoEmpate=0;	
				}

}
}
if(puntos2==0){
		ctx.save();	
			ctx.fillStyle=colorNombre2;
			ctx.font = '60px calibri black';
			 ctx.fillText("2)"+" "+nombre2,X-400,Y);
			 ctx.fillText(puntos2,X-50,Y); 
			 ctx.fillText(hora2+":"+min2+":"+seg2,X+200,Y);
			ctx.restore();
}
/*POSICION:2*//*POSICION:2*//*POSICION:2*/


/*POSICION:3*//*POSICION:3*//*POSICION:3*/

	if(puntos3!=0){
if(puntos3==epuntos3 && Segundor3==eSegundor3  ){
				
			TiempoEmpate+=1;
				

			if(TiempoEmpate>0 && TiempoEmpate<10 ){
			
				ctx.save();	
			ctx.fillStyle="white";
			ctx.font = '60px calibri black';
			 ctx.fillText("3)"+" "+enombre3,X-400,Y+90);
			 ctx.fillText(epuntos3,X-50,Y+90); 
			 ctx.fillText(ehora3+":"+emin3+":"+eseg3,X+200,Y+90);
			ctx.restore(); 

			}
			else{
				
				ctx.save();	
			ctx.fillStyle="red";
			ctx.font = '60px calibri black';
			 ctx.fillText("3)"+" "+nombre3,X-400,Y+90);
			 ctx.fillText(puntos3,X-50,Y+90);
			 ctx.fillText(hora3+":"+min3+":"+seg3,X+200,Y+90);
			ctx.restore();
			 }

				if(TiempoEmpate==20 ){
					TiempoEmpate=0;	
				}


}
else
	if(puntos3!=epuntos3 && Segundor3!=eSegundor3   ){
				ctx.save();	
			ctx.fillStyle=colorNombre3;
			ctx.font = '60px calibri black';
			 ctx.fillText("3)"+" "+nombre3,X-400,Y+90);
			 ctx.fillText(puntos3,X-50,Y+90); 
			 ctx.fillText(hora3+":"+min3+":"+seg3,X+200,Y+90);
			ctx.restore(); 
	}
	
	}
	
	if(puntos3==0){
			ctx.save();	
			ctx.fillStyle=colorNombre3;
			ctx.font = '60px calibri black';
			 ctx.fillText("3)"+" "+nombre3,X-400,Y+90);
			 ctx.fillText(puntos3,X-50,Y+90); 
			 ctx.fillText(hora3+":"+min3+":"+seg3,X+200,Y+90);
			ctx.restore(); 
	}
/*POSICION:3*//*POSICION:3*//*POSICION:3*/





if(idioma=="ENG"){
ctx.save();	
ctx.fillStyle="white";
ctx.font = '80px calibri black';
ctx.fillText(PODIO,X-120,80);
ctx.restore(); 
}
if(idioma=="ES"){
ctx.save();	
ctx.fillStyle="white";
ctx.font = '80px calibri black';
ctx.fillText(PODIO,X-140,80);
ctx.restore(); 
}
 //////////////////////volever1
 cambioTEXT6+=1;
 if(idioma=="ENG"){
if(cambioTEXT6>0 && cambioTEXT6<5){

ctx.save();	
ctx.fillStyle="blue";
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
ctx.restore();  }
if(cambioTEXT6==10){
		cambioTEXT6=0;
	}
 } 
 ////
 if(idioma=="ES"){
if(cambioTEXT6>0 && cambioTEXT6<5){

ctx.save();	
ctx.fillStyle="blue";
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
