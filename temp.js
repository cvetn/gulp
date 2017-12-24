<?php
/**
 * @version    $Id: index.php 17268 2010-05-25 20:32:21Z a.radtke $
 * @package    Joomla.Site
 * @subpackage  Templates.beez5
 * @copyright  Copyright (C) 2005 - 2011 Open Source Matters, Inc. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE.txt
 */

// No direct access.
defined('_JEXEC') or die;

JHtml::_('behavior.framework', true);

JHtml::_('behavior.framework', true); //Отключить mootools

// get params
$app      = JFactory::getApplication();
$doc      = JFactory::getDocument();
$templateparams  = $app->getTemplate(true)->params;
$menu = & JSite::getMenu();
$menu_active = $menu->getActive();
$m2 = $menu_active->params;

include_once JPATH_BASE.'/plugins/alkodesign/geoip/geoip.php';
//ini_set('display_errors', 'On');
plgGeoIp::initCookie();
$cityIdFromCookie = plgGeoIp::getCityFromCookie();
$cityId = plgGeoIp::getCityId();
$cityName = plgGeoIp::getCityName($cityId);
$cityList = plgGeoIp::getCityList();
?><!DOCTYPE html>
<html lang="<?php echo $this->language; ?>" dir="<?php echo $this->direction; ?>" >
  <head>
    <link href="http://fonts.googleapis.com/css?family=Ubuntu:400,700,700italic,400italic&amp;subset=latin,cyrillic" rel='stylesheet' type='text/css'/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js" type="text/javascript"></script>
      <script>
          window.jQuery17 = $;
      </script>
  <link rel="stylesheet" href="/templates/optika/js/fancybox/jquery.fancybox.css" type="text/css" />
      <?
      if ( strlen( $this->base ) ) {
          $parts = parse_url($this->base);
          if ($parts['path'] === '/kontakty-msc' || $parts['path'] === '/kontakty-ek' || $parts['path'] === '/kontakty-nn' || $parts['path'] === '/kontakty-spb' || $parts['path'] === '/kontakty' || JSite::getMenu()->getActive() == JSite::getMenu()->getDefault()) {
              ?><script src="//api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script><?
          }
      }
    ?>
    <?php unset($this->_generator); ?>
  <jdoc:include type="head" />

    <link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/optika/css/ikSelect.css" type="text/css" />
    <link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/optika/css/form_temp.css" type="text/css" />
    <link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/optika/css/template.css?v=10" type="text/css" />

<script type="text/javascript">
function openbox(id){
    display = document.getElementById(id).style.display;
    if(display=='none'){
       document.getElementById(id).style.display='block';
    }else{
       document.getElementById(id).style.display='none';
    }
}
</script>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-93837620-1', 'auto');
  ga('send', 'pageview');

</script>
<script type="text/javascript">
var __cs = __cs || [];
__cs.push(["setCsAccount", "rYaiirrlns_YfogagoPANr6kAq_XBG32"]);
</script>
<script type="text/javascript" async src="//app.comagic.ru/static/cs.min.js"></script>
</head>
<?php
$bodyClass = ( is_object($menu) && is_object($m2) ) ? $m2->get('pageclass_sfx') : '';

if ($menu->getActive() == $menu->getDefault())
{
    ?><body id="index" class="<?=$bodyClass?>"><?php
} else {
    ?><body class="<?=$bodyClass?>"><?php
} ?>
<div id="textsize">
<jdoc:include type="modules" name="popup" style="popup"/>
<div id="qst_city_modal" class="modal_block">
    <div class="fbm_head">Приветствуем на нашем сайте!</div>
    <div class="fbm_city">Ваш город - <span class="city_auto_val"><?=$cityName;?></span> ?</div>
    <div class="fbm_confirm_btns">
      <form action="" method="POST">
        <input type="hidden" placeholder="" name="city" value="<?=$cityId?>">
        <button class="confirm_btn1" style="cursor:pointer;">Да</button>
        <a class="confirm_btn2" href="#type_city_modal">Я из другого города</a>
      </form>
    </div>
    <form action="" method="POST">
      <div class="fbm_city_input">

        <!-- HEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRRRRRREEEEEEEEEEEEEEEEEEE-->


        <input type="hidden" placeholder="" id="search-city-id" name="city">
        <input type="text" placeholder="Название вашего города" id="search-city" name="city-name" autocomplete="Off">
        <ul id="search-helpel-list" class="search-helpel-list"></ul>
      </div>
      <div class="fbm_confirm_btns">
        <button class="confirm_btn3" id="search-city-button">Применить</button>
      </div>
    </form>
