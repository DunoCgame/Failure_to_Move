var cambioTEXT9=0;

var Retorno="";
var Letrero="";
var TimePosiciones=0;
var EstadoPosicion=false;

function Posiciones(){
	
	//Movimiento tecla
	
	//Movimiento tecla
	
	/*Datos*/
	// /*POSICION:1*//*POSICION:1*//*POSICION:1*/
	if(puntos1!=0){
	
	if(puntos1!=epuntos1 && Segundor1!=eSegundor1){
	ctx.save();	
ctx.fillStyle=colorNombre1;
ctx.font = '60px calibri black';
 ctx.fillText("1)"+" "+nombre1,X-300,Y-100);
 ctx.fillText(puntos1,X-50,Y-100); 
 ctx.fillText(hora1+":"+min1+":"+seg1,X+100,Y-100);
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
 ctx.fillText("1)"+" "+enombre1,X-300,Y-100);
 ctx.fillText(epuntos1,X-50,Y-100); 
 ctx.fillText(ehora1+":"+emin1+":"+eseg1,X+100,Y-100);
ctx.restore(); 

/*POSICION:1*//*POSICION:1*//*POSICION:1*/
}
	else{
			ctx.save();	
			ctx.fillStyle="red";
			ctx.font = '60px calibri black';
			ctx.fillText("1)"+" "+nombre1,X-300,Y-100);
			ctx.fillText(puntos1,X-50,Y-100); 
			ctx.fillText(hora1+":"+min1+":"+seg1,X+100,Y-100);
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
		ctx.fillText("1)"+" "+nombre1,X-300,Y-100);
		ctx.fillText(puntos1,X-50,Y-100); 
		ctx.fillText(hora1+":"+min1+":"+seg1,X+100,Y-100);
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
 ctx.fillText("2)"+" "+nombre2,X-300,Y);
 ctx.fillText(puntos2,X-50,Y); 
 ctx.fillText(hora2+":"+min2+":"+seg2,X+100,Y);
ctx.restore(); 

	}
	   else
if(puntos2==epuntos2 && Segundor2==eSegundor2   ){
				
			TiempoEmpate+=1;
				

			if(TiempoEmpate>0 && TiempoEmpate<10 ){
			
				ctx.save();	
			ctx.fillStyle="white";
			ctx.font = '60px calibri black';
			 ctx.fillText("2)"+" "+enombre2,X-300,Y);
			 ctx.fillText(epuntos2,X-50,Y); 
			 ctx.fillText(ehora2+":"+emin2+":"+eseg2,X+100,Y);
			ctx.restore(); 

			}
			else{
				
				ctx.save();	
			ctx.fillStyle="red";
			ctx.font = '60px calibri black';
			 ctx.fillText("2)"+" "+nombre2,X-300,Y);
			 ctx.fillText(puntos2,X-50,Y); 
			 ctx.fillText(hora2+":"+min2+":"+seg2,X+100,Y);
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
			 ctx.fillText("2)"+" "+nombre2,X-300,Y);
			 ctx.fillText(puntos2,X-50,Y); 
			 ctx.fillText(hora2+":"+min2+":"+seg2,X+100,Y);
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
			 ctx.fillText("3)"+" "+enombre3,X-300,Y+90);
			 ctx.fillText(epuntos3,X-50,Y+90); 
			 ctx.fillText(ehora3+":"+emin3+":"+eseg3,X+100,Y+90);
			ctx.restore(); 

			}
			else{
				
				ctx.save();	
			ctx.fillStyle="red";
			ctx.font = '60px calibri black';
			 ctx.fillText("3)"+" "+nombre3,X-300,Y+90);
			 ctx.fillText(puntos3,X-50,Y+90);
			 ctx.fillText(hora3+":"+min3+":"+seg3,X+100,Y+90);
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
			 ctx.fillText("3)"+" "+nombre3,X-300,Y+90);
			 ctx.fillText(puntos3,X-50,Y+90); 
			 ctx.fillText(hora3+":"+min3+":"+seg3,X+100,Y+90);
			ctx.restore(); 
	}
	
	}
	
	if(puntos3==0){
			ctx.save();	
			ctx.fillStyle=colorNombre3;
			ctx.font = '60px calibri black';
			 ctx.fillText("3)"+" "+nombre3,X-300,Y+90);
			 ctx.fillText(puntos3,X-50,Y+90); 
			 ctx.fillText(hora3+":"+min3+":"+seg3,X+100,Y+90);
			ctx.restore(); 
	}
/*POSICION:3*//*POSICION:3*//*POSICION:3*/



	/*Datos*/
	
	
	
	
	
	
}
function PosicionesBoton(){


if(TimePosiciones<10 && EstadoPosicion==false  && teclado[teclaEnter]==false){ 	TimePosiciones++; 	} 	else 		if(TimePosiciones==10){EstadoPosicion=true; 		}
	
	
	if(idioma=="ENG"){ 	
	Retorno="Back"; 
	Letrero="Position";
	
	} 						
	else if(idioma=="ES"){

	Retorno="Regresar";	
	Letrero="Posci\u00F3n";
	
	}

	
	
if(idioma=="ENG"){
	ctx.save();	
	ctx.fillStyle="white";
	ctx.font = '80px calibri black';
	ctx.fillText(DificultadEnlace,X-100,80);
	ctx.restore(); 
}
if(idioma=="ES"){
	ctx.save();	
	ctx.fillStyle="white";
	ctx.font = '80px calibri black';
	ctx.fillText(DificultadEnlace,X-100,80);
	ctx.restore(); 
}
	

	
	
	
	
	
	
if(idioma=="ENG"){
		cambioTEXT9++;
if(cambioTEXT9>0 && cambioTEXT9<5){

	ctx.save();	
	ctx.fillStyle="blue";
	ctx.font = '40px calibri black';
	ctx.fillText(Retorno,X-50,Y+200);
	ctx.restore(); 
}
else{
 //////////////////////volever2
ctx.save();	
ctx.fillStyle="white";
ctx.font = '40px calibri black';
ctx.fillText(Retorno,X-50,Y+200);
ctx.restore();  }
if(cambioTEXT9==10){
		cambioTEXT9=0;
	}
 } 
 ////
 if(idioma=="ES"){
	 cambioTEXT9++;
if(cambioTEXT9>0 && cambioTEXT9<5){
	ctx.save();	
	ctx.fillStyle="blue";
	ctx.font = '40px calibri black';
	ctx.fillText(Retorno,X-50,Y+200);
	ctx.restore(); 
	}
	else{
	 //////////////////////volever2
		ctx.save();	
		ctx.fillStyle="white";
		ctx.font = '40px calibri black';
		ctx.fillText(Retorno,X-50,Y+200);
		

		ctx.restore();  
	}
		if(cambioTEXT9==10){
				cambioTEXT9=0;
			}
	
 }
 
	
if(teclado[teclaEnter] && Escena==5 && Tecla_PresionadaPo==0 && EstadoPosicion==true ){
			Tecla_PresionadaPo=1;
			seleccionPrincipal=2;
			Escena=1;
 }
if(teclado[teclaEnter]==false && Tecla_PresionadaPo==1){
Tecla_PresionadaPo=0; 
TimePosiciones=0;
EstadoPosicion=false;
}
else if(teclado[teclaEnter]==undefined ){ 	teclado[teclaEnter]=false;   }


 if(teclado[teclaEnter]==false &&  Tecla_PresionadaEnter==1){ 
Tecla_PresionadaEnter=0;
 }
 else if(teclado[teclaEnter]==undefined ){ 	teclado[teclaEnter]=false;   }


	
	
	
	
}

