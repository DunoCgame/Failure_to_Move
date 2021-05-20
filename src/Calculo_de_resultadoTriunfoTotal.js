//GUARDADO DE PUNTOS
function Resultados_Triunfo_Total(){
	
	if(Puntos!=0 && SegundoR0!=0 ){

	/*Si hay puntuacion y tiempo*/
	//PUESTO1		//FUNCIONAL--CORECTAMENTE
	if(
	Puntos>=puntos1 && Puntos>puntos2 && Puntos>puntos3 && Segundor1==0 || //funciona
	Puntos>=puntos1 && Puntos>puntos2 && Puntos>puntos3 && SegundoR0<Segundor1 && Segundor2==0 || //funciona
	Puntos>=puntos1 && Puntos>puntos2 && Puntos>puntos3 && SegundoR0<Segundor1 && SegundoR0<Segundor2 && Segundor3==0 || 
	Puntos>=puntos1 && Puntos>puntos2 && Puntos>puntos3 && SegundoR0<Segundor1 && SegundoR0<Segundor2 && SegundoR0<Segundor3 || 
	Puntos>=puntos1 && puntos1==puntos2 && SegundoR0<Segundor1  && SegundoR0<Segundor2 && SegundoR0<Segundor3||//funciona
	Puntos>=puntos1 && puntos2==puntos3 && SegundoR0<Segundor1  && SegundoR0<Segundor2 && SegundoR0<Segundor3||//funciona

	Puntos>=puntos1 && puntos1==puntos2 &&  puntos3==0 && SegundoR0<Segundor1 ||//funciona
	 
	  //reinicio
	   Puntos>puntos1 && Puntos>puntos2 && Puntos>puntos3
	 ){
		
		 // alert("TP1");



	Nombre2=nombre1;	
	Puntos2=puntos1;
	Hora2=hora1;
	Min2=min1;
	Seg2=seg1;
	SegundoR2=Segundor1;

	Nombre3=nombre2;	
	Puntos3=puntos2;
	Hora3=hora2;
	Min3=min2;
	Seg3=seg2;
	SegundoR3=Segundor2;

	colorNombre1="blue";
	Nombre1=a+b+c;
	Puntos1=Puntos;
	Hora1=Hora;
	Min1=Min;
	Seg1=Seg;
	SegundoR1=SegundoR0;




	/*EMPATE*//*EMPATE*//*EMPATE*/
	////////////
	Enombre2=enombre1;
	Epuntos2=epuntos1;
	Eseg2=eseg1;
	Emin2=emin1;
	Ehora2=ehora1;
	ESegundoR2=eSegundor1;
	////////////////////
	Enombre3=enombre2;
	Epuntos3=epuntos2;
	Eseg3=eseg2;
	Emin3=emin2;
	Ehora3=ehora2;
	ESegundoR3=eSegundor2;
	////////
	Enombre1="***";
	Epuntos1=0;
	Eseg1=0;
	Emin1=0;
	Ehora1=0;
	ESegundoR1=0;




	 // Actualizar_Datos_Puntaje();
	 // Actualizar_Datos1(Valtext,valinput);
	Actualizar_Datos("Punto1",Puntos1);
	Actualizar_Datos("Nombre1",Nombre1);
	Actualizar_Datos("SegundoR1",SegundoR1);
	Actualizar_Datos("Hora1",Hora1);
	Actualizar_Datos("Min1",Min1);
	Actualizar_Datos("Seg1",Seg1);

	Actualizar_Datos("Punto2",Puntos2);
	Actualizar_Datos("Nombre2",Nombre2);
	Actualizar_Datos("SegundoR2",SegundoR2);
	Actualizar_Datos("Hora2",Hora2);
	Actualizar_Datos("Min2",Min2);
	Actualizar_Datos("Seg2",Seg2);

	Actualizar_Datos("Punto3",Puntos3);
	Actualizar_Datos("Nombre3",Nombre3);
	Actualizar_Datos("SegundoR3",SegundoR3);
	Actualizar_Datos("Hora3",Hora3);
	Actualizar_Datos("Min3",Min3);
	Actualizar_Datos("Seg3",Seg3);

	//ENPATE


	Actualizar_Datos("EPunto1",Epuntos1);
	Actualizar_Datos("ENombre1",Enombre1);
	Actualizar_Datos("ESegundoR1",ESegundoR1);
	Actualizar_Datos("EHora1",Ehora1);
	Actualizar_Datos("EMin1",Emin1);
	Actualizar_Datos("ESeg1",Eseg1);

	Actualizar_Datos("EPunto2",Epuntos2);
	Actualizar_Datos("ENombre2",Enombre2);
	Actualizar_Datos("ESegundoR2",ESegundoR2);
	Actualizar_Datos("EHora2",Ehora2);
	Actualizar_Datos("EMin2",Emin2);
	Actualizar_Datos("ESeg2",Eseg2);

	Actualizar_Datos("EPunto3",Epuntos3);
	Actualizar_Datos("ENombre3",Enombre3);
	Actualizar_Datos("ESegundoR3",ESegundoR3);
	Actualizar_Datos("EHora3",Ehora3);
	Actualizar_Datos("EMin3",Emin3);
	Actualizar_Datos("ESeg3",Eseg3);



	Puntos=0; 
	SegundoR0=0;
		}
		//funcion de empate total
					else
					 if(Puntos==puntos1 &&  SegundoR0==Segundor1 && puntos1!=0 && Segundor1!=0 ){

								// alert("E1");
								
									Enombre1=a+b+c;
									Epuntos1=Puntos;
									Eseg1=Seg;
									Emin1=Min;
									Ehora1=Hora;
									ESegundoR1=SegundoR0;
									
								Actualizar_Datos("EPunto1",Epuntos1);
								Actualizar_Datos("ENombre1",Enombre1);
								Actualizar_Datos("ESegundoR1",ESegundoR1);
								Actualizar_Datos("EHora1",Ehora1);
								Actualizar_Datos("EMin1",Emin1);
								Actualizar_Datos("ESeg1",Eseg1);

								Puntos=0; 
								SegundoR0=0;
									
									   }

	   ///////////////////////////////////////////////////////


}//CIERRE DE DIFERENCIAL

	
	   

	

	




}//CIERRE DE FUNCION