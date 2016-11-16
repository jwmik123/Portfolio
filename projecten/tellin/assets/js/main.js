$(window).scroll(function () {
    
    var nav = $('.nav');
    var aboutUs = $('.aboutUs');
    var wScroll = $(this).scrollTop();
    
    
    
    if (wScroll > 500) {
        nav.addClass('fixed');
        aboutUs.addClass('jumpfix');
    }else{
        nav.removeClass('fixed');
        aboutUs.removeClass('jumpfix');
    }

    $('.logoHeader').css({
        'transform' : 'translate(0px, '+ wScroll /6 +'%)'
    });
    
    $('.spreuk').css({
        'transform' : 'translate(0px, '+ wScroll /8 +'%)'
    });
    
    
// FLOATING ITEMS
    if(wScroll > $('.content-wrapper').offset().top - $(window).height()){

        var offset = (Math.min(0, wScroll - $('.content-wrapper').offset().top +$(window).height() - 450)).toFixed();
        var offset2 = (Math.min(0, wScroll - $('.content-wrapper').offset().top +$(window).height() - 850)).toFixed();
        var offset3 = (Math.min(0, wScroll - $('.content-wrapper').offset().top +$(window).height() - 1350)).toFixed();

        $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0) +'px)'});

        $('.post-2').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0) +'px)'});
        
        
        $('.post-3').css({'transform': 'translate('+ offset2 +'px, '+ Math.abs(offset2 * 0) +'px)'});

        $('.post-4').css({'transform': 'translate('+ Math.abs(offset2) +'px, '+ Math.abs(offset2 * 0) +'px)'});
        
        $('.post-5').css({'transform': 'translate('+ Math.abs(offset3 /40) +'px, '+ Math.abs(offset3 *1) +'px)'});
        
    

  }
  


// LANDING ITEMS

  if(wScroll > $('.over-ons').offset().top - ($(window).height() / 0.4)) {

    $('.over-ons figure').each(function(i){

      setTimeout(function(){
        $('.over-ons figure').eq(i).addClass('is-showing');
      }, (700 * (Math.exp(i * 0.14))) - 700);
    });

  }
});

// SCROLL TO SECTION

    
$(".ons-verhaal").click(function(e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $(".aboutUs").offset().top-70}, 'slow');
});

$(".werk").click(function(e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $(".content-wrapper").offset().top-120}, 'slow');
});

$(".team").click(function(e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $(".over-ons").offset().top-120},
        'slow');
});

$(".contact").click(function(e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $(".scroll-to-bottom").offset().top-120},
        'slow');
});

$(".personen").click(function(e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $(".over-ons").offset().top},
        'slow');
});




// ABOUT US 

    $('.persoon-1').click(function(){
      $('.elmo').removeClass('not-visible');
      $('.remco').addClass('not-visible');
      $('.duco').addClass('not-visible');
      $('.laura').addClass('not-visible');
      $('.joel').addClass('not-visible');
    });
   
    
     $('.persoon-2').click(function(){
      $('.remco').removeClass('not-visible');
      $('.elmo').addClass('not-visible');
      $('.duco').addClass('not-visible');
      $('.laura').addClass('not-visible');
      $('.joel').addClass('not-visible');
    });
    
     $('.persoon-3').click(function(){
      $('.laura').removeClass('not-visible');
      $('.remco').addClass('not-visible');
      $('.duco').addClass('not-visible');
      $('.elmo').addClass('not-visible');
      $('.joel').addClass('not-visible');
    });
    
     $('.persoon-4').click(function(){
      $('.duco').removeClass('not-visible');
      $('.remco').addClass('not-visible');
      $('.elmo').addClass('not-visible');
      $('.laura').addClass('not-visible');
      $('.joel').addClass('not-visible');
    });
    
     $('.persoon-5').click(function(){
      $('.joel').removeClass('not-visible');
      $('.remco').addClass('not-visible');
      $('.duco').addClass('not-visible');
      $('.laura').addClass('not-visible');
      $('.elmo').addClass('not-visible');
    });
    
    $('.times').click(function(){
      $('.joel').addClass('not-visible');
      $('.remco').addClass('not-visible');
      $('.duco').addClass('not-visible');
      $('.laura').addClass('not-visible');
      $('.elmo').addClass('not-visible');
    });
    

//ANIMATIONS

$('.elmo').click(function() {
		$(this).addClass("slideDown");
	});