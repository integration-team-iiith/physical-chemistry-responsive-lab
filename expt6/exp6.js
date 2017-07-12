// This file contains all the functions which are used to animate the images in the experiment.
// This function is a general method used to move images from initial position to final position.
var y = 0;
var x = 1;
var z = 101;
var p = 1;
var askint;
function moveImage(){
    id = setInterval(frame, 5);
    function frame() {
        if(type_of_movement == 0){
            if (initial_top > final_top) {
                clearInterval(id);
                count++;
            } else {
                initial_top+=step_top; 
                initial_left+=step_left;
                elem.style.top = initial_top + 'px'; 
                elem.style.left = initial_left + 'px'; 
            }
        }
        else if(type_of_movement == 1){
            if (initial_top < final_top) {
                clearInterval(id);
                count++;
            } else {
                initial_top+=step_top; 
                initial_left+=step_left;
                elem.style.top = initial_top + 'px'; 
                elem.style.left = initial_left + 'px'; 
                
            }
        }
    } 
}




//To disable and enable the cursor pointers on elements.
function cursorPointers(id1, id2){
    document.getElementById(id1).style.cursor = "default";
    document.getElementById(id2).style.cursor = "pointer";
}


/* If a person clicks on aspirin btn then this function is called, function hides both buttons when someone clicks on aspirin button
and sets y to 0*/
function removeBtn1(){
    $('#aspirin').hide();
    $('#asprntxt').hide();
    $('#cafine').hide();
    $('#cafintxt').hide();
    y = 0;
    $('#sampl').on("click", function(){clickSampl(); }); 
    document.getElementById('instr').innerHTML = "Click on the sample bottle (the first bottle) to transfer a small quantity of the sample to the mortar."
}


/* If a person clicks on caffine btn then this function is called, function hides both buttons when someone clicks on caffine button and 
sets variable y to 1
*/
function removeBtn2(){
    $('#aspirin').hide();
    $('#asprntxt').hide();
    $('#cafine').hide();
    $('#cafintxt').hide();
    y = 1;
    $('#sampl').on("click", function(){clickSampl(); });
    document.getElementById('instr').innerHTML = "Click on the sample bottle (the first bottle) to transfer a small quantity of the sample to the mortar."
}


/* function simply transffers some amount of sample to mortar. function just shows filling of spoon(by using gify)*/

function clickSampl(){
    $("#mortar").on("click",function(){mix1();});
    $('#spoonfill').show();
    setTimeout(emptySpoon,3000);
    document.getElementById('instr').innerHTML = "Click on the mortar to grind the sample to fine paste"
}


function mix1(){
    $('#mortar').show();
    var img =  document.getElementById('mortar');
    img.src = "bowl.gif";
    setTimeout(offMortar1,3000); 
}

function offMortar1(){
    $('#mortar').show();
    var img =  document.getElementById('mortar');
    img.src = "sprites/DefineSprite_82/1.png";
    document.getElementById("instr").innerHTML = "Click on the bottle containing Nizol to transfer few drops to the mortar.";
    $('#nizol').on("click",function(){ sirinj() ;})
}


/* function pours sample solution into moratr*/

function emptySpoon(){
    document.getElementById("sampl").onclick = false;
    $('#spoonfill').hide();
    $('#emptyspoon').show();
    setTimeout(removeSpoon,2800);
}

/* function hides spoon and activates onclick function on nozal bottol */

function removeSpoon(){
    $('#emptyspoon').hide();
}

/* function fills sirinj with nozal solution */

function sirinj(){
    $('#fillsirinj').show();
    setTimeout(replaceSirinj,2400);
    document.getElementById("nizol").onclick = false;
}

/* function empties sirinj into mortar */

function replaceSirinj(){
    $('#fillsirinj').hide();
    $('#emptysirinj').show();
    $("#drop").show();
    $("#drop").velocity({translateY: 60},{duration:1000});
    setTimeout(helper1,1000);
    setTimeout(removeSirinj,1000);
}

function helper1(){
    $("#drop").hide();
}

/* to hide sirinj*/

function removeSirinj(){
    $('#emptysirinj').hide();
    $('#mortar').on("click", function(){ mix() ;});
    document.getElementById('instr').innerHTML = "click on the mortar to make a fine paste of sample"
}

/* function calls gify image to mix the solution in mortar*/

function mix(){
    $('#mortar').show();
    var img =  document.getElementById('mortar');
    img.src = "bowl.gif";
    setTimeout(offMortar,3000); 
}

/* function stops movement of mortar and also defines onclick function on mortar to transffer mixture onto the IR disc*/


function offMortar(){
    $('#mortar').hide();
    $('#mortar1').show();
    var img =  document.getElementById('mortar');
    img.src = "sprites/DefineSprite_82/1.png";
    $('#mortar1').on('click',function(){putinplat();});
    document.getElementById('instr').innerHTML = "Click on mortar to Transfer the sample prepared onto one of the IR discs"
}


