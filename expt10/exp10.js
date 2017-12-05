var x=0;
var y = 0;
var z = 101;
var p =  1;
var askInt;
var int2;
//To disable and enable the cursor pointers on elements.
function cursorPointers(id1, id2){
    document.getElementById(id1).style.cursor = "default";
    document.getElementById(id2).style.cursor = "pointer";
}



function showoptn1(){
    y = 0;
    $('#selected1').show();
    $('#exp1').show();
    $('#exp3').show();
    $('#exp2').show();
    $('#exp3txt').show();
    $('#exp2txt').show();
    $('#exp1txt').show();
    document.getElementById("btn2").onclick = false;
    document.getElementById("sampl2").onclick = false;
}

function showoptn2(){
    y = 1;
    $('#selected2').show();
    $('#exp1').show();
    $('#exp3').show();
    $('#exp2').show();
    $('#exp3txt').show();
    $('#exp2txt').show();
    $('#exp1txt').show();
    document.getElementById("btn1").onclick = false;
    document.getElementById("sampl1").onclick = false;
}

// If User  selects btn1 i.e.IR solution Experiment this Part of Js will Work for all functionalities of that experiment

function moveToIr(){
    $("#container").hide();
    $("#IRcontainer").show();
}

/* when someoe clicks on sample bottle:
1. animation starts for transfering sample solution from sample bottle to empty sample pot
2. it calls emptyspoon function which is basically another animation of spoon after 3 seconds
3.  activates onclick on mortar*/

function IRclickSampl(){
    cursorPointers("IRsampl","IRmortar");
    $("#IRmortar").on("click",function(){IRmix1();});
    $('#IRspoonfill').show();
    setTimeout(IRemptySpoon,3000);
    document.getElementById('IRinstr').innerHTML = "Click on the mortar to grind the sample to fine paste"
}

/* function pours sample solution into moratr*/

function IRemptySpoon(){
    document.getElementById("IRsampl").onclick = false;
    $('#IRspoonfill').hide();
    $('#IRemptyspoon').show();
    setTimeout(IRremoveSpoon,2800);
}

/* function hides spoon and activates onclick function on nozal bottol */

function IRremoveSpoon(){
    $('#IRemptyspoon').hide();
}

/*when someone clicks on mortar:
1. animation of mixing solution in mrtar starts
2. it calls offMortar1 function to stop animation after 3 sec */
function IRmix1(){
    $('#IRmortar').show();
    var img =  document.getElementById('IRmortar');
    img.src = "exp6/Images/mortar.gif";
    setTimeout(IRoffMortar1,3000); 
}
/* 1. stops animation of mortar
2. instructin text changes
3. onclick on nizol activates*/

function IRoffMortar1(){
    cursorPointers("IRmortar","IRnizol");
    $('#IRmortar').show();
    var img =  document.getElementById('IRmortar');
    img.src = "exp6/Images/sprites/DefineSprite_82/1.png";
    document.getElementById("IRinstr").innerHTML = "Click on the bottle containing Nizol to transfer few drops to the mortar.";
    $('#IRnizol').on("click",function(){ IRsirinj() ;})
}


/*when someone clicks on nizol bottle:
1. animation of drawing solvent from nizol disappears
2. calls replaceSirinj after 2.5 sec
3. deactivates onclick on nizol bottle */


function IRsirinj(){
    $('#IRfillsirinj').show();
    setTimeout(IRreplaceSirinj,2400);
    document.getElementById("IRnizol").onclick = false;
}

/* 1. animation of puring nizol solution over mortar starts
2. old animation disappears.
3. calls helper1 function aftr 1 sec just to hide animation of moving drops
4. calls removeSirinj after 1 second to just hide animation, to activate onclick on mortar also */

function IRreplaceSirinj(){
    $('#IRfillsirinj').hide();
    $('#IRemptysirinj').show();
    $("#IRdrop").show();
    $("#IRdrop").velocity({translateY: 60},{duration:1000});
    setTimeout(IRhelper1,1000);
    setTimeout(IRremoveSirinj,1000);
}

