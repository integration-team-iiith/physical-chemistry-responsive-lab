var y = 0;

/* when someone clicks on aspirin btn:
1. both buttons disappears
2. innerhtml changes and onclick on solvent bottle activates
3. sets variable to 0 for later selection of graph */

function vanish1(){
    y = 1;
    $('#aspirin').hide();
    $('#aspirintxt').hide();
    $('#nitrophenol').hide();
    $('#nitrotxt').hide();
    y=1;
    document.getElementById('instr').innerHTML = "Click on the solvent bottle to draw 1 ml of the solvent (methanol)  and inject it into the sample inlet to clean any impurity in the sample pathway."
    $('#solvent').on("click", function(){ draw1() ;});
}


/* when someone clicks on nitrpphenol btn:
1. both buttons disappears
2. innerhtml changes and onclick on solvent bottle activates
3. sets variable to 0 for later selection of graph */

function vanish2(){
    y = 0;
    $('#aspirin').hide();
    $('#aspirintxt').hide();
    $('#nitrophenol').hide();
    $('#nitrotxt').hide();
    y=0;
    document.getElementById('instr').innerHTML = "Click on the solvent bottle to draw 1 ml of the solvent (methanol) and inject it into the sample inlet to clean any impurity in the sample pathway."
    $('#solvent').on("click", function(){ draw1() ;});
}

/* when someone clicks on solvent bottle first time: 
1. shows giphy of syringe drawing
2. solvent & solvent1 images are same 
3. calls helper function after 1sec */

function draw1(){
    $("#solvent").hide();
    $("#solvent1").show();
    $('#blue1').show();
    document.getElementById('instr').innerHTML = "Click on the sample bottle to transfer small amount (around 1mg) of the substance into the empty sample bottle"
    setTimeout(helper1,1000);
}

/* 1.hides old animation of syringe
   2. displays new syringe horizontally placed and changes its height as well as moves towards spectro machine */

function helper1(){
    $('#blue1').hide();
    $('#hrblue').show();
    $("#hrblue").velocity({width: 100, translateY: 240}, {duration: 1000});
    setTimeout(setMachine,1000);
}

/* 1. shows animation of spectromachine filling with solvent liquid
   2. calls helper7 after 1sec function which just hides the syringe and activates onclick on samplesol bottle */

function setMachine(){
    $('#spectro').show();
    var img = document.getElementById("spectro");
    img.src = "bluemachine.gif";
    setTimeout(helper7,1000);
}

function helper7(){
    $('#spectro').show();
    var img = document.getElementById("spectro");
    img.src = "bluemachine/39.png";
    $("#hrblue").hide();
    $('#samplsol').on("click", function(){ spoon1() ;});
}

/* when someone clicks on samplesol bottle: 
1. instr changes and animation of spoon taking solution from sample bottle appears
2. calls spoon2 function after 2 sec which just hides first spoon gif and shows 2nd spoon on empty sample bottle */

function spoon1(){
    document.getElementById("instr").innerHTML = "Click on the solvent bottle to transfer 5 ml of the solvent (methanol) to the substance taken.";
    $('#spoon1').show();
    setTimeout(spoon2,3000);
}

function spoon2(){
    $('#spoon1').hide();
    $('#spoon2').show();
    setTimeout(helper2,2800);
}

/* 1. shows plate having sample on a plate inside empty sample bottle
2. disapears that old spoon animation
3. activates onclik on solvent bottle again */

function helper2(){
    $('#fill').show();
    $('#spoon2').hide();
    $('#solvent1').on("click",function(){draw2();});
}

/* when someone clicks on solvent solution again:
1. instr changes and it shows a syringe drawing solvent from solvent box
2. calls helper3 function after 1 sec  */

function draw2(){
    document.getElementById("instr").innerHTML = "Click on the sample solution to draw 1 ml of the sample prepared to load on to the mass spectrometer."
    $('#blue1').hide();
    $('#syringe1').show();
    setTimeout(helper3,1000);
}

/* 1. shows syringe pouring solvent into emty sample bottle
2. hides old syringe bottle/
3. shows animation of filling sample bottle also calls helper4 function*/

function helper3(){
    $('#syringe2').show();
    $('#syringe1').hide();
    $('#sample').hide();
    $('#sample2').show();
    setTimeout(helper4,1500);
}

/* 1. activates onclick on sample bottle */

function helper4(){
    $('#sample2').show();
    var img = document.getElementById('sample2');
    img.src = "full/45.png";
    $('#syringe2').hide();
    $('#sample2').on("click", function(){ shake(); });
    document.getElementById("instr").innerHTML = "Click on the sample solution to make a clear solution.";
}

/* 1. shakes sample bottle and calls helper9 after 1 second sample2 and defines on sample bottle containing mixture solution again (changebeaker are same images) */

function shake(){
    $("#sample2").velocity({rotateZ: 10}, {loop: 10, duration: 100});
    $("#fill").velocity({rotateZ: 10}, {loop: 10, duration: 100});
    setTimeout(helper9,1000);
}

function helper9(){
    document.getElementById("instr").innerHTML = "Click on the sample solution to draw 1 ml of the sample prepared to load on to the mass spectrometer."
    $("#sample2").hide();
    $("#changebeaker").show();
    $('#changebeaker').on("click", function(){ draw3(); });
}


/* 1. shows syringe drawing mixture from sample bottle containing mix. solution also calls helper5 function after 1sec  */

function draw3(){
    $('#green1').show();
    setTimeout(helper5,1000);
}

/* 1. hides that syring animation
2. shows horizontal syringe and moves towards spectromachine
3. calls setMachine2 after 1 second  */

