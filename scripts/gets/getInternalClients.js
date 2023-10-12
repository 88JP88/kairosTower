
 

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
      <button onclick="editExtClientStatus(this,&quot;${info.clientId}&quot;,&quot;status&quot;,&quot;0&quot;)" class="btn btn-primary1">Bloquear</button>
      <button onclick="createCalendarId(&quot;${info.clientId}&quot;);openModClientConfig();getClientStyle(&quot;${info.clientId}&quot;);getCalendarDays(&quot;${info.clientId}&quot;);" class="btn btn-primary1">Configuración</button>
      </td>
      <td>${info.clientId}</td>
      <td><input type="text" class="form-control" id="${info.clientId}" value="${info.clientName}"> <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;clientName&quot;)" class="btn btn-primary1">Editar</button></td>
      <td><input type="text" class="form-control" id="${info.clientId}" value="${info.comments}"> <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;comments&quot;)" class="btn btn-primary1">Editar</button></td>
      <td>${info.clientType}</td>
      <td>${info.name} ${info.lastName}</td>
      <td>${info.email} / ${info.contact}</td>
      <td><input type="text" class="form-control" id="${info.clientId}" value="${info.isActive}"> <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;isActive&quot;)" class="btn btn-primary1">Editar</button></td>
      <td>
      <div class="password-container">
          <input type="password" class="form-control" id="${info.clientId}" value="${info.key}">
          
          <button class="toggle-password btn btn-primary1" onclick="togglePassword(this)">Mostrar</button>
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
      <button onclick="editExtClientStatus(this,&quot;${info.clientId}&quot;,&quot;status&quot;,&quot;1&quot;)" class="btn btn-primary1">Desbloquear</button>
      <button onclick="editExtClientStatus(this,&quot;${info.clientId}&quot;,&quot;status&quot;,&quot;del&quot;)" class="btn btn-primary1">Remover</button>
      <button onclick="editExtClientStatus(this,&quot;${info.clientId}&quot;,&quot;status&quot;,&quot;delAll&quot;)" class="btn btn-primary1">Remover en cadena</button>
      </td>
      <td>${info.clientId}</td>
      <td><input type="text" class="form-control" id="${info.clientId}" value="${info.clientName}"> <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;clientName&quot;)" class="btn btn-primary1">Editar</button></td>
      <td><input type="text" class="form-control" id="${info.clientId}" value="${info.comments}"> <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;comments&quot;)" class="btn btn-primary1">Editar</button></td>
      <td>${info.clientType}</td>
      <td>${info.name} ${info.lastName}</td>
      <td>${info.email} / ${info.contact}</td>
      <td><input type="text" class="form-control" id="${info.clientId}" value="${info.isActive}"> <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;isActive&quot;)" class="btn btn-primary1">Editar</button></td>
      <td>
      <div class="password-container">
          <input type="password" class="form-control" id="${info.clientId}" value="${info.key}">
          
          <button class="toggle-password btn btn-primary1" onclick="togglePassword(this)">Mostrar</button>
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











    



function editExtClient(button, id,filter) {
  // Obtener el valor del campo de texto correspondiente al botón
  var input = button.previousElementSibling;
  var nombre = input.value;

  // Construir la URL con los parámetros de la petición GET
  var url = 'controller/putExtClient.php?clientId=' + encodeURIComponent(id)  + '&filter=' + encodeURIComponent(filter)+ '&value=' + encodeURIComponent(nombre);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

      getMessage();
      getInternalClients('unlock');
      
      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
}


function editExtClientStatus(button, id,filter,status) {
  // Obtener el valor del campo de texto correspondiente al botón
  var input = button.previousElementSibling;
 // var nombre = input.value;

  // Construir la URL con los parámetros de la petición GET
  var url = 'controller/putExtClient.php?clientId=' + encodeURIComponent(id)  + '&filter=' + encodeURIComponent(filter)+ '&value=' + encodeURIComponent(status);

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
}






async function getInternalClientsList() {

  const reposSelect = document.getElementById("repos-select234");

	fetch(epGetInternalClients+"unlock")
  .then(response => response.json())
  .then(data => {
    data.clients.forEach(info => {
      const option = document.createElement("option");
      option.value = info.clientId;
      option.text = info.clientName;
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