</div>
<div class="body_bg">
<div id="top">

                <div class="box">
                    <div itemscope itemtype="http://schema.org/Organization">
                        <meta itemprop="name" content="Мега-Оптика">
                        <meta itemprop="alternateName" content="Черника Оптика">
                        <meta itemprop="telephone" content="+7 (812) 938-15-32">
                        <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
                            <meta itemprop="addressLocality" content="Санкт-Петербург">
                            <meta itemprop="streetAddress" content="ул. 1-я Красноармейская, дом 8-10">
                         </div>
                        <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
                            <meta itemprop="addressLocality" content="Санкт-Петербург">
                            <meta itemprop="streetAddress" content="пр. Просвещения, дом 32к1">
                         </div>
                    </div>
                    <?php if($cityId == 2287) { ?>
                    <div class="top_city">
                        <div class="city_select">
                            <div class="txt">Ваш город:</div>
                            <a href="#qst_city_modal" class="city"><?=$cityName;?></a>
                      </div>
                  </div>
                  <ul class="top_adreses" style="height: 88px">
                    <div class="tel-left" style="padding-top: 5px;float:left;background:none;padding-left:0px;line-height:19px;">
                      <a href="/"><img src="/images/g12.png" height="40" alt="Черника Оптика" style="opacity:1"></a>
                    </div>
                    <li style="padding-top:10px;margin:0px;width:260px;"><a href="/" style="color:#4d4e53;text-decoration:none;">
                      <img src="/images/adress-mark.png" alt="" style="float:left;">
                      <p style="font:italic 15px Georgia;">СПб, 1-я Красноармейская, 8-10</p>
                      <p style="margin-top:4px;font:13px Arial;">м.Технологический Институт</p></a>
                    </li>
                    <li class="moduletable-tel" style="margin-left:35px;position:relative;padding-top:5px;">
                      <div style="font-size: 15px;height:10px;position:absolute;top:-40px;left:130px;">ГРУППА КОМПАНИЙ</div>  <div class="clr"></div>
                      <!-- <div class="knopka-vk" style="padding-left:30px;width:135px;top:-17px;position: relative;">
                              <a href="/"><img src="/images/logo2.png" width="140" alt="Мега Оптика" style="opacity:1"></a>
                          </div> -->

                      </li>
                      <li style="width:230px;padding-top:10px;margin:0px;"><a href="/" style="color:#4d4e53;text-decoration:none;">
                        <img src="/images/adress-mark.png" alt="" style="float:left;">
                        <p style="font:italic 15px Georgia;">СПб, пр. Просвещения 32к1</p>
                        <p style="margin-top:4px;font:13px Arial;">м.Проспект Просвещения</p></a>
                      </li>

                    </ul>
                    <div class="clr"></div>
                    <?php } elseif($cityId == 2097) { ?>
                        <ul class="top_adreses" style="padding:0;">
                            <li style="padding-top:15px;padding-left:15px;margin:0px;">
                                <a href="/" style="color:#4d4e53;text-decoration:none;"><img src="/images/g12.png" alt="" style="float:left;"></a>
                            </li>
                            <li style="padding-top:20px;padding-left:23px;margin:0px;width:350px;text-align:center;">
                                  <p style="font:italic 15px Georgia;">ул. Бутырский Вал д. 4, 1 минута пешком от м.Белорусская (Кольцевая)</p>
                                  <p class="head-parking"><a href="/kontakty-msc"><img src="/images/parking_2.jpg" alt="Оплачиваем парковку нашим клиентам"> Оплачиваем парковку нашим клиентам</a></p>
                            </li>
                            <li style="width:auto;padding-top:25px;margin:0px;float:right;">
                                <div class="top_city" style="position: relative;">
                                    <div class="city_select">
                                        <span class="txt">Ваш город: </span>
                                        <a href="#qst_city_modal" class="city"><?=$cityName;?></a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div class="clr"></div>
                    <?php } else { ?>
                    <ul class="top_adreses" style="padding:0;">
                      <li style="padding-top:15px;padding-left:15px;margin:0px;">
                        <a href="/" style="color:#4d4e53;text-decoration:none;"><img src="/images/g12.png" alt="" style="float:left;"></a>
                      </li>
                      <li style="width:auto;padding-top:25px;margin:0px;float:right;">
                        <div class="top_city" style="position: relative;">
                            <div class="city_select">
                                <span class="txt">Ваш город: </span>
                                <a href="#qst_city_modal" class="city"><?=$cityName;?></a>
                            </div>
                        </div>
                      </li>
                    </ul>
                    <div class="clr"></div>
                    <?php } ?>
                </div>
            </div>


