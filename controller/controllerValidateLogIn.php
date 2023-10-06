<?php

session_start();
$mail = $_POST['mail'];
$pass = $_POST['pass'];


$navegador1 = $_SERVER['HTTP_USER_AGENT'];
$ip = $_SERVER['REMOTE_ADDR'];
$navegador = base64_encode($navegador1);

require_once '../env/domain.php';
$sub_domaincon = new model_domain();
$sub_domain = $sub_domaincon->domCore();

$url = $sub_domain . "/lugmagateway/apiCore/v1/validateLogIn/93q89NnAwIUNiOn2mOl5DqbC8";

// Definir los datos a enviar en la solicitud POST
$data = array(
    'mail' => $mail, 
    'pass' => $pass
    
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
 
   

require_once '../env/domain.php';
$sub_domaincon = new model_domain();
$sub_domain = $sub_domaincon->domainGateway();

$url = $sub_domain . "/kairosGateway/apiCore/v1/validateLogInInternal/93q89NnAwIUNiOn2mOl5DqbC8";

// Definir los datos a enviar en la solicitud POST
$data = array(
    'mail' => $mail,
    'browser' => $navegador,
    'ipId' => $ip
    
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

$_SESSION['userInfo']=$response1;
curl_close($curl);

$data = json_decode($_SESSION['userInfo']);
  foreach ($data->users as $character) {
    
    //echo "<h3 align='center'>Bienveni@:</h3><h4 align='center'>" . $character->name." ";
    $_SESSION['profileId'] =$character->profileId;
    $_SESSION['mail'] =$character->mail;
    $_SESSION['userName'] =$character->userName;
    $_SESSION['sessionCounter'] =$character->sessionCounter;
  //  $_SESSION['userName'] =$character->userName;
    $_SESSION['name'] =$character->name;
    $_SESSION['lastName'] =$character->lastName;
    $_SESSION['rolId'] =$character->rolId;
    $_SESSION['isActive'] =$character->isActive;
    $_SESSION['status'] =$character->status;
    $_SESSION['contact'] =$character->contact;
    $_SESSION['sessionId'] =$character->sessionId;
    $_SESSION['ranCode'] =$character->ranCode;
    $_SESSION['response'] =$character->response;
    $_SESSION['message'] =$character->message;
    $_SESSION['subDomain'] =$sub_domain;
    
    
  }

if (strtolower($_SESSION['response']) === "true") { // Convertir la respuesta a minúsculas antes de comparar
 
    $_SESSION["respuesta"] = $_SESSION['response'];
    $_SESSION["mensaje"] = $_SESSION['message'];
    $_SESSION["error"] = $_SESSION['message'];
    
   header ('Location: ../session.php');
}

elseif (strtolower($_SESSION['response']) === "false") { // Convertir la respuesta a minúsculas antes de comparar

    $_SESSION["respuesta"] = $_SESSION['response'];
    $_SESSION["mensaje"] = $_SESSION['message'];
    $_SESSION["error"] = $_SESSION['message'];
  
 
  
  header ('Location: ../index.php');
}

}

 elseif(strtolower($response11) === "false") { // Convertir la respuesta a minúsculas antes de comparar

    $_SESSION["respuesta"] = $response11;
    $_SESSION["message"] = $message1;
    $_SESSION["response"] = $response11;
  
  //echo $response11;
    header ('Location: ../index.php');
    //header ('Location: ../room.php?roomId='.$roomId);
}
?>
