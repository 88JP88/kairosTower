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
<body>
    <p class="expand-button" onclick="toggleExpandableSection()">CALENDARIO-></p>
    <div class="expandable-section" id="expandable-section">
        <div id="card-container" class="card-container">
            <!-- Contenido de la sección expandible -->
        </div>
    </div>
    <script>
        function toggleExpandableSection() {
            const expandableSection = document.getElementById("expandable-section");
            if (expandableSection.style.display === "block") {
                expandableSection.style.display = "none";
            } else {
                expandableSection.style.display = "block";
            }
        }
    </script>
    <p class="expand-button1" onclick="toggleExpandableSection1()">ESTILO-></p>
    <div class="expandable-section1" id="expandable-section1">
        <div id="card-clientStyle" class="card-container">
            <!-- Contenido de la sección expandible -->
        </div>
    </div>
    <script>
        function toggleExpandableSection1() {
            const expandableSection1 = document.getElementById("expandable-section1");
            if (expandableSection1.style.display === "block") {
                expandableSection1.style.display = "none";
            } else {
                expandableSection1.style.display = "block";
            }
        }
    </script>
</body>
</html>


<script  src="scripts/gets/getClientConfig.js"></script>

    


   