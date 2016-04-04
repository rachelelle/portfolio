$(document).ready(function(){
	// $('.portfolio-item').on( "mouseover", function() {
	//  	$('.caption').css( "visible", "red" );
	// }).mouseout(function(){
 //    	$('.caption').css( "color", "gray" );
	// })
	$('.portfolio-item').hover(function(){
		$(this).stop();
		// $(this).find('.caption').addClass('active');
		$(this).find('.caption').animate({
			opacity: 1,
			height: "auto"
		}, 700);
	}, function(){
		// $(this).children('.item-text').css('display', 'none');
		$(this).stop();
		// $(this).find('.caption').removeClass('active');
		$(this).find('.caption').animate({
			opacity: 0,
			height: 0
		}, 400);
	});
});


