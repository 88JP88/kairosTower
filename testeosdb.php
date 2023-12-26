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
        $data = '[{"distance":{"startStreet":"1","endStreet":"45","startAvenue":"1","endAvenue":"45"}}]';
/*
        $sql = "INSERT INTO generalDelivery (deliveryId,deliveryName,deliveryLastName,clientId,distanceRules,deliveryMail,deliveryContact) 
        VALUES ('23456545','Delyvery','Norte','2e44d504','$data','paezcastrojuansebastian@gmail.com','1232123456') "; // Otra opción: "SHOW COLUMNS FROM nombre_de_la_tabla";
    $result = $conn->query($sql);
*/

    $stmt = $conn->prepare("SELECT distanceRules FROM generalDelivery WHERE deliveryId='23456545'");
    $stmt->execute();
    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    // Decodificar el JSON
    $json_data = json_decode($result['columna_json'], true);

    // Mostrar el JSON decodificado en pantalla
    echo "<pre>";
    print_r($json_data);
    echo "</pre>";
    } else {
        echo "No se encontraron resultados.";
    }
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}

$conn = null;
?>
