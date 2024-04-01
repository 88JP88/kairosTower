<?php

require_once '../../epTemplate/postTemplate.php';

       
                    $decodedData = urldecode($_GET['data']);
                    $apiData = json_decode($decodedData, true);

    epTemplates::epTemplate($apiData['apiValues']['apiName'],$apiData['apiValues']['apiVersion'],$apiData['apiValues']['endPoint'],$apiData);

?>
