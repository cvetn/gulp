$(function() {

  //Burger navigation
  $('.mobileIcon').click(function() {
    $('.header__menu').toggle('slow');
    $('.nav-bars').toggleClass('is-active');
  });

//popup fullscreen
// $('.popup-with-zoom-anim').click(()=>{
//     $('#small-dialog').css({
//         'display':'block'
//     });
//     var popupLength = $('#small-dialog').css('height');
//     $('body').css({
//       'height':  popupLength,
//       // 'overflow':'hidden',
//       'background-color':'#000'
//     })
//     $('.header').hide();
//
//     function trans(){
//       $('.mfp-wrap').css({'opacity':'1'});
//     }
//     setTimeout(trans,1)
//
// })
// //close popup
// $('.about__close').click(()=>{
//     $('body').css({'height':'auto','overflow':'auto','background-color':'#fff'})
//     $('#small-dialog').css({
//         'display':'none'
//     });
//       $('.header').show();
//
// })
// //popup plugin
// // $('.popup').magnificPopup({
// //   type: 'inline',
// //   fixedContentPos: false,
// //   fixedBgPos: true,
// //   overflowY: 'hidden',
// //   closeBtnInside: true,
// //   preloader: false,
// //   midClick: true,
// //   removalDelay: 300,
// //   mainClass: 'my-mfp-zoom-in'
// // });
// $('.popup-with-zoom-anim').magnificPopup({
//   type: 'inline',
//   preloader: false,
//   closeBtnInside: true,
//   modal: true
// });






$(".fullscreenPop").fullScreenPopup({
  // Options

});
$(".fullscreenPop2").fullScreenPopup({
  // Options

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


// Sliders
    //intros slider
  var swiper = new Swiper('.swiper-container', {
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,

    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    //    type: 'progressbar',
    // },
  });
  //reviews slider
  var swiper2 = new Swiper('.swiper-container2', {
    spaceBetween: 20,
    slidesPerView: 2,
    loop: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'progressbar',
    },
    breakpoints: {
      992: {
        slidesPerView: 1,
        spaceBetween: 0,
      }
    }
  });
  //tablet slider
  var swiper3 = new Swiper('.swiper-container3', {
    spaceBetween: 140,
    loop: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,

    },

  });


  var swiper5 = new Swiper('.swiper-container5', {
    spaceBetween: 140,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    //
    // },

  });
  //
//   var ml = $('.wrapper').css('margin-left')
//
//   var pl = $('.wrapper').css('padding-left')
//
//   var pl2 = $('.slider').css('padding-left')
//
// var res = parseInt(ml, 10)+parseInt(pl, 10)+parseInt(pl2, 10);
// $('.swiper-container .swiper-pagination').css('left',res)


$(".swiper-pagination-bullet:nth-child(1)").text('Тренировки')
$(".swiper-pagination-bullet:nth-child(2)").text('Питание')
$(".swiper-pagination-bullet:nth-child(3)").text('Отчеты')

// var elem = document.querySelector('.personal__descr')
// var posright = document.documentElement.clientWidth - Math.floor(elem.getBoundingClientRect().right)-100;
// $('.swiper-pagination').css({
//   'left':'auto',
//   'right': posright
// })


//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
//<configurator>
//'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
$('.choose__button').click(function () {

  var $this = $(this);
  var main = $('.choose-main');
  var mainAdd = $('.choose-add');
  var spec = $('.choose-special');
  var mainChilds = main.children();
  var mainAddChilds = mainAdd.children();
  var specChilds = spec.children();


  $this.addClass('button-active');
  $this.siblings().removeClass('button-active');
  $('.configurator__sidebar').css({'opacity':'1'})

 if ($this.parent().hasClass('choose-main')){
   mainAddChilds.removeClass('button-disabled');
   specChilds.removeClass('button-active');
 }
 else if ($this.parent().hasClass('choose-add')){
   specChilds.removeClass('button-active');
 }
 else if ($this.parent().hasClass('choose-special')){
   mainAddChilds.addClass('button-disabled');
   mainChilds.removeClass('button-active');
   mainAddChilds.removeClass('button-active');
 }
 // console.log($this);

  var mainId = main.children('.button-active').attr('id') || '';
  var mainAdd = mainAdd.children('.button-active').attr('id') || '';
  var spec = spec.children('.button-active').attr('id') || '';

  var currentCourse = `${mainId}${spec}`
  console.log(currentCourse)

  var sidebarData = {
    booty : {
      descr1 : {
        heading : 'Красивые ягодицы',
        ul : ['Идеальная форма ягодиц','Плоский живот','Красивые, стройные ноги','Тонус всех групп мышц','Подтянутый силуэт']
      },
      descr2 : {
        heading : 'Курс включает:',
        ul : ['Авторскую программу тренировок на месяц','План питания на месяц','Чат с куратором и участниками проекта в Telegram',
        'Чат с диетологом','Базу знаний о здоровом питании и тренировках','Комплекс растяжки в подарок']
      },
      price : '3000',
      buttonHref : '#order1'
    },

    abs : {
      descr1 : {
        heading : 'Идеальный пресс',
        ul : ['Красивый мышечный корсет','Идеальные пропорции тела','Коррекция проблемных зон','Уменьшение жировой прослойки','Тонус всего тела']
      },
      descr2 : {
        heading : 'Курс включает:',
        ul : ['Авторскую программу тренировок на месяц','План питания на месяц','Чат с куратором и участниками проекта в Telegram',
        'Чат с диетологом','Базу знаний о здоровом питании и тренировках','Комплекс растяжки в подарок']
      },
      price : '3000',
      buttonHref : '#order1'
    },

    fit : {
      descr1 : {
        heading : 'Общее похудение',
        ul : ['Похудение','Развитие выносливости ','Улучшение самочувствия ','Рельефное тело','Развитие всех групп мышц']
      },
      descr2 : {
        heading : 'Курс включает:',
        ul : ['Авторскую программу тренировок на месяц','План питания на месяц','Чат с куратором и участниками проекта в Telegram',
        'Чат с диетологом','Базу знаний о здоровом питании и тренировках','Комплекс растяжки в подарок']
      },
      price : '3000',
      buttonHref : '#order1'
    },

    basic : {
      buttonHref : '#order1'
    },
    advance : {
      buttonHref : '#order1'
    },
    intensive : {
      buttonHref : '#order1'
    },

    novice : {
      descr1 : {
        heading : 'Новичок',
        ul : ['Поможет освоить технику выполнения упражнений','Познать азы правильного питания', 'Курс можно приобрести для участия в конкурсе']
      },
      descr2 : {
        heading : 'Курс включает:',
        ul : ['Авторскую программу тренировок на месяц','Статью-рекомендацию по питанию',
        'Чат с куратором и участниками проекта в Telegram','Базу знаний о здоровом питании и тренировках','Комплекс растяжки в подарок']
      },
      price : '2500',
      buttonHref : '#order1'
    },

    individual : {
      descr1 : {
        heading : 'Индивидуальный',
        ul : ['Подойдет при ограничениях по состоянию здоровья','Укажи все пожелания по курсу в анкете']
      },
      descr2 : {
        heading : 'Курс включает:',
        ul : ['Индивидуальную программу тренировок на месяц','План питания на месяц','Чат с куратором и участниками проекта в Telegram',
        'Чат с диетологом','Чат с Анастасией Мироновой', 'Базу знаний о здоровом питании и тренировках', 'Комплекс растяжки в подарок']
      },
      price : '8000',
      buttonHref : '#order1'
    },

    anticel : {
      descr1 : {
        heading : 'Антицеллюлитный',
        ul : ['Курс на все тело с упором на проблемные зоны','Незаменимый комплекс для любой девушки']
      },
      descr2 : {
        heading : 'Курс включает:',
        ul : ['Авторскую программу тренировок на месяц','Специальный план питания на месяц',
        'Набор рекомендаций по домашнему уходу за проблемными зонами тела','Чат с диетологом',
        'Чат с куратором и участниками проекта в Telegram','Базу знаний с полезными статьями',
        'Комплекс растяжки в подарок']
      },
      price : '3500',
      buttonHref : '#order1'
    },
    stretch : {
      descr1 : {
        heading : 'Растяжка',
        ul : ['Комплекс не привязан к личному кабинету','Уникальная программа для повышения гибкости тела','Улучшит осанку и защитит суставы от травм']
      },
      descr2 : {
        heading : 'Курс включает:',
        ul : ['Письмо с авторской программой по растяжке 2-ух уровней сложности','Видео и текстовое описание упражнений','Рекомендации по выполнению комплекса']
      },
      price : '3500',
      buttonHref : '#order2'
    }
  }


  function renderSidebar(course){

    var descr1Heading = $('.sidebar__item1 p'),
        descr1Ul = $('.sidebar__item1 ul'),
        descr2Heading = $('.sidebar__item2 p'),
        descr2Ul = $('.sidebar__item2 ul'),
        price = $('.sidebar__num'),
        paymentButton = $('.pay__button-yandex');

    descr1Heading.text( sidebarData[course].descr1.heading);
    descr2Heading.text( sidebarData[course].descr2.heading);

    var arrUl1 = sidebarData[course].descr1.ul.map((item)=> `<li class="animated fadeIn" > ${item}</li>`);
    var arrUl2 = sidebarData[course].descr2.ul.map((item)=> `<li class="animated fadeIn" > ${item}</li>`);

    descr1Ul.html(arrUl1);
    descr2Ul.html(arrUl2);

    price.text( sidebarData[course].price);
    paymentButton.attr('href', sidebarData[course].buttonHref);

    // if $this.parent().hasClass('choose-main'){
    //   $('.sidebar__item3').hide();
    // }

  }

  // window.renderSidebar = renderSidebar;

  $this.parent().hasClass('choose-add') ? '' : renderSidebar(currentCourse);

});





//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
//   <configurator/>
//'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''


});
