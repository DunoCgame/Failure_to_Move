var Tiempo_Victoria=0;

var Carga_de_Datos_Victoria=false;

function Triunfo_Final(){
		
	if(Victoria==true){
		
		Personaje.draw=false;
		
			if(idioma=="ES"){
					if(Tiempo_Victoria<50){
						ctx.save();
						ctx.fillStyle="rgba(179,179,0,1)";
						ctx.font = '180px calibri black';
						ctx.fillText("Victoria",X-300,Y+50);
						ctx.restore();
						
						Tiempo_Victoria++;
				}
						
						if(Tiempo_Victoria==50 && Podio==false){
								Carga_de_Datos_Victoria=true;
								IngresNombre=true;
								Tiempo_Victoria=51; 
							}

			}	
			if(idioma=="ENG"){
					if(Tiempo_Victoria<50){
						ctx.save();
						ctx.fillStyle="rgba(179,179,0,1)";
						ctx.font = '180px calibri black';
						ctx.fillText("Victory",X-300,Y+50);
						ctx.restore();
						
						Tiempo_Victoria++;
				}
				
				if(Tiempo_Victoria==50 && Podio==false){
								
						
								Carga_de_Datos_Victoria=true;
								IngresNombre=true;
								Tiempo_Victoria=51;
							}

			}
			
			


	}//Cierre Booleano


}//Cierre