function IRhelper1(){
    $("#IRdrop").hide();
}

/* to hide sirinj*/

function IRremoveSirinj(){
    cursorPointers("IRmortar","IRmortar");
    $('#IRemptysirinj').hide();
    $('#IRmortar').on("click", function(){ IRmix() ;});
    document.getElementById('IRinstr').innerHTML = "click on the mortar to make a fine paste of sample"
}

/* when someone again clicks on mortar:
1. animation of movin mortar starts
2. after 3sec calls offMortar function to stop animation */

function IRmix(){
    $('#IRmortar').show();
    var img =  document.getElementById('IRmortar');
    img.src = "exp6/Images/mortar.gif";
    setTimeout(IRoffMortar,3000); 
}

/* function stops movement of mortar and also defines onclick function on mortar to transffer mixture onto the IR disc*/


function IRoffMortar(){
    cursorPointers("IRmortar","IRmortar1");
    $('#IRmortar').hide();
    $('#IRmortar1').show();
    var img =  document.getElementById('IRmortar');
    img.src = "exp6/Images/sprites/DefineSprite_82/1.png";
    $('#IRmortar1').on('click',function(){IRputinplat();});
    document.getElementById('IRinstr').innerHTML = "Click on mortar to Transfer the sample prepared onto one of the IR discs"
}
/* when someone clicks on mortar again:
1. animation starts of transferring ready mixture in mortar
2. plate appears in which mixture goes
3. calls fillplate after 2.5 sec
*/

function IRputinplat(){
    $('#IRspoonfill2').show();
    $('#IRplate').show();
    setTimeout(IRfillplate,2500);
}

/* 1. just shows animation of pouring solution on IRplate 
2. calls removespoon to hide this animation after 2seconds
3. helper2 function in animation of movement of spoon */

function IRfillplate(){
    $('#IRspoonfill2').hide();
    setInterval(IRhelper2,50);
    setTimeout(IRremoveSpoon2,2000);
}

function IRhelper2(){
    if(p<40){
        $('#IRemptyspoon2').show();
        var img = document.getElementById("IRemptyspoon2");
        img.src = "exp6/Images/sprites/DefineSprite_84_IR_Powder_exp6_fla.emptysepctual_28/"+ p + ".png";
    }
    else{
        $("#IRemptyspoon2").hide();
    }
    p++;
}

/* 1.function removes syringe 
2.  defines onclick on IR disc to form a thin film*/

function IRremoveSpoon2(){
    cursorPointers("IRmortar1","IRplate");
    cursorPointers("IRmortar1","IRfill");
    document.getElementById('IRinstr').innerHTML = "Click on IR discs Place carefully the other disc  and press to form a thin film."
    $('#IRemptyspoon2').hide();
    $('#IRfill').show();
    $('#IRplate').on("click",function(){ IRstartexp() ;});
    $('#IRfill').on('click',function(){IRstartexp() ;});
}


/* 1. when someone clicks on IRplate;
1. animation starts for movemnt of holder and plates
2. solvent,samplebottle, mortar disappears
3. instruction  text gets changeda
4. calls green21 function after 3.2sec */

function IRstartexp(){
    $('#IRgreen1').show();
    var askInt = setInterval(IRred1,50);
    setTimeout(IRgreen21,3200);

    $('#IRmortartxt').hide();
    $('#IRmortar1').hide();
    $('#IRnizol').hide();
    $('#IRsampl').hide();
    $('#IRplate').hide();
    $('#IRfill').hide();
    $('#IRsampltxt').hide();
    $('#IRnizoltxt').hide();
    document.getElementById('IRinstr').innerHTML = "Click the IR discs to Move the IR plates to the plate holder."
}


function IRred1(){
    $('#IRgreen1').show();
    var img = document.getElementById("IRgreen1");
    var flask = [];
    var i;
    for(i=101;i<=163;i++){
        flask[i] = "exp6/Images/sprites/DefineSprite_43_IR_Powder_exp6_fla.top_scene_3/" + i + ".png" 
    }
    if(z < 163){
        img.src = flask[z];
        z++;
    }
    if(z === 163){
        z = 165;
    }

    if(z === 165){
        clearInterval(askInt);
    }
}