function helper5(){
    $('#green1').hide();
    $("#hrgreen").show();
    $("#hrgreen").velocity({width: 100, translateY: 240}, {duration: 1000});
    setTimeout(setMachine2,1000);
}

/*  
*/

function setMachine2(){
    $('#spectro').show();
    var img = document.getElementById("spectro");
    img.src = "greenmachine.gif";
    setTimeout(helper8,1000);
}

function helper8(){
    $("#spectro").show();
    var img = document.getElementById("spectro");
    img.src = "greenmachine/40.png";
    setTimeout(start,1000);
}

function start(){
    $("#innerinstrtxt").show();
    $("#innerinstr").show();
    $("#box").show();
    $("#arrow").show();
    $("#arrow").velocity({translateX:-5, translateY:5},{loop:10,duration:100});
    $('#greennew').hide();
    $('#greennew1').show();
    setTimeout(helper6,3000);
}

function helper6(){
    $("#greennew1").show();
    var img = document.getElementById("greennew1");
    img.src = "binaryData/81.png";
    $('#ylwdrop1').show();
    $('#ylwdrop2').show();
    $('#ylwdrop3').show();
    $('#ylwdrop4').show();
    $('#ylwdrop5').show();
    $("#ylwdrop1").velocity({translateX: -15, translateY: 15}, {loop: 5, duration: 400});
    $("#ylwdrop2").velocity({translateX: 15, translateY: -15}, {loop: 5, duration: 400});
    $("#ylwdrop3").velocity({translateX: 15, translateY: -15}, {loop: 5, duration: 400});
    $("#ylwdrop4").velocity({translateX: 15, translateY: -15}, {loop: 5, duration: 400});
    $("#ylwdrop5").velocity({translateX: 15, translateY: -15}, {loop: 5, duration: 400});
    setTimeout(helper10,2000);
}

function helper10(){
    $("#box").hide();
    $("#arrow").hide();
    $("#arrow2").show();
    document.getElementById("innerinstrtxt").innerHTML = "Positively charged radical ions are formed by bombardment of beam of &nbsp;high energy electrons."
    $("#greennew1").hide();
    $("#ylwdrop1").hide();
    $("#ylwdrop2").hide();
    $("#ylwdrop3").hide();
    $("#ylwdrop4").hide();
    $("#ylwdrop5").hide();
    $("#temp1").show();
    $("#ion1").show();
    $("#ion2").show();
    $("#ion3").show();
    $("#ion4").show();
    $("#ion5").show();
    $("#ion6").show();
    $("#ion7").show();
    $("#ion8").show();
    $("#ion1").velocity({translateX: 10, translateY: 10}, {loop: 5, duration: 400});
    $("#ion2").velocity({translateX: 10, translateY: 10}, {loop: 5, duration: 400});
    $("#ion3").velocity({translateX: 10, translateY: 10}, {loop: 5, duration: 400});
    $("#ion4").velocity({translateX: 10, translateY: 10}, {loop: 5, duration: 400});
    $("#ion5").velocity({translateX: 10, translateY: 10}, {loop: 5, duration: 400});
    $("#ion6").velocity({translateX: 10, translateY: 10}, {loop: 5, duration: 400});
    $("#ion7").velocity({translateX: 10, translateY: 10}, {loop: 5, duration: 400});
    $("#ion8").velocity({translateX: 10, translateY: 10}, {loop: 5, duration: 400});
    setTimeout(helper11,2000);
}

function helper11(){
    $("#arrow2").hide();
    $("#arrow1").show();
    $("#box1").show();
    $("#arrow").velocity({translateX:-5, translateY:5},{loop:10,duration:100});
    document.getElementById("innerinstrtxt").innerHTML = "The positively charged radical ions are accelerated by perforated negative electrodes.";
    $("#temp1").hide();
    $("#ion1").hide();
    $("#ion2").hide();
    $("#ion3").hide();
    $("#ion4").hide();
    $("#ion5").hide();
    $("#ion6").hide();
    $("#ion7").hide();
    $("#ion8").hide();
    $("#temp2").show();
    setTimeout(helper12,4000);
}

function helper12(){
    $("#arrow1").hide();
    $("#box1").hide();
    document.getElementById("innerinstrtxt").innerHTML = "The ions are sorted and separted by the magnetic filed according to their mass/ charge ratio."
    $("#temp2").hide();
    $("rainbow").show()
    setTimeout(graphshow,1000);
}

/* shows graph depending which button is clicked */
function graphshow(){
    $("graph").show();
    var img = document.getElementById("graph");
    if(y==1){
        img.src = "cafingraph.gif";
    }
    else{
        img.src = "asprngraph.gif"
    }
    setTimeout(stopGraph,4000);
}


/* to stop graph also activates onclick on evaluate button */

function stopGraph(){
    $("graph").show();
    var img = document.getElementById("graph");
    if(y==1){
        img.src = "asprngraph.png";
    }
    else{
        img.src = "cafingraph.png";
    }
        $("#evaluate").on("click", function(){urlChange();});
}

/* when someone clicks on evaluate button it opens a new url in a new tab showing graph */

function urlChange(){
    if(y == 1){
        var win = window.open('https://ccnsb06-iiith.vlabs.ac.in/exp6_10/aspirin/aspirin_MS_exp9.html','_blank');
        win.focus();
    }

    else{
        var win = window.open('https://ccnsb06-iiith.vlabs.ac.in/exp6_10/nitrophenol/2-nitrophenol_MS.html','_blank');
        win.focus();
    }
}