<?php




$host = '31.170.167.153';
$dbname = 'u767251687_kronos';
$username = 'u767251687_kronos';
$password = 'Ns9|SR73>I==';
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Sentencia SQL para la inserción
    $query = "INSERT INTO frontLogs (logId, logValue, logType) VALUES (?, ?, ?)";

    // Preparar la consulta
    $statement = $pdo->prepare($query);

    // Valores a insertar
    $logId = '12345678';
    $logValue = '{"valor":""}';
    $logType = 'tipo de log';

    // Ejecutar la consulta con los valores
    $result = $statement->execute([$logId, $logValue, $logType]);

    if ($result) {
        echo "true|¡Producto creado con éxito!";
    } else {
        echo "false|Error al insertar el registro";
    }
} catch (PDOException $e) {
    // Manejo de errores de la conexión o consulta
    echo "false|Error: " . $e->getMessage();
}


?>