/* just to show IR disc and moving of syringe to pour mixture into tht IR disc */

function putinplat(){
    $('#spoonfill2').show();
    $('#plate').show();
    setTimeout(fillplate,2500);
}



function fillplate(){
    $('#spoonfill2').hide();
    setInterval(helper2,50);
    setTimeout(removeSpoon2,2000);
}

function helper2(){
    if(p<40){
        $('#emptyspoon2').show();
        var img = document.getElementById("emptyspoon2");
        img.src = "sprites/DefineSprite_84_IR_Powder_exp6_fla.emptysepctual_28/"+ p + ".png";
    }
    else{
        $("#emptyspoon2").hide();
    }
    p++;

}

/* function removes syringe and defines onclick on IR disc to form a thin film*/

function removeSpoon2(){
    document.getElementById('instr').innerHTML = "Click on IR discs Place carefully the other disc  and press to form a thin film."
    $('#emptyspoon2').hide();
    $('#fill').show();
    $('#plate').on("click",function(){ startexp() ;});
    $('#fill').on('click',function(){startexp() ;});
}


/* function moves holder on each other and defines onclick function to show the spectrometer with uses of fo helper function */

function startexp(){
    $('#green1').show();
    var askInt = setInterval(red1,50);
    setTimeout(green21,3200);

    $('#mortartxt').hide();
    $('#mortar1').hide();
    $('#nizol').hide();
    $('#sampl').hide();
    $('#plate').hide();
    $('#fill').hide();
    $('#sampltxt').hide();
    $('#nizoltxt').hide();
    document.getElementById('instr').innerHTML = "Click the IR discs to Move the IR plates to the plate holder."
}


function red1(){
    $('#green1').show();
    var img = document.getElementById("green1");
    var flask = [];
    var i;
    for(i=101;i<=163;i++){
        flask[i] = "sprites/DefineSprite_43_IR_Powder_exp6_fla.top_scene_3/" + i + ".png" 
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

function green21(){
    document.getElementById('instr').innerHTML = "Click on the holder to place the the sample in the spectrometer."
    $('#green1').on('click',function(){ green22();});
    
}

function green22(){
    $('#green1').hide();
    $('#red3').show();
    var int2 = setInterval(helper3,50);
    setTimeout(green23,2800);
}

function helper3(){
    if(z>=165 && z<=221){
        $('#red3').show();
        var img = document.getElementById("red3");
        img.src = "sprites/DefineSprite_43_IR_Powder_exp6_fla.top_scene_3/" + z + ".png"
        z++;
    }
    else{
        clearInterval(int2);
    }
}

function green23(){
    var img = document.getElementById('red3');
    img.src = "sprites/DefineSprite_43_IR_Powder_exp6_fla.top_scene_3/221.png"
    $('#red3').on('click',function(){ spectro() ;});
}


/* function shows spectrometer and defines onclick to start the experiment */

function spectro1(){
    $('#machine').show();
    var img = document.getElementById("machine");
    img.src = "binaryData/last2.png";
    $('#strtbtn').on('click',function(){ evaluate() ;});
}

function spectro(){
    document.getElementById('instr').innerHTML = "Click start to run the spectrometer."
    $('#machine').show();
    setTimeout(spectro1,3600);
}



function evaluate(){
    $('#exp').show();
    var img = document.getElementById('exp');
    img.src = "binaryData/light.gif";
    setTimeout(showGraph,5000);
}

function showGraph(){
    $('#exp').show();
    var img1 = document.getElementById('exp');
    img1.src = "sprites/DefineSprite_20/124.png"    
    $('#graph').show();
    var img = document.getElementById('graph');
    if(y==1){
        setTimeout(stopgraph,10500);
        img.src = "binaryData/bluegraph.gif";
    }
    else{
        setTimeout(stopgraph,10500);
        img.src = "binaryData/yellowgraph.gif"
    }
}

function stopgraph(){
    $('#graph.show');
    var img =  document.getElementById('graph');
    if(y==1){
        img.src = "sprites/DefineSprite_133_IR_Powder_exp6_fla.graph_aspirine_45/105.png";
}
    else{
        img.src = "sprites/DefineSprite_136_IR_Powder_exp6_fla.graph_caffeine_46/105.png";
    }
    $("#evltbtn").on("click", function(){urlChange();});
}

function urlChange(){
    if(y==0){
        var win = window.open('https://ccnsb06-iiith.vlabs.ac.in/exp6_10/aspirin/plot_IR_aspirin_exp6.html','_blank');
        win.focus();
    }
    else{
        var win = window.open('https://ccnsb06-iiith.vlabs.ac.in/exp6_10/caffeine/plot_IR_caffeine_exp6.html','_blank');
        win.focus();    
    }

}