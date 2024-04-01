
<?php
session_start();

require_once '../env/domain.php';
$sub_domaincon = new model_domain();
$sub_domain = $sub_domaincon->domainGateway();
$curl = curl_init();
curl_setopt_array($curl, array(
  CURLOPT_URL => "".$sub_domain."/kairosGateway/apiCore/v1/getProfileInfoClient/".$_SESSION['userId'],
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
    $_SESSION['bgColor'] =$character->bgColor;
    $_SESSION['txtColor'] =$character->textColor;
    $_SESSION['imgIcon'] =$character->imgIcon;
    $_SESSION['imgGif'] =$character->imgGif;
    $_SESSION['imgLogo'] =$character->imgLogo;
    
    
  }

  
$name=$_SESSION['name'];
$lastName=$_SESSION['lastName'];
$sessionCounter=$_SESSION['sessionCounter'];
$bgColor=$_SESSION['bgColor'];
$textColor=$_SESSION['txtColor'];
$imgIcon=$_SESSION['imgIcon'];
$imgGif=$_SESSION['imgGif'];
$imgLogo=$_SESSION['imgLogo'];



  

$response = [
    'name' => $name,
    'lastName' => $lastName,
    'sessionCounter' => $sessionCounter,
    'bgColor' => $bgColor,
    'txtColor' => $textColor,
    'imgIcon' => $imgIcon,
    'imgGif' => $imgGif,
    'imgLogo' => $imgLogo
  ];
  
  header('Content-Type: application/json');
  
  //$_SESSION['message']="";
  
  echo json_encode($response);
 
//echo $data;
//echo json_encode($_SESSION['userInfo']);
//header ('Location: controllerValidateFirstStepRevalidate.php');

?>

