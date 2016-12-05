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


var view ={
	step_no : 0,
	//count = 0;
	// enableElement: makes element disable.
	enableElement: function(Id) {
		document.getElementById(Id).disabled = false;
	},
	//hideElements: used to hide elements when it is called.
	hideElements: function(id){
		document.getElementById(id).style.visibility = 'hidden';
	},
	//showElements: used to make the hidden elements visible when it is called.
	showElements: function(id){
		document.getElementById(id).style.visibility = 'visible';
	},
	// setInnerHtml: set innerText to a element.
	setInnerHTML: function (id, innerHTML) {
		document.getElementById(id).innerHTML = innerHTML;
	},
	// addClickEvent: add EventListener to other methods.
	addClickEvent: function(id, method){
		var element = document.getElementById(id);
		element.addEventListener('click', method);
	},
	// removeClickEvent: removes click event to the element on calling this method.
	removeClickEvent: function(id) {
		var element = document.getElementById(id);
		element.removeEventListener('click');
	},
	// replaceElements: replaces the element with an other element on calling this method.
	replaceElements: function(id, image) {
		var element = document.getElementById(id);
		element.src = image;
	},
	// activateEvents: calls addClickEvent method to add EventListener to other methods.
	activateEvents: function() {
		this.addClickEvent('sample-bottle', function() { view.resetPage(); });
		this.addClickEvent('restart', function() { view.resetPage(); });
		this.addClickEvent('solvent', function() { view.moveSPatual(); });
		this.addClickEvent('solution', function() { view.movesolInjector(); });
		this.addClickEvent('spatula', function() { view.moveSolventSol(); });

	},
	//initialInstructions: set of methods to be called when the page loads.
	initialInstructions: function(){
		this.setInnerHTML('instruction', model.instruction1);
		this.hideElements('instruction_box');
		this.hideElements('solvent');
		this.hideElements('spatula');
		this.hideElements('injector');
		this.hideElements('syringe');
	},
	//fade Elements
	fadeElements: function(id){
		$('#'+id).fadeIn().fadeOut();
	},
	
	},
	//animateElements: calls setInnerhtml method and sets the instruction. Calls animate method and moves the syringe.
	animateElements:function(id,top,left){
		$('#'+id).animate({
			top: '+='+top+'%', 
			left: '+='+left+'%'
		}, {
			duration: 1500
		});
	},

	// Moves spatula
	moveSpatula: function(){
		if(this.step_no == 0){
			this.setInnerHTML('instruction', model.instruction2);
			this.animateElements('spatula',60, 8);
			this.unsetCursor('spatula');
			this.setCursor('solution');
			this.step_no++;
		}
	},
	// Moves syringe
	movesolSyringe: function(){
		if(this.step_no == 1) {
			if(!$('*').is(':animated')){
				this.setInnerHTML('instruction', model.instruction3);
				this.animateElements('solution',60, 6);
				this.unsetCursor('solution');
				this.step_no++;
				setTimeout(function(){
					view.hideElements('solution');
					view.showElements('');
					view.showElements('injector');
				
				}, 1000);
				
		}
	},
}

// onload function: call init method on window onload.
window.onload=function() {
	view.init();
}