
<?php
session_start();

require_once '../env/domain.php';
$sub_domaincon = new model_domain();
$sub_domain = $sub_domaincon->domainGateway();
$curl = curl_init();
curl_setopt_array($curl, array(
  CURLOPT_URL => "".$sub_domain."/kairosGateway/apiCore/v1/getProfileInfoInternal/".$_SESSION['userId'],
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

$_SESSION['users']=$response;
curl_close($curl);

$data = json_decode($_SESSION['users']);
  foreach ($data->users as $character) {
    
    //echo "<h3 align='center'>Bienveni@:</h3><h4 align='center'>" . $character->name." ";
    $_SESSION['name'] =$character->name;
    $_SESSION['lastName'] =$character->lastName;
    $_SESSION['sessionCounter'] =$character->sessionCounter;
    
    
  }

  
$name=$_SESSION['name'];
$lastName=$_SESSION['lastName'];
$sessionCounter=$_SESSION['sessionCounter'];



  

$response = [
    'name' => $name,
    'lastName' => $lastName,
    'sessionCounter' => $sessionCounter
  ];
  
  header('Content-Type: application/json');
  
  //$_SESSION['message']="";
  
  echo json_encode($response);
 
//echo $data;
//echo json_encode($_SESSION['userInfo']);
//header ('Location: controllerValidateFirstStepRevalidate.php');

?>

