  
 $('body').on('click', '.faq_heading_nonactive', function(){
	if($(this).siblings('.faq_questions').is(':visible')){
		$('.faq_questions').slideUp();
		$('.faq_heading_nonactive').removeClass('faq_heading');
		$(".arrow_right_faq").css("transform","rotate(0deg)");
	}
	else {
		$('.faq_questions').slideUp();
		$('.faq_heading_nonactive').removeClass('faq_heading');
		$(".arrow_right_faq").css("transform","rotate(0deg)");
		$(this).addClass('faq_heading');
		$(this).siblings('.faq_questions').slideDown();
		$(this).children('.arrow_right_faq').css("transform","rotate(90deg)");
	}
  });
