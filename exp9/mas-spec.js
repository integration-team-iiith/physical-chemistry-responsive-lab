var model={

    instruction1: 'Select a sample',
    instruction2:'Click on the solvent bottle to draw 1 ml of the solvent (methanol) and inject it into the sample inlet to clean any impurity in the sample pathway.',
    instruction3:'Click on the sample bottle to transfer small amount (around 1mg) of the substance into the empty sample bottle',
    instruction4:'Click on the solvent bottle to transfer 5 ml of the solvent (methanol) to the substance taken.',
    instruction5:'Click on the sample solution to make a clear solution.',
    instruction6:'Click on the sample solution to draw 1 ml of the sample prepared to load on to the mass spectrometer.',
    instruction7:'Click on 'start' button to start the spectrometer.',
    instruction8:'Click on the evaluation button for spectral analysis'
}

 
 /*This method is called when the page is loaded. *
   First function helps in providing basic functionality to manual button and also sets the first set of instructions.
   Second function adds click events to elements as soon as the page loads.
   Third function adds mouse events to elements as soon as the page loads. */
window.onload = function(){ 

        initial_function();
        addclickEvents();
}

function initial_function(){
        // Intial instruction to be followed
        document.getElementById("demo").innerHTML = "Select any sample";
        
}


//This function is used to add click events to elements
function addclickEvents(){
        document.getElementById("aspirine").addEventListener("click", function() {
            aspirine();
        }, false);
        document.getElementById("solvent").addEventListener("click", function() {
            solvent();           
        }, false);
        document.getElementById("sample").addEventListener("click", function() {
            sample();
        }, false);
        document.getElementById("syringe").addEventListener("click", function() {
            sample();
        }, false);
       
}


function aspirine(){
    
        document.getElementById('nitrophenol').style.visibility = 'hidden';
        document.getElementById("demo").innerHTML = "Click on the solvent bottle to draw 1 ml of the solvent (methanol) and inject it into the sample inlet to clean any impurity in the sample pathway."  
           
}


function solvent(){
   
        document.getElementById("demo").innerHTML = "Click on the sample bottle to transfer small amount (around 1mg) of the substance into the empty sample bottle."    
        syringe();
}

function syringe(){
    document.getElementById("injector").style.visibility = 'visible';
    // elem = getElementById("syringe");
    // initial_top = Math.round($('injector').position().top);
    // initial_top = Math.round($('injector').position().left);
    // final_top = 100;
    // step_top = 1;
    // step_left = 0.2;
    // type_of_movement = 0;

    // moveImage();

}

function sample(){
    document.getElementById("demo").innerHTML = "Click on the solvent bottle to transfer 5 ml of the solvent (methanol) to the substance taken."
}


// function reset1(){
// clearTimeout(my_time);
// document.getElementById('i1').style.left= "500px";
// document.getElementById('i1').style.top= "100px";
// document.getElementById("msg").innerHTML="";

// }



// function syringe() {

// var i=document.getElementById('injector').offsetTop;
// i = i +100;
// document.getElementById('injector').style.top= i + "pi";

// }

function syringe(){
var step=1; // Change this step value
//alert("Hello");
var j=document.getElementById('injector').offsetTop;
var i=document.getElementById('injector').offsetLeft;
if(j < 400 ){j= j +step;
document.getElementById('injector').style.top= y + "pi"; // vertical movment
}else{
if(i < 400){i= i +step;
document.getElementById('injector').style.left= x + "pi"; // horizontal movment
}
}


}

function timer(){
disp();
var y=document.getElementById('injector').offsetTop;
var x=document.getElementById('injector').offsetLeft;
// document.getElementById("msg").innerHTML="X: " + x + " Y : " + y
my_time=setTimeout('timer()',10);
}

