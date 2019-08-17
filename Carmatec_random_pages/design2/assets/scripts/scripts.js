
$(document).ready(function(){
	var firstname=$('#firstname').val();
	var lastname=$('#lastname').val();
	var email=$('#email').val();
	var phone=$('#phone').val();
	if(firstname.length>0)
		{
			$('#firstname').addClass('darkInputText');
		}
	if(lastname.length>0)
		{
			$('#lastname').addClass('darkInputText');
		}
	if(email.length>0)
		{
			$('#email').addClass('darkInputText');
		}
	if(phone.length>0)
		{
			$('#phone').addClass('darkInputText');
		}
	$('#firstname').keyup(function(){
		if(firstname.length>=0)
		{
			$('#firstname').addClass('darkInputText');
		}
		else
		{
			$('#firstname').removeClass('darkInputText');
		}
		firstname=$('#firstname').val();
	});
	$('#lastname').keyup(function(){
		if(lastname.length>=0)
		{
			$('#lastname').addClass('darkInputText');
		}
		else
		{
			$('#lastname').removeClass('darkInputText');
		}
		lastname=$('#lastname').val();
	});
	
	$('#email').keyup(function(){
		if(email.length>=0)
		{
			$('#email').addClass('darkInputText');
		}
		else
		{
			$('#email').removeClass('darkInputText');
		}
		email=$('#email').val();
	});

	$('#phone').keyup(function(){
		if(phone.length>=0)
		{
			$('#phone').addClass('darkInputText');
		}
		else
		{
			$('#phone').removeClass('darkInputText');
		}
		phone=$('#phone').val();
	});
});