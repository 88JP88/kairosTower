
<?php
session_start();

require_once '../env/domain.php';
$sub_domaincon = new model_domain();
$sub_domain = $sub_domaincon->domainGateway();
$curl = curl_init();
curl_setopt_array($curl, array(
  CURLOPT_URL => "".$sub_domain."/kairosGateway/apiCore/v1/getProfileInfoLog/".$_SESSION['profileId']."/".$_SESSION['sessionId'],
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json', // Tipo de contenido JSON
    'Api-Key: 12345678901234567890',
    'x-api-Key: '.$_SESSION['key']
  ),
));
$response = curl_exec($curl);
$err = curl_error($curl);

$_SESSION['sessionStatus1']=$response;
curl_close($curl);

$data = json_decode($_SESSION['sessionStatus1']);
  foreach ($data->sessionStatus as $character) {
    
    //echo "<h3 align='center'>Bienveni@:</h3><h4 align='center'>" . $character->name." ";
    $_SESSION['sessionStatus'] =$character->isActive;
    
    
  }

  
$sessionStatus=$_SESSION['sessionStatus'];


  

$response = [
    'sessionStatus' => $sessionStatus,
  ];
  
  header('Content-Type: application/json');
  
  //$_SESSION['message']="";
  
  echo json_encode($response);
 
//echo $data;
//echo json_encode($_SESSION['userInfo']);
//header ('Location: controllerValidateFirstStepRevalidate.php');

?>

