<?php
session_start();
$mensaje = $_SESSION['mensaje'];
$error = $_SESSION['error'];
$orderNumber = $_SESSION['orderNumber'];
$orderId = $_SESSION['orderId'];
$ftotal = $_SESSION['ftotal'];
$fstotal = $_SESSION['fstotal'];
$fsaver = $_SESSION['fsaver'];
$pMethod = $_SESSION['pMethod'];
$pType = $_SESSION['pType'];

$response = [
  'mensaje' => $mensaje,
  'error' => $error,
  'orderNumber' => $orderNumber,
  'orderId' => $orderId,
  'total' => $ftotal,
  'subTotal' => $fstotal,
  'saver' => $fsaver,
  'paymentMethod' => $pMethod,
  'paymentType' => $pType
];

header('Content-Type: application/json');
echo json_encode($response);
?>
