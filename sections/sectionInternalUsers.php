<div class="container email-section" id="internalUsers" style="text-align: left; backgroud-color:#13161a;" >
<p><button class="btn-primary1 edit-button1" style ="color: #C70039;"
              onclick="
              changeSection('generalUsers');
              eraseContainers('containerGeneralUsersData','containerGeneralUsersInfo');
              createTable('tableInternalClients','containerGeneralUsersData', [
                                'Acciones',
                                'Id',
                                'Cliente',
                                'Comentarios',
                                'Tipo de Cliente',
                                'Responsable',
                                'Contacto',
                                'Activo'
                            ]);
              getApiData(getInternalClients,
                      {
                        'apiService':'apiCore',
                        'apiVersion':'v1',
                        'endPoint':'getInternalClients'
                    },
                      {
                        'containerData':'tableInternalClients',
                        'containerInfo':'containerGeneralUsersInfo'
                    },
                      {
                        'filter':'unlock',
                        'param':'unlock',
                        'value':'all'
                    }
                        );

              "
                 id="schedule-tab" data-bs-toggle="tab" 
                data-bs-target="#schedule-tab-pane" type="button" role="tab" 
                aria-controls="schedule-tab-pane" aria-selected="true" style="color: #3c3c3b;">
                <i class="fas fa-backward"></i> 
                
                      </button>
                     
                    </p>



<div id="trackingResource1" class="box"></div>
                     

        
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




<div id="resourceResource1" class="box"></div>
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



<div id="onSiteResource1" class="box"></div>

                      
    <script>
        function toggleExpandableSection3() {
            const expandableSection1 = document.getElementById("expandable-section3");
            if (expandableSection1.style.display === "block") {
                expandableSection1.style.display = "none";
            } else {
                expandableSection1.style.display = "block";
            }
        }
    </script>




                      
    <script>
        function toggleExpandableSection4() {
            const expandableSection1 = document.getElementById("expandable-section4");
            if (expandableSection1.style.display === "block") {
                expandableSection1.style.display = "none";
            } else {
                expandableSection1.style.display = "block";
            }
        }
    </script>





<p class="expand-button1 box" onclick="toggleExpandableSection2()"><i class="fas fa-brush " ></i> ESTILO</p>
    <div class="expandable-section1" id="expandable-section2">
        <div id="card-clientStyle1" class="card-container">
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
<script  src="scripts/gets/getClientCommerce.js"></script>
<script  src="scripts/gets/getProducts.js"></script>
<script  src="scripts/gets/getCatalogs.js"></script>
<script  src="scripts/gets/getCategories.js"></script>
<script  src="scripts/gets/getcustomers.js"></script>
<script  src="scripts/gets/getDeliveries.js"></script>
<script  src="scripts/gets/getStores.js"></script>
<script  src="scripts/gets/getCalendar.js"></script>
<script  src="scripts/gets/getRooms.js"></script>
<script  src="scripts/gets/getElements.js"></script>
<script  src="scripts/gets/os.getPlaces.js"></script>
<script  src="scripts/gets/os.getSites.js"></script>
<script  src="scripts/gets/os.getElements.js"></script>
<script  src="scripts/gets/os.getProducts.js"></script>
<script  src="scripts/gets/os.getCategories.js"></script>
<script  src="scripts/gets/os.getCatalogs.js"></script>
<script  src="scripts/gets/os.getOrders.js"></script>
<script  src="scripts/gets/os.getEmployees.js"></script>
<script  src="scripts/gets/os.getCustomers.js"></script>
    

  
  
</div>

