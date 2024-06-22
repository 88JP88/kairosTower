<?php
// Configuración del servidor de correos
$hostname = '{imap.hostinger.com:993/imap/ssl}INBOX';
$username = 'test@lugma.digital';
$password = 'Colombia2020.';

// Conexión al servidor de correos
$inbox = imap_open($hostname, $username, $password) or die('No se pudo conectar al servidor de correos: ' . imap_last_error());

// Buscar todos los correos en la bandeja de entrada
$emails = imap_search($inbox, 'ALL');

// Verificar si se encontraron correos
if ($emails) {
    // Ordenar los correos por fecha de llegada en orden descendente
    rsort($emails);

    // Recorrer cada correo
    foreach ($emails as $email_number) {
        // Obtener la cabecera del correo
        $overview = imap_fetch_overview($inbox, $email_number, 0);
        $message = imap_fetchbody($inbox, $email_number, 1);
        
        // Mostrar la información del correo
        echo 'Asunto: ' . $overview[0]->subject . "<br>";
        echo 'De: ' . $overview[0]->from . "<br>";
        echo 'Fecha: ' . $overview[0]->date . "<br>";
        echo 'Mensaje: ' . $message . "<br><hr>";
    }
} else {
    echo 'No se encontraron correos';
}

// Cerrar la conexión con el servidor de correos
imap_close($inbox);
?>