/*1. changes instruction text
2. activates onclick on irdisc  */

function IRgreen21(){
    cursorPointers("IRplate","IRgreen1");   
    document.getElementById('IRinstr').innerHTML = "Click on the holder to place the the sample in the spectrometer."
    $('#IRgreen1').on('click',function(){ IRgreen22();});
    
}

/* when someone clicks on covered IRplates:
1. starts animation moving holder with help of helper3 function
2. calls green23 functio after 2.8 sec */

function IRgreen22(){
    $('#IRgreen1').hide();
    $('#IRred3').show();
    var int2 = setInterval(IRhelper3,50);
    setTimeout(IRgreen23,2800);
}


function IRhelper3(){
    if(z>=165 && z<=221){
        $('#IRred3').show();
        var img = document.getElementById("IRred3");
        img.src = "exp6/Images/sprites/DefineSprite_43_IR_Powder_exp6_fla.top_scene_3/" + z + ".png"
        z++;
    }
    else{
        clearInterval(int2);
    }
}

/* 1. stops animation of moving holder
2. activates onclick on holder */

function IRgreen23(){
    cursorPointers("IRgreen1","IRred3");
    var img = document.getElementById('IRred3');
    img.src = "exp6/Images/sprites/DefineSprite_43_IR_Powder_exp6_fla.top_scene_3/221.png"
    $('#IRred3').on('click',function(){ IRspectro() ;});
}


/* 1. stops animation of spectrometer 
2.defines onclick on startbutton to start the experiment */

function IRspectro1(){
    cursorPointers("IRred3","IRstrtbtn");
    $('#IRmachine1').show();
    setTimeout(function() {
        $('#IRmachine').hide();
    }, 100);
    // var img = document.getElementById("IRmachine");
    // img.src = "exp6/Images/spectrometer.png";
    $('#IRstrtbtn').on('click',function(){ IRevaluate() ;});
}


/* when someone clicks on holder: 
1. function shows animation of spectrometer
2. calls spectro1 function after 3.6 seconds
*/

function IRspectro(){
    document.getElementById('IRinstr').innerHTML = "Click start to run the spectrometer."
    $('#IRmachine').show();
    setTimeout(IRspectro1,3500);
}



/* when someone clicks on start button:
1. animation of beam falling on mirror in spectrometer starts
2. calls showGraph function after 5seconds */

function IRevaluate(){
    $('#IRexp').show();
    var img = document.getElementById('IRexp');
    img.src = "exp6/Images/beam.gif";
    setTimeout(IRshowGraph,5000);
}
/*1. starts animation of graph depending on which button we've selected in starting
2. stops animation of microscopic view of beams  */

function IRshowGraph(){
    $('#IRexp').show();
    var img1 = document.getElementById('IRexp');
    img1.src = "exp6/Images/sprites/DefineSprite_20/124.png"    
    $('#IRgraph').show();
    var img = document.getElementById('IRgraph');
    if(y==1){
        setTimeout(IRstopgraph,4000);
        img.src = "exp6/Images/yellowgraph1.gif";
    }
    else{
        setTimeout(IRstopgraph,10500);
        img.src = "exp6/Images/yellowgraph.gif"
    }
}

function IRstopgraph(){
    $('#IRgraph.show');
    var img =  document.getElementById('IRgraph');
    if(y==1){
        img.src = "exp6/Images/yellowf.png";
}
    else{
        img.src = "exp6/Images/sprites/DefineSprite_136_IR_Powder_exp6_fla.graph_caffeine_46/105.png";
    }
    cursorPointers("IRstrtbtn","IRevltbtn");
    $("#IRevltbtn").on("click", function(){IRurlChange();});
}