<div id="header" style="z-index: 999;">
  <div class="box">
  <div class="pad clr">

   <!-- <div class="moduletable-nav">

<ul class="menu-nav evo-changes" style="margin:0px 0px 0px 20px;">
  <?php
  if($cityId == 2287 || $cityId == 2097)
  { ?>
<li class="item-125"><a class="icon_sale" href="/poluchit-skidku" >Получить Мега-скидку</a></li>
<?php } ?>
<li class="item-124"><a class="icon_hit" href="/bestsellers" >Хиты продаж</a></li>
<?php if($cityId == 2287 || $cityId == 2097) { ?>
<li class="item-126"><a class="icon_sertifikat" href="/podarochnyj-sertifikat" >Подарочный сертификат</a></li>
<?php } ?>
<li class="item-127"><a class="icon_sertifikat" href="https://vk.com/chernikaoptika" target="_blank" style="background-image:url('/images/any-pict/v-wb.png');">Группа Вконтакте</a></li>
<?php if($cityId != 2287 && $cityId != 2097) { ?>
<li class="item-186"><a href="/oplata-i-dostavka" style="background:url('/images/any-pict/delivery.png') no-repeat center 0;">Оплата и доставка</a></li>
<?php } ?>
<?php
if($cityId != 2287 && $cityId != 2097){
jimport('joomla.application.component.model');
require_once (JPATH_SITE.DS.'components'.DS.'com_jshopping'.DS."lib".DS."factory.php");
require_once (JPATH_SITE.DS.'components'.DS.'com_jshopping'.DS."lib".DS."functions.php");
JSFactory::loadCssFiles();
JSFactory::loadLanguageFile();
$jshopConfig = JSFactory::getConfig();
JModel::addIncludePath(JPATH_SITE.DS.'components'.DS.'com_jshopping'.DS.'models');
$cart = JModel::getInstance('cart', 'jshop');
$cart->load("cart");
$prodCount = count($cart->products);
?>
<li class="item-128">
<a class="icon_cart" href="/cart/view/" style="background: url('../images/186387.png') no-repeat 1px 4px;">Корзина</a>
</li>
<span class="cart-counter"><?=$prodCount ? $prodCount : '';?></span>
<?php } ?>
<li class="top-phones comagic" style="line-height:56px;padding-left:<?php if($cityId == 2287) { echo 60; } elseif($cityId == 2097) { echo 65; } else {  echo 160; } ?>px;">
  <?php
  if($cityId == 2287)
  {
  ?>
    <div>
        <a href="tel:+78124081532" style="padding:0;border:0;">8 (812) 408-15-32</a>
    </div>
    <div>
        <a href="tel:+78003023289" style="padding:0;border:0;">8 (800) 302-32-89</a>
    </div>
  <?php
  }elseif($cityId == 2097){
  ?>
    <div>
        <a href="tel:+74950082828" style="padding:0;border:0;">8 (495) 008-28-28</a>
    </div>
    <div>
        <a href="tel:+78003023289" style="padding:0;border:0;">8 (800) 302-32-89</a>
    </div>
<?php
  }else{
  ?>
    <div>
        <a href="tel:+78003023289" style="padding:0;border:0;"><span style="font:italic 27px/48px Georgia;">8 (800) 302-32-89</span></a>
    </div>
<?php } ?>
</li>
</ul>
</div>
<?php
if($cityId == 2287 || $cityId == 2097)
{
?>
<style>
      ul.menu-tmenu li {
    margin: 0 0 0 25px;
}
ul.menu-tmenu {
  padding-left: 35px;
}
</style>
  <?php
}
?>
    -->
