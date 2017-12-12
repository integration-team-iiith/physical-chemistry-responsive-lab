/* when someone clicks loadsample button : 
 1. syringe moves towards that hollow instrument (1st line)
 2. after 1sec calls helper function just to show the yellowdrop released by syringe (2nd...)
 3. movement of that yellow drop(3rd...)
 4. to show instructon t bottom(4&5th..)
 5. at top box and arrow appears()6&7th..
 6. movement of arrow(8th)
 7. helper1 funtion just shows those bunch of drops and their movement after 2sec
 */



function loadSample(){
    $("#syringe").velocity({translateX:370}, {duration:1500});
    setTimeout(helper,1600);
    $("#ylwdrop").velocity({translateX: 70, translateY:30}, {delay:1600, duration:1000});
    $("#innerinstr").show();
    $("#innerinstrtxt").show();
    $("#box").show();
    $("#arrow").show();
    $("#arrow").velocity({translateX:-5, translateY:5},{loop:true,duration:100});
    setTimeout(helper1,2000);
    document.getElementById("load").onclick = false;
    document.getElementById("loadtxt").onclick = false;    
}


/* helper function just to show dropping of the yellow drop from syringe */

function helper(){
    $("#ylwdrop").show();
}

/* this function just shows movement of ion drops */

function helper1(){
    $("#ionisation").on("click", function(){ionisation();});
    $("#ionisationtxt").on("click", function(){ionisation();});
    $('#ylwdrop1').show();
    $('#ylwdrop2').show();
    $('#ylwdrop3').show();
    $('#ylwdrop4').show();
    $('#ylwdrop5').show();
    $("#ylwdrop1").velocity({translateX: -15, translateY: 15}, {loop: true});
    $("#ylwdrop2").velocity({translateX: 15, translateY: -15}, {loop: true});
    $("#ylwdrop3").velocity({translateX: 15, translateY: -15}, {loop: true});
    $("#ylwdrop4").velocity({translateX: 15, translateY: -15}, {loop: true});
    $("#ylwdrop5").velocity({translateX: 15, translateY: -15}, {loop: true});
    $("#ylwdrop").hide();
}


/* when someone clicks on ionisation button: 
1. The box and arrow at top,syringe,that hollow instrument,irplate and all drops hides
2. new things(ions and a circle shaped thing) appears at bottom af page
3. helper2 to helper9 functins are just for movement of -ve ions dropping up to down */

function ionisation(){
    $("#box").hide();
    $("#arrow").hide();
    $("#syringe").hide();
    $("#greennew").hide();
    $("#spring1").hide();
    $("#ylwdrop1").hide();
    $("#ylwdrop2").hide();
    $("#ylwdrop3").hide();
    $("#ylwdrop4").hide();
    $("#ylwdrop5").hide();
    $("#arrow2").show();
    $("#irplate1").hide();
    $("#temp1").show();
    $("#ion1").show();
    $("#ion2").show();
    $("#ion3").show();
    $("#ion4").show();
    $("#ion5").show();
    $("#ion6").show();
    $("#ion7").show();
    $("#ion8").show();
    $("#negdrop1").show();
    $("#negdrop2").show();
    $("#negdrop3").show();
    $("#negdrop4").show();
    $("#negdrop5").show();
    $("#negdrop6").show();
    $("#negdrop7").show();
    $("#negdrop8").show();
    setInterval(helper2,50);
    setInterval(helper3,50);
    setInterval(helper4,50);
    setInterval(helper5,50);
    setInterval(helper6,50);
    setInterval(helper7,50);
    setInterval(helper8,50);
    setInterval(helper9,50);
    $("#ion1").velocity({translateX: 10, translateY: 10}, {loop: true});
    $("#ion2").velocity({translateX: 10, translateY: 10}, {loop: true});
    $("#ion3").velocity({translateX: 10, translateY: 10}, {loop: true});
    $("#ion4").velocity({translateX: 10, translateY: 10}, {loop: true});
    $("#ion5").velocity({translateX: 10, translateY: 10}, {loop: true});
    $("#ion6").velocity({translateX: 10, translateY: 10}, {loop: true});
    $("#ion7").velocity({translateX: 10, translateY: 10}, {loop: true});
    $("#ion8").velocity({translateX: 10, translateY: 10}, {loop: true});
    document.getElementById("innerinstrtxt").innerHTML = "Positively charged radical ions are formed by bombardment of beam of &nbsp;high energy electrons."
    document.getElementById("ionisation").onclick = false;
    document.getElementById("ionisationtxt").onclick = false;
    $("#acceleration").on("click", function(){acceleration();});
    $("#accelerationtxt").on("click", function(){acceleration();});
}


