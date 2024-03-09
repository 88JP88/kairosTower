



async function getClientRoomsPromise(data, containerData, containerInfo,modelView) {

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
                    
                        card11Info.innerHTML = ` <p><H4>ROOMS</H4></p>`;
                        cardContainer11Info.appendChild(card11Info);
                           
                  data.clientRoom.forEach(info => {
                   
                    const row = document.createElement("tr");
                    var activo="";
                    const backgroundColor = info.isActive === "0" ? "  #cc0007" : info.counterId === "0" ? "  #008f39" : "#ffffff";
                    const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
                   
                    row.innerHTML = `
                   
                  
                  
                    
                    <td>${info.comments}</td>
            
                    <td><div class="edit-container"><input type="text" class="form-control label-input" id="${info.clientId}" value="${info.comments}" title="${info.comments}"> <button onclick="editClientRoom(this,&quot;${info.roomId}&quot;,&quot;comments&quot;,&quot;comments&quot;,&quot;0&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 delete-button" title="EDITAR"><i class="fas fa-edit"></i></button></div></td>
                    <td>${info.isActive !== "0" ? `<button onclick="editClientRoom(this,&quot;${info.roomId}&quot;,&quot;isActive&quot;,&quot;isActive&quot;,&quot;0&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 delete-button" title="DESACTIVAR"><i class="fas fa-ban"></i></button><i class="fas fa-check-circle"></i>` : `<button onclick="editClientRoom(this,&quot;${info.roomId}&quot;,&quot;isActive&quot;,&quot;isActive&quot;,&quot;1&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 delete-button" title="ACTIVAR"><i class="fas fa-check"></i></button><i class="fas fa-times-circle"></i>`}</td>
                    <td><div id="checkbox-roomid${info.roomId}" class="card-container">
                    <!-- Contenido de la sección expandible -->
                    </div>
                    
                    
                    <div class="edit-container">
                    <button onclick="assignelementbyuserroomdes(&quot;${info.roomId}&quot;,&quot;${info.roomId}&quot;,&quot;${info.roomId}&quot;)" class="btn btn-primary1 delete-button" title="DESASIGNAR">
                    <i class="fas fa-ban"></i>
                    </button>
                    </div></td>
                  
                    <td><div id="checkbox-roomid1${info.roomId}" class="card-container">
                    <!-- Contenido de la sección expandible -->
                    </div>
                    <div class="edit-container">
                    <button onclick="assignelementbyuserroom(&quot;${info.roomId}&quot;,&quot;${info.roomId}&quot;,&quot;${info.roomId}&quot;)" class="btn btn-primary1 delete-button" title="VERIFICAR">
                    <i class="fas fa-plus"></i>
                    </button>
                    
                    </div></td>
                    <td><button onclick="editClientRoom(this,&quot;${info.roomId}&quot;,&quot;del&quot;,&quot;del&quot;,&quot;0&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 delete-button" title="ELIMINAR"><i class="fas fa-trash"></i></button></td>
                      
                    `;
                    getClientElemntCheck(info.roomId,'usedbyclient',info.roomId,info.roomId);
                    getClientElemntCheck(info.roomId,'notusedbyclient',info.roomId,info.roomId);
                    cardContainer11.appendChild(row);
                   
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
            data.clientRoom.forEach(info => {
                const card11 = document.createElement("div");
                card11.classList.add("card");
                const backgroundColor = info.isActive === "0" ? "  #cc0007" : "#ffffff";
                const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
                card11.innerHTML = `
                    <div class="card-body" style="background-color: ${backgroundColor};">
                    <p class="card-text"><i class="fas fa-home"></i>${info.comments}</p>
                    <p class="card-text"><div class="edit-container"><input type="text" class="form-control label-input" id="${info.clientId}" value="${info.comments}" title="${info.comments}"> <button onclick="editClientRoom(this,&quot;${info.roomId}&quot;,&quot;comments&quot;,&quot;comments&quot;,&quot;0&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 delete-button" title="EDITAR"><i class="fas fa-edit"></i></button></div></p>
  
                        <p class="card-text">${info.isActive !== "0" ? `<button onclick="editClientRoom(this,&quot;${info.roomId}&quot;,&quot;isActive&quot;,&quot;isActive&quot;,&quot;0&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 delete-button" title="DESACTIVAR"><i class="fas fa-ban"></i></button><i class="fas fa-check-circle"></i>` : `<button onclick="editClientRoom(this,&quot;${info.roomId}&quot;,&quot;isActive&quot;,&quot;isActive&quot;,&quot;1&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 delete-button" title="ACTIVAR"><i class="fas fa-check"></i></button><i class="fas fa-times-circle"></i>`}</p>
                       
  
                        <p class="card-text">
                        <h3>Elementos actuales</h3>
                                             
                        <div id="checkbox-roomid${info.roomId}" class="card-container">
                        <!-- Contenido de la sección expandible -->
                        </div>
                        
                        
                        <div class="edit-container">
                        <button onclick="assignelementbyuserroomdes(&quot;${info.roomId}&quot;,&quot;${info.roomId}&quot;,&quot;${info.roomId}&quot;)" class="btn btn-primary1 delete-button" title="DESASIGNAR">
                        <i class="fas fa-ban"></i>
                        </button>
                        </div>
                        </p>
                        
                        <p class="card-text">
                        <h3>Asignar elemento</h3>
                                             
                        <div id="checkbox-roomid1${info.roomId}" class="card-container">
                        <!-- Contenido de la sección expandible -->
                        </div>
                        <div class="edit-container">
                        <button onclick="assignelementbyuserroom(&quot;${info.roomId}&quot;,&quot;${info.roomId}&quot;,&quot;${info.roomId}&quot;)" class="btn btn-primary1 delete-button" title="VERIFICAR">
                        <i class="fas fa-plus"></i>
                        </button>
                        
                        </div>
                        </p>
                        <p class="card-text"><button onclick="editClientRoom(this,&quot;${info.roomId}&quot;,&quot;del&quot;,&quot;del&quot;,&quot;0&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 delete-button" title="ELIMINAR"><i class="fas fa-trash"></i></button></p>
                    </div>
                `;
                getClientElemntCheck(info.roomId,'usedbyclient',info.roomId,info.roomId);
                getClientElemntCheck(info.roomId,'notusedbyclient',info.roomId,info.roomId);
                cardContainer11.appendChild(card11);
            });
        }
            document.getElementById("loading-container").style.display = "none";
            resolve("Rooms obtenidos exitosamente: "+data.response.apiMessage); // Resuelve la promesa cuando los catálogos se obtienen correctamente

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
            reject("Error al obtener los rooms: "+data.response.apiMessage); // Rechaza la promesa si hay un error al obtener los catálogos
        }
    } catch(error) {
        console.error("Error:", error);
        document.getElementById("loading-container").style.display = "none";
        reject(error); // Rechaza la promesa si hay un error
    }
});
       
  }
  
  async function getClientRooms(data, containerData, containerInfo,modelView) {
    try {
        const message = await getClientRoomsPromise(data, containerData, containerInfo,modelView);
        console.log(message); // Manejar el mensaje de éxito
    } catch (error) {
        console.error(error); // Manejar el error
    }
}



async function getClientRoomsListPromise(data, containerData, containerInfo) {

    
      var reposSelect = document.getElementById(containerData);
      while (reposSelect.firstChild) {
          reposSelect.removeChild(reposSelect.firstChild);
      }
  
      if (data.clientRoom && data.clientRoom.length > 0) {
          await Promise.all(data.clientRoom.map(info => {
              return new Promise(resolve => {
                  const option = document.createElement("option");
                  option.value = info.roomId;
                 option.text = info.comments;
                  reposSelect.add(option);
                  resolve();
              });
          }));
          return "Rooms";
      } else {
          throw new Error("No se encontraron categorías en los datos proporcionados.");
      }
  
   }
  
  
   async function getClientRoomsList(data, containerData, containerInfo) {
    try {
        await getClientRoomsListPromise(data, containerData, containerInfo);
        //console.log("Operación completada con éxito"); // Manejar el mensaje de éxito
    } catch (error) {
        console.error(error); // Manejar el error
    }
}