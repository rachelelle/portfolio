e$(document).ready(function(){
	// $('.portfolio-item').on( "mouseover", function() {
	//   $('.pos').css( "height", "auto" );
	// }).mouseout(function(){
 //    $('.caption').css( "height", "0px" );
	// })
	$('.portfolio-item').hover(function(){
		$(this).stop();
		$(this).animate({marginLeft: 0}, 500);
	}, function(){
		// $(this).children('.item-text').css('display', 'none');
		$(this).stop();
		$(this).animate({marginLeft: -155}, 500);
	});
});