<div class="moduletable-tmenu">

<ul class="menu-tmenu">
    <li class="item-332 deeper parent"><a class="orange" href="/eyeglass-frames">Оправы</a>
        <ul>
            <li class="item-344"><a href="/eyeglass-frames">Оправы 2017</a></li>
            <li class="item-400"><a href="/sale">Sale 2015-2016</a></li>
            <li class="item-345"><a href="/childrens-glasses">Детские очки</a></li>
            <li class="item-346"><a href="/sports-glasses">Спортивные очки</a></li>
            <li class="item-343"><a class="icon_hit" href="/bestsellers">Хиты продаж</a></li>
        </ul>
    </li>
    <li class="item-331 deeper parent"><a class="orange" href="/sunglasses">Солнцезащитные очки</a>
        <ul>
            <li class="item-333"><a href="/sunglasses">Солнцезащитные очки</a></li>
            <li class="item-401"><a href="/sale-sunglass">Sale 2016</a></li>
            <li class="item-342"><a href="/sports-glasses">Спортивные очки</a></li>
        </ul>
    </li>
      <li class="item-119 deeper parent"><a href="/linzy">Линзы</a>
        <ul>
            <li class="item-309"><a href="/linzy">Все о линзах</a></li>
            <li class="item-311"><a href="/linzy4/price-lens">Прайс-лист</a></li>
        </ul>
    </li>
    <li class="item-186"><a href="/nashi-brendy">Бренды</a></li>
    <li class="item-120"><a class="orange" href="/aktsii">Акции</a></li>
    <!-- <li class="item-121"><a href="/otzyvy">Отзывы</a></li> -->
     <!-- <li class="item-118"><a href="/o-nas">О нас</a></li> -->
  <li class="item-124"><a href="/bestsellers">Хиты продаж</a></li>
  <li class="item-125" style="background-color: #e6cb00;padding: 0 10px;"><a href="/poluchit-skidku">Получить Мега-скидку</a></li>


   <!-- <li class="item-123">
         <?php
        if($cityId == 2097) {
            ?><a href="/kontakty-msc">Контакты </a><?php
        } else {
            ?><a href="/kontakty">Контакты </a><?php
        }
        ?>

    </li>
      -->
</ul>
        </div>


    <div class="clr"></div>
  </div>

  <?php if ($this->countModules('toph1')){  ?>
  <jdoc:include type="modules" name="toph1" style="xhtml" />
  <?php } ?>
  <?php if($this->countModules('slide-' . $cityId)) { ?>
      <jdoc:include type="modules" name="slide-<?=$cityId?>" style="xhtml" />
  <?php } else { ?>
      <jdoc:include type="modules" name="slide" style="xhtml" />
  <?php } ?>
  </div>
</div>
<?php if ($this->countModules('breadcrumbs')){  ?>
<div id="bread">
  <div class="box">
    <jdoc:include type="modules" name="breadcrumbs" style="xhtml2" headerlevel="3" />
  </div>
</div>
<?php } ?>
<?php if ($this->countModules('breadcrumbs2')){  ?>
<div id="bread2">
  <div class="box">
    <jdoc:include type="modules" name="breadcrumbs2" style="xhtml2" headerlevel="3" />
  </div>
</div>
<?php } ?>

