$(function() {

	  $('button.hamburger').click(function(){
		$(this).toggleClass("is-active");
	});


	$('.on-top').click(function(){
    	$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
 	 });

	$(document).ready(function(){
		var width = $(window).width();
     		var calculated = (width/2)+80;
 			 $('.anita .right-col').css('width', calculated); 
    	$(window).resize(function(){
        	var width = $(window).width();
     		var calculated = (width/2)+80;
 			 $('.anita .right-col').css('width', calculated);
    	});
	});

});