function IRurlChange(){
    if(y==0){
        var win = window.open('https://ccnsb06-iiith.vlabs.ac.in/exp6_10/aspirin/plot_IR_aspirin_exp6.html','_blank');
        win.focus();
    }
    else{
        var win = window.open('https://ccnsb06-iiith.vlabs.ac.in/exp6_10/nitrophenol/2-nitrophenol_IR_expt10.html','_blank');
        win.focus();    
    }

}



// End of IR solution experiment js code


// If User  selects btn2 i.e.Mass Spec Experiment this Part of Js will Work for all functionalities of that experiment


function moveToMass(){
    $("#container").hide();
    $("#MScontainer").show();
    $('#MSsolvent').on("click", function(){ MSdraw1() ;});
}


/* when someone clicks on solvent bottle first time: 
1. shows giphy of syringe drawing
2. solvent & solvent1 images are same 
3. calls helper function after 1sec */

function MSdraw1(){
    $("#MSsolvent").hide();
    $("#MSsolvent1").show();
    $('#MSblue1').show();
    document.getElementById('MSinstr').innerHTML = "Click on the sample bottle to transfer small amount (around 1mg) of the substance into the empty sample bottle"
    setTimeout(MShelper1,1000);
}

/* 1.hides old animation of syringe
   2. displays new syringe horizontally placed and changes its height as well as moves towards spectro machine */

function MShelper1(){
    $('#MSblue1').hide();
    $('#MShrblue').show();
    $("#MShrblue").velocity({width: "5%", translateY: 205}, {duration: 1000});
    setTimeout(MSsetMachine,1000);
}

/* 1. shows animation of spectromachine filling with solvent liquid
   2. calls helper7 after 1sec function which just hides the syringe and activates onclick on samplesol bottle */


function MSsetMachine(){
    $('#MSspectro').show();
    var img = document.getElementById("MSspectro");
    img.src = "exp6_10/Images/bluemachine.gif";
    setTimeout(MShelper7,1000);
}

function MShelper7(){
    cursorPointers("MSsolvent","MSsamplsol");
    $('#MSspectro').show();
    var img = document.getElementById("MSspectro");
    img.src = "exp6_10/Images/bluemachine/39.png";
    $("#MShrblue").hide();
    $('#MSsamplsol').on("click", function(){ MSspoon1() ;});
}


/* when someone clicks on samplesol bottle: 
1. instr changes and animation of spoon taking solution from sample bottle appears
2. calls spoon2 function after 2 sec which just hides first spoon gif and shows 2nd spoon on empty sample bottle */


function MSspoon1(){
    document.getElementById("MSinstr").innerHTML = "Click on the solvent bottle to transfer 5 ml of the solvent (methanol) to the substance taken.";
    $('#MSspoon1').show();
    setTimeout(MSspoon2,3000);
}

function MSspoon2(){
    $('#MSspoon1').hide();
    $('#MSspoon2').show();
    setTimeout(MShelper2,2800);
}


/* 1. shows plate having sample on a plate inside empty sample bottle
2. disapears that old spoon animation
3. activates onclik on solvent bottle again */


function MShelper2(){
    cursorPointers("MSsamplsol","MSsolvent1");
    $('#MSfill').show();
    $('#MSspoon2').hide();
    $('#MSsolvent1').on("click",function(){MSdraw2();});
}

/* when someone clicks on solvent solution again:
1. instr changes and it shows a syringe drawing solvent from solvent box
2. calls helper3 function after 1 sec  */


function MSdraw2(){
    $("#MSsolvent1").unbind();
    document.getElementById("MSinstr").innerHTML = "Click on the sample solution to draw 1 ml of the sample prepared to load on to the mass spectrometer."
    $('#MSblue1').hide();
    $('#MSsyringe1').show();
    setTimeout(MShelper3,1000);
}


/* 1. shows syringe pouring solvent into emty sample bottle
2. hides old syringe bottle/
3. shows animation of filling sample bottle also calls helper4 function*/

function MShelper3(){
    $('#MSsyringe2').show();
    $('#MSsyringe1').hide();
    $('#MSsample').hide();
    $('#MSsample2').show();
    setTimeout(MShelper4,1500);
}

