$(document).ready(function(){
	
	//Stop video pop-up on overlay close	
	changeFrameScource();
	
	//When you click on a link with class of poplight and the href starts with a # 
  var popIdToclose;
	$(".poplight").click(function() {
		
		var selectedThemeName = $(this).attr('data-theme');
			//alert(selectedThemeName);
		$('#dfhealth_estore').find('.selectedThemeValue').val(selectedThemeName);
			
			
		popIdToclose = "" ;
		var auto = "auto";
		var popID = $(this).attr('rel'); //Get Popup Name
		
		var getSource = $("#"+popID+"-frame").attr("data-src");
		$("#"+popID+"-frame").attr("src",getSource);
    	popIdToclose =  popID;
		
		$('#' + popID).fadeIn().css({ 'width': auto }).prepend('<a href="#" class="close"></a>');
		var popMargTop = ($('#' + popID).height() + 30) / 2;
		
		
		var popMargLeft = ($('#' + popID).width() + 80) / 2;
		
		
		
		if($(window).width() <= 640)
		{
			
			popMargLeft = 0;
			popMargTop = "100px";
			$('#' + popID).css({ 
			'margin-top' :popMargTop,
			'margin-left': popMargLeft,
			'width':'86%',
			'left':'2%',
			'top':'0'
			
		});
		
		if($('.scienceTeam_popup').is(":visible"))
		{
			$('.scienceTeam_popup').height("350");
			$('.scienceTeam_popup').mCustomScrollbar({
			scrollButtons:{
				enable:true
			},
			advanced:{
					updateOnContentResize: true,
					updateOnBrowserResize: true
				}
			});
		}
		
		
			
		}
		else if($(window).width() > 640)
		{
			popMargLeft = -popMargLeft;
			$('#' + popID).css({ 
			'margin-top' : -popMargTop,
			'margin-left': popMargLeft
		});
		}
		
		
		$('body').append('<div id="fade"></div>'); //Add the fade layer to bottom of the body tag.
		$('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn(); //Fade in the fade layer 
		
		/** added to make a scrollbar in science team page **/
		
		
		
		//return false;
	});
var i;
	$('input.close_continue, #fade,.close').live('click', function() { //When clicking on the close or fade layer...
		fadePopup();
     i = 0;
		return false;
	});
	
	$('.user_cancel').live('click', function() {
		fadePopup();
		i = 0;
		//return false;
		
	});
	
	$(document).bind('keydown.facebox', function(e) {
        if (e.keyCode == 27){
			fadePopup();
        	return true
		}
 	})
	
	//Close Popups and Fade Layer
    var fadePopup = function() {
	$('#fade , .simple_overlay,.simple_overlay2').fadeOut(function() {
  		$('#fade, a.close').remove();
			
			if(i == 0)
			{
				stopCurrentVideo(popIdToclose)
				i++
			}
			
			
  	});
}
});

function changeFrameScource()
{
	$(".simple_overlay").find("iframe").each(function(){
		  var src = $(this).attr("src");
			$(this).attr("data-src",src);
			$(this).attr("src","");
	});
}
function stopCurrentVideo(getId)
{
	var frame = $("#"+getId+"-frame");
	frame.attr("src","");
}
