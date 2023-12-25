<?php
session_start();
$mensaje = $_SESSION['mensaje'];
$error = $_SESSION['error'];
$statusCode = $_SESSION['statusCode'];

$response = [
  'mensaje' => $mensaje,
  'error' => $error,
  'statusCode' => $statusCode
];

header('Content-Type: application/json');
echo json_encode($response);
?>