/* 1. activates onclick on sample bottle */

function MShelper4(){
    cursorPointers("MSsolvent1","MSsample2");
    $('#MSsample2').show();
    var img = document.getElementById('MSsample2');
    img.src = "exp6_10/Images/full_bottle.png";
    $('#MSsyringe2').hide();
    $('#MSsample2').on("click", function(){ MSshake(); });
    document.getElementById("MSinstr").innerHTML = "Click on the sample solution to make a clear solution.";
}

/* 1. shakes sample bottle and calls helper9 after 1 second sample2 and defines on sample bottle containing mixture solution again (changebeaker are same images) */

function MSshake(){
    $("#MSsample2").velocity({rotateZ: 10}, {loop: 10, duration: 100});
    $("#MSfill").velocity({rotateZ: 10}, {loop: 10, duration: 100});
    setTimeout(MShelper9,1000);
}

function MShelper9(){
    cursorPointers("MSsample2","MSchangebeaker");
    document.getElementById("MSinstr").innerHTML = "Click on the sample solution to draw 1 ml of the sample prepared to load on to the mass spectrometer."
    $("#MSsample2").hide();
    $("#MSchangebeaker").show();
    $('#MSchangebeaker').on("click", function(){ MSdraw3(); });
}

/* 1. shows syringe drawing mixture from sample bottle containing mix. solution also calls helper5 function after 1sec  */

function MSdraw3(){
    $('#MSgreen1').show();
    setTimeout(MShelper5,1000);
}

/* 1. hides that syring animation
2. shows horizontal syringe and moves towards spectromachine
3. calls setMachine2 after 1 second  */

function MShelper5(){
    $('#MSgreen1').hide();
    $("#MShrgreen").show();
    $("#MShrgreen").velocity({width: "5%", translateY: 205}, {duration: 1000});
    setTimeout(MSsetMachine2,1000);
}


function MSsetMachine2(){
    $('#MSspectro').show();
    var img = document.getElementById("MSspectro");
    img.src = "exp6_10/Images/greenmachine.gif";
    setTimeout(MShelper8,1000);
}

function MShelper8(){
    $("#MSspectro").show();
    var img = document.getElementById("MSspectro");
    img.src = "exp6_10/Images/greenmachine/40.png";
    setTimeout(MSstart,1000);
}


function MSstart(){
    $("#MSinnerinstrtxt").show();
    $("#MSinnerinstr").show();
    $("#MSbox").show();
    $("#MSarrow").show();
    $("#MSarrow").velocity({translateX:-5, translateY:5},{loop:10,duration:100});
    $('#MSgreennew').hide();
    $('#MSgreennew1').show();
    setTimeout(MShelper6,3000);
}

function MShelper6(){
    $("#MSgreennew1").show();
    var img = document.getElementById("MSgreennew1");
    img.src = "exp6_10/Images/final_frame.png";
    $('#MSylwdrop1').show();
    $('#MSylwdrop2').show();
    $('#MSylwdrop3').show();
    $('#MSylwdrop4').show();
    $('#MSylwdrop5').show();
    $("#MSylwdrop1").velocity({translateX: -15, translateY: 15}, {loop: 5, duration: 400});
    $("#MSylwdrop2").velocity({translateX: 15, translateY: -15}, {loop: 5, duration: 400});
    $("#MSylwdrop3").velocity({translateX: 15, translateY: -15}, {loop: 5, duration: 400});
    $("#MSylwdrop4").velocity({translateX: 15, translateY: -15}, {loop: 5, duration: 400});
    $("#MSylwdrop5").velocity({translateX: 15, translateY: -15}, {loop: 5, duration: 400});
    setTimeout(MShelper10,2000);
}

