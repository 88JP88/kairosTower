<div class="container email-section" id="internalUsers1" style="text-align: left;">
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

            
                      
                  </div>
                  <div class="card-body">
                      <h5 style="color: #C70039"><i class="fas fa-guitar"></i>Elementos</h5>

                      <p class="card-text">
                    <button class="btn btn-primary1 view-button" style="width: 52px;height: 52px; font-size: 24px;"

                        onclick="
                        
                          eraseContainers('containerResourcesData','containerResourcesInfo');
               createTable('tableInternalClients1','containerResourcesData', [
                                 'Imágen',
                                 'Editar imágen',
                                 'Elemento',
                                 'Estado',
                                 'Caracteristicas',
                                 'Marca',
                                 'Tipo',
                                 'Estado Asignación',
                                 'Comentarios',
                                 'Valor por hora',
                                 'Eliminar'
                             ]);
                        getApiData(getElements,
                      {
                        'apiService':'apiCompanies',
                        'apiVersion':'v1',
                        'endPoint':'getClientElements'
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
                    });
                        " 
                      >
                      <i class="fas fa-eye"></i>
                    </button>
                </p>
                      
                <p class="card-text">
              <div class="edit-container">
  
  <button onclick="openModClientElementsCreate();" class="btn btn-primary1 create-button" style="width: 52px;height: 52px; font-size: 24px;">
    <i class="fas fa-plus"></i>
  </button>
