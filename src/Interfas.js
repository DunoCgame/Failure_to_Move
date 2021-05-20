
setInterval(function(){
 if(Pause==false && Escena==2 && IngresNombre==false && Gameover==false && Podio==false){
	
Seg++;
SegundoR0++;

	}
}, 1000);

function cronometro(){	
	if(Seg==60){
		Min+=1;
		Seg=0;
	}
		else if(Min==60){
			Hora+=1;
			Min=0;
			
		}

}
var TextPuntos="";
var TextClok="";
var EstadoDificultad="";
var texxD="";
function Interfas(){
		if(idioma=="ENG"){
					TextPuntos="Score";
					TextClok="Time";
					EstadoDificultad="Stade" ;
		}

	if(idioma=="ES"){
			TextPuntos="Puntos";
			TextClok="Tiempo";
			EstadoDificultad="Estado" ;
	}
	
	if(Dificultad==1){
		if(idioma=="ENG"){ 		
		ctx.save();
		ctx.fillStyle="rgba(212,210,210,1)";
		ctx.font = '40px calibri black';
		ctx.fillText("Easy",X-45,90);
		ctx.restore(); 
		}
		
		if(idioma=="ES"){ 	
			ctx.save();
			ctx.fillStyle="rgba(212,210,210,1)";
			ctx.font = '40px calibri black';
			ctx.fillText("F\u00E1cil",X-40,90);
			ctx.restore(); 
		
		}

}
else
if(Dificultad==2){
	if(idioma=="ENG"){ 		
	
		ctx.save();
			ctx.fillStyle="rgba(212,210,210,1)";
			ctx.font = '40px calibri black';
			ctx.fillText("Normal",X-70,90);
			ctx.restore(); 
	}
		
		if(idioma=="ES"){

			ctx.save();
			ctx.fillStyle="rgba(212,210,210,1)";
			ctx.font = '40px calibri black';
			ctx.fillText("Normal",X-63,90);
			ctx.restore(); 


		}
}
else
if(Dificultad==3){
	if(idioma=="ENG"){ 		
	
	        ctx.save();
			ctx.fillStyle="rgba(212,210,210,1)";
			ctx.font = '40px calibri black';
			ctx.fillText("Extreme",X-80,90);
			ctx.restore(); 	}
		
		if(idioma=="ES"){

		 ctx.save();
			ctx.fillStyle="rgba(212,210,210,1)";
			ctx.font = '40px calibri black';
			ctx.fillText("Extremo",X-70,90);
			ctx.restore();
		
		
		
		}
}
		
	
	if(Personaje.draw==true){
			///////////////////Personaje 1
			if(idioma=="ES"){
			ctx.save();
			ctx.fillStyle="rgba(212,210,210,1)";
			ctx.font = '40px calibri black';
	
			ctx.fillText(TextPuntos,X-290,50);
			ctx.fillText(Puntos,X-250,90);
			
			ctx.fillText("Dificultad",X-80,50);
		
			
			ctx.fillText(TextClok,X+140,50);
			ctx.fillText(Hora+":"+Min+":"+Seg,X+150,90);
			ctx.restore(); 
			}	
			if(idioma=="ENG"){
			ctx.save();
			ctx.fillStyle="rgba(212,210,210,1)";
			ctx.font = '40px calibri black';
	
			ctx.fillText(TextPuntos,X-280,50);
			ctx.fillText(Puntos,X-250,90);
			
			
			ctx.fillText("Difficulty",X-80,50);
		
			
			ctx.fillText(TextClok,X+190,50);
			ctx.fillText(Hora+":"+Min+":"+Seg,X+190,90);
			ctx.restore(); 
			}
		
	}

}





