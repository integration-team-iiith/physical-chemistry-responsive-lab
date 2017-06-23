function showsample(){
    $("#red-injector").show();
    $("#injector").hide();
    $("#sample-button").onclick = false;
    $("#load-sample").on("click",function(){pushinjector();});
}

function pushinjector(){
    $("#red-injector").velocity({translateY:350},{duration:1000});
    $("#ring").show();
    $("#below-arrow").show();
    $("#vertical-arrows").show();
    $("#vertical-arrows").velocity({translateY:100},{duration:500, loop:true});
    $("#start").on("click",function(){helper();})
}

function helper(){
    $("#up-arrow").show();
    $("#horizontal-arrows-2").show();
    $("#horizontal-arrows-1").show();
    $("#horizontal-arrows-2").velocity({translateX:500},{duration:1000,loop:true});
    $("#horizontal-arrows-1").velocity({translateX:500},{duration:1000,loop:true});
    $("#plot").on("click",function(){helper1();});
}

function helper1(){
    $("#benzene-graph").show();
    $("#graph").hide();
}

