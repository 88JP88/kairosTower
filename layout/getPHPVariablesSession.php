<?php
session_start();
$mensaje = $_SESSION['message'];
$error = $_SESSION['response'];


$userId = $_SESSION['userId'];
$userName = $_SESSION['userName'];
$mail = $_SESSION['mail'];
$sessionCounter = $_SESSION['sessionCounter'];
$name = $_SESSION['name'];
$lastName = $_SESSION['lastName'];
$rolId = $_SESSION['rolId'];
$isActive = $_SESSION['isActive'];
$status = $_SESSION['status'];
$contact = $_SESSION['contact'];
$sessionId = $_SESSION['sessionId'];
$key = $_SESSION['key'];
$ranCode = $_SESSION['ranCode'];
$subDomain = $_SESSION['subDomain'];
$clientId1 = $_SESSION['clientId1'];



$response = [
  'mensaje' => $mensaje,
  'error' => $error,

  'userId' => $userId,
  'userName' => $userName,
  'mail' => $mail,
  'sessionCounter' => $sessionCounter,
  'name' => $name,
  'lastName' => $lastName,
  'rolId' => $rolId,
  'isActive' => $isActive,

  'status' => $status,
  'contact' => $contact,
  'sessionId' => $sessionId,
  'key' => $key,
  'ranCode' => $ranCode,
  'subDomain' => $subDomain,
  'clientId' => $clientId1
];

header('Content-Type: application/json');

$_SESSION['message']="";

echo json_encode($response);

?>
