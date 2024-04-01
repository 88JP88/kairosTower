
async function getCategoriesPromise(data,containerData,containerInfo,modelView) {
        return new Promise((resolve, reject) => {

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
                
                    card11Info.innerHTML = ` <p><H4>CATEGORIAS</H4></p><p>${data.response.apiMessage}</p>`;
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
              'Categoría',
              'Palabras clave',
              'QR',
              'Estado',
              'Edición'
                          ]);
                     getApiData(getCategories,
                   {
                     'apiService':'apiCom',
                     'apiVersion':'v1',
                     'endPoint':'getCategories'
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
        const div1 = document.createElement('div');
        div1.classList.add('mb-3');
        // Agregar la etiqueta y el select al primer contenedor div
        const label1 = document.createElement('label');
        label1.setAttribute('for', 'currency');
        label1.textContent = 'Busqueda por sub-categoria';
        div1.appendChild(label1);
        const select = document.createElement('select');
        select.id = 'parentCategory';
        select.classList.add('form-control');
        select.name = 'currency';
        select.required = true;
        const option1 = document.createElement('option');
        option1.setAttribute('selected', true);
        option1.textContent = 'Selecciona parámetro';
       
        select.appendChild(option1);
       
        div1.appendChild(select);


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
    cardContainer11Info.appendChild(div1);
    cardContainer11Info.appendChild(button2);

        getApiData(getClientCategoriesList,
          {
            'apiService':'apiCom',
            'apiVersion':'v1',
            'endPoint':'getCategories'
        },
          {
            'containerData':'parentCategory',
            'containerInfo':'info.categoryId',
        },
          {
            'filter':'all',
            'param':'all',
            'value':'all'
        }
            );
        
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
        input.id = 'keywordsearchcategories';
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
        
        button2.addEventListener('click', function() {
            
          var param = document.getElementById("parentCategory").value;

            eraseContainers('containerCommerceData','containerCommerceInfo');
            createTable('tableInternalClients1','containerCommerceData', [
              'Categoría',
                                 'Palabras clave',
                                 'QR',
                                 'Estado',
                                 'Edición'
          ]);
     getApiData(getCategories,
   {
     'apiService':'apiCom',
     'apiVersion':'v1',
     'endPoint':'getCategories'
 },
   {
     'containerData':'containerCommerceData',
     'containerInfo':'containerCommerceInfo',
     'modelView':'table',
 },
   {
     'filter':'filter',
     'param':'parentId',
     'value':param
 }
     );
           // getApiData(getProducts,'apiCom','v1','getProducts','containerProductsData','containerProductsInfo','filter',param,value);
          
            // Aquí puedes agregar la funcionalidad que deseas para el botón 2
        });
        
        button3.addEventListener('click', function() {
            var param = document.getElementById("repos-catalogClient").value;
            var value = document.getElementById("keywordsearchcategories").value;
            eraseContainers('containerCommerceData','containerCommerceInfo');
            createTable('tableInternalClients1','containerCommerceData', [
              'Categoría',
                                 'Palabras clave',
                                 'QR',
                                 'Estado',
                                 'Edición'
          ]);
     getApiData(getCategories,
   {
     'apiService':'apiCom',
     'apiVersion':'v1',
     'endPoint':'getCategories'
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








              data.categories.forEach(info => {
               
               
                const row = document.createElement("tr");
                var activo="";
                const backgroundColor = info.isActive === "0" ? "  #cc0007" : info.counterId === "0" ? "  #008f39" : "#ffffff";
                const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
               
                row.innerHTML = `
               
                <td style="background-color: ${backgroundColor};">
                <p style="margin-bottom: 5px;">${info.categoryName} -> ${info.parentName}</p>
                <div style="max-width: 100px; max-height: 100px; display: flex; flex-direction: column;">
               
                <img src="${info.imgCat}" alt="Icono" style="max-width: 100%; max-height: 100%;">
              </div>
              <div style="margin-top: 10px;">
                <div style="max-width: 100px;">
            
                  <p style="margin-bottom: 5px;">${info.comments}</p>
                  
                  <p>${info.categoryType == "main" ? `PRINCIPAL`:`SECUNDARIA`}</p>
                </div>
              </div>
              
        
                 </td>
              
                        
        <td style="background-color: ${backgroundColor};">${info.keyWords}</td>
                
            <td>
            <div id="qr${info.categoryId}">
            </div>
            
            <button id="btnqr${info.categoryId}" onclick="genCode('qr${info.categoryId}', '${info.categoryId}','view','');" class="btn btn-primary1 delete-button" title="EDITAR">
            <i class="fas fa-eye"></i>
          </button>
          <button id="btncqr${info.categoryId}" style="display: none;" onclick="genCode('qr${info.categoryId}', '${info.categoryId}','unview','');" class="btn btn-primary1 delete-button" title="EDITAR">
            <i class="fas fa-eye-slash"></i>
          </button>
        </td>
        
                <td style="background-color: ${backgroundColor};"> <div class="edit-container">
                ${info.isActive !== "0" ? `<button onclick="editClientCategorie(this,&quot;${info.clientId}&quot;,&quot;${info.categoryId}&quot;,&quot;isActive&quot;,&quot;0&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="DESACTIVAR">
        <i class="fas fa-ban"></i>
        </button>` 
        : `<button onclick="editClientCategorie(this,&quot;${info.clientId}&quot;,&quot;${info.categoryId}&quot;,&quot;isActive&quot;,&quot;1&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="ACTIVAR">
        <i class="fas fa-check"></i>
        </button>`}${activo1} 
        
        </div></td>





      


       


        

        
      
        
       <td style="background-color: ${backgroundColor};">
       
       
       
       
<button id="btnviewc${info.categoryId}" onclick="openClose('btnviewc${info.categoryId}','unview');openClose('btnunviewc${info.categoryId}','view');openClose('allContainer${info.categoryId}','view');" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-eye"></i>
</button>
<button id="btnunviewc${info.categoryId}" style="display: none;" onclick="openClose('btnunviewc${info.categoryId}','unview');openClose('btnviewc${info.categoryId}','view');openClose('allContainer${info.categoryId}','unview');" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-eye-slash"></i>
</button>
<div id="allContainer${info.categoryId}" style="display: none;">



<div class="edit-container" style="display: flex;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">Categoría:</p>

    <input type="text" class="form-control label-input" id="${info.categoryId}" value="${info.categoryName}" title="${info.categoryName}" style="flex: 1;">
    <button onclick="editClientCategorie(this,&quot;${info.clientId}&quot;,&quot;${info.categoryId}&quot;,&quot;catName&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
        <i class="fas fa-edit"></i>
    </button>
</div>
<div class="edit-container" style="display: flex;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">Comentarios:</p>

    <input type="text" class="form-control label-input" id="${info.categoryId}" value="${info.comments}" title="${info.comments}" style="flex: 1;">
    <button onclick="editClientCategorie(this,&quot;${info.clientId}&quot;,&quot;${info.categoryId}&quot;,&quot;comments&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
        <i class="fas fa-edit"></i>
    </button>
</div>
<div class="mb-3" style="display: flex;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">Sub-categoría: ${info.parentName}</p>

    <select id="list-categoriesIntoCat${idin1}" class="form-control" name="lista" required style="flex: 1;"></select>
    <button onclick="editClientCategorie(this,&quot;${info.clientId}&quot;,&quot;${info.categoryId}&quot;,&quot;parentId&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
        <i class="fas fa-edit"></i>
    </button>
</div>
<div class="edit-container" style="display: flex;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">Palabras clave:</p>

    <input type="text" class="form-control label-input" id="${info.categoryId}" value="${info.keyWords}" title="${info.keyWords}" style="flex: 1;">
    <button onclick="editClientCategorie(this,&quot;${info.clientId}&quot;,&quot;${info.categoryId}&quot;,&quot;keyWords&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
        <i class="fas fa-edit"></i>
    </button>
</div>

<div class="edit-container" style="display: flex;">
<p class="card-text" style="display: inline-block; margin-right: 10px;">Imágen:</p>

    <input type="text" class="form-control label-input" id="${info.categoryId}" value="${info.imgCat}" title="${info.keyWords}" style="flex: 1;">
    <button onclick="editClientCategorie(this,&quot;${info.clientId}&quot;,&quot;${info.categoryId}&quot;,&quot;imgCat&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR" style="margin-left: 10px;">
        <i class="fas fa-edit"></i>
    </button>
</div>
<div class="edit-container">
<p class="card-text" style="display: inline-block; margin-right: 10px;">Eliminar:</p>

    <button onclick="editClientCategorie(this,&quot;${info.clientId}&quot;,&quot;${info.categoryId}&quot;,&quot;del&quot;,&quot;1&quot;,&quot;del&quot;)" class="btn btn-primary1 delete-button" title="ELIMINAR">
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
               getApiData(getClientCategoriesList,
                {
                  'apiService':'apiCom',
                  'apiVersion':'v1',
                  'endPoint':'getCategories'
              },
                {
                  'containerData':'list-categoriesIntoCat'+idin1,
                  'containerInfo':info.categoryId,
              },
                {
                  'filter':'all',
                  'param':'all',
                  'value':'all'
              }
                  );
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
          data.categories.forEach(info => {
              const card11 = document.createElement("div");
              card11.classList.add("card");
              const backgroundColor = info.isActive === "0" ? "  #cc0007" : "#ffffff";
              const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
             
              card11.innerHTML = `
                  <div class="card-body" style="background-color: ${backgroundColor};">
                  <h5 class="card-title">
                  <p class="card-text"> <i class="fas fa-guitar"></i></p>
                
                
      
              </h5>
              <p class="card-text">Categoría:
              <div class="edit-container">
      <input type="text" class="form-control label-input" id="${info.categoryId}" value="${info.categoryName}" title="${info.categoryName}">
      <button onclick="editClientCategorie(this,&quot;${info.clientId}&quot;,&quot;${info.categoryId}&quot;,&quot;catName&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
      </div>
              </p>
              
              
              
             <p class="card-text">
              <div class="edit-container">
              ${info.isActive !== "0" ? `<button onclick="editClientCategorie(this,&quot;${info.clientId}&quot;,&quot;${info.categoryId}&quot;,&quot;isActive&quot;,&quot;0&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="DESACTIVAR">
      <i class="fas fa-ban"></i>
      </button>` 
      : `<button onclick="editClientCategorie(this,&quot;${info.clientId}&quot;,&quot;${info.categoryId}&quot;,&quot;isActive&quot;,&quot;1&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="ACTIVAR">
      <i class="fas fa-check"></i>
      </button>`}${activo1} 
      
      </div>
                     
                  
      
      
            
      
      
      
      
      
      
            
      
      
              <p class="card-text">Comentarios:
              <div class="edit-container">
      <input type="text" class="form-control label-input" id="${info.categoryId}" value="${info.comments}" title="${info.comments}">
      <button onclick="editClientCategorie(this,&quot;${info.clientId}&quot;,&quot;${info.categoryId}&quot;,&quot;comments&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
      </div>
              </p>
      
      
              <p class="card-text">Categoria madre:
              ${info.parentName}
      <div class="mb-3">
      
      <select id="list-categoriesIntoCat${idin1}" class="form-control" name="lista" required>
      
      </select>
      
      <button onclick="editClientCategorie(this,&quot;${info.clientId}&quot;,&quot;${info.categoryId}&quot;,&quot;parentId&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
      </div>
              </p>
      
              <p class="card-text">Categoria madre:
              ${info.categoryType}
              </p>
                            <p class="card-text">Palabras clave:
                            <div class="edit-container">
                <input type="text" class="form-control label-input" id="${info.categoryId}" value="${info.keyWords}" title="${info.keyWords}">
                <button onclick="editClientCategorie(this,&quot;${info.clientId}&quot;,&quot;${info.categoryId}&quot;,&quot;keyWords&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
                  <i class="fas fa-edit"></i>
                </button>
              </div>
                            </p>
              
              <p class="card-text">
              <div class="edit-container">
      
      <button onclick="editClientCategorie(this,&quot;${info.clientId}&quot;,&quot;${info.categoryId}&quot;,&quot;del&quot;,&quot;1&quot;,&quot;del&quot;)" class="btn btn-primary1 delete-button" title="ELIMINAR">
      <i class="fas fa-trash"></i>
      </button>
      </div>
              </p>
                      
                  </div>
                  
              `;
      
              cardContainer11.appendChild(card11);
             // getClientCategoriesList3('all','all','all',idin1);
             getApiData(getClientCategoriesList,
                {
                  'apiService':'apiCom',
                  'apiVersion':'v1',
                  'endPoint':'getCategories'
              },
                {
                  'containerData':'list-categoriesIntoCat'+idin1,
                  'containerInfo':info.categoryId,
              },
                {
                  'filter':'all',
                  'param':'all',
                  'value':'all'
              }
                  );
              //getApiData(getClientCategoriesList,'apiCom','v1','getCategories','list-categoriesIntoCat'+idin1,info.categoryId,'all','all','all');

              //getClientStoresList13('all','all','all',idin1);
      
              idin1++;
          });
        }
          document.getElementById("loading-container").style.display = "none";
          resolve("Categprìas obtenidas exitosamente: "+data.response.apiMessage); // Resuelve la promesa cuando los catálogos se obtienen correctamente

        }else {
          // Manejar el caso donde la respuesta no es 'true'
          const cardContainer11 = document.getElementById(containerData);
          cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
          const cardContainer11Info = document.getElementById(containerInfo);
       
          cardContainer11Info.innerHTML = ""; 
          const card11Info = document.createElement("div");
          card11Info.classList.add("card");
              card11Info.innerHTML = `<p>CATEGORÍAS</p> <p>${data.response.apiMessage}</p>
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
                'Categoría',
                'Palabras clave',
                'QR',
                'Estado',
                'Edición'
                            ]);
                       getApiData(getCategories,
                     {
                       'apiService':'apiCom',
                       'apiVersion':'v1',
                       'endPoint':'getCategories'
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
          const div1 = document.createElement('div');
          div1.classList.add('mb-3');
          // Agregar la etiqueta y el select al primer contenedor div
          const label1 = document.createElement('label');
          label1.setAttribute('for', 'currency');
          label1.textContent = 'Busqueda por sub-categoria';
          div1.appendChild(label1);
          const select = document.createElement('select');
          select.id = 'parentCategory';
          select.classList.add('form-control');
          select.name = 'currency';
          select.required = true;
          const option1 = document.createElement('option');
          option1.setAttribute('selected', true);
          option1.textContent = 'Selecciona parámetro';
         
          select.appendChild(option1);
         
          div1.appendChild(select);
  
  
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
      cardContainer11Info.appendChild(div1);
      cardContainer11Info.appendChild(button2);
  
          getApiData(getClientCategoriesList,
            {
              'apiService':'apiCom',
              'apiVersion':'v1',
              'endPoint':'getCategories'
          },
            {
              'containerData':'parentCategory',
              'containerInfo':'info.categoryId',
          },
            {
              'filter':'all',
              'param':'all',
              'value':'all'
          }
              );
          
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
          input.id = 'keywordsearchcategories';
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
          
          button2.addEventListener('click', function() {
              
            var param = document.getElementById("parentCategory").value;
  
              eraseContainers('containerCommerceData','containerCommerceInfo');
              createTable('tableInternalClients1','containerCommerceData', [
                'Categoría',
                'Palabras clave',
                'QR',
                'Estado',
                'Edición'
            ]);
       getApiData(getCategories,
     {
       'apiService':'apiCom',
       'apiVersion':'v1',
       'endPoint':'getCategories'
   },
     {
       'containerData':'containerCommerceData',
       'containerInfo':'containerCommerceInfo',
       'modelView':'table',
   },
     {
       'filter':'filter',
       'param':'parentId',
       'value':param
   }
       );
             // getApiData(getProducts,'apiCom','v1','getProducts','containerProductsData','containerProductsInfo','filter',param,value);
            
              // Aquí puedes agregar la funcionalidad que deseas para el botón 2
          });
          
          button3.addEventListener('click', function() {
              var param = document.getElementById("repos-catalogClient").value;
              var value = document.getElementById("keywordsearchcategories").value;
              eraseContainers('containerCommerceData','containerCommerceInfo');
              createTable('tableInternalClients1','containerCommerceData', [
                'Categoría',
                                 'Palabras clave',
                                 'QR',
                                 'Estado',
                                 'Edición'
            ]);
       getApiData(getCategories,
     {
       'apiService':'apiCom',
       'apiVersion':'v1',
       'endPoint':'getCategories'
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
     
          reject("Error al obtener las categorìas: "+data.response.apiMessage); // Rechaza la promesa si hay un error al obtener los catálogos

        }
});
      }


      
     async function getCategories(data,containerData,containerInfo,modelView) {
        getCategoriesPromise(data, containerData, containerInfo,modelView)
            .then(message => {
              console.log(message); // Manejar el mensaje de éxito
            })
            .catch(error => {
              console.error(error); // Manejar el error
            });
        }
        async function getClientCategoriesListPromise(data, containerData, containerInfo) {
          var reposSelect = document.getElementById(containerData);
          while (reposSelect.firstChild) {
              reposSelect.removeChild(reposSelect.firstChild);
          }
      
          await Promise.all(data.categories.map(info => {
              return new Promise(resolve => {
                  const option = document.createElement("option");
                  option.value = info.categoryId;
                  option.text = info.categoryName;
                  reposSelect.add(option);
                  resolve();
              });
          }));
      
          if (data.categories && data.categories.length > 0) {
              return "categoría";
          } else {
              throw new Error("No se encontraron categorías en los datos proporcionados.");
          }
      }
      
       async function getClientCategoriesList(data, containerData, containerInfo) {
        try {
            const message = await getClientCategoriesListPromise(data, containerData, containerInfo);
            // console.log(message); // Manejar el mensaje de éxito
        } catch (error) {
            console.error(error); // Manejar el error
        }
    }
    
       


    async function getClientCategoriesListBtnPromise(data, containerData, containerInfo) {
      var reposSelect = document.getElementById(containerData);
      while (reposSelect.firstChild) {
          reposSelect.removeChild(reposSelect.firstChild);
      }
  
      if (data.categories && data.categories.length > 0) {
          await Promise.all(data.categories.map(info => {
              return new Promise(resolve => {
                  const option = document.createElement("option");
                  option.value = info.categoryId;
                  option.text = info.categoryName;
                  reposSelect.add(option);
                  resolve();
              });
          }));
          return "categoría";
      } else {
          throw new Error("No se encontraron categorías en los datos proporcionados.");
      }
  }
  
  async function getClientCategoriesListBtn(data, containerData, containerInfo) {
    try {
        await getClientCategoriesListBtnPromise(data, containerData, containerInfo);
        //console.log("Operación completada con éxito"); // Manejar el mensaje de éxito
    } catch (error) {
        console.error(error); // Manejar el error
    }
}

       


async function getClientCategoriesListBtnParentPromise(data, containerData, containerInfo) {
  var reposSelect = document.getElementById(containerData);
  while (reposSelect.firstChild) {
      reposSelect.removeChild(reposSelect.firstChild);
  }

  await Promise.all(data.categories.map(info => {
      return new Promise(resolve => {
          const option = document.createElement("option");
          option.value = info.categoryId + "|" + info.parentId;
          option.text = info.categoryName;
          reposSelect.add(option);
          resolve();
      });
  }));

  if (data.categories && data.categories.length > 0) {
      return "categorìa"; // Resuelve la promesa cuando los catálogos se obtienen correctamente
  } else {
      throw new Error("No se encontraron categorías en los datos proporcionados.");
  }
}


async function getClientCategoriesListBtnParent(data, containerData, containerInfo) {
  try {
      await getClientCategoriesListBtnPromise(data, containerData, containerInfo);
      // Manejar el mensaje de éxito si es necesario
  } catch (error) {
      console.error(error); // Manejar el error
  }
}
