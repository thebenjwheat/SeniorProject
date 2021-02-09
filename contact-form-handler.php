<?php
	$first_name = $_POST['name'];
	$last_name = $_POST['last_name'];
	$visitor_email = $_POST['email'];
	$message = $_POST['message'];

	$email_from = 'thebjw@uw.edu';

	$email_subject = "New Contact Form Submission";

	$email_body = "Name: $first_name $last_name.\n".
					"Email: $visitor_email.\n".
						"Message: $message.\n";

	$to = "thebjw@uw.edu";

	$headers = "From: $email_from \r\n";

	$headers .= "Reply-To: $visitor_email \r\n";

	mail($to,$email_subject,$email_body,$headers);

	header("Location: contact.html");

?>