<?php
session_start();
$mensaje = $_SESSION['mensaje'];
$error = $_SESSION['error'];

$response = [
  'mensaje' => $mensaje,
  'error' => $error
];

header('Content-Type: application/json');
echo json_encode($response);
?>
