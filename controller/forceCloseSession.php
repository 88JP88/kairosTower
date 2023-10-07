<?php

session_start();
    // Destruir la sesión


    
session_start();
$userId = $_SESSION['userId'];
$sessionId = $_GET['sessionId'];
require_once '../env/domain.php';
$sub_domaincon = new model_domain();
$sub_domain = $sub_domaincon->domainGateway();

$url = $sub_domain . "/kairosGateway/apiCore/v1/validateLogOutInternal/".$_SESSION['key'];

// Definir los datos a enviar en la solicitud POST
$data = array(
    'userId' => $userId,
    'sessionId' => $sessionId,
    'value'=>'forceSession'
    
);

// Convertir los datos a formato JSON
$json_data = json_encode($data);

// Inicializar la sesión cURL
$curl = curl_init();

// Configurar las opciones de la sesión cURL
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

// Ejecutar la solicitud y obtener la respuesta
$response1 = curl_exec($curl);

// Cerrar la sesión cURL
curl_close($curl);
    
$array = explode("|", $response1);
$response12=$array[0];
$message1=$array[1];


if (strtolower($response12) === "true") { // Convertir la respuesta a minúsculas antes de comparar
 
    $_SESSION["respuesta"] = $response12;
    $_SESSION["mensaje"] = $message;
    $_SESSION["error"] = $response12;
    
   // header ('Location: ../room.php?roomId='.$roomId);
}

if (strtolower($response1) != "true") { // Convertir la respuesta a minúsculas antes de comparar

    $_SESSION["respuesta"] = $response12;
    $_SESSION["mensaje"] = $message;
    $_SESSION["error"] = $response12;
  
  
  
    //header ('Location: ../room.php?roomId='.$roomId);
}
?>
