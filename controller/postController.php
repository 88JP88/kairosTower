<?php

require_once '../epTemplate/postTemplate.php';







try {
  
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $decodedData = urldecode($_POST['data']);
    } if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $decodedData = urldecode($_GET['data']);
    }
  
    $apiData = json_decode($decodedData, true);


    if (!isset($apiData['apiValues'])) {
        // Ejecutar otro método si apiValues no está presente
        handleMissingApiValues();
    } else {
        epTemplates::epTemplate(
            $apiData['apiValues']['apiName'],
            $apiData['apiValues']['apiVersion'],
            $apiData['apiValues']['endPoint'],
            $apiData
        );
    }
} catch (Exception $e) {
    // Manejo de errores
    error_log($e->getMessage());
    echo json_encode(['error' => $e->getMessage()]);
}





?>
