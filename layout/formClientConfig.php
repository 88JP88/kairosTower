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





    <p class="expand-button1" onclick="toggleExpandableSection1()">RECURSOS-></p>
    <div class="expandable-section1" id="expandable-section1">
        <div id="card-clientresources" class="card-container">
            <!-- Contenido de la sección expandible -->
            <div class="card-body">
                      <h5 style="color: #C70039">Rooms</h5>
                      <p class="card-text"><button onclick="openModClientRooms();getClientRooms();" class="btn btn-primary1">Verificar</button>
                      <p class="card-text"><button onclick="openModClientRoomsCreate();" class="btn btn-primary1">Crear room</button>
            </p>
                      
                  </div>
                  <div class="card-body">
                      <h5 style="color: #C70039">Elementos</h5>
                      <p class="card-text"><button onclick="openModClientElements();getClientElements();" class="btn btn-primary1">Verificar</button>
                      <p class="card-text"><button onclick="openModClientElementsCreate();" class="btn btn-primary1">Crear elemento</button>
                    </p>
                      
                  </div>
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



<p class="expand-button1" onclick="toggleExpandableSection2()">ESTILO-></p>
    <div class="expandable-section1" id="expandable-section2">
        <div id="card-clientStyle" class="card-container">
            <!-- Contenido de la sección expandible -->
        </div>
    </div>
    <script>
        function toggleExpandableSection2() {
            const expandableSection2 = document.getElementById("expandable-section2");
            if (expandableSection2.style.display === "block") {
                expandableSection2.style.display = "none";
            } else {
                expandableSection2.style.display = "block";
            }
        }
    </script>
</body>
</html>


<script  src="scripts/gets/getClientConfig.js"></script>

    


   