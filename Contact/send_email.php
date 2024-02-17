<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "allanloic05@gmail.com";
    $subject = "Contact Form Submission";
    $txt = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email";

    mail($to, $subject, $txt, $headers);
    echo "Thank you for your message!";
} else {
    header("Location: index.php");
    exit();
}
?>
