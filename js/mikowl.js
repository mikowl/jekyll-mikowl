(function($){

  // Fixed header
  $(window).load(function(){
    $('.content').waypoint(function(down) {
      $('body').toggleClass('hdr-fixed');
    }, { offset: 120 });
  });

  // Navigation

  $('body').addClass('js');

  var $menu = $('#menu'), $menulink = $('.navicon');

  $menulink.on("click", function(){
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
    return false;
  });

  // Github feed

  github.showRepos({
      user: 'mikowl',
      count: 5,
      skip_forks: true,
      target: '.github ul'
  });


})(jQuery);
