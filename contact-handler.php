<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  http_response_code(405);
  exit("Method not allowed");
}

if (!empty($_POST["website"])) {
  http_response_code(200);
  exit("Thanks");
}

$name = trim($_POST["name"] ?? "");
$phone = trim($_POST["phone"] ?? "");
$type = trim($_POST["project_type"] ?? "");
$location = trim($_POST["location"] ?? "");
$message = trim($_POST["message"] ?? "");

if ($name === "" || $phone === "" || $type === "" || $message === "") {
  http_response_code(422);
  exit("Please complete the required fields.");
}

$to = "hnarchitects@gmail.com";
$subject = "New HN Architects inquiry: " . $type;
$body = "Name: $name\nPhone: $phone\nProject type: $type\nLocation: $location\n\nMessage:\n$message\n";
$headers = "From: website@hnarchitects.com\r\nReply-To: $to\r\n";

if (mail($to, $subject, $body, $headers)) {
  header("Location: /contact/?sent=1");
  exit;
}

http_response_code(500);
exit("Message could not be sent. Please contact us on WhatsApp.");
?>
