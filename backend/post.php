<?php
// CSV function
function writeInCsv($filePath, $val, $delimiter = ';', $endOfRow = "\n")
{

    if (file_exists($filePath)) {
        $file = fopen($filePath, "a+");
    } else {
        $file = fopen($filePath, "a+");
        fseek($file, 0);
        fputs($file, $bom = (chr(0xEF) . chr(0xBB) . chr(0xBF)));
    }

    if (is_array($val)) {
        foreach ($val as $key => $row) {
            $rowLength = count($row);
            for ($i = 0; $i < $rowLength; $i++) {
                if ($i + 1 == $rowLength) {
                    fwrite($file, $row[$i] . $endOfRow);
                } else {
                    fwrite($file, $row[$i] . $delimiter);
                }
            }
        }
    } elseif (is_string($val)) {
        fwrite($file, $val);
    }

}

// переменные, полученные из форм на сайте

if (isset($_REQUEST["firstname"])) {
    $name = $_REQUEST["firstname"];
} else {
    $name = '-';
};

if (isset($_REQUEST["email"])) {
    $email = $_REQUEST["email"];
} else {
    $email = '-';
};

if (isset($_REQUEST["course"])) {
    $course = $_REQUEST["course"];
} else {
    $course = '-';
};

$subject = "Заявка с сайта mirofs.ru";

if (isset($_REQUEST["event"])) {
    $subject .= ": " . $_REQUEST["event"];
}

require_once("include/PHPMailerAutoload.php");

$mail = new PHPMailer();
$mail->CharSet = 'utf-8';

$email_body = "";
$email_body = $email_body . "<p>Имя:</p><h2>" . $name . "</h2><p>Email:</p><h2>" . $email . "</h2><p>Курс:</p><h2>" . $course . "</h2>";

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';                       // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'mirofs.ru@yandex.ru';        // SMTP username  // todo: change address
$mail->Password = 'yjDff8PN';                         // SMTP password // todo: change password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to

$mail->From = 'mirofs.ru@yandex.ru'; // todo: change address
$mail->FromName = 'MIROFS.RU'; // todo: change name

$mail->AddAddress('online@mirofs.ru', 'MIROFS.RU'); // todo: change address and name


$mail->Subject = $subject; // todo: change name
$mail->MsgHTML($email_body);

if (!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
    exit;
} else {
    echo '1';
    $datenow = date('Y-m-d');
    $timenow = date('H:i:s');
    $inputspace2 = $datenow . ";" . $timenow . ";" . $name . ";" . $email . ";" . $course . "\n";

    writeInCsv('../leads.csv', $inputspace2, $delimiter = ';', $endOfRow = "\n");
}