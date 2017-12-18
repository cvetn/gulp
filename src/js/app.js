$(function() {

  //Burger navigation
  $('.mobileIcon').click(function() {
    $('.header__menu').toggle('slow');
    $('.nav-bars').toggleClass('is-active');
  });



  //all popups
  $(".fullscreenPop").fullScreenPopup({
    // Options
  });


$('.fullscreenPop').click(()=>{
    $('.fsp-close').html(' ')
})


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

    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },

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
  });



  $(".swiper-pagination-bullet:nth-child(1)").text('Тренировки')
  $(".swiper-pagination-bullet:nth-child(2)").text('Питание')
  $(".swiper-pagination-bullet:nth-child(3)").text('Отчеты')

  $('.fsp-close').html(' ')

  $('.about__link').click(function(){
      $('.about__descr-hidden').fadeIn();
      $('.block-about').css({'background-image':'none'});
      $('.about__coach').css({'opacity':'1'})
      $(this).hide();
  })



  //''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  //<configurator>
  //'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  $('.choose__button').click(function () {

    var $this = $(this),
        main = $('.choose-main'),            //Блок шаг 1
        mainAdd = $('.choose-add'),          //Блок шаг 2
        spec = $('.choose-special'),         //Блок Особые курсы
        mainChilds = main.children(),        //Детишки шаг 1
        mainAddChilds = mainAdd.children(),  //Детишки шаг 2
        specChilds = spec.children();        //Детишки Особые курсы

    $this.addClass('button-active');                 //делаем кнопку активной
    $this.siblings().removeClass('button-active');   //Делаем всех соседей по блоку неактивынми
    $('.configurator__sidebar').css({'opacity':'1'}) //показываем сайдbар


    //Логика переключений кнопок
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


    //Записываем ID кнопок в переменные( по этим ключам будём дёргать данные из объекта )
    var mainId = main.children('.button-active').attr('id') || '';
    var mainAddId = mainAdd.children('.button-active').attr('id') || '';
    var specId = spec.children('.button-active').attr('id') || '';

    // var currentCourse = `${mainId}${specId}`
    // console.log(currentCourse)

   //Объект с данными
   //Структура вложенного объекта
   // ID кнопки :
   //     Верхний блок сайдбра:
   //        Заголовок
   //        Список
   //      Средний блок сайдбра:
   //        Заголовок
   //        Список
   //      Цена
   //      ССылка кнопки


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
        }
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
        }
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
        }
      },

      basic : {
        price : '3000 Р',
        buttonHref : '#order1'
      },
      advance : {
        price : '3000 Р',
        buttonHref : '#order2'
      },
      intensive : {
        price : '3000 Р',
        buttonHref : '#order3'
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
        price : '2500 Р',
        buttonHref : '#order4'
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
        price : '8000 Р',
        buttonHref : '#order5'
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
        price : '3500 Р',
        buttonHref : '#order6'
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
        price : '1000 Р',
        buttonHref : '#order7'
      }
    }



    // Изменяемые поля
    var descr1Heading = $('.sidebar__item1 p'),  //Заголовок 1-го списка
    descr1Ul = $('.sidebar__item1 ul'),          //1-ый список
    descr2Heading = $('.sidebar__item2 p'),      //Заголовок 2-го списка
    descr2Ul = $('.sidebar__item2 ul'),          //2-ый список
    price = $('.sidebar__num'),                  //Цена
    paymentButton = $('.pay__button-yandex'),    //Кнопка яндекс
    priceBlock = $('.sidebar__item3'),           //Весь блок с ценой
    payBlock = $('.pay');                        //Весь блок с кнопками

    //for render on button step1
    //Сработает на кнопках Шаг1
    function renderSidebarStep1(course){
      // Подставляем данные из объекта
      descr1Heading.text( sidebarData[course].descr1.heading);
      descr2Heading.text( sidebarData[course].descr2.heading);
      // И рендерим списки из массива
      var arrUl1 = sidebarData[course].descr1.ul.map((item)=> `<li class="animated fadeIn"> ${item}</li>`);
      var arrUl2 = sidebarData[course].descr2.ul.map((item)=> `<li class="animated fadeIn"> ${item}</li>`);
      descr1Ul.html(arrUl1);
      descr2Ul.html(arrUl2);
      //Если кнопка Шаг2 не нажата то скрыть цену и кнопки
      if(!mainAddId){
        priceBlock.css({'opacity':'0'});
        payBlock.css({'opacity':'0'});
      }
    }


    //for render on button step2
    //Сработает на кнопках Шаг2
    function renderSidebarStep2(course){
      //Показываем блоки
      priceBlock.css({'opacity':'1','transition':'opacity 1s'});
      payBlock.css({'opacity':'1','transition':'opacity 1s'});
      // Подставляем данные из объекта
      price.text( sidebarData[course].price);
      paymentButton.attr('href', sidebarData[course].buttonHref);
    }

    //for render on button step3
    //Сработает на кнопках Особые курсы
    function renderSidebarStep3(course){
      // Подставляем данные из объекта
      descr1Heading.text( sidebarData[course].descr1.heading);
      descr2Heading.text( sidebarData[course].descr2.heading);
      // И рендерим списки из массива
      var arrUl1 = sidebarData[course].descr1.ul.map((item)=> `<li class="animated fadeIn" > ${item}</li>`);
      var arrUl2 = sidebarData[course].descr2.ul.map((item)=> `<li class="animated fadeIn" > ${item}</li>`);
      descr1Ul.html(arrUl1);
      descr2Ul.html(arrUl2);

      priceBlock.css({'opacity':'1','transition':'opacity 1s'});
      payBlock.css({'opacity':'1','transition':'opacity 1s'});
      price.text( sidebarData[course].price);
      paymentButton.attr('href', sidebarData[course].buttonHref);
    }

    //Вызываем функции рендера в зависимости от нажатой кнопки
    if ($this.parent().hasClass('choose-main')){
      renderSidebarStep1(mainId);
    }
    else if ($this.parent().hasClass('choose-add')){
      renderSidebarStep2(mainAddId);
    }
    else if ($this.parent().hasClass('choose-special')){
      renderSidebarStep3(specId);
    }
  });


//Checkbox Согласен с условиями
  $('.pay_checkbox').click(function(){
      $(this).prop('checked') ? $('.pay__button').removeClass('button-disabled') : $('.pay__button').addClass('button-disabled');
  })



  //''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  //   <configurator/>
  //'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''


});