<div id="center">
    <div class="box"<?php if(JSite::getMenu()->getActive() == JSite::getMenu()->getDefault()) { ?> style="padding-bottom:20px!important;"<?php } ?>>

    <div id="page_title"><span></span></div>

    <?php if ($this->countModules('left')){ $noleft = ""; ?>
    <div id="left">
      <jdoc:include type="modules" name="left" style="xhtml2" headerlevel="3"/>
    </div>
    <?php }else{ $noleft = "noleft"; } ?>

    <?php if ($this->countModules('right')){ $noright = ""; ?>
    <div id="right">
      <jdoc:include type="modules" name="right" style="xhtml2" headerlevel="3"/>





    </div>
    <?php }else{ $noright = "noright"; } ?>

    <div id="content" class="<?php echo $noleft." ".$noright; ?>">

    <jdoc:include type="modules" name="tcont" style="xhtml" headerlevel="3"/>

      <jdoc:include type="component" />
    <jdoc:include type="modules" name="bcont" style="xhtml" headerlevel="3"/>
    <?php if($this->countModules('prod_desc') && JRequest::getVar("controller") == "product" && JRequest::getVar("option") == "com_jshopping"){ ?>
    <div class="prod_desc">
  <?php if($this->countModules('prod_desc-' . $cityId)) { ?>
        <jdoc:include type="modules" name="prod_desc-<?=$cityId?>" style="xhtml" headerlevel="3"/>
  <?php } else { ?>
        <jdoc:include type="modules" name="prod_desc" style="xhtml" headerlevel="3"/>
  <?php } ?>
    </div>
    <?php } ?>
    <div class="clr"></div>
    </div>

    <jdoc:include type="modules" name="position-0" style="xhtml" headerlevel="3"/>
    <div class="clr"></div>
  </div>
<?php if(JSite::getMenu()->getActive() == JSite::getMenu()->getDefault()) { ?>
<div class="box" style="padding-bottom:100px!important;">
<?php if($cityId == 2287) { ?>
    <div class="item-page contacts" style="background-color: #fff;">
  <h2 class="h1" style="background:url('/templates/optika/images/title_bg.jpg') repeat-x 0 100%;height:65px;overflow:hidden;padding:0 70px;font:italic 24px/85px Georgia;color:#005095;">Контакты</h2>
<div class="pad">
<?php
$article =& JTable::getInstance("content");
$article->load(9);
$text = $article->get('introtext');

$s =  strpos($text, '<div class="nomain">');
if($s !== false) {
    //$e = strpos($text, '</div class="nomain">', $s);

    //text = mb_substr($text, 0, $s) . mb_substr($text, $e + 6, mb_strlen($text));
    $text = substr_replace($text, '', $s);
}

echo str_replace(array('<noindex>', '</noindex>'), '', $text);
?></div></div>
    <div class="clr"></div>
</div>
<?php } echo '';?>
</div>
<?php }?>

<?php if ($this->countModules('bottom')): ?>
<div id="bottom">
  <div class="box">
    <jdoc:include type="modules" name="bottom" style="xhtml" headerlevel="3"/>
  </div>
</div>
<?php endif; ?>
</div>
<?php if($cityId != 2287 && $cityId != 2097) { ?>
<style>
 ul.menu-nav li.item-125 {
     display: none;
 }
</style>
<?php } ?>
<?php if ($this->countModules('footer')): ?>
<div style="clear: both; height: 60px;"></div>
<div id="footer">
  <div class="box">
  <div class="pad">
    <jdoc:include type="modules" name="footer" style="xhtml" headerlevel="3"/>
    <div class="clr"></div>
  </div>
  </div>
</div>
<?php endif; ?>

    <jdoc:include type="modules" name="debug" />

<?php if ($this->countModules('concurs')): ?>
  <div class="concurs">
    <jdoc:include type="modules" name="concurs" />
  </div>
<?php endif; ?>

<?php if ($this->countModules('bottom-right')): ?>
  <div class="bottom-right">
    <jdoc:include type="modules" name="bottom-right" />
  </div>
<?php endif; ?>


  <div style="width:100px; height:50px; margin:0 auto;">
