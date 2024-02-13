async function getCalendarDaysPromise(data, containerData, containerInfo) {
    return new Promise(async (resolve, reject) => {
        try {
    const fechaActual = new Date();
  
    // Obtener la fecha actual en formato "Día-Mes-Año"
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1; // Los meses comienzan desde 0, por lo que sumamos 1
    const año = fechaActual.getFullYear();
  
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
            data.calendarDays.forEach(info => {
                const card = document.createElement("div");
                card.classList.add("card");
  
                // Define un color de fondo basado en el valor de info.isActive
                var activo="";
                const backgroundColor = info.isActive === "0" ? "  #cc0007" : info.counterId === "0" ? "  #008f39" : "#ffffff";
                const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
                card.innerHTML = `
                    <div class="card-body" style="background-color: ${backgroundColor};">
                        <h5 class "card-title"><i class="fas fa-calendar-alt"></i>${info.month}  / ${año}</h5>
                        <p class="card-text">Días del Mes: ${info.monthDays}</p>
                        <p class="card-text">Días disponibles: ${info.counterId}</p>
                        <p class="card-text">${info.isActive !== "0" ? `<button onclick="editClientCalendar(this,&quot;${info.calendarId}&quot;,&quot;isActive&quot;,&quot;calendarDays&quot;,&quot;0&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 edit-button" title="DEACTIVAR"><i class="fas fa-ban"></i></button>` : `<button onclick="editClientCalendar(this,&quot;${info.calendarId}&quot;,&quot;isActive&quot;,&quot;calendarDays&quot;,&quot;1&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 edit-button" title="ACTIVAR"><i class="fas fa-check"></i></button>`}${activo1}</p>
                        ${info.isActive !== "0" ? `<button onclick="openModCalendarDaysAssign();getApiData(getCalendarDaysAssign,'apiCompanies','v1','getCalendarDaysAssign','containerDaysAssignData','containerDaysAssignInfo','${info.clientId}','all','${info.calendarId}');" class="btn btn-primary1 edit-button" title="DÍAS DISPONIBLES"><i class="fas fa-calendar-alt"></i></button>` : ''}
                    </div>
                `;
  
                cardContainer11.appendChild(card);
            });
            const createCalendarButton = document.createElement("button");
            createCalendarButton.textContent = "Crear Calendario";
            createCalendarButton.className = "btn btn-primary1";
            createCalendarButton.onclick = () => createCalendar(); // Supongo que es el primer elemento del array "calendarDays"
  
            cardContainer11.appendChild(createCalendarButton);
  
            document.getElementById("loading-container").style.display = "none";
            resolve("Calendarios obtenidos exitosamente: "+data.response.apiMessage); // Resuelve la promesa cuando los catálogos se obtienen correctamente
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
            reject("Error al obtener los calendarios: "+data.response.apiMessage); // Rechaza la promesa si hay un error al obtener los catálogos
        }
  
            // Agregar el botón fuera del bucle
           
            document.getElementById("loading-container").style.display = "none";

        } catch(error) {
            console.error("Error:", error);
            document.getElementById("loading-container").style.display = "none";
            reject(error); // Rechaza la promesa si hay un error
        }
        });
  }
  



  async function getCalendarDays(data, containerData, containerInfo) {
    try {
        const message = await getCalendarDaysPromise(data, containerData, containerInfo);
        console.log(message); // Manejar el mensaje de éxito
    } catch (error) {
        console.error(error); // Manejar el error
    }
}

  function createCalendar() {
    // Realiza la acción de creación de calendario utilizando el clientId
    // Puedes implementar esta función según tus necesidades
  
   
    openModCreateCalendar();
  }
  
  
  
  
  
  
  
    

