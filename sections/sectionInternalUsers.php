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



<div id="trackingResource"></div>
                     

        
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




<div id="resourceResource"></div>
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




<p class="expand-button1" onclick="toggleExpandableSection4()"><i class="fas fa-store"></i> On-Site</p>
    <div class="expandable-section1" id="expandable-section4">
        <div id="card-clientresources" class="card-container">
            <!-- Contenido de la sección expandible -->
          
            <div class="card-body">
                      <h5 style="color: #C70039"><i class="fas fa-cube"></i> Ubicaciones</h5>
                <p class="card-text">
                    <button class="btn btn-primary1 view-button" style="width: 52px;height: 52px; font-size: 24px;"

                        onclick="
                        eraseContainers('containerOSData','containerOSInfo');
               createTable('tableInternalClients2','containerOSData', [
                                 'Ubicación',
                                 'Dirección',
                                 'Comentarios',
                                 'Contacto',
                                 'E-mail'
                             ]);
                        getApiData(getPlaces,
                      {
                        'apiService':'apiOS',
                        'apiVersion':'v1',
                        'endPoint':'getPlaces'
                    },
                      {
                        'containerData':'containerOSData',
                        'containerInfo':'containerOSInfo',
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
                      <p class="card-text"><button onclick="getApiData(getPlaces,
                      {
                        'apiService':'apiOS',
                        'apiVersion':'v1',
                        'endPoint':'getPlaces'
                    },
                      {
                        'containerData':'containerOSData',
                        'containerInfo':'containerOSInfo',
                        'modelView':'alert',
                    },
                      {
                        'filter':'all',
                        'param':'all',
                        'value':'all'
                    }
                        );" class="btn btn-primary1 create-button" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-plus"></i></button>
                    </p>
                      
                  </div>


                  <div class="card-body">
                      <h5 style="color: #C70039"><i class="fas fa-cube"></i> Puestos</h5>
                <p class="card-text">
                    <button class="btn btn-primary1 view-button" style="width: 52px;height: 52px; font-size: 24px;"

                        onclick="
                        eraseContainers('containerOSData','containerOSInfo');
               createTable('tableInternalClients2','containerOSData', [
                                 'Puesto',
                                 'Comentarios',
                                 'Ubicación'
                             ]);
                        getApiData(getSites,
                      {
                        'apiService':'apiOS',
                        'apiVersion':'v1',
                        'endPoint':'getSites'
                    },
                      {
                        'containerData':'containerOSData',
                        'containerInfo':'containerOSInfo',
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
                      <p class="card-text"><button onclick="getApiData(getSites,
                      {
                        'apiService':'apiOS',
                        'apiVersion':'v1',
                        'endPoint':'getSites'
                    },
                      {
                        'containerData':'containerOSData',
                        'containerInfo':'containerOSInfo',
                        'modelView':'alert',
                    },
                      {
                        'filter':'all',
                        'param':'all',
                        'value':'all'
                    }
                        );" class="btn btn-primary1 create-button" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-plus"></i></button>
                    </p>
                      
                  </div>
                  
                 


                  <div class="card-body">
                      <h5 style="color: #C70039"><i class="fas fa-cube"></i> Elementos</h5>
                <p class="card-text">
                    <button class="btn btn-primary1 view-button" style="width: 52px;height: 52px; font-size: 24px;"

                        onclick="
                        eraseContainers('containerOSData','containerOSInfo');
               createTable('tableInternalClients2','containerOSData', [
                                 'Elemento',
                                 'Comentarios',
                                 'Puesto',
                                 'Tipo'
                             ]);
                        getApiData(getElementsOS,
                      {
                        'apiService':'apiOS',
                        'apiVersion':'v1',
                        'endPoint':'getElements'
                    },
                      {
                        'containerData':'containerOSData',
                        'containerInfo':'containerOSInfo',
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
                      <p class="card-text"><button onclick="
                      
                      getApiData(getElementsOS,
                      {
                        'apiService':'apiOS',
                        'apiVersion':'v1',
                        'endPoint':'getElements'
                    },
                      {
                        'containerData':'list-OSSite',
                        'containerInfo':'containerOSInfo',
                        'modelView':'alert',
                    },
                      {
                        'filter':'all',
                        'param':'all',
                        'value':'all'
                    }
                        );" class="btn btn-primary1 create-button" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-plus"></i></button>
                    </p>
                      
                  </div>
                  

                  <div class="card-body">
                      <h5 style="color: #C70039"><i class="fas fa-cube"></i> Productos</h5>
                <p class="card-text">
                    <button class="btn btn-primary1 view-button" style="width: 52px;height: 52px; font-size: 24px;"

                        onclick="
                        eraseContainers('containerOSData','containerOSInfo');
               createTable('tableInternalClients2','containerOSData', [
                                 'Producto',
                                 'Características',
                                 'Comentarios',
                                 'SKU',
                                 'EAN1',
                                 'EAN2',
                                 'QR',
                                 'Activo',
                                 'Edición'
                             ]);
                        getApiData(getProductsOS,
                      {
                        'apiService':'apiOS',
                        'apiVersion':'v1',
                        'endPoint':'getProducts'
                    },
                      {
                        'containerData':'containerOSData',
                        'containerInfo':'containerOSInfo',
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
                      <p class="card-text"><button onclick="getApiData(getProductsOS,
                      {
                        'apiService':'apiOS',
                        'apiVersion':'v1',
                        'endPoint':'getProducts'
                    },
                      {
                        'containerData':'containerOSData',
                        'containerInfo':'containerOSInfo',
                        'modelView':'alert',
                    },
                      {
                        'filter':'all',
                        'param':'all',
                        'value':'all'
                    }
                        );" class="btn btn-primary1 create-button" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-plus"></i></button>
                    </p>
                      
                  </div>
                 

                  <div class="card-body">
                      <h5 style="color: #C70039"><i class="fas fa-cube"></i> Categorias</h5>
                <p class="card-text">
                    <button class="btn btn-primary1 view-button" style="width: 52px;height: 52px; font-size: 24px;"

                        onclick="
                        eraseContainers('containerOSData','containerOSInfo');
               createTable('tableInternalClients2','containerOSData', [
                                 'Categoría',
                                 'Comentarios',
                                 'Parent Info',
                                 'QR',
                                 'Activo',
                                 'Edición'
                             ]);
                        getApiData(getCategoriesOS,
                      {
                        'apiService':'apiOS',
                        'apiVersion':'v1',
                        'endPoint':'getCategories'
                    },
                      {
                        'containerData':'containerOSData',
                        'containerInfo':'containerOSInfo',
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
                      <p class="card-text"><button onclick="
                     
                      getApiData(getCategoriesOS,
                      {
                        'apiService':'apiOS',
                        'apiVersion':'v1',
                        'endPoint':'getCategories'
                    },
                      {
                        'containerData':'list-OSCategories',
                        'containerInfo':'containerOSInfo',
                        'modelView':'alert',
                    },
                      {
                        'filter':'all',
                        'param':'all',
                        'value':'all'
                    }
                        );" class="btn btn-primary1 create-button" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-plus"></i></button>
                    </p>
                      
                  </div>






                  
                  <div class="card-body">
                      <h5 style="color: #C70039"><i class="fas fa-cube"></i> Catálogos</h5>
                <p class="card-text">
                <div id="chart_div_Catalogs_os" style="width: 200px; height: 200px;"></div>

                    <button class="btn btn-primary1 view-button" style="width: 52px;height: 52px; font-size: 24px;"

                        onclick="
                        eraseContainers('containerOSData','containerOSInfo');
               createTable('tableInternalClients2','containerOSData', [
                                 'Producto',
                                 'Tienda',
                                 'Categoría',
                                 'Stock / Sec-Stock',
                                 'Comentarios',
                                 'Precio/ Precio regular / Ganancia',
                                'EAN1 / EAN2 / SKU',
                                'Descuento / Promoción',
                                'minQty / maxQty',
                                
                                 'Activo',
                                 'Edición'
                             ]);
                        getApiData(getCatalogsOS,
                      {
                        'apiService':'apiOS',
                        'apiVersion':'v1',
                        'endPoint':'getCatalogs'
                    },
                      {
                        'containerData':'containerOSData',
                        'containerInfo':'containerOSInfo',
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
                      <p class="card-text"><button onclick="
                      getApiData(getCatalogsOS,
                      {
                        'apiService':'apiOS',
                        'apiVersion':'v1',
                        'endPoint':'getCatalogs'
                    },
                      {
                        'containerData':'containerOSData',
                        'containerInfo':'containerOSInfo',
                        'modelView':'alert',
                    },
                      {
                        'filter':'all',
                        'param':'all',
                        'value':'all'
                    }
                        );" class="btn btn-primary1 create-button" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-plus"></i></button>
                    </p>
                      
                  </div>

                  <div class="card-body">
                      <h5 style="color: #C70039"><i class="fas fa-cube"></i> Ordenes</h5>
                <p class="card-text">
                    <button class="btn btn-primary1 view-button" style="width: 52px;height: 52px; font-size: 24px;"

                        onclick="
                        eraseContainers('containerOSData','containerOSInfo');
               createTable('tableInternalClients2','containerOSData', [
                                              'Estado',
                              'Total',
                                'Sub-Total',
                                
                                'Ahorro',
                                'Pago',
                                'Responsable'
                             ]);
                        getApiData(getOrdersOS,
                      {
                        'apiService':'apiOS',
                        'apiVersion':'v1',
                        'endPoint':'getOrders'
                    },
                      {
                        'containerData':'containerOSData',
                        'containerInfo':'containerOSInfo',
                        'modelView':'table',
                    },
                      {
                        'filter':'all',
                        'param':'all',
                        'value':'all'
                    }
                        );
                        getApiData(getSitesList,
                      {
                        'apiService':'apiOS',
                        'apiVersion':'v1',
                        'endPoint':'getSites'
                    },
                      {
                        'containerData':'OSSelectSiteFilterFilter',
                        'containerInfo':'containerOSInfo',
                        'modelView':'table',
                    },
                      {
                        'filter':'all',
                        'param':'all',
                        'value':'all'
                    }
                        );
                        getApiData(getPlacesList,
                      {
                        'apiService':'apiOS',
                        'apiVersion':'v1',
                        'endPoint':'getPlaces'
                    },
                      {
                        'containerData':'OSSelectPlaceOSFilter',
                        'containerInfo':'containerOSInfo',
                        'modelView':'table',
                    },
                      {
                        'filter':'all',
                        'param':'all',
                        'value':'all'
                    }
                        );
                        getApiData(getEmployeesList,
  {
    'apiService':'apiOS',
    'apiVersion':'v1',
    'endPoint':'getEmployees'
},
  {
    'containerData':'OSSelectOwnerOSFilter',
    'containerInfo':'containerOSInfo',
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
                      <p class="card-text"><button onclick="
                      openModal('OSCatCreate');
                      getApiData(getCategoriesOSList,
                      {
                        'apiService':'apiOS',
                        'apiVersion':'v1',
                        'endPoint':'getCategories'
                    },
                      {
                        'containerData':'list-OSCategories',
                        'containerInfo':'containerOSInfo',
                        'modelView':'table',
                    },
                      {
                        'filter':'all',
                        'param':'all',
                        'value':'all'
                    }
                        );" class="btn btn-primary1 create-button" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-plus"></i></button>
                    </p>
                      
                  </div>

                  <div class="card-body">
                      <h5 style="color: #C70039"><i class="fas fa-cube"></i> Equipo</h5>
                <p class="card-text">
                    <button class="btn btn-primary1 view-button" style="width: 52px;height: 52px; font-size: 24px;"

                        onclick="
                        eraseContainers('containerOSData','containerOSInfo');
               createTable('tableInternalClients2','containerOSData', [
                                              
                              'Nombre',
                                'Comentarios',
                                
                                'Contacto',
                                'Email',
                                'Rol',
                                'Cargo',
                                'Locación'
                             ]);
                        getApiData(getEmployeesOS,
                      {
                        'apiService':'apiOS',
                        'apiVersion':'v1',
                        'endPoint':'getEmployees'
                    },
                      {
                        'containerData':'containerOSData',
                        'containerInfo':'containerOSInfo',
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
                      <p class="card-text"><button onclick="
                      getApiData(getEmployeesOS,
                      {
                        'apiService':'apiOS',
                        'apiVersion':'v1',
                        'endPoint':'getEmployees'
                    },
                      {
                        'containerData':'containerOSData',
                        'containerInfo':'containerOSInfo',
                        'modelView':'alert',
                    },
                      {
                        'filter':'all',
                        'param':'all',
                        'value':'all'
                    }
                        );" class="btn btn-primary1 create-button" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-plus"></i></button>
                    </p>
                      
                  </div>
                  <div class="card-body">
                      <h5 style="color: #C70039"><i class="fas fa-cube"></i> Clientes</h5>
                <p class="card-text">
                    <button class="btn btn-primary1 view-button" style="width: 52px;height: 52px; font-size: 24px;"

                        onclick="
                        eraseContainers('containerOSData','containerOSInfo');
               createTable('tableInternalClients2','containerOSData', [
                                              
                              'Nombre',
                                'Comentarios',
                                
                                'Contacto',
                                'Email',
                                'Dirección',
                                'Locación'
                             ]);
                        getApiData(getCustomersOS,
                      {
                        'apiService':'apiOS',
                        'apiVersion':'v1',
                        'endPoint':'getCustomers'
                    },
                      {
                        'containerData':'containerOSData',
                        'containerInfo':'containerOSInfo',
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
                      <p class="card-text"><button onclick="getApiData(getCustomersOS,
                      {
                        'apiService':'apiOS',
                        'apiVersion':'v1',
                        'endPoint':'getCustomers'
                    },
                      {
                        'containerData':'containerOSData',
                        'containerInfo':'containerOSInfo',
                        'modelView':'alert',
                    },
                      {
                        'filter':'all',
                        'param':'all',
                        'value':'all'
                    }
                        );
                     " class="btn btn-primary1 create-button" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-plus"></i></button>
                    </p>
                      
                  </div>

                
        </div>
        <p class="card-text">
        <div class="card-container"> 
          
                      <div id="containerOSInfo" class="card-container">
            <!-- Contenido de la sección expandible -->
        </div>
        <div id="containerOSData" class="card-container">
            <!-- Contenido de la sección expandible -->
        </div>
                      </div></p>
                      </div>
                      
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

