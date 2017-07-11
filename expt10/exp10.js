var x=0;
var y = 0;
var z = 101;


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

/* function simply transffers some amount of sample to mortar. function just shows filling of spoon(by using gify)*/

function IRclickSampl(){
    $('#IRspoonfill').show();
    setTimeout(IRemptySpoon,3000);
    document.getElementById("IRsampl").onclick = false;
    document.getElementById('IRinstr').innerHTML = "click on the bottol containing nozal to transffer few drops to mortar."
}

/* function pours sample solution into moratr*/

function IRemptySpoon(){
    $('#IRspoonfill').hide();
    $('#IRemptyspoon').show();
    setTimeout(IRremoveSpoon,2800);
}

/* function hides spoon and activates onclick function on nozal bottol */

function IRremoveSpoon(){
    $('#IRemptyspoon').hide();
    $('#IRnizol').on("click",function(){ IRsirinj() ;})
}


/* function fills sirinj with nozal solution */

function IRsirinj(){
    $('#IRfillsirinj').show();
    setTimeout(IRreplaceSirinj,2400);
}

/* function empties sirinj into mortar */

function IRreplaceSirinj(){
    $('#IRfillsirinj').hide();
    $('#IRemptysirinj').show();
    setTimeout(IRremoveSirinj,2800);
}

/* to hide sirinj*/

function IRremoveSirinj(){
    $('#IRemptysirinj').hide();
    $('#IRmortar').on("click", function(){ IRmix() ;});
    document.getElementById('IRinstr').innerHTML = "click on the mortar to make a fine paste of sample"
}


/* function calls gify image to mix the solution in mortar*/

function IRmix(){
    $('#IRmortar').show();
    var img =  document.getElementById('IRmortar');
    img.src = "exp6/bowl.gif";
    setTimeout(IRoffMortar,3000); 
}

/* function stops movement of mortar and also defines onclick function on mortar to transffer mixture onto the IR disc*/


function IRoffMortar(){
    $('#IRmortar').hide();
    $('#IRmortar1').show();
    var img =  document.getElementById('IRmortar');
    img.src = "exp6/sprites/DefineSprite_82/1.png";
    $('#IRmortar1').on('click',function(){IRputinplat();});
    document.getElementById('IRinstr').innerHTML = "click on the mortar to transffer the sample prepared onto one of the IR discs"
}


/* just to show IR disc and moving of syringe to pour mixture into tht IR disc */

function IRputinplat(){
    $('#IRspoonfill2').show();
    $('#IRplate').show();
    setTimeout(IRfillplate,2500);
}



function IRfillplate(){
    $('#IRspoonfill2').hide();
    $('#IRemptyspoon2').show();
    setTimeout(IRremoveSpoon2,2500);
}

/* function removes syringe and defines onclick on IR disc to form a thin film*/

function IRremoveSpoon2(){
    document.getElementById('IRinstr').innerHTML = "Click on IR discs Place carefully the other disc  and press to form a thin film."
    $('#IRemptyspoon2').hide();
    $('#IRfill').show();
    $('#IRplate').on("click",function(){ IRstartexp() ;});
    $('#IRfill').on('click',function(){IRstartexp() ;});
}


/* function moves holder on each other and defines onclick function to show the spectrometer with uses of fo helper function */

function IRstartexp(){
        $('#IRgreen1').show();
        setInterval(IRred1,50);
        setTimeout(IRgreen21,3200);

    $('#IRmortartxt').hide();
    $('#IRmortar1').hide();
    $('#IRnizol').hide();
    $('#IRsampl').hide();
    $('#IRplate').hide();
    $('#IRfill').hide();
    $('#IRsampltxt').hide();
    $('#IRnizoltxt').hide();
    document.getElementById('IRinstr').innerHTML = "Click on the holder to place the the sample in the spectrometer."
}


function IRred1(){
    $('#IRgreen1').show();
    var img = document.getElementById("IRgreen1");
    var flask = [];
    var i;
    for(i=101;i<=163;i++){
        flask[i] = "exp6/sprites/DefineSprite_43_IR_Powder_exp6_fla.top_scene_3/" + i + ".png" 
    }
    if(z <= 163){
        img.src = flask[z];
        z++;
    }
    else{
        z = 165;
    }
}