<!-- Yandex.Metrika counter -->
<script type="text/javascript">
(function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter24545261 = new Ya.Metrika({id:24545261,
                    webvisor:true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true});
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="//mc.yandex.ru/watch/24545261" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
  </div>

</div>

<link rel="stylesheet" href="//cdn.callbackhunter.com/widget/tracker.css" type="text/css" property="stylesheet">
<script type="text/javascript" src="//cdn.callbackhunter.com/widget/tracker.js" charset="UTF-8"></script>
<script type="text/javascript">var hunter_code="4c0787e8ca5405050e59c868f393e57b";</script>
<div style="display: none;" id="overlay">{rsform 10}</div>
<script>

    $(window).load(function() {
      <?php
        if($cityIdFromCookie == FALSE )
        {
          ?>
            if($('title').html() != '404'){
                $.fancybox.open([{
                    href : '#qst_city_modal'
                }],{
                    padding     : 25,
                    fitToView   : false,
                    width       : 500,
                    height      : 140,
                    autoSize    : true,
                    closeClick  : false,
                    openEffect  : 'none',
                    closeEffect : 'none',
                    tpl: {
                        closeBtn: '<a title="Close" class="fancybox-item fancybox-close city_close_btn" href="javascript:;"></a>',
                        wrap    : '<div class="fancybox-wrap wrap_custom_top" tabIndex="-1"><div class="fancybox-skin fb_skin_city"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                    },
                    helpers:  {
                        overlay : {
                            closeClick : false,
                            css        : {'background': 'none', 'overflow-y': 'auto'},
                            locked : false
                        }
                    }
              });
            }
            <?php
        }
      ?>
        $('body').css({'overflow': 'auto'});
        $('#open-form').click(function(){
            $('#online_bron').show();
            document.location.href='#online_bron';
            return false;
        });

        $('.open-sale-form').click(function () {
            $('#sale_popup').show();
            $('#overlay').show();
            $('body').css({'overflow': 'hidden'});

            $('#sale_popup .popup_close').click(function () {
                $('#sale_popup').hide();
                $('#overlay').hide();
                $('body').css({'overflow': 'auto'});
            });
      });
    });
</script>
<!--noindex--><div style="display: none;" id="overlay"><form method="post"  id="userForm" enctype="multipart/form-data" action="/sunglasses/v-yudashkin-4778-c05">
    <div id="sale_popup" style="display:none;">
          <div class="popup_close"><a href="/" onclick="return false;">x</a></div>
          <p class="popup_header">Получить скидку на очки</p>
          <p>Чтобы получить скидку Вам необходимо записаться на удобные для вас день и время в наш салон</p>
          <p class="big-text" style="margin-bottom: 30px">Бронируйте скидку</p>
          <div style="margin-bottom: 30px">
              <div class="inline-block">
                  <p>По телефону:</p>
                  <p>&nbsp;</p>
                  <p class="big-text comagic">+7 (812) 938-1532</p>
              </div>
              <div class="inline-block" style="margin: 0 40px;">
                  <p>&nbsp;</p>
                  <p>или</p>
                  <p>&nbsp;</p>
              </div>
              <div class="inline-block">
                  <p>Через наш сайт</p>
                  <p>&nbsp;</p>
                  <p>
                      <button id="open-form" onclick="return false;">Заполнить форму</button>
                  </p>
              </div>
          </div>
          <p style="padding: 0 200px">Таким образом мы хотим уделить каждому клиенту время необходимое для бесплатной проверки зрения, подбора линз, оправ и солнцезащитных очков.</p>
          <p class="small-text" style="font-style: italic">*Скидка на оправы предоставляется только при заказе очков (оправа + линзы).</p>
          <div class="mass_box text-bottom"><div class="bg"><p>Клиентам, пришедшим в магазин без предварительной записи, скидки не предоставляются!</p></div></div>
          <div id="online_bron" style="display:none;">
<div class="form_title"><span>On-line бронирование скидки</span></div>
<div class="pad">
<div class="desc">Для того, чтобы получить скидку и бесплатную проверку зрения Вам необходимо записаться на посещение магазина через данную форму, либо позвонить по телефону 938-15-32. В течение 12 часов, после отправки заявки, наш менеджер свяжется с Вами и подтвердит бронь. Скидка на оправы предоставляется только при заказе очков (оправа + линзы).</div>

<div class="fleft_box">
<input type="hidden" name="form[url]" id="url" value="<?=$doc->getBase()?>"  />
  <div class="formField rsform-block rsform-block-name">
    Ваше имя*:<br/>
    <input type="text" value="" size="20"  name="form[name]" id="name"  class="rsform-input-box"/><br/>
    <span id="component77" class="formNoError">Вы не указали своё Имя.</span>

  </div>
  <div class="formField rsform-block rsform-block-tel">
    Ваш телефон*:<br/>
    <input type="text" value="" size="20"  name="form[tel]" id="tel"  class="rsform-input-box"/><br/>
    <span id="component76" class="formNoError">Вы не указали номер телефона.</span>

  </div>
  <div class="formField rsform-block rsform-block-mail">
    Ваш e-mail:<br/>
    <input type="text" value="" size="20"  name="form[mail]" id="mail"  class="rsform-input-box"/><br/>
    <span id="component75" class="formNoError">Не верно указан e-mail адрес</span>

  </div>
  <div class="formField rsform-block rsform-block-address">
    Адрес*:<br/>
    <select  name="form[address][]" size="1" id="address"  class="rsform-select-box" ><option  value="Выберите Салон">Выберите Салон</option><option  value="Черника Оптика (м. Пр. Просвещения)">Черника Оптика (м. Пр. Просвещения)</option><option  value="Мега Оптика (м. Технологический ин-т)">Мега Оптика (м. Технологический ин-т)</option></select><br/>
    <span id="component81" class="formNoError">Не выбран салон.</span>

  </div>
  <div class="formField rsform-block rsform-block-time">
    Предполагаемая дата и время посещения:<br/>
    <input type="text" value="" size="20"  name="form[time]" id="time"  class="rsform-input-box"/><br/>
    <span id="component74" class="formNoError">Не указано время посещения</span>

  </div>
<div class="info_text">
* Поля, обязательные для заполнения
</div>
  <div class="formField rsform-block rsform-block-submit">
    <input type="submit" value="Отправить" name="form[submit]" id="submit"  class="rsform-submit-button" />
  </div>
</div>
<div class="fright_box">
<h5>ВНИМАНИЕ!</h5>
<p>Если в течение 12 часов менеджер с Вами не связался - звоните по телефону 938-15-32 для подтверждения скидки! </p>
</div>
<div class="info_text2">Время работы: ПН-ПТ с 10:00 - 20:00 СБ-ВС, Выходные и праздничные дни с 11-00 до 19-00</div>
</div>
<div style="clear:both; padding-bottom: 50px;"></div>
</div>
</div><input type="hidden" name="form[formId]" value="10"/></form>
</div><!--/noindex-->
  <?
  if ( false ) {
      ?><script>
          jQuery(function(){
              var $popup = jQuery("#popup-moscow-discount");
              $popup.fancybox({closeClick  : false});
              $popup.click();
          });
      </script>
      <?php
      }
  ?>
<script src="/templates/optika/js/fancybox/jquery.fancybox.js" type="text/javascript"></script>
<script src="<?php echo $this->baseurl ?>/templates/optika/js/jquery.cookie.js" type="text/javascript"></script>
<script src="<?php echo $this->baseurl ?>/templates/optika/js/jquery.carouFredSel-5.6.2-packed.js" type="text/javascript"></script>
<script src="<?php echo $this->baseurl ?>/templates/optika/js/jquery.hoverIntent.minified.js" type="text/javascript"></script>
<script src="<?php echo $this->baseurl ?>/templates/optika/js/index.min.js" type="text/javascript"></script>
<script src="<?php echo $this->baseurl ?>/templates/optika/js/main.js?v=9" type="text/javascript"></script>
      <script>
        var cityList = <?=  json_encode($cityList)?>;
        </script>
<div id="popup-system-message" style="display:none"><?=$this->getBuffer('message')?></div>
</body>
</html>



$(function() {
  setInterval(function(){
  if ($('.fancybox-wrap').css('opacity')==1){
       var PopMl = $('.box').css('marginLeft');
       $('.fancybox-wrap.wrap_custom_top').css('left', PopMl);
    console.log(123)
}},100)

});


    text-shadow: rgba(0, 0, 0, 1) 1px 7px 4px;
