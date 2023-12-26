<?php
$servername = "localhost";
$username = "u767251687_dev_kairoscom";
$password = "LPe903g&";
$dbname = "u767251687_dev_kairoscom";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Consulta para obtener la información de la tabla
    $sql = "DESCRIBE generalDelivery"; // Otra opción: "SHOW COLUMNS FROM nombre_de_la_tabla";
    $result = $conn->query($sql);

    // Imprimir los resultados
    if ($result) {
        echo "<h2>Información de la tabla nombre_de_la_tabla:</h2>";
        echo "<ul>";
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            echo "<li>" . $row['Field'] . " - " . $row['Type'] . "</li>";
        }
        echo "</ul>";
        $data = '[{"distance":{"startStreet":"10","endStreet":"03","startAvenue":"1","endAvenue":"45"}}]';
/*
        $sql = "INSERT INTO generalDelivery (deliveryId,deliveryName,deliveryLastName,clientId,distanceRules,deliveryMail,deliveryContact) 
        VALUES ('43456567','nuevo delivery','de prueba','2e44d504','$data','paezcastrojuansebastian@gmail.com','1232123456') "; // Otra opción: "SHOW COLUMNS FROM nombre_de_la_tabla";
 

$sql = "UPDATE generalDelivery SET distanceRules='$data' where clientId='2e44d504'"; // Otra opción: "SHOW COLUMNS FROM nombre_de_la_tabla";
  */  
$sql = "DELETE FROM generalDelivery WHERE deliveryName='nuevo delivery' and clientId='2e44d504'"; // Otra opción: "SHOW COLUMNS FROM nombre_de_la_tabla";
 
     $result = $conn->query($sql);
try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Consulta para obtener el JSON de la base de datos
    $stmt = $conn->prepare("SELECT distanceRules FROM generalDelivery WHERE deliveryId='23456545'");
    $stmt->execute();
    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    // Decodificar el JSON
    $json_data = json_decode($result['distanceRules'], true);

    // Mostrar el JSON decodificado en pantalla
    echo "<pre>";
    print_r($result['distanceRules']);
    echo "</pre>";

} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}

$conn = null;
    } else {
        echo "No se encontraron resultados.";
    }
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}

$conn = null;
?>
