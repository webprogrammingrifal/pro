// event saat link di klik smooth scrolling
$('.page-scroll').on('click', function(event){

	if(this.hash !== "") {

		event.preventDefault();

		const hash = this.hash;

		$('html, body').animate({
			scrollTop: $(hash).offset().top - 50
		}, 
		800, 'easeInOutExpo'

		);
	}
});





// parallax
// about

$(window).on('load', function() {
	$('.pkiri').addClass('pmuncul');
	$('.pkanan').addClass('pmuncul');

});

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();


	// jumbotron

	$('.jumbotron img').css({

		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({

		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({

		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});




	// porfolio

	if( wScroll > $('.porfolio').offset().top - 250 ) {

		$('.porfolio .thumbnail').each(function(i) {

			setTimeout(function() {

				$('.porfolio .thumbnail').eq(i).addClass('muncul');

			}, 300 *(i+1));

		});


		
		
		
	}



});