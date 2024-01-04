<?php

function kronos($response,$message,$error,$level,$domain,$function,$filename,$module) {
require_once '../database/db_users.php';
$conectar=conn();
  
$jsonData = '{
    "log":{
      "front":{
        "timestamp": "2023-11-24T08:30:00Z",
        "level": "'.$level.'",
        "message": "User logged in successfully",
        "user_id": "1234",
        "module": "'.$module.'",
        "domain":"'.$domain.'",
        "function":"'.$function.'",
        "file":"'.$filename.'",
        "response":"'.$response.'"
      },
      "infoLog":{
        "endPoint":"",
        "data":"",
        "response":"'.$response.'",
        "message":"'.$message.'",
        "response":"'.$error.'"
      }
    },
    "status":{
      "code":"",
      "referer":""
    }
  }';

$query = mysqli_query($conectar, "INSERT INTO frontLogs (logId, logValue, logType) VALUES ('12345678', '$jsonData', 'tipo de log')");

if ($query) {
echo "true|¡Producto creado con éxito!";
} else {
// Si hay un error, imprime el mensaje de error
echo "false|" . mysqli_error($conectar);
}
}

?>