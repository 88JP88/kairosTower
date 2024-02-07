
async function getCategories(data,containerData,containerInfo) {
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
              getApiData(getClientCategoriesList,'apiCom','v1','getCategories','list-categoriesIntoCat'+idin1,info.categoryId,'all','all','all');

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


      
      

async function getClientCategoriesList(data,containerData,containerInfo) {

        var reposSelect = document.getElementById(containerData);
        while (reposSelect.firstChild) {
          reposSelect.removeChild(reposSelect.firstChild);
        }
        
        data.categories.forEach(info => {
                const option = document.createElement("option");
                option.value = containerInfo;
                option.text = info.categoryName;
                reposSelect.add(option);
              });
      
       }
       
       
async function getClientCategoriesListBtn(data,containerData,containerInfo) {

        var reposSelect = document.getElementById(containerData);
        while (reposSelect.firstChild) {
          reposSelect.removeChild(reposSelect.firstChild);
        }
        
        data.categories.forEach(info => {
                const option = document.createElement("option");
                option.value = info.categoryId;
                option.text = info.categoryName;
                reposSelect.add(option);
              });
      
       }
       
async function getClientCategoriesListBtnParent(data,containerData,containerInfo) {

        var reposSelect = document.getElementById(containerData);
        while (reposSelect.firstChild) {
          reposSelect.removeChild(reposSelect.firstChild);
        }
        
        data.categories.forEach(info => {
                const option = document.createElement("option");
                option.value = info.categoryId+"|"+info.parentId;
                option.text = info.categoryName;
                reposSelect.add(option);
              });
      
       }
       