


      async function getCatalogsPromise(data, containerData, containerInfo) {
        return new Promise(async (resolve, reject) => {
            try {
                document.getElementById("loading-container").style.display = "flex";
                var idin=1;
                if (data.response && data.response.response == "true") {
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
                }
            } catch(error) {
                console.error("Error:", error);
                document.getElementById("loading-container").style.display = "none";
                reject(error); // Rechaza la promesa si hay un error
            }
        });
    }
    
    async function getCatalogs(data, containerData, containerInfo) {
      try {
          const message = await getCatalogsPromise(data, containerData, containerInfo);
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
    