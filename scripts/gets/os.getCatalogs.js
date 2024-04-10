


  async function getCatalogsOSPromise(data, containerData, containerInfo,modelView) {
    return new Promise(async (resolve, reject) => {
        document.getElementById("loading-container").style.display = "flex";

        var idin1 = 1;
        try {
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
    select.id = 'OSCatalogsFilter';
    select.classList.add('form-control');
    select.name = 'currency';
    select.required = true;
   
    const option2 = document.createElement('option');
    option2.value = 'comments';
    option2.textContent = 'Comentarios';
    const option3 = document.createElement('option');
    option3.value = 'minQty';
    option3.textContent = 'Cantidad mínima';
    const option4 = document.createElement('option');
    option4.value = 'maxQty';
    option4.textContent = 'Cantidad máxima';
    const option5 = document.createElement('option');
    option5.value = 'price';
    option5.textContent = 'Precio';
    const option6 = document.createElement('option');
    option6.value = 'stock';
    option6.textContent = 'Stock';

    const option7 = document.createElement('option');
    option7.value = 'securityStock';
    option7.textContent = 'Sec Stock';
    const option8 = document.createElement('option');
    option8.value = 'isDiscount';
    option8.textContent = 'Descuento';
    const option9 = document.createElement('option');
    option9.value = 'discount';
    option9.textContent = '% Descuento';

    const option10 = document.createElement('option');
    option10.value = 'isPromo';
    option10.textContent = 'Promoción';
    const option11 = document.createElement('option');
    option11.value = 'promo';
    option11.textContent = '# Promoción';
    const option12 = document.createElement('option');
    option12.value = 'isStocked';
    option12.textContent = 'En bodega';
    const option13 = document.createElement('option');
    option13.value = 'isInternal';
    option13.textContent = 'Uso interno';

    const option14 = document.createElement('option');
    option14.value = 'keyWords';
    option14.textContent = 'Palabras clave';

    
    
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    select.appendChild(option5);
    select.appendChild(option6);
    select.appendChild(option7);
    select.appendChild(option8);
    select.appendChild(option9);
    select.appendChild(option10);
    select.appendChild(option11);
    select.appendChild(option12);
    select.appendChild(option13);
    select.appendChild(option14);
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
     input.id = 'OSCatalogsValue';
     input.placeholder = 'Ingresa palabra a buscar';
     div2.appendChild(input);
     button2.appendChild(icon2);
     cardContainer11Info.appendChild(div2);
     cardContainer11Info.appendChild(button2);


     button2.addEventListener('click', function() {
              
      var param = document.getElementById("OSCatalogsFilter").value;
var value = document.getElementById("OSCatalogsValue").value;
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
                        'filter':'catalogs',
                        'param':param,
                        'value':value
                    }
                        );
       // getApiData(getProducts,'apiCom','v1','getProducts','containerProductsData','containerProductsInfo','filter',param,value);
      
        // Aquí puedes agregar la funcionalidad que deseas para el botón 2
    });




    const div1pro = document.createElement('div');
    div1pro.classList.add('mb-3');

    const labelpro = document.createElement('label');
    labelpro.setAttribute('for', 'currency');
    labelpro.textContent = 'Busqueda por producto';
    div1pro.appendChild(labelpro);
    const selectpro = document.createElement('select');
    selectpro.id = 'OSProductsOSFilter';
    selectpro.classList.add('form-control');
    selectpro.name = 'currency';
    selectpro.required = true;
   
    const option2pro = document.createElement('option');
    option2pro.value = 'comments';
    option2pro.textContent = 'Comentarios de producto';
    const option3pro = document.createElement('option');
    option3pro.value = 'name';
    option3pro.textContent = 'Nombre de producto';
    const option4pro = document.createElement('option');
    option4pro.value = 'type';
    option4pro.textContent = 'Tipo de producto / servicio';
    const option5pro = document.createElement('option');
    option5pro.value = 'caracts';
    option5pro.textContent = 'Caracteristicas de producto / servicio';
    const option6pro = document.createElement('option');
    option6pro.value = 'sku';
    option6pro.textContent = 'SKU';

    const option7pro = document.createElement('option');
    option7pro.value = 'ean1';
    option7pro.textContent = 'EAN1';
    const option8pro = document.createElement('option');
    option8pro.value = 'ean2';
    option8pro.textContent = 'EAN2';
    
    
    selectpro.appendChild(option2pro);
    selectpro.appendChild(option3pro);
    selectpro.appendChild(option4pro);
    selectpro.appendChild(option5pro);
    selectpro.appendChild(option6pro);
    selectpro.appendChild(option7pro);
    selectpro.appendChild(option8pro);
    div1pro.appendChild(selectpro); 
    cardContainer11Info.appendChild(div1pro);

     // Crear el segundo botón
     const button3 = document.createElement('button');
     button3.setAttribute('type', 'button');
     button3.classList.add('btn', 'btn-primary1', 'edit-button1');
     button3.style.color = '#C70039';
     button3.title = 'VER USUARIOS INACTIVOS';
     button3.id = 'filtercatalogs';
     // Crear el icono del segundo botón
     const icon2pro = document.createElement('i');
     icon2pro.classList.add('fas', 'fa-sort');
     

     const div2pro = document.createElement('div');
     div2pro.classList.add('mb-3');
     // Agregar la etiqueta y el input al segundo contenedor div
     const label2pro = document.createElement('label');
     label2pro.classList.add('form-label');
     label2pro.innerHTML = '<i class="fas fa-guitar"></i> Parámetro de producto';
     div2pro.appendChild(label2pro);
     const inputpro = document.createElement('input');
     inputpro.setAttribute('type', 'text');
     inputpro.classList.add('form-control');
     inputpro.id = 'OSProductsOSValue';
     inputpro.placeholder = 'Ingresa palabra a buscar';
     div2pro.appendChild(inputpro);
     button3.appendChild(icon2pro);
     cardContainer11Info.appendChild(div2pro);
     cardContainer11Info.appendChild(button3);




     const div1cat = document.createElement('div');
div1cat.classList.add('mb-3');

const labelcat = document.createElement('label');
labelcat.setAttribute('for', 'currency');
labelcat.textContent = 'Busqueda por categoría';
div1cat.appendChild(labelcat);

const selectcat = document.createElement('select');
selectcat.id = 'OSCategoriesOSFilter';
selectcat.classList.add('form-control');
selectcat.name = 'currency';
selectcat.required = true;

const option2cat = document.createElement('option');
option2cat.value = 'comments';
option2cat.textContent = 'Comentarios de categoría';

const option3cat = document.createElement('option');
option3cat.value = 'name';
option3cat.textContent = 'Nombre de categoría';

const option4cat = document.createElement('option');
option4cat.value = 'type';
option4cat.textContent = 'Tipo de categoría';


selectcat.appendChild(option2cat);
selectcat.appendChild(option3cat);
selectcat.appendChild(option4cat);

div1cat.appendChild(selectcat); 
cardContainer11Info.appendChild(div1cat);
const button4 = document.createElement('button');
button4.setAttribute('type', 'button');
button4.classList.add('btn', 'btn-primary1', 'edit-button1');
button4.style.color = '#C70039';
button4.title = 'VER USUARIOS INACTIVOS';
button4.id = 'filtercatalogs';

const icon2cat = document.createElement('i');
icon2cat.classList.add('fas', 'fa-sort');

const div2cat = document.createElement('div');
div2cat.classList.add('mb-3');

// Agregar la etiqueta y el input al segundo contenedor div
const label2cat = document.createElement('label');
label2cat.classList.add('form-label');
label2cat.innerHTML = '<i class="fas fa-guitar"></i> Parámetro de categoría';
div2cat.appendChild(label2cat);

const inputcat = document.createElement('input');
inputcat.setAttribute('type', 'text');
inputcat.classList.add('form-control');
inputcat.id = 'OSCategoriesOSValue';
inputcat.placeholder = 'Ingresa palabra a buscar';
div2cat.appendChild(inputcat);

button4.appendChild(icon2cat);
cardContainer11Info.appendChild(div2cat);
cardContainer11Info.appendChild(button4);







const div1plc = document.createElement('div');
div1plc.classList.add('mb-3');

const labelplc = document.createElement('label');
labelplc.setAttribute('for', 'currency');
labelplc.textContent = 'Busqueda por establecimiento';
div1plc.appendChild(labelplc);

const selectplc = document.createElement('select');
selectplc.id = 'OSPlacesOSFilter';
selectplc.classList.add('form-control');
selectplc.name = 'currency';
selectplc.required = true;

const option2plc = document.createElement('option');
option2plc.value = 'comments';
option2plc.textContent = 'Comentarios del establecimiento';

const option3plc = document.createElement('option');
option3plc.value = 'name';
option3plc.textContent = 'Nombre del establecimiento';


selectplc.appendChild(option2plc);
selectplc.appendChild(option3plc);

div1plc.appendChild(selectplc);
cardContainer11Info.appendChild(div1plc);


const button5 = document.createElement('button');
button5.setAttribute('type', 'button');
button5.classList.add('btn', 'btn-primary1', 'edit-button1');
button5.style.color = '#C70039';
button5.title = 'VER USUARIOS INACTIVOS';
button5.id = 'filtercatalogs';

const icon2plc = document.createElement('i');
icon2plc.classList.add('fas', 'fa-sort');

const div2plc = document.createElement('div');
div2plc.classList.add('mb-3');

// Agregar la etiqueta y el input al segundo contenedor div
const label2plc = document.createElement('label');
label2plc.classList.add('form-label');
label2plc.innerHTML = '<i class="fas fa-guitar"></i> Parámetro de establecimiento';
div2plc.appendChild(label2plc);

const inputplc = document.createElement('input');
inputplc.setAttribute('type', 'text');
inputplc.classList.add('form-control');
inputplc.id = 'OSPlacesOSValue';
inputplc.placeholder = 'Ingresa palabra a buscar';
div2plc.appendChild(inputplc);

button5.appendChild(icon2plc);
cardContainer11Info.appendChild(div2plc);
cardContainer11Info.appendChild(button5);

     button3.addEventListener('click', function() {
              
      var param = document.getElementById("OSProductsOSFilter").value;
var value = document.getElementById("OSProductsOSValue").value;
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
                        'filter':'products',
                        'param':param,
                        'value':value
                    }
                        );
       // getApiData(getProducts,'apiCom','v1','getProducts','containerProductsData','containerProductsInfo','filter',param,value);
      
        // Aquí puedes agregar la funcionalidad que deseas para el botón 2
    });

    button4.addEventListener('click', function() {
              
      var param = document.getElementById("OSCategoriesOSFilter").value;
var value = document.getElementById("OSCategoriesOSValue").value;
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
                        'filter':'categories',
                        'param':param,
                        'value':value
                    }
                        );
       // getApiData(getProducts,'apiCom','v1','getProducts','containerProductsData','containerProductsInfo','filter',param,value);
      
        // Aquí puedes agregar la funcionalidad que deseas para el botón 2
    });

    button5.addEventListener('click', function() {
              
      var param = document.getElementById("OSPlacesOSFilter").value;
var value = document.getElementById("OSPlacesOSValue").value;
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
                        'filter':'places',
                        'param':param,
                        'value':value
                    }
                        );
       // getApiData(getProducts,'apiCom','v1','getProducts','containerProductsData','containerProductsInfo','filter',param,value);
      
        // Aquí puedes agregar la funcionalidad que deseas para el botón 2
    });

    data.catalogs.forEach(info => {
     
     
      const row = document.createElement("tr");
      
      const backgroundColor = info.infoCatalog.params.isActive === 0 || info.infoCatalog.params.isActive === false ? "  #cc0007" : "#ffffff";
      const activo1 = info.infoCatalog.params.isActive === 1 || info.infoCatalog.params.isActive === true ? activo="ACTIVO" : activo="INACTIVO";
      
      row.innerHTML = `
     
    
      <td style="background-color: ${backgroundColor};">
      <p style="margin-bottom: 5px; font-size: 12px; color: ${info.infoCatalog.info.isStocked === true || info.infoCatalog.info.isStocked === 1 ? 'red' : (info.infoCatalog.info.isInternal === true || info.infoCatalog.info.isInternal === 1 ? 'orange' : 'green')}">
      ${info.infoCatalog.info.isStocked === true || info.infoCatalog.info.isStocked === 1 ? 'EN BODEGA' : (info.infoCatalog.info.isInternal === true || info.infoCatalog.info.isInternal === 1 ? 'USO INTERNO' : 'EN STOCK')}
    </p>
    <div style="max-width: 60px; max-height: 60px;">
      <img src="${info.infoProduct.info.imgProduct}" alt="Icono" style="max-width: 100%; max-height: 100%;">
    </div>
    <div style="margin-top: 10px;">
      <p style="margin-bottom: 5px; font-size: 14px; color: green">${info.infoProduct.info.name}</p>
      <p style="margin-bottom: 5px; font-size: 12px; color: orange">${info.infoProduct.info.caracts}</p>
      <p style="margin-bottom: 5px; font-size: 12px; color: red">${info.infoProduct.info.unit}</p>
      <p style="font-size: 12px; color: green">$${info.infoCatalog.info.price}</p>
    </div>
    

       </td>

       <td>${info.infoPlace.info.name} - ${info.infoPlace.info.comments}</td>
       <td style="background-color: ${backgroundColor};">
       <p style="margin-bottom: 5px;">${info.infoCategory.info.type =="secondary" ? `SUB-CATEGORÍA`:``}
       ${info.infoCategory.info.type =="main" ? `PRINCIPAL`:``}</p>
       <div style="max-width: 60px; max-height: 60px;">
 <img src="${info.infoCategory.info.imgCategory}" alt="Icono" style="max-width: 100%; max-height: 100%;">
 </div>
 <div style="margin-top: 10px;">
 <p style="margin-bottom: 5px;">${info.infoCategory.info.name}</p>
 <p style="margin-bottom: 5px;">${info.infoCategory.info.comments}</p>
 
 </div>
 
        </td>
 
       <td>${info.infoCatalog.info.stock} / ${info.infoCatalog.info.securityStock}</td>
<td>${info.infoCatalog.info.comments}</td>

<td>
${info.infoCatalog.info.isDiscount===true || info.infoCatalog.info.isDiscount=== 1 ? `$${info.infoProduct.info.value} / $${info.infoCatalog.info.price - (info.infoCatalog.info.price / 100) * info.infoCatalog.info.discount } / $${(info.infoCatalog.info.price - (info.infoCatalog.info.price / 100) * info.infoCatalog.info.discount)- info.infoProduct.info.value }`:
`$${info.infoProduct.info.value} / $${info.infoCatalog.info.price} / $${ info.infoCatalog.info.price - info.infoProduct.info.value}`}
</td>
       

       
<td>
${info.infoProduct.info.type=="service" ? `SERVICIO 


QR 
<div id="qr${info.catalogId}">
</div>

<button id="btnqr${info.catalogId}" onclick="genCode('qr${info.catalogId}', '${info.catalogId}','view','');" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-eye"></i>
</button>
<button id="btncqr${info.catalogId}" style="display: none;" onclick="genCode('qr${info.catalogId}', '${info.catalogId}','unview','');" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-eye-slash"></i>
</button>
`:`

ean1 
<svg id="bc${info.catalogId}" style="display: none;"></svg>
<button id="btnbc${info.catalogId}" onclick="generarCodigoDeBarras('bc${info.catalogId}', '${info.infoProduct.info.ean1}','view','');" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-eye"></i>
</button>
<button id="btncbc${info.catalogId}" style="display: none;" onclick="generarCodigoDeBarras('bc${info.catalogId}', '${info.ean1}','unview','');" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-eye-slash"></i>
</button>
 

 ean2 
<svg id="bc2${info.catalogId}" style="display: none;"></svg>

<button id="btn2bc2${info.catalogId}" onclick="generarCodigoDeBarras('bc2${info.catalogId}', '${info.infoProduct.info.ean2}','view','2');" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-eye"></i>
</button>
<button id="btnc2bc2${info.catalogId}" style="display: none;" onclick="generarCodigoDeBarras('bc2${info.catalogId}', '${info.ean2}','unview','2');" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-eye-slash"></i>
</button> 

QR 
<div id="qr${info.catalogId}">
</div>

<button id="btnqr${info.catalogId}" onclick="genCode('qr${info.catalogId}', '${info.catalogId}','view','');" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-eye"></i>
</button>
<button id="btncqr${info.catalogId}" style="display: none;" onclick="genCode('qr${info.catalogId}', '${info.catalogId}','unview','');" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-eye-slash"></i>
</button>

 sku 
${info.infoProduct.info.sku}

`}

</td>

<td>
  ${info.infoCatalog.info.isDiscount ===true || info.infoCatalog.info.isDiscount === 1 ? `DESCUENTO: APLICA (${info.infoCatalog.info.discount}%)`:`DESCUENTO: NO APLICA`} / 
  ${info.infoCatalog.info.isPromo ===true || info.infoCatalog.info.isPromo === 1 ? `PROMOCIÓN: APLICA (${info.infoCatalog.info.promo})`:`PROMOCIÓN: NO APLICA`}

  </td>

  


<td>
${info.infoCatalog.info.minQty} / ${info.infoCatalog.info.maxQty}


</td>

<td> <div class="edit-container">
${info.infoCatalog.params.isActive === 1 || info.infoCatalog.params.isActive === true ? `<button onclick="editOSCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;isActive&quot;,&quot;0&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="DESACTIVAR">
<i class="fas fa-ban"></i>
</button>` 
: `<button onclick="editOSCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;isActive&quot;,&quot;1&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="ACTIVAR">
<i class="fas fa-check"></i>
</button>`}${activo1} 

</div>


</td>
      
 
    
     












<td>

<button id="btnview${info.catalogId}" onclick="openClose('btnview${info.catalogId}','unview');openClose('btnunview${info.catalogId}','view');openClose('allContainer${info.catalogId}','view');" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-eye"></i>
</button>
<button id="btnunview${info.catalogId}" style="display: none;" onclick="openClose('btnunview${info.catalogId}','unview');openClose('btnview${info.catalogId}','view');openClose('allContainer${info.catalogId}','unview');" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-eye-slash"></i>
</button>

<div id="allContainer${info.catalogId}" style="display: none;">

<div class="edit-container" style="margin-bottom: 10px;">
  <p class="card-text" style="display: inline-block; margin-right: 10px;">Comentarios:</p>
  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.infoCatalog.info.comments}" title="${info.sku}">
  <button onclick="editOSCatalog(this,'${info.clientId}','${info.catalogId}','comments','data','data')" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>

<div class="edit-container" style="margin-bottom: 10px;">
  <p class="card-text" style="display: inline-block; margin-right: 10px;">MaxQty:</p>
  <input type="text" class="form-control label-input" id="ean1${info.catalogId}" value="${info.infoCatalog.info.maxQty}" title="${info.ean1}">
  <button id="ean1${info.catalogId}" onclick="editOSCatalog(this,'${info.clientId}','${info.catalogId}','maxQty','data','data')" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>

<div class="edit-container" style="margin-bottom: 10px;">
  <p class="card-text" style="display: inline-block; margin-right: 10px;">MinQty:</p>
  <input type="text" class="form-control label-input" id="ean2${info.catalogId}" value="${info.infoCatalog.info.minQty}" title="${info.catalogId}">
  <button onclick="editOSCatalog(this,'${info.clientId}','${info.catalogId}','minQty','data','data')" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>


<p class="card-text">
<div class="edit-container" style="margin-bottom: 10px;">
  <p class="card-text" style="display: inline-block; margin-right: 10px;">Precio:</p>
  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.infoCatalog.info.price}" title="${info.catalogId}">
  <button onclick="editOSCatalog(this,'${info.clientId}','${info.catalogId}','price','data','data')" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
</p>

<p class="card-text">
<div class="edit-container" style="margin-bottom: 10px;">
  <p class="card-text" style="display: inline-block; margin-right: 10px;">Stock:</p>
  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.infoCatalog.info.stock}" title="${info.catalogId}">
  <button onclick="editOSCatalog(this,'${info.clientId}','${info.catalogId}','stock','data','data')" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
</p>


<p class="card-text">
<div class="edit-container" style="margin-bottom: 10px;">
  <p class="card-text" style="display: inline-block; margin-right: 10px;">Stock s:</p>
  <input type="text" class="form-control label-input" id="descriptiontext${info.catalogId}" value="${info.infoCatalog.info.securityStock}" title="${info.catalogId}">
  <button id="btndescription${info.productId}" onclick="editOSCatalog(this,'${info.clientId}','${info.catalogId}','securityStock','data','data')" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
</p>




<p class="card-text">
<div class="edit-container" style="margin-bottom: 10px;">
  <p class="card-text" style="display: inline-block; margin-right: 10px;">Palabras clave:</p>
  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.infoCatalog.info.keyWords}" title="${info.catalogId}">
  <button onclick="editOSCatalog(this,'${info.clientId}','${info.catalogId}','keyWords','data','data')" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
</p>

<div class="edit-container" style="display: flex;">


<p class="card-text" style="display: inline-block; margin-right: 10px;">${info.infoCatalog.info.isDiscount ===true ? `DESCUENTO: APLICA (${info.infoCatalog.info.discount}%)`:`DESCUENTO: NO APLICA`}</p>

  <select id="list-isDiscount${info.catalogId}" class="form-control" name="lista1" required style="flex: 1;">
  
  <option value="false">no descuento</option>
  <option value="true">descuento</option>
  </select>
  <button onclick="editOSCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;isDiscount&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
    <i class="fas fa-edit"></i>
  </button>

</div>

<div class="edit-container" style="display: flex;">

<div class="edit-container" style="margin-bottom: 10px;">
  <p class="card-text" style="display: inline-block; margin-right: 10px;">% Descuento:</p>
  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.infoCatalog.info.discount}" title="${info.catalogId}">
  <button onclick="editOSCatalog(this,'${info.clientId}','${info.catalogId}','discount','data','data')" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
  
</div>

<div class="edit-container" style="display: flex;">


<p class="card-text" style="display: inline-block; margin-right: 10px;">${info.infoCatalog.info.isPromo ===true ? `PROMOCIÓN: APLICA (${info.infoCatalog.info.promo})`:`PROMOCIÓN: NO APLICA`}</p>

  <select id="list-isPromo${info.catalogId}" class="form-control" name="lista1" required style="flex: 1;">
  
  <option value=false>no promoción</option>
  <option value=true>promoción</option>
  </select>
  <button onclick="editOSCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;isPromo&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
    <i class="fas fa-edit"></i>
  </button>

</div>

<div class="edit-container" style="display: flex;">

<div class="edit-container" style="margin-bottom: 10px;">
  <p class="card-text" style="display: inline-block; margin-right: 10px;"># Promoción:</p>
  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.infoCatalog.info.promo}" title="${info.catalogId}">
  <button onclick="editOSCatalog(this,'${info.clientId}','${info.catalogId}','promo','data','data')" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
  
</div>



<div class="edit-container" style="display: flex;">


<p class="card-text" style="display: inline-block; margin-right: 10px;">Tienda: ${info.infoPlace.info.name}</p>

  <select id="list-placeCatalogOs${idin1}" class="form-control" name="lista1" required style="flex: 1;">
  
 
  </select>
  <button onclick="editOSCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;placeId&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
    <i class="fas fa-edit"></i>
  </button>

</div>


<div class="edit-container" style="display: flex;">


<p class="card-text" style="display: inline-block; margin-right: 10px;">Producto: ${info.infoProduct.info.name}</p>

  <select id="list-productCatalogOs${idin1}" class="form-control" name="lista1" required style="flex: 1;">
  
 
  </select>
  <button onclick="editOSCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;productId&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
    <i class="fas fa-edit"></i>
  </button>

</div>

<div class="edit-container" style="display: flex;">


<p class="card-text" style="display: inline-block; margin-right: 10px;">Categoría: ${info.infoCategory.info.name}</p>

  <select id="list-categoryCatalogOs${idin1}" class="form-control" name="lista1" required style="flex: 1;">
  
 
  </select>
  <button onclick="editOSCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;categoryId&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
    <i class="fas fa-edit"></i>
  </button>

</div>



<div class="edit-container" style="display: flex;">


<p class="card-text" style="display: inline-block; margin-right: 10px;">En bodega:  <p style="margin-bottom: 5px; font-size: 12px; color: ${info.infoCatalog.info.isStocked === true || info.infoCatalog.info.isStocked === 1 ? 'red' : (info.infoCatalog.info.isInternal === true || info.infoCatalog.info.isInternal === 1 ? 'orange' : 'green')}">
${info.infoCatalog.info.isStocked === true || info.infoCatalog.info.isStocked === 1 ? 'EN BODEGA' : (info.infoCatalog.info.isInternal === true || info.infoCatalog.info.isInternal === 1 ? 'USO INTERNO' : 'EN STOCK')}
</p></p>

  <select id="list-isStocked${info.catalogId}" class="form-control" name="lista1" required style="flex: 1;">
  
  <option value=false>no bodega</option>
  <option value=true>bodega</option>
  </select>
  <button onclick="editOSCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;isStocked&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
    <i class="fas fa-edit"></i>
  </button>

</div>


<div class="edit-container" style="display: flex;">


<p class="card-text" style="display: inline-block; margin-right: 10px;">Uso interno:  <p style="margin-bottom: 5px; font-size: 12px; color: ${info.infoCatalog.info.isStocked === true || info.infoCatalog.info.isStocked === 1 ? 'red' : (info.infoCatalog.info.isInternal === true || info.infoCatalog.info.isInternal === 1 ? 'orange' : 'green')}">
${info.infoCatalog.info.isStocked === true || info.infoCatalog.info.isStocked === 1 ? 'EN BODEGA' : (info.infoCatalog.info.isInternal === true ||  info.infoCatalog.info.isInternal === 1 ? 'USO INTERNO' : 'EN STOCK')}
</p></p>

  <select id="list-isInternal${info.catalogId}" class="form-control" name="lista1" required style="flex: 1;">
  
  <option value=false>uso no interno</option>
  <option value=true>uso interno</option>
  </select>
  <button onclick="editOSCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;isInternal&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
    <i class="fas fa-edit"></i>
  </button>

</div>
<td>
        

   

      `;
     
      cardContainer11.appendChild(row);
      getApiData(getProductsOSList,
        {
          'apiService':'apiOS',
          'apiVersion':'v1',
          'endPoint':'getProducts'
      },
        {
          'containerData':'list-productCatalogOs'+idin1,
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
          'containerData':'list-placeCatalogOs'+idin1,
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
          'containerData':'list-categoryCatalogOs'+idin1,
          'containerInfo':'containerOSInfo',
          'modelView':'table',
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

   
      idin1++;
     
    });

   
    
    

  }


              if(modelView=="card"){
                const cardContainer11 = document.getElementById(containerData);
                const cardContainer11Info = document.getElementById(containerInfo);
                cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
                cardContainer11Info.innerHTML = "";
                const card11Info = document.createElement("div");
                card11Info.classList.add("card");
                card11Info.innerHTML = `<p>${data.response.apiMessage}</p>`;
                cardContainer11Info.appendChild(card11Info);

                for (const info of data.delivery) {
                    const card11 = document.createElement("div");
                    card11.classList.add("card");
                    const backgroundColor = info.isActive === "0" ? "#cc0007" : "#ffffff";
                    const activo1 = info.isActive === "0" ? "INACTIVO" : "ACTIVO";
                    const disRulesArray = JSON.parse(info.distanceRules);
                    card11.innerHTML = `
          <div class="card-body" style="background-color: ${backgroundColor};">
          <h5 class="card-title">
          <p class="card-text"> <i class="fas fa-guitar"></i></p>
        
         

      </h5>
      <p class="card-text">Nombre del repartidor:
      <div class="edit-container">
<input type="text" class="form-control label-input" id="${info.deliveryId}" value="${info.deliveryName}" title="${info.deliveryName}">
<button onclick="editClientDelivery(this,&quot;${info.clientId}&quot;,&quot;${info.deliveryId}&quot;,&quot;deliveryName&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-edit"></i>
</button>
</div>
      </p>
      <p class="card-text">Apellido del repartidor:
      <div class="edit-container">
<input type="text" class="form-control label-input" id="${info.deliveryId}" value="${info.deliveryLastName}" title="${info.deliveryLastName}">
<button onclick="editClientDelivery(this,&quot;${info.clientId}&quot;,&quot;${info.deliveryId}&quot;,&quot;deliveryLastName&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-edit"></i>
</button>
</div>
      </p>
      
      
      
     <p class="card-text">
      <div class="edit-container">
      ${info.isActive !== "0" ? `<button onclick="editClientDelivery(this,&quot;${info.clientId}&quot;,&quot;${info.deliveryId}&quot;,&quot;isActive&quot;,&quot;0&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="DESACTIVAR">
<i class="fas fa-ban"></i>
</button>` 
: `<button onclick="editClientDelivery(this,&quot;${info.clientId}&quot;,&quot;${info.deliveryId}&quot;,&quot;isActive&quot;,&quot;1&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="ACTIVAR">
<i class="fas fa-check"></i>
</button>`}${activo1} 

</div>
             
          


      <p class="card-text">Correo:
      <div class="edit-container">
<input type="text" class="form-control label-input" id="${info.deliveryId}" value="${info.deliveryMail}" title="${info.customerMail}">
<button onclick="editClientDelivery(this,&quot;${info.clientId}&quot;,&quot;${info.deliveryId}&quot;,&quot;deliveryMail&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-edit"></i>
</button>
</div>
      </p>
      <p class="card-text">Teléfono:
      <div class="edit-container">
<input type="text" class="form-control label-input" id="${info.deliveryId}" value="${info.deliveryContact}" title="${info.deliveryContact}">
<button onclick="editClientDelivery(this,&quot;${info.clientId}&quot;,&quot;${info.deliveryId}&quot;,&quot;deliveryContact&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-edit"></i>
</button>
</div>
      </p>

      <p class="card-text">Reglas de distancia y tiempo:
      <div class="edit-container">
      <p class="card-text">
      Calle inicio
      <input type="text" class="form-control label-input" id="${info.deliveryId}" value=" ${disRulesArray[0]['distance']['startStreet']}" title=" ${disRulesArray[0]['distance']['startStreet']}">
    </p>
    </div>
    <p class="card-text"> Cardinalidad inicio
    <button  class="btn btn-primary1 delete-button" onClick="openPopup('popCarStreetStart');"><i id="infoIcon" class="fas fa-info" style="cursor: pointer;"></i></button>
   

    <!-- Popup -->
    <div id="popCarStreetStart" class="popup">
      <p>NORTE (N)<br>SUR (S)</p>
      <button onclick="closePopup('popCarStreetStart')">Cerrar</button>
    </div>
    <input type="text" class="form-control label-input" id="${info.deliveryId}" value=" ${disRulesArray[0]['distance']['startLocationStreet']}" title=" ${disRulesArray[0]['distance']['startLocationStreet']}">
  </p>
    <p class="card-text">
    Calle fin
    <input type="text" class="form-control label-input" id="${info.deliveryId}" value=" ${disRulesArray[0]['distance']['endStreet']}" title=" ${disRulesArray[0]['distance']['endStreet']}">
  </p>
  <p class="card-text">
  Cardinalidad fin
  <button  class="btn btn-primary1 delete-button" onClick="openPopup('popCarStreetEnd');"><i id="infoIcon" class="fas fa-info" style="cursor: pointer;"></i></button>
   

  <!-- Popup -->
  <div id="popCarStreetEnd" class="popup">
    <p>NORTE (N)<br>SUR (S)</p>
    <button onclick="closePopup('popCarStreetEnd')">Cerrar</button>
  </div>
  <input type="text" class="form-control label-input" id="${info.deliveryId}" value=" ${disRulesArray[0]['distance']['endLocationStreet']}" title=" ${disRulesArray[0]['distance']['endLocationStreet']}">
</p>
  <p class="card-text">
  carrera inicio
  <input type="text" class="form-control label-input" id="${info.deliveryId}" value=" ${disRulesArray[0]['distance']['startAvenue']}" title=" ${disRulesArray[0]['distance']['startAvenue']}">
</p>
<p class="card-text">
Cardinalidad inicio
<button  class="btn btn-primary1 delete-button" onClick="openPopup('popCarAvenueStart');"><i id="infoIcon" class="fas fa-info" style="cursor: pointer;"></i></button>
   

<!-- Popup -->
<div id="popCarAvenueStart" class="popup">
  <p>ESTE (EST)<br>OESTE (OES)</p>
  <button onclick="closePopup('popCarAvenueStart')">Cerrar</button>
</div>
<input type="text" class="form-control label-input" id="${info.deliveryId}" value=" ${disRulesArray[0]['distance']['startLocationAvenue']}" title=" ${disRulesArray[0]['distance']['startLocationAvenue']}">
</p>
<p class="card-text">
Carrera fin
<input type="text" class="form-control label-input" id="${info.deliveryId}" value=" ${disRulesArray[0]['distance']['endAvenue']}" title=" ${disRulesArray[0]['distance']['endAvenue']}">
</p>
<p class="card-text">
Cardinalidad fin
<button  class="btn btn-primary1 delete-button" onClick="openPopup('popCarAvenueEnd');"><i id="infoIcon" class="fas fa-info" style="cursor: pointer;"></i></button>
   

<!-- Popup -->
<div id="popCarAvenueEnd" class="popup">
<p>ESTE (EST)<br>OESTE (OES)</p>
<button onclick="closePopup('popCarAvenueEnd')">Cerrar</button>
</div>
<input type="text" class="form-control label-input" id="${info.deliveryId}" value=" ${disRulesArray[0]['distance']['endLocationAvenue']}" title=" ${disRulesArray[0]['distance']['endLocationAvenue']}">
</p>

<p class="card-text">
Tiempo inicio
<input type="text" class="form-control label-input" id="${info.deliveryId}" value=" ${disRulesArray[0]['distance']['startTime']}" title=" ${disRulesArray[0]['distance']['startTime']}">
</p>
<p class="card-text">
Cardinalidad fin
<input type="text" class="form-control label-input" id="${info.deliveryId}" value=" ${disRulesArray[0]['distance']['endTime']}" title=" ${disRulesArray[0]['distance']['endTime']}">
</p>
<button onclick="editClientDelivery(this,&quot;${info.clientId}&quot;,&quot;${info.deliveryId}&quot;,&quot;customerPhone&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-edit"></i>
</button>
</div>
      </p>
     
      
      <p class="card-text">
      <div class="edit-container">

<button onclick="editClientDelivery(this,&quot;${info.clientId}&quot;,&quot;${info.deliveryId}&quot;,&quot;del&quot;,&quot;data&quot;,&quot;del&quot;)" class="btn btn-primary1 delete-button" title="ELIMINAR">
<i class="fas fa-trash"></i>
</button>
</div>
      </p>
              
          </div>
          
      `;

      cardContainer11.appendChild(card11);
   //   getClientCategoriesList3('all','all','all',idin1);
      //getClientStoresList13('all','all','all',idin1);

      idin1++;
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
                card11Info.innerHTML = `<p>CATÁLOGOS</p><p>${data.response.apiMessage}</p>
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
    select.id = 'OSCatalogsFilter';
    select.classList.add('form-control');
    select.name = 'currency';
    select.required = true;
   
    const option2 = document.createElement('option');
    option2.value = 'comments';
    option2.textContent = 'Comentarios';
    const option3 = document.createElement('option');
    option3.value = 'minQty';
    option3.textContent = 'Cantidad mínima';
    const option4 = document.createElement('option');
    option4.value = 'maxQty';
    option4.textContent = 'Cantidad máxima';
    const option5 = document.createElement('option');
    option5.value = 'price';
    option5.textContent = 'Precio';
    const option6 = document.createElement('option');
    option6.value = 'stock';
    option6.textContent = 'Stock';

    const option7 = document.createElement('option');
    option7.value = 'securityStock';
    option7.textContent = 'Sec Stock';
    const option8 = document.createElement('option');
    option8.value = 'isDiscount';
    option8.textContent = 'Descuento';
    const option9 = document.createElement('option');
    option9.value = 'discount';
    option9.textContent = '% Descuento';

    const option10 = document.createElement('option');
    option10.value = 'isPromo';
    option10.textContent = 'Promoción';
    const option11 = document.createElement('option');
    option11.value = 'promo';
    option11.textContent = '# Promoción';
    const option12 = document.createElement('option');
    option12.value = 'isStocked';
    option12.textContent = 'En bodega';
    const option13 = document.createElement('option');
    option13.value = 'isInternal';
    option13.textContent = 'Uso interno';

    const option14 = document.createElement('option');
    option14.value = 'keyWords';
    option14.textContent = 'Palabras clave';

    
    
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    select.appendChild(option5);
    select.appendChild(option6);
    select.appendChild(option7);
    select.appendChild(option8);
    select.appendChild(option9);
    select.appendChild(option10);
    select.appendChild(option11);
    select.appendChild(option12);
    select.appendChild(option13);
    select.appendChild(option14);
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
     input.id = 'OSCatalogsValue';
     input.placeholder = 'Ingresa palabra a buscar';
     div2.appendChild(input);
     button2.appendChild(icon2);
     cardContainer11Info.appendChild(div2);
     cardContainer11Info.appendChild(button2);


     button2.addEventListener('click', function() {
              
      var param = document.getElementById("OSCatalogsFilter").value;
var value = document.getElementById("OSCatalogsValue").value;
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
                        'filter':'catalogs',
                        'param':param,
                        'value':value
                    }
                        );
       // getApiData(getProducts,'apiCom','v1','getProducts','containerProductsData','containerProductsInfo','filter',param,value);
      
        // Aquí puedes agregar la funcionalidad que deseas para el botón 2
    });




    const div1pro = document.createElement('div');
    div1pro.classList.add('mb-3');

    const labelpro = document.createElement('label');
    labelpro.setAttribute('for', 'currency');
    labelpro.textContent = 'Busqueda por producto';
    div1pro.appendChild(labelpro);
    const selectpro = document.createElement('select');
    selectpro.id = 'OSProductsOSFilter';
    selectpro.classList.add('form-control');
    selectpro.name = 'currency';
    selectpro.required = true;
   
    const option2pro = document.createElement('option');
    option2pro.value = 'comments';
    option2pro.textContent = 'Comentarios de producto';
    const option3pro = document.createElement('option');
    option3pro.value = 'name';
    option3pro.textContent = 'Nombre de producto';
    const option4pro = document.createElement('option');
    option4pro.value = 'type';
    option4pro.textContent = 'Tipo de producto / servicio';
    const option5pro = document.createElement('option');
    option5pro.value = 'caracts';
    option5pro.textContent = 'Caracteristicas de producto / servicio';
    const option6pro = document.createElement('option');
    option6pro.value = 'sku';
    option6pro.textContent = 'SKU';

    const option7pro = document.createElement('option');
    option7pro.value = 'ean1';
    option7pro.textContent = 'EAN1';
    const option8pro = document.createElement('option');
    option8pro.value = 'ean2';
    option8pro.textContent = 'EAN2';
    
    
    selectpro.appendChild(option2pro);
    selectpro.appendChild(option3pro);
    selectpro.appendChild(option4pro);
    selectpro.appendChild(option5pro);
    selectpro.appendChild(option6pro);
    selectpro.appendChild(option7pro);
    selectpro.appendChild(option8pro);
    div1pro.appendChild(selectpro); 
    cardContainer11Info.appendChild(div1pro);

     // Crear el segundo botón
     const button3 = document.createElement('button');
     button3.setAttribute('type', 'button');
     button3.classList.add('btn', 'btn-primary1', 'edit-button1');
     button3.style.color = '#C70039';
     button3.title = 'VER USUARIOS INACTIVOS';
     button3.id = 'filtercatalogs';
     // Crear el icono del segundo botón
     const icon2pro = document.createElement('i');
     icon2pro.classList.add('fas', 'fa-sort');
     

     const div2pro = document.createElement('div');
     div2pro.classList.add('mb-3');
     // Agregar la etiqueta y el input al segundo contenedor div
     const label2pro = document.createElement('label');
     label2pro.classList.add('form-label');
     label2pro.innerHTML = '<i class="fas fa-guitar"></i> Parámetro de producto';
     div2pro.appendChild(label2pro);
     const inputpro = document.createElement('input');
     inputpro.setAttribute('type', 'text');
     inputpro.classList.add('form-control');
     inputpro.id = 'OSProductsOSValue';
     inputpro.placeholder = 'Ingresa palabra a buscar';
     div2pro.appendChild(inputpro);
     button3.appendChild(icon2pro);
     cardContainer11Info.appendChild(div2pro);
     cardContainer11Info.appendChild(button3);




     const div1cat = document.createElement('div');
div1cat.classList.add('mb-3');

const labelcat = document.createElement('label');
labelcat.setAttribute('for', 'currency');
labelcat.textContent = 'Busqueda por categoría';
div1cat.appendChild(labelcat);

const selectcat = document.createElement('select');
selectcat.id = 'OSCategoriesOSFilter';
selectcat.classList.add('form-control');
selectcat.name = 'currency';
selectcat.required = true;

const option2cat = document.createElement('option');
option2cat.value = 'comments';
option2cat.textContent = 'Comentarios de categoría';

const option3cat = document.createElement('option');
option3cat.value = 'name';
option3cat.textContent = 'Nombre de categoría';

const option4cat = document.createElement('option');
option4cat.value = 'type';
option4cat.textContent = 'Tipo de categoría';


selectcat.appendChild(option2cat);
selectcat.appendChild(option3cat);
selectcat.appendChild(option4cat);

div1cat.appendChild(selectcat); 
cardContainer11Info.appendChild(div1cat);
const button4 = document.createElement('button');
button4.setAttribute('type', 'button');
button4.classList.add('btn', 'btn-primary1', 'edit-button1');
button4.style.color = '#C70039';
button4.title = 'VER USUARIOS INACTIVOS';
button4.id = 'filtercatalogs';

const icon2cat = document.createElement('i');
icon2cat.classList.add('fas', 'fa-sort');

const div2cat = document.createElement('div');
div2cat.classList.add('mb-3');

// Agregar la etiqueta y el input al segundo contenedor div
const label2cat = document.createElement('label');
label2cat.classList.add('form-label');
label2cat.innerHTML = '<i class="fas fa-guitar"></i> Parámetro de categoría';
div2cat.appendChild(label2cat);

const inputcat = document.createElement('input');
inputcat.setAttribute('type', 'text');
inputcat.classList.add('form-control');
inputcat.id = 'OSCategoriesOSValue';
inputcat.placeholder = 'Ingresa palabra a buscar';
div2cat.appendChild(inputcat);

button4.appendChild(icon2cat);
cardContainer11Info.appendChild(div2cat);
cardContainer11Info.appendChild(button4);







const div1plc = document.createElement('div');
div1plc.classList.add('mb-3');

const labelplc = document.createElement('label');
labelplc.setAttribute('for', 'currency');
labelplc.textContent = 'Busqueda por establecimiento';
div1plc.appendChild(labelplc);

const selectplc = document.createElement('select');
selectplc.id = 'OSPlacesOSFilter';
selectplc.classList.add('form-control');
selectplc.name = 'currency';
selectplc.required = true;

const option2plc = document.createElement('option');
option2plc.value = 'comments';
option2plc.textContent = 'Comentarios del establecimiento';

const option3plc = document.createElement('option');
option3plc.value = 'name';
option3plc.textContent = 'Nombre del establecimiento';


selectplc.appendChild(option2plc);
selectplc.appendChild(option3plc);

div1plc.appendChild(selectplc);
cardContainer11Info.appendChild(div1plc);


const button5 = document.createElement('button');
button5.setAttribute('type', 'button');
button5.classList.add('btn', 'btn-primary1', 'edit-button1');
button5.style.color = '#C70039';
button5.title = 'VER USUARIOS INACTIVOS';
button5.id = 'filtercatalogs';

const icon2plc = document.createElement('i');
icon2plc.classList.add('fas', 'fa-sort');

const div2plc = document.createElement('div');
div2plc.classList.add('mb-3');

// Agregar la etiqueta y el input al segundo contenedor div
const label2plc = document.createElement('label');
label2plc.classList.add('form-label');
label2plc.innerHTML = '<i class="fas fa-guitar"></i> Parámetro de establecimiento';
div2plc.appendChild(label2plc);

const inputplc = document.createElement('input');
inputplc.setAttribute('type', 'text');
inputplc.classList.add('form-control');
inputplc.id = 'OSPlacesOSValue';
inputplc.placeholder = 'Ingresa palabra a buscar';
div2plc.appendChild(inputplc);

button5.appendChild(icon2plc);
cardContainer11Info.appendChild(div2plc);
cardContainer11Info.appendChild(button5);

     button3.addEventListener('click', function() {
              
      var param = document.getElementById("OSProductsOSFilter").value;
var value = document.getElementById("OSProductsOSValue").value;
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
                        'filter':'products',
                        'param':param,
                        'value':value
                    }
                        );
       // getApiData(getProducts,'apiCom','v1','getProducts','containerProductsData','containerProductsInfo','filter',param,value);
      
        // Aquí puedes agregar la funcionalidad que deseas para el botón 2
    });

    button4.addEventListener('click', function() {
              
      var param = document.getElementById("OSCategoriesOSFilter").value;
var value = document.getElementById("OSCategoriesOSValue").value;
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
                        'filter':'categories',
                        'param':param,
                        'value':value
                    }
                        );
       // getApiData(getProducts,'apiCom','v1','getProducts','containerProductsData','containerProductsInfo','filter',param,value);
      
        // Aquí puedes agregar la funcionalidad que deseas para el botón 2
    });

    button5.addEventListener('click', function() {
              
      var param = document.getElementById("OSPlacesOSFilter").value;
var value = document.getElementById("OSPlacesOSValue").value;
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
                        'filter':'places',
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

async function getCatalogsOS(data, containerData, containerInfo,modelView) {
    try {
        const message = await getCatalogsOSPromise(data, containerData, containerInfo,modelView);
        console.log(message); // Manejar el mensaje de éxito
    } catch (error) {
        console.error(error); // Manejar el error
    }
}



async function getProductsListPromise(data, containerData, containerInfo) {
  var reposSelect = document.getElementById(containerData);
  while (reposSelect.firstChild) {
      reposSelect.removeChild(reposSelect.firstChild);
  }

  await Promise.all(data.products.map(info => {
      return new Promise(resolve => {
          const option = document.createElement("option");
          option.value = info.productId;
          option.text = info.infoProduct.info.name;
          reposSelect.add(option);
          resolve();
      });
  }));

  if (data.products && data.products.length > 0) {
      return "Ubicaciones";
  } else {
      throw new Error("No se encontraron categorías en los datos proporcionados.");
  }
}

async function getProductsOSList(data, containerData, containerInfo) {
try {
    const message = await getProductsListPromise(data, containerData, containerInfo);
    // console.log(message); // Manejar el mensaje de éxito
} catch (error) {
    console.error(error); // Manejar el error
}
}