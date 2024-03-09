<div class="container email-section" id="internalUsers" style="text-align: left;">
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




                     

                      
<p class="expand-button" onclick="toggleExpandableSection();"><i class="fas fa-calendar"></i> CALENDARIO</p>
    <a onclick="changeSection('gtask');getIndentFullCalendar();"
               id="schedule-tab" data-bs-toggle="tab" data-bs-target="#schedule-tab-pane" type="button" 
               role="tab" aria-controls="schedule-tab-pane" aria-selected="true" style="color: #3c3c3b;">
               
              
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
  

      
            <div class="card-body">
                      <h5 style="color: #C70039"><i class="fas fa-home"></i>Rooms</h5>
                      <p class="card-text">
                    <button class="btn btn-primary1 view-button" style="width: 52px;height: 52px; font-size: 24px;"

                        onclick="
                      //  openModClientRooms();
                         eraseContainers('containerResourcesData','containerResourcesInfo');
               createTable('tableInternalClients1','containerResourcesData', [
                                 'Room',
                                 'Editar room',
                                 'Estado',
                                 'Asignaciones',
                                 'Asignar elemento',
                                 'Eliminar'
                             ]);
                        getApiData(getClientRooms,
                      {
                        'apiService':'apiCompanies',
                        'apiVersion':'v1',
                        'endPoint':'getClientRooms'
                    },
                      {
                        'containerData':'containerResourcesData',
                        'containerInfo':'containerResourcesInfo',
                        'modelView':'table',
                    },
                      {
                        'filter':'all',
                        'param':'all',
                        'value':'all'
                    }
                        );" 
                      >
                      <i class="fas fa-eye"></i>
                    </button>
              
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

                      <p class="card-text">
                    <button class="btn btn-primary1 view-button" style="width: 52px;height: 52px; font-size: 24px;"

                        onclick="
                        openModClientElements();
                        getApiData(getElements,
                      {
                        'apiService':'apiCompanies',
                        'apiVersion':'v1',
                        'endPoint':'getClientElements'
                    },
                      {
                        'containerData':'containerElementsData',
                        'containerInfo':'containerElementsInfo'
                    },
                      {
                        'filter':'all',
                        'param':'all',
                        'value':'all'
                    }
                        );" 
                      >
                      <i class="fas fa-eye"></i>
                    </button>
                </p>
                      
                     
                      
                  </div>
                  <div id="card-clientresources" class="card-container">
            <!-- Contenido de la sección expandible -->
            <div id="containerResourcesInfo" class="card-container">
            <!-- Contenido de la sección expandible -->
        </div>
        <div id="containerResourcesData" class="card-container">
            <!-- Contenido de la sección expandible -->
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
                <p class="card-text">
                    <button class="btn btn-primary1 view-button" style="width: 52px;height: 52px; font-size: 24px;"

                        onclick="
                        openModal('clientProducts');
                        getApiData(getProducts,
                      {
                        'apiService':'apiCom',
                        'apiVersion':'v1',
                        'endPoint':'getProducts'
                    },
                      {
                        'containerData':'containerProductsData',
                        'containerInfo':'containerProductsInfo'
                    },
                      {
                        'filter':'all',
                        'param':'all',
                        'value':'all'
                    }
                        );" 
                      >
                      <i class="fas fa-eye"></i>
                    </button>
                </p>
                      <p class="card-text"><button onclick="openModal('clientProductCreate');" class="btn btn-primary1 create-button" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-plus"></i></button>
                    </p>
                      
                  </div>

                  <div class="card-body">
                      <h5 style="color: #C70039"><i class="fas fa-box"></i> CATÁLOGO</h5>

                      <p class="card-text">
                    <button class="btn btn-primary1 view-button" style="width: 52px;height: 52px; font-size: 24px;"

                        onclick="
                        openModal('clientCatalogs');
                        getApiData(getCatalogs,
                      {
                        'apiService':'apiCom',
                        'apiVersion':'v1',
                        'endPoint':'getCatalogs'
                    },
                      {
                        'containerData':'containerCatalogsData',
                        'containerInfo':'containerCatalogsInfo'
                    },
                      {
                        'filter':'all|all',
                        'param':'all',
                        'value':'all'
                    }
                        );
                        
                        getApiData(getClientStoresList,
                      {
                        'apiService':'apiCom',
                        'apiVersion':'v1',
                        'endPoint':'getStores'
                    },
                      {
                        'containerData':'list-storesListstoreq',
                        'containerInfo':'containerCustomersInfo'
                    },
                      {
                        'filter':'all',
                        'param':'all',
                        'value':'all'
                    }
                        );
                        " 
                      >
                      <i class="fas fa-eye"></i>
                    </button>
                </p>
                      
                <p class="card-text">
                    <button class="btn btn-primary1 view-button" style="width: 52px;height: 52px; font-size: 24px;"

                        onclick="
                        openModal('clientCatalogCreate');
                        getApiData(getClientCategoriesListBtn,
                      {
                        'apiService':'apiCom',
                        'apiVersion':'v1',
                        'endPoint':'getCategories'
                    },
                      {
                        'containerData':'list-categoryListstadd',
                        'containerInfo':''
                    },
                      {
                        'filter':'all',
                        'param':'all',
                        'value':'all'
                    }
                        );

                        getApiData(getClientStoresList,
                      {
                        'apiService':'apiCom',
                        'apiVersion':'v1',
                        'endPoint':'getStores'
                    },
                      {
                        'containerData':'list-storeListstadd',
                        'containerInfo':'containerCustomersInfo'
                    },
                      {
                        'filter':'all',
                        'param':'all',
                        'value':'all'
                    }
                        );

                        getApiData(getClientProductList,
                      {
                        'apiService':'apiCom',
                        'apiVersion':'v1',
                        'endPoint':'getProducts'
                    },
                      {
                        'containerData':'list-productListstadd',
                        'containerInfo':'containerProductsInfo'
                    },
                      {
                        'filter':'all',
                        'param':'all',
                        'value':'all'
                    }
                        );
                        " 
                      >
                      <i class="fas fa-plus"></i>
                    </button>
                </p>
                      
                      
                  </div>
                  <div class="card-body">
                      <h5 style="color: #C70039"><i class="fas fa-filter"></i> CATEGORÍAS</h5>
                      <p class="card-text">
                    <button class="btn btn-primary1 view-button" style="width: 52px;height: 52px; font-size: 24px;"

                        onclick="
                        openModal('clientCategories');
                        getApiData(getCategories,
                      {
                        'apiService':'apiCom',
                        'apiVersion':'v1',
                        'endPoint':'getCategories'
                    },
                      {
                        'containerData':'containerCategorieData',
                        'containerInfo':'containerCategorieInfo'
                    },
                      {
                        'filter':'all',
                        'param':'all',
                        'value':'all'
                    }
                        );" 
                      >
                      <i class="fas fa-eye"></i>
                    </button>
                </p>

                    
                <p class="card-text">
                    <button class="btn btn-primary1 view-button" style="width: 52px;height: 52px; font-size: 24px;"

                        onclick="
                        openModal('clientCategorieCreate');
                        getApiData(getClientCategoriesListBtnParent,
                      {
                        'apiService':'apiCom',
                        'apiVersion':'v1',
                        'endPoint':'getCategories'
                    },
                      {
                        'containerData':'list-categoryListstadd96',
                        'containerInfo':''
                    },
                      {
                        'filter':'all',
                        'param':'all',
                        'value':'all'
                    }
                        );" 
                      >
                      <i class="fas fa-plus"></i>
                    </button>
                </p>

                     
                      
                  </div>
                  <div class="card-body">
                      <h5 style="color: #C70039"><i class="fas fa-store"></i> TIENDAS</h5>

                      <p class="card-text">
                    <button class="btn btn-primary1 view-button" style="width: 52px;height: 52px; font-size: 24px;"

                        onclick="
                        openModal('clientStores');
                        getApiData(getStores,
                      {
                        'apiService':'apiCom',
                        'apiVersion':'v1',
                        'endPoint':'getStores'
                    },
                      {
                        'containerData':'containerStoresData',
                        'containerInfo':'containerStoresInfo'
                    },
                      {
                        'filter':'all',
                        'param':'all',
                        'value':'all'
                    }
                        );" 
                      >
                      <i class="fas fa-eye"></i>
                    </button>
                </p>

                     
                      <p class="card-text"><button onclick="openModal('clientStoreCreate');" class="btn btn-primary1 create-button" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-plus"></i></button>
                    </p>
                      
                  </div>
       

        
        <div class="card-body">
                      <h5 style="color: #C70039"><i class="fas fa-phone"></i> CLIENTES</h5>

                      <p class="card-text">
                    <button class="btn btn-primary1 view-button" style="width: 52px;height: 52px; font-size: 24px;"

                        onclick="
                        openModal('clientCustomers');
                        getApiData(getCustomers,
                      {
                        'apiService':'apiClient',
                        'apiVersion':'v1',
                        'endPoint':'getCustomers'
                    },
                      {
                        'containerData':'containerCustomersData',
                        'containerInfo':'containerCustomersInfo'
                    },
                      {
                        'filter':'all',
                        'param':'all',
                        'value':'all'
                    }
                        );" 
                      >
                      <i class="fas fa-eye"></i>
                    </button>
                </p>

                     

                
                      <p class="card-text"><button onclick="openModal('clientCustomerCreate');" class="btn btn-primary1 create-button" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-plus"></i></button>
                    </p>
                      
                  </div>

                     
        <div class="card-body">
                      <h5 style="color: #C70039"><i class="fas fa-truck"></i> REPARTIDORES</h5>

                      <p class="card-text">
                    <button class="btn btn-primary1 view-button" style="width: 52px;height: 52px; font-size: 24px;"

                        onclick="
                        openModal('clientDelivery');
                        getApiData(getDelivery,
                      {
                        'apiService':'apiClient',
                        'apiVersion':'v1',
                        'endPoint':'getDelivery'
                    },
                      {
                        'containerData':'containerDeliveryData',
                        'containerInfo':'containerDeliveryInfo'
                    },
                      {
                        'filter':'all',
                        'param':'all',
                        'value':'all'
                    }
                        );" 
                      >
                      <i class="fas fa-eye"></i>
                    </button>
                </p>


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

    

  
  
</div>

