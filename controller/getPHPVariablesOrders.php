<?php
session_start();
$mensaje = $_SESSION['mensaje'];
$error = $_SESSION['error'];
$orderNumber = $_SESSION['orderNumber'];
$orderId = $_SESSION['orderId'];
$ftotal = $_SESSION['ftotal'];
$fstotal = $_SESSION['fstotal'];
$fsaver = $_SESSION['fsaver'];

$response = [
  'mensaje' => $mensaje,
  'error' => $error,
  'orderNumber' => $orderNumber,
  'orderId' => $orderId,
  'total' => $ftotal,
  'subTotal' => $fstotal,
  'saver' => $fsaver
];

header('Content-Type: application/json');
echo json_encode($response);
?>
