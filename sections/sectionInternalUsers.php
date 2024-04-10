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
                                 'PRODUCTO',
                                 'SKU',
                                 'EAN1',
                                 'EAN2',
                                 'QR',
                                 'ESTADO',
                                 'EDICIÒN'
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
                                 
                                 'Producto',
                                
                                
                                 'Stock',
                                 'Precio',
                                 
                                 'Locación',
                                'ean1',
                                'ean2',
                                'sku',
                                 
                                 'QR',
                                 'Estado',
                                 'Ampliar',
                                 'Edición'
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
                                 'Palabras clave',
                                 'QR',
                                 'Estado',
                                 'Edición'
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
                                 
                                 'Tienda',
                                 'Palabras clave',
                                 'QR',
                                 'Estado',
                                 'Edición'
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
                      <p class="card-text"><button onclick="openModal('OSPlaceCreate');" class="btn btn-primary1 create-button" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-plus"></i></button>
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
                      <p class="card-text"><button onclick="openModal('OSSiteCreate');getApiData(getPlacesList,
                      {
                        'apiService':'apiOS',
                        'apiVersion':'v1',
                        'endPoint':'getPlaces'
                    },
                      {
                        'containerData':'list-OSPlace',
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
                      <p class="card-text"><button onclick="openModal('OSElementCreate');getApiData(getSitesList,
                      {
                        'apiService':'apiOS',
                        'apiVersion':'v1',
                        'endPoint':'getSites'
                    },
                      {
                        'containerData':'list-OSSite',
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
                      <p class="card-text"><button onclick="openModal('OSProductCreate');" class="btn btn-primary1 create-button" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-plus"></i></button>
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
                      <h5 style="color: #C70039"><i class="fas fa-cube"></i> Catálogos</h5>
                <p class="card-text">
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
                      openModal('OSCatalogCreate');
                      getApiData(getProductsOSList,
                      {
                        'apiService':'apiOS',
                        'apiVersion':'v1',
                        'endPoint':'getProducts'
                    },
                      {
                        'containerData':'list-OSProductList',
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
                        'containerData':'list-OSPlaceList',
                        'containerInfo':'containerOSInfo',
                        'modelView':'table',
                    },
                      {
                        'filter':'all',
                        'param':'all',
                        'value':'all'
                    }
                        );
                        getApiData(getCategoriesOSList,
                      {
                        'apiService':'apiOS',
                        'apiVersion':'v1',
                        'endPoint':'getCategories'
                    },
                      {
                        'containerData':'list-OSCategoryList',
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
    

  
  
</div>

