---
---
(function($){

  // Fixed header
  $(window).load(function(){
    $('.content').waypoint(function(down) {
      $('.hdr-fixed').toggleClass('active');
    }, { offset: 60 });
  });

  // Navigation

  $('body').addClass('js');

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
