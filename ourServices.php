<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page General</title>
    <style>
        /* Estilos CSS */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f2f2f2;
            color: #333;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 50px 20px;
            text-align: center;
        }
        h1 {
            font-size: 48px;
            color: #333;
            margin-bottom: 20px;
        }
        p {
            font-size: 18px;
            margin-bottom: 30px;
        }
        .module-link {
            display: inline-block;
            padding: 15px 30px;
            background-color: #4CAF50;
            color: #fff;
            text-decoration: none;
            font-size: 20px;
            border-radius: 5px;
            transition: background-color 0.3s;
            margin: 10px;
            cursor: pointer;
        }
        .module-link:hover {
            background-color: #45a049;
        }
        #module-content {
            margin-top: 50px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Nuestros Servicios</h1>
        <p>Nuestro sistema de gestión empresarial ofrece una amplia gama de módulos diseñados para satisfacer las necesidades específicas de tu negocio. Cada módulo se puede adquirir de manera independiente, lo que te permite personalizar tu experiencia según tus requerimientos únicos.

<br><br>Además, dentro de cada módulo, encontrarás una variedad de submódulos que también se pueden adquirir por separado, dependiendo de las necesidades específicas de tu negocio. Algunos de estos submódulos son obligatorios y vienen incluidos en la suscripción principal, mientras que otros ofrecen funciones adicionales que pueden ser adquiridas según sea necesario.

<br><br>Para simplificar el proceso de selección y ajustar el precio de la suscripción de acuerdo a tus necesidades, contamos con una calculadora integrada. Esta calculadora te permite seleccionar los módulos y submódulos que deseas adquirir y ajusta automáticamente el precio de la suscripción en función de tus elecciones.

<br><br>Ofrecemos diferentes tipos de suscripción, tanto en términos de duración (por ejemplo, mensual, trimestral, anual) como en forma de paquetes personalizados. Esto te brinda la flexibilidad de elegir la opción que mejor se adapte a tus necesidades y presupuesto.

<br><br>Contamos con dos plataformas principales para gestionar tu negocio: KAIROSTOWER y KAIROS. KAIROSTOWER es una plataforma administrativa diseñada para la gestión interna de tu negocio. Aquí podrás acceder a todas las herramientas y funciones necesarias para administrar eficientemente tu negocio, incluyendo la configuración de módulos, la gestión de usuarios y la generación de informes.

<br><br>Por otro lado, KAIROS es la interfaz que utilizarán tanto los clientes como los miembros del equipo de trabajo. Esta plataforma proporciona una experiencia intuitiva y fácil de usar para realizar compras, gestionar pedidos y comunicarse con el equipo. Con KAIROS, tus clientes disfrutarán de una experiencia de compra fluida y personalizada, mientras que tu equipo tendrá acceso a todas las herramientas necesarias para brindar un servicio excepcional.

<br><br>Con opciones flexibles de suscripción y una amplia gama de módulos y submódulos disponibles, puedes crear una solución que se adapte perfectamente a tu negocio y garantizar una experiencia óptima tanto para tus clientes como para tu equipo.

<br><br>Por solicitud del cliente, ofrecemos APIs de extracción y adjuntar información como un servicio adicional. Esto permite al cliente integrar nuestro sistema con el suyo de manera más completa y eficiente. Si el cliente requiere esta funcionalidad, se aplicará un costo adicional, que variará según las necesidades específicas del cliente.

<br><br>La disponibilidad de estas APIs amplía nuestra frontera y nos permite integrar nuestro sistema con el del cliente de manera más fluida y efectiva. Por ejemplo, si un cliente desea utilizar únicamente nuestro sistema de inventario, podemos generar un módulo específico solo para ese propósito, lo que permite una integración más sencilla y adaptada a las necesidades particulares del cliente. Esto garantiza que el cliente pueda aprovechar las funcionalidades específicas que ofrece nuestro sistema sin necesidad de implementar características adicionales que no son relevantes para su negocio.

<br><br>En resumen, nuestras APIs de extracción y adjuntar información ofrecen una forma flexible y personalizada de integrar nuestro sistema con el del cliente, lo que permite una colaboración más estrecha y una mejor adaptación a las necesidades individuales de cada negocio.
</p>
        <p>Selecciona un módulo para comenzar:</p>
        <div id="module-links">
            <span class="module-link" onclick="loadModule('posModuleView.php')">Módulo de servicios POS</span>
            <span class="module-link" onclick="loadModule('trackingModuleView.php')">Módulo de Seguimiento</span>
            <span class="module-link" onclick="loadModule('ecommerceModuleView.php')">Módulo de E-Commerce</span>
            <!-- Añade más enlaces según sea necesario -->
        </div>
        <div id="module-content"></div>
    </div>

    <script>
        function loadModule(moduleUrl) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("module-content").innerHTML = this.responseText;
                }
            };
            xhttp.open("GET", moduleUrl, true);
            xhttp.send();
        }
    </script>
</body>
</html>
