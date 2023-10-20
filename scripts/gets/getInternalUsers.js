
 async function getInternalUsers(param) {
  if(param=="unlock"){

    document.getElementById("loading-container").style.display = "flex";
    fetch(epGetInternalUsers+param)
   
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
      <div class="edit-container"><input type="text" class="form-control" id="${info.userId}" value="${info.isActive}"><button onclick="editIntUser(this,&quot;${info.userId}&quot;,&quot;isActive&quot;)" class="btn btn-primary1 edit-button" title="EDITAR"><i class="fas fa-edit"></i></button></div></td>
        
        
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
    fetch(epGetInternalUsers+param)
   
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
      <div class="edit-container"><input type="text" class="form-control" id="${info.userId}" value="${info.isActive}"><button onclick="editIntUser(this,&quot;${info.userId}&quot;,&quot;isActive&quot;)" class="btn btn-primary1 edit-button" title="EDITAR"><i class="fas fa-edit"></i></button></div></td>
     
        
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
  var url = 'controller/putIntUser.php?userId=' + encodeURIComponent(id)  + '&filter=' + encodeURIComponent(filter)+ '&value=' + encodeURIComponent(nombre);

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


function editIntUserStatus(button, id,filter,status) {
  // Obtener el valor del campo de texto correspondiente al botón
  var input = button.previousElementSibling;
 // var nombre = input.value;
 var uid= sessionStorage.getItem('userId');

  if(uid==id){
    
showNotify('¡No puedes Bloquear tu propio usuario!','error');
 }else{
  // Construir la URL con los parámetros de la petición GET
  var url = 'controller/putIntUser.php?userId=' + encodeURIComponent(id)  + '&filter=' + encodeURIComponent(filter)+ '&value=' + encodeURIComponent(status);

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
  }
}


