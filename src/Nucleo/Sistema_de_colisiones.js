// COLISIONES SISTEMA
/*Posicion de mause*/


/*Posicion de mause*/
function Posicion_del_Mause(){
var mousePos=0;
function getMousePos(canvas, evt) {
return {
			x: evt.clientX,
			y: evt.clientY};}
			
	canvas.addEventListener('mousemove', function(evt) {
			var mousePos = getMousePos(canvas, evt);
			mira.PosX=mousePos.x;
			mira.PosY=mousePos.y;
			
		

	}, false);


	}//fin de la funcions
var mira={draw:false,PosX:0,PosY:0,width:50,height:10,radio:50};

	function pintarcursos(){
ctx.save();
ctx.fillStyle="rgba(255,255,255, 0.5)";
ctx.fillRect(mira.PosX,mira.PosY,mira.width,mira.height);
ctx.restore();
					
				ctx.save();
				ctx.fillStyle="rgba(255, 255, 255, 0.5)";
				ctx.beginPath();
				ctx.arc(mira.PosX,mira.PosY,mira.radio,0,Math.PI*2,true);
				ctx.closePath;
				ctx.fill();
					
		}


/*Deteccion del teclado*/
function EventosTeclado(){
	
document.getElementById("body").addEventListener( "keydown", function(e){
	teclado[e.keyCode] = true; 		 });
	
document.getElementById("body").addEventListener( "keyup", function(e){
	teclado[e.keyCode] = false; 	 	});
}
/*Deteccion del teclado*/



// sistema_colision
function Distancia_entre_dos_puntos(PosX1, PosY1,PosX2, PosY2){

var Distancia_entre_dos_Puntos=Math.floor(Math.sqrt((Math.pow(PosX1-PosX2,2))+(Math.pow(PosY1-PosY2,2))));

			return Distancia_entre_dos_Puntos;
}


function Angulo_entre_dos_puntos(PosX1, PosY1,PosX2, PosY2){
	
			var Pendiente=((PosX1-(PosX2))/((PosY1-(PosY2))));

			var AnguloenRadianes=Math.tan(Pendiente);

			var Angulo=Math.floor(AnguloenRadianes*(180/Math.PI));
	
	return Angulo;
	
}

function Colision_por_cuadro(PosX1,PosY1,W1,H1,PosX2,PosY2,W2,H2){

	if ( ((PosX1+W1) > PosX2)  &&  (PosX1 < (PosX2+W2)) ) {
              
    if ( ((PosY1+H1) > PosY2)  &&  (PosY1 < (PosY2+H2)) ) {

		return true;
	}
	}
	else{
		return false;
	}
		
	
	
}
/*llamada*/
	// var colision=Colision_por_cuadro(PosX1,PosY1,W1,H1,PosX2,PosY2,W2,H2)
	// if(!colision){}
	// else{}
/*llamada*/
// sistema_colision

// COLISIONES SISTEMA

