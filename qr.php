<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generador de QR</title>
</head>
<body>
    <!-- Campo de texto para ingresar el texto a transformar -->
    <input type="text" id="textoQR" placeholder="Ingrese el texto para el código QR">

    <!-- Botón para generar el código QR -->
    <button onclick="genCode()">Generar QR</button>

    <!-- Contenedor para mostrar el código QR -->
   

  
</body>



</html>
<script src="qrcodejs/qrcode.min.js"></script>

<div id="codigo-qr"></div>

<script>
function genCode(){
    const valor1 = document.getElementById('textoQR').value;
const codigoQRDiv = document.getElementById('codigo-qr');
codigoQRDiv.innerHTML = '';
const codigoQR = new QRCode(codigoQRDiv, {
  text: valor1,
  width: 100,
  height: 100
});
}
</script>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lector de códigos QR</title>
</head>
<body>
    <h1>Lector de códigos QR</h1>
    <input type="file" id="archivoQR" accept="image/*">
    <div id="resultado"></div>

    <script>
        document.getElementById('archivoQR').addEventListener('change', function(event) {
            var archivo = event.target.files[0];
            var lector = new FileReader();

            lector.onload = function() {
                var imagen = new Image();
                imagen.src = lector.result;

                imagen.onload = function() {
                    var canvas = document.createElement('canvas');
                    var ctx = canvas.getContext('2d');
                    canvas.width = imagen.width;
                    canvas.height = imagen.height;
                    ctx.drawImage(imagen, 0, 0);

                    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    var codigoQR = decodeQR(imageData);

                    if (codigoQR) {
                        document.getElementById('resultado').innerText = 'Texto del código QR: ' + codigoQR;
                    } else {
                        document.getElementById('resultado').innerText = 'No se encontró ningún código QR.';
                    }
                };
            };

            lector.readAsDataURL(archivo);
        });

        function decodeQR(imageData) {
            var width = imageData.width;
            var height = imageData.height;
            var data = imageData.data;

            // Implementación básica para buscar un cuadro negro en el centro de la imagen
            // y asumir que es el código QR
            var centerX = Math.floor(width / 2);
            var centerY = Math.floor(height / 2);
            var blockSize = 10; // Tamaño del cuadro negro

            // Escanea el área alrededor del centro de la imagen
            for (var y = centerY - 10; y < centerY + 10; y++) {
                for (var x = centerX - 10; x < centerX + 10; x++) {
                    var isBlack = true;
                    for (var dy = 0; dy < blockSize; dy++) {
                        for (var dx = 0; dx < blockSize; dx++) {
                            var pixelIndex = ((y + dy) * width + (x + dx)) * 4;
                            var r = data[pixelIndex];
                            var g = data[pixelIndex + 1];
                            var b = data[pixelIndex + 2];
                            if (r + g + b > 100) {
                                isBlack = false;
                                break;
                            }
                        }
                        if (!isBlack) {
                            break;
                        }
                    }
                    if (isBlack) {
                        // Simplemente devuelve un valor fijo para fines de demostración
                        return "Texto del código QR";
                    }
                }
            }
            return null;
        }
    </script>
</body>
</html>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generador de Código de Barras</title>
    <!-- Incluye la biblioteca JsBarcode -->
    <script src="https://cdn.jsdelivr.net/npm/jsbarcode@3.11.0/dist/JsBarcode.all.min.js"></script>
</head>
<body>
    <h1>Generador de Código de Barras</h1>
    <input type="text" id="codigoInput" placeholder="Introduce el código">
    <button onclick="generarCodigoDeBarras()">Generar Código de Barras</button>
    <br>
    <!-- Aquí se mostrará el código de barras generado -->
    <svg id="barcode"></svg> <!-- Cambia el elemento a <svg> -->

    <script>
        function generarCodigoDeBarras() {
            // Obtiene el valor del input
            var codigo = document.getElementById("codigoInput").value;
            // Genera el código de barras en el elemento SVG con el ID "barcode"
            JsBarcode("#barcode", codigo);
        }
    </script>
</body>
</html>

<?php
// Función para hacer ping a una dirección IP o un nombre de dominio
function ping($host) {
    $port = 80; // Puerto HTTP
    $timeout = 3; // Tiempo de espera en segundos

    $fp = @fsockopen($host, $port, $errno, $errstr, $timeout);
    if (!$fp) {
        return "$host no responde en el puerto $port";
    } else {
        return "$host responde en el puerto $port";
    }
    fclose($fp);
}

// Función para realizar un traceroute a una dirección IP o un nombre de dominio
function traceroute($host) {
    $output = shell_exec("traceroute " . escapeshellarg($host));
    echo "<pre>$output</pre>";
}

// Uso de las funciones para hacer ping y traceroute
$target = "google.com";
echo "Ping a $target:<br>";
ping($target);

echo "<br>Traceroute a $target:<br>";
traceroute($target);
?>
