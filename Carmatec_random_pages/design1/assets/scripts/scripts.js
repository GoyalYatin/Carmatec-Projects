
$(document).ready(function(){
	var firstname=$('#firstname').val();
	var lastname=$('#lastname').val();
	var company=$('#company').val();
	var email=$('#email').val();
	var address=$('#address').val();
	if(firstname.length>0)
		{
			$('#firstname').addClass('darkInputText');
		}
	if(lastname.length>0)
		{
			$('#lastname').addClass('darkInputText');
		}
	if(company.length>0)
		{
			$('#company').addClass('darkInputText');
		}
	if(email.length>0)
		{
			$('#email').addClass('darkInputText');
		}
	if(address.length>0)
		{
			$('#address').addClass('darkInputText');
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
	$('#company').keyup(function(){
		if(company.length>=0)
		{
			$('#company').addClass('darkInputText');
		}
		else
		{
			$('#company').removeClass('darkInputText');
		}
		company=$('#company').val();
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

	$('#address').keyup(function(){
		if(address.length>=0)
		{
			$('#address').addClass('darkInputText');
		}
		else
		{
			$('#address').removeClass('darkInputText');
		}
		address=$('#address').val();
	});
});