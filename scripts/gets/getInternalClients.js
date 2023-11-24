
 

async function getInternalClients(param) {
 //  const subInternalClients = `${subDomain}/kairosGateway/apiCore/v1/getInternalClients/${ranCodetask} ${apiKeytask}/`;
if(param=="unlock"){
  document.getElementById("loading-container").style.display = "flex";
  fetch(epGetInternalClients+param)
  
  .then(response => response.json())
  .then(data => {
    const publicgroupsTableBody = document.querySelector("#tableInternalClients tbody");
    // Borramos los datos antiguos
    publicgroupsTableBody.innerHTML = "";
    data.clients.forEach(info => {
      const row = document.createElement("tr");
      row.innerHTML = `
     
    
      <td>
      
      <div class="edit-container">
  
     
    
      <button onclick="createCalendarId(&quot;${info.clientId}&quot;);openModClientConfig();getClientStyle(&quot;${info.clientId}&quot;);getCalendarDays(&quot;${info.clientId}&quot;);" class="btn btn-primary1 edit-button" style="width: 54px;height: 52px; font-size: 24px;" title="CONFIGURACIONES">
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
 
 
      publicgroupsTableBody.appendChild(row);
    });
    document.getElementById("loading-container").style.display = "none";
  })
  .catch(error => {
    console.error("Error:", error);
    document.getElementById("loading-container").style.display = "none";
  });
 

}
   
if(param=="lock"){
  document.getElementById("loading-container").style.display = "flex";
  fetch(epGetInternalClients+param)
  
  .then(response => response.json())
  .then(data => {
    const publicgroupsTableBody = document.querySelector("#tableInternalClients tbody");
    // Borramos los datos antiguos
    publicgroupsTableBody.innerHTML = "";
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
 
 
      publicgroupsTableBody.appendChild(row);
    });
    document.getElementById("loading-container").style.display = "none";
  })
  .catch(error => {
    console.error("Error:", error);
    document.getElementById("loading-container").style.display = "none";
  });
 

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



async function getClientRoomsList(timeid) {

  const reposSelect = document.getElementById("list-clientroom");
  while (reposSelect.firstChild) {
    reposSelect.removeChild(reposSelect.firstChild);
  }
sessionStorage.setItem('timeNow',timeid);


var uid=sessionStorage.getItem('clientNow');
	fetch(epGetClientRooms+uid+"/"+timeid)
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




 async function getClientRoomsList1(timeid) {

  const reposSelect = document.getElementById("list-clientroom1");
  while (reposSelect.firstChild) {
    reposSelect.removeChild(reposSelect.firstChild);
  }
sessionStorage.setItem('timeNow',timeid);

const url = window.location.href;

// Crear un objeto URL a partir de la URL actual
const urlObj = new URL(url);

// Obtener el valor del parámetro "parametro1"
var uid = urlObj.searchParams.get("clientId");
//var uid=sessionStorage.getItem('clientNow');
	fetch(epGetClientRooms+uid+"/"+timeid)
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