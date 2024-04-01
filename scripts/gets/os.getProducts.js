


  async function getProductsOSPromise(data, containerData, containerInfo,modelView) {
    return new Promise(async (resolve, reject) => {
        document.getElementById("loading-container").style.display = "flex";

        var idin = 1;
        try {
            if (data.response && data.response.response == "true") {






              

    if(modelView=="table"){
               
      const cardContainer11 = document.querySelector("#"+containerData+" tbody");
      const cardContainer11Info = document.getElementById(containerInfo);
      cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
      cardContainer11Info.innerHTML = ""; 
      
      const card11Info = document.createElement("div");
      card11Info.classList.add("card");
      
          card11Info.innerHTML = ` <p><H4>PRODUCTOS / SERVICIOS</H4></p><p>${data.response.apiMessage}</p>`;
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
    select.id = 'OSProductsFilter';
    select.classList.add('form-control');
    select.name = 'currency';
    select.required = true;
   
    const option2 = document.createElement('option');
    option2.value = 'name';
    option2.textContent = 'Nombre elemento';
    const option3 = document.createElement('option');
    option3.value = 'comments';
    option3.textContent = 'Comentarios';
    const option4 = document.createElement('option');
    option4.value = 'caracts';
    option4.textContent = 'Características';
    const option5 = document.createElement('option');
    option5.value = 'byDiscount';
    option5.textContent = 'Para descuento';
    const option6 = document.createElement('option');
    option6.value = 'type';
    option6.textContent = 'Tipo';

    
    
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    select.appendChild(option5);
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
     input.id = 'OSProductsValue';
     input.placeholder = 'Ingresa palabra a buscar';
     div2.appendChild(input);
     button2.appendChild(icon2);
     cardContainer11Info.appendChild(div2);
     cardContainer11Info.appendChild(button2);


     button2.addEventListener('click', function() {
              
      var param = document.getElementById("OSProductsFilter").value;
var value = document.getElementById("OSProductsValue").value;
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
         'filter':'filter',
         'param':param,
         'value':value
     }
         );
       // getApiData(getProducts,'apiCom','v1','getProducts','containerProductsData','containerProductsInfo','filter',param,value);
      
        // Aquí puedes agregar la funcionalidad que deseas para el botón 2
    });
    data.products.forEach(info => {
     
     
      const row = document.createElement("tr");
      
      const backgroundColor = info.infoProduct.params.isActive === "0" ? "  #cc0007" : "#ffffff";
      const activo1 = info.infoProduct.params.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
      
      row.innerHTML = `
     
    
      <td style="background-color: ${backgroundColor};">
      <p style="margin-bottom: 5px;">${info.infoProduct.info.type =="service" ? `SERVICIO`:``}
      ${info.infoProduct.info.type =="product" ? `PRODUCTO`:``}</p>
      <div style="max-width: 100px; max-height: 100px;">
<img src="${info.infoProduct.info.imgProduct}" alt="Icono" style="max-width: 100%; max-height: 100%;">
</div>
<div style="margin-top: 10px;">
<p style="margin-bottom: 5px;">${info.infoProduct.info.name}</p>
<p style="margin-bottom: 5px;">${info.infoProduct.info.caracts}</p>
<p>${info.infoProduct.info.unit} - $${info.infoProduct.info.value}</p>
</div>

       </td>
<td>${info.infoProduct.info.unitCaracts}</td>
<td>${info.infoProduct.info.comments}</td>
       
<td>
${info.infoProduct.info.type =="service" ? `N/A`:``}
${info.infoProduct.info.type =="product" ? `${info.infoProduct.info.sku}`:``}
</td>
       
<td>
${info.infoProduct.info.type =="service" ? `N/A`:``}
${info.infoProduct.info.type =="product" ? `${info.infoProduct.info.ean1}

<svg id="bc${info.productId}" style="display: none;"></svg>
<button id="btnbc${info.productId}" onclick="generarCodigoDeBarras('bc${info.productId}', '${info.infoProduct.info.ean1}','view','');" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-eye"></i>
</button>
<button id="btncbc${info.productId}" style="display: none;" onclick="generarCodigoDeBarras('bc${info.productId}', '${info.ean1}','unview','');" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-eye-slash"></i>
</button>`:``}

</td>

<td>
${info.infoProduct.info.type =="service" ? `N/A`:``}
${info.infoProduct.info.type =="product" ? `${info.infoProduct.info.ean2}
<svg id="bc2${info.productId}" style="display: none;"></svg>

<button id="btn2bc2${info.productId}" onclick="generarCodigoDeBarras('bc2${info.productId}', '${info.infoProduct.info.ean2}','view','2');" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-eye"></i>
</button>
<button id="btnc2bc2${info.productId}" style="display: none;" onclick="generarCodigoDeBarras('bc2${info.productId}', '${info.ean2}','unview','2');" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-eye-slash"></i>
</button>`:``}

</td>

<td>
  <div id="qr${info.productId}">
  </div>
  
  <button id="btnqr${info.productId}" onclick="genCode('qr${info.productId}', '${info.productId}','view','');" class="btn btn-primary1 delete-button" title="EDITAR">
  <i class="fas fa-eye"></i>
</button>
<button id="btncqr${info.productId}" style="display: none;" onclick="genCode('qr${info.productId}', '${info.productId}','unview','');" class="btn btn-primary1 delete-button" title="EDITAR">
  <i class="fas fa-eye-slash"></i>
</button>
</td>

<td> <div class="edit-container">
${info.infoProduct.params.isActive !== "0" ? `<button onclick="editOSProduct(this,&quot;${info.clientId}&quot;,&quot;${info.productId}&quot;,&quot;isActive&quot;,&quot;0&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="DESACTIVAR">
<i class="fas fa-ban"></i>
</button>` 
: `<button onclick="editOSProduct(this,&quot;${info.clientId}&quot;,&quot;${info.productId}&quot;,&quot;isActive&quot;,&quot;1&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="ACTIVAR">
<i class="fas fa-check"></i>
</button>`}${activo1} 

</div></td>
      
 
    
     












<td>

<button id="btnview${info.productId}" onclick="openClose('btnview${info.productId}','unview');openClose('btnunview${info.productId}','view');openClose('allContainer${info.productId}','view');" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-eye"></i>
</button>
<button id="btnunview${info.productId}" style="display: none;" onclick="openClose('btnunview${info.productId}','unview');openClose('btnview${info.productId}','view');openClose('allContainer${info.productId}','unview');" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-eye-slash"></i>
</button>

<div id="allContainer${info.productId}" style="display: none;">

<div class="edit-container" style="margin-bottom: 10px;">
  <p class="card-text" style="display: inline-block; margin-right: 10px;">SKU:</p>
  <input type="text" class="form-control label-input" id="${info.productId}" value="${info.infoProduct.info.sku}" title="${info.sku}">
  <button onclick="editOSProduct(this,'${info.clientId}','${info.productId}','sku','data','data')" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>

<div class="edit-container" style="margin-bottom: 10px;">
  <p class="card-text" style="display: inline-block; margin-right: 10px;">EAN1:</p>
  <input type="text" class="form-control label-input" id="ean1${info.productId}" value="${info.infoProduct.info.ean1}" title="${info.ean1}">
  <button id="ean1${info.productId}" onclick="editOSProduct(this,'${info.clientId}','${info.productId}','ean1','data','data')" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>

<div class="edit-container" style="margin-bottom: 10px;">
  <p class="card-text" style="display: inline-block; margin-right: 10px;">EAN2:</p>
  <input type="text" class="form-control label-input" id="ean2${info.productId}" value="${info.infoProduct.info.ean2}" title="${info.ean2}">
  <button onclick="editOSProduct(this,'${info.clientId}','${info.productId}','ean2','data','data')" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>


<p class="card-text">
<div class="edit-container" style="margin-bottom: 10px;">
  <p class="card-text" style="display: inline-block; margin-right: 10px;">Imágen:</p>
  <input type="text" class="form-control label-input" id="${info.productId}" value="${info.infoProduct.info.imgProduct}" title="${info.imgProduct}">
  <button onclick="editOSProduct(this,'${info.clientId}','${info.productId}','imgProduct','data','data')" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
</p>

<p class="card-text">
<div class="edit-container" style="margin-bottom: 10px;">
  <p class="card-text" style="display: inline-block; margin-right: 10px;">Producto:</p>
  <input type="text" class="form-control label-input" id="${info.productId}" value="${info.infoProduct.info.name}" title="${info.productName}">
  <button onclick="editOSProduct(this,'${info.clientId}','${info.productId}','name','data','data')" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
</p>


<p class="card-text">
<div class="edit-container" style="margin-bottom: 10px;">
  <p class="card-text" style="display: inline-block; margin-right: 10px;">Comentarios:</p>
  <input type="text" class="form-control label-input" id="descriptiontext${info.productId}" value="${info.infoProduct.info.comments}" title="${info.description}">
  <button id="btndescription${info.productId}" onclick="editOSProduct(this,'${info.clientId}','${info.productId}','comments','data','data')" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
</p>

<p class="card-text">
<div class="edit-container" style="margin-bottom: 10px;">
  <p class="card-text" style="display: inline-block; margin-right: 10px;">Precio:</p>
  <input type="text" class="form-control label-input" id="${info.productId}" value="${info.infoProduct.info.value}" title="${info.productId}">
  <button onclick="editOSProduct(this,'${info.clientId}','${info.productId}','value','data','data')" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
</p>

<p class="card-text">
<div class="edit-container" style="margin-bottom: 10px;">
  <p class="card-text" style="display: inline-block; margin-right: 10px;">Caracteristicas:</p>
  <input type="text" class="form-control label-input" id="${info.productId}" value="${info.infoProduct.info.caracts}" title="${info.spcProduct}">
  <button onclick="editOSProduct(this,'${info.clientId}','${info.productId}','caracts','data','data')" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
</p>


<p class="card-text">
<div class="edit-container" style="margin-bottom: 10px;">
  <p class="card-text" style="display: inline-block; margin-right: 10px;">Palabras clave:</p>
  <input type="text" class="form-control label-input" id="${info.productId}" value="${info.infoProduct.info.keyWords}" title="${info.keyWords}">
  <button onclick="editOSProduct(this,'${info.clientId}','${info.productId}','keyWords','data','data')" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
</p>
<div class="edit-container" style="display: flex;">


<p class="card-text" style="display: inline-block; margin-right: 10px;">Tipo : ${info.infoProduct.info.type}</p>

  <select id="list-producttype${info.productId}" class="form-control" name="lista1" required style="flex: 1;">
  <option value="product">Producto</option>
  <option value="service">Servicio</option>
  </select>
  <button onclick="editOSProduct(this,&quot;${info.clientId}&quot;,&quot;${info.productId}&quot;,&quot;type&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
    <i class="fas fa-edit"></i>
  </button>
</div>

${info.infoProduct.info.type =="service" ? `<div class="edit-container" style="display: flex;">


<p class="card-text" style="display: inline-block; margin-right: 10px;">Unidad: ${info.infoProduct.info.unit}</p>

  <select id="list-producttype${info.productId}" class="form-control" name="lista1" required style="flex: 1;">
  
  <option value="srv">Servicio</option>
  <option value="h">Hora</option>
  </select>
  <button onclick="editOSProduct(this,&quot;${info.clientId}&quot;,&quot;${info.productId}&quot;,&quot;type&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
    <i class="fas fa-edit"></i>
  </button>
</div>`:`<div class="edit-container" style="display: flex;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">Unidad: ${info.infoProduct.info.unit}</p>

  <select id="list-producttype${info.productId}" class="form-control" name="lista1" required style="flex: 1;">
  <option value="NA">N/A</option>
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
  <button onclick="editOSProduct(this,&quot;${info.clientId}&quot;,&quot;${info.productId}&quot;,&quot;type&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
    <i class="fas fa-edit"></i>
  </button>
</div>`}




<p class="card-text">
<div class="edit-container" style="margin-bottom: 10px;">
  <p class="card-text" style="display: inline-block; margin-right: 10px;">Características de unidad:</p>
  <input type="text" class="form-control label-input" id="${info.productId}" value="${info.infoProduct.info.unitCaracts}" title="${info.spcProduct}">
  <button onclick="editOSProduct(this,'${info.clientId}','${info.productId}','unitCaracts','data','data')" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
</p>
<p class="card-text" style="display: inline-block; margin-right: 10px;">OPCIONES AVANZADAS -></p>
<div class="edit-container" style="display: flex;">




<p class="card-text" style="display: inline-block; margin-right: 10px;">Producto para descuento: ${info.infoProduct.info.byDiscount == "1" ? `DESCUENTO`:`NO-DESCUENTO`}</p>
  <select id="list-producttype${info.productId}" class="form-control" name="lista1" required style="flex: 1;">
  
  <option value="0">No</option>
    <option value="1">Sí</option>
  </select>
  <button onclick="editOSProduct(this,&quot;${info.clientId}&quot;,&quot;${info.productId}&quot;,&quot;byDiscount&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
    <i class="fas fa-edit"></i>
  </button>


  
</div>
${info.infoProduct.info.byDiscount =="1" ? `<div class="edit-container" style="margin-bottom: 10px;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">Stock por unidad de descuento:</p>
<input type="text" class="form-control label-input" id="${info.productId}" value="${info.infoProduct.info.stockByUnit}" title="${info.spcProduct}">
<button onclick="editOSProduct(this,'${info.clientId}','${info.productId}','stockByUnit','data','data')" class="btn btn-primary1 delete-button" title="EDITAR">
  <i class="fas fa-edit"></i>
</button>
</div>`:``}


<div class="edit-container" style="margin-bottom: 10px;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">Eliminar:&nbsp;&nbsp;&nbsp;</p>
<p class="card-text">
  <button onclick="editOSProduct(this,'${info.clientId}','${info.productId}','del','del','del')" class="btn btn-primary1 delete-button" title="ELIMINAR">
    <i class="fas fa-trash"></i>
  </button>
</p>
</div>


</div>
<td>
        

   

      `;
     
      cardContainer11.appendChild(row);
      getApiData(getSitesList,
        {
          'apiService':'apiOS',
          'apiVersion':'v1',
          'endPoint':'getSites'
      },
        {
          'containerData':'list-siteName'+idin,
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
                card11Info.innerHTML = `<p>PRODUCTOS / SERVICIOS</p><p>${data.response.apiMessage}</p>
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
    select.id = 'OSProductsFilter';
    select.classList.add('form-control');
    select.name = 'currency';
    select.required = true;
   
    const option2 = document.createElement('option');
    option2.value = 'name';
    option2.textContent = 'Nombre elemento';
    const option3 = document.createElement('option');
    option3.value = 'comments';
    option3.textContent = 'Comentarios';
    const option4 = document.createElement('option');
    option4.value = 'caracts';
    option4.textContent = 'Características';
    const option5 = document.createElement('option');
    option5.value = 'byDiscount';
    option5.textContent = 'Para descuento';
    const option6 = document.createElement('option');
    option6.value = 'type';
    option6.textContent = 'Tipo';

    
    
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    select.appendChild(option5);
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
     input.id = 'OSProductsValue';
     input.placeholder = 'Ingresa palabra a buscar';
     div2.appendChild(input);
     button2.appendChild(icon2);
     cardContainer11Info.appendChild(div2);
     cardContainer11Info.appendChild(button2);


     button2.addEventListener('click', function() {
              
      var param = document.getElementById("OSProductsFilter").value;
var value = document.getElementById("OSProductsValue").value;
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

async function getProductsOS(data, containerData, containerInfo,modelView) {
    try {
        const message = await getProductsOSPromise(data, containerData, containerInfo,modelView);
        console.log(message); // Manejar el mensaje de éxito
    } catch (error) {
        console.error(error); // Manejar el error
    }
}



async function getPlacesListPromise(data, containerData, containerInfo) {
  var reposSelect = document.getElementById(containerData);
  while (reposSelect.firstChild) {
      reposSelect.removeChild(reposSelect.firstChild);
  }

  await Promise.all(data.places.map(info => {
      return new Promise(resolve => {
          const option = document.createElement("option");
          option.value = info.placeId;
          option.text = info.infoPlace.info.name;
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

async function getPlacesList(data, containerData, containerInfo) {
try {
    const message = await getPlacesListPromise(data, containerData, containerInfo);
    // console.log(message); // Manejar el mensaje de éxito
} catch (error) {
    console.error(error); // Manejar el error
}
}