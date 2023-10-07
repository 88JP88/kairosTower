<?php

session_start();
$userId = $_SESSION['userId'];
$sessionId = $_SESSION['sessionId'];



if(isset($userId) && isset($sessionId)){




  

require_once '../env/domain.php';
$sub_domaincon = new model_domain();
$sub_domain = $sub_domaincon->domainGateway();
$key=$_SESSION['key'];
$url = $sub_domain . "/kairosGateway/apiCore/v1/validateLogOutInternal/".$key;

// Definir los datos a enviar en la solicitud POST
$data = array(
    'userId' => $userId,
    'sessionId' => $sessionId,
    
    'value'=>'logOut'
    
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
$message1=$array[1];
//echo $_SESSION['key'];

$response11 = trim($response12); // Eliminar espacios en blanco alrededor de la respuesta

if (strtolower($response11) === "true") { // Convertir la respuesta a minúsculas antes de comparar
 
   
    $_SESSION["respuesta"] = $_SESSION['response'];
    $_SESSION["mensaje"] = $_SESSION['message'];
    $_SESSION["error"] = $_SESSION['message'];
  
    

    // Limpiar todas las variables de sesión
    $_SESSION = array();
    
    // Destruir la sesión
    session_destroy();
  
  header ('Location: ../index.php');


}

 elseif(strtolower($response11) === "false") { // Convertir la respuesta a minúsculas antes de comparar

    $_SESSION["respuesta"] = $response11;
    $_SESSION["message"] = $message1;
    $_SESSION["response"] = $response11;
  
  echo $message1;
    header ('Location: ../index.php');
    //header ('Location: ../room.php?roomId='.$roomId);
}

}else{

  $_SESSION = array();
    
  // Destruir la sesión
  session_destroy();

header ('Location: ../index.php');
}






?>
