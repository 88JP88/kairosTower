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
