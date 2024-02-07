
async function getCustomers(data,containerData,containerInfo) {
  document.getElementById("loading-container").style.display = "flex";
  if (data.response && data.response.response == "true") {
  var idin1=1;const cardContainer11 = document.getElementById(containerData);
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


