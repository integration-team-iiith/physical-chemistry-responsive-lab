// This file contains all the functions which are used to animate the images in the experiment.
// This function is a general method used to move images from initial position to final position.
var y = 0;
var x = 1;
var z = 101;
var p = 1;
var int2;
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


/*when someone clicks on aspirine button: 
1. aspirin and cafine button disappears
2. onclick n sample bottle activates
3. instruction text changes*/
function removeBtn1(){
    $('#aspirin').hide();
    $('#asprntxt').hide();
    $('#cafine').hide();
    $('#cafintxt').hide();
    y = 0;
    cursorPointers("aspirin","sample");
    $('#sample').on("click", function(){clickSample(); }); 
    document.getElementById('instr').innerHTML = "Click on the sample bottle (the first bottle) to transfer a small quantity of the sample to the mortar."
}


/*when someone clicks on aspirine button: 
1. aspirin and cafine button disappears
2. onclick n sample bottle activates
3. instruction text changes*/
function removeBtn2(){
    $('#aspirin').hide();
    $('#asprntxt').hide();
    $('#cafine').hide();
    $('#cafintxt').hide();
    y = 1;
    cursorPointers("cafine","sample");
    $('#sample').on("click", function(){clickSample(); });
    document.getElementById('instr').innerHTML = "Click on the sample bottle (the first bottle) to transfer a small quantity of the sample to the mortar."
}

/* when someoe clicks on sample bottle:
1. animation starts for transfering sample solution from sample bottle to empty sample pot
2. it calls emptyspoon function which is basically another animation of spoon after 3 seconds
3.  activates onclick on mortar*/

function clickSample(){
    cursorPointers("sample","mortar");
    $("#mortar").on("click",function(){mix1();});
    $('#spoonfill').show();
    setTimeout(emptySpoon,3000);
    document.getElementById('instr').innerHTML = "Click on the mortar to grind the sample to fine paste"
}


/* function pours sample solution into moratr*/

function emptySpoon(){
    document.getElementById("sample").onclick = false;
    $('#spoonfill').hide();
    $('#emptyspoon').show();
    setTimeout(removeSpoon,2800);
}


/* function hides spoon and activates onclick function on nozal bottol */

function removeSpoon(){
    $('#emptyspoon').hide();
}



/*when someone clicks on mortar:
1. animation of mixing solution in mrtar starts
2. it calls offMortar1 function to stop animation after 3 sec */
function mix1(){
    $('#mortar').show();
    var img =  document.getElementById('mortar');
    img.src = "Images/mortar.gif";
    setTimeout(offMortar1,3000); 
}

/* 1. stops animation of mortar
2. instructin text changes
3. onclick on nizol activates*/

function offMortar1(){
    cursorPointers("mortar","nizol");
    $('#mortar').show();
    var img =  document.getElementById('mortar');
    img.src = "Images/sprites/DefineSprite_82/1.png";
    document.getElementById("instr").innerHTML = "Click on the bottle containing Nizol to transfer few drops to the mortar.";
    $('#nizol').on("click",function(){ sirinj() ;})
}


/*when someone clicks on nizol bottle:
1. animation of drawing solvent from nizol disappears
2. calls replaceSirinj after 2.5 sec
3. deactivates onclick on nizol bottle */

function sirinj(){
    $('#fillsirinj').show();
    setTimeout(replaceSirinj,2400);
    document.getElementById("nizol").onclick = false;
}

/* 1. animation of puring nizol solution over mortar starts
2. old animation disappears.
3. calls helper1 function aftr 1 sec just to hide animation of moving drops
4. calls removeSirinj after 1 second to just hide animation, to activate onclick on mortar also */

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
    cursorPointers("mortar","mortar");
    $('#emptysirinj').hide();
    $('#mortar').on("click", function(){ mix() ;});
    document.getElementById('instr').innerHTML = "click on the mortar to make a fine paste of sample"
}


/* when someone again clicks on mortar:
1. animation of movin mortar starts
2. after 3sec calls offMortar function to stop animation */

function mix(){
    $('#mortar').show();
    var img =  document.getElementById('mortar');
    img.src = "Images/mortar.gif";
    setTimeout(offMortar,3000); 
}

/* function stops movement of mortar and also defines onclick function on mortar to transffer mixture onto the IR disc*/


function offMortar(){
    cursorPointers("mortar","mortar1");
    $('#mortar').hide();
    $('#mortar1').show();
    var img =  document.getElementById('mortar');
    img.src = "Images/sprites/DefineSprite_82/1.png";
    $('#mortar1').on('click',function(){putinplat();});
    document.getElementById('instr').innerHTML = "Click on mortar to Transfer the sample prepared onto one of the IR discs"
}

/* when someone clicks on mortar again:
1. animation starts of transferring ready mixture in mortar
2. plate appears in which mixture goes
3. calls fillplate after 2.5 sec
 */

function putinplat(){
    $('#spoonfill2').show();
    $('#plate').show();
    setTimeout(fillplate,2500);
}

