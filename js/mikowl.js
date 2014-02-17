---
---
(function($){

  // Fixed header
  // $(window).load(function(){
  //   $('.content').waypoint(function(down) {
  //     $('.hdr-fixed').toggleClass('active');
  //   }, { offset: 60 });
  // });

  // Navigation

  $('body').addClass('js');

  $(window).scroll(function(){
    var fromTopPx = 75,
        scrolledFromtop = $(window).scrollTop(),
        scrollopacity = $(window).scrollTop()/2,
        $body = $('body');

    if(scrolledFromtop > fromTopPx) {
      $body.addClass('lighten');
    }
    else {
      $body.removeClass('lighten');
    }
  });

  var $menu = $('#menu'), $menulink = $('.navicon');

  $menulink.on("click", function(){
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
    return false;
  });

  // Try to chill out email spam https://gist.github.com/mathiasbynens/286824

  $('a[href^="mailto:"]').each(function() {
    this.href = this.href.replace('(at)', '@').replace(/\(dot\)/g, '.');
  });

})(jQuery);
