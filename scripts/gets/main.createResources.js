function createResourceResourcesSection(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error("El contenedor especificado no existe.");
        return;
    }

    const htmlContent = `
    ${sessionStorage.getItem('isRoomsNow')==="true" || sessionStorage.getItem('isElementsNow')==="true"?
        `
        <p class="expand-button1" onclick="toggleExpandableSection1()"><i class="fas fa-guitar"></i> RECURSOS</p>
        <div class="expandable-section1" id="expandable-section1">
        ${sessionStorage.getItem('isRoomsNow')==="true"?
        `
        <div class="card-body">
        <h5 style="color: #C70039"><i class="fas fa-home"></i>Rooms</h5>
        <p class="card-text">
            <button class="btn btn-primary1 view-button" style="width: 52px;height: 52px; font-size: 24px;"
                onclick="
                    eraseContainers('containerResourcesData','containerResourcesInfo');
                    createTable('tableInternalClients1','containerResourcesData', [
                        'Room',
                        'Editar room',
                        'Estado',
                        'Asignaciones',
                        'Asignar elemento',
                        'Eliminar'
                    ]);
                    getApiData(getClientRooms, {
                        'apiService':'apiCompanies',
                        'apiVersion':'v1',
                        'endPoint':'getClientRooms'
                    }, {
                        'containerData':'containerResourcesData',
                        'containerInfo':'containerResourcesInfo',
                        'modelView':'table',
                    }, {
                        'filter':'all',
                        'param':'all',
                        'value':'all'
                    });
                ">
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
        `
        :``}
            
        ${sessionStorage.getItem('isElementsNow')==="true"?
        `
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
                            getApiData(getElements, {
                                'apiService':'apiCompanies',
                                'apiVersion':'v1',
                                'endPoint':'getClientElements'
                            }, {
                                'containerData':'containerResourcesData',
                                'containerInfo':'containerResourcesInfo',
                                'modelView':'table',
                            }, {
                                'filter':'all',
                                'param':'all',
                                'value':'all'
                            });
                        ">
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
        `
        :``}

            
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
`:
`
`}
    `;

    container.innerHTML = htmlContent;
}

// Llamar a la función para crear la sección de recursos en el contenedor especificado






function createResourceTrackerSection(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error("El contenedor especificado no existe.");
        return;
    }

    const htmlContent = `
    ${sessionStorage.getItem('isTrackerNow')==="true"?
        `
                     
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
`:
`
`}
    `;

    container.innerHTML = htmlContent;
}

// Llamar a la función para crear la sección de recursos en el contenedor especificado






function createResourceOnSiteSection(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error("El contenedor especificado no existe.");
        return;
    }

    const htmlContent = `
    ${sessionStorage.getItem('isElementNow')==="true" || sessionStorage.getItem('isPlaceActiveNow')==="true" || sessionStorage.getItem('isSiteNow')==="true" || sessionStorage.getItem('isProductNow')==="true" || sessionStorage.getItem('isCategoryNow')==="true" || sessionStorage.getItem('isCatalogNow')==="true" || sessionStorage.getItem('isTeamNow')==="true" || sessionStorage.getItem('isClientNow')==="true" || sessionStorage.getItem('isOrderNow')==="true"?
        `
                     
        <p class="expand-button1 box" onclick="
        saverResources(
        {
        'isOpenedBefore':'true',
        'openedBefore':'toggleExpandableSection4();',
        
        });toggleExpandableSection4()"><i class="fas fa-store"></i> On-Site</p>
        <div class="expandable-section1" id="expandable-section4">
            <div id="card-clientresources" class="card-container box">
                <!-- Contenido de la sección expandible -->
                ${sessionStorage.getItem('isPlaceActiveNow')==="true" ? `
                
                <div class="box">
                <h5 style="color: #C70039"><i class="fas fa-cube"></i> Ubicaciones</h5>
          <p class="card-text">
              <button class="button is-rounded" style="width: 52px;height: 52px; font-size: 24px;"

                  onclick="
                  modalClientVisualizer();
                 
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
                <p class="card-text"><button onclick="
                
                getApiData(getPlaces,
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
                  );" class="button is-rounded" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-plus"></i></button>
              </p>
                
            </div>
                `:``}
               
    

                ${sessionStorage.getItem('isSiteNow')==="true" ? `
                
                <div class="box">
                <h5 style="color: #C70039"><i class="fas fa-cube"></i> Puestos</h5>
          <p class="card-text">
              <button class="button is-rounded" style="width: 52px;height: 52px; font-size: 24px;"

                  onclick="
                 modalClientVisualizer();
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
                <p class="card-text"><button onclick="
                modalCreateSites();
                getApiData(getSites,
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
                  );" class="button is-rounded" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-plus"></i></button>
              </p>
                
            </div>
                `:``}


                ${sessionStorage.getItem('isElementNow')==="true" ? `
                
                <div class="box">
                <h5 style="color: #C70039"><i class="fas fa-cube"></i> Elementos</h5>
          <p class="card-text">
              <button class="button is-rounded" style="width: 52px;height: 52px; font-size: 24px;"

                  onclick="
                 
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
                  );" class="button is-rounded" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-plus"></i></button>
              </p>
                
            </div>
            
                `:``}

    
                    
                      
                     
                ${sessionStorage.getItem('isProductNow')==="true" ? `
                
                <div class="box">
                <h5 style="color: #C70039"><i class="fas fa-cube"></i> Productos</h5>
          <p class="card-text">
              <button class="button is-rounded" style="width: 52px;height: 52px; font-size: 24px;"

                  onclick="
               
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
                  );" class="button is-rounded" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-plus"></i></button>
              </p>
                
            </div>
            
                `:``}
    
                    
    
                           
                ${sessionStorage.getItem('isCategoryNow')==="true" ? `
                
                <div class="box">
                <h5 style="color: #C70039"><i class="fas fa-cube"></i> Categorias</h5>
          <p class="card-text">
              <button class="button is-rounded" style="width: 52px;height: 52px; font-size: 24px;"

                  onclick="
                 
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
                  );" class="button is-rounded" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-plus"></i></button>
              </p>
                
            </div>

            
                `:``}
                     
    
                     
    
                ${sessionStorage.getItem('isCatalogNow')==="true" ? `
                
                <div class="box">
                <h5 style="color: #C70039"><i class="fas fa-cube"></i> Catálogos</h5>
          <p class="card-text">
          <div id="chart_div_Catalogs_os" style="width: 200px; height: 200px;"></div>

              <button class="button is-rounded" style="width: 52px;height: 52px; font-size: 24px;"

                  onclick="
                
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
                  );" class="button is-rounded" style="width: 52px;height: 52px; font-size: 24px;"><i class="fas fa-plus"></i></button>
              </p>
                
            </div>

            
                `:``}
    
    
    
                ${sessionStorage.getItem('isOrderNow')==="true" ? `
                
                <div class="card-body">
                <h5 style="color: #C70039"><i class="fas fa-cube"></i> Ordenes</h5>
          <p class="card-text">
              <button class="btn btn-primary1 view-button" style="width: 52px;height: 52px; font-size: 24px;"

                  onclick="
                 
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

            
                `:``}
                    

                ${sessionStorage.getItem('isTeamNow')==="true" ? `
                
                <div class="card-body">
                <h5 style="color: #C70039"><i class="fas fa-cube"></i> Equipo</h5>
          <p class="card-text">
              <button class="btn btn-primary1 view-button" style="width: 52px;height: 52px; font-size: 24px;"

                  onclick="
                 
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

            
                `:``}
    
                ${sessionStorage.getItem('isClientNow')==="true" ? `
                
                <div class="card-body">
                <h5 style="color: #C70039"><i class="fas fa-cube"></i> Clientes</h5>
          <p class="card-text">
              <button class="btn btn-primary1 view-button" style="width: 52px;height: 52px; font-size: 24px;"

                  onclick="
               
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

            
                `:``}
    
                   
                  
    
                    
            </div>
            <p class="card-text">
            <div class="card-container"> 
              
                       
                          </div></p>
                          </div>
