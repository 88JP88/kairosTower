
 

async function getInternalClientsPromise(data,containerData,containerInfo) {
  return new Promise(async (resolve, reject) => {
    try {
document.getElementById("loading-container").style.display = "flex";


const buttonContainer = document.getElementById("containerBtn");
if (buttonContainer) {
  buttonContainer.innerHTML = '';
}


// 2. Crear el botón dentro del contenedor
const button = document.createElement("button");
button.type = "button";
button.classList.add("btn", "btn-primary1", "edit-button1");
button.setAttribute("style", "color: #C70039;");
button.setAttribute("title", "VER CLIENTES ACTIVOS");
button.innerHTML = '<i class="fas fa-eye"></i>';

// Agregar el evento onclick para ejecutar las funciones
button.onclick = function() {
  changeSection('generalUsers');
              eraseContainers('containerGeneralUsersData','containerGeneralUsersInfo');
  createTable('tableGeneralUsers','containerGeneralUsersData', [
    'Acciones',
    'Id',
    'Cliente',
    'Nombre',
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
      'containerData':'tableGeneralUsers',
      'containerInfo':'containerGeneralUsersInfo'
  },
    {
      'filter':'unlock',
      'param':'unlock',
      'value':'all'
  }
      );
};

// 3. Agregar el contenedor con el botón al DOM
buttonContainer.appendChild(button);
document.body.appendChild(buttonContainer); // Puedes ajustar el contenedor según tu necesidad



const button1 = document.createElement("button");
button1.type = "button";
button1.classList.add("btn", "btn-primary1", "edit-button1");
button1.setAttribute("style", "color: #C70039;");
button1.setAttribute("title", "VER USUARIOS INACTIVOS");
button1.innerHTML = '<i class="fas fa-eye-slash"></i>';

button1.onclick = function() {
  changeSection('generalUsers');
              eraseContainers('containerGeneralUsersData','containerGeneralUsersInfo');
              createTable('tableInternalClients','containerGeneralUsersData', [
                'Acciones',
                'Id',
                'Cliente',
                'Nombre',
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
      'filter':'lock',
      'param':'lock',
      'value':'all'
  }
      );
};
buttonContainer.appendChild(button1);
document.body.appendChild(buttonContainer); // Puedes ajustar el contenedor según tu necesidad




const button2 = document.createElement("button");
button2.type = "button";
button2.classList.add("btn", "btn-primary1", "edit-button1");
button2.setAttribute("style", "color: #C70039;");
button2.setAttribute("title", "CREAR CLIENTE");
button2.innerHTML = '<i class="fas fa-folder-plus"></i>';

button2.onclick = function() {
  openModCreateExtClients();
  //getInternalClientsList();
};
buttonContainer.appendChild(button2);
document.body.appendChild(buttonContainer); // Puedes ajustar el contenedor según tu necesidad



if (data.response && data.response.response == "true") {
 //  const subInternalClients = `${subDomain}/kairosGateway/apiCore/v1/getInternalClients/${ranCodetask} ${apiKeytask}/`;
if(data.response.sentData.param=="unlock"){
  const cardContainer11 = document.querySelector("#"+containerData+" tbody");
  const cardContainer11Info = document.getElementById(containerInfo);
  cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
  cardContainer11Info.innerHTML = ""; 
  
  const card11Info = document.createElement("div");
  card11Info.classList.add("card");
      card11Info.innerHTML = ` <p><H2>CLIENTES</H2></p><p>${data.response.apiMessage}</p>`;
      cardContainer11Info.appendChild(card11Info);
    data.clients.forEach(info => {
      const row = document.createElement("tr");
      row.innerHTML = `
     
    
      <td>
      
      <div class="edit-container">
  
     
    
      <button class="btn btn-primary1 edit-button" style="width: 54px;height: 52px; font-size: 24px;" title="CONFIGURACIONES"
       onclick="
       createCalendarId(&quot;${info.clientId}&quot;);
      
       clientParamsStatus({
        'isEcommerceNow':'${info.infoClient.params.placeParams.isEcommerce}',
        'isMarketNow':'${info.infoClient.params.placeParams.isMarket}',
        'isWorkNow':'${info.infoClient.params.placeParams.isWork}',
        'isSiteNow':'${info.infoClient.params.placeParams.isPlace}',
        'isMultiPlaceNow':'${info.infoClient.params.placeParams.isMultiPlace}',
        'isMultiSiteNow':'${info.infoClient.params.siteParams.isMultiSite}',
        'isMultiElementNow':'${info.infoClient.params.elementParams.isMultiElement}',
        'isPointsSystemNow':'${info.infoClient.params.pointsParams.isPointsSystem}',
        'isStarsSystemNow':'${info.infoClient.params.pointsParams.isStarsSystem}',
        'isMultiClientNow':'${info.infoClient.params.clientParams.isMultiClient}',
        'isMultiTeamNow':'${info.infoClient.params.teamParams.isMultiTeam}',
        'isMultiProductNow':'${info.infoClient.params.productParams.isMultiProduct}',
        'maxProductNow':'${info.infoClient.params.productParams.maxQty}',
        'maxPlaceNow':'${info.infoClient.params.placeParams.maxQty}',
        'maxElementNow':'${info.infoClient.params.elementParams.maxQty}',
        'maxClientNow':'${info.infoClient.params.clientParams.maxQty}',
        'maxTeamNow':'${info.infoClient.params.teamParams.maxQty}',
        'maxSiteNow':'${info.infoClient.params.siteParams.maxQty}',
        'isMultiCategoryNow':'${info.infoClient.params.categoryParams.isMultiCategory}',
        'maxCategoryNow':'${info.infoClient.params.categoryParams.maxQty}',
        'isMultiCatalogNow':'${info.infoClient.params.catalogParams.isMultiCatalog}',
        'maxCatalogNow':'${info.infoClient.params.catalogParams.maxQty}',
        'isGraficsOrderNow':'${info.infoClient.params.orderParams.isGrafics}',
        'isAdvanceCalculateNow':'${info.infoClient.params.advanceCalculateParams.isAdvanceCalculate}',
        'isSaleAnalysisNow':'${info.infoClient.params.advanceCalculateParams.isSaleAnalysis}',
        'isGraficsNow':'${info.infoClient.params.graficParams.isGrafics}',
        'isBackupNow':'${info.infoClient.params.backupParams.isBackup}',
        'backupTimesNow':'${info.infoClient.params.backupParams.backupTimes}',
        'isGetbackNow':'${info.infoClient.params.getbackParams.isGetBack}',
        
        'isProdChainNow':'${info.infoClient.params.prodchainParams.isProdChain}',
        'isGetbackNow':'${info.infoClient.params.getbackParams.isGetBack}',
        'isSupportNow':'${info.infoClient.params.supportParams.isSupport}',
        'supportTypeNow':'${info.infoClient.params.supportParams.supportType}',

        'supportTimeNow':'${info.infoClient.params.supportParams.supportTime}',
        'isTrackerNow':'${info.infoClient.params.trackerParams.isTracker}',
        'isRoomsNow':'${info.infoClient.params.trackerParams.isRooms}',
        'isElementsNow':'${info.infoClient.params.trackerParams.isElements}',
        'isStyleNow':'${info.infoClient.params.styleParams.isStyle}'










      });
     
       getClientStyle(&quot;${info.clientId}&quot;);
       eraseContainers('containerCalendarDaysData','containerCalendarDaysInfo');
              createTable('tableInternalClients','containerCalendarDaysData', [
                                'Mes / Año',
                                'Días del mes',
                                'Días Disponibles',
                                'Activo',
                                'Acciones'
                            ]);
       getApiData(getCalendarDays,
        {
          'apiService':'apiCompanies',
          'apiVersion':'v1',
          'endPoint':'getCalendarDays'
      },
        {
          'containerData':'containerCalendarDaysData',
          'containerInfo':'containerCalendarDaysInfo',
          'modelView':'table',
      },
        {
          'filter':'${info.clientId}',
          'param':'all',
          'value':'all'
      }
          );
          changeSection('internalUsers');
          createResourceResourcesSection('resourceResource');
          createResourceTrackerSection('trackingResource');
           " >
        <i class="fas fa-cog"></i>
      </button>

     
      <button onclick="editExtClientStatus(this,&quot;${info.clientId}&quot;,&quot;status&quot;,&quot;0&quot;,&quot;client&quot;)" class="btn btn-primary1 edit-button" style="width: 54px;height: 52px; font-size: 24px;" title="BLOQUEAR">
      <i class="fas fa-ban"></i>
    </button>

    
    
    </div>

    

      </td>
      <td>${info.clientId}</td>
      <td>
      <div class="edit-container">
      <input type="text" class="form-control label-input" id="${info.clientId}" value="${info.clientName}" title="${info.clientName}" onclick="makeEditable(this)"> <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;clientName&quot;,&quot;client&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
     
      </div>
      </td>

      <td>
      <div class="edit-container">
      <input type="text" class="form-control label-input" id="${info.clientId}" value="${info.comments}" title="${info.comments}"> 
      <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;comments&quot;,&quot;client&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
      </div>
      </td>
      <td>${info.clientType}</td>
      <td>${info.name} ${info.lastName}</td>
      <td>${info.email} / ${info.contact}</td>
      <td>
      <div class="edit-container">
      <input type="text" class="form-control label-input" id="${info.clientId}" value="${info.isActive}"> <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;isActive&quot;,&quot;client&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
      </div>
      </td>
      <td>
      <button id="btnview${info.clientId}" onclick="openClose('btnview${info.clientId}','unview');openClose('btnunview${info.clientId}','view');openClose('allContainer${info.clientId}','view');" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-eye"></i>
</button>
<button id="btnunview${info.clientId}" style="display: none;" onclick="openClose('btnunview${info.clientId}','unview');openClose('btnview${info.clientId}','view');openClose('allContainer${info.clientId}','unview');" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-eye-slash"></i>
</button>

<div id="allContainer${info.clientId}" style="display: none;">
<b>Modelos de negocio:</b><br>

<div class="edit-container" style="display: flex;">


<p class="card-text" style="display: inline-block; margin-right: 10px;">E-Commerce: ${info.infoClient.params.placeParams.isEcommerce ===true?`APICA`:`NO APLICA`}</p>

  <select id="list-producttype${info.clientId}" class="form-control" name="lista1" required style="flex: 1;">
  <option value="false">No Aplica</option>
  <option value="true">Aplica</option>
  </select>
  <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;placeParams.isEcommerce&quot;,&quot;paramsBool&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
</div>
<div class="edit-container" style="display: flex;">


<p class="card-text" style="display: inline-block; margin-right: 10px;">Market: ${info.infoClient.params.placeParams.isMarket ===true?`APICA`:`NO APLICA`}</p>

  <select id="list-producttype${info.clientId}" class="form-control" name="lista1" required style="flex: 1;">
  <option value="false">No Aplica</option>
  <option value="true">Aplica</option>
  </select>
  <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;placeParams.isMarket&quot;,&quot;paramsBool&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
</div>
<div class="edit-container" style="display: flex;">


<p class="card-text" style="display: inline-block; margin-right: 10px;">Working: ${info.infoClient.params.placeParams.isWork ===true?`APICA`:`NO APLICA`}</p>

  <select id="list-producttype${info.clientId}" class="form-control" name="lista1" required style="flex: 1;">
  <option value="false">No Aplica</option>
  <option value="true">Aplica</option>
  </select>
  <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;placeParams.isWork&quot;,&quot;paramsBool&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
</div>
<div class="edit-container" style="display: flex;">


<p class="card-text" style="display: inline-block; margin-right: 10px;">Place: ${info.infoClient.params.placeParams.isPlace ===true?`APICA`:`NO APLICA`}</p>

  <select id="list-producttype${info.clientId}" class="form-control" name="lista1" required style="flex: 1;">
  <option value="false">No Aplica</option>
  <option value="true">Aplica</option>
  </select>
  <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;placeParams.isPlace&quot;,&quot;paramsBool&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
</div>


<b>Calendario:</b><br>

<div class="edit-container" style="display: flex;">


<p class="card-text" style="display: inline-block; margin-right: 10px;">Calendario: ${info.infoClient.params.trackerParams.isTracker ===true?`APICA`:`NO APLICA`}</p>

  <select id="list-producttype${info.clientId}" class="form-control" name="lista1" required style="flex: 1;">
  <option value="false">No Aplica</option>
  <option value="true">Aplica</option>
  </select>
  <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;trackerParams.isTracker&quot;,&quot;paramsBool&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
</div>
<div class="edit-container" style="display: flex;">


<p class="card-text" style="display: inline-block; margin-right: 10px;">Rooms: ${info.infoClient.params.trackerParams.isRooms ===true?`APICA`:`NO APLICA`}</p>

  <select id="list-producttype${info.clientId}" class="form-control" name="lista1" required style="flex: 1;">
  <option value="false">No Aplica</option>
  <option value="true">Aplica</option>
  </select>
  <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;trackerParams.isRooms&quot;,&quot;paramsBool&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
</div>
<div class="edit-container" style="display: flex;">


<p class="card-text" style="display: inline-block; margin-right: 10px;">Elementos: ${info.infoClient.params.trackerParams.isElements ===true?`APICA`:`NO APLICA`}</p>

  <select id="list-producttype${info.clientId}" class="form-control" name="lista1" required style="flex: 1;">
  <option value="false">No Aplica</option>
  <option value="true">Aplica</option>
  </select>
  <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;trackerParams.isElements&quot;,&quot;paramsBool&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
</div>
<b>Establecimiento:</b><br>

<div class="edit-container" style="display: flex;">


<p class="card-text" style="display: inline-block; margin-right: 10px;">Multiple: ${info.infoClient.params.placeParams.isMultiPlace ===true?`APICA`:`NO APLICA`}</p>

  <select id="list-producttype${info.clientId}" class="form-control" name="lista1" required style="flex: 1;">
  <option value="false">No Aplica</option>
  <option value="true">Aplica</option>
  </select>
  <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;placeParams.isMultiPlace&quot;,&quot;paramsBool&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
</div>

<p class="card-text">
<div class="edit-container" style="margin-bottom: 10px;">
  <p class="card-text" style="display: inline-block; margin-right: 10px;">max Qty: ${info.infoClient.params.placeParams.maxQty}</p>
  <input type="number" class="form-control label-input" id="${info.clientId}" value="${info.infoClient.params.placeParams.maxQty}" title="${info.keyWords}">
  <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;placeParams.maxQty&quot;,&quot;paramsNum&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
</div>
</p>

<b>Puestos:</b><br>

<div class="edit-container" style="display: flex;">


<p class="card-text" style="display: inline-block; margin-right: 10px;">Multiple: ${info.infoClient.params.siteParams.isMultiSite ===true?`APICA`:`NO APLICA`}</p>

  <select id="list-producttype${info.clientId}" class="form-control" name="lista1" required style="flex: 1;">
  <option value="false">No Aplica</option>
  <option value="true">Aplica</option>
  </select>
  <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;siteParams.isMultiSite&quot;,&quot;paramsBool&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
  <i class="fas fa-edit"></i>
  </button>
</div>

<p class="card-text">
<div class="edit-container" style="margin-bottom: 10px;">
  <p class="card-text" style="display: inline-block; margin-right: 10px;">max Qty: ${info.infoClient.params.siteParams.maxQty}</p>
  <input type="number" class="form-control label-input" id="${info.clientId}" value="${info.infoClient.params.siteParams.maxQty}" title="${info.keyWords}">
  <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;siteParams.maxQty&quot;,&quot;paramsNum&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
</div>
</p>

<b>Elementos:</b><br>

<div class="edit-container" style="display: flex;">


<p class="card-text" style="display: inline-block; margin-right: 10px;">Multiple: ${info.infoClient.params.elementParams.isMultiElement ===true?`APICA`:`NO APLICA`}</p>

  <select id="list-producttype${info.clientId}" class="form-control" name="lista1" required style="flex: 1;">
  <option value="false">No Aplica</option>
  <option value="true">Aplica</option>
  </select>
  <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;elementParams.isMultiElement&quot;,&quot;paramsBool&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
</div>

<p class="card-text">
<div class="edit-container" style="margin-bottom: 10px;">
  <p class="card-text" style="display: inline-block; margin-right: 10px;">max Qty: ${info.infoClient.params.elementParams.maxQty}</p>
  <input type="number" class="form-control label-input" id="${info.clientId}" value="${info.infoClient.params.elementParams.maxQty}" title="${info.keyWords}">
  <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;elementParams.maxQty&quot;,&quot;paramsNum&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
</div>
</p>


<b>Productos:</b><br>

<div class="edit-container" style="display: flex;">


<p class="card-text" style="display: inline-block; margin-right: 10px;">Multiple: ${info.infoClient.params.productParams.isMultiProduct ===true?`APICA`:`NO APLICA`}</p>

  <select id="list-producttype${info.clientId}" class="form-control" name="lista1" required style="flex: 1;">
  <option value="false">No Aplica</option>
  <option value="true">Aplica</option>
  </select>
  <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;productParams.isMultiProduct&quot;,&quot;paramsBool&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
  <i class="fas fa-edit"></i>
  </button>
</div>

<p class="card-text">
<div class="edit-container" style="margin-bottom: 10px;">
  <p class="card-text" style="display: inline-block; margin-right: 10px;">max Qty: ${info.infoClient.params.productParams.maxQty}</p>
  <input type="text" class="form-control label-input" id="${info.clientId}" value="${info.infoClient.params.productParams.maxQty}" title="${info.keyWords}">
  <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;productParams.maxQty&quot;,&quot;paramsNum&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
</div>
</p>


<b>Categorías:</b><br>

<div class="edit-container" style="display: flex;">


<p class="card-text" style="display: inline-block; margin-right: 10px;">Multiple: ${info.infoClient.params.categoryParams.isMultiCategory ===true?`APICA`:`NO APLICA`}</p>

  <select id="list-producttype${info.clientId}" class="form-control" name="lista1" required style="flex: 1;">
  <option value="false">No Aplica</option>
  <option value="true">Aplica</option>
  </select>
  <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;categoryParams.isMultiCategory&quot;,&quot;paramsBool&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
</div>

<p class="card-text">
<div class="edit-container" style="margin-bottom: 10px;">
  <p class="card-text" style="display: inline-block; margin-right: 10px;">max Qty: ${info.infoClient.params.categoryParams.maxQty}</p>
  <input type="text" class="form-control label-input" id="${info.clientId}" value="${info.infoClient.params.categoryParams.maxQty}" title="${info.keyWords}">
  <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;categoryParams.maxQty&quot;,&quot;paramsNum&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
</div>
</p>


<b>Catálogos:</b><br>

<div class="edit-container" style="display: flex;">


<p class="card-text" style="display: inline-block; margin-right: 10px;">Multiple: ${info.infoClient.params.catalogParams.isMultiCatalog ===true?`APICA`:`NO APLICA`}</p>

  <select id="list-producttype${info.clientId}" class="form-control" name="lista1" required style="flex: 1;">
  <option value="false">No Aplica</option>
  <option value="true">Aplica</option>
  </select>
  <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;catalogParams.isMultiCatalog&quot;,&quot;paramsBool&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
</div>

<p class="card-text">
<div class="edit-container" style="margin-bottom: 10px;">
  <p class="card-text" style="display: inline-block; margin-right: 10px;">max Qty: ${info.infoClient.params.catalogParams.maxQty}</p>
  <input type="text" class="form-control label-input" id="${info.clientId}" value="${info.infoClient.params.catalogParams.maxQty}" title="${info.keyWords}">
  <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;catalogParams.maxQty&quot;,&quot;paramsNum&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
</div>

</p>

<b>Clientes:</b><br>

<div class="edit-container" style="display: flex;">


<p class="card-text" style="display: inline-block; margin-right: 10px;">Multiple: ${info.infoClient.params.clientParams.isMultiClient ===true?`APICA`:`NO APLICA`}</p>

  <select id="list-producttype${info.clientId}" class="form-control" name="lista1" required style="flex: 1;">
  <option value="false">No Aplica</option>
  <option value="true">Aplica</option>
  </select>
  <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;clientParams.isMultiClient&quot;,&quot;paramsBool&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
</div>

<p class="card-text">
<div class="edit-container" style="margin-bottom: 10px;">
  <p class="card-text" style="display: inline-block; margin-right: 10px;">max Qty: ${info.infoClient.params.clientParams.maxQty}</p>
  <input type="text" class="form-control label-input" id="${info.clientId}" value="${info.infoClient.params.clientParams.maxQty}" title="${info.keyWords}">
  <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;clientParams.maxQty&quot;,&quot;paramsNum&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
</div>

</p>

<b>Equipo de trabajo:</b><br>

<div class="edit-container" style="display: flex;">


<p class="card-text" style="display: inline-block; margin-right: 10px;">Multiple: ${info.infoClient.params.teamParams.isMultiTeam ===true?`APICA`:`NO APLICA`}</p>

  <select id="list-producttype${info.clientId}" class="form-control" name="lista1" required style="flex: 1;">
  <option value="false">No Aplica</option>
  <option value="true">Aplica</option>
  </select>
  <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;teamParams.isMultiTeam&quot;,&quot;paramsBool&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
</div>

<p class="card-text">
<div class="edit-container" style="margin-bottom: 10px;">
  <p class="card-text" style="display: inline-block; margin-right: 10px;">max Qty: ${info.infoClient.params.teamParams.maxQty}</p>
  <input type="text" class="form-control label-input" id="${info.clientId}" value="${info.infoClient.params.teamParams.maxQty}" title="${info.keyWords}">
  <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;teamParams.maxQty&quot;,&quot;paramsNum&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
</div>

</p>

<b>Fidelización:</b><br>

<div class="edit-container" style="display: flex;">


<p class="card-text" style="display: inline-block; margin-right: 10px;">Puntos: ${info.infoClient.params.pointsParams.isPointsSystem ===true?`APICA`:`NO APLICA`}</p>

  <select id="list-producttype${info.clientId}" class="form-control" name="lista1" required style="flex: 1;">
  <option value="false">No Aplica</option>
  <option value="true">Aplica</option>
  </select>
  <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;pointsParams.isPointsSystem&quot;,&quot;paramsBool&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
</div>

<div class="edit-container" style="display: flex;">


<p class="card-text" style="display: inline-block; margin-right: 10px;">Estrellas: ${info.infoClient.params.pointsParams.isStarsSystem ===true?`APICA`:`NO APLICA`}</p>

  <select id="list-producttype${info.clientId}" class="form-control" name="lista1" required style="flex: 1;">
  <option value="false">No Aplica</option>
  <option value="true">Aplica</option>
  </select>
  <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;pointsParams.isStarsSystem&quot;,&quot;paramsBool&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
</div>
<b>Ordenes:</b><br>

<div class="edit-container" style="display: flex;">


<p class="card-text" style="display: inline-block; margin-right: 10px;">Gráficas: ${info.infoClient.params.orderParams.isGrafics ===true?`APICA`:`NO APLICA`}</p>

  <select id="list-producttype${info.clientId}" class="form-control" name="lista1" required style="flex: 1;">
  <option value="false">No Aplica</option>
  <option value="true">Aplica</option>
  </select>
  <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;orderParams.isGrafics&quot;,&quot;paramsBool&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
  <i class="fas fa-edit"></i>
  </button>
</div>



<b>Calculos:</b><br>

<div class="edit-container" style="display: flex;">


<p class="card-text" style="display: inline-block; margin-right: 10px;">Contable: ${info.infoClient.params.advanceCalculateParams.isAdvanceCalculate ===true?`APICA`:`NO APLICA`}</p>

  <select id="list-producttype${info.clientId}" class="form-control" name="lista1" required style="flex: 1;">
  <option value="false">No Aplica</option>
  <option value="true">Aplica</option>
  </select>
  <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;advanceCalculateParams.isAdvanceCalculate&quot;,&quot;paramsBool&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
  <i class="fas fa-edit"></i>
  </button>
</div>
<div class="edit-container" style="display: flex;">


<p class="card-text" style="display: inline-block; margin-right: 10px;">Análisis de venta: ${info.infoClient.params.advanceCalculateParams.isSaleAnalysis ===true?`APICA`:`NO APLICA`}</p>

  <select id="list-producttype${info.clientId}" class="form-control" name="lista1" required style="flex: 1;">
  <option value="false">No Aplica</option>
  <option value="true">Aplica</option>
  </select>
  <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;advanceCalculateParams.isSaleAnalysis&quot;,&quot;paramsBool&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
  <i class="fas fa-edit"></i>
  </button>
</div>


<b>Gráficas:</b><br>

<div class="edit-container" style="display: flex;">


<p class="card-text" style="display: inline-block; margin-right: 10px;">Gráficas: ${info.infoClient.params.graficParams.isGrafics ===true?`APICA`:`NO APLICA`}</p>

  <select id="list-producttype${info.clientId}" class="form-control" name="lista1" required style="flex: 1;">
  <option value="false">No Aplica</option>
  <option value="true">Aplica</option>
  </select>
  <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;graficParams.isGrafics&quot;,&quot;paramsBool&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
  <i class="fas fa-edit"></i>
  </button>
</div>
     

<b>Backups:</b><br>

<div class="edit-container" style="display: flex;">


<p class="card-text" style="display: inline-block; margin-right: 10px;">Backup: ${info.infoClient.params.backupParams.isBackup ===true?`APICA`:`NO APLICA`}</p>

  <select id="list-producttype${info.clientId}" class="form-control" name="lista1" required style="flex: 1;">
  <option value="false">No Aplica</option>
  <option value="true">Aplica</option>
  </select>
  <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;backupParams.isBackup&quot;,&quot;paramsBool&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
</div>

<p class="card-text">
<div class="edit-container" style="margin-bottom: 10px;">
  <p class="card-text" style="display: inline-block; margin-right: 10px;">: ${info.infoClient.params.backupParams.backupTimes}</p>
  <input type="text" class="form-control label-input" id="${info.clientId}" value="${info.infoClient.params.backupParams.backupTimes}" title="${info.keyWords}">
  <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;backupParams.backupTimes&quot;,&quot;paramsNum&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
</div>

</p>


<b>Devoluciones:</b><br>

<div class="edit-container" style="display: flex;">


<p class="card-text" style="display: inline-block; margin-right: 10px;">Devolución: ${info.infoClient.params.getbackParams.isGetBack ===true?`APICA`:`NO APLICA`}</p>

  <select id="list-producttype${info.clientId}" class="form-control" name="lista1" required style="flex: 1;">
  <option value="false">No Aplica</option>
  <option value="true">Aplica</option>
  </select>
  <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;getbackParams.isGetBack&quot;,&quot;paramsBool&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
</div>



<b>Cadena de producción:</b><br>

<div class="edit-container" style="display: flex;">


<p class="card-text" style="display: inline-block; margin-right: 10px;">Cadena: ${info.infoClient.params.prodchainParams.isProdChain ===true?`APICA`:`NO APLICA`}</p>

  <select id="list-producttype${info.clientId}" class="form-control" name="lista1" required style="flex: 1;">
  <option value="false">No Aplica</option>
  <option value="true">Aplica</option>
  </select>
  <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;prodchainParams.isProdChain&quot;,&quot;paramsBool&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
</div>


<b>Soporte:</b><br>

<div class="edit-container" style="display: flex;">


<p class="card-text" style="display: inline-block; margin-right: 10px;">Soporte: ${info.infoClient.params.supportParams.isSupport ===true?`APICA`:`NO APLICA`}</p>

  <select id="list-producttype${info.clientId}" class="form-control" name="lista1" required style="flex: 1;">
  <option value="false">No Aplica</option>
  <option value="true">Aplica</option>
  </select>
  <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;supportParams.isSupport&quot;,&quot;paramsBool&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
</div>

<p class="card-text">
<div class="edit-container" style="margin-bottom: 10px;">
  <p class="card-text" style="display: inline-block; margin-right: 10px;">Tipo: ${info.infoClient.params.supportParams.supportType}</p>
  <input type="text" class="form-control label-input" id="${info.clientId}" value="${info.infoClient.params.supportParams.supportType}" title="${info.keyWords}">
  <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;supportParams.supportType&quot;,&quot;paramsStr&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
</div>

</p>
<p class="card-text">
<div class="edit-container" style="margin-bottom: 10px;">
  <p class="card-text" style="display: inline-block; margin-right: 10px;">Tiempo: ${info.infoClient.params.supportParams.supportTime}</p>
  <input type="text" class="form-control label-input" id="${info.clientId}" value="${info.infoClient.params.supportParams.supportTime}" title="${info.keyWords}">
  <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;supportParams.supportTime&quot;,&quot;paramsStr&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
</div>

</p>
      </div>
      </td>
      
     
  
   
        
      `;
 
 
      cardContainer11.appendChild(row);
    });
    document.getElementById("loading-container").style.display = "none";
 
 

}
   
if(data.response.sentData.param=="lock"){
  const cardContainer11 = document.querySelector("#"+containerData+" tbody");7
    const cardContainer11Info = document.getElementById(containerInfo);
    cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
    cardContainer11Info.innerHTML = ""; 
    
    const card11Info = document.createElement("div");
    card11Info.classList.add("card");
        card11Info.innerHTML = `  <p><H2>CLIENTES</H2></p><p>${data.response.apiMessage}</p>`;
        cardContainer11Info.appendChild(card11Info);
    data.clients.forEach(info => {
      const row = document.createElement("tr");
      row.innerHTML = `
     
    
      <td>
      <div class="edit-container">
      <button onclick="editExtClientStatus(this,&quot;${info.clientId}&quot;,&quot;status&quot;,&quot;1&quot;,&quot;client&quot;)" class="btn btn-primary1 edit-button" title="DESBLOQUEAR">
      <i class="fas fa-check"></i>
      </button>
      <button onclick="editExtClientStatus(this,&quot;${info.clientId}&quot;,&quot;status&quot;,&quot;del&quot;,&quot;del&quot;)" class="btn btn-primary1 delete-button" title="ELIMINAR SOLO CLIENTE">
      <i class="fas fa-times"></i>
      </button>
      <button onclick="editExtClientStatus(this,&quot;${info.clientId}&quot;,&quot;status&quot;,&quot;delAll&quot;,&quot;delAll&quot;)" class="btn btn-primary1 delete-button" title="ELIMINAR TODA LA INFORMACIÓN DEL CLIENTE INCLUYENDO USUARIOS">
      <i class="fas fa-trash"></i>
      </button>
      
      </div>
      </td>
      <td>${info.clientId}</td>
      <td>
      <div class="edit-container">
      <input type="text" class="form-control label-input" id="${info.clientId}" value="${info.clientName}" title="${info.clientName}"> <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;clientName&quot;,&quot;client&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
      </div>
      </td>

      <td>
      <div class="edit-container">
      <input type="text" class="form-control label-input" id="${info.clientId}" value="${info.comments}" title="${info.comments}"> <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;comments&quot;,&quot;client&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
      </div>
      </td>
      <td>${info.clientType}</td>
      <td>${info.name} ${info.lastName}</td>
      <td>${info.email} / ${info.contact}</td>
      <td>
      <div class="edit-container">
      <input type="text" class="form-control label-input" id="${info.clientId}" value="${info.isActive}"> <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;isActive&quot;,&quot;client&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
      </div>
      </td>
    
  
   
        
      `;
 
 
      cardContainer11.appendChild(row);
    });
    document.getElementById("loading-container").style.display = "none";
 

}
   

resolve("Clientes obtenidos exitosamente: "+data.response.apiMessage); // Resuelve la promesa cuando los catálogos se obtienen correctamente

}
else {
  // Manejar el caso donde la respuesta no es 'true'
  const cardContainer11 = document.getElementById(containerData);
  cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
  const cardContainer11Info = document.getElementById(containerInfo);

  cardContainer11Info.innerHTML = ""; 
  const card11Info = document.createElement("div");
  card11Info.classList.add("card");
      card11Info.innerHTML = ` <p><H2>CLIENTES</H2></p> <p>${data.response.apiMessage}</p>
      <p>El filtro solicitado fue-> FILTRO: ${data.response.sentData.filter}, PARÁMETRO: ${data.response.sentData.param}, VALOR: ${data.response.sentData.value}</p>`;
      cardContainer11Info.appendChild(card11Info);

 
  //console.error("La respuesta no es 'true' "+data.response.response);
  document.getElementById("loading-container").style.display = "none";
}
} catch(error) {
    console.error("Error:", error);
    document.getElementById("loading-container").style.display = "none";
    reject(error); // Rechaza la promesa si hay un error
}
});
}


