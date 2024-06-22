


  async function getSitesPromise(data, containerData, containerInfo,modelView) {
    return new Promise(async (resolve, reject) => {
        document.getElementById("loading-container").style.display = "flex";

        var idin = 1;
        try {
          if(modelView=="alert"){
               
            var sitesCounter=0;
            data.sites.forEach(info => {
 
 
              sitesCounter++;
            
              
             
            });
          if(sessionStorage.getItem('isMultiSiteNow')=="true"){
            if(sitesCounter<sessionStorage.getItem('maxSiteNow')){
           
            listTypeSite();
            getApiData(getPlacesList,
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
                );
              }if(sitesCounter>=sessionStorage.getItem('maxSiteNow')){
                alert("Máximo de sitios creados (TOTAL: "+sitesCounter+" / MÁXIMO: "+sessionStorage.getItem('maxSiteNow'));
                  }
          }
          if(sessionStorage.getItem('isMultiSiteNow')=="false"){
              if(sitesCounter>=1){
                alert("Máximo de sitios creados (TOTAL: "+sitesCounter+" / MÁXIMO: "+sessionStorage.getItem('maxSiteNow'));
                
              }
              if(sitesCounter<1){
              
                listTypeSite();
                getApiData(getPlacesList,
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
                    );
                
              }
          }
      
        }
            if (data.response && data.response.response == "true") {






              

    if(modelView=="table"){
               
      const cardContainer11 = document.querySelector("#"+containerData+" tbody");
      const cardContainer11Info = document.getElementById(containerInfo);
      cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
      cardContainer11Info.innerHTML = ""; 
      
      const card11Info = document.createElement("div");
      card11Info.classList.add("box");
      
          card11Info.innerHTML = ` <p><H4>PUESTOS</H4></p><p>${data.response.apiMessage}</p>`;
          cardContainer11Info.appendChild(card11Info);

    // Crear el primer botón
    const button1 = document.createElement('button');
    button1.setAttribute('type', 'button');
    button1.classList.add('btn', 'btn-primary1', 'edit-button1');
    button1.style.color = '#C70039';
    button1.title = 'VER USUARIOS ACTIVOS';
    button1.onclick = function() {
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

 

    
    };
    // Crear el icono del primer botón
    const icon1 = document.createElement('i');
    icon1.classList.add('fas', 'fa-globe');
    button1.appendChild(icon1);
    
    // Crear el primer contenedor div
    const div1 = document.createElement('div');
    div1.classList.add('mb-3');
    // Agregar la etiqueta y el select al primer contenedor div
    const label1 = document.createElement('label');
    label1.setAttribute('for', 'currency');
    label1.textContent = 'Busqueda por parámetro';
    div1.appendChild(label1);
    const select = document.createElement('select');
    select.id = 'OSSiteFilter';
    select.classList.add('form-control');
    select.name = 'currency';
    select.required = true;
   
    const option2 = document.createElement('option');
    option2.value = 'name';
    option2.textContent = 'Nombre puesto';
    const option3 = document.createElement('option');
    option3.value = 'comments';
    option3.textContent = 'Comentarios';
    const option4 = document.createElement('option');
    option4.value = 'placeId';
    option4.textContent = 'Ubicación';

    
    
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    div1.appendChild(select); 
    cardContainer11Info.appendChild(button1);
    cardContainer11Info.appendChild(div1);

     // Crear el segundo botón
     const button2 = document.createElement('button');
     button2.setAttribute('type', 'button');
     button2.classList.add('btn', 'btn-primary1', 'edit-button1');
     button2.style.color = '#C70039';
     button2.title = 'VER USUARIOS INACTIVOS';
     button2.id = 'filtercatalogs';
     // Crear el icono del segundo botón
     const icon2 = document.createElement('i');
     icon2.classList.add('fas', 'fa-sort');
     

     const div2 = document.createElement('div');
     div2.classList.add('mb-3');
     // Agregar la etiqueta y el input al segundo contenedor div
     const label2 = document.createElement('label');
     label2.classList.add('form-label');
     label2.innerHTML = '<i class="fas fa-guitar"></i> Parámetro en especifico';
     div2.appendChild(label2);
     const input = document.createElement('input');
     input.setAttribute('type', 'text');
     input.classList.add('form-control');
     input.id = 'OSSiteValue';
     input.placeholder = 'Ingresa palabra a buscar';
     div2.appendChild(input);
     button2.appendChild(icon2);
     cardContainer11Info.appendChild(div2);
     cardContainer11Info.appendChild(button2);


     button2.addEventListener('click', function() {
              
      var param = document.getElementById("OSSiteFilter").value;
var value = document.getElementById("OSSiteValue").value;
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
         'filter':'filter',
         'param':param,
         'value':value
     }
         );
       // getApiData(getProducts,'apiCom','v1','getProducts','containerProductsData','containerProductsInfo','filter',param,value);
      
        // Aquí puedes agregar la funcionalidad que deseas para el botón 2
    });
    data.sites.forEach(info => {
     
     
      const row = document.createElement("tr");
      
      const backgroundColor = info.infoSite.params.isActive === "0" ? "  #cc0007" : "#ffffff";
      const activo1 = info.infoSite.params.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
      
      row.innerHTML = `
     
    
    
      
      <td style="background-color: ${backgroundColor};"> <div class="edit-container">
      <input type="text" class="form-control label-input" id="${info.siteId}" value="${info.infoSite.info.name}" title="${info.deliveryName}">
      <button onclick="editOSSite(this,&quot;${info.clientId}&quot;,&quot;${info.siteId}&quot;,&quot;name&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
      </div></td>

     

      <td style="background-color: ${backgroundColor};"> <div class="edit-container">
      <input type="text" class="form-control label-input" id="${info.siteId}" value="${info.infoSite.info.comments}" title="${info.deliveryName}">
      <button onclick="editOSSite(this,&quot;${info.clientId}&quot;,&quot;${info.siteId}&quot;,&quot;comments&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
      </div></td>

    

      <td style="background-color: ${backgroundColor};"> 
      <div class="mb-3">
    
      
      <p class="card-text" style="display: inline-block; margin-right: 10px;">${info.placeName}</p>
        <select id="list-placeName${idin}" class="form-control" name="lista1" required style="flex: 1;"></select>
        <button onclick="editOSSite(this,&quot;${info.clientId}&quot;,&quot;${info.siteId}&quot;,&quot;placeId&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
          <i class="fas fa-edit"></i>
        </button>
      
    </div>
    
    </td>

    <td style="background-color: ${backgroundColor};"> 
      <div class="mb-3">
    
      
      <p class="card-text" style="display: inline-block; margin-right: 10px;">${info.infoSite.params.siteType}</p>
        <select id="list-placeType${idin}" class="form-control" name="lista1" required style="flex: 1;">
        <option value="siteswork">puesto de trabajo</option>
    <option value="site">Mesa</option>
    <option value="marketbox">Caja registradora</option>
        </select>
        <button onclick="editOSSite(this,&quot;${info.clientId}&quot;,&quot;${info.siteId}&quot;,&quot;siteType&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
          <i class="fas fa-edit"></i>
        </button>
      
    </div>
    
    </td>

      `;
     
      cardContainer11.appendChild(row);
      getApiData(getPlacesList,
        {
          'apiService':'apiOS',
          'apiVersion':'v1',
          'endPoint':'getPlaces'
      },
        {
          'containerData':'list-placeName'+idin,
          'containerInfo':'',
      },
        {
          'filter':'all',
          'param':'all',
          'value':'all'
      }
          );
      //getApiData(getClientCategoriesList,'apiCom','v1','getCategories','list-categoriesList'+idin,info.categoryId+"|"+info.parentId,'all','all','all');
      //getClientCategoriesList('all','all','all',idin);
     
     // getApiData(getClientStoresList,'apiCom','v1','getStores','list-storesListstore'+idin,'containerCustomersInfo','all','all','all');

   
      idin++;
     
    });

   
    
    

  }


              if(modelView=="cardOS"){
                const cardContainer11 = document.getElementById(containerData);
                const cardContainer11Info = document.getElementById(containerInfo);
                cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
                cardContainer11Info.innerHTML = "";
                const card11Info = document.createElement("div");
                card11Info.classList.add("card");
                card11Info.innerHTML = `<p>${data.response.apiMessage}</p>`;
                cardContainer11Info.appendChild(card11Info);

                for (const info of data.sites) {
                    const card11 = document.createElement("div");
                    card11.classList.add("mesa");
                    const isOutService = info.infoSite.params.isOutService === 1 || info.infoSite.params.isOutService === true;
const isBussy = info.infoSite.params.isBussy === 1 || info.infoSite.params.isBussy === true;
const isOrder = info.infoSite.params.isOrder === 1 || info.infoSite.params.isOrder === true;

let backgroundColor = "";
if (isOutService) {
    backgroundColor = "#F2473B";
} else if (isBussy && !isOrder) {
    backgroundColor = "#F26D20";
} else if (isOrder) {
    backgroundColor = "#9BD792";
} else {
    backgroundColor = "#6645E9";
}
                    const activo1 = info.isActive === "0" ? "INACTIVO" : "ACTIVO";
                  
                    card11.innerHTML = `
          <div class="card-body" >
          <h5 class="card-title">
          <p class="card-text" style="background-color: ${backgroundColor};"> <i class="fas fa-table"> ${info.infoSite.info.name}</i></p>
        
         

      </h5>
      <p class="card-text">${info.infoSite.info.comments}
     ${info.infoSite.params.isOutService === false || info.infoSite.params.isOutService===0 ?( info.infoSite.params.isBussy === true || info.infoSite.params.isBussy=== 1 ? 
      (info.infoSite.params.isOrder===true || info.infoSite.params.isOrder===1 ? `
      <button   onclick="
      
      
createTable('tableInternalClients22','containerOrdersVerifyData', [
  
  'Acciones',
  'Estado',
'Total',
  'Sub-Total',
  
  'Ahorro',
  'Pago',
  'Responsable',
  'Cliente',
  'Catálogo'
]);

  
getApiData(getOrdersOS,
{
'apiService':'apiOS',
'apiVersion':'v1',
'endPoint':'getOrders'
},
{
'containerData':'containerOrdersVerifyData',
'containerInfo':'containerOrdersVerifyInfo',
'modelView':'tableOS',
},
{
'filter':'bySiteOrderTrackIdStatusFinished',
'param': '${sessionStorage.getItem('ot'+info.siteId)}',
'value': '${sessionStorage.getItem('siteNow')}'
}
);
      
      
      "  title="EDITAR">
     <i class="fas fa-plus"> Calcular orden</i>
     </button>
     <button id="swalBtn" onclick=" 
     
     createResourceBtnCreateOrder('containerBtnCreateOrder');

     createTable('tableInternalClients2','OSCatalogViewData', [
       'Seleccionar',
       'Producto',
    'Categoría',
       'Stock',
       
       'Comentarios',
       'Precio',
      'EAN1 / EAN2 / SKU',
      'Descuento / Promoción'
   ]);
getApiData(getCatalogsOS,
{
'apiService':'apiOS',
'apiVersion':'v1',
'endPoint':'getCatalogs'
},
{
'containerData':'OSCatalogViewData',
'containerInfo':'OSCatalogViewInfo',
'modelView':'tableOS',
},
{
'filter':'placesOS',
'param':'placeId',
'value':'${info.placeId}'
}
);setSession('siteNow','${info.siteId}');updateCarContainer('${info.siteId}');

getApiData(getEmployeesList,
  {
    'apiService':'apiOS',
    'apiVersion':'v1',
    'endPoint':'getEmployees'
},
  {
    'containerData':'list-OSEmployeesList',
    'containerInfo':'containerOSInfo',
    'modelView':'table',
},
  {
    'filter':'filter',
        'param':'placeId',
        'value':'${info.placeId}'
}
    );
    getApiData(getCustomersList,
      {
        'apiService':'apiOS',
        'apiVersion':'v1',
        'endPoint':'getCustomers'
    },
      {
        'containerData':'list-OSCustomerListOS',
        'containerInfo':'containerOSInfo',
        'modelView':'table',
    },
      {
        'filter':'filter',
        'param':'placeId',
        'value':'${info.placeId}'
    }
        );
"  title="EDITAR">
<i class="fas fa-plus"> Crear orden</i>
</button>

<button onclick="editOSSite(this,&quot;${info.clientId}&quot;,&quot;${info.siteId}&quot;,&quot;isOrder&quot;,&quot;false&quot;,&quot;osdata&quot;); removeOrder('${info.siteId}')"  title="EDITAR">
<i class="fas fa-plus"> Cerrar Proceso</i>
</button>
<button onclick="

openModal('OSOrdersView');
      
createTable('tableInternalClients2','containerOrdersData', [
  'Acciones',
  'Estado',
'Total',
  'Sub-Total',
  
  'Ahorro',
  'Pago',
  'Responsable',
  'Cliente',
  'Catálogo'
]);

  setSession('siteNow','${info.siteId}');

  
getApiData(getOrdersOS,
  {
  'apiService':'apiOS',
  'apiVersion':'v1',
  'endPoint':'getOrders'
  },
  {
  'containerData':'containerOrdersData',
  'containerInfo':'containerOrdersInfo',
  'modelView':'tableOS',
  },
  {
  'filter':'bySiteOrderTrackIdStatusAll',
  'param': '${sessionStorage.getItem('ot'+info.siteId)}',
  'value': '${sessionStorage.getItem('siteNow')}'
  }
  );

"  title="EDITAR">
<i class="fas fa-plus"> Ver ordenes</i>
</button>
      
      `:`<button onclick="editOSSite(this,&quot;${info.clientId}&quot;,&quot;${info.siteId}&quot;,&quot;isBussy&quot;,&quot;false&quot;,&quot;osdata&quot;);
    
      "  title="EDITAR">
      <i class="fas fa-plus"> Desocupar</i>
      </button>
      <button onclick="
      openModal('OSCatalogViewOS');
      createResourceBtnCreateOrder('containerBtnCreateOrder');

      createTable('tableInternalClients2','OSCatalogViewData', [
        'Seleccionar',
        'Producto',
     'Categoría',
        'Stock',
        
        'Comentarios',
        'Precio',
       'EAN1 / EAN2 / SKU',
       'Descuento / Promoción'
    ]);
getApiData(getCatalogsOS,
{
'apiService':'apiOS',
'apiVersion':'v1',
'endPoint':'getCatalogs'
},
{
'containerData':'OSCatalogViewData',
'containerInfo':'OSCatalogViewInfo',
'modelView':'tableOS',
},
{
'filter':'placesOS',
'param':'placeId',
'value':'${info.placeId}'
}
);setSession('siteNow','${info.siteId}');updateCarContainer('${info.siteId}');
getApiData(getEmployeesList,
  {
    'apiService':'apiOS',
    'apiVersion':'v1',
    'endPoint':'getEmployees'
},
  {
    'containerData':'list-OSEmployeesList',
    'containerInfo':'containerOSInfo',
    'modelView':'table',
},
  {
    'filter':'filter',
        'param':'placeId',
        'value':'${info.placeId}'
}
    );
    getApiData(getCustomersList,
      {
        'apiService':'apiOS',
        'apiVersion':'v1',
        'endPoint':'getCustomers'
    },
      {
        'containerData':'list-OSCustomerListOS',
        'containerInfo':'containerOSInfo',
        'modelView':'table',
    },
      {
        'filter':'filter',
        'param':'placeId',
        'value':'${info.placeId}'
    }
        );
      "  title="EDITAR">
     <i class="fas fa-plus"> Crear orden</i>
     </button>`)
      
      :
     `
     <button onclick="editOSSite(this,&quot;${info.clientId}&quot;,&quot;${info.siteId}&quot;,&quot;isBussy&quot;,&quot;true&quot;,&quot;osdata&quot;);
     setSessionUN('ot${info.siteId}');
    
     "  title="EDITAR">
     <i class="fas fa-plus"> Ocupar</i>
     </button>
     <button onclick="editOSSite(this,&quot;${info.clientId}&quot;,&quot;${info.siteId}&quot;,&quot;isOutService&quot;,&quot;true&quot;,&quot;osdata&quot;);"  title="EDITAR">
     <i class="fas fa-plus"> Sin servicio</i>
     </button>
     `):` <button onclick="editOSSite(this,&quot;${info.clientId}&quot;,&quot;${info.siteId}&quot;,&quot;isOutService&quot;,&quot;false&quot;,&quot;osdata&quot;);"  title="EDITAR">
     <i class="fas fa-plus"> En servicio</i>
     </button>`}

     





      </p>
              
          </div>
          
      `;

      cardContainer11.appendChild(card11);
   //   getClientCategoriesList3('all','all','all',idin1);
      //getClientStoresList13('all','all','all',idin1);

      idin++;
                }
              }
              if(modelView=="cardOSwork"){
                const cardContainer11 = document.getElementById(containerData);
                const cardContainer11Info = document.getElementById(containerInfo);
                cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
                cardContainer11Info.innerHTML = "";
                const card11Info = document.createElement("div");
                card11Info.classList.add("card");
                card11Info.innerHTML = `<p>${data.response.apiMessage}</p>`;
                cardContainer11Info.appendChild(card11Info);

                for (const info of data.sites) {
                    const card11 = document.createElement("div");
                    card11.classList.add("mesa");
                    const isOutService = info.infoSite.params.isOutService === 1 || info.infoSite.params.isOutService === true;
const isBussy = info.infoSite.params.isBussy === 1 || info.infoSite.params.isBussy === true;
const isOrder = info.infoSite.params.isOrder === 1 || info.infoSite.params.isOrder === true;

let backgroundColor = "";
if (isOutService) {
    backgroundColor = "#F2473B";
} else if (isBussy && !isOrder) {
    backgroundColor = "#F26D20";
} else if (isOrder) {
    backgroundColor = "#9BD792";
} else {
    backgroundColor = "#6645E9";
}
                    const activo1 = info.isActive === "0" ? "INACTIVO" : "ACTIVO";
                  
                    card11.innerHTML = `
          <div class="card-body" >
          <h5 class="card-title">
          <p class="card-text" style="background-color: ${backgroundColor};"> <i class="fas fa-table"> ${info.infoSite.info.name}</i></p>
        
         

      </h5>
      <p class="card-text">${info.infoSite.info.comments}
     ${info.infoSite.params.isOutService === false || info.infoSite.params.isOutService===0 ?( info.infoSite.params.isBussy === true || info.infoSite.params.isBussy=== 1 ? 
      (info.infoSite.params.isOrder===true || info.infoSite.params.isOrder===1 ? `
      <button onclick="
      
openModal('OSOrdersVerify');
      
createTable('tableInternalClients22','containerOrdersVerifyData', [
  
  'Acciones',
  'Estado',
'Total',
  'Sub-Total',
  
  'Ahorro',
  'Pago',
  'Responsable',
  'Cliente',
  'Catálogo'
]);

  
getApiData(getOrdersOS,
{
'apiService':'apiOS',
'apiVersion':'v1',
'endPoint':'getOrders'
},
{
'containerData':'containerOrdersVerifyData',
'containerInfo':'containerOrdersVerifyInfo',
'modelView':'tableOS',
},
{
'filter':'bySiteOrderTrackIdStatusFinished',
'param': '${sessionStorage.getItem('ot'+info.siteId)}',
'value': '${sessionStorage.getItem('siteNow')}'
}
);
      
      
      "  title="EDITAR">
     <i class="fas fa-plus"> Calcular</i>
     </button>
     <button onclick=" openModal('OSCatalogViewOS');
      
     createTable('tableInternalClients2','OSCatalogViewData', [
       'Seleccionar',
       'Producto',
    'Categoría',
       'Stock',
       
       'Comentarios',
       'Precio',
      'EAN1 / EAN2 / SKU',
      'Descuento / Promoción'
   ]);
getApiData(getCatalogsOS,
{
'apiService':'apiOS',
'apiVersion':'v1',
'endPoint':'getCatalogs'
},
{
'containerData':'OSCatalogViewData',
'containerInfo':'OSCatalogViewInfo',
'modelView':'tableOS',
},
{
'filter':'placesOS',
'param':'placeId',
'value':'${info.placeId}'
}
);setSession('siteNow','${info.siteId}');updateCarContainer('${info.siteId}');

getApiData(getEmployeesList,
  {
    'apiService':'apiOS',
    'apiVersion':'v1',
    'endPoint':'getEmployees'
},
  {
    'containerData':'list-OSEmployeesList',
    'containerInfo':'containerOSInfo',
    'modelView':'table',
},
  {
    'filter':'filter',
        'param':'placeId',
        'value':'${info.placeId}'
}
    );
    getApiData(getCustomersList,
      {
        'apiService':'apiOS',
        'apiVersion':'v1',
        'endPoint':'getCustomers'
    },
      {
        'containerData':'list-OSCustomerListOS',
        'containerInfo':'containerOSInfo',
        'modelView':'table',
    },
      {
        'filter':'filter',
        'param':'placeId',
        'value':'${info.placeId}'
    }
        );
"  title="EDITAR">
<i class="fas fa-plus"> Crear orden</i>
</button>

<button onclick="editOSSite(this,&quot;${info.clientId}&quot;,&quot;${info.siteId}&quot;,&quot;isOrder&quot;,&quot;false&quot;,&quot;osdata&quot;); removeOrder('${info.siteId}')"  title="EDITAR">
<i class="fas fa-plus"> Cerrar Proceso</i>
</button>
<button onclick="

openModal('OSOrdersView');
      
createTable('tableInternalClients2','containerOrdersData', [
  'Acciones',
  'Estado',
'Total',
  'Sub-Total',
  
  'Ahorro',
  'Pago',
  'Responsable',
  'Cliente',
  'Catálogo'
]);

  setSession('siteNow','${info.siteId}');

  
getApiData(getOrdersOS,
  {
  'apiService':'apiOS',
  'apiVersion':'v1',
  'endPoint':'getOrders'
  },
  {
  'containerData':'containerOrdersData',
  'containerInfo':'containerOrdersInfo',
  'modelView':'tableOS',
  },
  {
  'filter':'bySiteOrderTrackIdStatusAll',
  'param': '${sessionStorage.getItem('ot'+info.siteId)}',
  'value': '${sessionStorage.getItem('siteNow')}'
  }
  );

"  title="EDITAR">
<i class="fas fa-plus"> Ver ordenes</i>
</button>
      
      `:`<button onclick="editOSSite(this,&quot;${info.clientId}&quot;,&quot;${info.siteId}&quot;,&quot;isBussy&quot;,&quot;false&quot;,&quot;osdata&quot;);
    
      "  title="EDITAR">
      <i class="fas fa-plus"> Desocupar</i>
      </button>
      <button onclick="
      openModal('OSCatalogViewOS');
      
      createTable('tableInternalClients2','OSCatalogViewData', [
        'Seleccionar',
        'Producto',
     'Categoría',
        'Stock',
        
        'Comentarios',
        'Precio',
       'EAN1 / EAN2 / SKU',
       'Descuento / Promoción'
    ]);
getApiData(getCatalogsOS,
{
'apiService':'apiOS',
'apiVersion':'v1',
'endPoint':'getCatalogs'
},
{
'containerData':'OSCatalogViewData',
'containerInfo':'OSCatalogViewInfo',
'modelView':'tableOS',
},
{
'filter':'placesOS',
'param':'placeId',
'value':'${info.placeId}'
}
);setSession('siteNow','${info.siteId}');updateCarContainer('${info.siteId}');
getApiData(getEmployeesList,
  {
    'apiService':'apiOS',
    'apiVersion':'v1',
    'endPoint':'getEmployees'
},
  {
    'containerData':'list-OSEmployeesList',
    'containerInfo':'containerOSInfo',
    'modelView':'table',
},
  {
    'filter':'filter',
        'param':'placeId',
        'value':'${info.placeId}'
}
    );
    getApiData(getCustomersList,
      {
        'apiService':'apiOS',
        'apiVersion':'v1',
        'endPoint':'getCustomers'
    },
      {
        'containerData':'list-OSCustomerListOS',
        'containerInfo':'containerOSInfo',
        'modelView':'table',
    },
      {
        'filter':'filter',
        'param':'placeId',
        'value':'${info.placeId}'
    }
        );
      "  title="EDITAR">
     <i class="fas fa-plus"> Crear orden</i>
     </button>`)
      
      :
     `
     <button onclick="editOSSite(this,&quot;${info.clientId}&quot;,&quot;${info.siteId}&quot;,&quot;isBussy&quot;,&quot;true&quot;,&quot;osdata&quot;);
     setSessionUN('ot${info.siteId}');
    
     "  title="EDITAR">
     <i class="fas fa-plus"> Ocupar</i>
     </button>
     <button onclick="editOSSite(this,&quot;${info.clientId}&quot;,&quot;${info.siteId}&quot;,&quot;isOutService&quot;,&quot;true&quot;,&quot;osdata&quot;);"  title="EDITAR">
     <i class="fas fa-plus"> Sin servicio</i>
     </button>
     `):` <button onclick="editOSSite(this,&quot;${info.clientId}&quot;,&quot;${info.siteId}&quot;,&quot;isOutService&quot;,&quot;false&quot;,&quot;osdata&quot;);"  title="EDITAR">
     <i class="fas fa-plus"> En servicio</i>
     </button>`}

     





      </p>
              
          </div>
          
      `;

      cardContainer11.appendChild(card11);
   //   getClientCategoriesList3('all','all','all',idin1);
      //getClientStoresList13('all','all','all',idin1);

      idin++;
                }
              }
              if(modelView=="cardOSmarket"){
                const cardContainer11 = document.getElementById(containerData);
                const cardContainer11Info = document.getElementById(containerInfo);
                cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
                cardContainer11Info.innerHTML = "";
                const card11Info = document.createElement("div");
                card11Info.classList.add("card");
                card11Info.innerHTML = `<p>${data.response.apiMessage}</p>`;
                cardContainer11Info.appendChild(card11Info);

                for (const info of data.sites) {
                    const card11 = document.createElement("div");
                    card11.classList.add("mesa");
                    const isOutService = info.infoSite.params.isOutService === 1 || info.infoSite.params.isOutService === true;
const isBussy = info.infoSite.params.isBussy === 1 || info.infoSite.params.isBussy === true;
const isOrder = info.infoSite.params.isOrder === 1 || info.infoSite.params.isOrder === true;

let backgroundColor = "";
if (isOutService) {
    backgroundColor = "#F2473B";
} else if (isBussy && !isOrder) {
    backgroundColor = "#F26D20";
} else if (isOrder) {
    backgroundColor = "#9BD792";
} else {
    backgroundColor = "#6645E9";
}
                    const activo1 = info.isActive === "0" ? "INACTIVO" : "ACTIVO";
                  
                    card11.innerHTML = `
          <div class="card-body" >
          <h5 class="card-title">
          <p class="card-text" style="background-color: ${backgroundColor};"> <i class="fas fa-table"> ${info.infoSite.info.name}</i></p>
        
         

      </h5>
      <p class="card-text">${info.infoSite.info.comments}
     ${info.infoSite.params.isOutService === false || info.infoSite.params.isOutService===0 ?( info.infoSite.params.isBussy === true || info.infoSite.params.isBussy=== 1 ? 
      (info.infoSite.params.isOrder===true || info.infoSite.params.isOrder===1 ? `
      <button class="button is-dark" onclick="
      
openModal('OSOrdersVerify');
createResourceBtnCreateOrder('containerBtnCreateOrder');
createTable('tableInternalClients22','containerOrdersVerifyData', [
  
  'Acciones',
  'Estado',
'Total',
  'Sub-Total',
  
  'Ahorro',
  'Pago',
  'Responsable',
  'Cliente',
  'Catálogo'
]);

  
getApiData(getOrdersOS,
{
'apiService':'apiOS',
'apiVersion':'v1',
'endPoint':'getOrders'
},
{
'containerData':'containerOrdersVerifyData',
'containerInfo':'containerOrdersVerifyInfo',
'modelView':'tableOS',
},
{
'filter':'bySiteOrderTrackIdStatusFinished',
'param': '${sessionStorage.getItem('ot'+info.siteId)}',
'value': '${sessionStorage.getItem('siteNow')}'
}
);
      
      
      "  title="EDITAR">
     <i class="fas fa-plus"> Calcular</i>
     </button>
     <button class="button is-dark" id="swalBtn" onclick=" 
     modalTry();
  
     createResourceBtnCreateOrder('containerBtnCreateOrder');

     createTable('tableInternalClients2','OSCatalogViewData', [
       'Seleccionar',
       'Producto',
    'Categoría',
       'Stock',
       
       'Comentarios',
       'Precio',
      'EAN1 / EAN2 / SKU',
      'Descuento / Promoción'
   ]);
getApiData(getCatalogsOS,
{
'apiService':'apiOS',
'apiVersion':'v1',
'endPoint':'getCatalogs'
},
{
'containerData':'OSCatalogViewData',
'containerInfo':'OSCatalogViewInfo',
'modelView':'tableOS',
},
{
'filter':'placesOS',
'param':'placeId',
'value':'${info.placeId}'
}
);setSession('siteNow','${info.siteId}');updateCarContainer('${info.siteId}');

getApiData(getEmployeesList,
  {
    'apiService':'apiOS',
    'apiVersion':'v1',
    'endPoint':'getEmployees'
},
  {
    'containerData':'list-OSEmployeesList',
    'containerInfo':'containerOSInfo',
    'modelView':'table',
},
  {
    'filter':'filter',
        'param':'placeId',
        'value':'${info.placeId}'
}
    );
    getApiData(getCustomersList,
      {
        'apiService':'apiOS',
        'apiVersion':'v1',
        'endPoint':'getCustomers'
    },
      {
        'containerData':'list-OSCustomerListOS',
        'containerInfo':'containerOSInfo',
        'modelView':'table',
    },
      {
        'filter':'filter',
        'param':'placeId',
        'value':'${info.placeId}'
    }
        );
"  title="EDITAR">
<i class="fas fa-plus"> Crear ordenee</i>
</button>

<button class="button is-dark" onclick="editOSSite(this,&quot;${info.clientId}&quot;,&quot;${info.siteId}&quot;,&quot;isOrder&quot;,&quot;false&quot;,&quot;osdata&quot;); removeOrder('${info.siteId}')"  title="EDITAR">
<i class="fas fa-plus"> Cerrar Proceso</i>
</button>
<button class="button is-dark" onclick="

openModal('OSOrdersView');
      
createTable('tableInternalClients2','containerOrdersData', [
  'Acciones',
  'Estado',
'Total',
  'Sub-Total',
  
  'Ahorro',
  'Pago',
  'Responsable',
  'Cliente',
  'Catálogo'
]);

  setSession('siteNow','${info.siteId}');

  
getApiData(getOrdersOS,
  {
  'apiService':'apiOS',
  'apiVersion':'v1',
  'endPoint':'getOrders'
  },
  {
  'containerData':'containerOrdersData',
  'containerInfo':'containerOrdersInfo',
  'modelView':'tableOS',
  },
  {
  'filter':'bySiteOrderTrackIdStatusAll',
  'param': '${sessionStorage.getItem('ot'+info.siteId)}',
  'value': '${sessionStorage.getItem('siteNow')}'
  }
  );

"  title="EDITAR">
<i class="fas fa-plus"> Ver ordenes</i>
</button>
      
      `:`<button  class="button is-dark" onclick="editOSSite(this,&quot;${info.clientId}&quot;,&quot;${info.siteId}&quot;,&quot;isBussy&quot;,&quot;false&quot;,&quot;osdata&quot;);
    
      "  title="EDITAR">
      <i class="fas fa-plus"> Cerrar Caja</i>
      </button>
      <button class="button is-rounded is-outlined is-responsive" id="swalBtn" onclick="
      modalTry();

      createResourceBtnCreateOrder('containerBtnCreateOrder');

      createTable('tableInternalClients2','OSCatalogViewData', [
        'Seleccionar',
        'Producto',
     'Categoría',
        'Stock',
        
        'Comentarios',
        'Precio',
       'EAN1 / EAN2 / SKU',
       'Descuento / Promoción'
    ]);
getApiData(getCatalogsOS,
{
'apiService':'apiOS',
'apiVersion':'v1',
'endPoint':'getCatalogs'
},
{
'containerData':'OSCatalogViewData',
'containerInfo':'OSCatalogViewInfo',
'modelView':'tableOS',
},
{
'filter':'placesOS',
'param':'placeId',
'value':'${info.placeId}'
}
);setSession('siteNow','${info.siteId}');updateCarContainer('${info.siteId}');
getApiData(getEmployeesList,
  {
    'apiService':'apiOS',
    'apiVersion':'v1',
    'endPoint':'getEmployees'
},
  {
    'containerData':'list-OSEmployeesList',
    'containerInfo':'containerOSInfo',
    'modelView':'table',
},
  {
    'filter':'filter',
        'param':'placeId',
        'value':'${info.placeId}'
}
    );
    getApiData(getCustomersList,
      {
        'apiService':'apiOS',
        'apiVersion':'v1',
        'endPoint':'getCustomers'
    },
      {
        'containerData':'list-OSCustomerListOS',
        'containerInfo':'containerOSInfo',
        'modelView':'table',
    },
      {
        'filter':'filter',
        'param':'placeId',
        'value':'${info.placeId}'
    }
        );
      "  title="EDITAR">
     <i class="fas fa-plus"> Crear ordenes</i>
     </button>`)
      
      :
     `
     <button class="button is-dark" onclick="editOSSite(this,&quot;${info.clientId}&quot;,&quot;${info.siteId}&quot;,&quot;isBussy&quot;,&quot;true&quot;,&quot;osdata&quot;);
     setSessionUN('ot${info.siteId}');
    
     "  title="EDITAR">
     <i class="fas fa-plus"> Abrir Caja</i>
     </button>
     <button class="button is-dark" onclick="editOSSite(this,&quot;${info.clientId}&quot;,&quot;${info.siteId}&quot;,&quot;isOutService&quot;,&quot;true&quot;,&quot;osdata&quot;);"  title="EDITAR">
     <i class="fas fa-plus"> Sin servicio</i>
     </button>
     `):` <button class="button is-dark" onclick="editOSSite(this,&quot;${info.clientId}&quot;,&quot;${info.siteId}&quot;,&quot;isOutService&quot;,&quot;false&quot;,&quot;osdata&quot;);"  title="EDITAR">
     <i class="fas fa-plus"> En servicio</i>
     </button>`}

     





      </p>
              
          </div>
          
      `;

      cardContainer11.appendChild(card11);
   //   getClientCategoriesList3('all','all','all',idin1);
      //getClientStoresList13('all','all','all',idin1);

      idin++;
                }
              }

              if(modelView=="cardOSecommerce"){
                const cardContainer11 = document.getElementById(containerData);
                const cardContainer11Info = document.getElementById(containerInfo);
                cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
                cardContainer11Info.innerHTML = "";
                const card11Info = document.createElement("div");
                card11Info.classList.add("card");
                card11Info.innerHTML = `<p>${data.response.apiMessage}</p>`;
                cardContainer11Info.appendChild(card11Info);

                for (const info of data.sites) {
                    const card11 = document.createElement("div");
                    card11.classList.add("mesa");
                    const isOutService = info.infoSite.params.isOutService === 1 || info.infoSite.params.isOutService === true;
const isBussy = info.infoSite.params.isBussy === 1 || info.infoSite.params.isBussy === true;
const isOrder = info.infoSite.params.isOrder === 1 || info.infoSite.params.isOrder === true;

let backgroundColor = "";
if (isOutService) {
    backgroundColor = "#F2473B";
} else if (isBussy && !isOrder) {
    backgroundColor = "#F26D20";
} else if (isOrder) {
    backgroundColor = "#9BD792";
} else {
    backgroundColor = "#6645E9";
}
                    const activo1 = info.isActive === "0" ? "INACTIVO" : "ACTIVO";
                  
                    card11.innerHTML = `
          <div class="card-body" >
          <h5 class="card-title">
          <p class="card-text" style="background-color: ${backgroundColor};"> <i class="fas fa-table"> ${info.infoSite.info.name}</i></p>
        
         

      </h5>
      <p class="card-text">${info.infoSite.info.comments}
     ${info.infoSite.params.isOutService === false || info.infoSite.params.isOutService===0 ?( info.infoSite.params.isBussy === true || info.infoSite.params.isBussy=== 1 ? 
      (info.infoSite.params.isOrder===true || info.infoSite.params.isOrder===1 ? `
      <button onclick="
      
openModal('OSOrdersVerify');
      
createTable('tableInternalClients22','containerOrdersVerifyData', [
  
  'Acciones',
  'Estado',
'Total',
  'Sub-Total',
  
  'Ahorro',
  'Pago',
  'Responsable',
  'Cliente',
  'Catálogo'
]);

  
getApiData(getOrdersOS,
{
'apiService':'apiOS',
'apiVersion':'v1',
'endPoint':'getOrders'
},
{
'containerData':'containerOrdersVerifyData',
'containerInfo':'containerOrdersVerifyInfo',
'modelView':'tableOS',
},
{
'filter':'bySiteOrderTrackIdStatusFinished',
'param': '${sessionStorage.getItem('ot'+info.siteId)}',
'value': '${sessionStorage.getItem('siteNow')}'
}
);
      
      
      "  title="EDITAR">
     <i class="fas fa-plus"> Calcular</i>
     </button>
     <button onclick=" openModal('OSCatalogViewOS');
      
     createTable('tableInternalClients2','OSCatalogViewData', [
       'Seleccionar',
       'Producto',
    'Categoría',
       'Stock',
       
       'Comentarios',
       'Precio',
      'EAN1 / EAN2 / SKU',
      'Descuento / Promoción'
   ]);
getApiData(getCatalogsOS,
{
'apiService':'apiOS',
'apiVersion':'v1',
'endPoint':'getCatalogs'
},
{
'containerData':'OSCatalogViewData',
'containerInfo':'OSCatalogViewInfo',
'modelView':'tableOS',
},
{
'filter':'placesOS',
'param':'placeId',
'value':'${info.placeId}'
}
);setSession('siteNow','${info.siteId}');updateCarContainer('${info.siteId}');

getApiData(getEmployeesList,
  {
    'apiService':'apiOS',
    'apiVersion':'v1',
    'endPoint':'getEmployees'
},
  {
    'containerData':'list-OSEmployeesList',
    'containerInfo':'containerOSInfo',
    'modelView':'table',
},
  {
    'filter':'filter',
        'param':'placeId',
        'value':'${info.placeId}'
}
    );
    getApiData(getCustomersList,
      {
        'apiService':'apiOS',
        'apiVersion':'v1',
        'endPoint':'getCustomers'
    },
      {
        'containerData':'list-OSCustomerListOS',
        'containerInfo':'containerOSInfo',
        'modelView':'table',
    },
      {
        'filter':'filter',
        'param':'placeId',
        'value':'${info.placeId}'
    }
        );
"  title="EDITAR">
<i class="fas fa-plus"> Crear ordene</i>
</button>

<button onclick="editOSSite(this,&quot;${info.clientId}&quot;,&quot;${info.siteId}&quot;,&quot;isOrder&quot;,&quot;false&quot;,&quot;osdata&quot;); removeOrder('${info.siteId}')"  title="EDITAR">
<i class="fas fa-plus"> Cerrar Proceso</i>
</button>
<button onclick="

openModal('OSOrdersView');
      
createTable('tableInternalClients2','containerOrdersData', [
  'Acciones',
  'Estado',
'Total',
  'Sub-Total',
  
  'Ahorro',
  'Pago',
  'Responsable',
  'Cliente',
  'Catálogo'
]);

  setSession('siteNow','${info.siteId}');

  
getApiData(getOrdersOS,
  {
  'apiService':'apiOS',
  'apiVersion':'v1',
  'endPoint':'getOrders'
  },
  {
  'containerData':'containerOrdersData',
  'containerInfo':'containerOrdersInfo',
  'modelView':'tableOS',
  },
  {
  'filter':'bySiteOrderTrackIdStatusAll',
  'param': '${sessionStorage.getItem('ot'+info.siteId)}',
  'value': '${sessionStorage.getItem('siteNow')}'
  }
  );

"  title="EDITAR">
<i class="fas fa-plus"> Ver ordenes</i>
</button>
      
      `:`<button onclick="editOSSite(this,&quot;${info.clientId}&quot;,&quot;${info.siteId}&quot;,&quot;isBussy&quot;,&quot;false&quot;,&quot;osdata&quot;);
    
      "  title="EDITAR">
      <i class="fas fa-plus"> Cerrar Caja</i>
      </button>
      <button class="button is-dark" onclick="
      openModal('OSCatalogViewOS');
      
      createTable('tableInternalClients2','OSCatalogViewData', [
        'Seleccionar',
        'Producto',
     'Categoría',
        'Stock',
        
        'Comentarios',
        'Precio',
       'EAN1 / EAN2 / SKU',
       'Descuento / Promoción'
    ]);
getApiData(getCatalogsOS,
{
'apiService':'apiOS',
'apiVersion':'v1',
'endPoint':'getCatalogs'
},
{
'containerData':'OSCatalogViewData',
'containerInfo':'OSCatalogViewInfo',
'modelView':'tableOS',
},
{
'filter':'placesOS',
'param':'placeId',
'value':'${info.placeId}'
}
);setSession('siteNow','${info.siteId}');updateCarContainer('${info.siteId}');
getApiData(getEmployeesList,
  {
    'apiService':'apiOS',
    'apiVersion':'v1',
    'endPoint':'getEmployees'
},
  {
    'containerData':'list-OSEmployeesList',
    'containerInfo':'containerOSInfo',
    'modelView':'table',
},
  {
    'filter':'filter',
        'param':'placeId',
        'value':'${info.placeId}'
}
    );
    getApiData(getCustomersList,
      {
        'apiService':'apiOS',
        'apiVersion':'v1',
        'endPoint':'getCustomers'
    },
      {
        'containerData':'list-OSCustomerListOS',
        'containerInfo':'containerOSInfo',
        'modelView':'table',
    },
      {
        'filter':'filter',
        'param':'placeId',
        'value':'${info.placeId}'
    }
        );
      "  title="EDITAR">
     <i class="fas fa-plus"> Crear ordenes</i>
     </button>`)
      
      :
     `
     <button onclick="editOSSite(this,&quot;${info.clientId}&quot;,&quot;${info.siteId}&quot;,&quot;isBussy&quot;,&quot;true&quot;,&quot;osdata&quot;);
     setSessionUN('ot${info.siteId}');
    
     "  title="EDITAR">
     <i class="fas fa-plus"> Abrir Caja</i>
     </button>
     <button onclick="editOSSite(this,&quot;${info.clientId}&quot;,&quot;${info.siteId}&quot;,&quot;isOutService&quot;,&quot;true&quot;,&quot;osdata&quot;);"  title="EDITAR">
     <i class="fas fa-plus"> Sin servicio</i>
     </button>
     `):` <button onclick="editOSSite(this,&quot;${info.clientId}&quot;,&quot;${info.siteId}&quot;,&quot;isOutService&quot;,&quot;false&quot;,&quot;osdata&quot;);"  title="EDITAR">
     <i class="fas fa-plus"> En servicio</i>
     </button>`}

     





      </p>
              
          </div>
          
      `;

      cardContainer11.appendChild(card11);
   //   getClientCategoriesList3('all','all','all',idin1);
      //getClientStoresList13('all','all','all',idin1);

      idin++;
                }
              }
                document.getElementById("loading-container").style.display = "none";
                resolve("Repartidores obtenidos exitosamente: " + data.response.apiMessage);
            } else {
                const cardContainer11 = document.getElementById(containerData);
                cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
                const cardContainer11Info = document.getElementById(containerInfo);
                cardContainer11Info.innerHTML = "";
                const card11Info = document.createElement("div");
                card11Info.classList.add("card");
                card11Info.innerHTML = `<p>PUESTOS</p><p>${data.response.apiMessage}</p>
                                         <p>El filtro solicitado fue-> FILTRO: ${data.response.sentData.filter}, PARÁMETRO: ${data.response.sentData.param}, VALOR: ${data.response.sentData.value}</p>`;
                cardContainer11Info.appendChild(card11Info);

    // Crear el primer botón
    const button1 = document.createElement('button');
    button1.setAttribute('type', 'button');
    button1.classList.add('btn', 'btn-primary1', 'edit-button1');
    button1.style.color = '#C70039';
    button1.title = 'VER USUARIOS ACTIVOS';
    button1.onclick = function() {
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

 

    
    };
    // Crear el icono del primer botón
    const icon1 = document.createElement('i');
    icon1.classList.add('fas', 'fa-globe');
    button1.appendChild(icon1);
    
    // Crear el primer contenedor div
    const div1 = document.createElement('div');
    div1.classList.add('mb-3');
    // Agregar la etiqueta y el select al primer contenedor div
    const label1 = document.createElement('label');
    label1.setAttribute('for', 'currency');
    label1.textContent = 'Busqueda por parámetro';
    div1.appendChild(label1);
    const select = document.createElement('select');
    select.id = 'OSSiteFilter';
    select.classList.add('form-control');
    select.name = 'currency';
    select.required = true;
   
    const option2 = document.createElement('option');
    option2.value = 'name';
    option2.textContent = 'Nombre puesto';
    const option3 = document.createElement('option');
    option3.value = 'comments';
    option3.textContent = 'Comentarios';
    const option4 = document.createElement('option');
    option4.value = 'placeId';
    option4.textContent = 'Ubicación';

    
    
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    div1.appendChild(select); 
    cardContainer11Info.appendChild(button1);
    cardContainer11Info.appendChild(div1);

     // Crear el segundo botón
     const button2 = document.createElement('button');
     button2.setAttribute('type', 'button');
     button2.classList.add('btn', 'btn-primary1', 'edit-button1');
     button2.style.color = '#C70039';
     button2.title = 'VER USUARIOS INACTIVOS';
     button2.id = 'filtercatalogs';
     // Crear el icono del segundo botón
     const icon2 = document.createElement('i');
     icon2.classList.add('fas', 'fa-sort');
     

     const div2 = document.createElement('div');
     div2.classList.add('mb-3');
     // Agregar la etiqueta y el input al segundo contenedor div
     const label2 = document.createElement('label');
     label2.classList.add('form-label');
     label2.innerHTML = '<i class="fas fa-guitar"></i> Parámetro en especifico';
     div2.appendChild(label2);
     const input = document.createElement('input');
     input.setAttribute('type', 'text');
     input.classList.add('form-control');
     input.id = 'OSSiteValue';
     input.placeholder = 'Ingresa palabra a buscar';
     div2.appendChild(input);
     button2.appendChild(icon2);
     cardContainer11Info.appendChild(div2);
     cardContainer11Info.appendChild(button2);


     button2.addEventListener('click', function() {
              
      var param = document.getElementById("OSSiteFilter").value;
var value = document.getElementById("OSSiteValue").value;
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
         'filter':'filter',
         'param':param,
         'value':value
     }
         );
       // getApiData(getProducts,'apiCom','v1','getProducts','containerProductsData','containerProductsInfo','filter',param,value);
      
        // Aquí puedes agregar la funcionalidad que deseas para el botón 2
    });
                document.getElementById("loading-container").style.display = "none";
                reject("Error al obtener los repartidores: " + data.response.apiMessage);
            }
        } catch (error) {
            document.getElementById("loading-container").style.display = "none";
            reject("Error al procesar los datos: " + error);
        }
    });
}

