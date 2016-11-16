$(document).ready(function(){
   $(".button-collapse").sideNav();

   //scroll to top
   var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//back to top variables
		$back_to_top = $('.cd-top');
    $pagination_scroll_top = $('.to-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) {
			$back_to_top.addClass('cd-fade-out');
		}
	});
	//scroll to div
	function goToByScroll(id){
		// Reove "link" from the ID
		id = id.replace("link", "");
		// Scroll
		$('html,body').animate({
				scrollTop: $("#"+id).offset().top},
			'slow');
	}

	$("#sidebar > ul > li > a").click(function(e) {
		// Prevent a page reload when a link is pressed
		e.preventDefault();
		// Call the scroll function
		goToByScroll($(this).attr("id"));
	});

	//smooth scroll to top float button
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
  //smooth scroll to top pagination
  $pagination_scroll_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
  $(window).scroll(function(){
    $('.btn-floating').removeClass('white');
    $('.btn-floating').removeClass('z-depth-0');
    $('.btn-floating').addClass('red lighten-1');
    $('.btn-floating').addClass('z-depth-1');
    $('nav').removeClass('z-depth-0');
  });
});
