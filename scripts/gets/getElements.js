

async function getClientElementsPromise(data, containerData, containerInfo) {
    return new Promise(async (resolve, reject) => {
        try {
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
            data.clientElement.forEach(info => {
                const card11 = document.createElement("div");
                card11.classList.add("card");
                const backgroundColor = info.isActive === "0" ? "  #cc0007" : "#ffffff";
                const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
                const assign1 = info.isApply === "0" ? assig="NO ASIGNADO" : assig=info.roomId;
                card11.innerHTML = `
                    <div class="card-body" style="background-color: ${backgroundColor};">
                    <h5 class="card-title">
                    <p class="card-text"> <i class="fas fa-guitar"></i></p>
                    <img src="${info.imgElements}" alt="Icono" style="max-width: 120px; max-height: 120px;">
  
                    <div class="edit-container">
                    <input type="text" class="form-control label-input" id="${info.elementId}" value="${info.imgElements}" title="${info.imgElements}">
    <button onclick="editClientElement(this,&quot;${info.elementId}&quot;,&quot;imgElements&quot;,&quot;data&quot;,&quot;0&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
    </button>
  </div>
  
                </h5>
                <p class="card-text">Elemento:
                <div class="edit-container">
    <input type="text" class="form-control label-input" id="${info.elementId}" value="${info.elementName}" title="${info.elementName}">
    <button onclick="editClientElement(this,&quot;${info.elementId}&quot;,&quot;elementName&quot;,&quot;data&quot;,&quot;0&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
    </button>
  </div>
                </p>
                
                
                
                
               <p class="card-text">
                <div class="edit-container">
                ${info.isActive !== "0" ? `<button onclick="editClientElement(this,&quot;${info.elementId}&quot;,&quot;isActive&quot;,&quot;isActive&quot;,&quot;0&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 delete-button" title="DESACTIVAR">
    <i class="fas fa-ban"></i>
    </button>` 
    : `<button onclick="editClientElement(this,&quot;${info.elementId}&quot;,&quot;isActive&quot;,&quot;isActive&quot;,&quot;1&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 delete-button" title="ACTIVAR">
    <i class="fas fa-check"></i>
    </button>`}${activo1} 
      
  </div>
                       
                        <p class="card-text">Caracteristicas:
                <div class="edit-container">
    <input type="text" class="form-control label-input" id="${info.elementId}" value="${info.caracts}" title="${info.caracts}">
    <button onclick="editClientElement(this,&quot;${info.elementId}&quot;,&quot;caracts&quot;,&quot;data&quot;,&quot;0&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
    </button>
  </div>
                </p>
  
                <p class="card-text">Marca:
                <div class="edit-container">
    <input type="text" class="form-control label-input" id="${info.elementId}" value="${info.brand}" title="${info.brand}">
    <button onclick="editClientElement(this,&quot;${info.elementId}&quot;,&quot;brand&quot;,&quot;data&quot;,&quot;0&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
    </button>
  </div>
                </p>
  
                <p class="card-text">Tipo de elemento:
                <div class="edit-container">
    <input type="text" class="form-control label-input" id="${info.elementId}" value="${info.type}" title="${info.type}">
    <button onclick="editClientElement(this,&quot;${info.elementId}&quot;,&quot;type&quot;,&quot;data&quot;,&quot;0&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
    </button>
  </div>
                </p>
                          
                <p class="card-text">Estado: ${assign1}</p>
                       
  
  
                <p class="card-text">Comentarios:
                <div class="edit-container">
    <input type="text" class="form-control label-input" id="${info.elementId}" value="${info.comments}" title="${info.comments}">
    <button onclick="editClientElement(this,&quot;${info.elementId}&quot;,&quot;comments&quot;,&quot;data&quot;,&quot;0&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
    </button>
  </div>
                </p>
  
  
  
                <p class="card-text">Valor por hora:
                <div class="edit-container">
    <input type="text" class="form-control label-input" id="${info.elementId}" value="${info.amount}" title="${info.amount}">
    <button onclick="editClientElement(this,&quot;${info.elementId}&quot;,&quot;amount&quot;,&quot;data&quot;,&quot;0&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
    </button>
  </div>
                </p>
                <p class="card-text">
                <div class="edit-container">
    
    <button onclick="editClientElement(this,&quot;${info.elementId}&quot;,&quot;del&quot;,&quot;del&quot;,&quot;0&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 delete-button" title="ELIMINAR">
      <i class="fas fa-trash"></i>
    </button>
  </div>
                </p>
                        
                    </div>
                `;
  
                cardContainer11.appendChild(card11);
            });
            
            document.getElementById("loading-container").style.display = "none";
            resolve("Elementos obtenidos exitosamente: "+data.response.apiMessage); // Resuelve la promesa cuando los catálogos se obtienen correctamente

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
            reject("Error al obtener los elementos: "+data.response.apiMessage); // Rechaza la promesa si hay un error al obtener los catálogos
        }
    } catch(error) {
        console.error("Error:", error);
        document.getElementById("loading-container").style.display = "none";
        reject(error); // Rechaza la promesa si hay un error
    }
});
      
  }
  

  
  async function getElements(data, containerData, containerInfo) {
    try {
        const message = await getClientElementsPromise(data, containerData, containerInfo);
        console.log(message); // Manejar el mensaje de éxito
    } catch (error) {
        console.error(error); // Manejar el error
    }
}