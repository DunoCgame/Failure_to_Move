
function Sonido(Estado,id){
	var Pista=document.getElementById(id);
	if(EstadoSonido==true){
			if(Estado==true){
				
			Pista.play();
			
			}
				else
					if(Estado==false){
						Pista.pause();
						Pista="";
					}
	}
	if(EstadoSonido==false){
		if(Estado==true){
				
			Pista.pause();
			
			}
				else
					if(Estado==false){
						Pista.pause();
						Pista="";
					}
		
		
		
	}
	
}