async function getSites(data, containerData, containerInfo,modelView) {
    try {
        const message = await getSitesPromise(data, containerData, containerInfo,modelView);
        console.log(message); // Manejar el mensaje de éxito
    } catch (error) {
        console.error(error); // Manejar el error
    }
}



async function getSitesListPromise(data, containerData, containerInfo) {
  var reposSelect = document.getElementById(containerData);
  while (reposSelect.firstChild) {
      reposSelect.removeChild(reposSelect.firstChild);
  }

  await Promise.all(data.sites.map(info => {
      return new Promise(resolve => {
          const option = document.createElement("option");
          option.value = info.siteId;
          option.text = info.infoSite.info.name;
          reposSelect.add(option);
          resolve();
      });
  }));

  if (data.categories && data.categories.length > 0) {
      return "Ubicaciones";
  } else {
      throw new Error("No se encontraron categorías en los datos proporcionados.");
  }
}

async function getSitesList(data, containerData, containerInfo) {
try {
    const message = await getSitesListPromise(data, containerData, containerInfo);
    // console.log(message); // Manejar el mensaje de éxito
} catch (error) {
    console.error(error); // Manejar el error
}
}


function setSession(name,value){
sessionStorage.setItem(name,value);
}


function setSessionUN(name){


  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let codigo = '';
var longitud=8;
    for (let i = 0; i < longitud; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        codigo += caracteres.charAt(indice);
    }

  sessionStorage.setItem(name,codigo);
  }



