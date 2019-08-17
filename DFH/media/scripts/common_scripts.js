// JavaScript Document


//Target ie7 only.
//Image under <a> tags are not clickable
//http://stackoverflow.com/questions/5735158/image-is-not-clickable-inside-anchor-only-in-ie7
	if($.browser.msie && parseInt($.browser.version, 10) == 7) {
		$('.mainMenu_list_sublist li a, .shopOnline_wrapper a, .leftCont_shopOnline a, .relatedProducts_detail a, .Clinical_Rounds_cell a, a.NSF_link').click(function () {      
			//alert('ie7 image link');
			window.location = $(this).attr('href');
		});
		$('.mainMenu_list_sublist li a, .shopOnline_wrapper a, .leftCont_shopOnline a, .relatedProducts_detail a, a.NSF_link').hover(function () {
			$(this).css('cursor', 'pointer');
		});
	}  


//Login menus drop down
//$('.myAccount_loginLink, .needHelp_loginLink').hover(function(){
//			$(this).find('ul').stop(true, true).fadeIn(250);
//			this.style.removeAttribute('filter'); 
//		},
//		function(){
//			$(this).find('ul').stop(true, true).hide();
//		}
//);
//
//$('.myAccount_loginLink, .needHelp_loginLink').hover(function(){
//			$(this).addClass('loginHover');
//		},
//		function(){
//			$(this).removeClass('loginHover');
//		}
//);


//Main menus drop down
$('.mainMenu_navLI > li').hover(function(){
			$(this).find('ul').stop(true, true).fadeIn(250);
			//this.style.removeAttribute('filter'); 
		},
		function(){
			$(this).find('ul').stop(true, true).hide();
		}
);


// Close the menus on click on any menu dropdown link
$('.mainMenu_navLI li a').click(function(){
	$('.mainMenu_list_sublist').hide();
	$('.hovered_mainMenu').removeClass('hovered_mainMenu');
})

$('.mainMenu_navLI > li').hover(function(){
			$(this).addClass('hovered_mainMenu');
		},
		function(){
			$(this).removeClass('hovered_mainMenu');
		}
);


// Inner pages left navigation links

var windowidth = $(window).width();
console.log(windowidth);
/* 698 is equal to 715 */

if(windowidth > 698)
{
$('.innersublinks_list').mouseenter(function(){
	if(!$(this).hasClass("selected_submenu"))
	{	
		if(!$(this).children('.leftmenu_subLinks').is(':visible')){
			$(this).children('span').css('background' , 'url("media/images/leftMenu_subLinksH.png") no-repeat scroll 7px 14px transparent');
			$(this).children('.leftmenu_subLinks').stop(true, true).slideDown(200);
		}
		else if (!$(this).children('.leftmenu_subLinks').is(':hidden')) {
			$(this).children('span').css('background' , 'url("media/images/leftMenu_subLinks.png") no-repeat scroll left 14px transparent');
			$(this).children('.leftmenu_subLinks').stop(true, true).slideUp(200);
		}
	}
});

$('.innersublinks_list').mouseleave(function(){	
	if(!$(this).hasClass("selected_submenu"))
		{
			$(this).children('span').css('background' , 'url("media/images/leftMenu_subLinks.png") no-repeat scroll left 14px transparent');
			$(this).children('.leftmenu_subLinks').stop(true, true).slideUp(200);
		}
});	
}

 

// Tab script

$(".dashboardtabs").find("li:first").addClass("selected_tab");
$(".dashboardpanes").find(".tabs:first").show();

	$(document).on( "click", ".dashboardtabs > li > a", function( e ) {
		$(".dashboardtabs > li").removeClass("selected_tab");
		   $(this).parent().addClass("selected_tab");
		   var idpass = $(this).attr("rel");
		   $(".dashboardpanes").find(".tabs").hide();
		   $(".dashboardpanes").find("#" + idpass ).fadeIn("slow");
		   //alert(idpass);	
});

//Feedback form slidein
	 $(document).ready(function() {
		 //alert('ready');
		var windowheight = $(window).height();
		var halfwindowheight = Math.ceil(windowheight/2);
		var emailsize =  Math.ceil($(".content_emailpop").height()/2);
		var halfwindowsizepoint = halfwindowheight - emailsize;
		$(".emailpop").css({"top":halfwindowsizepoint});
 		var contentWidth = (0 - ($(".emailpop").find(".content_emailpop").outerWidth() + 4));	
		
		if($.browser.msie && parseInt($.browser.version, 10) == 7) {
			var contentWidth = (0 - ($(".emailpop").find(".content_emailpop").outerWidth() + 40));
		}
		
		$(".emailpop").find(".content_emailpop").css({"margin-left":contentWidth}).addClass("off-shdow");
		$(".emailpopbutton").click(function(){
			$(this).parents(".emailpop").find(".content_emailpop").show();
			
			if($.browser.msie && parseInt($.browser.version, 10) == 7) {
				$('.emailpopbutton').hide();
			}
			
			
			if(parseInt($(this).parents(".emailpop").find(".content_emailpop").css("margin-left")) < 0 )
				{
					$(this).parents(".emailpop").find(".content_emailpop").removeClass("off-shdow");
					$(this).parents(".emailpop").find(".content_emailpop").animate(
				{
					marginLeft:0
				},
				1300,"linear", function(){$(".emailpopbutton").fadeOut();});
			}
		else
		{
			var contetwidth = $(this).parents(".emailpop").find(".content_emailpop").outerWidth();
			var contentwidthneg = 0 - contetwidth;
			$(this).parents(".emailpop").find(".content_emailpop").animate(
			{
				marginLeft:contentwidthneg
			},
			1300,"linear",function(){$(".emailpopbutton").fadeIn();});
			
			$(".content_emailpop").addClass("off-shdow")
		}
	 });

	 $(".close_button").click(function(){
		$(this).parents(".emailpop").find(".content_emailpop").animate(
			{
				marginLeft:contentWidth
			},
			1300,"linear",function(){$(".emailpopbutton").fadeIn()});
			$(".content_emailpop").addClass("off-shdow");

	 });
	 });
	 
	 	//Clinic Rounds Click to play
		/*if( $(".audio_imgWrap").size() > 0)
		{
			 $(".audio_imgWrap").mouseenter(function(){				 
					$(this).find(".clickToPlay").stop(true, true).animate({
						top: '0'
					  }, 300
					 );
				
			 })
			 $(".audio_imgWrap").mouseleave(function(){						
					$(this).find(".clickToPlay").stop(true, true).animate({
						top: '84'
					  }, 300
					 );				
			 })	
			 }*/
