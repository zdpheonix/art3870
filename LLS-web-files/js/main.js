$(document).ready(function(){

   $("#plane").animate({left: "50%"}, 2000, "swing");

    $("#startButton").click(function(){
        $("#plane").animate({left: "100%"}, 2000, "swing");
        $("#test").css({  "opacity":1});
        $("#playerIcon").css({  "opacity":1});
        $("#startButton").css({  "opacity":0});
    });

    $("#btn2").click(function(){
        $("#plane").animate({height: "100px"});
    });


});


//On click, the site will automatically scroll 800px//
