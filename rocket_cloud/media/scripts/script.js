// JavaScript Document

$(function() {
	
	// Header menu toggle in mobile view
	$('body').on('click', '.toggle-header-menu', function(){
		$(this).siblings('.mainmenu-ulist').slideToggle();
	});
	
});//ready function ends here

	var callback = function(){
		 $('.page_width').text($(window).width());
	};
		
	$(document).on('ready', callback);
	$(window).on('resize', callback);
 