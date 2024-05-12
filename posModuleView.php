<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Módulo POS - Sistema de Punto de Venta</title>
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
            text-align: left;
            display: none; /* Ocultar el texto inicialmente */
        }
        .cta-button {
            display: inline-block;
            padding: 15px 30px;
            background-color: #4CAF50;
            color: #fff;
            text-decoration: none;
            font-size: 20px;
            border-radius: 5px;
            transition: background-color 0.3s;
        }
        .cta-button:hover {
            background-color: #45a049;
        }
        .illustration {
            max-width: 100%;
            height: auto;
            margin-top: 50px;
        }
        /* Estilos para mostrar el texto cuando se pasa el cursor sobre el título */
        h3:hover + p {
            display: block;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Bienvenido al Módulo POS</h1>
        <p>Transforma tu negocio con nuestro sistema de Punto de Venta fácil de usar y potente.</p>
        <a href="#" class="cta-button">Empezar Ahora</a>

        <h2>El módulo POS proporciona una solución completa y eficiente para gestionar las operaciones de punto de venta de tu negocio. Con una amplia gama de funciones integradas, podrás llevar a cabo las transacciones de forma rápida y precisa, así como administrar todos los aspectos relacionados con las ventas y el inventario. Desde la gestión de productos hasta el procesamiento de pagos, el módulo POS te ofrece las herramientas necesarias para mejorar la eficiencia y la productividad de tu negocio. Con una interfaz fácil de usar y personalizable, podrás adaptar el sistema a tus necesidades específicas y garantizar una experiencia de compra fluida para tus clientes. Con el módulo POS, podrás impulsar el crecimiento de tu negocio y ofrecer un servicio excepcional a tus clientes.</h2>

        <!-- Títulos de los párrafos -->
        <h3>Ubicaciones</h3>
        <p>Este submódulo permite al usuario gestionar las distintas ubicaciones o sucursales de su negocio. Dependiendo del plan o suscripción seleccionada, se puede crear uno o más establecimientos. Cada ubicación puede tener su propia configuración y gestión independiente, lo que facilita la organización y el control de múltiples puntos de venta.</p>

        <h3>Puestos</h3>
        <p>El submódulo de Puestos está diseñado para gestionar los lugares de trabajo dentro de cada ubicación. Puede configurar y administrar mesas, áreas de trabajo o cualquier otro espacio donde los clientes realicen sus pedidos o se les brinde servicio. Con esta función, puede optimizar la distribución del espacio y mejorar la experiencia del cliente.</p>

        <h3>Elementos</h3>
        <p>Aquí puede definir y administrar los elementos que se encuentran en cada puesto de trabajo. Los elementos pueden ser tanto recursos estáticos, como equipos y utensilios, como móviles, como menús digitales o dispositivos de punto de venta. Esta funcionalidad le permite mantener un inventario detallado de los recursos necesarios para el funcionamiento eficiente de su negocio.</p>

        <h3>Productos</h3>
        <p>En este submódulo puede crear y gestionar los productos que ofrece su negocio. Cada producto puede ser único para su cliente y se comparte entre todas las ubicaciones. Esto simplifica la administración del inventario y garantiza la consistencia en la oferta de productos en todas las sucursales.</p>

        <h3>Categorías</h3>
        <p>La categorización de productos le permite organizar su catálogo de productos de manera lógica y coherente. Puede agrupar productos similares en categorías específicas, lo que facilita la navegación para sus clientes y la gestión de inventario para usted.</p>

        <h3>Catálogo</h3>
        <p>El catálogo es una lista completa de todos los productos disponibles, cada uno con su categoría correspondiente y ubicación. Esta función garantiza que el catálogo de productos sea único para cada ubicación o establecimiento, incluso si comparten algunos productos. Esto simplifica la gestión del inventario y garantiza una experiencia de compra coherente para los clientes.</p>

        <h3>Órdenes</h3>
        <p>Aquí puede crear y administrar las órdenes de productos o servicios. Facilita el proceso de venta al permitirle registrar pedidos, procesar pagos y realizar un seguimiento del estado de las órdenes. Además, puede generar informes detallados sobre las ventas y el desempeño del negocio.</p>

        <h3>Equipo</h3>
        <p>El submódulo de Equipo le permite gestionar el personal de su negocio. Puede agregar y administrar empleados, asignar roles y responsabilidades, y realizar un seguimiento del horario de trabajo. Esto ayuda a optimizar la productividad y la eficiencia operativa de su negocio.</p>

        <h3>Clientes</h3>
        <p>Aquí puede gestionar la información de sus clientes y establecer relaciones sólidas con ellos. Puede registrar datos como nombres, direcciones y preferencias de compra, lo que le permite ofrecer un servicio personalizado y establecer programas de fidelización de clientes. Además, puede generar informes detallados sobre el comportamiento de compra y la lealtad del cliente.</p>
    </div>
</body>
</html>
