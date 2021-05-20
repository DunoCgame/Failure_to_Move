
var Game_Over="";


var Tiempo_Visible=0;
function GameOver(){
	if(idioma=="ENG"){
Game_Over="GAME OVER";

}
else
if(idioma=="ES"){
Game_Over="JUEGO TERMINADO";
	
}
	
	

	/*Letrero de GameOver*/	/*Letrero de GameOver*/
	if(Gameover==true && IngresNombre==false && Podio==false && Escena==2){
			if(idioma=="ENG"){
			ctx.save();
			ctx.fillStyle="red";
			ctx.font = '100px calibri black';
			ctx.fillText(Game_Over,X/2-45,Y);
			ctx.restore(); }
			if(idioma=="ES"){
				ctx.save();
			ctx.fillStyle="red";
			ctx.font = '100px calibri black';
			ctx.fillText(Game_Over,X/2-130,Y);
			ctx.restore(); 
			}
			
			Tiempo_Visible+=1;
	}
	if(Tiempo_Visible==45 && Escena==2){
		IngresNombre=true;
		Tiempo_Visible=0;
	}
	
	/*Letrero de GameOver*/	/*Letrero de GameOver*/

}






	
	

