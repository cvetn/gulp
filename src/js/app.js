$(function() {

  //Burger navigation
  $('.mobileIcon').click(function() {
    $('.header__menu').toggle('slow');
    $('.nav-bars').toggleClass('is-active');
  });

//popup fullscreen
$('.popup-with-zoom-anim').click(()=>{
    $('#small-dialog').css({
        'display':'block'
    });
    var popupLength = $('#small-dialog').css('height');
    $('body').css({
      'height':  popupLength,
      'overflow':'hidden',
      'background-color':'#000'
    })

    function trans(){
      $('.mfp-wrap').css({'opacity':'1'});
    }
    setTimeout(trans,1)

})
//close popup
$('.about__close').click(()=>{
    $('body').css({'height':'auto','overflow':'auto','background-color':'#fff'})
    $('#small-dialog').css({
        'display':'none'
    });

})
//popup plugin
// $('.popup').magnificPopup({
//   type: 'inline',
//   fixedContentPos: false,
//   fixedBgPos: true,
//   overflowY: 'hidden',
//   closeBtnInside: true,
//   preloader: false,
//   midClick: true,
//   removalDelay: 300,
//   mainClass: 'my-mfp-zoom-in'
// });
$('.popup-with-zoom-anim').magnificPopup({
  type: 'inline',
  preloader: false,
  closeBtnInside: true,
  modal: true
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
  $('.question').not(this).removeClass('question-active');
});
//parallax
$('.block-parallax1').parallax({imageSrc: '/img/parallax.jpg'});
$('.block-parallax2').parallax({imageSrc: '/img/parallax2.jpg'});
$('.block-parallax3').parallax({imageSrc: '/img/parallax3.jpg'});


});
