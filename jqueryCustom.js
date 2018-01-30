$(document).ready(function(){

	var list = $('.listmarg')

	$('#subContent').hide().fadeIn(3000);

	$('.closeBtn').click(function() {
		$('.carousel-indicators').toggle();
		$('#navLi').toggle(500);
		$(this).toggleClass('clicked');
	}); 

	$(window).resize(function() {
		if($(this).width() > 801) {
			$('#navLi').show();
		}
}); 
	
    
    });  