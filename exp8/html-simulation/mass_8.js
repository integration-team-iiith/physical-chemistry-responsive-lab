
var step;

function moveSyringe() {

		document.getElementById("demo").innerHTML = "The sample is introduced into the vaporisation chamber which is instantly vapourised due to high vacuum and heat.";
	  	document.getElementById("")
	  	var elem = document.getElementById("syringe");   
	  	var pos = 0;
	  	var id = setInterval(frame, 5);
	  	
	  	function frame() {
	    	if (pos == 350) {
	      		clearInterval(id);
	    	} 
	    	else {
	      		pos++; 
		    	elem.style.left = pos + 'px'; 
		      	// elem.style.left = pos + 'px'; 
		      	document.getElementById("molecule").src = "images/molecule.png";
			}
		
		}
}

function molecule(){
	var elem =document.getElementById('molecule').style.visibility = visible ;
	var elem = document.getElementById("molecule");
	var pos = 0;
	var id = setInterval(frame, 5);

	function frame(){
		if (pos ==350) {
			clearInterval(id);
		}
		else {
			pos++;
			elem.style.top = pos + 'px';
		}
	}
}
		
	
	

