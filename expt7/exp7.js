var y = 0;


//To disable and enable the cursor pointers on elements.
function cursorPointers(id1, id2){
    document.getElementById(id1).style.cursor = "default";
    document.getElementById(id2).style.cursor = "pointer";
}

/* when someone clicks on methyl benzoicacid btn:
1. both buttons disappears
2. onclick on sample bottle activates
3. instruction text changes 
*/
function vanish1(){
	y = 1;
	$('#yellowbtn').hide();
	$('#yellowtxt').hide();
	$('#redbtn').hide();
	$('#redtxt').hide();
	cursorPointers("yellowbtn","sampl");
	$('#sampl').on('click',function(){sampleTransffer();});
	document.getElementById('instr').innerHTML = "Click on the sample  to transfer small amount (2-5mg) of the substance into the empty sample bottle."
}


/* when someone clicks on nitrophynol btn:
1. both buttons disappears
2. onclick on sample bottle activates
3. instruction text changes 
*/

function vanish2(){
	$('#yellowbtn').hide();
	$('#yellowtxt').hide();
	$('#redbtn').hide();
	$('#redtxt').hide();
	cursorPointers("redbtn","sampl");
	$('#sampl').on('click',function(){sampleTransffer();});
	document.getElementById('instr').innerHTML = "Click on the sample  to transfer small amount (2-5mg) of the substance into the empty sample bottle."
}

/*when someone clicks on sample bottle with yellow solution:
1. yellow solution in empty sample bottle disappears
2. onclick on solvent bottle activates
3. instruction text changes */

function sampleTransffer(){
	$('#yellow').show();
	cursorPointers("sampl","solvent");
	document.getElementById('instr').innerHTML = "Click on the solvent bottle to transfer 2 to 3ml of the solvent (methylene chloride) to the sample to prepared a clear solution."
	$('#solvent').on('click',function(){solventTransffer();});
}

/*when someone clicks on solvent bottle:
1. animation starts of filling of solvent in sample bottle
2. instruction text changes
3. calls helper fub=nction after 1 second */

function solventTransffer(){
	$('#fillsolution').show();
	document.getElementById('instr').innerHTML = "Click on the desicator to take out the 'solution IR cell'."
	setTimeout(helper,1000);
}

/*1. animation of filling solution disappears and sample bottle appears  with full of mixture of sample and solvent solution
2. oncclick on desicatorbtn activates */
function helper(){
	cursorPointers("solvent","desicatorbtn");
	$('#fillsolution').hide();
	$('#fullsolution').show();
	$("#fullbottle").show();
	$('#desicatorbtn').on('click',function(){showSlide();});
}

/*whensomeone clicks on desicatorbtn:
1. IRslide appears
2. onclick on sample bottle containing mixture solution starts
3. instruction text changes */

function showSlide(){
	cursorPointers("desicatorbtn","fullsolution");
	$('#slide').show();
	$('#fullsolution').on('click', function(){fillSlide();});
	document.getElementById('instr').innerHTML = "Click on the sample solution to draw 1ml of the solution with a syringe";
}

/*when someone clicks on mixture part in sample bottle:
1. aniamtion starts of fillin syringe
2. calls helper1 function after 0.9 seconds */

function fillSlide(){
	document.getElementById('instr').innerHTML = "Click on the solution IR cell to transfer the sample solution until all the air is expelled from the solution cell."
	$('#fillsirinj').show();
	$('#sirinj').show();
	setTimeout(helper1,900);
}

/*1. animation of syringe disappears
2. onclick on slide activates */
function helper1(){
	cursorPointers("fullsolution","slide");
	$('#fillsirinj').hide();
	$('#sirinj').hide();
	$('#slide').on('click',function(){fillSlide1();});
}


/*when someone clicks on slide:
1. animation starts showing filling solution into mid part of slide with help of syringe
2. calls helper2 function after 1 sec  */
function fillSlide1(){
	$('#sirinj2').show();
	$('#empty').show();
	$('#fillslide').show();
	setTimeout(helper2,1000);
}

/* 1. animation disappears of filling solution into slide
2. onclick on slide activates
3. instruction text changes */
function helper2(){
	cursorPointers("slide","fullslide");
	$('#sirinj2').hide();
	$('#empty').hide();
	$('#fillslide').hide();
	$('#fullslide').show();
	$('#fullslide').on('click',function(){spectro();});
	document.getElementById('instr').innerHTML ="Click on the solution IR cell to place the cell inside the spectrometer."
}

/* when someone clicks on slide:
1. spectromachine appears with animation
2. calls after 3.7 seconds spectro1 function */

function spectro(){
	$('#machine').show();
    setTimeout(spectro1,3700);
}

/* 1. animation of spectromachine ends
2. intruction text gets changed
3. oclick on start button activates */
function spectro1(){
	cursorPointers("fullslide","strtbtn");
	$('#machine').show();
	var img = document.getElementById('machine');
	img.src = "Images/spectromachine.png";
	document.getElementById('instr').innerHTML = "Click on 'start' button to start the spectrometer.";
    $('#strtbtn').on('click',function(){ evaluate() ;});
}

/*when someone clicks on startbtn:
1.animation of microscopic view in spectroscopy machine starts on rightt top side of page
2.calls stopMirror function after 3sec to stop moving mirror
3. calls showGraph function after 5sec */
function evaluate(){
	$("#uppersupport").show();
	$("#lowersupport").show();
	$('#mirror').show();
	setTimeout(stopMirror,3000);
    $('#exp').show();
	$("#movablemirror").hide();
    var img = document.getElementById('exp');
    img.src = "Images/beam.gif";
    setTimeout(showGraph,5000);
}


function stopMirror(){
	$("#uppersupport").hide();
	$("#lowersupport").hide();
	$("#movablemirror").show();
	$('#mirror').hide();
}

/*1. starts showing graph
2. calls stopgraph function after 4sec */

function showGraph(){
    $('#exp').show();
    var img1 = document.getElementById('exp');
    img1.src = "Images/sprites/DefineSprite_20_IR_Sol_exp7_fla.Animation_1_1/124.png"
    setTimeout(stopgraph,4000);    
    $('#graph').show();
    var img = document.getElementById('graph');
    if(y==1){
        img.src = "Images/greengraph.gif";
    }
    else{
        img.src = "Images/yellowgraph.gif"
    }
}

/* just stops animation of graph and activates onclick on evaluatebtn */
function stopgraph(){
	document.getElementById('instr').innerHTML = "Click on the evaluate button to spectral analysis"
    $('#graph.show');
    var img =  document.getElementById('graph');
    if(y==1){
        img.src = "Images/greenf.png";
    }
    else{
        img.src = "Images/yellowf.png";
    }
	cursorPointers("strtbtn","evltbtn");
	$("#evltbtn").on("click", function(){urlChange();});
}

/* when someone clicks on evaluate btn it just opens a new url in a new tab showing graph for corresponding mixtures we've selected  */

function urlChange(){
	if(y == 1){
		var win = window.open('https://ccnsb06-iiith.vlabs.ac.in/exp6_10/benzoic/benzoic_acid_IR_expt10.html','_blank');
        win.focus();
	}
	else{
		var win = window.open('https://ccnsb06-iiith.vlabs.ac.in/exp6_10/nitrophenol/2-nitrophenol_IR_expt10.html','_blank');
        win.focus();
	}
}




