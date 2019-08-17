// JavaScript Document

 $(document).ready(function(){
 
  /* for checking responsive width **/

var window_widhths = $(window).width() + 17;
	$('.width_show').html(window_widhths);
	
/* for checking responsive width **/
   $(window).resize(function(){
	var window_widhths = $(window).width();
	 window_widhths = window_widhths + 17 ;
	$('.width_show').html(window_widhths);
	})

	$(".menutoggle").click(function()
	{
	    $("ul.menu_ulist").slideToggle();
		if($(".myaccount_menu_top_header").css('top') == '277px')
		{
			$(".myaccount_menu_top_header").css('top','648px');
		}
		else if($(".myaccount_menu_top_header").css('top') == '648px')
		{
			$(".myaccount_menu_top_header").css('top','277px');
		}
	});

 
 
 $('.classesmenu').mouseenter(function(){
	
		$(this).find('.header-submenu-wrap').stop(true, true).slideDown();		
	})

$('.classesmenu').mouseleave(function(){	
		$(this).find('.header-submenu-wrap').stop(true, true).hide();
		
});

 
if(window_widhths >993) {
$(this).children().find('.changelogintext').css("color","transparent");
 $('.login_signup').mouseenter(function(){	
 		$('.loginsignupclass').css("width","100px");
 		$(this).children().find('.changelogintext').text($(".login_button").text()).css("color","#fff");
		
		$(this).find('.signup_button').stop(true, true).slideDown(500);		
	})
	$('.login_signup').mouseleave(function(){	
		$(this).children().find('.changelogintext').css("color","transparent");
		$('.loginsignupclass').css("width","40px");
		$(this).find('.signup_button').stop(true, true).hide();;		
})
}
else
{
	$('.loginsignupclass').css("width","100px");
 	$('.changelogintext').text($(".login_button").text()).css("color","#fff");
 	
}
$('.ic_text').mCustomScrollbar({
		scrollButtons:{
			 horizontalScroll:true,
			enable:true
		},
		advanced:{
			updateOnContentResize: true,
			updateOnBrowserResize: true
		}
	});
	if ($(window).width() >= 1024){
		$('.header-submenu-wrap').width(748);
		var scroll_height=$('.ic_text').height();
		$('.ic_text .mCustomScrollBox').height(scroll_height);
	}
	if ($(window).width() < 1024){	
		var width_class_menu=$('.main-wrapper-fixed').width() - 100 ;
		var image_width=(width_class_menu - 30)/4;
		var ratio=240/180;
		var image_height=image_width * ratio;
		var text_height=image_height-60;
		var new_scroll_height=image_height-40;
		$('.header-submenu-wrap').width(width_class_menu);
		$('.ic_container img').width(image_width);
		$('.ic_container img').height(image_height);
		$('.ic_text').height(text_height);
		$('.ic_container').height(image_height);
		$('.ic_container').width(image_width);
		$('.ic_caption').width(image_width);
		$('.ic_text .mCustomScrollBox').height(text_height);
		$('.ic_text .mCustomScrollBox > .mCSB_scrollTools').height(new_scroll_height);
		
	}

 });
 

if ($(window).width() <=600){
    $(document).on('click','.classesmenu',function(){
        $('.class_dropdown_mobile_slider').css('display','block');
        $('.class_dropdown_mobile_slider').animate({
            left:"0px"
        });
    });
    $(document).on('click','.class_dropdown_mobile_slider img',function(){
        $('.class_dropdown_mobile_slider').animate({
            left:"-600px"
        });
    });
}
var n = $( "p" ).length;
 
for (var a=0;a<n;a++)
{
if ($('p:eq('+a+')').is(':empty')) { 
    $('p:eq('+a+')').css('display','none');
}
}


/******************* common animation *****************/
	
$(document).ready(function(){
	$(".menuu1").css('opacity','1').css("animation","fx_caption_top "+ 1000 +"ms 1 cubic-bezier(.17,.89,.26,1)");
	$(".menuu2").css('opacity','1').css("animation","fx_caption_top "+ 1000 +"ms 1 cubic-bezier(.17,.89,.26,1)");
	$(".menuu3").css('opacity','1').css("animation","fx_caption_top "+ 1000 +"ms 1 cubic-bezier(.17,.89,.26,1)");
	$(".menuu4").css('opacity','1').css("animation","fx_caption_top "+ 1000 +"ms 1 cubic-bezier(.17,.89,.26,1)");
	$(".menuu5").css('opacity','1').css("animation","fx_caption_top "+ 1000 +"ms 1 cubic-bezier(.17,.89,.26,1)");
	$(".menuu6").css('opacity','1').css("animation","fx_caption_top "+ 1000 +"ms 1 cubic-bezier(.17,.89,.26,1)");
	$(".menuu7").css('opacity','1').css("animation","fx_caption_top "+ 1000 +"ms 1 cubic-bezier(.17,.89,.26,1)");
	$(".shopmenu").css('opacity','1').css("animation","fx_caption_top "+ 1000 +"ms 1 cubic-bezier(.17,.89,.26,1)");
	$(".myaccount_menu_top_header").css('opacity','1').css("animation","fx_caption_top "+ 1500 +"ms 1 cubic-bezier(.17,.89,.26,1)");
	$(".breadcrumb_navigation").css('opacity','1').css("animation","fx_caption_left "+ 1500 +"ms 1 cubic-bezier(.17,.89,.26,1)");
	$(".page_title").css('opacity','1').css("animation","fx_caption_left "+ 1900 +"ms 1 cubic-bezier(.17,.89,.26,1)");
});
$(window).scroll(function(){
	$(".retreats_pilates_menu li:eq(0)").css('opacity','1').css("animation","fx_caption_left "+ 1200 +"ms 1 ease-in");
	$(".retreats_pilates_menu li:eq(1)").css('opacity','1').css("animation","fx_caption_left "+ 1600 +"ms 1 ease-in");
	$(".retreats_pilates_menu li:eq(2)").css('opacity','1').css("animation","fx_caption_left "+ 2000 +"ms 1 ease-in");
	$(".retreats_pilates_menu li:eq(3)").css('opacity','1').css("animation","fx_caption_left "+ 2400 +"ms 1 ease-in");
	$(".footerleft").css('opacity','1').css("animation","fx_caption_left "+ 2400 +"ms 1 ease-in");
	$(".otherlinks_footer").css('opacity','1').css("animation","fx_caption_right "+ 2700 +"ms 1 ease-in");
	$(".footer_social_links").css('opacity','1').css("animation","fx_caption_right "+ 2900 +"ms 1 ease-in");

});






/************* footer *************/
var heightWindow=$(window).height();
   var heightHeader=$('.header_wrapper').height();
   var heightMainContainer=$('.mainContent_wrapper').height();
   var heightPilates=$('.pilates_innaerpage').height();
   heightMainContainer=heightWindow-heightHeader-heightPilates-30;
$('.mainContent_wrapper').css('min-height',heightMainContainer);