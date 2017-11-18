// =======================================================================================
//                                        PRODUCT
// =======================================================================================

$.get('/product/legginsy-odnotonnye-svetlo-serye.json')
.done(function (product) {
  console.log(product);
})

$(function(){
  // обновляем инфу, после смены модификации
  Events( 'onProductOption_Changed' ).subscribe( function( $data ){
    var
    variant           = $data.variant,
    $js_buy           = $( '.js-product-buy' ),
    $js_sku           = $( '.js-product-sku' ),
    $js_sku_text      = $( '.js-product-sku_field' ),
    $js_price_current = $( '.js-prices-current' ),
    $js_price_old     = $( '.js-prices-old' ),
    $js_presence      = $( '.js-product-presence' );

    if( variant ){
      if( variant.sku ){
        $js_sku.show();
        $js_sku_text.html( variant.sku );
      } else {
        $js_sku.hide();
      }
    }

    if( variant && variant.available === true ){
      // selected a valid variant
      $js_price_current
      .html( InSales.formatMoney( variant.price ) );
      $js_price_old.html( InSales.formatMoney( variant.old_price ) );
      $js_presence
      .removeClass( 'product-presence_field--sell_off' )
      .html( 'Есть в наличии' );

      if(variant.title == "Выберите размер"){
        $js_buy
        .html( 'Нет в наличии' )
        .addClass( 'button--disabled' )
        .prop( 'disabled', true );
      }
      else if( Site.product.buy_button == 'block' ){
        $js_buy
        .html( 'В корзину' )
        .removeClass( 'button--disabled' )
        .prop( 'disabled', false );
      }
      else if( Site.product.buy_button == 'buy' ){
        $js_buy
        .html( 'В корзину' );
      }

    }else{
      // variant doesn't exist
      if( Site.product.buy_button == 'block' ){
        $js_buy
        .html( 'Нет в наличии' )
        .addClass( 'button--disabled' )
        .prop( 'disabled', true );
      }
      else if( Site.product.buy_button == 'buy' ){
        $js_buy
        .html( 'Под заказ' );
      }

      if( variant ){
        $js_presence
        .addClass( 'product-presence_field--sell_off' )
        .html( 'Нет в наличии' );
        $js_price_current
        .html( InSales.formatMoney( variant.price ) );
        $js_price_old
        .html( InSales.formatMoney( variant.old_price ) );
      }else{
        $js_presence
        .html( '' );
        $js_price_current
        .html( 'Модификация отсутсвует' );
        $js_price_old
        .html( '' );
      }
    }
  });

  $( '.quantity' )
  .quantity();

  Events( 'onBuyButton_Active' ).subscribe( function( $data ){
    //console.log( 'onBuyButton_Active: ', $data );
  });

  Events( 'onBuyButton_Inactive' ).subscribe( function( $data ){
    //console.log( 'onBuyButton_Inactive: ', $data );
  });
});

// ============================================================================================
//                                      PRODUCT GALLERY
// ============================================================================================

// MagicZoomPlus

var mzOptions = {
  //zoomMode: 'magnifier',
  rightClick: true,
  hint: 'always',
  textHoverZoomHint: 'Наведите для увеличения',
  textClickZoomHint: 'Нажмите для увеличения',
  textExpandHint: 'Полноэкранный просмотр',
  textBtnClose: 'Закрыть',
  textBtnPrev: 'Предыдущее',
  textBtnNext: 'Следующее',
  smoothing: false,
};

var mzMobileOptions = {
  textHoverZoomHint: 'Нажмите для увеличения',
  textClickZoomHint: 'Дважды нажмите для увеличения',
  textExpandHint: '',
  smoothing: false,
};

$(function(){
  $( '.js-product_gallery-preview_image' ).on( 'tap', function( e ){
    e.preventDefault();

    var $preview = $(this).parents( '.gallery-image:first' );
    var large = $preview.data( 'image' );
    var original = $preview.attr( 'href' );

    //MagicZoom.update( 'MagicZoom', large, original );
    setTimeout( function(){
      MagicZoom.expand( 'MagicZoom' );
      console.log( 'open' );
    }, 1000 );
  });
});