function MShelper10(){
    $("#MSbox").hide();
    $("#MSarrow").hide();
    $("#MSarrow2").show();
    document.getElementById("MSinnerinstrtxt").innerHTML = "Positively charged radical ions are formed by bombardment of beam of &nbsp;high energy electrons."
    $("#MSgreennew1").hide();
    $("#MSylwdrop1").hide();
    $("#MSylwdrop2").hide();
    $("#MSylwdrop3").hide();
    $("#MSylwdrop4").hide();
    $("#MSylwdrop5").hide();
    $("#MStemp1").show();
    $("#MSion1").show();
    $("#MSion2").show();
    $("#MSion3").show();
    $("#MSion4").show();
    $("#MSion5").show();
    $("#MSion6").show();
    $("#MSion7").show();
    $("#MSion8").show();
    $("#MSion1").velocity({translateX: 10, translateY: 10}, {loop: 5, duration: 400});
    $("#MSion2").velocity({translateX: 10, translateY: 10}, {loop: 5, duration: 400});
    $("#MSion3").velocity({translateX: 10, translateY: 10}, {loop: 5, duration: 400});
    $("#MSion4").velocity({translateX: 10, translateY: 10}, {loop: 5, duration: 400});
    $("#MSion5").velocity({translateX: 10, translateY: 10}, {loop: 5, duration: 400});
    $("#MSion6").velocity({translateX: 10, translateY: 10}, {loop: 5, duration: 400});
    $("#MSion7").velocity({translateX: 10, translateY: 10}, {loop: 5, duration: 400});
    $("#MSion8").velocity({translateX: 10, translateY: 10}, {loop: 5, duration: 400});
    setTimeout(MShelper11,2000);
}

function MShelper11(){
    $("#MSarrow2").hide();
    $("#MSarrow1").show();
    $("#MSbox1").show();
    $("#MSarrow").velocity({translateX:-5, translateY:5},{loop:10,duration:100});
    document.getElementById("MSinnerinstrtxt").innerHTML = "The positively charged radical ions are accelerated by perforated negative electrodes.";
    $("#MStemp1").hide();
    $("#MSion1").hide();
    $("#MSion2").hide();
    $("#MSion3").hide();
    $("#MSion4").hide();
    $("#MSion5").hide();
    $("#MSion6").hide();
    $("#MSion7").hide();
    $("#MSion8").hide();
    $("#MStemp2").show();
    setTimeout(MShelper12,4000);
}

function MShelper12(){
    $("#MSarrow1").hide();
    $("#MSbox1").hide();
    document.getElementById("MSinnerinstrtxt").innerHTML = "The ions are sorted and separted by the magnetic filed according to their mass/ charge ratio."
    $("#MStemp2").hide();
    $("#MSrainbow").show();
    $("#MSline").velocity({opacity:1},{duration:2000});
    setTimeout(MSgraphshow,1000);
}

/* shows graph depending which button is clicked */

function MSgraphshow(){
    $("MSgraph").show();
    var img = document.getElementById("MSgraph");
    if(y==0){
        img.src = "exp6_10/Images/cafingraph.gif";
    }
    else{
        img.src = "exp6_10/Images/asprngraph.gif"
    }
    setTimeout(MSstopGraph,4000);
}

/* to stop graph also activates onclick on evaluate button */

function MSstopGraph(){
    $("MSgraph").show();
    var img = document.getElementById("MSgraph");
    if(y==0){
        img.src = "exp6_10/Images/asprngraph.png";
    }
    else{
        img.src = "exp6_10/Images/cafingraph.png";
    }
        cursorPointers("MSchangebeaker","MSevaluate");
        cursorPointers("MSchangebeaker","MSevlttxt")
        $("#MSevaluate").on("click", function(){MSurlChange();});
}


/* when someone clicks on evaluate button it opens a new url in a new tab showing graph */

function MSurlChange(){
    if(y == 0){
        var win = window.open('https://ccnsb06-iiith.vlabs.ac.in/exp6_10/aspirin/aspirin_MS_exp9.html','_blank');
        win.focus();
    }

    else if(y == 1){
        var win = window.open('https://ccnsb06-iiith.vlabs.ac.in/exp6_10/nitrophenol/2-nitrophenol_MS.html','_blank');
        win.focus();
    }
}



