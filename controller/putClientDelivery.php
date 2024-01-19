<?php

session_start();


            $deliveryId = $_GET['deliveryId'];
            $clientId = $_GET['clientId'];
            $param = $_GET['param'];
            $value = $_GET['value'];

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

            $url = $sub_domain . "/kairosGateway/apiClient/v1/putDelivery/fL2jz91ptFMA3UwVkBbu/6WclAmsaP9H7SR2WmpDbl1OL9";

            // Definir los datos a enviar en la solicitud POST
            $data = array(
                'deliveryId' => $deliveryId, 
                'trackId'=>$trackId,
                'clientId' => $clientId,
                'param' => $param,

                'value' => $value
                
            );

//final log ESTRUCTURA

            // Convertir los datos a formato JSON
            $json_data = json_encode($data);
            try{
                kronos('true','sentData','sentData', $info['Función'],$justFileName,$rutaCompleta,$clientId,$json_data,$url,$_SESSION['userId'],$_SERVER['HTTP_REFERER'],$status,$trackId,'sent');

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
            $data = json_decode($response1, true);
            //$response1 = trim($response1); // Eliminar espacios en blanco alrededor de la respuesta
           // $array = explode("|", $response1);
            $response12=$data['response'][0]['response'];
            $message=$data['response'][0]['message'];
            //echo $_SESSION['key'];

            $response1 = $response12; // Eliminar espacios en blanco alrededor de la respuesta

            if (strtolower($response1) === "true") { // Convertir la respuesta a minúsculas antes de comparar
            
                $_SESSION["respuesta"] = $response1;
                $_SESSION["mensaje"] = $message;
                $_SESSION["error"] = $response1;

      kronos($response1,$message,$message, $info['Función'],$justFileName,$rutaCompleta,$clientId,$json_data,$url,$_SESSION['userId'],$_SERVER['HTTP_REFERER'],$status,$trackId,'received');
 
            
            
                // header ('Location: ../room.php?roomId='.$roomId);
            }

            if (strtolower($response1) != "true") { // Convertir la respuesta a minúsculas antes de comparar

                $_SESSION["respuesta"] = $response1;
                $_SESSION["mensaje"] = $message;
                $_SESSION["error"] = $response1;
            
            
                kronos($response1,$message,$message, $info['Función'],$justFileName,$rutaCompleta,$clientId,$json_data,$url,$_SESSION['userId'],$_SERVER['HTTP_REFERER'],$status,$trackId,'received');
 
        
                //header ('Location: ../room.php?roomId='.$roomId);
            }
}catch(Exception $e){
  
  kronos($e->getMessage(),$e->getMessage(),$e->getMessage(), $info['Función'],$justFileName,$rutaCompleta,$clientId,$json_data,$url,$_SESSION['userId'],$_SERVER['HTTP_REFERER'],$status,$trackId,'received');
//final de log
}
?>
