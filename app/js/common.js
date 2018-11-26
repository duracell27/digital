$(function() {

	  $('button.hamburger').click(function(){
		$(this).toggleClass("is-active");
	});


	$('.on-top').click(function(){
    	$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
 	 });

});
