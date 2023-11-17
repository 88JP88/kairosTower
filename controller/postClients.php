<?php

session_start();

$names = $_GET['nombres'];
$lastnames = $_GET['apellidos'];
$pmail = $_GET['correo'];
$pass1 = $_GET['contrasena'];
$contact = $_GET['contacto'];
$ccomments = $_GET['comments'];
$cname = $_GET['clientname'];
$type = $_GET['type'];

require_once '../env/domain.php';
$sub_domaincon = new model_domain();
$sub_domain = $sub_domaincon->domainGateway();

$url = $sub_domain . "/kairosGateway/apiCore/v1/postClient/fL2jz91ptFMA3UwVkBbu/6WclAmsaP9H7SR2WmpDbl1OL9";

// Definir los datos a enviar en la solicitud POST
$data = array(
    'ownerName' => $names, 
    'ownerLastName' => $lastnames,
    'email' => $pmail,

    'keyWord' => $pass1,
    'contact' => $contact,
    'rolId' => $type,
    'clientName'=>$cname,
    'comments'=>$ccomments,
    'clientType'=>$type
    
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


    
$nombreCarpeta = "../client/k_".$cname;

// Verifica si la carpeta ya existe
if (!is_dir($nombreCarpeta)) {
    // Intenta crear la carpeta
    if (mkdir($nombreCarpeta)) {
        echo "La carpeta $nombreCarpeta se ha creado con éxito.";



        
       
        $nombreArchivo = "index.php";
        
        // Ruta completa del archivo, incluyendo la carpeta
        $rutaArchivo = $nombreCarpeta . '/' . $nombreArchivo;
        
        if (!file_exists($rutaArchivo)) {
            // Abre el archivo en modo escritura
            $archivo = fopen($rutaArchivo, "w");
        
            if ($archivo) {
                // Escribe contenido en el archivo (puedes agregar el código PHP necesario aquí)
                $contenido = '<?php 
                session_start();
                include("clientParams.php");
                $_SESSION["clientNames"]=$clientName;
                require ("../view/viewIndex.php"); ?>';
                fwrite($archivo, $contenido);
        
                // Cierra el archivo
                fclose($archivo);
        
               // echo "El archivo $nombreArchivo se ha creado en la carpeta $nombreCarpeta.";
               
        $nombreArchivo = "session.php";
        
        // Ruta completa del archivo, incluyendo la carpeta
        $rutaArchivo = $nombreCarpeta . '/' . $nombreArchivo;
        
        if (!file_exists($rutaArchivo)) {
            // Abre el archivo en modo escritura
            $archivo = fopen($rutaArchivo, "w");
        
            if ($archivo) {
                // Escribe contenido en el archivo (puedes agregar el código PHP necesario aquí)
                $contenido = '<?php require ("../view/viewSession.php"); ?>';
                fwrite($archivo, $contenido);
        
                // Cierra el archivo
                fclose($archivo);
        
               // echo "El archivo $nombreArchivo se ha creado en la carpeta $nombreCarpeta.";
            
               $nombreArchivo = "clientParams.php";
        
               // Ruta completa del archivo, incluyendo la carpeta
               $rutaArchivo = $nombreCarpeta . '/' . $nombreArchivo;
               
               if (!file_exists($rutaArchivo)) {
                   // Abre el archivo en modo escritura
                   $archivo = fopen($rutaArchivo, "w");
               
                   if ($archivo) {
                       // Escribe contenido en el archivo (puedes agregar el código PHP necesario aquí)
                       $contenido = '<?php $clientName="'.$cname.'"; ?>';
                       fwrite($archivo, $contenido);
               
                       // Cierra el archivo
                       fclose($archivo);
               
                      // echo "El archivo $nombreArchivo se ha creado en la carpeta $nombreCarpeta.";
                   
                   
                   
                   
                   
                   
                   } else {
                       echo "No se pudo crear el archivo $nombreArchivo.";
                   }
               } else {
                   echo "El archivo $nombreArchivo ya existe en la carpeta $nombreCarpeta.";
               }
            
            
            
            
            } else {
                echo "No se pudo crear el archivo $nombreArchivo.";
            }
        } else {
            echo "El archivo $nombreArchivo ya existe en la carpeta $nombreCarpeta.";
        }
        
            } else {
                echo "No se pudo crear el archivo $nombreArchivo.";
            }
        } else {
            echo "El archivo $nombreArchivo ya existe en la carpeta $nombreCarpeta.";
        }
        
        

    } else {
        echo "No se pudo crear la carpeta $nombreCarpeta.";
    }
} else {
    echo "La carpeta $nombreCarpeta ya existe.";
}


    
   // header ('Location: ../room.php?roomId='.$roomId);
}

if (strtolower($response1) != "true") { // Convertir la respuesta a minúsculas antes de comparar

    $_SESSION["respuesta"] = $response1;
    $_SESSION["mensaje"] = $message;
    $_SESSION["error"] = $response1;
  
  
  
    //header ('Location: ../room.php?roomId='.$roomId);
}
?>
