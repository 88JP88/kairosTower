<?php

session_start();

$deliveryId = $_GET['customerId'];
$clientId = $_GET['clientId'];
$param = $_GET['param'];
$value = $_GET['value'];
$conectar=conn();
//require_once '../database/db_users.php';
require_once '../env/domain.php';
$sub_domaincon = new model_domain();
$sub_domain = $sub_domaincon->domainGateway();
/*$query = mysqli_query($conectar, "INSERT INTO frontLogs (logId, logValue, logType) VALUES ('12345678', 'valor', 'tipo de log')");

if ($query) {
    echo "true|¡Producto creado con éxito!";
} else {
    // Si hay un error, imprime el mensaje de error
    echo "false|" . mysqli_error($conectar);
}
*/
$url = $sub_domain . "/kairosGateway/apiClient/v1/putCustomer/fL2jz91ptFMA3UwVkBbu/6WclAmsaP9H7SR2WmpDbl1OL9";

// Definir los datos a enviar en la solicitud POST
$data = array(
    'customerId' => $deliveryId, 
    'clientId' => $clientId,
    'param' => $param,

    'value' => $value
    
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
      require_once 'postLog.php';
      $backtrace = debug_backtrace();
      $info['Función'] = $backtrace[1]['function']; // 1 para obtener la función actual, 2 para la anterior, etc.
      $currentFile = __FILE__; // Obtiene la ruta completa y el nombre del archivo actual
  $justFileName = basename($currentFile);
  $rutaCompleta = __DIR__;
  $status = http_response_code();
      kronos($response1,$message,$message, $info['Función'],$justFileName,$rutaCompleta,$clientId,$json_data,$url,$_SESSION['userId'],$_SERVER['HTTP_REFERER'],$status);
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
    kronos($response1,$message,$message, $info['Función'],$justFileName,$rutaCompleta,$clientId,$json_data,$url,$_SESSION['userId'],$_SERVER['HTTP_REFERER'],$status);
//final de log
  
  
    //header ('Location: ../room.php?roomId='.$roomId);
}
?>
