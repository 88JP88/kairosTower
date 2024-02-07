

async function getProducts(data,containerData,containerInfo) {
    document.getElementById("loading-container").style.display = "flex";
   
  if (data.response && data.response.response == "true") {
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
    
    document.getElementById("loading-container").style.display = "none";
  }
  else {
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
  


  



document.getElementById("filterproducts").addEventListener("click", function() {
    // Obtén los valores de los campos
    var param = document.getElementById("repos-productClient").value;
    var value = document.getElementById("keywordsearch").value;
    getApiData(getProducts,'apiCom','v1','getProducts','containerProductsData','containerProductsInfo','filter',param,value);
    
    //getClientProducts('filter',param,value);
  });
  
  
  document.getElementById("searchproducts").addEventListener("click", function() {
    // Obtén los valores de los campos
    var param = document.getElementById("repos-productClient").value;
    var value = document.getElementById("keywordsearch").value;
    getApiData(getProducts,'apiCom','v1','getProducts','containerProductsData','containerProductsInfo','browser','param',value);
    //getClientProducts('browser','param',value);
  });
  
  
async function getClientProductList(data,containerData,containerInfo) {

      var reposSelect = document.getElementById(containerData);
      while (reposSelect.firstChild) {
        reposSelect.removeChild(reposSelect.firstChild);
      }
      
      data.products.forEach(info => {
              const option = document.createElement("option");
              option.value = info.productId;
              option.text = info.productName;
              reposSelect.add(option);
            });
    
     }