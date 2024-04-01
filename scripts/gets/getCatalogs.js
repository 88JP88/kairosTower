


      async function getCatalogsPromise(data, containerData, containerInfo,modelView) {
        return new Promise(async (resolve, reject) => {
            try {
                document.getElementById("loading-container").style.display = "flex";
                var idin=1;
                if (data.response && data.response.response == "true") {



                  if(modelView=="table"){
               
                    const cardContainer11 = document.querySelector("#"+containerData+" tbody");
                    const cardContainer11Info = document.getElementById(containerInfo);
                    cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
                    cardContainer11Info.innerHTML = ""; 
                    
                    const card11Info = document.createElement("div");
                    card11Info.classList.add("card");
                    
                        card11Info.innerHTML = ` <p><H4>CATÁLOGOS</H4></p><p>${data.response.apiMessage}</p>`;
                        cardContainer11Info.appendChild(card11Info);
            
                        // Crear el primer botón
            const button1 = document.createElement('button');
            button1.setAttribute('type', 'button');
            button1.classList.add('btn', 'btn-primary1', 'edit-button1');
            button1.style.color = '#C70039';
            button1.title = 'VER USUARIOS ACTIVOS';
            button1.onclick = function() {
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
            select.id = 'repos-catalogClient';
            select.classList.add('form-control');
            select.name = 'currency';
            select.required = true;
            const option1 = document.createElement('option');
            option1.setAttribute('selected', true);
            option1.textContent = 'Selecciona parámetro';
            const option2 = document.createElement('option');
            option2.value = 'ecm';
            option2.textContent = 'Catalogo ecommerce';
            const option3 = document.createElement('option');
            option3.value = 'pos';
            option3.textContent = 'Catalogo punto de venta';
            const option4 = document.createElement('option');
            option4.value = 'internal';
            option4.textContent = 'Catalogo reserva interna';

            const option5 = document.createElement('option');
            option5.value = 'stocked';
            option5.textContent = 'Catalogo bodega';
            const option6 = document.createElement('option');
            option6.value = 'browser';
            option6.textContent = 'Busqueda por similitud';
            const option7 = document.createElement('option');
            option7.value = 'filter';
            option7.textContent = 'Busqueda exacta de producto';
            
            select.appendChild(option1);
            select.appendChild(option2);
            select.appendChild(option3);
            select.appendChild(option4);
            select.appendChild(option5);
            select.appendChild(option6);
            select.appendChild(option7);
            div1.appendChild(select);
            
            // Crear el segundo contenedor div
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
            input.id = 'keywordsearchcatalog';
            input.placeholder = 'Ingresa palabra a buscar';
            div2.appendChild(input);
            
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
            
            button2.appendChild(icon2);
            
            // Crear el tercer botón
            const button3 = document.createElement('button');
            button3.setAttribute('type', 'button');
            button3.classList.add('btn', 'btn-primary1', 'edit-button1');
            button3.style.color = '#C70039';
            button3.title = 'VER USUARIOS INACTIVOS';
            button3.id = 'searchcatalogs';
            // Crear el icono del tercer botón
            const icon3 = document.createElement('i');
            icon3.classList.add('fas', 'fa-filter');
            
            button3.appendChild(icon3);


            
            // Agregar todos los elementos al documento
            cardContainer11Info.appendChild(button1);
            cardContainer11Info.appendChild(div1);
            cardContainer11Info.appendChild(div2);
            cardContainer11Info.appendChild(button2);
            cardContainer11Info.appendChild(button3);
            
            button2.addEventListener('click', function() {
                
              var param = document.getElementById("repos-catalogClient").value;
  var value = document.getElementById("keywordsearchcatalog").value;
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
         'filter':param+'|param',
         'param':'param',
         'value':value
     }
         );
               // getApiData(getProducts,'apiCom','v1','getProducts','containerProductsData','containerProductsInfo','filter',param,value);
              
                // Aquí puedes agregar la funcionalidad que deseas para el botón 2
            });
            
            button3.addEventListener('click', function() {
                var param = document.getElementById("repos-catalogClient").value;
                var value = document.getElementById("keywordsearchcatalog").value;
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
         'filter':'browser|'+param,
         'param':'param',
         'value':value
     }
         );
                // Aquí puedes agregar la funcionalidad que deseas para el botón 3
            });





            // Crear el elemento select
 const select1 = document.createElement('select');
select1.id = 'list-storesListstoreq';
select1.classList.add('form-control');
select1.name = 'lista1';
select1.required = true;
// Crear la opción por defecto
const defaultOption = document.createElement('option');
defaultOption.selected = true;
defaultOption.textContent = 'Selecciona tienda';
// Agregar la opción por defecto al select
select1.appendChild(defaultOption);

// Crear el primer botón
 const button4 = document.createElement('button');
button4.setAttribute('type', 'button');
button4.classList.add('btn', 'btn-primary1', 'edit-button1');
button4.style.color = '#C70039';
button4.title = 'VER USUARIOS INACTIVOS';
button4.addEventListener('click', function() {
    const storeId = document.getElementById('list-storesListstoreq').value;
    getApiData(getCatalogs, 'apiCom', 'v1', 'getCatalogs', 'containerCatalogsData', 'containerCatalogsInfo', `store|${storeId}`, 'storeId', 'all');
});

// Crear el icono del primer botón
const icon4 = document.createElement('i');
icon4.classList.add('fas', 'fa-filter');
icon4.id = 'filtercatalogsbystore';
button4.appendChild(icon4);

// Crear el segundo botón
 const button5 = document.createElement('button');
button5.setAttribute('type', 'button');
button5.classList.add('btn', 'btn-primary1', 'edit-button1');
button5.style.color = '#C70039';
button5.title = 'VER USUARIOS INACTIVOS';

// Crear el icono del segundo botón
 const icon5 = document.createElement('i');
icon5.classList.add('fas', 'fa-filter');
icon5.id = 'filtercatalogsbystoresimple';
button5.appendChild(icon5);

// Agregar los elementos al contenedor
cardContainer11Info.appendChild(select1);
cardContainer11Info.appendChild(button4);
cardContainer11Info.appendChild(button5);



button4.addEventListener('click', function() {
  var param = document.getElementById("list-storesListstoreq").value;
  var value = document.getElementById("keywordsearchcatalog").value;
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
'filter':'filter|'+param,
'param':'param',
'value':value
}
);
  // Aquí puedes agregar la funcionalidad que deseas para el botón 3
});

button5.addEventListener('click', function() {
  getApiData(getClientStoresList,
    {
      'apiService':'apiCom',
      'apiVersion':'v1',
      'endPoint':'getStores'
  },
    {
      'containerData':'list-storesListstoreq',
      'containerInfo':'containerCommerceInfo'
  },
    {
      'filter':'all',
      'param':'all',
      'value':'all'
  }
);
  // Aquí puedes agregar la funcionalidad que deseas para el botón 3
});
                  data.catalogs.forEach(info => {
                   
                    const assign1 = info.isApply === "0" ? assig="NO ASIGNADO" : assig=info.roomId;
                    const row = document.createElement("tr");
                    var activo="";
                    const backgroundColor = info.isActive === "0" ? "  #cc0007" : info.counterId === "0" ? "  #008f39" : "#ffffff";
                    const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
                   
                    row.innerHTML = `
                   
                  
                  
                    
                    <td style="background-color: ${backgroundColor};">
                    <p style="margin-bottom: 5px;">${info.storeName} -> ${info.categoryName}</p>
                    <div style="max-width: 100px; max-height: 100px; display: flex; flex-direction: column;">
                   
                    <img src="${info.imgProduct}" alt="Icono" style="max-width: 100%; max-height: 100%;">
                  </div>
                  <div style="margin-top: 10px;">
                    <div style="max-width: 100px;">
                
                      <p style="margin-bottom: 5px;">${info.productName} -> ${info.description}</p>
                      
                      <p>$${info.outPrice}</p>
                    </div>
                  </div>
                  
            
                     </td>
                 

            
            
               
                  
                  

            
          

            <td style="background-color: ${backgroundColor};">${info.stock}
            </td>
            
           
            
           
            
            <td style="background-color: ${backgroundColor};">${info.outPrice}</td>
            
           
            
            

           

            <td style="background-color: ${backgroundColor};"> <div class="edit-container">
                    ${info.isPos =="1" ? `<p>POS</p>`:``}
                    ${info.isEcommerce =="1" ? `<p>E-commerce</p>`:``}
                    ${info.isInternal =="1" ? `<p>Uso interno</p>`:``}
                    ${info.isStocked =="1" ? `<p>Bodega</p>`:``}

            </td>

           
      
            
                     
            <td>
            ${info.ean1}
              
              <svg id="bc${info.catalogId}" style="display: none;"></svg>
              <button id="btnbc${info.catalogId}" onclick="generarCodigoDeBarras('bc${info.catalogId}', '${info.ean1}','view','');" class="btn btn-primary1 delete-button" title="EDITAR">
              <i class="fas fa-eye"></i>
            </button>
            <button id="btncbc${info.catalogId}" style="display: none;" onclick="generarCodigoDeBarras('bc${info.catalogId}', '${info.ean1}','unview','');" class="btn btn-primary1 delete-button" title="EDITAR">
              <i class="fas fa-eye-slash"></i>
            </button>
            </td>
            
            <td>
            ${info.ean2}
            <svg id="bc2${info.catalogId}" style="display: none;"></svg>
            
            <button id="btn2bc2${info.catalogId}" onclick="generarCodigoDeBarras('bc2${info.catalogId}', '${info.ean2}','view','2');" class="btn btn-primary1 delete-button" title="EDITAR">
              <i class="fas fa-eye"></i>
            </button>
            <button id="btnc2bc2${info.catalogId}" style="display: none;" onclick="generarCodigoDeBarras('bc2${info.catalogId}', '${info.ean2}','unview','2');" class="btn btn-primary1 delete-button" title="EDITAR">
              <i class="fas fa-eye-slash"></i>
            </button>
            </td>
            <td>
            ${info.sku}</td>

         

          

            <td>
            <div id="qr${info.catalogId}">
            </div>
            
            <button id="btnqr${info.catalogId}" onclick="genCode('qr${info.catalogId}', '${info.catalogId}','view','');" class="btn btn-primary1 delete-button" title="EDITAR">
            <i class="fas fa-eye"></i>
          </button>
          <button id="btncqr${info.catalogId}" style="display: none;" onclick="genCode('qr${info.catalogId}', '${info.catalogId}','unview','');" class="btn btn-primary1 delete-button" title="EDITAR">
            <i class="fas fa-eye-slash"></i>
          </button>
        </td>
        

         
        <td style="background-color: ${backgroundColor};"> <div class="edit-container">
        ${info.isActive !== "0" ? `<button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;isActive&quot;,&quot;0&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="DESACTIVAR">
<i class="fas fa-ban"></i>
</button>` 
: `<button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;isActive&quot;,&quot;1&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="ACTIVAR">
<i class="fas fa-check"></i>
</button>`}${activo1} 

</div></td>

            <td style="background-color: ${backgroundColor};">


            <button id="btnview${info.catalogId}" onclick="openClose('btnview${info.catalogId}','unview');openClose('btnunview${info.catalogId}','view');openClose('allContainerv${info.catalogId}','view');" class="btn btn-primary1 delete-button" title="EDITAR">
            <i class="fas fa-eye"></i>
            </button>
            <button id="btnunview${info.catalogId}" style="display: none;" onclick="openClose('btnunview${info.catalogId}','unview');openClose('btnview${info.catalogId}','view');openClose('allContainerv${info.catalogId}','unview');" class="btn btn-primary1 delete-button" title="EDITAR">
            <i class="fas fa-eye-slash"></i>
            </button>

            <div id="allContainerv${info.catalogId}" style="display: none;">

            <div class="edit-container" style="display: flex;">
            <p class="card-text" style="display: inline-block; margin-right: 10px;">Stock de seguridad: ${info.secStock}</p>
           
          </div>
          <div class="edit-container" style="display: flex;">
          <p class="card-text" style="display: inline-block; margin-right: 10px;">Min Qty: ${info.minQty}</p>
         
        </div>
        <div class="edit-container" style="display: flex;">
          <p class="card-text" style="display: inline-block; margin-right: 10px;">Max Qty: ${info.maxQty}</p>
         
        </div>
        <div class="edit-container" style="display: flex;">
        <p class="card-text" style="display: inline-block; margin-right: 10px;">Promoción: ${info.isPromo}</p>
       
      </div>
      <div class="edit-container" style="display: flex;">
      <p class="card-text" style="display: inline-block; margin-right: 10px;">ID promo: ${info.promoId}</p>
     
    </div>
    <div class="edit-container" style="display: flex;">
    <p class="card-text" style="display: inline-block; margin-right: 10px;">Descuento: ${info.isDiscount}</p>
   
  </div>
  <div class="edit-container" style="display: flex;">
  <p class="card-text" style="display: inline-block; margin-right: 10px;">%Descuento: ${info.discount} %</p>
 
</div>
<div class="edit-container" style="display: flex;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">POS: ${info.isPos}</p>

</div>
<div class="edit-container" style="display: flex;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">E-commerce: ${info.isEcommerce}</p>

</div>
<div class="edit-container" style="display: flex;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">Uso interno: ${info.isInternal}</p>

</div>
<div class="edit-container" style="display: flex;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">Bodega: ${info.isStocked}</p>

</div>

<div class="edit-container" style="display: flex;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">Unidad: ${info.unit}</p>

</div>
<div class="edit-container" style="display: flex;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">Unidad de lectura: ${info.readUnit}</p>

</div>
<div class="edit-container" style="display: flex;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">Unidad X Qty: ${info.unitQty}</p>

</div>
<div class="edit-container" style="display: flex;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">Unidad X Unidad: ${info.unitUnit}</p>

</div>
            </div>
</td>
<td style="background-color: ${backgroundColor};">
<button id="btnviewc${info.catalogId}" onclick="openClose('btnviewc${info.catalogId}','unview');openClose('btnunviewc${info.catalogId}','view');openClose('allContainer${info.catalogId}','view');" class="btn btn-primary1 delete-button" title="EDITAR">
            <i class="fas fa-eye"></i>
            </button>
            <button id="btnunviewc${info.catalogId}" style="display: none;" onclick="openClose('btnunviewc${info.catalogId}','unview');openClose('btnviewc${info.catalogId}','view');openClose('allContainer${info.catalogId}','unview');" class="btn btn-primary1 delete-button" title="EDITAR">
            <i class="fas fa-eye-slash"></i>
            </button>
            <div id="allContainer${info.catalogId}" style="display: none;">


            <div class="mb-3">
            <div style="display: flex;">
            
            <p class="card-text" style="display: inline-block; margin-right: 10px;">Tienda: ${info.storeName}</p>
              <select id="list-storesListstore${idin}" class="form-control" name="lista1" required style="flex: 1;"></select>
              <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;storeId&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
                <i class="fas fa-edit"></i>
              </button>
            </div>
          </div>



          <div class="mb-3">
  <div style="display: flex;">
  <p class="card-text" style="display: inline-block; margin-right: 10px;">Categpría: ${info.categoryName}</p>
    <select id="list-categoriesList${idin}" class="form-control" name="lista" required style="flex: 1;"></select>
    <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;categoryId&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
      <i class="fas fa-edit"></i>
    </button>
  </div>
</div>

<div class="edit-container" style="display: flex;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">Stock:</p>
  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.stock}" title="${info.stock}" style="flex: 1;">
  <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;stock&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
    <i class="fas fa-edit"></i>
  </button>
</div>

<div class="edit-container" style="display: flex;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">sec-Stock:</p>
  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.secStock}" title="${info.secStock}" style="flex: 1;">
  <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;secStock&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
    <i class="fas fa-edit"></i>
  </button>
</div>



<div class="edit-container" style="display: flex;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">Min Qty:</p>
  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.minQty}" title="${info.spcProduct}" style="flex: 1;">
  <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;minQty&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
    <i class="fas fa-edit"></i>
  </button>
</div>

<div class="edit-container" style="display: flex;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">Max Qty:</p>
  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.maxQty}" title="${info.spcProduct}" style="flex: 1;">
  <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;maxQty&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
    <i class="fas fa-edit"></i>
  </button>
</div>


<div class="edit-container" style="display: flex;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">Precio:</p>
  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.outPrice}" title="${info.spcProduct}" style="flex: 1;">
  <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;outPrice&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
    <i class="fas fa-edit"></i>
  </button>
</div>

<div class="edit-container" style="display: flex;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">Promoción:</p>
  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.isPromo}" title="${info.spcProduct}" style="flex: 1;">
  <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;isPromo&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
    <i class="fas fa-edit"></i>
  </button>
</div>

<div class="edit-container" style="display: flex;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">ID promo:</p>
  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.promoId}" title="${info.spcProduct}" style="flex: 1;">
  <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;promoId&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
    <i class="fas fa-edit"></i>
  </button>
</div>

<div class="edit-container" style="display: flex;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">Descuento:</p>
  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.isDiscount}" title="${info.spcProduct}" style="flex: 1;">
  <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;isDiscount&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
    <i class="fas fa-edit"></i>
  </button>
</div>

<div class="edit-container" style="display: flex;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">%Descuento:</p>
  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.discount}%" title="${info.spcProduct}" style="flex: 1;">
  <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;discount&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
    <i class="fas fa-edit"></i>
  </button>
</div>

<div class="edit-container" style="display: flex;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">POS:</p>
  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.isPos}" title="${info.spcProduct}" style="flex: 1;">
  <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;isPos&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
    <i class="fas fa-edit"></i>
  </button>
</div>

<div class="edit-container" style="display: flex;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">E-commerce:</p>
  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.isEcommerce}" title="${info.spcProduct}" style="flex: 1;">
  <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;isEcommerce&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
    <i class="fas fa-edit"></i>
  </button>
</div>

<div class="edit-container" style="display: flex;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">Uso interno:</p>

  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.isInternal}" title="${info.spcProduct}" style="flex: 1;">
  <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;isInternal&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
    <i class="fas fa-edit"></i>
  </button>
</div>

<div class="edit-container" style="display: flex;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">Bodega:</p>

  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.isStocked}" title="${info.spcProduct}" style="flex: 1;">
  <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;isStocked&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
    <i class="fas fa-edit"></i>
  </button>
</div>

<div class="edit-container" style="display: flex;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">Unidad:</p>

  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.unit}" title="${info.spcProduct}" style="flex: 1;">
  <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;unit&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
    <i class="fas fa-edit"></i>
  </button>
</div>


<div class="edit-container" style="display: flex;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">Unidad lectura: ${info.readUnit}</p>

  <select id="list-unidadpos" class="form-control" name="lista1" required style="flex: 1;">
    <option value="un">Unidad (un)</option>
    <option value="cm">Centímetros (cm)</option>
    <option value="m">Metros (m)</option>
    <option value="km">Kilómetros (km)</option>
    <option value="in">Pulgadas (in)</option>
    <option value="ft">Pies (ft)</option>
    <option value="mi">Millas (mi)</option>
    <option value="g">Gramos (g)</option>
    <option value="kg">Kilogramos (kg)</option>
    <option value="oz">Onzas (oz)</option>
    <option value="lb">Libras (lb)</option>
    <option value="l">Litros (l)</option>
    <option value="ml">Mililitros (ml)</option>
    <option value="gal">Galones (gal)</option>
    <option value="s">Segundos (s)</option>
    <option value="min">Minutos (min)</option>
    <option value="h">Horas (h)</option>
    <option value="box">Caja (box)</option>
    <option value="pkg">Paquete (pkg)</option>
    <option value="bag">Bolsa (bag)</option>
  </select>
  <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;readUnit&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
    <i class="fas fa-edit"></i>
  </button>
</div>

<div class="edit-container" style="display: flex;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">Unidad X Qty:</p>
  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.unitQty}" title="${info.spcProduct}" style="flex: 1;">
  <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;unitQty&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
    <i class="fas fa-edit"></i>
  </button>
</div>

<div class="edit-container" style="display: flex;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">Unidad X Unidad:</p>
  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.unitUnit}" title="${info.spcProduct}" style="flex: 1;">
  <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;unitUnit&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
    <i class="fas fa-edit"></i>
  </button>
</div>
<div class="edit-container" style="display: flex;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">Eliminar:</p>
  <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;del&quot;,&quot;1&quot;,&quot;del&quot;)" class="btn btn-primary1 delete-button" title="ELIMINAR">
    <i class="fas fa-trash"></i>
  </button>
</div>

            </div>
            </td>

                    `;
                   
                    cardContainer11.appendChild(row);
                    getApiData(getClientCategoriesList,
                      {
                        'apiService':'apiCom',
                        'apiVersion':'v1',
                        'endPoint':'getCategories'
                    },
                      {
                        'containerData':'list-categoriesList'+idin,
                        'containerInfo':info.categoryId+'|'+info.parentId,
                    },
                      {
                        'filter':'all',
                        'param':'all',
                        'value':'all'
                    }
                        );
                    //getApiData(getClientCategoriesList,'apiCom','v1','getCategories','list-categoriesList'+idin,info.categoryId+"|"+info.parentId,'all','all','all');
                    //getClientCategoriesList('all','all','all',idin);
                    getApiData(getClientStoresList,
                      {
                        'apiService':'apiCom',
                        'apiVersion':'v1',
                        'endPoint':'getStores'
                    },
                      {
                        'containerData':'list-storesListstore'+idin,
                        'containerInfo':'containerCustomersInfo',
                    },
                      {
                        'filter':'all',
                        'param':'all',
                        'value':'all'
                    }
                        );
                   // getApiData(getClientStoresList,'apiCom','v1','getStores','list-storesListstore'+idin,'containerCustomersInfo','all','all','all');
        
                   // getClientStoresList1('all','all','all',idin);
            
                    idin++;
                   
                  });
            
                 
                  
                  
            
                }
            
                getApiData(getClientStoresList,
                  {
                    'apiService':'apiCom',
                    'apiVersion':'v1',
                    'endPoint':'getStores'
                },
                  {
                    'containerData':'list-storesListstoreq',
                    'containerInfo':'containerCommerceInfo'
                },
                  {
                    'filter':'all',
                    'param':'all',
                    'value':'all'
                }
                    );
                  if(modelView=="card"){
                    const cardContainer11 = document.getElementById(containerData);
                    const cardContainer11Info = document.getElementById(containerInfo);
                    cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
                    cardContainer11Info.innerHTML = ""; 
                    const card11Info = document.createElement("div");
                    card11Info.classList.add("card");
                    card11Info.innerHTML = ` <p>${data.response.apiMessage}</p>`;
                    cardContainer11Info.appendChild(card11Info);
                    data.catalogs.forEach(info => {
                        const card11 = document.createElement("div");
                        card11.classList.add("card");
                        const backgroundColor = info.isActive === "0" ? "  #cc0007" : "#ffffff";
                        const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
                        
                        card11.innerHTML = `
                        <div class="card-body" style="background-color: ${backgroundColor};">
                        <h5 class="card-title">
                        <p class="card-text"> <i class="fas fa-guitar"></i></p>
                        <img src="${info.imgProduct}" alt="Icono" style="max-width: 120px; max-height: 120px;">
            
                      
            
                    </h5>
                    <p class="card-text">
                    <div class="edit-container">
                    ${info.productName}
            </div>
                    </p>
                    
                    
                    
                    
                   <p class="card-text">
                    <div class="edit-container">
                    ${info.isActive !== "0" ? `<button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;isActive&quot;,&quot;0&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="DESACTIVAR">
            <i class="fas fa-ban"></i>
            </button>` 
            : `<button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;isActive&quot;,&quot;1&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="ACTIVAR">
            <i class="fas fa-check"></i>
            </button>`}${activo1} 
            
            </div>
                           
                            <p class="card-text">
                    <div class="edit-container">
                    ${info.description}
            </div>
                    </p>
            
                  
            
                   
                              
                  
                           
            
            
                 
            
            
            
                    <p class="card-text">Tienda:
                    <div class="edit-container">
                    ${info.storeName}
                    </div>
                    <div class="mb-3">
            
            <select id="list-storesListstore${idin}" class="form-control" name="lista1" required></select>
            
            <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;storeId&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
            <i class="fas fa-edit"></i>
            </button>
            </div>
                    </p>
            
            
            
            
            
                    <p class="card-text">Categoría:
                    <div class="edit-container">
                    ${info.categoryName}
            
                 
            </div>
            <div class="mb-3">
            
            <select id="list-categoriesList${idin}" class="form-control" name="lista" required></select>
            
            <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;categoryId&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
            <i class="fas fa-edit"></i>
            </button>
            </div>
                    </p>
                   
            
                  
            
            
                    <p class="card-text">Stock:
                    <div class="edit-container">
            <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.stock}" title="${info.stock}">
            <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;stock&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
            <i class="fas fa-edit"></i>
            </button>
            </div>
                    </p>
            
                    <p class="card-text">Stock de seguridad:
                    <div class="edit-container">
            <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.secStock}" title="${info.spcProduct}">
            <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;secStock&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
            <i class="fas fa-edit"></i>
            </button>
            </div>
                    </p>
            
                    <p class="card-text">Min qty:
                    <div class="edit-container">
            <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.minQty}" title="${info.spcProduct}">
            <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;minQty&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
            <i class="fas fa-edit"></i>
            </button>
            </div>
                    </p>
            
            
                    <p class="card-text">Max qty:
                    <div class="edit-container">
            <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.maxQty}" title="${info.spcProduct}">
            <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;maxQty&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
            <i class="fas fa-edit"></i>
            </button>
            </div>
                    </p>
                   
            
            
            
                    <p class="card-text">Precio de venta:
                    <div class="edit-container">
            <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.outPrice}" title="${info.spcProduct}">
            <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;outPrice&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
            <i class="fas fa-edit"></i>
            </button>
            </div>
                    </p>
            
                  
                    <p class="card-text">
                    Promoción:
                    <div class="edit-container">
            <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.isPromo}" title="${info.spcProduct}">
            <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;isPpromo&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
            <i class="fas fa-edit"></i>
            </button>
            </div>
            </p>
            <p class="card-text">
            Promoción id:
            <div class="edit-container">
            <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.promoId}" title="${info.spcProduct}">
            <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;promoId&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
            <i class="fas fa-edit"></i>
            </button>
            </div>
            </p>
            <p class="card-text">
            Descuento:
            <div class="edit-container">
            <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.isDiscount}" title="${info.spcProduct}">
            <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;isDiscount&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
            <i class="fas fa-edit"></i>
            </button>
            </div>
            </p>
            
            <p class="card-text">
            Valor de descuento:
            <div class="edit-container">
            <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.discount}%" title="${info.spcProduct}">
            <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;discount&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
            <i class="fas fa-edit"></i>
            </button>
            </div>
            </p>
            <p class="card-text">
            POS:
            <div class="edit-container">
            <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.isPos}" title="${info.spcProduct}">
            <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;isPos&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
            <i class="fas fa-edit"></i>
            </button>
            </div>
            </p>
            <p class="card-text">
            E-Commerce:
            <div class="edit-container">
            <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.isEcommerce}" title="${info.spcProduct}">
            <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;isEcommerce&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
            <i class="fas fa-edit"></i>
            </button>
            </div>
            </p>
            <p class="card-text">
            Reserva interna:
            <div class="edit-container">
            <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.isInternal}" title="${info.spcProduct}">
            <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;isInternal&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
            <i class="fas fa-edit"></i>
            </button>
            </div>
            </p>
            
            <p class="card-text">
            Bodega:
            <div class="edit-container">
            <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.isStocked}" title="${info.spcProduct}">
            <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;isStocked&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
            <i class="fas fa-edit"></i>
            </button>
            </div>
            </p>
            
            <p class="card-text">
            Unidad:
            <div class="edit-container">
            <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.unit}" title="${info.spcProduct}">
            <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;unit&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
            <i class="fas fa-edit"></i>
            </button>
            </div>
            </p>
            
            <p class="card-text">
            Unidad de lectura y calculo: <b>${info.readUnit}</b>
            <div class="edit-container">
            
            <select id="list-unidadpos" class="form-control" name="lista1" required>
            <option value="un">Unidad (un)</option>
            <option value="cm">Centímetros (cm)</option>
            <option value="m">Metros (m)</option>
            <option value="km">Kilómetros (km)</option>
            <option value="in">Pulgadas (in)</option>
            <option value="ft">Pies (ft)</option>
            <option value="mi">Millas (mi)</option>
            <option value="g">Gramos (g)</option>
            <option value="kg">Kilogramos (kg)</option>
            <option value="oz">Onzas (oz)</option>
            <option value="lb">Libras (lb)</option>
            <option value="l">Litros (l)</option>
            <option value="ml">Mililitros (ml)</option>
            <option value="gal">Galones (gal)</option>
            <option value="s">Segundos (s)</option>
            <option value="min">Minutos (min)</option>
            <option value="h">Horas (h)</option>
            <option value="box">Caja (box)</option>
            <option value="pkg">Paquete (pkg)</option>
            <option value="bag">Bolsa (bag)</option>
            </select>
            
            
            <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;readUnit&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
            <i class="fas fa-edit"></i>
            </button>
            </div>
            </p>
            <p class="card-text">
            Cantidad por unidad:
            <div class="edit-container">
            <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.unitQty}" title="${info.spcProduct}">
            <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;unitQty&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
            <i class="fas fa-edit"></i>
            </button>
            </div>
            </p>
            
            <p class="card-text">
            Unidades en unidad:
            <div class="edit-container">
            <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.unitUnit}" title="${info.spcProduct}">
            <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;unitUnit&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
            <i class="fas fa-edit"></i>
            </button>
            </div>
            </p>
                    <p class="card-text">
                    <div class="edit-container">
            
            <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;del&quot;,&quot;1&quot;,&quot;del&quot;)" class="btn btn-primary1 delete-button" title="ELIMINAR">
            <i class="fas fa-trash"></i>
            </button>
            </div>
                    </p>
                            
                        </div>
                        
                    `;
            
                    cardContainer11.appendChild(card11);

                    getApiData(getClientCategoriesList,
                      {
                        'apiService':'apiCom',
                        'apiVersion':'v1',
                        'endPoint':'getCategories'
                    },
                      {
                        'containerData':'list-categoriesList'+idin,
                        'containerInfo':info.categoryId+'|'+info.parentId,
                    },
                      {
                        'filter':'all',
                        'param':'all',
                        'value':'all'
                    }
                        );
                    //getApiData(getClientCategoriesList,'apiCom','v1','getCategories','list-categoriesList'+idin,info.categoryId+"|"+info.parentId,'all','all','all');
                    //getClientCategoriesList('all','all','all',idin);
                    getApiData(getClientStoresList,
                      {
                        'apiService':'apiCom',
                        'apiVersion':'v1',
                        'endPoint':'getStores'
                    },
                      {
                        'containerData':'list-storesListstore'+idin,
                        'containerInfo':'containerCustomersInfo',
                    },
                      {
                        'filter':'all',
                        'param':'all',
                        'value':'all'
                    }
                        );
                   // getApiData(getClientStoresList,'apiCom','v1','getStores','list-storesListstore'+idin,'containerCustomersInfo','all','all','all');
        
                   // getClientStoresList1('all','all','all',idin);
            
                    idin++;
                    });
                  }
                    document.getElementById("loading-container").style.display = "none";
                    resolve("Catálogos obtenidos exitosamente: "+data.response.apiMessage); // Resuelve la promesa cuando los catálogos se obtienen correctamente
                } else {
                  
                    const cardContainer11 = document.getElementById(containerData);
                    cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
                    const cardContainer11Info = document.getElementById(containerInfo);
                    cardContainer11Info.innerHTML = ""; 
                    const card11Info = document.createElement("div");
                    card11Info.classList.add("card");
                    card11Info.innerHTML = ` <p>${data.response.apiMessage}</p>
                        <p>El filtro solicitado fue-> FILTRO: ${data.response.sentData.filter}, PARÁMETRO: ${data.response.sentData.param}, VALOR: ${data.response.sentData.value}</p>`;
                    cardContainer11Info.appendChild(card11Info);
                    document.getElementById("loading-container").style.display = "none";
                    reject("Error al obtener los catálogos: "+data.response.apiMessage); // Rechaza la promesa si hay un error al obtener los catálogos
                    // Crear el primer botón
            const button1 = document.createElement('button');
            button1.setAttribute('type', 'button');
            button1.classList.add('btn', 'btn-primary1', 'edit-button1');
            button1.style.color = '#C70039';
            button1.title = 'VER USUARIOS ACTIVOS';
            button1.onclick = function() {
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
            select.id = 'repos-catalogClient';
            select.classList.add('form-control');
            select.name = 'currency';
            select.required = true;
            const option1 = document.createElement('option');
            option1.setAttribute('selected', true);
            option1.textContent = 'Selecciona parámetro';
            const option2 = document.createElement('option');
            option2.value = 'ecm';
            option2.textContent = 'Catalogo ecommerce';
            const option3 = document.createElement('option');
            option3.value = 'pos';
            option3.textContent = 'Catalogo punto de venta';
            const option4 = document.createElement('option');
            option4.value = 'internal';
            option4.textContent = 'Catalogo reserva interna';

            const option5 = document.createElement('option');
            option5.value = 'stocked';
            option5.textContent = 'Catalogo bodega';
            const option6 = document.createElement('option');
            option6.value = 'browser';
            option6.textContent = 'Busqueda por similitud';
            const option7 = document.createElement('option');
            option7.value = 'filter';
            option7.textContent = 'Busqueda exacta de producto';
            
            select.appendChild(option1);
            select.appendChild(option2);
            select.appendChild(option3);
            select.appendChild(option4);
            select.appendChild(option5);
            select.appendChild(option6);
            select.appendChild(option7);
            div1.appendChild(select);
            
            // Crear el segundo contenedor div
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
            input.id = 'keywordsearchcatalog';
            input.placeholder = 'Ingresa palabra a buscar';
            div2.appendChild(input);
            
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
            
            button2.appendChild(icon2);
            
            // Crear el tercer botón
            const button3 = document.createElement('button');
            button3.setAttribute('type', 'button');
            button3.classList.add('btn', 'btn-primary1', 'edit-button1');
            button3.style.color = '#C70039';
            button3.title = 'VER USUARIOS INACTIVOS';
            button3.id = 'searchcatalogs';
            // Crear el icono del tercer botón
            const icon3 = document.createElement('i');
            icon3.classList.add('fas', 'fa-filter');
            
            button3.appendChild(icon3);


            
            // Agregar todos los elementos al documento
            cardContainer11Info.appendChild(button1);
            cardContainer11Info.appendChild(div1);
            cardContainer11Info.appendChild(div2);
            cardContainer11Info.appendChild(button2);
            cardContainer11Info.appendChild(button3);
            
            button2.addEventListener('click', function() {
                
              var param = document.getElementById("repos-catalogClient").value;
  var value = document.getElementById("keywordsearchcatalog").value;
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
         'filter':param+'|param',
         'param':'param',
         'value':value
     }
         );
               // getApiData(getProducts,'apiCom','v1','getProducts','containerProductsData','containerProductsInfo','filter',param,value);
              
                // Aquí puedes agregar la funcionalidad que deseas para el botón 2
            });
            
            button3.addEventListener('click', function() {
                var param = document.getElementById("repos-catalogClient").value;
                var value = document.getElementById("keywordsearchcatalog").value;
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
         'filter':'browser|'+param,
         'param':'param',
         'value':value
     }
         );
                // Aquí puedes agregar la funcionalidad que deseas para el botón 3
            });





            // Crear el elemento select
 const select1 = document.createElement('select');
