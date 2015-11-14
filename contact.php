<?php
foreach($_POST as $key => $val) {
  $$key = htmlentities($val);
}

$to = 'jayney.wright@hotmail.co.uk';
$headers = "From: mailer@jabdah.net\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

switch ($type) {
	case 'arrange':
    $subject = 'Session Arrangement from Hypnotherapy Website';
    $body = "<strong>$name</strong> would like to arrange a hypnotherapy session and would like to be contacted in the <strong>$time</strong>.<br><br>They can be contacted at <strong>$contact</strong>.";
		$send = (!empty($name) || !empty($contact) || !empty($time)) ? true : false;
		break;
	case 'message':
    $subject = 'New Message from Hypnotherapy Website';
    $body = "<strong>$name</strong> has sent you a message on the Hypnotherapy website. They can be contacted at <strong>$contact</strong>.<br><br>$message";
		$send = (!empty($name) || !empty($contact) || !empty($message)) ? true : false;
		break;
}

if ($send == true)
{
	if (mail ($to, $subject, $body, $headers))
	{
		$response['status'] = 'success';
	} else {
		$response['status'] = 'fail';
	}
} else {
	$response['status'] = 'fail';
}

header('Content-type: application/json');
echo json_encode($response);
?>
