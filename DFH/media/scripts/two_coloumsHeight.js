$(function () {
	//alert('in');
	
	setTimeout (function(){
		//alert('as');
	//Left SIdebar height
	var $rightFold_lessContent=$('<div class="NSF_rightfold"><img src="media/images/leftTab_rightBottom.jpg"></div>');
	
	//console.log($(".innerpage_Lwrapp").height());
	//console.log($(".innerpage_Rwrapp").height());
	
	if($(".innerpage_Rwrapp").height() < $(".innerpage_Lwrapp").height()) {
		
		//console.log('Left side more');
		
		$('.leftContainer_emptySpace').remove();
		$('.leftContainer_emptySpace').css('display', 'none');
		$('.NSF_wrap').removeClass('NSF_wrapBorder');
		$rightFold_lessContent.appendTo('.NSF_wrap');
	}
	else {
		var pageContentHeight = $('.pageContent').outerHeight(true);
		//console.log(pageContentHeight);
						
		var leftmenu_linksHeight = $('.leftmenu_links').outerHeight(true);
		//console.log(leftmenu_linksHeight);
		
		var CEU_Credits_new = $('.CEU_Credits_new').outerHeight(true);
		//console.log(leftmenu_linksHeight);
		
		var cart_ContainerHeight = $('.cart_Container').outerHeight(true);
		//console.log(cart_ContainerHeight);
		
		var leftCont_shopOnlineHeight = $('.leftCont_shopOnline').outerHeight(true);
		//console.log(leftCont_shopOnlineHeight);
		
		var NSF_wrapHeight = $('.NSF_wrap').outerHeight(true);
		//console.log(NSF_wrapHeight);
		
		var clinicalRounds_flyerposterHeight = $('.clinicalRounds_flyerposter').outerHeight(true);
		//console.log(clinicalRounds_flyerposterHeight);
		
		var emptyContainer_Height = (pageContentHeight) - (leftmenu_linksHeight + cart_ContainerHeight + clinicalRounds_flyerposterHeight + leftCont_shopOnlineHeight + NSF_wrapHeight + CEU_Credits_new );
		//console.log(emptyContainer_Height);
		
		if(emptyContainer_Height < 25){
			//console.log('negative value');
			$('.leftContainer_emptySpace').remove();
			$('.leftContainer_emptySpace').css('display', 'none');
			$('.NSF_wrap').removeClass('NSF_wrapBorder');
			$rightFold_lessContent.appendTo('.NSF_wrap');	
		}
		else {		
			$('.leftContainer_emptySpace').css('height', emptyContainer_Height);
		}
	}
	//Left SIdebar height
	
	}, 300)
})