select1.id = 'list-storesListstoreq';
select1.classList.add('form-control');
select1.name = 'lista1';
select1.required = true;
// Crear la opción por defecto
const defaultOption = document.createElement('option');
defaultOption.selected = true;
defaultOption.textContent = 'Selecciona tienda';
// Agregar la opción por defecto al select
select1.appendChild(defaultOption);

// Crear el primer botón
 const button4 = document.createElement('button');
button4.setAttribute('type', 'button');
button4.classList.add('btn', 'btn-primary1', 'edit-button1');
button4.style.color = '#C70039';
button4.title = 'VER USUARIOS INACTIVOS';
button4.addEventListener('click', function() {
    const storeId = document.getElementById('list-storesListstoreq').value;
    getApiData(getCatalogs, 'apiCom', 'v1', 'getCatalogs', 'containerCatalogsData', 'containerCatalogsInfo', `store|${storeId}`, 'storeId', 'all');
});

// Crear el icono del primer botón
const icon4 = document.createElement('i');
icon4.classList.add('fas', 'fa-filter');
icon4.id = 'filtercatalogsbystore';
button4.appendChild(icon4);

// Crear el segundo botón
 const button5 = document.createElement('button');
button5.setAttribute('type', 'button');
button5.classList.add('btn', 'btn-primary1', 'edit-button1');
button5.style.color = '#C70039';
button5.title = 'VER USUARIOS INACTIVOS';

