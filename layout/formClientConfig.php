<!DOCTYPE html>
<html>
<head>
    
</head>
<body>
    <p class="expand-button" onclick="toggleExpandableSection();"><i class="fas fa-calendar"></i> CALENDARIO</p>
    <a onclick="changeSection('gtask');getIndentFullCalendar();"
               id="schedule-tab" data-bs-toggle="tab" data-bs-target="#schedule-tab-pane" type="button" 
               role="tab" aria-controls="schedule-tab-pane" aria-selected="true" style="color: #3c3c3b;">
               <i class="fas fa-warehouse"></i> 
              
              </a>
    <div class="expandable-section" id="expandable-section">
        <div id="containerCalendarDaysInfo" class="card-container">
            <!-- Contenido de la sección expandible -->
        </div>
        <div id="containerCalendarDaysData" class="card-container">
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





    <p class="expand-button1" onclick="toggleExpandableSection1()"><i class="fas fa-guitar"></i> RECURSOS</p>
    <div class="expandable-section1" id="expandable-section1">
        <div id="card-clientresources" class="card-container">
            <!-- Contenido de la sección expandible -->
            <div class="card-body">
                      <h5 style="color: #C70039"><i class="fas fa-home"></i>Rooms</h5>

                      <p class="card-text">
              <div class="edit-container">
  
  <button onclick="openModClientRooms();getApiData(getClientRooms,'apiCompanies','v1','getClientRooms','containerRoomsData','containerRoomsInfo','all','all','all');" class="btn btn-primary1 view-button" style="width: 52px;height: 52px; font-size: 24px;">
    <i class="fas fa-eye"></i>
  </button>
</div>
              </p>
                      
              <p class="card-text">
              <div class="edit-container">
  
  <button onclick="openModClientRoomsCreate();" class="btn btn-primary1 create-button" style="width: 52px;height: 52px; font-size: 24px;">
    <i class="fas fa-plus"></i>
  </button>
</div>
              </p>

            </p>
                      
                  </div>
                  <div class="card-body">
                      <h5 style="color: #C70039"><i class="fas fa-guitar"></i>Elementos</h5>
                      <p class="card-text"><button onclick="openModClientElements();getApiData(getElements,'apiCompanies','v1','getClientElements','containerElementsData','containerElementsInfo','all','all','all');" class="btn btn-primary1 view-button" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-eye"></i></button>
                      <p class="card-text"><button onclick="openModClientElementsCreate();" class="btn btn-primary1 create-button" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-plus"></i></button>
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





<p class="expand-button1" onclick="toggleExpandableSection3()"><i class="fas fa-store"></i> COMERCIO</p>
    <div class="expandable-section1" id="expandable-section3">
        <div id="card-clientresources" class="card-container">
            <!-- Contenido de la sección expandible -->
            <div class="card-body">
                      <h5 style="color: #C70039"><i class="fas fa-cube"></i> INVENTARIOS</h5>
                      <p class="card-text"><button onclick="openModal('clientProducts');getApiData(getProducts,'apiCom','v1','getProducts','containerProductsData','containerProductsInfo','all','all','all');" class="btn btn-primary1 view-button" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-eye"></i></button></p>
                      <p class="card-text"><button onclick="openModal('clientProductCreate');" class="btn btn-primary1 create-button" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-plus"></i></button>
                    </p>
                      
                  </div>

                  <div class="card-body">
                      <h5 style="color: #C70039"><i class="fas fa-box"></i> CATÁLOGO</h5>
                      <p class="card-text"><button onclick="openModal('clientCatalogs');getApiData(getCatalogs,'apiCom','v1','getCatalogs','containerCatalogsData','containerCatalogsInfo','all|all','all','all');getApiData(getClientStoresList,'apiCom','v1','getStores','list-storesListstoreq','containerCustomersInfo','all','all','all');" class="btn btn-primary1 view-button" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-eye"></i></button></p>
                      <p class="card-text"><button onclick="openModal('clientCatalogCreate');getApiData(getClientCategoriesListBtn,'apiCom','v1','getCategories','list-categoryListstadd','','all','all','all');getApiData(getClientStoresList,'apiCom','v1','getStores','list-storeListstadd','containerCustomersInfo','all','all','all');getApiData(getClientProductList,'apiCom','v1','getProducts','list-productListstadd','containerProductsInfo','all','all','all');" class="btn btn-primary1 create-button" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-plus"></i></button>
                    </p>
                      
                  </div>
                  <div class="card-body">
                      <h5 style="color: #C70039"><i class="fas fa-filter"></i> CATEGORÍAS</h5>
                      <p class="card-text"><button onclick="openModal('clientCategories');getApiData(getCategories,'apiCom','v1','getCategories','containerCategorieData','containerCategorieInfo','all','all','all');" class="btn btn-primary1 view-button" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-eye"></i></button></p>
                      <p class="card-text"><button onclick="openModal('clientCategorieCreate');getApiData(getClientCategoriesListBtnParent,'apiCom','v1','getCategories','list-categoryListstadd96','','all','all','all');" class="btn btn-primary1 create-button" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-plus"></i></button>
                    </p>
                      
                  </div>
                  <div class="card-body">
                      <h5 style="color: #C70039"><i class="fas fa-store"></i> TIENDAS</h5>
                      <p class="card-text"><button onclick="openModal('clientStores');getApiData(getStores,'apiCom','v1','getStores','containerStoresData','containerStoresInfo','all','all','all');" class="btn btn-primary1 view-button" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-eye"></i></button></p>
                      <p class="card-text"><button onclick="openModal('clientStoreCreate');" class="btn btn-primary1 create-button" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-plus"></i></button>
                    </p>
                      
                  </div>
       

        
        <div class="card-body">
                      <h5 style="color: #C70039"><i class="fas fa-phone"></i> CLIENTES</h5>
                      <p class="card-text"><button onclick="openModal('clientCustomers');getApiData(getCustomers,'apiClient','v1','getCustomers','containerCustomersData','containerCustomersInfo','all','all','all');" class="btn btn-primary1 view-button" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-eye"></i></button></p>
                      <p class="card-text"><button onclick="openModal('clientCustomerCreate');" class="btn btn-primary1 create-button" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-plus"></i></button>
                    </p>
                      
                  </div>

                     
        <div class="card-body">
                      <h5 style="color: #C70039"><i class="fas fa-truck"></i> REPARTIDORES</h5>
                      <p class="card-text"><button onclick="openModal('clientDelivery');getApiData(getDelivery,'apiClient','v1','getDelivery','containerDeliveryData','containerDeliveryInfo','all','all','all');" class="btn btn-primary1 view-button" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-eye"></i></button></p>
                      <p class="card-text"><button onclick="openModal('clientDeliveryCreate');" class="btn btn-primary1 create-button" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-plus"></i></button>
                    </p>
                      
                  </div>
        </div>
    </div>
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





<p class="expand-button1" onclick="toggleExpandableSection2()"><i class="fas fa-brush"></i> ESTILO</p>
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

    


   