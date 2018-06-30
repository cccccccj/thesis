$(function() {
  $('#menu-show').click(function() {
    $('#menu-hide').removeClass('unshow');
    $('.popup-menu-container').removeClass('unshow');
    $('#menu-show').addClass('unshow');
  });
});
$(function() {
  $('#menu-hide').click(function() {
    $('#menu-show').removeClass('unshow');
    $('#menu-hide').addClass('unshow');
    $('.popup-menu-container').addClass('unshow');
  });
});
$(function() {
  $('.popup-menu').click(function() {
    $('#menu-show').removeClass('unshow');
    $('#menu-hide').addClass('unshow');
    $('.popup-menu-container').addClass('unshow');
  });
});
$(function() {
  $('#cat').click(function() {
    $('#cross').removeClass('unshow');
  });
});
$(function() {
  $('#cross').click(function() {
    $('#cross').addClass('unshow');
  });
});
