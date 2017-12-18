<?php

$book = $_POST['book'];
$email = $_POST['email'];
if($_POST['firstname']){
	$fName = $_POST['firstname'];
}
if($_POST['secondname']){
	$sName = $_POST['secondname'];
}
if(isset($fName) || isset($sName)){
	$fullName = $fName.' '.$sName;
} else {
	$fullName = 'no_name';
}
if (isset($_POST['phone'])) {
	$phone = preg_replace("/[^0-9]/", '', $_POST['phone']);
    $emails = array(
        array(
            'email' => $_POST['email'],
            'variables' => array(
                'name' => $fullName,
                'Phone' => $phone)
        ),
    );
} else {
    $emails = array(
        array(
            'email' => $_POST['email']
        )
    );
}
// Подключение API SendPulse
require_once('sendpulseInterface.php');
require_once('sendpulse.php');

// Авторизация - см. https://login.sendpulse.com/settings/#api
define('API_USER_ID', '10ffe2b33a9cc41523f67751ec3664ed');
define('API_SECRET', '148f726632e67cdcc3d016324687a5a4');
define('TOKEN_STORAGE', 'session');
$SPApiProxy = new SendpulseApi(API_USER_ID, API_SECRET, TOKEN_STORAGE);


/** ------------------- **/


// Проверяем почту на наличие в целевой книге
$checkTarget = $SPApiProxy->getEmailInfo($book, $email); // поиск имейла в книге
if (!$checkTarget->{'error_code'} == 502) { // почта есть в списке
    $SPApiProxy->removeEmails($book, [$email]); // удаляем
}
$SPApiProxy->addEmails($book, $emails); // добавляем


// Проверяем почту на наличие в книге АТОРАССЫЛКИ
$checkTarget = $SPApiProxy->getEmailInfo(1105217, $email); // поиск имейла в книге
if (!$checkTarget->{'error_code'} == 502) { // почта есть в списке
    $SPApiProxy->removeEmails(1105217, [$email]); // удаляем
}
$SPApiProxy->addEmails(1105217, $emails); // добавляем

echo 1;