// Crear el icono del segundo botón
 const icon5 = document.createElement('i');
icon5.classList.add('fas', 'fa-filter');
icon5.id = 'filtercatalogsbystoresimple';
button5.appendChild(icon5);

// Agregar los elementos al contenedor
cardContainer11Info.appendChild(select1);
cardContainer11Info.appendChild(button4);
cardContainer11Info.appendChild(button5);



button4.addEventListener('click', function() {
  var param = document.getElementById("list-storesListstoreq").value;
  var value = document.getElementById("keywordsearchcatalog").value;
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
'filter':'filter|'+param,
'param':'param',
'value':value
}
);
  // Aquí puedes agregar la funcionalidad que deseas para el botón 3
});

button5.addEventListener('click', function() {
  var param = document.getElementById("list-storesListstoreq").value;
  var value = document.getElementById("keywordsearchcatalog").value;
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
'filter':'store|'+param,
'param':'param',
'value':value
}
);
  // Aquí puedes agregar la funcionalidad que deseas para el botón 3
});
getApiData(getClientStoresList,
  {
    'apiService':'apiCom',
    'apiVersion':'v1',
    'endPoint':'getStores'
},
  {
    'containerData':'list-storesListstoreq',
    'containerInfo':'containerCommerceInfo'
},
  {
    'filter':'all',
    'param':'all',
    'value':'all'
}
    );
               
                  }
            } catch(error) {
                console.error("Error:", error);
                document.getElementById("loading-container").style.display = "none";
                reject(error); // Rechaza la promesa si hay un error
            }
        });
    }
    
    async function getCatalogs(data, containerData, containerInfo,modelView) {
      try {
          const message = await getCatalogsPromise(data, containerData, containerInfo,modelView);
          console.log(message); // Manejar el mensaje de éxito
      } catch (error) {
          console.error(error); // Manejar el error
      }
  }
  



      async function getCatalogsV2Promise(data, containerData, containerInfo) {
        return new Promise(async (resolve, reject) => {
            const url = window.location.href;
    
            // Crear un objeto URL a partir de la URL actual
            const urlObj = new URL(url);
    
            // Obtener el valor del parámetro "parametro1"
            var st = urlObj.searchParams.get("st");
    
            if (st === "pos") {
                document.getElementById("loading-container").style.display = "flex";
                var catid = document.getElementById("list-categoriesListPos").value;
                var catid1 = document.getElementById("simil").value;
                var catid2 = document.getElementById("scaracter").value;
                var catid3 = document.getElementById("list-caracterspecific").value;
                var catid4 = document.getElementById("list-caracterCatalog").value;
                var parametroPost="isPos";
                var parametroPost1=catid4;
            }
            if (st === "ecm") {
                document.getElementById("loading-container").style.display = "flex";
                var catid = document.getElementById("list-categoriesListECM").value;
                var catid1 = document.getElementById("simil").value;
                var parametroPost="isEcommerce";

            }
    
            var idin1 = 1;
    
            try {
              if (data.response && data.response.response == "true") {




                const cardContainer11 = document.getElementById(containerData);
        const cardContainer11Info = document.getElementById(containerInfo);
        cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
        cardContainer11Info.innerHTML = ""; 
        const card11Info = document.createElement("div");
        card11Info.classList.add("card");
         //   card11Info.innerHTML = ` <p>${data.response.apiMessage}</p> <p>Catálogos de vista (${catalogsCounter})</p>`;
            cardContainer11Info.appendChild(card11Info);
                var getChar= data.response.sentData.param;
                var getCharParam= data.response.sentData.filter;
                var partes = getCharParam.split('|');

// Acceder a la parte 2 y eliminar los espacios en blanco
var parte2 = partes[1].trim();

                if(getChar=="categoryId"){
//console.log(catid); 
var catalogsCounter=0;
                        data.catalogs.forEach(info => {
                                if(info.categoryId==catid && info[parametroPost]=="1"){
                                       
                                const card11 = document.createElement("div");
                                card11.classList.add("card");
                                const backgroundColor = info.isActive === "0" ? "  #cc0007" : "#ffffff";
                                const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
                                if (info.isDiscount !== "0") {
                                  var result = info.discount *info.outPrice;
                                  var mult= result/100;
                                  var rest=info.outPrice-mult;
                                  priceToShow = `${rest}`;
                  
                                  originPrice=info.outPrice;
                                  saver=mult;
                                  dicounter=info.discount;
                                  
                                } else {
                                  priceToShow = `${info.outPrice}`;
                                  dicounter=0;
                                }

                  //id unico de agregado al carrito
                                let idGenerado = generarID();
                               card11.innerHTML =  `
                                   
                                   
                               
                                <div class="edit-container">
                  
                               
                  
                                <div class="card">
                                <div class="card-header">
                                <div id="cartItems1${idGenerado}" class="cart-items1"></div>
                                <img src="${info.imgProduct}" alt="Icono" style="max-width: 120px; max-height: 120px;">
                                <h2>${info.productName}</h2>
                                <p class="item-price">${info.categoryName}</p>
                              </div>
                              <div class="card-body">
                                <p class="item-name">${info.description}</p>
                  
                  
                                <p class="card-text">
                                <div class="edit-container">
                            
                      
                  </div>
                  
                  ${info.isDiscount !== "0" ? `<p class="item-price" style="color: green;">Valor con descuento: $${priceToShow}</p><p class="item-price">Valor original: <del style="color: red;">$${originPrice}</del></p><p class="item-price" style="color: blue;">Ahorro: $${saver}</p>` 
                  : `<p class="item-price" style="color: green;">$${priceToShow}</p>`}
                              
                  ${info.isPromo !== "0" ? ` <p class="card-text">Promoción: </p>` 
                  : ``}
                  ${info.isDiscount !== "0" ? `  <p class="card-text" style="color: green;">Descuento: ${dicounter}%</p>` 
                  : ``}
                               
                              </div>
                              <div class="card-footer">
                                <div>
                                <p class="card-text">Cantidad:</p>
                                  <input type="text" id="quantityInput${idin1}" value="${info.minQty}">
                                </div>
                                <button class="btn btn-primary" onClick="addToCart('${idGenerado}','${info.productName}',${priceToShow},'quantityInput${idin1}',${info.outPrice},${idGenerado},'${info.catalogId}','${info.productId}','${info.sku}','${info.categoryId}','${info.categoryName}','${info.storeId}','${info.storeName}','${info.description}','${info.discount}','${info.isDiscount}','${info.promoId}','${info.isPromo}','${info.unit}','${info.readUnit}','${info.unitQty}','${info.unitUnit}','${info.imgProduct}','${info.spcProduct}','${info.minQty}','${info.maxQty}','${info.stock}');">Agregar</button>
                               
                              </div>
                              
                              
                              
                  </div>
                  
                               
                  </div>
                                
                                
                                
                                
                             
                                        
                                 
                                    
                                `;
                  
                                cardContainer11.appendChild(card11);
                                //getClientCategoriesList('all','all','all',idin);
                                //getClientStoresList1('all','all','all',idin);
                  
                                idin1++;
                                catalogsCounter++;
                  }  });

                }
                
                if(getChar=="simil"){
                        var catalogsCounter=0;

                       // console.log(catid);
                                                data.catalogs.forEach(info => {
                                                        var expresionRegular = new RegExp(catid1, "i");
                                                        if(expresionRegular.test(info.keyWords) && info[parametroPost]=="1"){
                                                                
                                                        const card11 = document.createElement("div");
                                                        card11.classList.add("card");
                                                        const backgroundColor = info.isActive === "0" ? "  #cc0007" : "#ffffff";
                                                        const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
                                                        if (info.isDiscount !== "0") {
                                                          var result = info.discount *info.outPrice;
                                                          var mult= result/100;
                                                          var rest=info.outPrice-mult;
                                                          priceToShow = `${rest}`;
                                          
                                                          originPrice=info.outPrice;
                                                          saver=mult;
                                                          dicounter=info.discount;
                                                          
                                                        } else {
                                                          priceToShow = `${info.outPrice}`;
                                                          dicounter=0;
                                                        }
                        
                                          //id unico de agregado al carrito
                                                        let idGenerado = generarID();
                                                       card11.innerHTML =  `
                                                           
                                                           
                                                       
                                                        <div class="edit-container">
                                          
                                                       
                                          
                                                        <div class="card">
                                                        <div class="card-header">
                                                        <div id="cartItems1${idGenerado}" class="cart-items1"></div>
                                                        <img src="${info.imgProduct}" alt="Icono" style="max-width: 120px; max-height: 120px;">
                                                        <h2>${info.productName}</h2>
                                                        <p class="item-price">${info.categoryName}</p>
                                                      </div>
                                                      <div class="card-body">
                                                        <p class="item-name">${info.description}</p>
                                          
                                          
                                                        <p class="card-text">
                                                        <div class="edit-container">
                                                    
                                              
                                          </div>
                                          
                                          ${info.isDiscount !== "0" ? `<p class="item-price" style="color: green;">Valor con descuento: $${priceToShow}</p><p class="item-price">Valor original: <del style="color: red;">$${originPrice}</del></p><p class="item-price" style="color: blue;">Ahorro: $${saver}</p>` 
                                          : `<p class="item-price" style="color: green;">$${priceToShow}</p>`}
                                                      
                                          ${info.isPromo !== "0" ? ` <p class="card-text">Promoción: </p>` 
                                          : ``}
                                          ${info.isDiscount !== "0" ? `  <p class="card-text" style="color: green;">Descuento: ${dicounter}%</p>` 
                                          : ``}
                                                       
                                                      </div>
                                                      <div class="card-footer">
                                                        <div>
                                                        <p class="card-text">Cantidad:</p>
                                                          <input type="text" id="quantityInput${idin1}" value="${info.minQty}">
                                                        </div>
                                                        <button class="btn btn-primary" onClick="addToCart('${idGenerado}','${info.productName}',${priceToShow},'quantityInput${idin1}',${info.outPrice},${idGenerado},'${info.catalogId}','${info.productId}','${info.sku}','${info.categoryId}','${info.categoryName}','${info.storeId}','${info.storeName}','${info.description}','${info.discount}','${info.isDiscount}','${info.promoId}','${info.isPromo}','${info.unit}','${info.readUnit}','${info.unitQty}','${info.unitUnit}','${info.imgProduct}','${info.spcProduct}','${info.minQty}','${info.maxQty}','${info.stock}');">Agregar</button>
                                                       
                                                      </div>
                                                      
                                                      
                                                      
                                          </div>
                                          
                                                       
                                          </div>
                                                        
                                                        
                                                        
                                                        
                                                     
                                                                
                                                         
                                                            
                                                        `;
                                          
                                                        cardContainer11.appendChild(card11);
                                                        //getClientCategoriesList('all','all','all',idin);
                                                        //getClientStoresList1('all','all','all',idin);
                                          
                                                        idin1++;
                                                        catalogsCounter++;
                                          }  });
                        
                                        }
                                        if(getChar=="specific"){
                                          var catalogsCounter=0;
                  
                                         // console.log(catid);
                                                                  data.catalogs.forEach(info => {
                                                                    var catid2 = document.getElementById("scaracter").value;
                                                                    var catid3 = document.getElementById("list-caracterspecific").value;
                                                                          var expresionRegular = new RegExp(catid2, "i");
                                                                          if(expresionRegular.test(info[catid3]) && info[parametroPost]=="1"){
                                                                                  
                                                                          const card11 = document.createElement("div");
                                                                          card11.classList.add("card");
                                                                          const backgroundColor = info.isActive === "0" ? "  #cc0007" : "#ffffff";
                                                                          const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
                                                                          if (info.isDiscount !== "0") {
                                                                            var result = info.discount *info.outPrice;
                                                                            var mult= result/100;
                                                                            var rest=info.outPrice-mult;
                                                                            priceToShow = `${rest}`;
                                                            
                                                                            originPrice=info.outPrice;
                                                                            saver=mult;
                                                                            dicounter=info.discount;
                                                                            
                                                                          } else {
                                                                            priceToShow = `${info.outPrice}`;
                                                                            dicounter=0;
                                                                          }
                                          
                                                            //id unico de agregado al carrito
                                                                          let idGenerado = generarID();
                                                                         card11.innerHTML =  `
                                                                             
                                                                             
                                                                         
                                                                          <div class="edit-container">
                                                            
                                                                         
                                                            
                                                                          <div class="card">
                                                                          <div class="card-header">
                                                                          <div id="cartItems1${idGenerado}" class="cart-items1"></div>
                                                                          <img src="${info.imgProduct}" alt="Icono" style="max-width: 120px; max-height: 120px;">
                                                                          <h2>${info.productName}</h2>
                                                                          <p class="item-price">${info.categoryName}</p>
                                                                        </div>
                                                                        <div class="card-body">
                                                                          <p class="item-name">${info.description}</p>
                                                            
                                                            
                                                                          <p class="card-text">
                                                                          <div class="edit-container">
                                                                      
                                                                
                                                            </div>
                                                            
                                                            ${info.isDiscount !== "0" ? `<p class="item-price" style="color: green;">Valor con descuento: $${priceToShow}</p><p class="item-price">Valor original: <del style="color: red;">$${originPrice}</del></p><p class="item-price" style="color: blue;">Ahorro: $${saver}</p>` 
                                                            : `<p class="item-price" style="color: green;">$${priceToShow}</p>`}
                                                                        
                                                            ${info.isPromo !== "0" ? ` <p class="card-text">Promoción: </p>` 
                                                            : ``}
                                                            ${info.isDiscount !== "0" ? `  <p class="card-text" style="color: green;">Descuento: ${dicounter}%</p>` 
                                                            : ``}
                                                                         
                                                                        </div>
                                                                        <div class="card-footer">
                                                                          <div>
                                                                          <p class="card-text">Cantidad:</p>
                                                                            <input type="text" id="quantityInput${idin1}" value="${info.minQty}">
                                                                          </div>
                                                                          <button class="btn btn-primary" onClick="addToCart('${idGenerado}','${info.productName}',${priceToShow},'quantityInput${idin1}',${info.outPrice},${idGenerado},'${info.catalogId}','${info.productId}','${info.sku}','${info.categoryId}','${info.categoryName}','${info.storeId}','${info.storeName}','${info.description}','${info.discount}','${info.isDiscount}','${info.promoId}','${info.isPromo}','${info.unit}','${info.readUnit}','${info.unitQty}','${info.unitUnit}','${info.imgProduct}','${info.spcProduct}','${info.minQty}','${info.maxQty}','${info.stock}');">Agregar</button>
                                                                         
                                                                        </div>
                                                                        
                                                                        
                                                                        
                                                            </div>
                                                            
                                                                         
                                                            </div>
                                                                          
                                                                          
                                                                          
                                                                          
                                                                       
                                                                                  
                                                                           
                                                                              
                                                                          `;
                                                            
                                                                          cardContainer11.appendChild(card11);
                                                                          //getClientCategoriesList('all','all','all',idin);
                                                                          //getClientStoresList1('all','all','all',idin);
                                                            
                                                                          idin1++;
                                                                          catalogsCounter++;
                                                            }  });
                                          
                                                          }

                                        if(getChar=="specificCatalog"){
                                          
                                          var catalogsCounter=0;
                  
                                         
                                                                  data.catalogs.forEach(info => {
                                                                    var catid4 = document.getElementById("list-caracterCatalog").value;
                                                               
                                                                        //  var expresionRegular = new RegExp(catid4, "i");
                                                                          if(info[catid4]=="1" && info[parametroPost]=="1"){
                                                                                  
                                                                          const card11 = document.createElement("div");
                                                                          card11.classList.add("card");
                                                                          const backgroundColor = info.isActive === "0" ? "  #cc0007" : "#ffffff";
                                                                          const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
                                                                          if (info.isDiscount !== "0") {
                                                                            var result = info.discount *info.outPrice;
                                                                            var mult= result/100;
                                                                            var rest=info.outPrice-mult;
                                                                            priceToShow = `${rest}`;
                                                            
                                                                            originPrice=info.outPrice;
                                                                            saver=mult;
                                                                            dicounter=info.discount;
                                                                            
                                                                          } else {
                                                                            priceToShow = `${info.outPrice}`;
                                                                            dicounter=0;
                                                                          }
                                          
                                                            //id unico de agregado al carrito
                                                                          let idGenerado = generarID();
                                                                         card11.innerHTML =  `
                                                                             
                                                                             
                                                                         
                                                                          <div class="edit-container">
                                                            
                                                                         
                                                            
                                                                          <div class="card">
                                                                          <div class="card-header">
                                                                          <div id="cartItems1${idGenerado}" class="cart-items1"></div>
                                                                          <img src="${info.imgProduct}" alt="Icono" style="max-width: 120px; max-height: 120px;">
                                                                          <h2>${info.productName}</h2>
                                                                          <p class="item-price">${info.categoryName}</p>
                                                                        </div>
                                                                        <div class="card-body">
                                                                          <p class="item-name">${info.description}</p>
                                                            
                                                            
                                                                          <p class="card-text">
                                                                          <div class="edit-container">
                                                                      
                                                                
                                                            </div>
                                                            
                                                            ${info.isDiscount !== "0" ? `<p class="item-price" style="color: green;">Valor con descuento: $${priceToShow}</p><p class="item-price">Valor original: <del style="color: red;">$${originPrice}</del></p><p class="item-price" style="color: blue;">Ahorro: $${saver}</p>` 
                                                            : `<p class="item-price" style="color: green;">$${priceToShow}</p>`}
                                                                        
                                                            ${info.isPromo !== "0" ? ` <p class="card-text">Promoción: </p>` 
                                                            : ``}
                                                            ${info.isDiscount !== "0" ? `  <p class="card-text" style="color: green;">Descuento: ${dicounter}%</p>` 
                                                            : ``}
                                                                         
                                                                        </div>
                                                                        <div class="card-footer">
                                                                          <div>
                                                                          <p class="card-text">Cantidad:</p>
                                                                            <input type="text" id="quantityInput${idin1}" value="${info.minQty}">
                                                                          </div>
                                                                          <button class="btn btn-primary" onClick="addToCart('${idGenerado}','${info.productName}',${priceToShow},'quantityInput${idin1}',${info.outPrice},${idGenerado},'${info.catalogId}','${info.productId}','${info.sku}','${info.categoryId}','${info.categoryName}','${info.storeId}','${info.storeName}','${info.description}','${info.discount}','${info.isDiscount}','${info.promoId}','${info.isPromo}','${info.unit}','${info.readUnit}','${info.unitQty}','${info.unitUnit}','${info.imgProduct}','${info.spcProduct}','${info.minQty}','${info.maxQty}','${info.stock}');">Agregar</button>
                                                                         
                                                                        </div>
                                                                        
                                                                        
                                                                        
                                                            </div>
                                                            
                                                                         
                                                            </div>
                                                                          
                                                                          
                                                                          
                                                                          
                                                                       
                                                                                  
                                                                           
                                                                              
                                                                          `;
                                                            
                                                                          cardContainer11.appendChild(card11);
                                                                          //getClientCategoriesList('all','all','all',idin);
                                                                          //getClientStoresList1('all','all','all',idin);
                                                            
                                                                          idin1++;
                                                                          catalogsCounter++;
                                                            }  });
                                          
                                                          }
                                                          if(getChar=="charact"){
                                                            var catalogsCounter=0;
                                                            
                                                                          data.catalogs.forEach(info => {
                                                                            if( info[parametroPost1]=="1"){
                                                                                const card11 = document.createElement("div");
                                                                                card11.classList.add("card");
                                                                                const backgroundColor = info.isActive === "0" ? "  #cc0007" : "#ffffff";
                                                                                const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
                                                                                if (info.isDiscount !== "0") {
                                                                                  var result = info.discount *info.outPrice;
                                                                                  var mult= result/100;
                                                                                  var rest=info.outPrice-mult;
                                                                                  priceToShow = `${rest}`;
                                                                  
                                                                                  originPrice=info.outPrice;
                                                                                  saver=mult;
                                                                                  dicounter=info.discount;
                                                                                  
                                                                                } else {
                                                                                  priceToShow = `${info.outPrice}`;
                                                                                  dicounter=0;
                                                                                }
                                                                  //id unico de agregado al carrito
                                                                                let idGenerado = generarID();
                                                                               card11.innerHTML =  `
                                                                                   
                                                                                   
                                                                               
                                                                                <div class="edit-container">
                                                                  
                                                                               
                                                                  
                                                                                <div class="card">
                                                                                <div class="card-header">
                                                                                <div id="cartItems1${idGenerado}" class="cart-items1"></div>
                                                                                <img src="${info.imgProduct}" alt="Icono" style="max-width: 120px; max-height: 120px;">
                                                                                <h2>${info.productName}</h2>
                                                                                <p class="item-price">${info.categoryName}</p>
                                                                              </div>
                                                                              <div class="card-body">
                                                                                <p class="item-name">${info.description}</p>
                                                                  
                                                                  
                                                                                <p class="card-text">
                                                                                <div class="edit-container">
                                                                            
                                                                      
                                                                  </div>
                                                                  
                                                                  ${info.isDiscount !== "0" ? `<p class="item-price" style="color: green;">Valor con descuento: $${priceToShow}</p><p class="item-price">Valor original: <del style="color: red;">$${originPrice}</del></p><p class="item-price" style="color: blue;">Ahorro: $${saver}</p>` 
                                                                  : `<p class="item-price" style="color: green;">$${priceToShow}</p>`}
                                                                              
                                                                  ${info.isPromo !== "0" ? ` <p class="card-text">Promoción: </p>` 
                                                                  : ``}
                                                                  ${info.isDiscount !== "0" ? `  <p class="card-text" style="color: green;">Descuento: ${dicounter}%</p>` 
                                                                  : ``}
                                                                               
                                                                              </div>
                                                                              <div class="card-footer">
                                                                                <div>
                                                                                <p class="card-text">Cantidad:</p>
                                                                                  <input type="text" id="quantityInput${idin1}" value="${info.minQty}">
                                                                                </div>
                                                                                <button class="btn btn-primary" onClick="addToCart('${idGenerado}','${info.productName}',${priceToShow},'quantityInput${idin1}',${info.outPrice},${idGenerado},'${info.catalogId}','${info.productId}','${info.sku}','${info.categoryId}','${info.categoryName}','${info.storeId}','${info.storeName}','${info.description}','${info.discount}','${info.isDiscount}','${info.promoId}','${info.isPromo}','${info.unit}','${info.readUnit}','${info.unitQty}','${info.unitUnit}','${info.imgProduct}','${info.spcProduct}','${info.minQty}','${info.maxQty}','${info.stock}');">Agregar</button>
                                                                               
                                                                              </div>
                                                                              
                                                                              
                                                                              
                                                                  </div>
                                                                  
                                                                               
                                                                  </div>
                                                                                
                                                                                
                                                                                
                                                                                
                                                                             
                                                                                        
                                                                                 
                                                                                    
                                                                                `;
                                                                  
                                                                                cardContainer11.appendChild(card11);
                                                                                //getClientCategoriesList('all','all','all',idin);
                                                                                //getClientStoresList1('all','all','all',idin);
                                                                  
                                                                                idin1++;
                                                                                catalogsCounter++;
                                                                              }
                                                                            });
                                                                    
                                                                            document.getElementById("loading-container").style.display = "none";
                                                                            resolve("Catálogos obtenidos exitosamente"+data.response.apiMessage); // Resuelve la promesa cuando los catálogos se obtienen correctamente
                                                            
                                                                    }
                if(getChar=="all"){
var catalogsCounter=0;

              data.catalogs.forEach(info => {
                if( info[parametroPost]=="1"){
                    const card11 = document.createElement("div");
                    card11.classList.add("card");
                    const backgroundColor = info.isActive === "0" ? "  #cc0007" : "#ffffff";
                    const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
                    if (info.isDiscount !== "0") {
                      var result = info.discount *info.outPrice;
                      var mult= result/100;
                      var rest=info.outPrice-mult;
                      priceToShow = `${rest}`;
      
                      originPrice=info.outPrice;
                      saver=mult;
                      dicounter=info.discount;
                      
                    } else {
                      priceToShow = `${info.outPrice}`;
                      dicounter=0;
                    }
      //id unico de agregado al carrito
                    let idGenerado = generarID();
                   card11.innerHTML =  `
                       
                       
                   
                    <div class="edit-container">
      
                   
      
                    <div class="card">
                    <div class="card-header">
                    <div id="cartItems1${idGenerado}" class="cart-items1"></div>
                    <img src="${info.imgProduct}" alt="Icono" style="max-width: 120px; max-height: 120px;">
                    <h2>${info.productName}</h2>
                    <p class="item-price">${info.categoryName}</p>
                  </div>
                  <div class="card-body">
                    <p class="item-name">${info.description}</p>
      
      
                    <p class="card-text">
                    <div class="edit-container">
                
          
      </div>
      
      ${info.isDiscount !== "0" ? `<p class="item-price" style="color: green;">Valor con descuento: $${priceToShow}</p><p class="item-price">Valor original: <del style="color: red;">$${originPrice}</del></p><p class="item-price" style="color: blue;">Ahorro: $${saver}</p>` 
      : `<p class="item-price" style="color: green;">$${priceToShow}</p>`}
                  
      ${info.isPromo !== "0" ? ` <p class="card-text">Promoción: </p>` 
      : ``}
      ${info.isDiscount !== "0" ? `  <p class="card-text" style="color: green;">Descuento: ${dicounter}%</p>` 
      : ``}
                   
                  </div>
                  <div class="card-footer">
                    <div>
                    <p class="card-text">Cantidad:</p>
                      <input type="text" id="quantityInput${idin1}" value="${info.minQty}">
                    </div>
                    <button class="btn btn-primary" onClick="addToCart('${idGenerado}','${info.productName}',${priceToShow},'quantityInput${idin1}',${info.outPrice},${idGenerado},'${info.catalogId}','${info.productId}','${info.sku}','${info.categoryId}','${info.categoryName}','${info.storeId}','${info.storeName}','${info.description}','${info.discount}','${info.isDiscount}','${info.promoId}','${info.isPromo}','${info.unit}','${info.readUnit}','${info.unitQty}','${info.unitUnit}','${info.imgProduct}','${info.spcProduct}','${info.minQty}','${info.maxQty}','${info.stock}');">Agregar</button>
                   
                  </div>
                  
                  
                  
      </div>
      
                   
      </div>
                    
                    
                    
                    
                 
                            
                     
                        
                    `;
      
                    cardContainer11.appendChild(card11);
                    //getClientCategoriesList('all','all','all',idin);
                    //getClientStoresList1('all','all','all',idin);
      
                    idin1++;
                    catalogsCounter++;
                  }
                });
        
                document.getElementById("loading-container").style.display = "none";
                resolve("Catálogos obtenidos exitosamente"+data.response.apiMessage); // Resuelve la promesa cuando los catálogos se obtienen correctamente

        }
        card11Info.innerHTML = ` <p>${data.response.apiMessage}</p> <p>Catálogos de vista (${catalogsCounter})</p>`;
        document.getElementById("loading-container").style.display = "none";

        } else {
                    const cardContainer11 = document.getElementById(containerData);
                    cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
                    const cardContainer11Info = document.getElementById(containerInfo);
                    cardContainer11Info.innerHTML = "";
                    const card11Info = document.createElement("div");
                    card11Info.classList.add("card");
                    card11Info.innerHTML = `<p>${data.response.apiMessage}</p>
                                            <p>El filtro solicitado fue-> FILTRO: ${data.response.sentData.filter}, PARÁMETRO: ${data.response.sentData.param}, VALOR: ${data.response.sentData.value}</p>`;
                    cardContainer11Info.appendChild(card11Info);
                    document.getElementById("loading-container").style.display = "none";
                    reject("Error al obtener los catálogos: " + data.response.apiMessage);
                }
            } catch (error) {
                document.getElementById("loading-container").style.display = "none";
                reject("Error al procesar los datos: " + error);
            }
        });
    }
    
    async function getCatalogsV2(data, containerData, containerInfo) {
        try {
            const message = await getCatalogsV2Promise(data, containerData, containerInfo);
            console.log(message); // Manejar el mensaje de éxito
        } catch (error) {
            console.error(error); // Manejar el error
        }
    }
    