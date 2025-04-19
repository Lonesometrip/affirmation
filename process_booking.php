<?php
header('Content-Type: application/json');

// Replace with your email address
$admin_email = "your-email@domain.com";

// Get form data
$service = $_POST['service'] ?? '';
$vehicle = $_POST['vehicle'] ?? '';
$passengers = $_POST['passengers'] ?? '';
$date = $_POST['date'] ?? '';
$time = $_POST['time'] ?? '';
$pickup = $_POST['pickup'] ?? '';
$destination = $_POST['destination'] ?? '';
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$phone = $_POST['phone'] ?? '';
$payment = $_POST['payment'] ?? '';
$notes = $_POST['notes'] ?? '';

// Validate required fields
if (empty($service) || empty($vehicle) || empty($date) || empty($time) || 
    empty($pickup) || empty($destination) || empty($name) || empty($email) || empty($phone)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Bitte füllen Sie alle Pflichtfelder aus.']);
    exit;
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Bitte geben Sie eine gültige E-Mail-Adresse ein.']);
    exit;
}

// Create email content
$subject = "Neue Buchungsanfrage von $name";

$message = "Neue Buchungsanfrage erhalten:\n\n";
$message .= "Service: $service\n";
$message .= "Fahrzeug: $vehicle\n";
$message .= "Anzahl der Passagiere: $passengers\n";
$message .= "Datum: $date\n";
$message .= "Uhrzeit: $time\n";
$message .= "Abholadresse: $pickup\n";
$message .= "Zieladresse: $destination\n";
$message .= "Name: $name\n";
$message .= "E-Mail: $email\n";
$message .= "Telefon: $phone\n";
$message .= "Zahlungsmethode: $payment\n";
$message .= "Besondere Wünsche:\n$notes\n";

// Email headers
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email to admin
$admin_mail_sent = mail($admin_email, $subject, $message, $headers);

// Send confirmation email to customer
$customer_subject = "Ihre Buchungsanfrage bei Premium Chauffeur";
$customer_message = "Sehr geehrte(r) $name,\n\n";
$customer_message .= "vielen Dank für Ihre Buchungsanfrage. Wir haben folgende Details erhalten:\n\n";
$customer_message .= "Service: $service\n";
$customer_message .= "Fahrzeug: $vehicle\n";
$customer_message .= "Datum: $date\n";
$customer_message .= "Uhrzeit: $time\n";
$customer_message .= "Abholadresse: $pickup\n";
$customer_message .= "Zieladresse: $destination\n\n";
$customer_message .= "Wir werden Ihre Anfrage schnellstmöglich bearbeiten und uns mit Ihnen in Verbindung setzen.\n\n";
$customer_message .= "Mit freundlichen Grüßen\n";
$customer_message .= "Ihr Premium Chauffeur Team";

$customer_headers = "From: $admin_email\r\n";
$customer_headers .= "Reply-To: $admin_email\r\n";
$customer_headers .= "X-Mailer: PHP/" . phpversion();

$customer_mail_sent = mail($email, $customer_subject, $customer_message, $customer_headers);

// Return response
if ($admin_mail_sent && $customer_mail_sent) {
    echo json_encode(['success' => true, 'message' => 'Vielen Dank für Ihre Buchung. Wir werden uns schnellstmöglich bei Ihnen melden.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Es gab ein Problem beim Senden Ihrer Buchung. Bitte versuchen Sie es später erneut.']);
}
?> 