async function getInternalClients(data, containerData, containerInfo) {
  try {
      const message = await getInternalClientsPromise(data, containerData, containerInfo);
      console.log(message); // Manejar el mensaje de éxito
  } catch (error) {
      console.error(error); // Manejar el error
  }
}


    function togglePassword(button) {
        const passwordInput = button.previousElementSibling;
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            button.textContent = "Ocultar";
        } else {
            passwordInput.type = "password";
            button.textContent = "Mostrar";
        }
    }











    



function editExtClient(button, id,filter,param) {
  // Obtener el valor del campo de texto correspondiente al botón
  var input = button.previousElementSibling;
  var nombre = input.value;

  // Construir la URL con los parámetros de la petición GET
  var url = 'controller/putExtClient.php?clientId=' + encodeURIComponent(id)  + '&filter=' + encodeURIComponent(filter)+ '&value=' + encodeURIComponent(param)+ '&param=' + encodeURIComponent(nombre);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

      getMessage();
      
      if(param=="style"){
        getClientStyle(id);
      }
      if(param=="client"){
        getInternalClients('unlock');
      }
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
}


// Define una función para mostrar el modal de confirmación cerca del botón
function showConfirmationModalNearButton(message, onConfirm, button) {
  const modalContent = document.createElement('div');
  modalContent.className = 'confirm-modal-content-near-button';

  const messageElement = document.createElement('p');
  messageElement.textContent = message;

  const confirmButton = document.createElement('button');
  confirmButton.textContent = 'Aceptar';
  confirmButton.className = 'confirm-button';

  const cancelButton = document.createElement('button');
  cancelButton.textContent = 'Cancelar';
  cancelButton.className = 'cancel-button';

  // Agrega los elementos al modal
  modalContent.appendChild(messageElement);
  modalContent.appendChild(confirmButton);
  modalContent.appendChild(cancelButton);
  document.body.appendChild(modalContent);

  // Calcula la posición del modal cerca del botón
  const buttonRect = button.getBoundingClientRect();
  const modalRect = modalContent.getBoundingClientRect();

  // Calcula la posición derecha del botón
  const buttonRight = buttonRect.left + buttonRect.width;

  // Calcula la posición del modal para que esté a la derecha del botón
  const top = buttonRect.top + window.scrollY;
  const left = buttonRight + 350; // Agrega un margen a la derecha del botón

  modalContent.style.top = top + 'px';
  modalContent.style.left = left + 'px';

  // Agrega eventos a los botones
  confirmButton.addEventListener('click', () => {
    onConfirm();
    document.body.removeChild(modalContent);
  });

  cancelButton.addEventListener('click', () => {
    document.body.removeChild(modalContent);
  });
}