function IRgreen21(){
        $('#IRred2').show();
        $('#IRred2').on('click',function(){ IRgreen22();});
    }


function IRgreen22(){
        $('#IRgreen1').hide();
        $('#IRred3').show();
        setTimeout(IRgreen23,2600);
    }

function IRgreen23(){
        $('#IRred3').show();
        var img = document.getElementById('IRred3');
        img.src = "exp6/sprites/DefineSprite_43_IR_Powder_exp6_fla.top_scene_3/221.png"
        $('#IRred3').on('click',function(){ IRspectro() ;});
    }


/* function shows spectrometer and defines onclick to start the experiment */

function IRspectro1(){
    $('#IRmachine').show();
    var img = document.getElementById("IRmachine");
    img.src = "exp6/binaryData/last2.png";
    $('#IRstrtbtn').on('click',function(){ IRevaluate() ;});
}

function IRspectro(){
    document.getElementById('IRinstr').innerHTML = "Click start to run the spectrometer."
    $('#IRmachine').show();
    setTimeout(IRspectro1,3500);
}



function IRevaluate(){
    $('#IRexp').show();
    var img = document.getElementById('IRexp');
    img.src = "exp6/binaryData/light.gif";
    setTimeout(IRshowGraph,5500);
}

function IRshowGraph(){
    $('#IRexp').show();
    var img1 = document.getElementById('IRexp');
    img1.src = "exp6/sprites/DefineSprite_20/124.png"    
    $('#IRgraph').show();
    var img = document.getElementById('IRgraph');
    if(y==1){
        setTimeout(IRstopgraph,10500);
        img.src = "exp6/binaryData/bluegraph.gif";
    }
    else{
        setTimeout(IRstopgraph,10500);
        img.src = "exp6/binaryData/yellowgraph.gif"
    }
}

function IRstopgraph(){
    $('#IRgraph.show');
    var img =  document.getElementById('IRgraph');
    if(y==1){
        img.src = "exp6/sprites/DefineSprite_133_IR_Powder_exp6_fla.graph_aspirine_45/105.png";
}
    else{
        img.src = "exp6/sprites/DefineSprite_136_IR_Powder_exp6_fla.graph_caffeine_46/105.png";
    }
    $("#IRevltbtn").on("click", function(){IRsurlChange();});
}

