var modal = { 
        images: ['injector.png', 'acetaldehyde.png','below_arrow.png','benzene.png', 'blue-injector.png',
        'chem_border.png','ethyl.png','green-injector.png', 'red-injector.png',]

}

  // onload function: call init method on window onload.
    window.onload=function() {
      view.init();
      view.activateEvents();
    }

var view ={

  loadsamplecount: 0;


  //showElements: calls this function to show the elements by its id.
  showElements: function(id){
    document.getElementById(id).style.visibility = 'visible' ;
  },

    // replaceElements: Calls this method to replace the element with an other element.
  replaceElements: function(id, image) {
    var element = document.getElementById(id);
    element.src = image;
  },

  //addClcikEvent: calls this method to add EventListener to an element.
  addClcikEvent : function(id, method){
    var element = document.getElementById(id);
    element.addEventListener('click',method);
  },

  //removeClickEvent: calls this method to remove EventListene for an element.
  removeClickEvent: function(id, method){
    document.getElementById(id).style.pointerEvents = 'none';
  },

  //enableClickEvent: Calls this method to enable EventListener for an element.
    enableClickEvent: function(id){
      document.getElementById(id).style.pointerEvents = 'auto';
    },

      //resetpage: calls this method to reset the page when we click the button.
  resetpage: function() {
    location.reload();
  },

      /* activateElements: calls this method to addEventListener to an elements, 
    when an element is clicked corresponding funtioin gets executed. */
  activateElements: function(id){
    this.addClcikEvent('reset_button', function(){view.resetpage(); });
    this.addClcikEvent('sample', function(){view.sample(); });
    this.addClcikEvent('benzene', function(){view.benzene(); });
    this.addClcikEvent('acetaldehyde,' function(){view.acetaldehyde(); });
    this.addClcikEvent('ethyl', function(){view.ethyl(); });
    this.addClcikEvent('loadsample', function(){view.loadsample(); });
    this.addClcikEvent('start', function(){view.start(); });
    this.addClcikEvent('plot', function(){view.plot(); });
    // this.addClcikEvent('start', function(){view.start(); });
    this.addClcikEvent('evaluate',function(){view.evaluate(); });
  },

  /*initialInstructions: calls this method to execute the following menthods:
   1. when the page loads, this method displays the  */
  initialInstructions: function(){
    // this.setInnnerHTML('instruction', model.instruction1);
    // this.removeClickEvent('caffeine'); 
    this.removeClickEvent('loadsample');
    this.removeClickEvent('start');
    this.removeClickEvent('plot');
    this.removeClickEvent('evaluate');
    // this.removeClickEvent('IRdisc');
    // this.removeClickEvent('start');
    // this.removeClickEvent('evaluate');

  },

  sample: function() {
    this.showElements('chem_border');
    this.showElements('benzene');
    this.showElements('acetaldehyde');
    this.showElements('ethyl');
  }

}