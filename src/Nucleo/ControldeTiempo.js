
 console.log("Activo");
 
 var Ti=0;
 var Tinicial=0;
 function TiempoCentrar(Tfinal,TCaptura,EstadoContador){
	
	 if(EstadoContador==true){
		// /*CONTEO INTERNO*/
		
		Tinicial+=1;
		
	
		if(Tinicial>=Tfinal){Tinicial=0; Ti+=1;
		    // alert(Ti);
		}
		// /*CONTEO INTERNO*/
		
		// /*captura*/
		if(Ti==TCaptura){
			Ti=0;
			 // alert(Ti);
			  return true;
			
		

		}
		 else 
		 if(Ti!=TCaptura){
			 return false;
		 }
		/*captura*/
		
		
		
		 // return Tinicial;
		 // return Ti;
		
	}//cierre boleano
	
	
	
	
}//cierre funcion
/*CONTADOR FUNCIONANDO CORRECTAMENTE*/
	
// (function init(){
// if(typeof game_loop !="undefined"){
	// clearInterval(game_loop);}
// console.log("Tiempo"+"="+ TiempoCentrar(5,2,true));


// game_loop=setInterval(init,1000);
// })();
