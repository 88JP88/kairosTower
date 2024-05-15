<!--<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora Básica</title>
    <style>
        /* Estilos CSS */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f2f2f2;
        }
        .container {
            max-width: 400px;
            margin: 100px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        input[type="button"] {
            width: calc(50% - 5px);
            height: 50px;
            font-size: 16px;
            margin: 5px;
            border: none;
            cursor: pointer;
        }
        input[type="text"] {
            width: 100%;
            margin-bottom: 10px;
            padding: 10px;
            font-size: 24px;
            text-align: right;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-sizing: border-box;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        ul li {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <form id="calculatorForm">
            <input type="text" id="display" readonly>
            <ul>
               
                <li>
                    <input type="checkbox" id="value1_mod" value="14990">
                    <label for="value1_mod">Módulo calendario(básico)</label>
                </li>
                <li>
                    <input type="checkbox" id="value2_mod" value="4990">
                    <label for="value2_mod">Módulo calendario(rooms elementos)</label>
                </li>
                <li>
                    <input type="checkbox" id="value3_mod" value="14990">
                    <label for="value3_mod">Módulo POS(básico)</label>
                </li>
                <li>
                    <input type="checkbox" id="value8_mod" value="5990">
                    <label for="value8_mod">Módulo POS(multi tienda) se requiere POS(básico)</label>
                </li>
                <li>
                    <input type="checkbox" id="value4_mod" value="14990">
                    <label for="value4_mod">Módulo E-commerce(básico)</label>
                </li>
                <li>
                    <input type="checkbox" id="value5_mod" value="5990">
                    <label for="value5_mod">Módulo E-commerce(multi tienda) se requiere E-commerce(básico)</label>
                </li>
                <li>
                    <input type="checkbox" id="value6_mod" value="9990">
                    <label for="value6_mod">Soporte 24/7</label>
                </li>
                <li>
                    <input type="checkbox" id="value7_mod" value="4990">
                    <label for="value7_mod">Soporte 8/7</label>
                </li>
            </ul>
            <div>
               
                <input type="button" value="Calcular Módulos Mensual" onclick="calculateModules('mensual')">
                <input type="button" value="Calcular Módulos Trimestral" onclick="calculateModules('trimestral')">
                <input type="button" value="Calcular Módulos Semestral" onclick="calculateModules('semestral')">
                <input type="button" value="Calcular Módulos Anual" onclick="calculateModules('anual')">
            </div>

            <hr> 

            <ul>
                
                <li>
                    <input type="checkbox" id="value1_pack" value="12000">
                    <label for="value1_pack">Paquete POS </label>
                </li>
                <li>
                    <input type="checkbox" id="value2_pack" value="20000">
                    <label for="value2_pack">Paquete B</label>
                </li>
                <li>
                    <input type="checkbox" id="value3_pack" value="35000">
                    <label for="value3_pack">Paquete C</label>
                </li>
            </ul>
            <div>
                
                <input type="button" value="Calcular Paquetes Mensual" onclick="calculatePackages('mensual')">
                <input type="button" value="Calcular Paquetes Trimestral" onclick="calculatePackages('trimestral')">
                <input type="button" value="Calcular Paquetes Semestral" onclick="calculatePackages('semestral')">
                <input type="button" value="Calcular Paquetes Anual" onclick="calculatePackages('anual')">
            </div>

            <hr> 

            <ul>
                
                <li>
                    <input type="checkbox" id="value1_func" value="3000">
                    <label for="value1_func">Función A</label>
                </li>
                <li>
                    <input type="checkbox" id="value2_func" value="5000">
                    <label for="value2_func">Función B</label>
                </li>
                <li>
                    <input type="checkbox" id="value3_func" value="7000">
                    <label for="value3_func">Función C</label>
                </li>
            </ul>
            <div>
                
                <input type="button" value="Calcular Funciones Mensual" onclick="calculateFunctions('mensual')">
                <input type="button" value="Calcular Funciones Trimestral" onclick="calculateFunctions('trimestral')">
                <input type="button" value="Calcular Funciones Semestral" onclick="calculateFunctions('semestral')">
                <input type="button" value="Calcular Funciones Anual" onclick="calculateFunctions('anual')">
            </div>

            <div>
                
                <input type="button" value="Borrar" onclick="clearDisplay()">
            </div>
        </form>
    </div>

    <script>
        // Función para calcular la suma total de los valores seleccionados para cada tipo de opción
        function calculateSum(option) {
            var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
            var sum = 0;
            for (var i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i].id.includes(option)) {
                    sum += parseFloat(checkboxes[i].value);
                }
            }
            return sum;
        }

        // Función para calcular el descuento según la periodicidad seleccionada para los módulos
        function calculateModules(periodicidad) {
            var sum = calculateSum('mod');
            if (periodicidad === 'trimestral') {
                sum *= 3; // Multiplica por 3 para trimestral
                sum *= 0.95; // Descuento del 5%
            } else if (periodicidad === 'semestral') {
                sum *= 6; // Multiplica por 6 para semestral
                sum *= 0.92; // Descuento del 8%
            } else if (periodicidad === 'anual') {
                sum *= 12; // Multiplica por 12 para anual
                sum *= 0.9; // Descuento del 10%
            }
            document.getElementById('display').value = sum.toFixed(2);
        }

        // Función para calcular el descuento según la periodicidad seleccionada para los paquetes
        function calculatePackages(periodicidad) {
            var sum = calculateSum('pack');
            if (periodicidad === 'trimestral') {
                sum *= 3; // Multiplica por 3 para trimestral
                sum *= 0.95; // Descuento del 5%
            } else if (periodicidad === 'semestral') {
                sum *= 6; // Multiplica por 6 para semestral
                sum *= 0.92; // Descuento del 8%
            } else if (periodicidad === 'anual') {
                sum *= 12; // Multiplica por 12 para anual
                sum *= 0.9; // Descuento del 10%
            }
            document.getElementById('display').value = sum.toFixed(2);
        }

        // Función para calcular el descuento según la periodicidad seleccionada para las funciones
        function calculateFunctions(periodicidad) {
            var sum = calculateSum('func');
            if (periodicidad === 'trimestral') {
                sum *= 3; // Multiplica por 3 para trimestral
                sum *= 0.95; // Descuento del 5%
            } else if (periodicidad === 'semestral') {
                sum *= 6; // Multiplica por 6 para semestral
                sum *= 0.92; // Descuento del 8%
            } else if (periodicidad === 'anual') {
                sum *= 12; // Multiplica por 12 para anual
                sum *= 0.9; // Descuento del 10%
            }
            document.getElementById('display').value = sum.toFixed(2);
        }

        // Función para limpiar el display y deseleccionar todos los checkboxes
        function clearDisplay() {
            document.getElementById('display').value = '';
            var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
            for (var i = 0; i < checkboxes.length; i++) {
                checkboxes[i].checked = false;
            }
        }
    </script>
</body>
</html>
    -->


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Planes de Suscripción</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f2f2f2;
        }
        .container {
            max-width: 1200px;
            margin: 50px auto;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        .card {
            width: calc(33.33% - 20px);
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin-bottom: 20px;
            padding: 20px;
            box-sizing: border-box;
        }
        .card h2 {
            font-size: 24px;
            margin-bottom: 10px;
        }
        .card p {
            font-size: 16px;
            color: #666;
            margin-bottom: 20px;
        }
        .card ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .card ul li {
            margin-bottom: 5px;
        }
        .cta-button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #4CAF50;
            color: #fff;
            text-decoration: none;
            font-size: 16px;
            border-radius: 5px;
            transition: background-color 0.3s;
        }
        .cta-button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="card">
            <h2>Suscripción Básica</h2>
            <p>El plan básico incluye las siguientes características:</p>
            <ul>
                <li>Funcionalidades básicas de punto de venta
                    <p>Un establecimiento</p>
                    <p>Creación y seguimiento de ordenes</p>
                    <p>Creación de elementos ilimitados</p>
                    <p>Creación de productos ilimitados</p>
                    <p>Creación de catálogos ilimitados</p>
                    <p>Creación de categorías ilimitadas</p>
                    <p>Creación de elementos ilimitados</p>
                    <p>Creación de equipo de trabajo ilimitado</p>
                </li>
                <li>Soporte técnico básico</li>
                <li>Actualizaciones regulares del software</li>
                <li>Una copia de seguridad descargable por mes</li>
            </ul>
            <a href="#" class="cta-button">Seleccionar Plan</a>
        </div>
        <div class="card">
            <h2>Suscripción Premium</h2>
            <p>El plan premium incluye todas las características del plan básico, además de:</p>
            <ul>
                <li>Funcionalidades avanzadas de punto de venta

                <p>Multi establecimiento</p>
                    <p>Creación y seguimiento de clientes</p>
                    <p>Sistema de fidelización por puntos y estrellas</p>
                    <p>Sstema de gráficas</p>
                </li>
                <li>Análisis de ventas detallados</li>
                <li>Integraciones con herramientas de gestión</li>
                <li>Cuatro copias de seguridad descargables por mes</li>
            </ul>
            <a href="#" class="cta-button">Seleccionar Plan</a>
        </div>
     
        <div class="card">
            <h2>Suscripción Personalizada</h2>
            <p>Construye tu plan de suscripción a medida con características específicas para tu negocio:</p>
            <ul>
            <li>Módulo de gestión de clientes</li>
                <li>Módulo de análisis de ventas</li>
               
                <li>Módulo de gestión de pedidos</li>
                <li>Módulo de gestión de devoluciones</li>
                <li>Módulo de gráficas</li>
                <li>Módulo de fidelización</li>
                <li>Módulo contable</li>
                <li>Módulo de cadena de producción</li>
                <li>Módulo de clientes</li>
                <li>Módulo de personal</li>
                <li>Módulo de ordenes</li>
                
            </ul>
            <a href="#" class="cta-button">Personalizar Plan</a>
        </div>
    </div>
</body>
</html>
