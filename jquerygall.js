$(document).ready(function(){

	$(window).resize(function() {
		if($(this).width() > 801) {
			$('#navLi').show();
		}
}); 

	$('.closeBtn').click(function() {
		$('.carousel-indicators').toggle();
		$('#navLi').toggle(500);
		$(this).toggleClass('clicked');
	}); 

    
    });  