<?php

function kronos($response,$message,$error,$function,$filename,$module,$clientId,$data,$endpoint,$userId,$referer,$statusCode,$trackId,$logTypeInternal) {
require_once '../database/db_users.php';
//$conectar=conn();
  // Establecer la zona horaria a Bogotá
date_default_timezone_set('America/Bogota');

// Obtener la fecha y hora actual en Bogotá
$now = new DateTime();
$now->setTimezone(new DateTimeZone('America/Bogota'));

// Formatear la fecha y hora actual
$currentDateTime = $now->format('Y-m-d H:i:s');
if($response==="true"){
    $level="info";
}
if($response==="error"){
    $level="error";
}
$ip = $_SERVER['REMOTE_ADDR'];
$details = json_decode(file_get_contents("http://ip-api.com/json/$ip"));

$jsonData = '{
    "log":{
      "front":{
        "timestamp": "'.$currentDateTime.'",
        "trackId": "'.$trackId.'",
        "logType": "'.$logTypeInternal.'",
        "level": "'.$level.'",
        "clientId": "'.$clientId.'",
        "userId": "'.$userId.'",
        "module": "'.$module.'",
        "domain":"'.$_SERVER['HTTP_HOST'].'",
        "function":"'.$function.'",
        "file":"'.$filename.'",
        "response":"'.$response.'",
        "error":"'.$error.'",
        "clientIp":"'.$_SERVER['REMOTE_ADDR'].'",
        "clientBrowser":"'.$_SERVER['HTTP_USER_AGENT'].'",
        "clientLocation":"'.$details->country.' / '.$details->city.'"
      },
      "infoLog":{
        "endPoint":"'.$endpoint.'",
        
        "response":"'.$response.'",
        "message":"'.$message.'"
      }
    },"data":'.$data.',
    "status":{
      "code":"'.$statusCode.'",
      "referer":"'.$referer.'"
    }
  }';




  
  $url ="https://dev-kronos.lugma.tech/kronos/apiLogs/v1/frontLog/";
  
  // Definir los datos a enviar en la solicitud POST
  $data = array(
      'data' => $jsonData,
      'logType' => 'kairosTower'
      
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
  $responselog = curl_exec($curl);
  
  // Cerrar la sesión cURL
  curl_close($curl);


/*
$query = mysqli_query($conectar, "INSERT INTO frontLogs (logId, logValue, logType) VALUES ('12345678', '$jsonData', 'tipo de log')");

if ($query) {
echo "true|¡Producto creado con éxito!";
} else {
// Si hay un error, imprime el mensaje de error
echo "false|" . mysqli_error($conectar);
}*/
}

?>