function modalTry(){




  
  Swal.fire({
      title: 'Formulario',
      html: `
      
      <div class="box">
          <div id="placeOSCar" class="box"></div>
          <div id="placeOSCarTotal"></div>
          <div id="placeOSCarsubTotal"></div>
          <div id="placeOSCarSaver"></div>

          </div>
         
          <div class="box">
              Responsable:
              <div class="select is-rounded">
              <select id="list-OSEmployeesList"  name="lista1" required>
               
              </select>
          </div>
          

          
              Cliente:
              <div class="select is-rounded">
              <select id="list-OSCustomerListOS"  name="lista1" required>
                 
              </select>
         
          </div>
          </div>
          <div class="box">
          <div id="containerBtnCreateOrder"></div>
          <div id="OSCatalogViewInfo" class="">
              <!-- Contenido de la sección expandible -->
          </div>

          <div id="OSCatalogViewData" class="box">
              <!-- Contenido de la sección expandible -->
          </div>

          
          </div>
      `,customClass: {
        container: 'custom-container',
        popup: 'custom-popup',
        header: 'custom-header',
        title: 'custom-title',
        closeButton: 'custom-close-button',
        icon: 'custom-icon',
        image: 'custom-image',
        content: 'custom-content',
        input: 'custom-input',
        actions: 'custom-actions',
        confirmButton: 'custom-confirm-button',
        denyButton: 'custom-deny-button',
        cancelButton: 'custom-cancel-button',
        footer: 'custom-footer'
    },
    background: '#222',
    color: '#fff',
    width: '900px',
    padding: '1rem',
    backdrop: `
        rgba(0,0,123,0.4)
        url("https://example.com/nyan-cat.gif")
        left top
        no-repeat
    `,
    position: 'center',
    grow: 'row',
    showConfirmButton: true,
    confirmButtonColor: '#3085d6',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
    cancelButtonColor: '#d33',
      confirmButtonText: 'Submit',
      showClass: {
        popup: `
          animate__animated
          animate__rotateIn
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__rotateOut
          animate__faster
        `
      },
      preConfirm: () => {
          const selectedEmployee = document.getElementById('list-OSEmployeesList').value;
          const selectedCustomer = document.getElementById('list-OSCustomerListOS').value;
          if (!selectedEmployee || !selectedCustomer) {
              Swal.showValidationMessage(`Please select both an employee and a customer`);
          }
          return {
              selectedEmployee: selectedEmployee,
              selectedCustomer: selectedCustomer
          };
      }
  }).then((result) => {
      if (result.isConfirmed) {
          // Aquí puedes manejar los datos del formulario
          console.log('Submitted Data:', result.value);
          Swal.fire(`Empleado seleccionado: ${result.value.selectedEmployee}\nCliente seleccionado: ${result.value.selectedCustomer}`);
      }
  });

}
function modalPaymentMethod(){

Swal.fire({
  title: 'Formulario de Pago',
  html: `
      <div id="contaionerBtnPay"></div>

      <p>Tipo de pago</p>
      <select id="os-payment-type" class="select is-rounded" name="lista1" required>
          <option selected value=""></option>
          <option value="cash">Efectivo</option>
          <option value="transfer">Transferencia</option>
          <option value="card">Tarjeta</option>
          <option value="points">Puntos</option>
          <option value="crypto">Crypto</option>
      </select>

      <!-- Elementos adicionales a mostrar según la selección de tipo de pago -->
      <div id="additional-elements">
          <div id="transfer-elements" style="display: none;">
              <p>Método de pago para Transferencia</p>
              <select id="os-payment-method2" class="form-control" name="lista1" required>
                  <option selected value=""></option>
                  <option value="neq">NEQUI</option>
                  <option value="dap">DAVIPLATA</option>
                  <option value="bac">BANCOLOMBIA</option>
                  <option value="nuB">NUBANK</option>
                  <option value="ot">OTRO</option>
              </select>
              <p>Código de transacción</p>
              <input type="text" class="" id="os-input-trcode" value="" title="">
          </div>

          <div id="card-elements" style="display: none;">
              <p>Método de pago para Tarjeta</p>
              <select id="os-payment-method1" class="form-control" name="lista1" required>
                  <option selected value=""></option>
                  <option value="cv">VISA - DÉBITO</option>
                  <option value="dv">VISA - CRÉDITO</option>
                  <option value="dm">MASTERCARD - DÉBITO</option>
                  <option value="cm">MASTERCARD - CRÉDITO</option>
                  <option value="cd">DINNERS - CRÉDITO</option>
                  <option value="ot">OTRO</option>
              </select>
          </div>

          <div id="otmeth-elements" style="display: none;">
              <p>Detalles de método</p>
              <p>Nombre de método</p>
              <input type="text" class="" id="os-input-otmethod" step="1.000" value="" title="">
          </div>

          <div id="crypto-elements" style="display: none;">
              <p>Detalles de Crypto</p>
              <p>Nombre de Crypto</p>
              <input type="text" class="" id="os-input-crypto-coin" value="" title="">
              <p>Usuario de Crypto</p>
              <input type="text" class="" id="os-input-crypto-user" value="" title="">
              <p>Cantidad de Crypto</p>
              <input type="number" class="" id="os-input-crypto-cointotal" step="0.0000000000001" value="" title="">
          </div>

          <div id="cash-elements" style="display: none;">
              <p>Detalles de Efectivo</p>
              <p>Paga con</p>
              <input type="number" class="" id="os-input-cash-paywith" step="1.000" value="" title="">
              <p>Cambio</p>
              <input type="number" class="" id="os-input-cash-paywithchange" value="" title="">
          </div>
      </div>
  `,
  customClass: {
    container: 'custom-container',
    popup: 'custom-popup',
    header: 'custom-header',
    title: 'custom-title',
    closeButton: 'custom-close-button',
    icon: 'custom-icon',
    image: 'custom-image',
    content: 'custom-content',
    input: 'custom-input',
    actions: 'custom-actions',
    confirmButton: 'custom-confirm-button',
    denyButton: 'custom-deny-button',
    cancelButton: 'custom-cancel-button',
    footer: 'custom-footer'
},
background: '#222',
color: '#fff',
width: '900px',
padding: '1rem',
backdrop: `
    rgba(0,0,123,0.4)
    url("https://example.com/nyan-cat.gif")
    left top
    no-repeat
`,
position: 'center',
grow: 'row',
showConfirmButton: true,
confirmButtonColor: '#3085d6',
showCancelButton: true,
cancelButtonText: 'Cancel',
cancelButtonColor: '#d33',
  confirmButtonText: 'Submit',
  allowOutsideClick: false,
  showClass: {
    popup: `
      animate__animated
      animate__rotateIn
      animate__faster
    `
  },
  hideClass: {
    popup: `
      animate__animated
      animate__rotateOut
      animate__faster
    `
  },
  didOpen: () => {
    // Configurar eventos de cambio para los selectores dentro del modal
    document.getElementById('os-payment-type').addEventListener('change', function() {
        var selectedValue = this.value;
        var transferElements = document.getElementById('transfer-elements');
        var cardElements = document.getElementById('card-elements');
        var cryptoElements = document.getElementById('crypto-elements');
        var cashElements = document.getElementById('cash-elements');
        var otmet = document.getElementById('otmeth-elements');

        // Ocultar todos los elementos adicionales
        otmet.style.display = 'none';
        transferElements.style.display = 'none';
        cardElements.style.display = 'none';
        cryptoElements.style.display = 'none';
        cashElements.style.display = 'none';

        // Mostrar los elementos adicionales según la selección del tipo de pago
        if (selectedValue === 'transfer') {
            transferElements.style.display = 'block';
        } else if (selectedValue === 'card') {
            cardElements.style.display = 'block';
        } else if (selectedValue === 'crypto') {
            cryptoElements.style.display = 'block';
        } else if (selectedValue === 'cash') {
            cashElements.style.display = 'block';
        }
    });

    document.getElementById('os-payment-method1').addEventListener('change', function() {
        var selectedValue = this.value;
        var otmet = document.getElementById('otmeth-elements');

        // Ocultar todos los elementos adicionales
        otmet.style.display = 'none';

        // Mostrar los elementos adicionales según la selección del método de pago
        if (selectedValue === 'ot') {
            otmet.style.display = 'block';
        }
    });

    document.getElementById('os-payment-method2').addEventListener('change', function() {
        var selectedValue = this.value;
        var otmet = document.getElementById('otmeth-elements');

        // Ocultar todos los elementos adicionales
        otmet.style.display = 'none';

        // Mostrar los elementos adicionales según la selección del método de pago
        if (selectedValue === 'ot') {
            otmet.style.display = 'block';
        }
    });
}

});








}



