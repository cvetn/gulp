<?php
/****************
 * КОНФИГУРАЦИЯ *
 *************/

/** ПРОМОКОДЫ **/ // todo: реализовать проверку промокода через (jquery.validation) Ajax-запрос к app.mirofs.ru
$newSum     = $_POST['sum'];
$promocode  = $_POST['promo'];
$product_id = $_POST['product']; // invividual threemonths etc...
if ( isset( $promocode ) && $promocode != '' ) {
	$database = [
		'MIROFS12'     => [
			//'ptc'       => 10,
			'abs'       => 500,
			'active_to' => '2017-12-31 23:59:59'
		],
		'HAPPYNEWYEAR' => [
			'ptc'       => 33,
			'active_to' => '2018-01-08 00:00:00'
		]
	];
	if ( isset( $database[ $promocode ] ) ) {
		// Промокод найден
		if ( strtotime( $database[ $promocode ]['active_to'] ) > time() ) {
			// Если промокод еще активен
			if ( isset( $database[ $promocode ]['ptc'] ) && $database[ $promocode ]['ptc'] > 0 ) {
				// рассчитываем процентную скидку
				$newSum = $newSum - ( $newSum * $database[ $promocode ]['ptc'] ) / 100;
			}
			if ( isset( $database[ $promocode ]['abs'] ) && $database[ $promocode ]['abs'] > 0 ) {
				// рассчитываем абсолютную скидку
				$newSum = $newSum - $database[ $promocode ]['abs'];
			}
		}
	}
}

?>

<!DOCTYPE html>
<html lang="en" class="preloader-page">
<head>
    <title>Подождите...</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">


    <!-- Styles -->
    <style>
        .preloader-page {
            height: 100%;
        }

        .preloader-page body {
            height: 100%;
        }

        .preloader-page body img {
            position: absolute;
            left: 50%;
            top: 25%;
            margin-left: -32px;
            margin-top: -32px;
        }
    </style>

</head>
<body>

<img src="/img/preloader.gif" class="img-responsive center-block" alt="Подождите...">

<form action="https://money.yandex.ru/eshop.xml" id="payment_form" method="POST">
    <!---- Обязательные параметры --?>-->
    <input type="hidden" name="scid" value="101534">
    <input type="hidden" name="shopId" value="128456">
    <input type="hidden" name="sum" value="<?= $newSum ?>">
    <input type="hidden" name="customerNumber" value="<?= $_POST['email'] ?>">
    <!---- Остальные прааметры --?>-->
    <input type="hidden" name="name" value="<?= $_POST['firstname'] ?>">
    <input type="hidden" name="product" value="<?= $_POST['product'] ?>">
    <input type="hidden" name="email" value="<?= $_POST['email'] ?>">
    <input type="hidden" name="phone" value="<?= $_POST['phone'] ?>">
    <input type="hidden" name="course" value="<?= $_POST['course'] ?>">
    <input type="hidden" name="months" value="<?= $_POST['months'] ?>">
    <input type="hidden" name="trainer" value="<?= $_POST['trainer'] ?>">
    <input type="hidden" name="url" value="<?= $_POST['url'] ?>">
    <input type="hidden" name="event" value="<?= $_POST['event'] ?>">

    <input type="hidden" name="cps_email" value="<?= $_POST['email'] ?>">
    <input type="hidden" name="cps_phone" value="<?= $_POST['phone'] ?>">

    <input type=submit value="Нажмите, если переадресация не сработала" class="btn btn-default" style="position: absolute;left: 50%;transform: translate(-50%,0);top: 50%;">
</form>


<script type="text/javascript">
    window.onload = function () {
        setTimeout(function () {
            document.getElementById('payment_form').submit()
        }, 1)
    }
</script>


</body>
</html>