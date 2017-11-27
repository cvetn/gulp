$(function() {

  //Burger navigation
  $('.mobileIcon').click(function() {
    $('.header__menu').toggle('slow');
    $('.nav-bars').toggleClass('is-active');
  });

//popup fullscreen
$('.popup-with-zoom-anim').click(()=>{
    $('body').css({'height':'100vh','overflow':'hidden'})
    $('#small-dialog').css('display','block')
})
//close popup
$('.about__close').click(()=>{
    $('body').css({'height':'auto','overflow':'auto'})
})
//popup plugin
$('.popup-with-zoom-anim').magnificPopup({
  type: 'inline',
  fixedContentPos: false,
  fixedBgPos: true,
  overflowY: 'hidden',
  closeBtnInside: true,
  preloader: false,
  midClick: true,
  removalDelay: 300,
  mainClass: 'my-mfp-zoom-in'
});


//scroll to anchor from top nav
$("a.scrollLink").click(function () {
  var elementClick = $(this).attr("href");
  var destination = $(elementClick).offset().top;
  $('html,body').animate( { scrollTop: destination }, 1100 );
  return false;
});
//faq items
$('.question').click(function() {
  $(this).toggleClass('question-active');
});
//parallax
$('.block-parallax1').parallax({imageSrc: '/img/parallax.jpg'});
$('.block-parallax2').parallax({imageSrc: '/img/parallax2.jpg'});
$('.block-parallax3').parallax({imageSrc: '/img/parallax3.jpg'});


});
