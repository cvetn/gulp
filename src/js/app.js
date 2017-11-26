$(function() {

  //Burger navigation
  $('.mobileIcon').click(function() {
    $('.header__menu').toggle('slow');
    $('.nav-bars').toggleClass('is-active');
  });

  //popups
/*$('.popup__about').magnificPopup({
  type: 'ajax',
  alignTop: true,
  overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
});
*/

$('.popup__about').magnificPopup({
  type: 'ajax',
  closeOnBgClick: false
});

});
