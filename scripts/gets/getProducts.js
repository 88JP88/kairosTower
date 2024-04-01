

async function getProductsPromise(data,containerData,containerInfo,modelView) {
      return new Promise(async (resolve, reject) => {
            try {
    document.getElementById("loading-container").style.display = "flex";
   
  if (data.response && data.response.response == "true") {



    if(modelView=="table"){
               
        const cardContainer11 = document.querySelector("#"+containerData+" tbody");
        const cardContainer11Info = document.getElementById(containerInfo);
        cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
        cardContainer11Info.innerHTML = ""; 
        
        const card11Info = document.createElement("div");
        card11Info.classList.add("card");
        
            card11Info.innerHTML = ` <p><H4>PRODUCTOS</H4></p><p>${data.response.apiMessage}</p>`;
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
select.id = 'repos-productClient';
select.classList.add('form-control');
select.name = 'currency';
select.required = true;
const option1 = document.createElement('option');
option1.setAttribute('selected', true);
option1.textContent = 'Selecciona parámetro';
const option2 = document.createElement('option');
option2.value = 'productName';
option2.textContent = 'Nombre de producto';
const option3 = document.createElement('option');
option3.value = 'isActive';
option3.textContent = 'Estado de producto';
const option4 = document.createElement('option');
option4.value = 'description';
option4.textContent = 'Descripción de producto';
select.appendChild(option1);
select.appendChild(option2);
select.appendChild(option3);
select.appendChild(option4);
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
input.id = 'keywordsearch';
input.placeholder = 'Ingresa palabra a buscar';
div2.appendChild(input);

// Crear el segundo botón
const button2 = document.createElement('button');
button2.setAttribute('type', 'button');
button2.classList.add('btn', 'btn-primary1', 'edit-button1');
button2.style.color = '#C70039';
button2.title = 'VER USUARIOS INACTIVOS';
button2.id = 'filterproducts';
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
button3.id = 'searchproducts';
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
    
    var param = document.getElementById("repos-productClient").value;
    var value = document.getElementById("keywordsearch").value;
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
             'filter':'filter',
             'param':param,
             'value':value
         }
             );
   // getApiData(getProducts,'apiCom','v1','getProducts','containerProductsData','containerProductsInfo','filter',param,value);
  
    // Aquí puedes agregar la funcionalidad que deseas para el botón 2
});

button3.addEventListener('click', function() {
    var param = document.getElementById("repos-productClient").value;
    var value = document.getElementById("keywordsearch").value;
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
             'filter':'browser',
             'param':'param',
             'value':value
         }
             );
    // Aquí puedes agregar la funcionalidad que deseas para el botón 3
});
      data.products.forEach(info => {
       
        const assign1 = info.isApply === "0" ? assig="NO ASIGNADO" : assig=info.roomId;
        const row = document.createElement("tr");
        var activo="";
        const backgroundColor = info.isActive === "0" ? "  #cc0007" : info.counterId === "0" ? "  #008f39" : "#ffffff";
        const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
       
        row.innerHTML = `
       
      
      
        
        <td style="background-color: ${backgroundColor};">
        <div style="max-width: 100px; max-height: 100px;">
  <img src="${info.imgProduct}" alt="Icono" style="max-width: 100%; max-height: 100%;">
</div>
<div style="margin-top: 10px;">
  <p style="margin-bottom: 5px;">${info.productName}</p>
  <p style="margin-bottom: 5px;">${info.description}</p>
  <p>$${info.inPrice}</p>
</div>

         </td>

         
<td>
${info.sku}</td>
         
<td>
${info.ean1}
  
  <svg id="bc${info.productId}" style="display: none;"></svg>
  <button id="btnbc${info.productId}" onclick="generarCodigoDeBarras('bc${info.productId}', '${info.ean1}','view','');" class="btn btn-primary1 delete-button" title="EDITAR">
  <i class="fas fa-eye"></i>
</button>
<button id="btncbc${info.productId}" style="display: none;" onclick="generarCodigoDeBarras('bc${info.productId}', '${info.ean1}','unview','');" class="btn btn-primary1 delete-button" title="EDITAR">
  <i class="fas fa-eye-slash"></i>
</button>
</td>

<td>
${info.ean2}
<svg id="bc2${info.productId}" style="display: none;"></svg>

<button id="btn2bc2${info.productId}" onclick="generarCodigoDeBarras('bc2${info.productId}', '${info.ean2}','view','2');" class="btn btn-primary1 delete-button" title="EDITAR">
  <i class="fas fa-eye"></i>
</button>
<button id="btnc2bc2${info.productId}" style="display: none;" onclick="generarCodigoDeBarras('bc2${info.productId}', '${info.ean2}','unview','2');" class="btn btn-primary1 delete-button" title="EDITAR">
  <i class="fas fa-eye-slash"></i>
</button>
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
${info.isActive !== "0" ? `<button onclick="editClientProduct(this,&quot;${info.clientId}&quot;,&quot;${info.productId}&quot;,&quot;isActive&quot;,&quot;0&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="DESACTIVAR">
<i class="fas fa-ban"></i>
</button>` 
: `<button onclick="editClientProduct(this,&quot;${info.clientId}&quot;,&quot;${info.productId}&quot;,&quot;isActive&quot;,&quot;1&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="ACTIVAR">
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
    <input type="text" class="form-control label-input" id="${info.productId}" value="${info.sku}" title="${info.sku}">
    <button onclick="editClientProduct(this,'${info.clientId}','${info.productId}','sku','data','data')" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
    </button>
  </div>

  <div class="edit-container" style="margin-bottom: 10px;">
    <p class="card-text" style="display: inline-block; margin-right: 10px;">EAN1:</p>
    <input type="text" class="form-control label-input" id="ean1${info.productId}" value="${info.ean1}" title="${info.ean1}">
    <button id="ean1${info.productId}" onclick="editClientProduct(this,'${info.clientId}','${info.productId}','ean1','data','data')" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
    </button>
  </div>

  <div class="edit-container" style="margin-bottom: 10px;">
    <p class="card-text" style="display: inline-block; margin-right: 10px;">EAN2:</p>
    <input type="text" class="form-control label-input" id="ean2${info.productId}" value="${info.ean2}" title="${info.ean2}">
    <button onclick="editClientProduct(this,'${info.clientId}','${info.productId}','ean2','data','data')" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
    </button>
  </div>


  <p class="card-text">
  <div class="edit-container" style="margin-bottom: 10px;">
    <p class="card-text" style="display: inline-block; margin-right: 10px;">Imágen:</p>
    <input type="text" class="form-control label-input" id="${info.productId}" value="${info.imgProduct}" title="${info.imgProduct}">
    <button onclick="editClientProduct(this,'${info.clientId}','${info.productId}','imgProduct','data','data')" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
    </button>
  </div>
</p>

<p class="card-text">
  <div class="edit-container" style="margin-bottom: 10px;">
    <p class="card-text" style="display: inline-block; margin-right: 10px;">Producto:</p>
    <input type="text" class="form-control label-input" id="${info.productId}" value="${info.productName}" title="${info.productName}">
    <button onclick="editClientProduct(this,'${info.clientId}','${info.productId}','productName','data','data')" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
    </button>
  </div>
</p>


<p class="card-text">
  <div class="edit-container" style="margin-bottom: 10px;">
    <p class="card-text" style="display: inline-block; margin-right: 10px;">Descripción:</p>
    <input type="text" class="form-control label-input" id="descriptiontext${info.productId}" value="${info.description}" title="${info.description}">
    <button id="btndescription${info.productId}" onclick="editClientProduct(this,'${info.clientId}','${info.productId}','description','data','data')" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
    </button>
  </div>
</p>

<p class="card-text">
  <div class="edit-container" style="margin-bottom: 10px;">
    <p class="card-text" style="display: inline-block; margin-right: 10px;">Precio:</p>
    <input type="text" class="form-control label-input" id="${info.productId}" value="${info.inPrice}" title="${info.productId}">
    <button onclick="editClientProduct(this,'${info.clientId}','${info.productId}','inPrice','data','data')" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
    </button>
  </div>
</p>

<p class="card-text">
  <div class="edit-container" style="margin-bottom: 10px;">
    <p class="card-text" style="display: inline-block; margin-right: 10px;">Especificaciones:</p>
    <input type="text" class="form-control label-input" id="${info.productId}" value="${info.spcProduct}" title="${info.spcProduct}">
    <button onclick="editClientProduct(this,'${info.clientId}','${info.productId}','spcProduct','data','data')" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
    </button>
  </div>
</p>

<p class="card-text">
  <div class="edit-container" style="margin-bottom: 10px;">
    <p class="card-text" style="display: inline-block; margin-right: 10px;">Palabras clave:</p>
    <input type="text" class="form-control label-input" id="${info.productId}" value="${info.keyWords}" title="${info.keyWords}">
    <button onclick="editClientProduct(this,'${info.clientId}','${info.productId}','keyWords','data','data')" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
    </button>
  </div>
</p>

<div class="edit-container" style="margin-bottom: 10px;">
  <p class="card-text" style="display: inline-block; margin-right: 10px;">Eliminar:&nbsp;&nbsp;&nbsp;</p>
  <p class="card-text">
    <button onclick="editClientProduct(this,'${info.clientId}','${info.productId}','del','del','del')" class="btn btn-primary1 delete-button" title="ELIMINAR">
      <i class="fas fa-trash"></i>
    </button>
  </p>
</div>


</div>
<td>
          
        `;
       
      // console.log(info.productId);
        cardContainer11.appendChild(row);
       // genCode('qr'+info.productId,info.productId);
       // generarCodigoDeBarras('bc'+info.productId,info.ean1);
        //generarCodigoDeBarras('bc2'+info.productId,info.ean2);
      });

     
      
      

    }
    
    if(modelView=="card"){
    const cardContainer11 = document.getElementById(containerData);
    const cardContainer11Info = document.getElementById(containerInfo);
    cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
    cardContainer11Info.innerHTML = ""; 
    
    const card11Info = document.createElement("div");
    card11Info.classList.add("card");
        card11Info.innerHTML = ` <p>${data.response.apiMessage}</p>`;
        cardContainer11Info.appendChild(card11Info);
    data.products.forEach(info => {
        const card11 = document.createElement("div");
        card11.classList.add("card");
        
        const backgroundColor = info.isActive === "0" ? "  #cc0007" : "#ffffff";
        const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
       
        card11.innerHTML = `
            <div class="card-body" style="background-color: ${backgroundColor};">
            <h5 class="card-title">
            <p class="card-text"> <i class="fas fa-guitar"></i></p>
            <img src="${info.imgProduct}" alt="Icono" style="max-width: 120px; max-height: 120px;">
  
            <div class="edit-container">
            <input type="text" class="form-control label-input" id="${info.productId}" value="${info.imgProduct}" title="${info.imgProduct}">
  <button onclick="editClientProduct(this,&quot;${info.clientId}&quot;,&quot;${info.productId}&quot;,&quot;imgProduct&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
  <i class="fas fa-edit"></i>
  </button>
  </div>
  
        </h5>
        <p class="card-text">Nombre de producto:
        <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.productId}" value="${info.productName}" title="${info.productName}">
  <button onclick="editClientProduct(this,&quot;${info.clientId}&quot;,&quot;${info.productId}&quot;,&quot;productName&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
  <i class="fas fa-edit"></i>
  </button>
  </div>
        </p>
        
        
        
        
       <p class="card-text">
        <div class="edit-container">
        ${info.isActive !== "0" ? `<button onclick="editClientProduct(this,&quot;${info.clientId}&quot;,&quot;${info.productId}&quot;,&quot;isActive&quot;,&quot;0&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="DESACTIVAR">
  <i class="fas fa-ban"></i>
  </button>` 
  : `<button onclick="editClientProduct(this,&quot;${info.clientId}&quot;,&quot;${info.productId}&quot;,&quot;isActive&quot;,&quot;1&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="ACTIVAR">
  <i class="fas fa-check"></i>
  </button>`}${activo1} 
  
  </div>
               
                <p class="card-text">Descripción de producto:
        <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.productId}" value="${info.description}" title="${info.description}">
  <button onclick="editClientProduct(this,&quot;${info.clientId}&quot;,&quot;${info.productId}&quot;,&quot;description&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
  <i class="fas fa-edit"></i>
  </button>
  </div>
        </p>
  
      
  
        <p class="card-text">Tipo de producto:
        <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.productId}" value="${info.productType}" title="${info.productType}">
  <button onclick="editClientProduct(this,&quot;${info.clientId}&quot;,&quot;${info.productId}&quot;,&quot;productType&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
  <i class="fas fa-edit"></i>
  </button>
  </div>
        </p>
                  
      
               
  
  
     
  
  
  
        <p class="card-text">Valor de compra:
        <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.productId}" value="${info.inPrice}" title="${info.productId}">
  <button onclick="editClientProduct(this,&quot;${info.clientId}&quot;,&quot;${info.productId}&quot;,&quot;inPrice&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
  <i class="fas fa-edit"></i>
  </button>
  </div>
        </p>
  
  
  
        <p class="card-text">SKU:
        <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.productId}" value="${info.sku}" title="${info.sku}">
  <button onclick="editClientProduct(this,&quot;${info.clientId}&quot;,&quot;${info.productId}&quot;,&quot;sku&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
  <i class="fas fa-edit"></i>
  </button>
  </div>
        </p>
  
        <p class="card-text">EAN1:
        <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.productId}" value="${info.ean1}" title="${info.ean1}">
  <button onclick="editClientProduct(this,&quot;${info.clientId}&quot;,&quot;${info.productId}&quot;,&quot;ean1&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
  <i class="fas fa-edit"></i>
  </button>
  </div>
        </p>
  
  
        <p class="card-text">EAN2:
        <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.productId}" value="${info.ean2}" title="${info.ean2}">
  <button onclick="editClientProduct(this,&quot;${info.clientId}&quot;,&quot;${info.productId}&quot;,&quot;ean2&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
  <i class="fas fa-edit"></i>
  </button>
  </div>
        </p>
  
        <p class="card-text">Caracteriscticas técnicas de producto:
        <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.productId}" value="${info.spcProduct}" title="${info.spcProduct}">
  <button onclick="editClientProduct(this,&quot;${info.clientId}&quot;,&quot;${info.productId}&quot;,&quot;spcProduct&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
  <i class="fas fa-edit"></i>
  </button>
  </div>
        </p>
  
        <p class="card-text">Palabras de busqueda:
        <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.productId}" value="${info.keyWords}" title="${info.keyWords}">
  <button onclick="editClientProduct(this,&quot;${info.clientId}&quot;,&quot;${info.productId}&quot;,&quot;keyWords&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
  <i class="fas fa-edit"></i>
  </button>
  </div>
        </p>
        <p class="card-text">
        <div class="edit-container">
  
  <button onclick="editClientProduct(this,&quot;${info.clientId}&quot;,&quot;${info.productId}&quot;,&quot;del&quot;,&quot;del&quot;,&quot;del&quot;)" class="btn btn-primary1 delete-button" title="ELIMINAR">
  <i class="fas fa-trash"></i>
  </button>
  </div>
        </p>
                
            </div>
        `;
  
        cardContainer11.appendChild(card11);
    });
}
    document.getElementById("loading-container").style.display = "none";
    resolve("Productos obtenidos exitosamente: "+data.response.apiMessage); // Resuelve la promesa cuando los catálogos se obtienen correctamente

  }
  else {
    // Manejar el caso donde la respuesta no es 'true'
    const cardContainer11 = document.getElementById(containerData);
    cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
    const cardContainer11Info = document.getElementById(containerInfo);
  
    cardContainer11Info.innerHTML = ""; 
    const card11Info = document.createElement("div");
    card11Info.classList.add("card");
        card11Info.innerHTML = ` <p><H4>PRODUCTOS</H4></p><p>${data.response.apiMessage}</p>
        <p>El filtro solicitado fue-> FILTRO: ${data.response.sentData.filter}, PARÁMETRO: ${data.response.sentData.param}, VALOR: ${data.response.sentData.value}</p>`;
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
select.id = 'repos-productClient';
select.classList.add('form-control');
select.name = 'currency';
select.required = true;
const option1 = document.createElement('option');
option1.setAttribute('selected', true);
option1.textContent = 'Selecciona parámetro';
const option2 = document.createElement('option');
option2.value = 'productName';
option2.textContent = 'Nombre de producto';
const option3 = document.createElement('option');
option3.value = 'isActive';
option3.textContent = 'Estado de producto';
const option4 = document.createElement('option');
option4.value = 'description';
option4.textContent = 'Descripción de producto';
select.appendChild(option1);
select.appendChild(option2);
select.appendChild(option3);
select.appendChild(option4);
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
input.id = 'keywordsearch';
input.placeholder = 'Ingresa palabra a buscar';
div2.appendChild(input);

// Crear el segundo botón
const button2 = document.createElement('button');
button2.setAttribute('type', 'button');
button2.classList.add('btn', 'btn-primary1', 'edit-button1');
button2.style.color = '#C70039';
button2.title = 'VER USUARIOS INACTIVOS';
button2.id = 'filterproducts';
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
button3.id = 'searchproducts';
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
    
    var param = document.getElementById("repos-productClient").value;
    var value = document.getElementById("keywordsearch").value;
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
             'filter':'filter',
             'param':param,
             'value':value
         }
             );
   // getApiData(getProducts,'apiCom','v1','getProducts','containerProductsData','containerProductsInfo','filter',param,value);
  
    // Aquí puedes agregar la funcionalidad que deseas para el botón 2
});

button3.addEventListener('click', function() {
    var param = document.getElementById("repos-productClient").value;
    var value = document.getElementById("keywordsearch").value;
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
             'filter':'browser',
             'param':'param',
             'value':value
         }
             );
    // Aquí puedes agregar la funcionalidad que deseas para el botón 3
});
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
  

  async function getProducts(data, containerData, containerInfo,modelView) {
      try {
          const message = await getProductsPromise(data, containerData, containerInfo,modelView);
          console.log(message); // Manejar el mensaje de éxito
      } catch (error) {
          console.error(error); // Manejar el error
      }
  }
  
  



  async function getClientProductListPromise(data, containerData, containerInfo) {
      var reposSelect = document.getElementById(containerData);
      while (reposSelect.firstChild) {
          reposSelect.removeChild(reposSelect.firstChild);
      }
  
      await Promise.all(data.products.map(info => {
          return new Promise(resolve => {
              const option = document.createElement("option");
              option.value = info.productId;
              option.text = info.productName;
              reposSelect.add(option);
              resolve();
          });
      }));
  }
  async function getClientProductList(data, containerData, containerInfo) {
      try {
          const message = await getClientProductListPromise(data, containerData, containerInfo);
          // console.log(message); // Manejar el mensaje de éxito
      } catch (error) {
          console.error(error); // Manejar el error
      }
  }
  
     