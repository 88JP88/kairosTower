
async function getCustomersPromise(data,containerData,containerInfo,modelView) {

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
        
            card11Info.innerHTML = ` <p><H4>CLIENTES</H4></p><p>${data.response.apiMessage}</p>`;
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
            'Nombre',
            'Apellido',
            'Estado',
            'Correo',
            'Contacto',
            'Puntos',
            'Estrellas',
            'Tipo',
            'Eliminar'
        ]);
   getApiData(getCustomers,
 {
   'apiService':'apiClient',
   'apiVersion':'v1',
   'endPoint':'getCustomers'
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
      select.id = 'clientCommerceType';
      select.classList.add('form-control');
      select.name = 'currency';
      select.required = true;
     
      const option2 = document.createElement('option');
      option2.value = 'ecm';
      option2.textContent = 'Cliente ecommerce';
      const option3 = document.createElement('option');
      option3.value = 'pos';
      option3.textContent = 'Cliente punto de venta';
      const option4 = document.createElement('option');
      option4.value = 'ecm_pos';
      option4.textContent = 'Cliente ecommerce y punto de venta';

      
      
      select.appendChild(option2);
      select.appendChild(option3);
      select.appendChild(option4);
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
       
       button2.appendChild(icon2);
       cardContainer11Info.appendChild(button2);


       button2.addEventListener('click', function() {
                
       
var value = document.getElementById("clientCommerceType").value;
          eraseContainers('containerCommerceData','containerCommerceInfo');
          createTable('tableInternalClients1','containerCommerceData', [
            'Nombre',
            'Apellido',
            'Estado',
            'Correo',
            'Contacto',
            'Puntos',
            'Estrellas',
            'Tipo',
            'Eliminar'
        ]);
   getApiData(getCustomers,
 {
   'apiService':'apiClient',
   'apiVersion':'v1',
   'endPoint':'getCustomers'
},
 {
   'containerData':'containerCommerceData',
   'containerInfo':'containerCommerceInfo',
   'modelView':'table',
},
 {
   'filter':'filter',
   'param':'customerType',
   'value':value
}
   );
         // getApiData(getProducts,'apiCom','v1','getProducts','containerProductsData','containerProductsInfo','filter',param,value);
        
          // Aquí puedes agregar la funcionalidad que deseas para el botón 2
      });
      data.customers.forEach(info => {
       
       
        const row = document.createElement("tr");
        
        const backgroundColor = info.isActive === "0" ? "  #cc0007" : "#ffffff";
        const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
         
        row.innerHTML = `
       
      
      
        
        <td style="background-color: ${backgroundColor};">  <div class="edit-container">
        <input type="text" class="form-control label-input" id="${info.customerId}" value="${info.customerName}" title="${info.customerName}">
        <button onclick="editClientCustomer(this,&quot;${info.clientId}&quot;,&quot;${info.customerId}&quot;,&quot;customerName&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
        <i class="fas fa-edit"></i>
        </button>
        </div></td>
  
        <td style="background-color: ${backgroundColor};">  <div class="edit-container">
        <input type="text" class="form-control label-input" id="${info.customerId}" value="${info.customerLastName}" title="${info.customerLastName}">
        <button onclick="editClientCustomer(this,&quot;${info.clientId}&quot;,&quot;${info.customerId}&quot;,&quot;customerLastName&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
        <i class="fas fa-edit"></i>
        </button>
        </div></td>
  
  
  
  
  
  <td style="background-color: ${backgroundColor};">   <div class="edit-container">
  ${info.isActive !== "0" ? `<button onclick="editClientCustomer(this,&quot;${info.clientId}&quot;,&quot;${info.customerId}&quot;,&quot;isActive&quot;,&quot;0&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="DESACTIVAR">
<i class="fas fa-ban"></i>
</button>` 
: `<button onclick="editClientCustomer(this,&quot;${info.clientId}&quot;,&quot;${info.customerId}&quot;,&quot;isActive&quot;,&quot;1&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="ACTIVAR">
<i class="fas fa-check"></i>
</button>`}${activo1} 

</div></td>
  
  
  <td style="background-color: ${backgroundColor};"> <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.customerId}" value="${info.customerMail}" title="${info.customerMail}">
  <button onclick="editClientCustomer(this,&quot;${info.clientId}&quot;,&quot;${info.customerId}&quot;,&quot;customerName&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
  <i class="fas fa-edit"></i>
  </button>
  </div></td>
  
  
  <td style="background-color: ${backgroundColor};"> <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.customerId}" value="${info.customerPhone}" title="${info.customerPhone}">
  <button onclick="editClientCustomer(this,&quot;${info.clientId}&quot;,&quot;${info.customerId}&quot;,&quot;customerPhone&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
  <i class="fas fa-edit"></i>
  </button>
  </div></td>
  
  
  
  <td style="background-color: ${backgroundColor};">    ${info.customerPoints}</td>
  
  <td style="background-color: ${backgroundColor};"> ${info.customerStars}</td>
  
  <td style="background-color: ${backgroundColor};">  <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.customerId}" value="${info.customerType}" title="${info.customerType}">
  <button onclick="editClientCustomer(this,&quot;${info.clientId}&quot;,&quot;${info.storeId}&quot;,&quot;customerType&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
  <i class="fas fa-edit"></i>
  </button>
  </div></td>
  
  <td style="background-color: ${backgroundColor};">   <div class="edit-container">

  <button onclick="editClientCustomer(this,&quot;${info.clientId}&quot;,&quot;${info.categoryId}&quot;,&quot;del&quot;,&quot;1&quot;,&quot;del&quot;)" class="btn btn-primary1 delete-button" title="ELIMINAR">
  <i class="fas fa-trash"></i>
  </button>
  </div></td>
        `;
       
        cardContainer11.appendChild(row);
        
        //getApiData(getClientCategoriesList,'apiCom','v1','getCategories','list-categoriesList'+idin,info.categoryId+"|"+info.parentId,'all','all','all');
        //getClientCategoriesList('all','all','all',idin);
       
       // getApiData(getClientStoresList,'apiCom','v1','getStores','list-storesListstore'+idin,'containerCustomersInfo','all','all','all');
  
       // getClientStoresList1('all','all','all',idin);
       
        
       
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

  data.customers.forEach(info => {
    
      const card11 = document.createElement("div");
      card11.classList.add("card");
      const backgroundColor = info.isActive === "0" ? "  #cc0007" : "#ffffff";
      const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
     
      card11.innerHTML = `
          <div class="card-body" style="background-color: ${backgroundColor};">
          <h5 class="card-title">
          <p class="card-text"> <i class="fas fa-guitar"></i></p>
        
         

      </h5>
      <p class="card-text">Nombre del cliente:
      <div class="edit-container">
<input type="text" class="form-control label-input" id="${info.customerId}" value="${info.customerName}" title="${info.customerName}">
<button onclick="editClientCustomer(this,&quot;${info.clientId}&quot;,&quot;${info.customerId}&quot;,&quot;customerName&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-edit"></i>
</button>
</div>
      </p>
      <p class="card-text">Apellido del cliente:
      <div class="edit-container">
<input type="text" class="form-control label-input" id="${info.customerId}" value="${info.customerLastName}" title="${info.customerLastName}">
<button onclick="editClientCustomer(this,&quot;${info.clientId}&quot;,&quot;${info.customerId}&quot;,&quot;customerLastName&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-edit"></i>
</button>
</div>
      </p>
      
      
      
     <p class="card-text">
      <div class="edit-container">
      ${info.isActive !== "0" ? `<button onclick="editClientCustomer(this,&quot;${info.clientId}&quot;,&quot;${info.customerId}&quot;,&quot;isActive&quot;,&quot;0&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="DESACTIVAR">
<i class="fas fa-ban"></i>
</button>` 
: `<button onclick="editClientCustomer(this,&quot;${info.clientId}&quot;,&quot;${info.customerId}&quot;,&quot;isActive&quot;,&quot;1&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="ACTIVAR">
<i class="fas fa-check"></i>
</button>`}${activo1} 

</div>
             
          

      <p class="card-text">Correo:
      <div class="edit-container">
<input type="text" class="form-control label-input" id="${info.customerId}" value="${info.customerMail}" title="${info.customerMail}">
<button onclick="editClientCustomer(this,&quot;${info.clientId}&quot;,&quot;${info.customerId}&quot;,&quot;customerName&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-edit"></i>
</button>
</div>
      </p>
      <p class="card-text">Teléfono:
      <div class="edit-container">
<input type="text" class="form-control label-input" id="${info.customerId}" value="${info.customerPhone}" title="${info.customerPhone}">
<button onclick="editClientCustomer(this,&quot;${info.clientId}&quot;,&quot;${info.customerId}&quot;,&quot;customerPhone&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-edit"></i>
</button>
</div>
      </p>

     
      <p class="card-text">Puntos:
      ${info.customerPoints}
      
      </p>
      <p class="card-text">Estrellas:
      ${info.customerStars}
      
      </p>

      <p class="card-text">Tipo de cliente:
      <div class="edit-container">
<input type="text" class="form-control label-input" id="${info.customerId}" value="${info.customerType}" title="${info.customerType}">
<button onclick="editClientCustomer(this,&quot;${info.clientId}&quot;,&quot;${info.storeId}&quot;,&quot;customerType&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-edit"></i>
</button>
</div>
      </p>
     
      
      <p class="card-text">
      <div class="edit-container">

<button onclick="editClientCustomer(this,&quot;${info.clientId}&quot;,&quot;${info.categoryId}&quot;,&quot;del&quot;,&quot;1&quot;,&quot;del&quot;)" class="btn btn-primary1 delete-button" title="ELIMINAR">
<i class="fas fa-trash"></i>
</button>
</div>
      </p>
              
          </div>
          
      `;

      cardContainer11.appendChild(card11);
   //   getClientCategoriesList3('all','all','all',idin1);
      //getClientStoresList13('all','all','all',idin1);

      
  });
}
  document.getElementById("loading-container").style.display = "none";
  resolve("Clientes obtenidos exitosamente: "+data.response.apiMessage); // Resuelve la promesa cuando los catálogos se obtienen correctamente

}else {
  // Manejar el caso donde la respuesta no es 'true'
  const cardContainer11 = document.getElementById(containerData);
  cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
  const cardContainer11Info = document.getElementById(containerInfo);

  cardContainer11Info.innerHTML = ""; 
  const card11Info = document.createElement("div");
  card11Info.classList.add("card");
      card11Info.innerHTML = ` <p>CLIENTES</p><p>${data.response.apiMessage}</p>
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
            'Nombre',
            'Apellido',
            'Estado',
            'Correo',
            'Contacto',
            'Puntos',
            'Estrellas',
            'Tipo',
            'Eliminar'
        ]);
   getApiData(getCustomers,
 {
   'apiService':'apiClient',
   'apiVersion':'v1',
   'endPoint':'getCustomers'
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
      select.id = 'clientCommerceType';
      select.classList.add('form-control');
      select.name = 'currency';
      select.required = true;
     
      const option2 = document.createElement('option');
      option2.value = 'ecm';
      option2.textContent = 'Cliente ecommerce';
      const option3 = document.createElement('option');
      option3.value = 'pos';
      option3.textContent = 'Cliente punto de venta';
      const option4 = document.createElement('option');
      option4.value = 'ecm_pos';
      option4.textContent = 'Cliente ecommerce y punto de venta';

      
      
      select.appendChild(option2);
      select.appendChild(option3);
      select.appendChild(option4);
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
       
       button2.appendChild(icon2);
       cardContainer11Info.appendChild(button2);


       button2.addEventListener('click', function() {
                
        var param = document.getElementById("repos-catalogClient").value;
var value = document.getElementById("clientCommerceType").value;
          eraseContainers('containerCommerceData','containerCommerceInfo');
          createTable('tableInternalClients1','containerCommerceData', [
            'Nombre',
            'Apellido',
            'Estado',
            'Correo',
            'Contacto',
            'Puntos',
            'Estrellas',
            'Tipo',
            'Eliminar'
        ]);
   getApiData(getCustomers,
 {
   'apiService':'apiClient',
   'apiVersion':'v1',
   'endPoint':'getCustomers'
},
 {
   'containerData':'containerCommerceData',
   'containerInfo':'containerCommerceInfo',
   'modelView':'table',
},
 {
   'filter':'filter',
   'param':'customerType',
   'value':value
}
   );
         // getApiData(getProducts,'apiCom','v1','getProducts','containerProductsData','containerProductsInfo','filter',param,value);
        
          // Aquí puedes agregar la funcionalidad que deseas para el botón 2
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



async function getCustomers(data, containerData, containerInfo,modelView) {
      try {
          const message = await getCustomersPromise(data, containerData, containerInfo,modelView);
          console.log(message); // Manejar el mensaje de éxito
      } catch (error) {
          console.error(error); // Manejar el error
      }
  }

  


     
async function getCustomerListPromise(data, containerData, containerInfo) {
      var reposSelect = document.getElementById(containerData);
      while (reposSelect.firstChild) {
          reposSelect.removeChild(reposSelect.firstChild);
      }
    
      await Promise.all(data.customers.map(info => {
          return new Promise(resolve => {
              const option = document.createElement("option");
              option.value = info.customerId;
              option.text =  info.customerName+" "+info.customerLastName;
              reposSelect.add(option);
              resolve();
          });
      }));
    
      if (data.categories && data.categories.length > 0) {
          return "customers"; // Resuelve la promesa cuando los catálogos se obtienen correctamente
      } else {
          throw new Error("No se encontraron customers en los datos proporcionados.");
      }
    }
    
async function getCustomerList(data, containerData, containerInfo) {
      try {
          await getCustomerListPromise(data, containerData, containerInfo);
          // Manejar el mensaje de éxito si es necesario
      } catch (error) {
          console.error(error); // Manejar el error
      }
    }






    function getClientCustomersPosPromise(data, containerData, containerInfo) {
      return new Promise((resolve, reject) => {
          try {
              
              var value = document.getElementById('list-customerget').value;
              const cardContainer11 = document.getElementById(containerData);
              cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
              data.customers.forEach(info => {
                  if(info.customerId==value){
                  const card11 = document.createElement("div");
                  card11.classList.add("card");
                  const backgroundColor = info.isActive === "0" ? "#cc0007" : "#ffffff";
                  const activo1 = info.isActive === "0" ? activo = "INACTIVO" : activo = "ACTIVO";
  
                  card11.innerHTML = `
                      <div class="card-body" style="background-color: ${backgroundColor};">
                      <h5 class="card-title">
                      <p class="card-text"> <i class="fas fa-guitar"></i></p>
                      
                      </h5>
                      <p class="card-text">Nombre: ${info.customerName}
                      
                      </p>
                      <p class="card-text">Apellido: ${info.customerLastName}
                      
                      </p>
  
                      <p class="card-text">Datos: ${info.customerMail} / ${info.customerPhone}
                      
                      </p>
                      
                      
                      <p class="card-text">Puntos:
                      ${info.customerPoints}
                      
                      </p>
                      <p class="card-text">Estrellas:
                      ${info.customerStars}
                      
                      </p>
                      <p class="card-text">Cada punto equivale:
                      $${info.pointsValue}
                      
                      </p>
                      <p class="card-text">Con cada $${info.pointsEq} en compras recolectas un punto:
                      
                      
                      </p>
                      <p class="card-text">Total en puntos:
                      $${info.customerPoints * info.pointsValue}
                      
                      </p>
                      
                      
                  
                  
                              </div>
                              
                          `;
  
                  cardContainer11.appendChild(card11);
                 // idin1++;
                  document.getElementById("loading-container").style.display = "none";
                  }
              });
            
              document.getElementById("loading-container").style.display = "none";
              resolve(); // Resolvemos la promesa sin ningún valor adicional
            
          } catch (error) {
              reject(error); // Si ocurre un error, rechazamos la promesa con el error
          }
      });
  }
  
  async function getClientCustomersPos(data, containerData, containerInfo) {
      try {
          await getClientCustomersPosPromise(data, containerData, containerInfo);
          // Manejar el mensaje de éxito si es necesario
          document.getElementById("loading-container").style.display = "none";
      } catch (error) {
          console.error(error); // Manejar el error
      }
    }
