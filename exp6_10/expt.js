var y = 0;

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

function draw1(){
    $("#solvent").hide();
    $("#solvent1").show();
    $('#blue1').show();
    document.getElementById('instr').innerHTML = "Click on the sample bottle to transfer small amount (around 1mg) of the substance into the empty sample bottle"
    setTimeout(helper1,1000);
}

function helper1(){
    $('#blue1').hide();
    $('#hrblue').show();
    $("#hrblue").velocity({width: 100, translateY: 240}, {duration: 1000});
    setTimeout(setMachine,1000);
}

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

function helper2(){
    $('#fill').show();
    $('#spoon2').hide();
    $('#solvent1').on("click",function(){draw2();});
}

function draw2(){
    document.getElementById("instr").innerHTML = "Click on the sample solution to draw 1 ml of the sample prepared to load on to the mass spectrometer."
    $('#blue1').hide();
    $('#syringe1').show();
    setTimeout(helper3,1000);
}

function helper3(){
    $('#syringe2').show();
    $('#syringe1').hide();
    $('#sample').hide();
    $('#sample2').show();
    setTimeout(helper4,1500);
}

function helper4(){
    $('#sample2').show();
    var img = document.getElementById('sample2');
    img.src = "full/45.png";
    $('#syringe2').hide();
    $('#sample2').on("click", function(){ shake(); });
    document.getElementById("instr").innerHTML = "Click on the sample solution to make a clear solution.";
}

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


function draw3(){
    $('#green1').show();
    setTimeout(helper5,1000);
}


function helper5(){
    $('#green1').hide();
    $("#hrgreen").show();
    $("#hrgreen").velocity({width: 100, translateY: 240}, {duration: 1000});
    setTimeout(setMachine2,1000);
}


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