// JavaScript Document
  $(document).ready(function(){
      var name;
	  $('.tab-console').hover(function(){		 
		  var path=$(this).find('img').attr("src");		  
		  var pathnew=path.slice(0,17);
          name=path.slice(17,23);
		  var imgpath=pathnew+"hover.png"; 		  
		  $(this).find('img').attr('src',imgpath);	  		  
	   },function(){
		  var path=$(this).find('img').attr("src");		 	 
		  var pathnew=path.slice(0,17);			
          if(name=='active')		  
		    var imgpath=pathnew+"active.png";
			else			
			var imgpath=pathnew+".png";
		  $(this).find('img').attr('src',imgpath);
	  }
	  );
	  
	  
	  //Custom select for Bootstrap
    	if($('.selectpicker').length){
	   		 $('.selectpicker').selectpicker({
			});
	    }
		
		  //content area height.......
	  
	       var window_height = $(window).height();	 
           var navbar_fixed_top = $('.navbar-fixed-top').height();	 
           $('.mainContent .content-area').css('minHeight', (window_height - navbar_fixed_top));
		   $('.login-left-part').css('height', (window_height));	
		   //$('.login-right-part').css('height', (window_height));
		
		   
		 /*slider show create vps*/  
		   
	 $('.slideImg_Active').click(function()
         {
		var selectvall = $(this).find('input').val();
	   if(selectvall == '1')
		{	
		$('.ImageHover_Active.slide1 img').attr('src','media/images/image1H.jpg');
		$('.ImageHover_Active.slide2 img').attr('src','media/images/image1.jpg');
		$('.vps01').text("CentOS 6.8 x64");
		$('.vps02').text("CentOS 5.8 x64");
		$('.vps03').text("CentOS 4.8 x64");
		$('.vps04').text("CentOS 3.8 x64");
		$('.vps05').text("CentOS 2.8 x64");
		$('.vps06').text("CentOS 1.8 x64");
		$('.vps07').text("CentOS 0.8 x64");
		$('.vps08').text("CentOS 1.8 x64");		
		}
		
	   if(selectvall == '2')
		{	
		$('.ImageHover_Active.slide1 img').attr('src','media/images/image1.jpg');
		$('.ImageHover_Active.slide2 img').attr('src','media/images/image1H.jpg');
		$('.vps01').text("CentOS 5.8 x64");
		$('.vps02').text("CentOS 4.8 x64");
		$('.vps03').text("CentOS 3.8 x64");
		$('.vps04').text("CentOS 2.8 x64");
		$('.vps05').text("CentOS 2.8 x64");
		$('.vps06').text("CentOS 1.8 x64");
		$('.vps07').text("CentOS 0.8 x64");
		$('.vps08').text("CentOS 1.8 x64");
	
		}
     });
});
  



