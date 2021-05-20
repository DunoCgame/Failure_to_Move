

function OpcionesText(){
	
	/*Opciones*/
			 ctx.save();
ctx.fillStyle="white";
ctx.font = '54px calibri black';
ctx.fillText(Option,X/2+170,Y/2-40);
ctx.restore();
	
	// // //Sonido
		 ctx.save();
ctx.fillStyle=colorSelecFlechaA1;
ctx.font = '20px calibri black';
ctx.fillText("<",X/2+120,Y/2+50);
ctx.restore();
			 ctx.save();
ctx.fillStyle=colorSelecFlechaA2;
ctx.font = '20px calibri black';
ctx.fillText(">",X/2+220,Y/2+50);
ctx.restore();
	
	// // //sonido
	
	// // //borrar puntos
		 ctx.save();
ctx.fillStyle=colorSelecFlechaB1;
ctx.font = '20px calibri black';
ctx.fillText("<",X/2+120,Y/2+85);
ctx.restore();
			 ctx.save();
ctx.fillStyle=colorSelecFlechaB2;
ctx.font = '20px calibri black';
ctx.fillText(">",X/2+220,Y/2+85);
ctx.restore();


// // //Dificultad
 ctx.save();
ctx.fillStyle=colorSelecFlechaC1;
ctx.font = '20px calibri black';
ctx.fillText("<",X/2+120,Y/2+120);
ctx.restore();
			 ctx.save();
ctx.fillStyle=colorSelecFlechaC2;
ctx.font = '20px calibri black';
ctx.fillText(">",X/2+240,Y/2+120);
ctx.restore();

// // //lenguaje
		 ctx.save();
ctx.fillStyle=colorSelecFlechaD1;
ctx.font = '20px calibri black';
ctx.fillText("<",X/2+120,Y/2+150);
ctx.restore();
			 ctx.save();
ctx.fillStyle=colorSelecFlechaD2;
ctx.font = '20px calibri black';
ctx.fillText(">",X/2+250,Y/2+150);
ctx.restore();

// // //Izquierda

ctx.save();
ctx.fillStyle=colorSelecFlechaE1;
ctx.font = '20px calibri black';
ctx.fillText("<",X/2+400,Y/2+17);
ctx.restore();

ctx.save();
ctx.fillStyle=colorSelecFlechaE2;
ctx.font = '20px calibri black';
ctx.fillText(">",X/2+530,Y/2+17);
ctx.restore();


// // //Derecha
		 ctx.save();
ctx.fillStyle=colorSelecFlechaF1;
ctx.font = '20px calibri black';
ctx.fillText("<",X/2+400,Y/2+50);
ctx.restore();
			 ctx.save();
ctx.fillStyle=colorSelecFlechaF2;
ctx.font = '20px calibri black';
ctx.fillText(">",X/2+530,Y/2+50);
ctx.restore();

// // //Arriva
	 ctx.save();
ctx.fillStyle=colorSelecFlechaG1;
ctx.font = '20px calibri black';
ctx.fillText("<",X/2+400,Y/2+85);
ctx.restore();
			 ctx.save();
ctx.fillStyle=colorSelecFlechaG2;
ctx.font = '20px calibri black';
ctx.fillText(">",X/2+530,Y/2+85);
ctx.restore();
// //Abajo
	  ctx.save();
ctx.fillStyle=colorSelecFlechaH1;
ctx.font = '20px calibri black';
ctx.fillText("<",X/2+400,Y/2+120);
ctx.restore();
			 ctx.save();
ctx.fillStyle=colorSelecFlechaH2;
ctx.font = '20px calibri black';
ctx.fillText(">",X/2+530,Y/2+120);
ctx.restore();
// // //enter
	 ctx.save();
ctx.fillStyle=colorSelecFlechaI1;
ctx.font = '20px calibri black';
ctx.fillText("<",X/2+400,Y/2+150);
ctx.restore();
			 ctx.save();
ctx.fillStyle=colorSelecFlechaI2;
ctx.font = '20px calibri black';
ctx.fillText(">",X/2+530,Y/2+150);
ctx.restore();

// // //pause
	 ctx.save();
ctx.fillStyle=colorSelecFlechaJ1;
ctx.font = '20px calibri black';
ctx.fillText("<",X/2+400,Y/2+180);
ctx.restore();
			 ctx.save();
ctx.fillStyle=colorSelecFlechaJ2;
ctx.font = '20px calibri black';
ctx.fillText(">",X/2+530,Y/2+180);
ctx.restore();


if(SeleccionOpciones=>0 && SeleccionOpciones<=10){


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






	
}




 if(SeleccionOpciones==0){
	if(TiempoCentrar(6,3,true)==true){
// // //Dificultad
		colorSelecFlechaA1="white";
	colorSelecFlechaA2="white";

	 }
else		{

	colorSelecFlechaA1="red";
	colorSelecFlechaA2="red";
}
	  
 }	
  if(SeleccionOpciones==1){	
 if(TiempoCentrar(6,3,true)==true){	
		colorSelecFlechaB1="white";
		colorSelecFlechaB2="white";
 }
else{
		colorSelecFlechaB1="red";
		colorSelecFlechaB2="red";
 }
		
  }
  
  
  
// //puntaje
if(SeleccionOpciones==2){
	if(TiempoCentrar(6,3,true)==true){	
		colorSelecFlechaC1="white";
	colorSelecFlechaC2="white";
	}
	else{
				colorSelecFlechaC1="red";
				colorSelecFlechaC2="red";
	}
}
// //lenguaje
if(SeleccionOpciones==3){
	if(TiempoCentrar(6,3,true)==true){	
						colorSelecFlechaD1="white";
						colorSelecFlechaD2="white";
	}
	else{
				colorSelecFlechaD1="red";
						colorSelecFlechaD2="red";

		
		
	}
		
}
// //Izquierda
if(SeleccionOpciones==4 ){
	
		if(TiempoCentrar(6,3,true)==true){	
						colorSelecFlechaE1="white";
						colorSelecFlechaE2="white";
	}
	else{
				colorSelecFlechaE1="red";
						colorSelecFlechaE2="red";

		
		
	}
	


	


}

// //Derecha
if(SeleccionOpciones==5){
							
		if(TiempoCentrar(6,3,true)==true){	
						colorSelecFlechaF1="white";
						colorSelecFlechaF2="white";
	}
	else{
				colorSelecFlechaF1="red";
						colorSelecFlechaF2="red";

		
		
	}
		
}


// //Arriba
if(SeleccionOpciones==6){
					
		if(TiempoCentrar(6,3,true)==true){	
						colorSelecFlechaG1="white";
						colorSelecFlechaG2="white";
	}
	else{
				colorSelecFlechaG1="red";
						colorSelecFlechaG2="red";

		
		
	}
		
}

// //Abajo
if(SeleccionOpciones==7){
	
				
		if(TiempoCentrar(6,3,true)==true){	
		colorSelecFlechaH1="white";
		colorSelecFlechaH2="white";
	}
	else{
		colorSelecFlechaH1="red";
		colorSelecFlechaH2="red";


		
	}
		
}

// //Enter
if(SeleccionOpciones==8){
	
		if(TiempoCentrar(6,3,true)==true){	
		colorSelecFlechaI1="white";
		colorSelecFlechaI2="white";
	}
	else{
	colorSelecFlechaI1="red";
	colorSelecFlechaI2="red";

		
		
	}
		
}
// //Pause
if(SeleccionOpciones==9){

if(TiempoCentrar(6,3,true)==true){	
	colorSelecFlechaJ1="white";
	colorSelecFlechaJ2="white";
}
else{
	colorSelecFlechaJ1="red";
	colorSelecFlechaJ2="red";



}
		
		
}


// //Sonido
		 ctx.save();
ctx.fillStyle="white";
ctx.font = '25px calibri black';
ctx.fillText(tex1,X/2-50,Y/2+50);
ctx.restore();

if(SeleccionSonido==1){
		 ctx.save();
ctx.fillStyle=Secolor0;
ctx.font = '25px calibri black';
ctx.fillText(tex2,X/2+150,Y/2+50);
ctx.restore();
	}
	else
	if(SeleccionSonido==2){
		 ctx.save();
ctx.fillStyle=Secolor0;
ctx.font = '25px calibri black';
ctx.fillText(tex3,X/2+150,Y/2+50);
ctx.restore();
		
	}
	// //Sonido

// //Borrar
ctx.save();
ctx.fillStyle="white";
ctx.font = '25px calibri black';
ctx.fillText(tex4,X/2-50,Y/2+85);
ctx.restore();

if(SeleccionBorrarPuntaje==1){
	 ctx.save();
	ctx.fillStyle=Secolor1;
	ctx.font = '25px calibri black';
	ctx.fillText(tex3,X/2+150,Y/2+85);
	ctx.restore();
}
else
if(SeleccionBorrarPuntaje==2){
////
 ctx.save();
ctx.fillStyle=Secolor1;
ctx.font = '25px calibri black';
ctx.fillText(tex2,X/2+150,Y/2+85);
ctx.restore();
}



	
//DIFICULTAD
 ctx.save();
ctx.fillStyle="white";
ctx.font = '25px calibri black';
ctx.fillText(tex0,X/2-50,Y/2+120);
ctx.restore();
//////
if(Dificultad==1){
	ctx.save();
	ctx.fillStyle=Secolor2;
	ctx.font = '25px calibri black';
	ctx.fillText(tex15,X/2+150,Y/2+120);
	ctx.restore();
	ctx.save();
}
else
if(Dificultad==2){
ctx.fillStyle=Secolor2;
ctx.font = '25px calibri black';
ctx.fillText(tex16,X/2+150,Y/2+120);
ctx.restore();
}
else
if(Dificultad==3){ 
ctx.save();
ctx.fillStyle=Secolor2;
ctx.font = '25px calibri black';
ctx.fillText(tex17,X/2+150,Y/2+120);
ctx.restore();
}
//DIFICULTAD


// // //Lenguaje
			 ctx.save();
ctx.fillStyle="white";
ctx.font = '25px calibri black';
ctx.fillText(tex5,X/2-50,Y/2+150);
ctx.restore();

if(SeleccionLenguaje==1){
 ctx.save();
ctx.fillStyle=Secolor3;
ctx.font = '25px calibri black';
ctx.fillText(tex7,X/2+150,Y/2+150);
ctx.restore();
}
else
if(SeleccionLenguaje==2){
////
 ctx.save();
ctx.fillStyle=Secolor3;
ctx.font = '25px calibri black';
ctx.fillText(tex6,X/2+150,Y/2+150);
ctx.restore();
}

// // //izquierda
			 ctx.save();
ctx.fillStyle="white";
ctx.font = '25px calibri black';
ctx.fillText(tex8,X/2+300,Y/2+17);
ctx.restore();

 ctx.save();
ctx.fillStyle=Secolor4;
ctx.font = '25px calibri black';
ctx.fillText(letf,X/2+430,Y/2+17);
ctx.restore();

// // //derecha
	 ctx.save();
ctx.fillStyle="white";
ctx.font = '25px calibri black';
ctx.fillText(tex9,X/2+300,Y/2+50);
ctx.restore();

 ctx.save();
ctx.fillStyle=Secolor5;
ctx.font = '25px calibri black';
ctx.fillText(riht,X/2+430,Y/2+50);
ctx.restore();

// // //arriba
ctx.save();
ctx.fillStyle="white";
ctx.font = '25px calibri black';
ctx.fillText(tex10,X/2+300,Y/2+85);
ctx.restore();

 ctx.save();
ctx.fillStyle=Secolor6;
ctx.font = '25px calibri black';
ctx.fillText(up,X/2+430,Y/2+85);
ctx.restore();

// // //abajo
			 ctx.save();
ctx.fillStyle="white";
ctx.font = '25px calibri black';
ctx.fillText(tex11,X/2+300,Y/2+120);
ctx.restore();

 ctx.save();
ctx.fillStyle=Secolor7;
ctx.font = '25px calibri black';
ctx.fillText(Dow,X/2+430,Y/2+120);
ctx.restore();

		// // //Enter
	ctx.save();
ctx.fillStyle="white";
ctx.font = '25px calibri black';
ctx.fillText(tex12,X/2+300,Y/2+150);
ctx.restore();
 ctx.save();
ctx.fillStyle=Secolor8;
ctx.font = '25px calibri black';
ctx.fillText(Ente,X/2+430,Y/2+150);
ctx.restore();


	// // //Pause
ctx.save();
ctx.fillStyle="white";
ctx.font = '25px calibri black';
ctx.fillText(tex13,X/2+300,Y/2+180);
ctx.restore();

 ctx.save();
ctx.fillStyle=Secolor9;
ctx.font = '25px calibri black';
ctx.fillText(Pau,X/2+430,Y/2+180);
ctx.restore();
		
	


	
	
	
	
	
	
	
	
	ctx.save();
ctx.fillStyle=Secolor10;
ctx.font = '40px calibri black';
ctx.fillText(tex14,X-50,Y+200);
ctx.restore()
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}/*Cierre function*/