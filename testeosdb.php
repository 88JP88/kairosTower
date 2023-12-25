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

        $sql = "INSERT INTO generalDelivery (deliveryId,deliveryName,deliveryLastName,clientId,distanceRules,deliveryMail,deliveryContact) 
        VALUES ('POS','REPARTIDOR','ESTANDAR','2e44d504','1','paezcastrojuansebastian@gmail.com','1232123456') "; // Otra opción: "SHOW COLUMNS FROM nombre_de_la_tabla";
    $result = $conn->query($sql);
    } else {
        echo "No se encontraron resultados.";
    }
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}

$conn = null;
?>
