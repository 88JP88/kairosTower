<?php
session_start();
 require_once '../env/domain.php';
 require_once '../model/modelSecurity/uuid/uuidd.php';


class epTemplates{

public static function epTemplate($apiName,$apiVersion,$endPoint,$apiData){
    $sub_domaincon = new model_domain();
    $sub_domain = $sub_domaincon->domainGateway();
    $gen_uuid = new generateUuid();
    $myuuid = $gen_uuid->guidv4();
    unset($apiData['apiValues']);
    $trackId = substr($myuuid, 0, 8);
    $apiData['trackId']=$trackId;
    $url = $sub_domain . "/kairosGateway/$apiName/$apiVersion/$endPoint/".$_SESSION['ranCode']."/".$_SESSION['key'];
   echo $url;
   echo $_SESSION['tanCode'];
    $json_data = json_encode($apiData);
    try{
    $curl = curl_init();

    // Configurar las opciones de la sesión cURL
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $apiData);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

    // Ejecutar la solicitud y obtener la respuesta
    $response1 = curl_exec($curl);

    // Cerrar la sesión cURL
    curl_close($curl);
    echo $response1;
    $data = json_decode($response1, true);
    //$response1 = trim($response1); // Eliminar espacios en blanco alrededor de la respuesta
   // $array = explode("|", $response1);
    $response12=$data['response'][0]['response'];
    $message=$data['response'][0]['message'];
    //echo $_SESSION['key'];

    $response1 = $response12;
    if (strtolower($response1) === "true") { // Convertir la respuesta a minúsculas antes de comparar
            
        $_SESSION["respuesta"] = $response1;
        $_SESSION["mensaje"] = $message;
        $_SESSION["error"] = $response1;

//kronos($response1,$message,$message, $info['Función'],$justFileName,$rutaCompleta,$clientId,$json_data,$url,$_SESSION['userId'],$_SERVER['HTTP_REFERER'],$status,$trackId,'received');

    
    
        // header ('Location: ../room.php?roomId='.$roomId);
    }

    if (strtolower($response1) != "true") { // Convertir la respuesta a minúsculas antes de comparar

        $_SESSION["respuesta"] = $response1;
        $_SESSION["mensaje"] = $message;
        $_SESSION["error"] = $response1;
    
    
      //  kronos($response1,$message,$message, $info['Función'],$justFileName,$rutaCompleta,$clientId,$json_data,$url,$_SESSION['userId'],$_SERVER['HTTP_REFERER'],$status,$trackId,'received');


        //header ('Location: ../room.php?roomId='.$roomId);
    }
}catch(Exception $e){
  
    // kronos($e->getMessage(),$e->getMessage(),$e->getMessage(), $info['Función'],$justFileName,$rutaCompleta,$clientId,$json_data,$url,$_SESSION['userId'],$_SERVER['HTTP_REFERER'],$status,$trackId,'received');
   //final de log
   }
}


}

?>