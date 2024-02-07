
async function getStores(data,containerData,containerInfo) {
  document.getElementById("loading-container").style.display = "flex";
  var idin1=1;
  if (data.response && data.response.response == "true") {
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
    
    document.getElementById("loading-container").style.display = "none";
  }else {
    // Manejar el caso donde la respuesta no es 'true'
    const cardContainer11 = document.getElementById(containerData);
    cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
    const cardContainer11Info = document.getElementById(containerInfo);
 
    cardContainer11Info.innerHTML = ""; 
    const card11Info = document.createElement("div");
    card11Info.classList.add("card");
        card11Info.innerHTML = ` <p>${data.response.apiMessage}</p>
        <p>El filtro solicitado fue-> FILTRO: ${data.response.sentData.filter}, PARÁMETRO: ${data.response.sentData.param}, VALOR: ${data.response.sentData.value}</p>`;
        cardContainer11Info.appendChild(card11Info);

   
    //console.error("La respuesta no es 'true' "+data.response.response);
    document.getElementById("loading-container").style.display = "none";
}
}






async function getClientStoresList(data,containerData,containerInfo) {

  var reposSelect = document.getElementById(containerData);
  while (reposSelect.firstChild) {
    reposSelect.removeChild(reposSelect.firstChild);
  }
  
    data.stores.forEach(info => {
      const option = document.createElement("option");
      option.value = info.storeId;
      option.text = info.storeName;
      reposSelect.add(option);
    });

 }
 