async function getCalendarDaysAssignPromise(data, containerData, containerInfo) {
  
    return new Promise(async (resolve, reject) => {
        try {
    document.getElementById("loading-container").style.display = "flex";
    if (data.response && data.response.response == "true") {
    sessionStorage.setItem('calendarNow',data.calendarDaysAssign.calendarId);
    
   
    const cardContainer11 = document.getElementById(containerData);
    const cardContainer11Info = document.getElementById(containerInfo);
    cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
    cardContainer11Info.innerHTML = ""; 
    const card11Info = document.createElement("div");
    card11Info.classList.add("card");
    card11Info.innerHTML = ` <p>${data.response.apiMessage}</p>`;
    cardContainer11Info.appendChild(card11Info);
            data.calendarDaysAssign.forEach(info => {
                sessionStorage.setItem('calendarNow',info.calendarId);
                const card1 = document.createElement("div");
                card1.classList.add("card");
                const backgroundColor = info.isActive === "0" ? "  #cc0007" : info.counterId === "0" ? "  #008f39" : "#ffffff";
                const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
                card1.innerHTML = `
                    <div class="card-body"  style="background-color: ${backgroundColor};">
                        <h5 class="card-title"><i class="fas fa-calendar-alt"></i>${info.calendarDay} ${info.calendarNumber}</h5>
                       
                        <p class="card-text">Horas disponibles: ${info.counterId}</p>
                        <p class="card-text">${info.isActive !== "0" ? `<button onclick="editClientCalendar(this,&quot;${info.registId}&quot;,&quot;isActive&quot;,&quot;calendarDaysAssign&quot;,&quot;0&quot;,&quot;${info.calendarId}&quot;)" class="btn btn-primary1 edit-button" title="DESACTIVAR">  <i class="fas fa-ban"></i></button>` : `<button onclick="editClientCalendar(this,&quot;${info.registId}&quot;,&quot;isActive&quot;,&quot;calendarDaysAssign&quot;,&quot;1&quot;,&quot;${info.calendarId}&quot;)" class="btn btn-primary1 edit-button" title="ACTIVAR"><i class="fas fa-check"></i></button>`}${activo1}</p>
                       
                        ${info.isActive !== "0" ? ` <button onclick="openModCalendarTime();getApiData(getCalendarTime,'apiCompanies','v1','getCalendarTime','containerCalendarTimeData','containerCalendarTimeInfo','${info.registId}','all','all');" class="btn btn-primary1 edit-button" title="HORAS DISPONIBLES"><i class="fas fa-clock"></i></button>` : ''}
                        </div>
                `;
  
                cardContainer11.appendChild(card1);

            });
            resolve("Calendarios obtenidos exitosamente: "+data.response.apiMessage); // Resuelve la promesa cuando los catálogos se obtienen correctamente

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
            document.getElementById("loading-container").style.display = "none";
        } catch(error) {
            console.error("Error:", error);
            document.getElementById("loading-container").style.display = "none";
            reject(error); // Rechaza la promesa si hay un error
        }
        });
  }
  
  
  async function getCalendarDaysAssign(data, containerData, containerInfo) {
    try {
        const message = await getCalendarDaysAssignPromise(data, containerData, containerInfo);
        console.log(message); // Manejar el mensaje de éxito
    } catch (error) {
        console.error(error); // Manejar el error
    }
}





async function getCalendarTimePromise(data, containerData, containerInfo) {
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
            data.calendarTime.forEach(info => {
                sessionStorage.setItem('registNow',info.registId);
                const card11 = document.createElement("div");
                card11.classList.add("card");
                const backgroundColor = info.isActive === "0" ? "  #cc0007" : info.counterId === "0" ? "  #008f39" : "#ffffff";
                const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
                card11.innerHTML = `
                    <div class="card-body" style="background-color: ${backgroundColor};">
                        <h5 class="card-title"><i class="fas fa-clock"></i>${info.calendarTime}</h5>
                        <p class="card-text">Salas disponibles: ${info.counterId}</p>
  
                        <p class="card-text">${info.notApply == "free" ? `${info.isActive !== "0" ? `<button onclick="editClientCalendar(this,&quot;${info.timeId}&quot;,&quot;isActive&quot;,&quot;calendarTime&quot;,&quot;0&quot;,&quot;${info.registId}&quot;)" class="btn btn-primary1 edit-button" title="DESACTIVAR"><i class="fas fa-ban"></i></button>` : `<button onclick="editClientCalendar(this,&quot;${info.timeId}&quot;,&quot;isActive&quot;,&quot;calendarTime&quot;,&quot;1&quot;,&quot;${info.registId}&quot;)" class="btn btn-primary1 edit-button" title="ACTIVAR"><i class="fas fa-check"></i></button>`}` : ''}${activo1}</p>
                        <p class="card-text">${info.isActive == "1" ? ` ${info.counterId > 0 ? `<i class="fas fa-check-circle"></i> <button onclick="openModUserTime();getInternalUserList(&quot;all&quot;);getApiData(getClientRoomsList,'apiCompanies','v1','getClientRooms','list-clientroom','containerCalendarTimeInfo','','${info.timeId}','');" class="btn btn-primary1 edit-button" title="ASIGNAR USUARIO"><i class="fas fa-user-plus"></i></button><button onclick="openModUserTimedes();getCalendarTimedes(&quot;${info.timeId}&quot;);" class="btn btn-primary1 edit-button" title="DESASIGNAR USUARIO"><i class="fas fa-unlink"></i></button>` : `<i class="fas fa-times-circle"></i><button onclick="openModUserTimedes();getCalendarTimedes(&quot;${info.timeId}&quot;);" class="btn btn-primary1 edit-button" title="DESASIGNAR USUARIO"><i class="fas fa-unlink"></i></button>`}` :''}</p>
                        <p class="card-text">Usuario: ${info.userApply}</p>
                        ${info.notApply !== "free" ? ` <button onclick="openModCalendarDaysAssign();getCalendarDaysAssign(&quot;${info.timeId}&quot;);" class="btn btn-primary1 edit-button"><i class="fas fa-info-circle"></i></button>` : ''}
                    </div>
                `;
  
                cardContainer11.appendChild(card11);
            });
            document.getElementById("loading-container").style.display = "none";
            resolve("Horas obtenidas exitosamente: "+data.response.apiMessage); // Resuelve la promesa cuando los catálogos se obtienen correctamente

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
            document.getElementById("loading-container").style.display = "none";
        } catch(error) {
            console.error("Error:", error);
            document.getElementById("loading-container").style.display = "none";
            reject(error); // Rechaza la promesa si hay un error
        }
        });
  }
  

  async function getCalendarTime(data, containerData, containerInfo) {
    try {
        const message = await getCalendarTimePromise(data, containerData, containerInfo);
        console.log(message); // Manejar el mensaje de éxito
    } catch (error) {
        console.error(error); // Manejar el error
    }
}