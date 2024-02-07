<!DOCTYPE html>
<html>
<head>
    <style>
        /* Estilos para el botón de expansión */
        .expand-button {
            cursor: pointer;
        }

        /* Estilos para la sección expandible */
        .expandable-section {
            display: none;
            padding: 10px;
            background-color: #FFF;
            color: white;
        }

        /* Estilos para el botón de expansión */
        .expand-button1 {
            cursor: pointer;
        }

        /* Estilos para la sección expandible */
        .expandable-section1 {
            display: none;
            padding: 10px;
            background-color: #FFF;
            color: white;
        }
    </style>
</head>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Cargar archivo CSV y convertirlo en JSON</title>
</head>
<body>
  <h3>ACTUALIZACIÓN MASIVA</h3>
    <input type="file" id="fileInputputcategorie">
    <div id="resultcategorie"></div>

    <script>
        document.getElementById('fileInputputcategorie').addEventListener('change', function(event) {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = function(event) {
                const csvData = event.target.result;
                const json = csvToJsonPutCategorie(csvData);
                document.getElementById('resultcategorie').innerText = JSON.stringify(json, null, 2);
            };

            reader.readAsText(file);
        });

        
    </script>
</body>
</html>
<body>
<div id="containerCategorieInfo" class="card-container">
            <!-- Contenido de la sección expandible -->
        </div>
<div id="containerCategorieData" class="card-container">
            <!-- Contenido de la sección expandible -->
        </div>
</body>
</html>


<script  src="scripts/gets/getClientCommerce.js"></script>

    


   