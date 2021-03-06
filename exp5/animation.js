    var event=0;

    $(document).ready(function(){
        $("#sample-button").click(function(){
            if(event==0){
                event++;
                $("#chem-border").delay(0).fadeIn();
                $("#benzene").delay(10).fadeIn();
                $("#acetaldehyde").delay(10).fadeIn(); 
                $("#ethyl").delay(10).fadeIn();                
            }
        });

        $("#benzene").click(function() {
            $("#injector").hide();
            $("#red-injector").show();
            $("#green-injector").hide();
            $("#blue-injector").hide();
            $("#load-sample").off("click");
            $("#plot").off("click");
            $("#evaluate").off("click");

            $("#load-sample").click(function() {
                if(event==1){
                    event++;
                    $("#ring").delay(10).fadeIn();
                    $("#vertical-arrows").delay(10).fadeIn();
                    $("#below-arrow").delay(10).fadeIn();
                    $("#red-injector").animate({top: '245px'});
                    $("#acetaldehyde").off("click");
                    $("#ethyl").off("click");
                }
            });

            $("#plot").click(function() {
                if(event==2){
                    event++; 
                    $("#graph").hide();
                    $("#benzene-graph").delay(1).fadeIn();
                }
            });

            $("#evaluate").click(function(){
                if (event==3) {
                    event++; 
                    window.open("graph/plot_benzene.html");
                }
            });

       });

        $("#acetaldehyde").click(function() {
            $("#injector").hide();
            $("#blue-injector").show();
            $("#green-injector").hide();
            $("#red-injector").hide();
            $("#load-sample").off("click");
            $("#plot").off("click");
            $("#evaluate").off("click");
        
            $("#load-sample").click(function() {
                if (event==1) {
                    event++; 
                    $("#ring").delay(10).fadeIn();
                    $("#vertical-arrows").delay(10).fadeIn();
                    $("#below-arrow").delay(10).fadeIn();
                    $("#blue-injector").animate({top: '245px'});
                    $("#ethyl").off("click");
                    $("#benzene").off("click");
                }
            });

            $("#plot").click(function() {
                if (event==2) {
                    event++; 
                    $("#graph").hide();
                    $("#acetaldehyde-graph").delay(1).fadeIn();
                }
            });

            $("#evaluate").click(function(){
                if (event==3) {
                    event++; 
                    window.open("graph/plot_acetaldehyde.html");
                }
            });
        
        });

        $("#ethyl").click(function() {
            $("#injector").hide();
            $("#green-injector").show();
            $("#blue-injector").hide();
            $("#red-injector").hide();
            $("#load-sample").off("click");
            $("#plot").off("click");
            $("#evaluate").off("click");
            
            $("#load-sample").click(function() {
                if (event==1) {
                    event++; 
                    $("#ring").delay(10).fadeIn();
                    $("#vertical-arrows").delay(10).fadeIn();
                    $("#below-arrow").delay(10).fadeIn();
                    $("#green-injector").animate({top: '245px'});
                    $("#benzene").off("click");
                    $("#acetaldehyde").off("click");
                }
            });
        

            $("#plot").click(function() {
                if(event==2) {
                    event++; 
                    $("#graph").hide();
                    $("#ethyl-graph").delay(1).fadeIn();
                }
            });

            $("#evaluate").click(function(){
                if(event==3) {
                    event++; 
                    window.open("graph/plot_ethylacetate.html");
                }
            });

        });


    $("#start").click(function() {
        $("#constant-molecules").delay(10).fadeIn();
        $("#horizontal-arrows-1").delay(10).fadeIn();
        $("#horizontal-arrows-2").delay(10).fadeIn();
        $("#up-arrow").delay(10).fadeIn();
        $("#molecules").hide();
        
    });

    // $("#plot").click(function() {
       
    //     $("#graph").hide();
    //     $("#graph-plot").delay(1).fadeIn();
    // });

});

