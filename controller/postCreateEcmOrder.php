<?php

session_start();

$clientId = $_GET['clientId'];
$cart = $_GET['cart'];
$userId = $_GET['userId'];
$customerId = $_GET['customerId'];
$ptype = $_GET['paymentType'];
$pMeth = $_GET['paymentMethod'];
$payWith = $_GET['payWith'];
$bankEntity = $_GET['bankEntity'];
$deliveryMethod = $_GET['deliveryMethod'];
$deliveryAdd = $_GET['deliveryAddress'];


$json_data1 = urldecode($cart);
//$json_data1 = json_encode($cart);
require_once '../env/domain.php';
$sub_domaincon = new model_domain();
$sub_domain = $sub_domaincon->domainGateway();

require_once '../model/modelSecurity/uuid/uuidd.php';
                
                  

$gen_uuid = new generateUuid();
$myuuid = $gen_uuid->guidv4();


$trackId = substr($myuuid, 0, 8);

$url = $sub_domain . "/kairosGateway/apiClient/v1/postClientOrderEcm/fL2jz91ptFMA3UwVkBbu/6WclAmsaP9H7SR2WmpDbl1OL9";

// Definir los datos a enviar en la solicitud POST
$data = array(
    'clientId' => $clientId, 
    'trackId' => $trackId, 
    'cart' => $cart,
    'userId'=>$userId,
    'fromIp'=>$_SERVER['REMOTE_ADDR'],
    'fromBrowser'=>$_SERVER['HTTP_USER_AGENT'],
    'customerId'=>$customerId,
    'paymentType'=>$ptype,
    'paymentMethod'=>$pMeth,
    'payWith'=>$payWith,
    'bankEntity'=>$bankEntity,
    'deliveryMethod'=>$deliveryMethod,
    'deliveryAdd'=>$deliveryAdd
    
);

// Convertir los datos a formato JSON
$json_data = json_encode($data);
 //inicio de log
 require_once 'postLog.php';
 $backtrace = debug_backtrace();
 $info['Función'] = $backtrace[1]['function']; // 1 para obtener la función actual, 2 para la anterior, etc.
 $currentFile = __FILE__; // Obtiene la ruta completa y el nombre del archivo actual
$justFileName = basename($currentFile);
$rutaCompleta = __DIR__;
$status = http_response_code();
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
$ordernumber=$array[2];
$orderid=$array[3];
$ftotal=$array[4];
$fstotal=$array[5];
$fsaver=$array[6];
$pmethod=$array[7];
$ptype=$array[8];
//echo $_SESSION['key'];

$response1 = trim($response12); // Eliminar espacios en blanco alrededor de la respuesta

if (strtolower($response1) === "true") { // Convertir la respuesta a minúsculas antes de comparar
 
    $_SESSION["respuesta"] = $response1;
    $_SESSION["mensaje"] = $message;
    $_SESSION["error"] = $response1;
    $_SESSION["orderNumber"] = $ordernumber;
    $_SESSION["orderId"] = $orderid;
    $_SESSION["ftotal"] = $ftotal;
    $_SESSION["fstotal"] = $fstotal;
    $_SESSION["fsaver"] = $fsaver;
    $_SESSION["pMethod"] = $pmethod;
    $_SESSION["pType"] = $pmethod;
    

      //inicio de log
      require_once 'postLog.php';
      $backtrace = debug_backtrace();
      $info['Función'] = $backtrace[1]['function']; // 1 para obtener la función actual, 2 para la anterior, etc.
      $currentFile = __FILE__; // Obtiene la ruta completa y el nombre del archivo actual
  $justFileName = basename($currentFile);
  $rutaCompleta = __DIR__;
  $status = http_response_code();
      kronos($response1,$message,$message, $info['Función'],$justFileName,$rutaCompleta,$clientId,$json_data,$url,$_SESSION['userId'],$_SERVER['HTTP_REFERER'],$status,$trackId,'received');
  //final de log
   // header ('Location: ../room.php?roomId='.$roomId);
}

if (strtolower($response1) != "true") { // Convertir la respuesta a minúsculas antes de comparar

    $_SESSION["respuesta"] = $response1;
    $_SESSION["mensaje"] = $message;
    $_SESSION["error"] = $response1;
  
    //inicio de log
    require_once 'postLog.php';
    $backtrace = debug_backtrace();
    $info['Función'] = $backtrace[1]['function']; // 1 para obtener la función actual, 2 para la anterior, etc.
    $currentFile = __FILE__; // Obtiene la ruta completa y el nombre del archivo actual
$justFileName = basename($currentFile);
$rutaCompleta = __DIR__;
$status = http_response_code();
    kronos($response1,$message,$message, $info['Función'],$justFileName,$rutaCompleta,$clientId,$json_data,$url,$_SESSION['userId'],$_SERVER['HTTP_REFERER'],$status,$trackId,'received');
//final de log
  
    //header ('Location: ../room.php?roomId='.$roomId);
}
?>
