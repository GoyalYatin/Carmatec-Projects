<!DOCTYPE html>
<html>
<body >
<img src="" id='imagepreview1'>
<input type="file" name="file" id="file" accept="image/*"/>

       
<script type="text/javascript" src='assets/scripts/jquery-1.9.1.min.js'></script>	

 


<script>
  

 /*********************** for upload image preview *********************/
 function readURL(input) {
alert("dsdcds");
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imagepreview1').prop('src', e.target.result).show();
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#file").change(function () {
    readURL(this);
    $('#imagepreview1').show();
});

$("#file").click(function () {
    alert("dsdcds");
    $('#imagepreview1').attr('src','');
});


$('#imagepreview1').click(function(){
alert("dsdcds");
    $('#file').replaceWith($('#file').clone(true));
    $('#imagepreview1').hide();

});


 
 
</script>

	</body>
</html>

