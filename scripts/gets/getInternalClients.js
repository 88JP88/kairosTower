
 

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
      <button onclick="editarStatusPTask(this,&quot;${info.clientId}&quot;,&quot;del&quot;)" class="btn btn-primary1">Bloquear</button>
      </td>
      <td>${info.clientId}</td>
      <td><input type="text" class="form-control" id="${info.clientId}" value="${info.clientName}"> <button onclick="editar(this,&quot;${info.clientId}&quot;,&quot;clientName&quot;)" class="btn btn-primary1">Editar</button></td>
      <td><input type="text" class="form-control" id="${info.clientId}" value="${info.comments}"> <button onclick="editar(this,&quot;${info.clientId}&quot;,&quot;comments&quot;)" class="btn btn-primary1">Editar</button></td>
      <td>${info.clientType}</td>
      <td>${info.name} ${info.lastName}</td>
      <td>${info.email} / ${info.contact}</td>
      <td><input type="text" class="form-control" id="${info.clientId}" value="${info.isActive}"> <button onclick="editar(this,&quot;${info.clientId}&quot;,&quot;clientName&quot;)" class="btn btn-primary1">Editar</button></td>
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
      <button onclick="editarStatusPTask(this,&quot;${info.clientId}&quot;,&quot;unlock&quot;)" class="btn btn-primary1">Desbloquear</button>
      <button onclick="editarStatusPTask(this,&quot;${info.clientId}&quot;,&quot;del&quot;)" class="btn btn-primary1">Remover</button>
      <button onclick="editarStatusPTask(this,&quot;${info.clientId}&quot;,&quot;delall&quot;)" class="btn btn-primary1">Remover en cadena</button>
      </td>
      <td>${info.clientId}</td>
      <td><input type="text" class="form-control" id="${info.clientId}" value="${info.clientName}"> <button onclick="editar(this,&quot;${info.clientId}&quot;,&quot;clientName&quot;)" class="btn btn-primary1">Editar</button></td>
      <td><input type="text" class="form-control" id="${info.clientId}" value="${info.comments}"> <button onclick="editar(this,&quot;${info.clientId}&quot;,&quot;comments&quot;)" class="btn btn-primary1">Editar</button></td>
      <td>${info.clientType}</td>
      <td>${info.name} ${info.lastName}</td>
      <td>${info.email} / ${info.contact}</td>
      <td><input type="text" class="form-control" id="${info.clientId}" value="${info.isActive}"> <button onclick="editar(this,&quot;${info.clientId}&quot;,&quot;clientName&quot;)" class="btn btn-primary1">Editar</button></td>
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











    



function editarPTask(button, id,dbType,param) {
  // Obtener el valor del campo de texto correspondiente al botón
  var input = button.previousElementSibling;
  var nombre = input.value;

  // Construir la URL con los parámetros de la petición GET
  var url = 'controller/editPersonalTask.php?taskId=' + encodeURIComponent(id)  + '&value=' + encodeURIComponent(nombre)+ '&tvalue=' + encodeURIComponent(dbType);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página
      
      getInternalClients();
      
      getMessage();
      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
}





function editarStatusPTask(button, id,value,param) {
  // Obtener el valor del campo de texto correspondiente al botón
  var input = button.previousElementSibling;
  //var nombre = input.value;

  // Construir la URL con los parámetros de la petición GET
  var url = 'controller/updateStatusPersonalTask.php?taskId=' + encodeURIComponent(id)  + '&value=' + encodeURIComponent(value);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página
      
      getInternalClients();
      
      getMessage();
      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
}


function editarStatusPTask1(button, id,param) {
  // Obtener el valor del campo de texto correspondiente al botón
  var input = button.previousElementSibling;
  var nombre = input.value;

  // Construir la URL con los parámetros de la petición GET
  var url = 'controller/updateStatusPersonalTask.php?taskId=' + encodeURIComponent(id)  + '&value=' + encodeURIComponent(nombre);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página
      
      getInternalClients();
      
      getMessage();
      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
}


document.getElementById("crearButton123").addEventListener("click", function() {
  // Obtén los valores de los campos
  var nombres = document.getElementById("filterNow").value;

  getInternalClients();
  document.getElementById("filterNow").value = "Filtro";
  // Construye la URL para la solicitud GET
 
  
  // Realizar la solicitud GET utilizando fetch
 
});