</div>
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
                        eraseContainers('containerCommerceData','containerCommerceInfo');
               createTable('tableInternalClients1','containerCommerceData', [
                                 'Imágen',
                                 'Editar imágen',
                                 'Nombre',
                                 'Estado',
                                 'Descripción',
                                 'Tipo',
                                 'Valor de compra',
                                 'SKU',
                                 'EAN1',
                                 'EAN2',
                                 'Carac. técnicas',
                                 'Palabras clave',
                                 'Eliminar'
                             ]);
                        getApiData(getProducts,
                      {
                        'apiService':'apiCom',
                        'apiVersion':'v1',
                        'endPoint':'getProducts'
                    },
                      {
                        'containerData':'containerCommerceData',
                        'containerInfo':'containerCommerceInfo',
                        'modelView':'table',
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
                      <p class="card-text"><button onclick="openModal('clientProductCreate');" class="btn btn-primary1 create-button" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-plus"></i></button>
                    </p>
                      
                  </div>

                  <div class="card-body">
                      <h5 style="color: #C70039"><i class="fas fa-box"></i> CATÁLOGO</h5>

                      <p class="card-text">
                    <button class="btn btn-primary1 view-button" style="width: 52px;height: 52px; font-size: 24px;"

                        onclick="
                         eraseContainers('containerCommerceData','containerCommerceInfo');
               createTable('tableInternalClients1','containerCommerceData', [
                                 'Imágen',
                                 'Producto',
                                 'Estado',
                                 'Caracteristicas',
                                 'Tienda',
                                 'Categoría',
                                 'Stock actual',
                                 'Stock de seguridad',
                                 'Cantidad minima',
                                 'Cantidad maxima',
                                 'Precio de venta',
                                 'Promoción',
                                 'Promo Id',
                                 'Descuento',
                                 'Descuento caracts',
                                 'Punto de venta',
                                 'Ecoomerce',
                                 'Internal',
                                 'Stocked',
                                 'Unidad',
                                 'Unidad cantidad',
                                 'Cantidad x unidad',
                                 'Cantidad x unidad medida',
                                 'Eliminar'
                             ]);
                        getApiData(getCatalogs,
                      {
                        'apiService':'apiCom',
                        'apiVersion':'v1',
                        'endPoint':'getCatalogs'
                    },
                      {
                        'containerData':'containerCommerceData',
                        'containerInfo':'containerCommerceInfo',
                        'modelView':'table',
                    },
                      {
                        'filter':'all|all',
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
                        eraseContainers('containerCommerceData','containerCommerceInfo');
               createTable('tableInternalClients1','containerCommerceData', [
                                 'Categoría',
                                 'Estado',
                                 'Comentarios',
                                 'Sub-categoría',
                                 'Tipo',
                                 'Palabras clave',
                                 'Eliminar'
                             ]);
                        getApiData(getCategories,
                      {
                        'apiService':'apiCom',
                        'apiVersion':'v1',
                        'endPoint':'getCategories'
                    },
                      {
                        'containerData':'containerCommerceData',
                        'containerInfo':'containerCommerceInfo',
                        'modelView':'table',
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
                        eraseContainers('containerCommerceData','containerCommerceInfo');
               createTable('tableInternalClients1','containerCommerceData', [
                                 'Abrir',
                                 'Tienda',
                                 'Estado',
                                 'Comentarios',
                                 'Tipo',
                                 'Palabras clave',
                                 'Eliminar'
                             ]);
                        getApiData(getStores,
                      {
                        'apiService':'apiCom',
                        'apiVersion':'v1',
                        'endPoint':'getStores'
                    },
                      {
                        'containerData':'containerCommerceData',
                        'containerInfo':'containerCommerceInfo',
                        'modelView':'table',
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

                     
                      <p class="card-text"><button onclick="openModal('clientStoreCreate');" class="btn btn-primary1 create-button" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-plus"></i></button>
                    </p>
                      
                  </div>
       

        
        <div class="card-body">
                      <h5 style="color: #C70039"><i class="fas fa-phone"></i> CLIENTES</h5>

                      <p class="card-text">
                    <button class="btn btn-primary1 view-button" style="width: 52px;height: 52px; font-size: 24px;"

                        onclick="
                        eraseContainers('containerCommerceData','containerCommerceInfo');
               createTable('tableInternalClients1','containerCommerceData', [
                                 'Nombre',
                                 'Apellido',
                                 'Estado',
                                 'Correo',
                                 'Contacto',
                                 'Puntos',
                                 'Estrellas',
                                 'Tipo',
                                 'Eliminar'
                             ]);
                        getApiData(getCustomers,
                      {
                        'apiService':'apiClient',
                        'apiVersion':'v1',
                        'endPoint':'getCustomers'
                    },
                      {
                        'containerData':'containerCommerceData',
                        'containerInfo':'containerCommerceInfo',
                        'modelView':'table',
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

                     

                
                      <p class="card-text"><button onclick="openModal('clientCustomerCreate');" class="btn btn-primary1 create-button" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-plus"></i></button>
                    </p>
                      
                  </div>

                     
        <div class="card-body">
                      <h5 style="color: #C70039"><i class="fas fa-truck"></i> REPARTIDORES</h5>

                      <p class="card-text">
                    <button class="btn btn-primary1 view-button" style="width: 52px;height: 52px; font-size: 24px;"

                        onclick="
                         eraseContainers('containerCommerceData','containerCommerceInfo');
               createTable('tableInternalClients1','containerCommerceData', [
                'Nombre',
          'Apellido',
          'Estado',
          'Correo',
          'Contacto',
          'Parámetros',
          
          'Eliminar'
                             ]);
                        getApiData(getDelivery,
                      {
                        'apiService':'apiClient',
                        'apiVersion':'v1',
                        'endPoint':'getDelivery'
                    },
                      {
                        'containerData':'containerCommerceData',
                        'containerInfo':'containerCommerceInfo',
                        'modelView':'table',
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


                         <p class="card-text"><button onclick="openModal('clientDeliveryCreate');" class="btn btn-primary1 create-button" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-plus"></i></button>
                    </p>
                      
                  </div>
                
        </div>
        <p class="card-text">
        <div class="card-container"> 
          
                      <div id="containerCommerceInfo" class="card-container">
            <!-- Contenido de la sección expandible -->
        </div>
        <div id="containerCommerceData" class="card-container">
            <!-- Contenido de la sección expandible -->
        </div>
                      </div></p>
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


<script  src="../../scripts/gets/getClientConfig.js"></script>
<script  src="../../scripts/gets/getClientCommerce.js"></script>
<script  src="../../scripts/gets/getProducts.js"></script>
<script  src="../../scripts/gets/getCatalogs.js"></script>
<script  src="../../scripts/gets/getCategories.js"></script>
<script  src="../../scripts/gets/getcustomers.js"></script>
<script  src="../../scripts/gets/getDeliveries.js"></script>
<script  src="../../scripts/gets/getStores.js"></script>
<script  src="../../scripts/gets/getCalendar.js"></script>
<script  src="../../scripts/gets/getRooms.js"></script>
<script  src="../../scripts/gets/getElements.js"></script>

    

  
  
</div>

