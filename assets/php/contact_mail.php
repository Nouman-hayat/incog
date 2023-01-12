<?php
/*
* Contact us form mail
*/
?>

<?php

    if (isset($_POST['contact_me'])) {
        $to = 'cristianstaan@gmail.com';
        $form_user_name = $_POST['user_name'];
        $form_user_last_name = $_POST['user_last_name'];
        $form_user_email = $_POST['user_email'];
        $form_comment = $_POST['user_message'];

        $message = '';
        $message .= "From: " .  $form_user_name . " " . $form_user_last_name . "\r\n";
        $message .= "Email: " . $form_user_email . "\r\n" . "\r\n";
        $message .= $form_comment . "\r\n";


        $headers = 'From: ' . $form_user_name . ' ' . $form_user_last_name .'<'. $form_user_email . '>';
        if( mail( $to, $message, $headers ) ) {
            echo "<p>Your email has been sent! Thank you</p>";
        }else{
            echo "<p>ERROR! Thank you</p>";
        }
    }else{
            echo "<p>22 - ERROR! Thank you</p>";

    }

?>