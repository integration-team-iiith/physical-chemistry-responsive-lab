function loadSample(){
    $("#syringe").velocity({translateX:450}, {duration:1000});
    setTimeout(helper,1000);
    $("#ylwdrop").velocity({translateX: 70, translateY:30}, {delay:1000, duration:1000});
    $("#innerinstr").show();
    $("#innerinstrtxt").show();
    $("#box").show();
    $("#arrow").show();
    $("#arrow").velocity({translateX:-5, translateY:5},{loop:true,duration:100});
    setTimeout(helper1,2000);
    $("#ionisation").on("click", function(){ionisation();});
    $("#ionisationtxt").on("click", function(){ionisation();});
    document.getElementById("load").onclick = false;
    document.getElementById("loadtxt").onclick = false;    
}


/* helper function just to show dropping of the yellow drop from syringe */

function helper(){
    $("#ylwdrop").show();
}

/* this function just shows movement of ion drops */

function helper1(){
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

function deflection(){
    document.getElementById("innerinstrtxt").innerHTML = "The ions are sorted and separted by the magnetic filed according to their mass/ charge ratio."
    $("#evaluation").on("click",function(){ evaluation();});
}

function evaluation(){
    var win = window.open('https://ccnsb06-iiith.vlabs.ac.in/exp6_10/aspirin/aspirin_MS_exp9.html','_blank');
        win.focus();
}