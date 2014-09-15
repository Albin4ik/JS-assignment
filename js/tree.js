jQuery( document ).ready(function( $ ) 
{
	if(localStorage.levels!=undefined) document.getElementById('makeTree').innerHTML = localStorage.levels;
});

$('.addNew').live('click', function() {
	var par = $(this).parent();	
	par.append("<ul><li><input type='text' class='str' value='' /><button class='addNew'></button><button class='rem '></button></li></ul>");
	save();
});


$('.rem').live('click', function() {
	$(this).parent().remove();
	save();
});

$('.str').live('change', function() {
	this.setAttribute("value", this.value)
	save();
});

function save()
{
	localStorage.levels = document.getElementById('makeTree').innerHTML;
}

