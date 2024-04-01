
async function getStoresPromise(data,containerData,containerInfo,modelView) {
  return new Promise(async (resolve, reject) => {
    try {
  document.getElementById("loading-container").style.display = "flex";
  var idin1=1;
  if (data.response && data.response.response == "true") {







    if(modelView=="table"){
               
      const cardContainer11 = document.querySelector("#"+containerData+" tbody");
      const cardContainer11Info = document.getElementById(containerInfo);
      cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
      cardContainer11Info.innerHTML = ""; 
      
      const card11Info = document.createElement("div");
      card11Info.classList.add("card");
      
          card11Info.innerHTML = ` <p><H4>TIENDAS</H4></p><p>${data.response.apiMessage}</p>`;
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




};
// Crear el icono del primer botón
const icon1 = document.createElement('i');
icon1.classList.add('fas', 'fa-globe');
button1.appendChild(icon1);
cardContainer11Info.appendChild(button1);
// Crear el primer contenedor div


// Crear el segundo contenedor div
const div2 = document.createElement('div');
div2.classList.add('mb-3');
// Agregar la etiqueta y el input al segundo contenedor div
const label2 = document.createElement('label');
label2.classList.add('form-label');
label2.innerHTML = 'Palabras clave';
div2.appendChild(label2);
const input = document.createElement('input');
input.setAttribute('type', 'text');
input.classList.add('form-control');
input.id = 'keywordsearchstores';
input.placeholder = 'Ingresa palabra a buscar';
div2.appendChild(input);



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


cardContainer11Info.appendChild(div2);

cardContainer11Info.appendChild(button3);


button3.addEventListener('click', function() {
  var param = document.getElementById("repos-catalogClient").value;
  var value = document.getElementById("keywordsearchstores").value;
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
           'filter':'browser',
           'param':'keyWords',
           'value':value
       }
           );
  // Aquí puedes agregar la funcionalidad que deseas para el botón 3
});








    data.stores.forEach(info => {
     
     
      const row = document.createElement("tr");
      
      const backgroundColor = info.isActive === "0" ? "  #cc0007" : "#ffffff";
      const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
      const referencia = info.storeType === "pos" ? ref="pos.php" : info.storeType === "ecm" ? ref="ecm.php" : info.storeType === "pos_ecm" ? ref="pos_ecm.php" : ref="session.php";
       
      row.innerHTML = `
     
      <td style="background-color: ${backgroundColor};">
      <p style="margin-bottom: 5px;">${info.storeName} -> ${info.storeType == "ecm" ? `E-Commerce`:``}${info.storeType == "pos" ? `POS`:``}${info.storeType == "POS_ECM" ? `POS-E-Commerce`:``}</p>
      <div style="max-width: 100px; max-height: 100px; display: flex; flex-direction: column;">
      <a href="${referencia}?clientId=${info.clientId}&storeId=${info.storeId}&st=${info.storeType}" target="_blank">
      <img src="${info.imgStore}" alt="Icono" style="max-width: 100%; max-height: 100%;">
      </a>
      </div>
    <div style="margin-top: 10px;">
      <div style="max-width: 100px;">
  
        <p style="margin-bottom: 5px;">${info.comments}</p>
        
       
      </div>
    </div>
    

       </td>
    
      
     

 


      <td style="background-color: ${backgroundColor};">${info.keyWords}</td>
                
      <td>
      <div id="qr${info.storeId}">
      </div>
      
      <button id="btnqr${info.storeId}" onclick="genCode('qr${info.storeId}', '${info.storeId}','view','');" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-eye"></i>
    </button>
    <button id="btncqr${info.storeId}" style="display: none;" onclick="genCode('qr${info.storeId}', '${info.storeId}','unview','');" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-eye-slash"></i>
    </button>
  </td>


<td style="background-color: ${backgroundColor};">  <div class="edit-container">
${info.isActive !== "0" ? `<button onclick="editClientStore(this,&quot;${info.clientId}&quot;,&quot;${info.storeId}&quot;,&quot;isActive&quot;,&quot;0&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="DESACTIVAR">
<i class="fas fa-ban"></i>
</button>` 
: `<button onclick="editClientStore(this,&quot;${info.clientId}&quot;,&quot;${info.storeId}&quot;,&quot;isActive&quot;,&quot;1&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="ACTIVAR">
<i class="fas fa-check"></i>
</button>`}${activo1} 

</div></td>










<td style="background-color: ${backgroundColor};">
       
       
       
       
<button id="btnviewc${info.storeId}" onclick="openClose('btnviewc${info.storeId}','unview');openClose('btnunviewc${info.storeId}','view');openClose('allContainer${info.storeId}','view');" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-eye"></i>
</button>
<button id="btnunviewc${info.storeId}" style="display: none;" onclick="openClose('btnunviewc${info.storeId}','unview');openClose('btnviewc${info.storeId}','view');openClose('allContainer${info.storeId}','unview');" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-eye-slash"></i>
</button>
<div id="allContainer${info.storeId}" style="display: none;">



<div class="edit-container" style="display: flex;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">Tienda:</p>

    <input type="text" class="form-control label-input" id="${info.storeId}" value="${info.storeName}" title="${info.storeName}" style="flex: 1;">
    <button onclick="editClientStore(this,&quot;${info.clientId}&quot;,&quot;${info.storeId}&quot;,&quot;storeName&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
        <i class="fas fa-edit"></i>
    </button>
</div>

<div class="edit-container" style="display: flex;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">Comentarios:</p>

    <input type="text" class="form-control label-input" id="${info.storeId}" value="${info.comments}" title="${info.comments}" style="flex: 1;">
    <button onclick="editClientStore(this,&quot;${info.clientId}&quot;,&quot;${info.storeId}&quot;,&quot;comments&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
        <i class="fas fa-edit"></i>
    </button>
</div>

<div class="edit-container" style="display: flex;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">Tipo de tienda:</p>
    <select id="list-storesListstoreq2" class="form-control" name="lista1" required style="flex: 1;">
        <option value="ecm">E-commerce</option>
        <option value="pos">E-Punto de venta</option>
        <option value="pos_ecm">E-commerce y punto de venta</option>
    </select>
    <button onclick="editClientStore(this,&quot;${info.clientId}&quot;,&quot;${info.storeId}&quot;,&quot;storeType&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
        <i class="fas fa-edit"></i>
    </button>
</div>

<div class="edit-container" style="display: flex;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">Palabras clave:</p>
    <input type="text" class="form-control label-input" id="${info.storeId}" value="${info.keyWords}" title="${info.keyWords}" style="flex: 1;">
    <button onclick="editClientStore(this,&quot;${info.clientId}&quot;,&quot;${info.storeId}&quot;,&quot;keyWords&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
        <i class="fas fa-edit"></i>
    </button>
</div>


<div class="edit-container" style="display: flex;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">Imágen:</p>
    <input type="text" class="form-control label-input" id="${info.storeId}" value="${info.imgStore}" title="${info.keyWords}" style="flex: 1;">
    <button onclick="editClientStore(this,&quot;${info.clientId}&quot;,&quot;${info.storeId}&quot;,&quot;imgStore&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
        <i class="fas fa-edit"></i>
    </button>
</div>

<div class="edit-container">
<p class="card-text" style="display: inline-block; margin-right: 10px;">Eliminar:</p>
    <button onclick="editClientStore(this,&quot;${info.clientId}&quot;,&quot;${info.categoryId}&quot;,&quot;del&quot;,&quot;1&quot;,&quot;del&quot;)" class="btn btn-primary1 delete-button" title="ELIMINAR">
        <i class="fas fa-trash"></i>
    </button>
</div>

</div>
</td>

        
      `;
     
      cardContainer11.appendChild(row);
      
      //getApiData(getClientCategoriesList,'apiCom','v1','getCategories','list-categoriesList'+idin,info.categoryId+"|"+info.parentId,'all','all','all');
      //getClientCategoriesList('all','all','all',idin);
     
     // getApiData(getClientStoresList,'apiCom','v1','getStores','list-storesListstore'+idin,'containerCustomersInfo','all','all','all');

     // getClientStoresList1('all','all','all',idin);
     
      idin1++;
     
    });

   
    
    

  }

if(modelView=="card"){

    const cardContainer11 = document.getElementById(containerData);
    const cardContainer11Info = document.getElementById(containerInfo);
    cardContainer11Info.innerHTML = ""; 
    const card11Info = document.createElement("div");
    card11Info.classList.add("card");
        card11Info.innerHTML = ` <p>${data.response.apiMessage}</p>`;
        cardContainer11Info.appendChild(card11Info);
    cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
    
    data.stores.forEach(info => {
        const card11 = document.createElement("div");
        card11.classList.add("card");
        const backgroundColor = info.isActive === "0" ? "  #cc0007" : "#ffffff";
        const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
        const referencia = info.storeType === "pos" ? ref="pos.php" : info.storeType === "ecm" ? ref="ecm.php" : info.storeType === "pos_ecm" ? ref="pos_ecm.php" : ref="session.php";
       
        card11.innerHTML = `
            <div class="card-body" style="background-color: ${backgroundColor};">
            <h5 class="card-title">
            <p class="card-text"> <i class="fas fa-guitar"></i></p>
          
            <a href="${referencia}?clientId=${info.clientId}&storeId=${info.storeId}&st=${info.storeType}" target="_blank" class="btn btn-primary1 edit-button" style="width: 54px;height: 52px; font-size: 24px;" title="BLOQUEAR">
            <i class="fas fa-store"></i>
          </a>

        </h5>
        <p class="card-text">Tienda:
        <div class="edit-container">
<input type="text" class="form-control label-input" id="${info.storeId}" value="${info.storeName}" title="${info.storeName}">
<button onclick="editClientStore(this,&quot;${info.clientId}&quot;,&quot;${info.storeId}&quot;,&quot;storeName&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-edit"></i>
</button>
</div>
        </p>
        
        
        
       <p class="card-text">
        <div class="edit-container">
        ${info.isActive !== "0" ? `<button onclick="editClientStore(this,&quot;${info.clientId}&quot;,&quot;${info.storeId}&quot;,&quot;isActive&quot;,&quot;0&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="DESACTIVAR">
<i class="fas fa-ban"></i>
</button>` 
: `<button onclick="editClientStore(this,&quot;${info.clientId}&quot;,&quot;${info.storeId}&quot;,&quot;isActive&quot;,&quot;1&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="ACTIVAR">
<i class="fas fa-check"></i>
</button>`}${activo1} 

</div>
               
            


      






      


        <p class="card-text">Comentarios:
        <div class="edit-container">
<input type="text" class="form-control label-input" id="${info.storeId}" value="${info.comments}" title="${info.comments}">
<button onclick="editClientStore(this,&quot;${info.clientId}&quot;,&quot;${info.storeId}&quot;,&quot;comments&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-edit"></i>
</button>
</div>
        </p>


       
        <p class="card-text">Tipo de tienda:
        ${info.storeType}
        <div class="edit-container">
        <select id="list-storesListstoreq2" class="form-control" name="lista1" required>
        <option value="ecm">E-commerce</option>
        <option value="pos">E-Punto de venta</option>
        <option value="pos_ecm">E-commerce y punto de venta</option>
        </select>
          <button onclick="editClientStore(this,&quot;${info.clientId}&quot;,&quot;${info.storeId}&quot;,&quot;storeType&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-edit"></i>
</button>
</div>
        </p>

        <p class="card-text">Palabras clave:
        <div class="edit-container">
<input type="text" class="form-control label-input" id="${info.storeId}" value="${info.keyWords}" title="${info.keyWords}">
<button onclick="editClientStore(this,&quot;${info.clientId}&quot;,&quot;${info.storeId}&quot;,&quot;keyWords&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-edit"></i>
</button>
</div>
        </p>
       
        
        <p class="card-text">
        <div class="edit-container">

<button onclick="editClientStore(this,&quot;${info.clientId}&quot;,&quot;${info.categoryId}&quot;,&quot;del&quot;,&quot;1&quot;,&quot;del&quot;)" class="btn btn-primary1 delete-button" title="ELIMINAR">
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
    });
  }
    document.getElementById("loading-container").style.display = "none";
    resolve("Catálogos obtenidos exitosamente: "+data.response.apiMessage); // Resuelve la promesa cuando los catálogos se obtienen correctamente

  }else {
    // Manejar el caso donde la respuesta no es 'true'
    const cardContainer11 = document.getElementById(containerData);
    cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
    const cardContainer11Info = document.getElementById(containerInfo);
 
    cardContainer11Info.innerHTML = ""; 
    const card11Info = document.createElement("div");
    card11Info.classList.add("card");
        card11Info.innerHTML = ` <p>TIENDAS</p><p>${data.response.apiMessage}</p>
        <p>El filtro solicitado fue-> FILTRO: ${data.response.sentData.filter}, PARÁMETRO: ${data.response.sentData.param}, VALOR: ${data.response.sentData.value}</p>`;
        cardContainer11Info.appendChild(card11Info);
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
          
          
          
          
          };
          // Crear el icono del primer botón
          const icon1 = document.createElement('i');
          icon1.classList.add('fas', 'fa-globe');
          button1.appendChild(icon1);
          cardContainer11Info.appendChild(button1);
          // Crear el primer contenedor div
          
          
          // Crear el segundo contenedor div
          const div2 = document.createElement('div');
          div2.classList.add('mb-3');
          // Agregar la etiqueta y el input al segundo contenedor div
          const label2 = document.createElement('label');
          label2.classList.add('form-label');
          label2.innerHTML = 'Palabras clave';
          div2.appendChild(label2);
          const input = document.createElement('input');
          input.setAttribute('type', 'text');
          input.classList.add('form-control');
          input.id = 'keywordsearchstores';
          input.placeholder = 'Ingresa palabra a buscar';
          div2.appendChild(input);
          
          
          
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
          
          
          cardContainer11Info.appendChild(div2);
          
          cardContainer11Info.appendChild(button3);
          
          
          button3.addEventListener('click', function() {
            var param = document.getElementById("repos-catalogClient").value;
            var value = document.getElementById("keywordsearchstores").value;
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
                     'filter':'browser',
                     'param':'keyWords',
                     'value':value
                 }
                     );
            // Aquí puedes agregar la funcionalidad que deseas para el botón 3
          });
          
          
   
    //console.error("La respuesta no es 'true' "+data.response.response);
    document.getElementById("loading-container").style.display = "none";
} } catch(error) {
  console.error("Error:", error);
  document.getElementById("loading-container").style.display = "none";
  reject(error); // Rechaza la promesa si hay un error
}
});
}


async function getStores(data, containerData, containerInfo,modelView) {
  try {
      const message = await getStoresPromise(data, containerData, containerInfo,modelView);
      console.log(message); // Manejar el mensaje de éxito
  } catch (error) {
      console.error(error); // Manejar el error
  }
}


async function getClientStoresListPromise(data, containerData, containerInfo) {
  var reposSelect = document.getElementById(containerData);
  while (reposSelect.firstChild) {
      reposSelect.removeChild(reposSelect.firstChild);
  }

  await Promise.all(data.stores.map(info => {
      return new Promise(resolve => {
          const option = document.createElement("option");
          option.value = info.storeId;
          option.text = info.storeName;
          reposSelect.add(option);
          resolve();
      });
  }));
}


async function getClientStoresList(data, containerData, containerInfo) {
  try {
      await getClientStoresListPromise(data, containerData, containerInfo);
      // Manejar el mensaje de éxito si es necesario
  } catch (error) {
      console.error(error); // Manejar el error
  }
}