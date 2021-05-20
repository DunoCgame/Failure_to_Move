var Button=0;
var Press1=0;
var Press2=0;

// EventosTeclado();
// function EventosTeclado(){
	
// document.getElementById("body").addEventListener( "keydown", function(e){
	// teclado[e.keyCode] = true; 		 });
	
// document.getElementById("body").addEventListener( "keyup", function(e){
	// teclado[e.keyCode] = false; 	 	});
// }






function BotonS(){
	if(teclado[teclaEnter]){Escena=1;}
	/*FONDO DE PORTADA*/
ctx.save();
ctx.fillStyle="black";
ctx.fillRect(0,0,W,H);
ctx.restore();
/*FONDO DE PORTADA*/
	if(teclado[teclaEnter]){        Button=1;	 	}
	if(teclado[teclaEnter]==false){ Button=0; 	}
	
	
	ctx.save();
ctx.fillStyle="white";
ctx.font = '30px calibri black';
ctx.fillText("1-Button",X,Y);
	ctx.restore();
	
	ctx.save();
ctx.fillStyle="white";
ctx.font = '30px calibri black';
ctx.fillText("2-Button",X,Y+50);
	ctx.restore(); 	
	
	ctx.save();
ctx.fillStyle="white";
ctx.font = '30px calibri black';
ctx.fillText("3-Button",X,Y+90);
	ctx.restore(); 



	
	
	
	
}