`:
`
`}
    `;

    container.innerHTML = htmlContent;
}





function createResourceBtnCreateOrder(containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
      console.error("El contenedor especificado no existe.");
      return;
  }

  const htmlContent = `
  ${urlObj.searchParams.get("st")==="market"?
      `
      <button style="color: white;" class="button is-rounded is-outlined is-responsive" onClick="editSiteHtml();createOsOrder('','createBtn');
      ">Crear orden</button>
`:
`
`}
${urlObj.searchParams.get("st")==="sites"?
      `
      <button class="button is-rounded is-outlined is-responsive" onClick="editSiteHtml();createOsOrder('','');">Crear orden</button>
`:
`
`}
  `;

  container.innerHTML = htmlContent;
  //console.log('llego a la funcion');
}

function createResourceBtnPay(containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
      console.error("El contenedor especificado no existe.");
      return;
  }

  const htmlContent = `
  ${urlObj.searchParams.get("st")==="market"?
      `
      <button onclick="payEditOrder('fromMarket');">Pagar</button>
`:
`
`}
${urlObj.searchParams.get("st")==="sites"?
      `
      <button onclick="payEditOrder('fromSite');">Pagar</button>
      `:
`
`}
  `;

  container.innerHTML = htmlContent;
  //console.log('llego a la funcion');
}

function saverResources(params){
if(params.isOpenedBefore=="true"){
  sessionStorage.setItem('isOpenedBefore',params.isOpenedBefore);

sessionStorage.setItem('openedBefore',params.openedBefore);

}

}
function returnSaverResources(){
  if(sessionStorage.getItem('isOpenedBefore')=="true"){
  
    const clientCode1 = sessionStorage.getItem('openedBefore');
    eval(clientCode1);  }
  
  
  }


  // Función para crear y agregar elementos HTML dentro de un div específico
function createHtmlElements(targetId, elements) {
  // Obtén el div objetivo usando su ID
  const targetDiv = document.getElementById(targetId);
  
  if (!targetDiv) {
      console.error(`No se encontró ningún elemento con el ID "${targetId}".`);
      return;
  }

  // Recorre el array de elementos para crear y agregar al div
  elements.forEach(element => {
      // Crea un nuevo elemento HTML
      const newElement = document.createElement(element.tag);

      if (element.html) {
        newElement.innerHTML = element.html;
    } else if (element.text) {
        newElement.textContent = element.text;
    }

      // Agrega atributos si se proporcionan
      if (element.attributes) {
          for (const [key, value] of Object.entries(element.attributes)) {
              newElement.setAttribute(key, value);
          }
      }
 // Si el elemento es un <select> y tiene opciones, agrégalas
 if (element.tag === 'select' && element.options) {
  element.options.forEach(option => {
      const newOption = document.createElement('option');
      newOption.textContent = option.text;
      newOption.value = option.value;
      if (option.attributes) {
          for (const [key, value] of Object.entries(option.attributes)) {
              newOption.setAttribute(key, value);
          }
      }
      newElement.appendChild(newOption);
  });
} // Si el elemento tiene hijos, crea y agrega sus hijos
if (element.children) {
    createHtmlElements(newElement, element.children);
}
      // Agrega el nuevo elemento al div objetivo
      targetDiv.appendChild(newElement);
  });
}

// Uso de la función para crear elementos dinámicamente

