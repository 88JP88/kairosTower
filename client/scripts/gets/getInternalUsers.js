
 async function getInternalUsers(param) {
  var cid=sessionStorage.getItem('clientId');
  if(param=="unlock"){

    document.getElementById("loading-container").style.display = "flex";
    fetch(epGetInternalUsers+param+"/"+cid)
   
  .then(response => response.json())
  .then(data => {
    const publicgroupsTableBody = document.querySelector("#tableInternalUsers tbody");
 
    publicgroupsTableBody.innerHTML = "";
    data.users.forEach(info => {
      const row = document.createElement("tr");
      row.innerHTML = `
     
    
      <td><button onclick="editIntUserStatus(this,&quot;${info.userId}&quot;,&quot;status&quot;,&quot;0&quot;)" class="btn btn-primary1 edit-button" title="BLOQUEAR"><i class="fas fa-ban"></i></button></td>
      <td>${info.userId}</td>
      <td>${info.userName}</td>
      <td>${info.name} ${info.lastName}</td>
      <td>${info.contact}</td>
      <td>${info.email}</td>
      <td>${info.rolId}</td>
      <td>
      <div class="edit-container"><input type="text" class="form-control label-input" id="${info.userId}" value="${info.isActive}"><button onclick="editIntUser(this,&quot;${info.userId}&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="EDITAR"><i class="fas fa-edit"></i></button></div></td>
        
        
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
    fetch(epGetInternalUsers+param+"/"+cid)
   
  .then(response => response.json())
  .then(data => {
    const publicgroupsTableBody = document.querySelector("#tableInternalUsers tbody");
 
    publicgroupsTableBody.innerHTML = "";
    data.users.forEach(info => {
      const row = document.createElement("tr");
      row.innerHTML = `
     
      <td><button onclick="editIntUserStatus(this,&quot;${info.userId}&quot;,&quot;status&quot;,&quot;1&quot;)" class="btn btn-primary1 edit-button" title="DESBLOQUEAR"><i class="fas fa-check"></i></button>
      <button onclick="editIntUserStatus(this,&quot;${info.userId}&quot;,&quot;status&quot;,&quot;del&quot;)" class="btn btn-primary1 delete-button" title="ELIMINAR"><i class="fas fa-trash"></i></button>
    </td>
    
      <td>${info.userId}</td>
      <td>${info.userName}</td>
      <td>${info.name} ${info.lastName}</td>
      <td>${info.contact}</td>
      <td>${info.email}</td>
      <td>${info.rolId}</td>
      <td>
      <div class="edit-container"><input type="text" class="form-control label-input" id="${info.userId}" value="${info.isActive}"><button onclick="editIntUser(this,&quot;${info.userId}&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="EDITAR"><i class="fas fa-edit"></i></button></div></td>
     
        
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
   
  
  

function editIntUser(button, id,filter) {
  // Obtener el valor del campo de texto correspondiente al botón
  var input = button.previousElementSibling;
  var nombre = input.value;

  var uid= sessionStorage.getItem('userId');
  if(uid==id){
    showNotify('¡No puedes editar el Activo de tu propio usuario!','error');
     }else{
  // Construir la URL con los parámetros de la petición GET
  var url = '../controller/putGenUser.php?userId=' + encodeURIComponent(id)  + '&filter=' + encodeURIComponent(filter)+ '&value=' + encodeURIComponent(nombre);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

      getMessage();
      getInternalUsers('unlock');
      
      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
  }
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


function editIntUserStatus(button, id,filter,status) {
  // Obtener el valor del campo de texto correspondiente al botón
  var input = button.previousElementSibling;
 // var nombre = input.value;
 var uid= sessionStorage.getItem('userId');

  if(uid==id){
    
showNotify('¡No puedes Bloquear tu propio usuario!','error');
 }else{

  if(status==1){var confirmMessage = '¿Seguro quieres desbloquear el usuario?';}
  if(status==0){var confirmMessage = '¿Seguro quieres bloquear el usuario?';}
  if(status=="del"){var confirmMessage = '¿Seguro quieres eliminar el usuario?';}
  showConfirmationModalNearButton(confirmMessage, () => {

  // Construir la URL con los parámetros de la petición GET
  var url = '../controller/putGenUser.php?userId=' + encodeURIComponent(id)  + '&filter=' + encodeURIComponent(filter)+ '&value=' + encodeURIComponent(status);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

      getMessage();
      if(status==1 || status=="del"){
        getInternalUsers('unlock');
      }
      if(status==0){
        getInternalUsers('lock');
      }
      
      
      
     
      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
  },button);
  }
}


