<?php $name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "stiles.billy@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
header('Location:'.$_SERVER['index.html']);
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>