function editExtClientStatus(button, id,filter,status,param) {
  // Obtener el valor del campo de texto correspondiente al botón
  var input = button.previousElementSibling;
 // var nombre = input.value;

 if(status==1){var confirmMessage = '¿Seguro quieres desbloquear el cliente?';}
 if(status==0){var confirmMessage = '¿Seguro quieres bloquear el cliente?';}
 if(status=="del"){var confirmMessage = '¿Seguro quieres eliminar el cliente?';}
 if(status=="delAll"){var confirmMessage = '¿Seguro quieres eliminar el cliente con toda su información?';}
 showConfirmationModalNearButton(confirmMessage, () => {
  // Construir la URL con los parámetros de la petición GET
  var url = 'controller/putExtClient.php?clientId=' + encodeURIComponent(id)  + '&filter=' + encodeURIComponent(filter)+ '&value=' + encodeURIComponent(param)+ '&param=' + encodeURIComponent(status);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

      getMessage();
      if(status==1){
        getInternalClients('unlock');
      }
      if(status==0){
        getInternalClients('lock');
      }
      
      
     
      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
  },button);
}






async function getInternalClientsList() {

  const reposSelect = document.getElementById("repos-select234666");
  while (reposSelect.firstChild) {
    reposSelect.removeChild(reposSelect.firstChild);
  }
	fetch(epGetInternalClients+"unlock")
  .then(response => response.json())
  .then(data => {
    data.clients.forEach(info => {
      const option = document.createElement("option");
      option.value = info.clientId;
      option.text = info.clientName;
      reposSelect.add(option);
      console.log(info.clientName);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });

 }

 // Llamar a la función para obtener los datos del API

 function createCalendarId(clientId) {
  // Realiza la acción de creación de calendario utilizando el clientId
  // Puedes implementar esta función según tus necesidades
  sessionStorage.setItem('clientNow',clientId);
 
  
}



async function getInternalUserList(param) {

  const reposSelect = document.getElementById("list-internalusers");
  while (reposSelect.firstChild) {
    reposSelect.removeChild(reposSelect.firstChild);
  }
var uid=sessionStorage.getItem('clientNow');
	fetch(epGetGeneralUsers+param+"/"+uid)
  .then(response => response.json())
  .then(data => {
    data.users.forEach(info => {
      const option = document.createElement("option");
      option.value = info.userId+"|"+info.name+" "+info.lastName;
      option.text = info.name+" "+info.lastName;
      reposSelect.add(option);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });

 }

 // Llamar a la función para obtener los datos del API

 function createCalendarId(clientId) {
  // Realiza la acción de creación de calendario utilizando el clientId
  // Puedes implementar esta función según tus necesidades
  sessionStorage.setItem('clientNow',clientId);
 
  
}


async function getInternalUserList1(param) {

  const reposSelect = document.getElementById("list-internalusers1");
  while (reposSelect.firstChild) {
    reposSelect.removeChild(reposSelect.firstChild);
  }

  const url = window.location.href;

// Crear un objeto URL a partir de la URL actual
const urlObj = new URL(url);

// Obtener el valor del parámetro "parametro1"
var uid = urlObj.searchParams.get("clientId");
//var uid=sessionStorage.getItem('clientNow');
	fetch(epGetGeneralUsers+param+"/"+uid)
  .then(response => response.json())
  .then(data => {
    data.users.forEach(info => {
      const option = document.createElement("option");
      option.value = info.userId+"|"+info.name+" "+info.lastName;
      option.text = info.name+" "+info.lastName;
      reposSelect.add(option);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });

 }

 // Llamar a la función para obtener los datos del API

 function createCalendarId(clientId) {
  // Realiza la acción de creación de calendario utilizando el clientId
  // Puedes implementar esta función según tus necesidades
  sessionStorage.setItem('clientNow',clientId);
 
  
}





 async function getClientRoomsList1(timeid) {

  const reposSelect = document.getElementById("list-clientroom1");
  while (reposSelect.firstChild) {
    reposSelect.removeChild(reposSelect.firstChild);
  }
sessionStorage.setItem('timeNow',timeid);

const url = window.location.href;

// Crear un objeto URL a partir de la URL actual
const urlObj = new URL(url);



var apiData = {
   
  "clientId":urlObj.searchParams.get("clientId"),
  "filter": "",
  "param": timeid,
  "value": ""


};
var serviceName="kairosGateway";
var apiName="apiCompanies";
var apiVersion="v1";
var endPoint="getClientRooms";
// Construir la URL con los parámetros de la petición GET

const apiInfo = JSON.stringify(apiData);
fetch(sessionStorage.getItem('subDomain') +"/"+ serviceName+"/"+apiName+"/"+apiVersion+"/"+endPoint+"/"+sessionStorage.getItem('ranCode')+" "+sessionStorage.getItem('key')+"/"+apiInfo)

//var uid=sessionStorage.getItem('clientNow');
  .then(response => response.json())
  .then(data => {
    data.clientRoom.forEach(info => {
      const option = document.createElement("option");
      option.value = info.roomId;
      option.text = info.comments;
      reposSelect.add(option);
      
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });

 }


 // Llamar a la función para obtener los datos del API

 function createCalendarId(clientId) {
  // Realiza la acción de creación de calendario utilizando el clientId
  // Puedes implementar esta función según tus necesidades
  sessionStorage.setItem('clientNow',clientId);
 
  
}


function clientParamsStatus(data){
  for (const key in data) {
    sessionStorage.setItem(key, data[key]);
}


}