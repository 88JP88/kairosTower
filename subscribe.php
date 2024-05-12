<!DOCTYPE html>
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
                <!-- Opciones de cálculo por módulos -->
                <li>
                    <input type="checkbox" id="value1_mod" value="1000">
                    <label for="value1_mod">Módulo calendario(básico)</label>
                </li>
                <li>
                    <input type="checkbox" id="value2_mod" value="4990">
                    <label for="value2_mod">Módulo calendario(rooms elementos)</label>
                </li>
                <li>
                    <input type="checkbox" id="value3_mod" value="15990">
                    <label for="value3_mod">Módulo POS(básico)</label>
                </li>
                <li>
                    <input type="checkbox" id="value4_mod" value="15990">
                    <label for="value4_mod">Módulo E-commerce(básico)</label>
                </li>
                <li>
                    <input type="checkbox" id="value5_mod" value="9990">
                    <label for="value5_mod">Soporte 24/7</label>
                </li>
                <li>
                    <input type="checkbox" id="value6_mod" value="4990">
                    <label for="value6_mod">Soporte 8/7</label>
                </li>
            </ul>
            <div>
                <!-- Botones de cálculo por módulos -->
                <input type="button" value="Calcular Módulos Mensual" onclick="calculateModules('mensual')">
                <input type="button" value="Calcular Módulos Trimestral" onclick="calculateModules('trimestral')">
                <input type="button" value="Calcular Módulos Semestral" onclick="calculateModules('semestral')">
                <input type="button" value="Calcular Módulos Anual" onclick="calculateModules('anual')">
            </div>

            <hr> <!-- Separador -->

            <ul>
                <!-- Opciones de cálculo por paquetes -->
                <li>
                    <input type="checkbox" id="value1_pack" value="12000">
                    <label for="value1_pack">Paquete A</label>
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
                <!-- Botones de cálculo por paquetes -->
                <input type="button" value="Calcular Paquetes Mensual" onclick="calculatePackages('mensual')">
                <input type="button" value="Calcular Paquetes Trimestral" onclick="calculatePackages('trimestral')">
                <input type="button" value="Calcular Paquetes Semestral" onclick="calculatePackages('semestral')">
                <input type="button" value="Calcular Paquetes Anual" onclick="calculatePackages('anual')">
            </div>

            <hr> <!-- Separador -->

            <ul>
                <!-- Opciones de cálculo por funciones -->
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
                <!-- Botones de cálculo por funciones -->
                <input type="button" value="Calcular Funciones Mensual" onclick="calculateFunctions('mensual')">
                <input type="button" value="Calcular Funciones Trimestral" onclick="calculateFunctions('trimestral')">
                <input type="button" value="Calcular Funciones Semestral" onclick="calculateFunctions('semestral')">
                <input type="button" value="Calcular Funciones Anual" onclick="calculateFunctions('anual')">
            </div>

            <div>
                <!-- Botón de limpiar -->
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
