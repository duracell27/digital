$(function() {

	$('button.hamburger').click(function(){
		$(this).toggleClass("is-active");
	});


	$('.on-top').click(function(){
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});

	$(document).ready(function(){
		var width = $(window).width();
		var calculated;
		if (width < 1200 && width >992) {
			calculated = (width/2)+65;
		}else if (width < 992 && width > 768) {
			calculated = (width/2)+54;
		}else if (width < 768 && width > 320) {
			$('.anita .right-col').css('width', '100%');
		}else{
			calculated = (width/2)+80;
		}
		$('.anita .right-col').css('width', calculated);
		$(window).resize(function(){
			var width = $(window).width();
			var calculated;
			if (width < 1200 && width >992) {
				calculated = (width/2)+65;
			}else if (width < 992 && width > 768) {
				calculated = (width/2)+54;
			}else if (width < 768 && width > 320) {
				$('.anita .right-col').css('width', '100%');
			}else{
				calculated = (width/2)+80;
			}
			$('.anita .right-col').css('width', calculated);
		});
	});

	$(document).ready(function(){
		var width1 = $('.price .wrapper .left-bg').width();
		var width2 = $('.price .content .left-side').width();
		console.log(width1);
		console.log(width2);
		var rezult = width1 - width2;
		if (rezult < 0) {
			$('.price .content').css('left', 0);	
		}else{
			
			$('.price .content').css('left', rezult);
		}
		$(window).resize(function(){
			var width1 = $('.price .wrapper .left-bg').width();
			var width2 = $('.price .content .left-side').width();
			console.log(width1);
			console.log(width2);
			var rezult = width1 - width2;
			if (rezult < 0) {
				$('.price .content').css('left', 0);	
			}else{
				
				$('.price .content').css('left', rezult);
			}
		});
	});



});
