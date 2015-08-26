$('body').scrollspy({
  offset: $(window).height() * 0.15
});

$(function() {
  $('a[href*=#]:not([href=#myCarousel])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 50
        }, 1000);
        return false;
      }
    }
  });
});

$(document).on('click','.navbar-collapse.in',function(e) {
  if( $(e.target).is('a') ) {
    $(this).collapse('hide');
  }
});