// End of Mass Spec experiment js code




// If User  selects btn3 i.e.NMR Experiment then this Part of Js will Work for all functionalities of that experiment

/* function just shows page where all buttons and assets are present for required page and also hides starting page */

function moveToNmr(){
    $("#container").hide();
    $("#NMRcontainer").show();
}

var timer = 50;
function changeIcon(){
    $("#NMRsample-button").show();
    var img = document.getElementById("NMRsample-button");
    var fig = document.getElementById("NMRsample-button");
    timer = setTimeout(function(){
        fig.src = "exp5/images/fillsample.png";
},500);
    fig.src = "exp5/images/sample_button.png";
    $("#NMRsample-button").on("click",function(){NMRshowsample();});
    }


/* when someone clicks on sample button:
1. red solution appears in injector
2. onclick activates on load sample button and also onclick on sample button deactivats
*/



function NMRshowsample(){
    $(document).mousemove(function(){
        $(document).off("onmousemove",changeIcon);
    });
    $("#NMRsample-button").show();
    var img = document.getElementById("NMRsample-button");
    img.src = "exp5/images/sample_button.png"
    cursorPointers("NMRsample-button","NMRload-sample");
    $("#NMRred-injector").show();
    $("#NMRinjector").hide();
    $("#NMRsample-button").onclick = false;
    $("#NMRload-sample").on("click",function(){NMRpushinjector();});
}

/* when someone clicks on load button:
1. injector moves into magnetic field 
2. animation of moving ring and arrows starts (for this it calls helper2 function)
3. an image appears at left bottom showing direction of magnetic field
4. activates onclick on start button */

function NMRpushinjector(){
    cursorPointers("NMRload-sample","NMRstart");
    $("#NMRred-injector").velocity({translateY:"100%"},{duration:1000});
    $("#NMRring").show();
    $("#NMRbelow-arrow").show();
    $("#NMRvertical-arrows").show();
    setInterval(NMRhelper2,50);
    $("#NMRstart").on("click",function(){NMRhelper();})
}

function NMRhelper2(){
    $("#NMRvertical-arrows").velocity({translateY:105},{duration:1500});
    $("#NMRvertical-arrows").velocity("reverse",{duration: 10});
}

/* when someone clicks on start button:
1. animation of moving arrows start at right side(by calling NMRhelper3 function)
2. one more arrow showing direction of magnetic field appears on right side
3. onclick on plot button activates  */

function NMRhelper(){
    cursorPointers("NMRstart","NMRplot");
    $("#NMRup-arrow").show();
    $("#NMRhorizontal-arrows-2").show();
    $("#NMRhorizontal-arrows-1").show();
    setInterval(NMRhelper3,1000);
    $("#NMRplot").on("click",function(){NMRhelper1();});
}

function NMRhelper3(){
    $("#NMRhorizontal-arrows-2").velocity({translateX:"300%"},{duration:1000});
    $("#NMRhorizontal-arrows-1").velocity({translateX:"300%"},{duration:1000});
    $("#NMRhorizontal-arrows-2").velocity({translateX: "10%"},{duration:1});
    $("#NMRhorizontal-arrows-1").velocity({translateX: "10%"},{duration:1});
}

/* starts plotting graph at right bottom of page */

function NMRhelper1(){
    $("#NMRbenzene-graph").show();
    $("#NMRgraph").hide();
    cursorPointers("NMRplot","NMRevaluate");
    $("#NMRevaluate").on("click",function(){NMRurlchange();});
}

function NMRurlchange(){
    if(y == 0){
        var win = window.open('https://ccnsb06-iiith.vlabs.ac.in/exp6_10/aspirin/aspirin_nmr_expt10.html','_blank');
        win.focus();
    }

    else if(y == 1){
        var win = window.open('https://ccnsb06-iiith.vlabs.ac.in/exp6_10/nitrophenol/2-nitrophenol_nmr_expt10.html','_blank');
        win.focus();
    }
}

// End of NMR experiment js code
