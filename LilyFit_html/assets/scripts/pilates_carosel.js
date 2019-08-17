$(document).ready(function () {
	  	if ($(window).width()> 1200){	
        var carousel = $("#carousel").waterwheelCarousel({
			flankingItems: 2,
			separation:225,
			forcedImageWidth:420,
			forcedImageHeight:300
        });
	}
	else if ($(window).width()<= 1200 && $(window).width()> 900){
		var carousel = $("#carousel").waterwheelCarousel({
			flankingItems: 2,
			separation:150,
			forcedImageWidth:420,
			forcedImageHeight:300
        });
	
	}
	else if ($(window).width()<= 900 && $(window).width()> 700){
		var carousel = $("#carousel").waterwheelCarousel({
			flankingItems: 2,
			separation:100,
			forcedImageWidth:420,
			forcedImageHeight:300
        });
	
	}
	else if ($(window).width()<= 700 && $(window).width()> 400){
		var carousel = $("#carousel").waterwheelCarousel({
			flankingItems: 2,
			separation:75,
			forcedImageWidth:300,
			forcedImageHeight:250
        });
	}
	else if ($(window).width()<= 400){
		var carousel = $("#carousel").waterwheelCarousel({
			flankingItems: 2,
			separation:75,
			forcedImageWidth:250,
			forcedImageHeight:200
        });
	}
        $('#prev').bind('click', function () {
          carousel.prev();
          return false
        });

        $('#next').bind('click', function () {
          carousel.next();
          return false;
        });

        $('#reload').bind('click', function () {
          newOptions = eval("(" + $('#newoptions').val() + ")");
          carousel.reload(newOptions);
          return false;
        });


});