async function payEditOrder(paymentSource){
  if (paymentSource=="fromMarket") {
   await editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('orderRandomCodeNow'), 'paymentType_Market', document.getElementById('os-payment-type').value, 'status');
     
  }
  if (paymentSource=="fromSite") {
    await editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('ot'+sessionStorage.getItem('siteNow')), 'paymentType', document.getElementById('os-payment-type').value, 'status');
     
  }
     
  
      var transferElements = document.getElementById('transfer-elements');
      var cardElements = document.getElementById('card-elements');
      var cryptoElements = document.getElementById('crypto-elements');
      var cashElements = document.getElementById('cash-elements');
      var otmet = document.getElementById('otmeth-elements');
     
     // Ocultar todos los elementos adicionales
  
     
      // Ocultar todos los elementos adicionales
      if(transferElements.style.display = 'block'){
  
  
        if (paymentSource=="fromMarket") {
          await editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('orderRandomCodeNow'), 'paymentMethod_Market', document.getElementById('os-payment-method2').value, 'status');
          await editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('orderRandomCodeNow'), 'transactionCode_Market', document.getElementById('os-input-trcode').value, 'status');
        if(document.getElementById('os-payment-method2').value=='ot'){
          await editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('orderRandomCodeNow'), 'otherMethod_Market', document.getElementById('os-input-otmethod').value, 'status');
        }      
  }
  if (paymentSource=="fromSite") {
    await editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('ot'+sessionStorage.getItem('siteNow')), 'paymentMethod', document.getElementById('os-payment-method2').value, 'status');
    await editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('ot'+sessionStorage.getItem('siteNow')), 'transactionCode', document.getElementById('os-input-trcode').value, 'status');
        if(document.getElementById('os-payment-method2').value=='ot'){
          await editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('ot'+sessionStorage.getItem('siteNow')), 'otherMethod', document.getElementById('os-input-otmethod').value, 'status');
        }   
  }
       
  
      }
      if(cardElements.style.display = 'block'){
        if (paymentSource=="fromMarket") {
          await editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('orderRandomCodeNow'), 'paymentMethod_Market', document.getElementById('os-payment-method1').value, 'status');
        if(document.getElementById('os-payment-method1').value=='ot'){
          await editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('orderRandomCodeNow'), 'otherMethod_Market', document.getElementById('os-input-otmethod').value, 'status');
        }      
  }
  
        if (paymentSource=="fromSite") {
          await  editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('ot'+sessionStorage.getItem('siteNow')), 'paymentMethod', document.getElementById('os-payment-method1').value, 'status');
        if(document.getElementById('os-payment-method1').value=='ot'){
          await editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('ot'+sessionStorage.getItem('siteNow')), 'otherMethod', document.getElementById('os-input-otmethod').value, 'status');
        }   
  }
        
      }
  
      if(document.getElementById('os-payment-type').value=='crypto'){
  
        if (paymentSource=="fromMarket") {
          await editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('orderRandomCodeNow'), 'cryptoName_Market', document.getElementById('os-input-crypto-coin').value, 'status');
          await editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('orderRandomCodeNow'), 'cryptoUser_Market', document.getElementById('os-input-crypto-user').value, 'status');
          await editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('orderRandomCodeNow'), 'cryptoValue_Market', document.getElementById('os-input-crypto-cointotal').value, 'status');
     
  }
        if (paymentSource=="fromSite") {
          await  editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('ot'+sessionStorage.getItem('siteNow')), 'cryptoName', document.getElementById('os-input-crypto-coin').value, 'status');
          await editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('ot'+sessionStorage.getItem('siteNow')), 'cryptoUser', document.getElementById('os-input-crypto-user').value, 'status');
          await editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('ot'+sessionStorage.getItem('siteNow')), 'cryptoValue', document.getElementById('os-input-crypto-cointotal').value, 'status');
     
  }
       
  
      }
      if(document.getElementById('os-payment-type').value=='cash'){
        if (paymentSource=="fromMarket") {
          await  editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('orderRandomCodeNow'), 'payWith_Market', document.getElementById('os-input-cash-paywith').value, 'status');
          await  editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('orderRandomCodeNow'), 'change_Market', document.getElementById('os-input-cash-paywithchange').value, 'status');
  
  }
  
        if (paymentSource=="fromSite") {
          await  editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('ot'+sessionStorage.getItem('siteNow')), 'payWith', document.getElementById('os-input-cash-paywith').value, 'status');
          await editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('ot'+sessionStorage.getItem('siteNow')), 'change', document.getElementById('os-input-cash-paywithchange').value, 'status');
  
  }
  
  
  }
   
  
  
  if (paymentSource=="fromMarket") {
    await  editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('orderRandomCodeNow'), 'paymentStatus_Market', 'payed', 'status');
    await editOSOrder(this, urlObj.searchParams.get('clientId'), sessionStorage.getItem('orderRandomCodeNow'), 'orderStatus', 'fromMarketFinished', 'status');
  }
  if (paymentSource=="fromSite") {
    await editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('ot'+sessionStorage.getItem('siteNow')), 'paymentStatus', 'payed', 'status');
  
  }
      
  
  
    }
  
  
