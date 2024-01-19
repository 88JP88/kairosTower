<?php

session_start();

$clientId = $_GET['clientId'];
$descreiption = $_GET['description'];
$name = $_GET['productName'];
$ean1 = $_GET['ean1'];
$ean2 = $_GET['ean2'];
$sku = $_GET['sku'];
$productType = $_GET['productType'];
$providerId = $_GET['providerId'];
$imageUrl = $_GET['imgUrl'];
$techSpef = $_GET['techSpef'];
$pvalue = $_GET['pValue'];


require_once '../env/domain.php';
$sub_domaincon = new model_domain();
$sub_domain = $sub_domaincon->domainGateway();
//inicio de log ESTRUCTURA
require_once '../model/modelSecurity/uuid/uuidd.php';

$gen_uuid = new generateUuid();
$myuuid = $gen_uuid->guidv4();

$trackId = substr($myuuid, 0, 8);
 
 require_once 'postLog.php';
 $backtrace = debug_backtrace();
 $info['Función'] = $backtrace[1]['function']; // 1 para obtener la función actual, 2 para la anterior, etc.
 $currentFile = __FILE__; // Obtiene la ruta completa y el nombre del archivo actual
$justFileName = basename($currentFile);
$rutaCompleta = __DIR__;
$status = http_response_code();
//final log ESTRUCTURA

$url = $sub_domain . "/kairosGateway/apiClient/v1/postProduct/fL2jz91ptFMA3UwVkBbu/6WclAmsaP9H7SR2WmpDbl1OL9";

// Definir los datos a enviar en la solicitud POST
$data = array(
    'clientId' => $clientId, 
    'trackId' => $trackId, 
    'productName' => $name,
    'description' => $descreiption,
    'ean1' => $ean1,
    'ean2' => $ean2,
    'sku' => $sku,
    'productType' => $productType,
    'inPrice' => $pvalue,
    'providerId' => $providerId,
    'imgUrl' => $imageUrl,
    'techSpef' => $techSpef
    
);

// Convertir los datos a formato JSON
$json_data = json_encode($data);



 
  kronos('true','sentData','sentData', $info['Función'],$justFileName,$rutaCompleta,$clientId,$json_data,$url,$_SESSION['userId'],$_SERVER['HTTP_REFERER'],$status,$trackId,'sent');
//final de log
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

//$response1 = trim($response1); // Eliminar espacios en blanco alrededor de la respuesta
$array = explode("|", $response1);
$response12=$array[0];
$message=$array[1];
//echo $_SESSION['key'];

$response1 = trim($response12); // Eliminar espacios en blanco alrededor de la respuesta

if (strtolower($response1) === "true") { // Convertir la respuesta a minúsculas antes de comparar
 
    $_SESSION["respuesta"] = $response1;
    $_SESSION["mensaje"] = $message;
    $_SESSION["error"] = $response1;
    
      //inicio de log
      
      kronos($response1,$message,$message, $info['Función'],$justFileName,$rutaCompleta,$clientId,$json_data,$url,$_SESSION['userId'],$_SERVER['HTTP_REFERER'],$status,$trackId,'received');
  //final de log
   // header ('Location: ../room.php?roomId='.$roomId);
}

if (strtolower($response1) != "true") { // Convertir la respuesta a minúsculas antes de comparar

    $_SESSION["respuesta"] = $response1;
    $_SESSION["mensaje"] = $message;
    $_SESSION["error"] = $response1;
  
    //inicio de log
   
kronos($response1,$message,$message, $info['Función'],$justFileName,$rutaCompleta,$clientId,$json_data,$url,$_SESSION['userId'],$_SERVER['HTTP_REFERER'],$status,$trackId,'received');
//final de log
  
    //header ('Location: ../room.php?roomId='.$roomId);
}
?>
