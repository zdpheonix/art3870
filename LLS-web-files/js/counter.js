$(window).scroll(function(){

      var height = $( window ).height();

      var fromthetop =   $(window).scrollTop();

      var altitude = 10000 - (height + fromthetop);

      $("#counter").text("ALTITUDE: " + altitude + " ft");

      $("#cloud1").css({
        top: function(index, value) {
            fromthetop * 1.5;
          }
      });

      $("#cloud2").css({
        top: function(index, value) {
            fromthetop*0.8;
          }
      });

      $("cloud3").css({
        top: function(index, value) {
            fromthetop*1.2;
          }
      });

      $("cloud4").css({
        top: function(index, value) {
            fromthetop
          }
      });

      $("cloud5").css({
        top: function(index, value) {
            fromthetop*1.8;
          }
      });

      $("cloud6").css({
        top: function(index, value) {
            fromthetop*2.1;
          }
      });

      if (altitude > 5000) {
        $("#counter").css({
          "background-color":"blue",
          "color":"yellow",
          });
      }
      else {
        $("#counter").css({
          "background-color":"green",
          "color":"white",
          });
      }

      //automatically scroll on button-click//

    function autoScrollTo(el) {

        var currentY = window.pageYOffset;
	      var targetY = document.getElementById(el).offsetTop;
	      var bodyHeight = document.body.offsetHeight;
	      var yPos = currentY + window.innerHeight;
	      var animator = setTimeout('autoScrollTo(\''+el+'\')',24);

        if(yPos > bodyHeight){
            clearTimeout(animator);
	     } else {
		       if(currentY < targetY-distance){
		           scrollY = currentY+distance;
		            window.scroll(0, fromthetop);
              }
              else {
		              clearTimeout(animator);
	               }
            }

      $("#button").click(function(){
          window.scroll(0,  500);
      });

      $("#startButton").click(function(){
          window.scroll(0, 500);
      });

    }

      //var roundedAltitutde = math.floor(altitude);
})