/*--Product Detail page tabs --*/
	   
 $(document).ready(function() {
	   $(".productDetails_tabs_List li").click(function(){
		   //console.log('clicked');
		   $(this).parent(".productDetails_tabs_List").find("li").removeClass("selected_tab");
		   //console.log('remove class');
		   $(this).addClass("selected_tab");
		  // console.log('add class');
		    var idpass = $(this).attr("rel");
			//console.log(idpass);
		   $(this).parents('.productDetails_tabs').find(".productDetails_tabsWrap").find(".tab_container").hide();
		  // console.log('hide all');
		   $(".productDetails_tabsWrap").find("#" + idpass ).fadeIn("slow");
		   //console.log('finish');
	   });
	   
	   
	   //Download Mp3 hover Nutrient roundtable/CLinical Rounds
	   $('.download_coloums').hover(function(){
				$(this).find('img').attr('src', 'media/images/download_archieve_hover.png');
			},
			function(){
				$(this).find('img').attr('src', 'media/images/download_archieve.png');
			}
		);
	   
 });
	  
/*--Product Detail page tabs --*/
	 
	 
// Addtocart button link to login page

$('input.AddcartBtn').click(function() {
   window.location = "http://catalog.designsforhealth.com";
});
	 
	 
	 
	 
	 
	 
	 
/*menu to Arrow move*/
	jQuery.fn.moveArrow = function() {
	   return this.each(function() {
		var $this = $(this);
		var position = $this.position();
		var parentposition = $this.parent("ul").position();
		var relativetop =  Math.abs(position.left - parentposition.left);
		var currntliheight  = $this.width();
		var movtopos = parseInt(relativetop + (currntliheight/2) - 4);
		$(".top_arrow").stop().animate({
		marginLeft: movtopos	
		},600);
		//console.log(movtopos);
	   });
	};
	
	jQuery.fn.SetdefaultArrow = function() {
	   return this.each(function() {
		var $this = $(this);
		var parentposition2 = $this.parent("ul").position();
		var positionselted = $(".list_type_a").find(".selected_ico").position();
		var deafaultpos = Math.abs(positionselted.left - parentposition2.left);
		$(".top_arrow").stop().animate({
		marginLeft: deafaultpos
		},600);
	   });
	};
	
	jQuery.fn.SetinitialArrow = function() {
	   return this.each(function() {
		var $this = $(".selected_ico");
		var parentposition2 = $this.parent("ul").position();
		var positionselted = $(".list_type_a").find(".selected_ico").position();
		var currntliheight  = $this.width();
		var deafaultpos = Math.abs(positionselted.left - parentposition2.left + (currntliheight/2) - 4);
		$(".top_arrow").stop().animate({
		marginLeft: deafaultpos
		},600);
	   });
	};	 
	 
	 
	 
	 

/*** added by srividya **/

var callback = function(){
		 $('.page_width').text($(window).width() + 17);
	};
		
	$(document).on('ready', callback);
	$(window).on('resize', callback);


$('.menu-toggle a').click(function(){
		$('.mainMenuSearch_header').slideToggle();
});

/*if($(window).width() <= 600)
{
	$(document).on("click",".mainMenu_navLI li",function(){
		alert("sa");
	})
}*/

$(document).on("click",".left-menu-toggle a",function(){
	//$(".innerpage_Lwrapp").slideToggle();
});

/*$(document).on("click",".left-menu-toggle a",function(){
//$('.quicklinks').css('display','none');
$('.crossicon').remove();
$('.innerpage_Lwrapp').prepend('<img class="crossicon" src="media/images/close.png"  alt="test"/>');
$('.crossicon').css("visibility","visible");
$('.innerpage_Lwrapp').animate({left:"0px"});
});*/

$(document).on("click",".crossicon",function(){
	
$.fn.close_side_view();
}); 


$(document).on("click",".left-menu-toggle a",function(){
$(this).hasClass("closed-view") ? $.fn.open_side_view() : $.fn.close_side_view();
});

$(document).mouseup(function (e)
{
    var container = $("div.left-menu-toggle a");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
       $.fn.close_side_view();
    }
});



$.fn.open_side_view = function()
{
$('.crossicon').remove();
$('.innerpage_Lwrapp').prepend('<img class="crossicon" src="media/images/close.png"  alt="test"/>');
$('.crossicon').css("visibility","visible");
$('.innerpage_Lwrapp').animate({left:"0px"});
$(".left-menu-toggle a").removeClass("closed-view");
}

$.fn.close_side_view = function()
{
$('.innerpage_Lwrapp').animate({left:"-300px"});
$(".left-menu-toggle a").addClass("closed-view");

}
