
 

async function getInternalClientsPromise(data,containerData,containerInfo) {
  return new Promise(async (resolve, reject) => {
    try {
document.getElementById("loading-container").style.display = "flex";


const buttonContainer = document.getElementById("containerBtn");
if (buttonContainer) {
  buttonContainer.innerHTML = '';
}


// 2. Crear el botón dentro del contenedor
const button = document.createElement("button");
button.type = "button";
button.classList.add("btn", "btn-primary1", "edit-button1");
button.setAttribute("style", "color: #C70039;");
button.setAttribute("title", "VER CLIENTES ACTIVOS");
button.innerHTML = '<i class="fas fa-eye"></i>';

// Agregar el evento onclick para ejecutar las funciones
button.onclick = function() {
  changeSection('generalUsers');
              eraseContainers('containerGeneralUsersData','containerGeneralUsersInfo');
  createTable('tableGeneralUsers','containerGeneralUsersData', [
    'Acciones',
    'Id',
    'Cliente',
    'Nombre',
    'Comentarios',
    'Tipo de Cliente',
    'Responsable',
    'Contacto',
    'Activo'
  ]);
  getApiData(getInternalClients,
    {
      'apiService':'apiCore',
      'apiVersion':'v1',
      'endPoint':'getInternalClients'
  },
    {
      'containerData':'tableGeneralUsers',
      'containerInfo':'containerGeneralUsersInfo'
  },
    {
      'filter':'unlock',
      'param':'unlock',
      'value':'all'
  }
      );
};

// 3. Agregar el contenedor con el botón al DOM
buttonContainer.appendChild(button);
document.body.appendChild(buttonContainer); // Puedes ajustar el contenedor según tu necesidad



const button1 = document.createElement("button");
button1.type = "button";
button1.classList.add("btn", "btn-primary1", "edit-button1");
button1.setAttribute("style", "color: #C70039;");
button1.setAttribute("title", "VER USUARIOS INACTIVOS");
button1.innerHTML = '<i class="fas fa-eye-slash"></i>';

button1.onclick = function() {
  changeSection('generalUsers');
              eraseContainers('containerGeneralUsersData','containerGeneralUsersInfo');
              createTable('tableInternalClients','containerGeneralUsersData', [
                'Acciones',
                'Id',
                'Cliente',
                'Nombre',
                'Comentarios',
                'Tipo de Cliente',
                'Responsable',
                'Contacto',
                'Activo'
              ]);
  getApiData(getInternalClients,
    {
      'apiService':'apiCore',
      'apiVersion':'v1',
      'endPoint':'getInternalClients'
  },
    {
      'containerData':'tableInternalClients',
      'containerInfo':'containerGeneralUsersInfo'
  },
    {
      'filter':'lock',
      'param':'lock',
      'value':'all'
  }
      );
};
buttonContainer.appendChild(button1);
document.body.appendChild(buttonContainer); // Puedes ajustar el contenedor según tu necesidad




const button2 = document.createElement("button");
button2.type = "button";
button2.classList.add("btn", "btn-primary1", "edit-button1");
button2.setAttribute("style", "color: #C70039;");
button2.setAttribute("title", "CREAR CLIENTE");
button2.innerHTML = '<i class="fas fa-folder-plus"></i>';

button2.onclick = function() {
  openModCreateExtClients();
  //getInternalClientsList();
};
buttonContainer.appendChild(button2);
document.body.appendChild(buttonContainer); // Puedes ajustar el contenedor según tu necesidad



if (data.response && data.response.response == "true") {
 //  const subInternalClients = `${subDomain}/kairosGateway/apiCore/v1/getInternalClients/${ranCodetask} ${apiKeytask}/`;
if(data.response.sentData.param=="unlock"){
  const cardContainer11 = document.querySelector("#"+containerData+" tbody");
  const cardContainer11Info = document.getElementById(containerInfo);
  cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
  cardContainer11Info.innerHTML = ""; 
  
  const card11Info = document.createElement("div");
  card11Info.classList.add("card");
      card11Info.innerHTML = ` <p><H2>CLIENTES</H2></p><p>${data.response.apiMessage}</p>`;
      cardContainer11Info.appendChild(card11Info);
    data.clients.forEach(info => {
      const row = document.createElement("tr");
      row.innerHTML = `
     
    
      <td>
      
      <div class="edit-container">
  
     
    
      <button class="btn btn-primary1 edit-button" style="width: 54px;height: 52px; font-size: 24px;" title="CONFIGURACIONES"
       onclick="
       createCalendarId(&quot;${info.clientId}&quot;);
       changeSection('internalUsers');
       getClientStyle(&quot;${info.clientId}&quot;);
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
          'filter':'${info.clientId}',
          'param':'all',
          'value':'all'
      }
          );
           " >
        <i class="fas fa-cog"></i>
      </button>

      <a href="adminSchedule.php?clientId=${info.clientId}" target="_blank" class="btn btn-primary1 edit-button" style="width: 54px;height: 52px; font-size: 24px;" title="CONFIGURACIONES">
      <i class="fas fa-calendar"></i>
    </a>
      <button onclick="editExtClientStatus(this,&quot;${info.clientId}&quot;,&quot;status&quot;,&quot;0&quot;,&quot;client&quot;)" class="btn btn-primary1 edit-button" style="width: 54px;height: 52px; font-size: 24px;" title="BLOQUEAR">
      <i class="fas fa-ban"></i>
    </button>

    
    
    </div>

    

      </td>
      <td>${info.clientId}</td>
      <td>
      <div class="edit-container">
      <input type="text" class="form-control label-input" id="${info.clientId}" value="${info.clientName}" title="${info.clientName}" onclick="makeEditable(this)"> <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;clientName&quot;,&quot;client&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
     
      </div>
      </td>

      <td>
      <div class="edit-container">
      <input type="text" class="form-control label-input" id="${info.clientId}" value="${info.comments}" title="${info.comments}"> <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;comments&quot;,&quot;client&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
      </div>
      </td>
      <td>${info.clientType}</td>
      <td>${info.name} ${info.lastName}</td>
      <td>${info.email} / ${info.contact}</td>
      <td>
      <div class="edit-container">
      <input type="text" class="form-control label-input" id="${info.clientId}" value="${info.isActive}"> <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;isActive&quot;,&quot;client&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
      </div>
      </td>
      
  
   
        
      `;
 
 
      cardContainer11.appendChild(row);
    });
    document.getElementById("loading-container").style.display = "none";
 
 

}
   
if(data.response.sentData.param=="lock"){
  const cardContainer11 = document.querySelector("#"+containerData+" tbody");7
    const cardContainer11Info = document.getElementById(containerInfo);
    cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
    cardContainer11Info.innerHTML = ""; 
    
    const card11Info = document.createElement("div");
    card11Info.classList.add("card");
        card11Info.innerHTML = `  <p><H2>CLIENTES</H2></p><p>${data.response.apiMessage}</p>`;
        cardContainer11Info.appendChild(card11Info);
    data.clients.forEach(info => {
      const row = document.createElement("tr");
      row.innerHTML = `
     
    
      <td>
      <div class="edit-container">
      <button onclick="editExtClientStatus(this,&quot;${info.clientId}&quot;,&quot;status&quot;,&quot;1&quot;,&quot;client&quot;)" class="btn btn-primary1 edit-button" title="DESBLOQUEAR">
      <i class="fas fa-check"></i>
      </button>
      <button onclick="editExtClientStatus(this,&quot;${info.clientId}&quot;,&quot;status&quot;,&quot;del&quot;,&quot;del&quot;)" class="btn btn-primary1 delete-button" title="ELIMINAR SOLO CLIENTE">
      <i class="fas fa-times"></i>
      </button>
      <button onclick="editExtClientStatus(this,&quot;${info.clientId}&quot;,&quot;status&quot;,&quot;delAll&quot;,&quot;delAll&quot;)" class="btn btn-primary1 delete-button" title="ELIMINAR TODA LA INFORMACIÓN DEL CLIENTE INCLUYENDO USUARIOS">
      <i class="fas fa-trash"></i>
      </button>
      
      </div>
      </td>
      <td>${info.clientId}</td>
      <td>
      <div class="edit-container">
      <input type="text" class="form-control label-input" id="${info.clientId}" value="${info.clientName}" title="${info.clientName}"> <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;clientName&quot;,&quot;client&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
      </div>
      </td>

      <td>
      <div class="edit-container">
      <input type="text" class="form-control label-input" id="${info.clientId}" value="${info.comments}" title="${info.comments}"> <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;comments&quot;,&quot;client&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
      </div>
      </td>
      <td>${info.clientType}</td>
      <td>${info.name} ${info.lastName}</td>
      <td>${info.email} / ${info.contact}</td>
      <td>
      <div class="edit-container">
      <input type="text" class="form-control label-input" id="${info.clientId}" value="${info.isActive}"> <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;isActive&quot;,&quot;client&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
      </div>
      </td>
    
  
   
        
      `;
 
 
      cardContainer11.appendChild(row);
    });
    document.getElementById("loading-container").style.display = "none";
 

}
   

resolve("Clientes obtenidos exitosamente: "+data.response.apiMessage); // Resuelve la promesa cuando los catálogos se obtienen correctamente

}
else {
  // Manejar el caso donde la respuesta no es 'true'
  const cardContainer11 = document.getElementById(containerData);
  cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
  const cardContainer11Info = document.getElementById(containerInfo);

  cardContainer11Info.innerHTML = ""; 
  const card11Info = document.createElement("div");
  card11Info.classList.add("card");
      card11Info.innerHTML = ` <p><H2>CLIENTES</H2></p> <p>${data.response.apiMessage}</p>
      <p>El filtro solicitado fue-> FILTRO: ${data.response.sentData.filter}, PARÁMETRO: ${data.response.sentData.param}, VALOR: ${data.response.sentData.value}</p>`;
      cardContainer11Info.appendChild(card11Info);

 
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


async function getInternalClients(data, containerData, containerInfo) {
  try {
      const message = await getInternalClientsPromise(data, containerData, containerInfo);
      console.log(message); // Manejar el mensaje de éxito
  } catch (error) {
      console.error(error); // Manejar el error
  }
}


    function togglePassword(button) {
        const passwordInput = button.previousElementSibling;
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            button.textContent = "Ocultar";
        } else {
            passwordInput.type = "password";
            button.textContent = "Mostrar";
        }
    }











    



function editExtClient(button, id,filter,param) {
  // Obtener el valor del campo de texto correspondiente al botón
  var input = button.previousElementSibling;
  var nombre = input.value;

  // Construir la URL con los parámetros de la petición GET
  var url = 'controller/putExtClient.php?clientId=' + encodeURIComponent(id)  + '&filter=' + encodeURIComponent(filter)+ '&value=' + encodeURIComponent(param)+ '&param=' + encodeURIComponent(nombre);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

      getMessage();
      
      if(param=="style"){
        getClientStyle(id);
      }
      if(param=="client"){
        getInternalClients('unlock');
      }
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
}


// Define una función para mostrar el modal de confirmación cerca del botón
function showConfirmationModalNearButton(message, onConfirm, button) {
  const modalContent = document.createElement('div');
  modalContent.className = 'confirm-modal-content-near-button';

  const messageElement = document.createElement('p');
  messageElement.textContent = message;

  const confirmButton = document.createElement('button');
  confirmButton.textContent = 'Aceptar';
  confirmButton.className = 'confirm-button';

  const cancelButton = document.createElement('button');
  cancelButton.textContent = 'Cancelar';
  cancelButton.className = 'cancel-button';

  // Agrega los elementos al modal
  modalContent.appendChild(messageElement);
  modalContent.appendChild(confirmButton);
  modalContent.appendChild(cancelButton);
  document.body.appendChild(modalContent);

  // Calcula la posición del modal cerca del botón
  const buttonRect = button.getBoundingClientRect();
  const modalRect = modalContent.getBoundingClientRect();

  // Calcula la posición derecha del botón
  const buttonRight = buttonRect.left + buttonRect.width;

  // Calcula la posición del modal para que esté a la derecha del botón
  const top = buttonRect.top + window.scrollY;
  const left = buttonRight + 350; // Agrega un margen a la derecha del botón

  modalContent.style.top = top + 'px';
  modalContent.style.left = left + 'px';

  // Agrega eventos a los botones
  confirmButton.addEventListener('click', () => {
    onConfirm();
    document.body.removeChild(modalContent);
  });

  cancelButton.addEventListener('click', () => {
    document.body.removeChild(modalContent);
  });
}

function editExtClientStatus(button, id,filter,status,param) {
  // Obtener el valor del campo de texto correspondiente al botón
  var input = button.previousElementSibling;
 // var nombre = input.value;

 if(status==1){var confirmMessage = '¿Seguro quieres desbloquear el cliente?';}
 if(status==0){var confirmMessage = '¿Seguro quieres bloquear el cliente?';}
 if(status=="del"){var confirmMessage = '¿Seguro quieres eliminar el cliente?';}
 if(status=="delAll"){var confirmMessage = '¿Seguro quieres eliminar el cliente con toda su información?';}
 showConfirmationModalNearButton(confirmMessage, () => {
  // Construir la URL con los parámetros de la petición GET
  var url = 'controller/putExtClient.php?clientId=' + encodeURIComponent(id)  + '&filter=' + encodeURIComponent(filter)+ '&value=' + encodeURIComponent(param)+ '&param=' + encodeURIComponent(status);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

      getMessage();
      if(status==1){
        getInternalClients('unlock');
      }
      if(status==0){
        getInternalClients('lock');
      }
      
      
     
      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
  },button);
}






async function getInternalClientsList() {

  const reposSelect = document.getElementById("repos-select234666");
  while (reposSelect.firstChild) {
    reposSelect.removeChild(reposSelect.firstChild);
  }
	fetch(epGetInternalClients+"unlock")
  .then(response => response.json())
  .then(data => {
    data.clients.forEach(info => {
      const option = document.createElement("option");
      option.value = info.clientId;
      option.text = info.clientName;
      reposSelect.add(option);
      console.log(info.clientName);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });

 }

 // Llamar a la función para obtener los datos del API

 function createCalendarId(clientId) {
  // Realiza la acción de creación de calendario utilizando el clientId
  // Puedes implementar esta función según tus necesidades
  sessionStorage.setItem('clientNow',clientId);
 
  
}



async function getInternalUserList(param) {

  const reposSelect = document.getElementById("list-internalusers");
  while (reposSelect.firstChild) {
    reposSelect.removeChild(reposSelect.firstChild);
  }
var uid=sessionStorage.getItem('clientNow');
	fetch(epGetGeneralUsers+param+"/"+uid)
  .then(response => response.json())
  .then(data => {
    data.users.forEach(info => {
      const option = document.createElement("option");
      option.value = info.userId+"|"+info.name+" "+info.lastName;
      option.text = info.name+" "+info.lastName;
      reposSelect.add(option);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });

 }

 // Llamar a la función para obtener los datos del API

 function createCalendarId(clientId) {
  // Realiza la acción de creación de calendario utilizando el clientId
  // Puedes implementar esta función según tus necesidades
  sessionStorage.setItem('clientNow',clientId);
 
  
}


async function getInternalUserList1(param) {

  const reposSelect = document.getElementById("list-internalusers1");
  while (reposSelect.firstChild) {
    reposSelect.removeChild(reposSelect.firstChild);
  }

  const url = window.location.href;

// Crear un objeto URL a partir de la URL actual
const urlObj = new URL(url);

// Obtener el valor del parámetro "parametro1"
var uid = urlObj.searchParams.get("clientId");
//var uid=sessionStorage.getItem('clientNow');
	fetch(epGetGeneralUsers+param+"/"+uid)
  .then(response => response.json())
  .then(data => {
    data.users.forEach(info => {
      const option = document.createElement("option");
      option.value = info.userId+"|"+info.name+" "+info.lastName;
      option.text = info.name+" "+info.lastName;
      reposSelect.add(option);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });

 }

 // Llamar a la función para obtener los datos del API

 function createCalendarId(clientId) {
  // Realiza la acción de creación de calendario utilizando el clientId
  // Puedes implementar esta función según tus necesidades
  sessionStorage.setItem('clientNow',clientId);
 
  
}





 async function getClientRoomsList1(timeid) {

  const reposSelect = document.getElementById("list-clientroom1");
  while (reposSelect.firstChild) {
    reposSelect.removeChild(reposSelect.firstChild);
  }
sessionStorage.setItem('timeNow',timeid);

const url = window.location.href;

// Crear un objeto URL a partir de la URL actual
const urlObj = new URL(url);



var apiData = {
   
  "clientId":urlObj.searchParams.get("clientId"),
  "filter": "",
  "param": timeid,
  "value": ""


};
var serviceName="kairosGateway";
var apiName="apiCompanies";
var apiVersion="v1";
var endPoint="getClientRooms";
// Construir la URL con los parámetros de la petición GET

const apiInfo = JSON.stringify(apiData);
fetch(sessionStorage.getItem('subDomain') +"/"+ serviceName+"/"+apiName+"/"+apiVersion+"/"+endPoint+"/"+sessionStorage.getItem('ranCode')+" "+sessionStorage.getItem('key')+"/"+apiInfo)

//var uid=sessionStorage.getItem('clientNow');
  .then(response => response.json())
  .then(data => {
    data.clientRoom.forEach(info => {
      const option = document.createElement("option");
      option.value = info.roomId;
      option.text = info.comments;
      reposSelect.add(option);
      
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });

 }


 // Llamar a la función para obtener los datos del API

 function createCalendarId(clientId) {
  // Realiza la acción de creación de calendario utilizando el clientId
  // Puedes implementar esta función según tus necesidades
  sessionStorage.setItem('clientNow',clientId);
 
  
}