function helper2(){
    $("#negdrop1").velocity({translateY: 300}, {duration:400});
    $("#negdrop1").velocity("reverse", {duration:1});
}


function helper3(){
    $("#negdrop2").velocity({translateY: 300}, {duration:500});
    $("#negdrop2").velocity("reverse", {duration:1});
}


function helper4(){
    $("#negdrop3").velocity({translateY: 300}, {duration:600});
    $("#negdrop3").velocity("reverse", {duration:1});
}


function helper5(){
    $("#negdrop4").velocity({translateY: 300}, {duration:700});
    $("#negdrop4").velocity("reverse", {duration:1});
}


function helper6(){
    $("#negdrop5").velocity({translateY: 300}, {duration:800});
    $("#negdrop5").velocity("reverse", {duration:1});
}


function helper7(){
    $("#negdrop6").velocity({translateY: 300}, {duration:900});
    $("#negdrop6").velocity("reverse", {duration:1});
}


function helper8(){
    $("#negdrop7").velocity({translateY: 300}, {duration:300});
    $("#negdrop7").velocity("reverse", {duration:1});
}


function helper9(){
    $("#negdrop8").velocity({translateY: 300}, {duration:800});
    $("#negdrop8").velocity("reverse", {duration:1});
}

/* when someone clicks on acceleration button 
1.All previous images from last onclick will hide
2. A gif will appear with acceleration part of ions */


function acceleration(){
    $("#temp1").hide();
    $("#ion1").hide();
    $("#ion2").hide();
    $("#ion3").hide();
    $("#ion4").hide();
    $("#ion5").hide();
    $("#ion6").hide();
    $("#ion7").hide();
    $("#ion8").hide();
    $("#negdrop1").hide();
    $("#negdrop2").hide();
    $("#negdrop3").hide();
    $("#negdrop4").hide();
    $("#negdrop5").hide();
    $("#negdrop6").hide();
    $("#negdrop7").hide();
    $("#negdrop8").hide();
    $("#arrow1").show();
    $("#box1").show();
    $("#temp2").show();
    $("#arrow2").hide();
    $("#arrow1").velocity({translateX: 10, translateY: -10},{loop:true,  duration:100});
    document.getElementById("innerinstrtxt").innerHTML = "The positively charged radical ions are accelerated by perforated negative electrodes.";
    $("#deflection").on("click", function(){ deflection();});
    $("#deflectiontxt").on("click", function(){ deflection();});
    document.getElementById("acceleration").onclick = false;
    document.getElementById("accelerationtxt").onclick = false;
}

/* when someone clicks on deflection button:
1. gif from last onclick disppears
2. new gif drawing 3 different color of lines into a pipe appears
3. onclick on evaluation button wii get activated 
*/

function deflection(){
    $("#arrow1").hide();
    $("#box1").hide();
    $("#temp2").hide();
    $("#emptypipe").show();
    $("#lines").velocity({opacity:1},{duration: 5000});
    document.getElementById("innerinstrtxt").innerHTML = "The ions are sorted and separted by the magnetic filed according to their mass/ charge ratio."
    $("#evaluation").on("click",function(){ evaluation();});
}

/* when someone clicks on  evaluation button: 
1. opens a new url in new tab showing graph 
*/

function evaluation(){
    var win = window.open('https://ccnsb06-iiith.vlabs.ac.in/exp6_10/aspirin/aspirin_MS_exp9.html','_blank');
        win.focus();
}