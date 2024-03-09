async function getCalendarDaysPromise(data, containerData, containerInfo,modelView) {
    return new Promise(async (resolve, reject) => {
        try {
    const fechaActual = new Date();
  
    // Obtener la fecha actual en formato "Día-Mes-Año"
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1; // Los meses comienzan desde 0, por lo que sumamos 1
    const año = fechaActual.getFullYear();
  
    document.getElementById("loading-container").style.display = "flex";
    if (data.response && data.response.response == "true") {
        if(modelView=="table"){
           
            const cardContainer11 = document.querySelector("#"+containerData+" tbody");
            const cardContainer11Info = document.getElementById(containerInfo);
            cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
            cardContainer11Info.innerHTML = ""; 
            
            const card11Info = document.createElement("div");
            card11Info.classList.add("card");
            
                card11Info.innerHTML = ` <p><H4>MES DE CALENDARIO</H4></p>`;
                cardContainer11Info.appendChild(card11Info);

               
                // Crear el primer botón
const button1 = document.createElement('button');
button1.classList.add('btn', 'btn-primary1', 'edit-button');
button1.style.width = '54px';
button1.style.height = '52px';
button1.style.fontSize = '24px';
button1.title = 'CONFIGURACIONES';
button1.onclick = function() {
    changeSection('internalUsers');
    eraseContainers('containerCalendarDaysData', 'containerCalendarDaysInfo');
    createTable('tableInternalClients', 'containerCalendarDaysData', [
        'Mes / Año',
        'Días del mes',
        'Días Disponibles',
        'Activo',
        'Acciones'
    ]);
    getApiData(getCalendarDays, {
        'apiService': 'apiCompanies',
        'apiVersion': 'v1',
        'endPoint': 'getCalendarDays'
    }, {
        'containerData': 'containerCalendarDaysData',
        'containerInfo': 'containerCalendarDaysInfo',
        'modelView': 'table',
    }, {
        'filter': '${info.clientId}',
        'param': 'all',
        'value': 'all'
    });
};

// Crear el icono del primer botón
const icon1 = document.createElement('i');
icon1.classList.add('fas', 'fa-table');
button1.appendChild(icon1);

// Agregar el primer botón al elemento p
const pElement1 = document.createElement('p');
pElement1.appendChild(button1);

// Crear el segundo botón
const button2 = document.createElement('button');
button2.classList.add('btn', 'btn-primary1', 'edit-button');
button2.style.width = '54px';
button2.style.height = '52px';
button2.style.fontSize = '24px';
button2.title = 'CONFIGURACIONES';
button2.onclick = function() {
    changeSection('internalUsers');
    eraseContainers('containerCalendarDaysData', 'containerCalendarDaysInfo');
    createTable('tableInternalClients', 'containerCalendarDaysData', [
        'Mes / Año',
        'Días del mes',
        'Días Disponibles',
        'Activo',
        'Acciones'
    ]);
    getApiData(getCalendarDays, {
        'apiService': 'apiCompanies',
        'apiVersion': 'v1',
        'endPoint': 'getCalendarDays'
    }, {
        'containerData': 'containerCalendarDaysData',
        'containerInfo': 'containerCalendarDaysInfo',
        'modelView': 'card',
    }, {
        'filter': '${info.clientId}',
        'param': 'all',
        'value': 'all'
    });
};

// Crear el icono del segundo botón
const icon2 = document.createElement('i');
icon2.classList.add('fas', 'fa-receipt');
button2.appendChild(icon2);

// Agregar el segundo botón al elemento p
const pElement2 = document.createElement('p');
pElement2.appendChild(button2);

// Agregar los elementos p al documento
cardContainer11Info.appendChild(pElement1);
cardContainer11Info.appendChild(pElement2);

          data.calendarDays.forEach(info => {
            const row = document.createElement("tr");
            var activo="";
            const backgroundColor = info.isActive === "0" ? "  #cc0007" : info.counterId === "0" ? "  #008f39" : "#ffffff";
            const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
           
            row.innerHTML = `
           
          
          
            
            <td>${info.month}  / ${año}</td>
            <td>${info.monthDays}</td>
            <td>${info.counterId}</td>
            <td>${info.isActive !== "0" ? `<button onclick="editClientCalendar(this,&quot;${info.calendarId}&quot;,&quot;isActive&quot;,&quot;calendarDays&quot;,&quot;0&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 edit-button" title="DEACTIVAR"><i class="fas fa-ban"></i></button>` : `<button onclick="editClientCalendar(this,&quot;${info.calendarId}&quot;,&quot;isActive&quot;,&quot;calendarDays&quot;,&quot;1&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 edit-button" title="ACTIVAR"><i class="fas fa-check"></i></button>`}${activo1}</td>
            <td>${info.isActive !== "0" ? `
            <button class="btn btn-primary1 edit-button"
            onclick="
            changeSection('internalUsers');
            eraseContainers('containerCalendarDaysData','containerCalendarDaysInfo');
            createTable('tableInternalClients','containerCalendarDaysData', [
                              'Día',
                              'Horas disponibles',
                              'Activo',
                              'Acciones'
                              
                          ]);
            getApiData(getCalendarDaysAssign,
                {
                  'apiService':'apiCompanies',
                  'apiVersion':'v1',
                  'endPoint':'getCalendarDaysAssign'
              },
                {
                  'containerData':'tableInternalClients',
                  'containerInfo':'containerCalendarDaysInfo',
                  'modelView':'table',
              },
                {
                  'filter':'${info.clientId}',
                  'param':'all',
                  'value':'${info.calendarId}'
              }
                  );
            " ><i class="fas fa-calendar-alt"></i></button>` : ''}</td>
          
             
              
            `;
      
            cardContainer11.appendChild(row);
          });

          const createCalendarButton = document.createElement("button");
          createCalendarButton.textContent = "Crear Calendario";
          createCalendarButton.className = "btn btn-primary1";
          createCalendarButton.onclick = () => createCalendar(); // Supongo que es el primer elemento del array "calendarDays"

          cardContainer11.appendChild(createCalendarButton);


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
                        ${info.isActive !== "0" ? `
                        <button class="btn btn-primary1 edit-button"
                        onclick="
                        openModCalendarDaysAssign();
                        getApiData(getCalendarDaysAssign,
                            {
                              'apiService':'apiCompanies',
                              'apiVersion':'v1',
                              'endPoint':'getCalendarDaysAssign'
                          },
                            {
                              'containerData':'containerDaysAssignData',
                              'containerInfo':'containerDaysAssignInfo',
                              'modelView':'card',
                          },
                            {
                              'filter':'${info.clientId}',
                              'param':'all',
                              'value':'${info.calendarId}'
                          }
                              );
                        " ><i class="fas fa-calendar-alt"></i></button>` : ''}
                    </div>
                `;
  
                cardContainer11.appendChild(card);
            });
            const createCalendarButton = document.createElement("button");
            createCalendarButton.textContent = "Crear Calendario";
            createCalendarButton.className = "btn btn-primary1";
            createCalendarButton.onclick = () => createCalendar(); // Supongo que es el primer elemento del array "calendarDays"
  
            cardContainer11.appendChild(createCalendarButton);
  
        }
           
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
  



  async function getCalendarDays(data, containerData, containerInfo,modelView) {
    try {
        const message = await getCalendarDaysPromise(data, containerData, containerInfo,modelView);
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
  
  
  
  
  
  
  
    

async function getCalendarDaysAssignPromise(data, containerData, containerInfo,modelView) {
  
    return new Promise(async (resolve, reject) => {
        try {

    document.getElementById("loading-container").style.display = "flex";


//pElement.appendChild(containerData);
    if (data.response && data.response.response == "true") {
    sessionStorage.setItem('calendarNow',data.calendarDaysAssign.calendarId);
    


    if(modelView=="table"){
           
        const cardContainer11 = document.querySelector("#"+containerData+" tbody");
        const cardContainer11Info = document.getElementById(containerInfo);
        cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
        cardContainer11Info.innerHTML = ""; 
        
        const card11Info = document.createElement("div");
        card11Info.classList.add("card");
        
            card11Info.innerHTML = ` <p><H4>DÌAS DE CALENDARIO</H4></p>`;
            cardContainer11Info.appendChild(card11Info);
                // Crear el elemento button
const button = document.createElement('button');

// Agregar las clases y el estilo al botón
button.classList.add('btn-primary1', 'edit-button1');
button.style.color = '#C70039';

// Agregar el evento onclick al botón
button.onclick = function() {
    changeSection('internalUsers');
    eraseContainers('containerCalendarDaysData','containerCalendarDaysInfo');
           createTable('tableInternalClients','containerCalendarDaysData', [
                             'Mes / Año',
                             'Días del mes',
                             'Días Disponibles',
                             'Activo',
                             'Acciones'
                         ]);
    getApiData(getCalendarDays,
     {
       'apiService':'apiCompanies',
       'apiVersion':'v1',
       'endPoint':'getCalendarDays'
   },
     {
       'containerData':'containerCalendarDaysData',
       'containerInfo':'containerCalendarDaysInfo',
       'modelView':'table',
   },
     {
       'filter':'${data.calendarDaysAssign.clientId}',
       'param':'all',
       'value':'all'
   }
       );
};

// Configurar el resto de los atributos del botón
button.id = 'schedule-tab';
button.setAttribute('data-bs-toggle', 'tab');
button.setAttribute('data-bs-target', '#schedule-tab-pane');
button.type = 'button';
button.role = 'tab';
button.setAttribute('aria-controls', 'schedule-tab-pane');
button.setAttribute('aria-selected', 'true');
button.title='RETROCEDER';
button.style.color = '#cc0007';

// Agregar el icono al botónKS
const icon = document.createElement('i');
icon.classList.add('fas', 'fa-backward');
button.appendChild(icon);

// Agregar el botón al elemento p
const pElement = document.createElement('p');
pElement.appendChild(button);

// Agregar el elemento p al documento
cardContainer11Info.appendChild(pElement);
      data.calendarDaysAssign.forEach(info => {
        sessionStorage.setItem("calendarNow",info.calendarId);
       
        const row = document.createElement("tr");
        var activo="";
        const backgroundColor = info.isActive === "0" ? "  #cc0007" : info.counterId === "0" ? "  #008f39" : "#ffffff";
        const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
       
        row.innerHTML = `
       
      
      
        
        <td>${info.calendarDay} ${info.calendarNumber}</td>

        <td>${info.counterId}</td>
        <td>${info.isActive !== "0" ? `<button onclick="editClientCalendar(this,&quot;${info.registId}&quot;,&quot;isActive&quot;,&quot;calendarDaysAssign&quot;,&quot;0&quot;,&quot;${info.calendarId}&quot;)" class="btn btn-primary1 edit-button" title="DEACTIVAR"><i class="fas fa-ban"></i></button>` : `<button onclick="editClientCalendar(this,&quot;${info.calendarId}&quot;,&quot;isActive&quot;,&quot;calendarDays&quot;,&quot;1&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 edit-button" title="ACTIVAR"><i class="fas fa-check"></i></button>`}${activo1}</td>
        <td>${info.isActive !== "0" ? `
        <button class="btn btn-primary1 edit-button"
        onclick="

        
        changeSection('internalUsers');
        eraseContainers('containerCalendarDaysData','containerCalendarDaysInfo');
               createTable('tableInternalClients','containerCalendarDaysData', [
                                 'Hora',
                                 'Disponibilidad',
                                 'Estado',
                                 'Asignar/Des-asignar',
                                 'Usuario'
                             ]);
                        getApiData(getCalendarTime,
                            {
                              'apiService':'apiCompanies',
                              'apiVersion':'v1',
                              'endPoint':'getCalendarTime'
                          },
                            {
                              'containerData':'containerCalendarDaysData',
                              'containerInfo':'containerCalendarDaysInfo',
                              'modelView':'table',
                              
                          },
                            {
                              'filter':'${info.registId}',
                              'param':'all',
                              'value':'all'
                          }
                              );
        " ><i class="fas fa-calendar-alt"></i></button>` : ''}</td>
      
         
          
        `;
  
        cardContainer11.appendChild(row);
      });

      const createCalendarButton = document.createElement("button");
      createCalendarButton.textContent = "Crear Calendario";
      createCalendarButton.className = "btn btn-primary1";
      createCalendarButton.onclick = () => createCalendar(); // Supongo que es el primer elemento del array "calendarDays"

      cardContainer11.appendChild(createCalendarButton);


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
                       
                        ${info.isActive !== "0" ? ` 
                        <button class="btn btn-primary1 edit-button" title="HORAS DISPONIBLES"
                        onclick="
                        
                        changeSection('internalUsers');
    eraseContainers('containerCalendarDaysData','containerCalendarDaysInfo');
                        getApiData(getCalendarTime,
                            {
                              'apiService':'apiCompanies',
                              'apiVersion':'v1',
                              'endPoint':'getCalendarTime'
                          },
                            {
                              'containerData':'containerCalendarDaysData',
                              'containerInfo':'containerCalendarDaysInfo',
                              'modelView':'card',
                          },
                            {
                              'filter':'${info.registId}',
                              'param':'all',
                              'value':'all'
                          }
                              );
                       " ><i class="fas fa-clock"></i></button>` : ''}
                        </div>
                `;
  
                cardContainer11.appendChild(card1);

            });
        }
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
  
  
  async function getCalendarDaysAssign(data, containerData, containerInfo,modelView) {
    try {
        const message = await getCalendarDaysAssignPromise(data, containerData, containerInfo,modelView);
        console.log(message); // Manejar el mensaje de éxito
    } catch (error) {
        console.error(error); // Manejar el error
    }
}





async function getCalendarTimePromise(data, containerData, containerInfo,modelView) {
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
            
                card11Info.innerHTML = ` <p><H4>HORAS DE CALENDARIO</H4></p>`;
                cardContainer11Info.appendChild(card11Info);
                    // Crear el elemento button
    const button = document.createElement('button');
    
    // Agregar las clases y el estilo al botón
    button.classList.add('btn-primary1', 'edit-button1');
    button.title='RETROCEDER';
    button.style.color = '#cc0007';
    
    // Agregar el evento onclick al botón
    button.onclick = function() {
        changeSection('internalUsers');
            eraseContainers('containerCalendarDaysData','containerCalendarDaysInfo');
            createTable('tableInternalClients','containerCalendarDaysData', [
                              'Día',
                              'Horas disponibles',
                              'Activo',
                              'Acciones'
                              
                          ]);
            getApiData(getCalendarDaysAssign,
                {
                  'apiService':'apiCompanies',
                  'apiVersion':'v1',
                  'endPoint':'getCalendarDaysAssign'
              },
                {
                  'containerData':'tableInternalClients',
                  'containerInfo':'containerCalendarDaysInfo',
                  'modelView':'table',
              },
                {
                  'filter': '${data.calendarTime.clientId}',
                  'param':'all',
                  'value':sessionStorage.getItem("calendarNow")
              }
                  );
    };
    
    // Configurar el resto de los atributos del botón
    button.id = 'schedule-tab';
    button.setAttribute('data-bs-toggle', 'tab');
    button.setAttribute('data-bs-target', '#schedule-tab-pane');
    button.type = 'button';
    button.role = 'tab';
    button.title='RETROCEDER';
    button.setAttribute('aria-controls', 'schedule-tab-pane');
    button.setAttribute('aria-selected', 'true');
    button.style.color = '#cc0007';
    
    // Agregar el icono al botónKS
    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-backward');
    button.appendChild(icon);
    
    // Agregar el botón al elemento p
    const pElement = document.createElement('p');
    pElement.appendChild(button);
    
    // Agregar el elemento p al documento
    cardContainer11Info.appendChild(pElement);
          data.calendarTime.forEach(info => {
            sessionStorage.setItem("registNow",info.registId);
            const row = document.createElement("tr");
            var activo="";
            const backgroundColor = info.isActive === "0" ? "  #cc0007" : info.counterId === "0" ? "  #008f39" : "#ffffff";
            const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
           
            row.innerHTML = `
           
          
          
            
            <td>${info.calendarTime}</td>
    
            <td>${info.counterId}</td>
            <td>${info.notApply == "free" ? `${info.isActive !== "0" ? `<button onclick="editClientCalendar(this,&quot;${info.timeId}&quot;,&quot;isActive&quot;,&quot;calendarTime&quot;,&quot;0&quot;,&quot;${info.registId}&quot;)" class="btn btn-primary1 edit-button" title="DESACTIVAR"><i class="fas fa-ban"></i></button>` : `<button onclick="editClientCalendar(this,&quot;${info.timeId}&quot;,&quot;isActive&quot;,&quot;calendarTime&quot;,&quot;1&quot;,&quot;${info.registId}&quot;)" class="btn btn-primary1 edit-button" title="ACTIVAR"><i class="fas fa-check"></i></button>`}` : ''}${activo1}</td>
            <td>${info.isActive == "1" ? ` ${info.counterId > 0 ? `<i class="fas fa-check-circle"></i> 
            <button class="btn btn-primary1 edit-button" title="ASIGNAR USUARIO"
            onclick="
            openModUserTime();
            getApiData(getGeneralUserList,
                {
                    'apiService':'apiCore',
                    'apiVersion':'v1',
                    'endPoint':'getGeneralUsers'
              },
                {
                  'containerData':'list-internalusers',
                  'containerInfo':'containerCalendarTimeInfo',
              },
                {
                  'filter':'all',
                  'param':'unlock',
                  'value':'all'
              }
                  );
            getApiData(getClientRoomsList,
                {
                  'apiService':'apiCompanies',
                  'apiVersion':'v1',
                  'endPoint':'getClientRooms'
              },
                {
                  'containerData':'list-clientroom',
                  'containerInfo':'containerCalendarTimeInfo',
              },
                {
                  'filter':'',
                  'param':'${info.timeId}',
                  'value':''
              }
                  );
            "><i class="fas fa-user-plus"></i></button><button onclick="openModUserTimedes();getCalendarTimedes(&quot;${info.timeId}&quot;);" class="btn btn-primary1 edit-button" title="DESASIGNAR USUARIO"><i class="fas fa-unlink"></i></button>` : `<i class="fas fa-times-circle"></i><button onclick="openModUserTimedes();getCalendarTimedes(&quot;${info.timeId}&quot;);" class="btn btn-primary1 edit-button" title="DESASIGNAR USUARIO"><i class="fas fa-unlink"></i></button>`}` :''}</td>
          
            <td>${info.userApply}</td>
            <td>${info.notApply !== "free" ? ` <button onclick="openModCalendarDaysAssign();getCalendarDaysAssign(&quot;${info.timeId}&quot;);" class="btn btn-primary1 edit-button"><i class="fas fa-info-circle"></i></button>` : ''}</td>
              
            `;
      
            cardContainer11.appendChild(row);
          });
    
          const createCalendarButton = document.createElement("button");
          createCalendarButton.textContent = "Crear Calendario";
          createCalendarButton.className = "btn btn-primary1";
          createCalendarButton.onclick = () => createCalendar(); // Supongo que es el primer elemento del array "calendarDays"
    
          cardContainer11.appendChild(createCalendarButton);
    
    
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
                        <p class="card-text">${info.isActive == "1" ? ` ${info.counterId > 0 ? `<i class="fas fa-check-circle"></i> 
                        <button class="btn btn-primary1 edit-button" title="ASIGNAR USUARIO"
                        onclick="
                        openModUserTime();
                       
                        getApiData(getGeneralUsers,
                            {
                                'apiService':'apiCore',
                                'apiVersion':'v1',
                                'endPoint':'getGeneralUsers'
                          },
                            {
                              'containerData':'list-clientroom',
                              'containerInfo':'containerCalendarTimeInfo',
                          },
                            {
                              'filter':'all',
                              'param':'unlock',
                              'value':'all'
                          }
                              );
                        getApiData(getClientRoomsList,
                            {
                              'apiService':'apiCompanies',
                              'apiVersion':'v1',
                              'endPoint':'getClientRooms'
                          },
                            {
                              'containerData':'list-clientroom',
                              'containerInfo':'containerCalendarTimeInfo',
                          },
                            {
                              'filter':'',
                              'param':'${info.timeId}',
                              'value':''
                          }
                              );
                        "><i class="fas fa-user-plus"></i></button><button onclick="openModUserTimedes();getCalendarTimedes(&quot;${info.timeId}&quot;);" class="btn btn-primary1 edit-button" title="DESASIGNAR USUARIO"><i class="fas fa-unlink"></i></button>` : `<i class="fas fa-times-circle"></i><button onclick="openModUserTimedes();getCalendarTimedes(&quot;${info.timeId}&quot;);" class="btn btn-primary1 edit-button" title="DESASIGNAR USUARIO"><i class="fas fa-unlink"></i></button>`}` :''}</p>
                        <p class="card-text">Usuario: ${info.userApply}</p>
                        ${info.notApply !== "free" ? ` <button onclick="openModCalendarDaysAssign();getCalendarDaysAssign(&quot;${info.timeId}&quot;);" class="btn btn-primary1 edit-button"><i class="fas fa-info-circle"></i></button>` : ''}
                    </div>
                `;
  
                cardContainer11.appendChild(card11);
            });
        }
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
  

  async function getCalendarTime(data, containerData, containerInfo,modelView) {
    try {
        const message = await getCalendarTimePromise(data, containerData, containerInfo,modelView);
        console.log(message); // Manejar el mensaje de éxito
    } catch (error) {
        console.error(error); // Manejar el error
    }
}