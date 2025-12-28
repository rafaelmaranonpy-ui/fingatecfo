<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

// Validate required fields
if (empty($data['name']) || empty($data['email']) || empty($data['message'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Missing required fields']);
    exit();
}

// Sanitize inputs
$name = htmlspecialchars(strip_tags(trim($data['name'])));
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$company = isset($data['company']) ? htmlspecialchars(strip_tags(trim($data['company']))) : 'Not provided';
$message = htmlspecialchars(strip_tags(trim($data['message'])));

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit();
}

// Email configuration
$to = 'rafael.maranon@fingategrow.com';
$subject = 'New Contact Form Submission - FinGate Grow';

// IMPORTANT for deliverability:
// - "From" should be an address on your own domain (SPF/DKIM alignment)
// - put the visitor email in Reply-To (so you can reply directly)
$fromEmail = 'no-reply@fingategrow.com';
$fromName = 'FinGate Grow';

// Build plain text email
$emailBody = "New Contact Form Submission\n";
$emailBody .= "===========================\n\n";
$emailBody .= "Name: {$name}\n";
$emailBody .= "Email: {$email}\n";
$emailBody .= "Company: {$company}\n";
$emailBody .= "Message:\n{$message}\n";

// Headers
$headers = "From: {$fromName} <{$fromEmail}>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

// Use an envelope sender on your domain when possible (helps reduce spam)
$mailSent = @mail($to, $subject, $emailBody, $headers, "-f {$fromEmail}");

if ($mailSent) {
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} else {
    // Log error for debugging
    error_log("Mail failed - To: $to, From: $email");
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send email. Please check server mail configuration.']);
}
?>