/* 1. just shows animation of pouring solution on IRplate 
2. calls removespoon to hide this animation after 2seconds
3. helper2 function in animation of movement of spoon */

function fillplate(){
    $('#spoonfill2').hide();
    setInterval(helper2,50);
    setTimeout(removeSpoon2,2000);
}

function helper2(){
    if(p<40){
        $('#emptyspoon2').show();
        var img = document.getElementById("emptyspoon2");
        img.src = "Images/sprites/DefineSprite_84_IR_Powder_exp6_fla.emptysepctual_28/"+ p + ".png";
    }
    else{
        $("#emptyspoon2").hide();
    }
    p++;

}

/* 1.function removes syringe 
2.  defines onclick on IR disc to form a thin film*/

function removeSpoon2(){
    cursorPointers("mortar1","plate");
    cursorPointers("mortar1","fill");
    document.getElementById('instr').innerHTML = "Click on IR discs Place carefully the other disc  and press to form a thin film."
    $('#emptyspoon2').hide();
    $('#fill').show();
    $('#plate').on("click",function(){ startexp() ;});
    $('#fill').on('click',function(){startexp() ;});
}


/* 1. when someone clicks on IRplate;
1. animation starts for movemnt of holder and plates
2. solvent,samplebottle, mortar disappears
3. instruction  text gets changeda
4. calls green21 function after 3.2sec */
function startexp(){
    $('#green1').show();
    var askInt = setInterval(red1,50);
    setTimeout(green21,3200);

    $('#mortartxt').hide();
    $('#mortar1').hide();
    $('#nizol').hide();
    $('#sample').hide();
    $('#plate').hide();
    $('#fill').hide();
    $('#sampletxt').hide();
    $('#nizoltxt').hide();
    document.getElementById('instr').innerHTML = "Click the IR discs to Move the IR plates to the plate holder."
}


function red1(){
    $('#green1').show();
    var img = document.getElementById("green1");
    var flask = [];
    var i;
    for(i=101;i<=163;i++){
        flask[i] = "Images/sprites/DefineSprite_43_IR_Powder_exp6_fla.top_scene_3/" + i + ".png" 
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
function green21(){
    cursorPointers("plate","green1");   
    document.getElementById('instr').innerHTML = "Click on the holder to place the the sample in the spectrometer."
    $('#green1').on('click',function(){ green22();});
    
}

/* when someone clicks on covered IRplates:
1. starts animation moving holder with help of helper3 function
2. calls green23 functio after 2.8 sec */
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
        img.src = "Images/sprites/DefineSprite_43_IR_Powder_exp6_fla.top_scene_3/" + z + ".png"
        z++;
    }
    else{
        clearInterval(int2);
    }
}

/* 1. stops animation of moving holder
2. activates onclick on holder */
function green23(){
    cursorPointers("green1","red3");
    var img = document.getElementById('red3');
    img.src = "Images/sprites/DefineSprite_43_IR_Powder_exp6_fla.top_scene_3/221.png"
    $('#red3').on('click',function(){ spectro() ;});
}

/* 1. stops animation of spectrometer 
2.defines onclick on startbutton to start the experiment */


function spectro1(){
    cursorPointers("red3","strtbtn");
    $('#machine').show();
    var img = document.getElementById("machine");
    img.src = "Images/spectrometer.png";
    $('#strtbtn').on('click',function(){ evaluate() ;});
}


/* when someone clicks on holder: 
1. function shows animation of spectrometer
2. calls spectro1 function after 3.6 seconds
*/


function spectro(){
    document.getElementById('instr').innerHTML = "Click start to run the spectrometer."
    $('#machine').show();
    setTimeout(spectro1,3600);
}


/* when someone clicks on start button:
1. animation of beam falling on mirror in spectrometer starts
2. calls showGraph function after 5seconds */
function evaluate(){
    $('#exp').show();
    var img = document.getElementById('exp');
    img.src = "Images/beam.gif";
    setTimeout(showGraph,5000);
}

/*1. starts animation of graph depending on which button we've selected in starting
2. stops animation of microscopic view of beams  */
function showGraph(){
    $('#exp').show();
    var img1 = document.getElementById('exp');
    img1.src = "Images/sprites/DefineSprite_20/124.png"    
    $('#graph').show();
    var img = document.getElementById('graph');
    if(y==1){
        setTimeout(stopgraph,10500);
        img.src = "Images/bluegraph.gif";
    }
    else{
        setTimeout(stopgraph,10500);
        img.src = "Images/yellowgraph.gif"
    }
}


/* stops animation of graph based n which one is selected */
function stopgraph(){
    $('#graph.show');
    var img =  document.getElementById('graph');
    if(y==1){
        img.src = "Images/sprites/DefineSprite_133_IR_Powder_exp6_fla.graph_aspirine_45/105.png";
}
    else{
        img.src = "Images/sprites/DefineSprite_136_IR_Powder_exp6_fla.graph_caffeine_46/105.png";
    }
    cursorPointers("strtbtn","evltbtn");
    $("#evltbtn").on("click", function(){urlChange();});
}

/* onclicking on evaluate button it opens a new url in new tab showing graph */
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