function IRurlChange(){
    if(y==0){
        var win = window.open('https://ccnsb06-iiith.vlabs.ac.in/exp6_10/aspirin/plot_IR_aspirin_exp6.html','_blank');
        win.focus();
    }
    else{
        var win = window.open('https://ccnsb06-iiith.vlabs.ac.in/exp6_10/caffeine/plot_IR_caffeine_exp6.html','_blank');
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


function MSdraw1(){
    $("#MSsolvent").hide();
    $("#MSsolvent1").show();
    $('#MSblue1').show();
    document.getElementById('MSinstr').innerHTML = "Click on the sample bottle to transfer small amount (around 1mg) of the substance into the empty sample bottle"
    setTimeout(MShelper1,1000);
}

function MShelper1(){
    $('#MSblue1').hide();
    $('#MShrblue').show();
    $("#MShrblue").velocity({width: 100, translateY: 240}, {duration: 1000});
    setTimeout(MSsetMachine,1000);
}

function MSsetMachine(){
    $('#MSspectro').show();
    var img = document.getElementById("MSspectro");
    img.src = "exp6_10/bluemachine.gif";
    setTimeout(MShelper7,1000);
}

function MShelper7(){
    $('#MSspectro').show();
    var img = document.getElementById("MSspectro");
    img.src = "exp6_10/bluemachine/39.png";
    $("#MShrblue").hide();
    $('#MSsamplsol').on("click", function(){ MSspoon1() ;});
}


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

function MShelper2(){
    $('#MSfill').show();
    $('#MSspoon2').hide();
    $('#MSsolvent1').on("click",function(){MSdraw2();});
}

function MSdraw2(){
    document.getElementById("MSinstr").innerHTML = "Click on the sample solution to draw 1 ml of the sample prepared to load on to the mass spectrometer."
    $('#MSblue1').hide();
    $('#MSsyringe1').show();
    setTimeout(MShelper3,1000);
}

function MShelper3(){
    $('#MSsyringe2').show();
    $('#MSsyringe1').hide();
    $('#MSsample').hide();
    $('#MSsample2').show();
    setTimeout(MShelper4,1500);
}

function MShelper4(){
    $('#MSsample2').show();
    var img = document.getElementById('MSsample2');
    img.src = "exp6_10/full/45.png";
    $('#MSsyringe2').hide();
    $('#MSsample2').on("click", function(){ MSshake(); });
    document.getElementById("MSinstr").innerHTML = "Click on the sample solution to make a clear solution.";
}

function MSshake(){
    $("#MSsample2").velocity({rotateZ: 10}, {loop: 10, duration: 100});
    setTimeout(MShelper9,1000);
}

function MShelper9(){
    document.getElementById("MSinstr").innerHTML = "Click on the sample solution to draw 1 ml of the sample prepared to load on to the mass spectrometer."
    $("#MSsample2").hide();
    $("#MSchangebeaker").show();
    $('#MSchangebeaker').on("click", function(){ MSdraw3(); });
}


function MSdraw3(){
    $('#MSgreen1').show();
    setTimeout(MShelper5,1000);
}


function MShelper5(){
    $('#MSgreen1').hide();
    $("#MShrgreen").show();
    $("#MShrgreen").velocity({width: 100, translateY: 240}, {duration: 1000});
    setTimeout(MSsetMachine2,1000);
}


function MSsetMachine2(){
    $('#MSspectro').show();
    var img = document.getElementById("MSspectro");
    img.src = "exp6_10/greenmachine.gif";
    setTimeout(MShelper8,1000);
}

function MShelper8(){
    $("#MSspectro").show();
    var img = document.getElementById("MSspectro");
    img.src = "exp6_10/greenmachine/40.png";
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
    img.src = "exp6_10/binaryData/81.png";
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
    $("MSrainbow").show()
    setTimeout(MSgraphshow,1000);
}

function MSgraphshow(){
    $("MSgraph").show();
    var img = document.getElementById("MSgraph");
    if(y==0){
        img.src = "exp6_10/cafingraph.gif";
    }
    else{
        img.src = "exp6_10/asprngraph.gif"
    }
    setTimeout(MSstopGraph,4000);
}

function MSstopGraph(){
    $("MSgraph").show();
    var img = document.getElementById("MSgraph");
    if(y==0){
        img.src = "exp6_10/asprngraph.png";
    }
    else{
        img.src = "exp6_10/cafingraph.png";
    }
        $("#MSevaluate").on("click", function(){MSurlChange();});
}



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


function moveToNmr(){
    $("#container").hide();
    $("#NMRcontainer").show();
}

function NMRshowsample(){
    $("#NMRred-injector").show();
    $("#NMRinjector").hide();
    $("#NMRsample-button").onclick = false;
    $("#NMRload-sample").on("click",function(){NMRpushinjector();});
}

function NMRpushinjector(){
    $("#NMRred-injector").velocity({translateY:350},{duration:1000});
    $("#NMRring").show();
    $("#NMRbelow-arrow").show();
    $("#NMRvertical-arrows").show();
    setInterval(NMRhelper2,510);
    $("#NMRstart").on("click",function(){NMRhelper();})
}

function NMRhelper2(){
    $("#NMRvertical-arrows").velocity({translateY:100},{duration:500});
    $("#NMRvertical-arrows").velocity("reverse",{duration: 10});
}

function NMRhelper(){
    $("#NMRup-arrow").show();
    $("#NMRhorizontal-arrows-2").show();
    $("#NMRhorizontal-arrows-1").show();
    setInterval(NMRhelper3,1000);
    $("#NMRplot").on("click",function(){NMRhelper1();});
}

function NMRhelper3(){
    $("#NMRhorizontal-arrows-2").velocity({translateX:500},{duration:1000});
    $("#NMRhorizontal-arrows-1").velocity({translateX:500},{duration:1000});
    $("#NMRhorizontal-arrows-2").velocity("reverse",{duration:1});
    $("#NMRhorizontal-arrows-1").velocity("reverse",{duration:1});
}

function NMRhelper1(){
    $("#NMRbenzene-graph").show();
    $("#NMRgraph").hide();
}



// End of NMR experiment js code
