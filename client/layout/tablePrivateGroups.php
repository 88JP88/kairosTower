

<div class="mb-3">
<select class="form-select" aria-label="Default select example" id="filterNow1">
  <option selected>Filtrar</option>
  <option value="isPublic">Públicos asignados</option>
  <option value="isPrivate">Privados asignados</option>
  <option value="isPublicNotAssignation">Públicos no asignados</option>
  <option value="moderator">Moderador</option>
  <option value="owner">Creador</option>
  <option value="hide">Bloqueados</option>
  <option value="block">En los que estoy bloqueado</option>
</select>
</div>


<button type="button" class="btn btn-primary1" id="crearButton1234">Filtrar</button>


<table class="table" id ="tablepgroups">
  <thead>
    <tr>
    <th scope="col"><i>Acciones</i></th>
      <th scope="col"><i>Grupo</i></th>
      <th scope="col"><i>Comentarios</i></th>
      <th scope="col"><i title="1=SÍ, 0=NO">Público(1=sí,2=no)</i></th>
      <th scope="col"><i title="1=NO, 0=SÍ">Permiso unirse(1=no,2=sí)</i></th>
      <th scope="col"><i title="1=NO, 0=SÍ">Permiso publicar(1=no,2=sí)</i></th>
      <th scope="col"><i>Moderador</i></th>
      <th scope="col"><i>Integrantes</i></th>
      <th scope="col"><i title="Cantidad máxima de integrantes">Max... Integrantes</i></th>
    </tr>
  </thead>
  <tbody>






<?php




	echo '
	<script>
		

 
 // Función para obtener los datos del API
 async function getGroups(param) {
  const subprivategroups = `${subDomain}/koiosGateway/apiIntegrations/v1/getGroups/${ranCodetask} ${apiKeytask}/${my_profyletask}/${param}`;

 if(param=="owner" || param=="hide"){
	
	fetch(subprivategroups)
   
  .then(response => response.json())
  .then(data => {
    const publicgroupsTableBody = document.querySelector("#tablepgroups tbody");
    // Borramos los datos antiguos
    publicgroupsTableBody.innerHTML = "";
    data.groups.forEach(schedule => {
      const row = document.createElement("tr");
      row.innerHTML = `
     
   
     
      <td>
      
      

<a href="group.php?groupId=${schedule.groupId}&profileId=${schedule.profileId}" class="btn btn-primary1" target="_blank">Ingresar</a>

<button onclick="openModGroupUsers();userGroups(&quot;${schedule.groupId}&quot;);" class="btn btn-primary1">Integrantes</button>
<button onclick="openModTopicAccept();userTopics(&quot;${schedule.groupId}&quot;);" class="btn btn-primary1">Tópicos</button>
<button onclick="openModRequest();userRequest(&quot;${schedule.groupId}&quot;);" class="btn btn-primary1">Solicitudes</button>
</td>
    
   
    
      
      
      <td><input type="text" class="form-control" id="${schedule.groupId}" value="${schedule.groupName}" title="${schedule.groupName}"> <button onclick="editarGroup(this,&quot;${schedule.groupId}&quot;,&quot;groupName&quot;,&quot;${param}&quot;)" class="btn btn-primary1">Editar</button></td>
      
      <td><input type="text" class="form-control" id="${schedule.groupId}" value="${schedule.comments}" title="${schedule.comments}"> <button onclick="editarGroup(this,&quot;${schedule.groupId}&quot;,&quot;comments&quot;,&quot;${param}&quot;)" class="btn btn-primary1">Editar</button></td>
      
     
      <td><input type="text" class="form-control" id="${schedule.groupId}" value="${schedule.isPublic}" title="${schedule.isPublic}"> <button onclick="editarGroup(this,&quot;${schedule.groupId}&quot;,&quot;isPublic&quot;,&quot;${param}&quot;)" class="btn btn-primary1">Editar</button></td>
      
     
      <td><input type="text" class="form-control" id="${schedule.groupId}" value="${schedule.freeJoin}" title="${schedule.freeJoin}"> <button onclick="editarGroup(this,&quot;${schedule.groupId}&quot;,&quot;freeJoin&quot;,&quot;${param}&quot;)" class="btn btn-primary1">Editar</button></td>
      
     
      <td><input type="text" class="form-control" id="${schedule.groupId}" value="${schedule.freePublic}" title="${schedule.freePublic}"> <button onclick="editarGroup(this,&quot;${schedule.groupId}&quot;,&quot;freePublic&quot;,&quot;${param}&quot;)" class="btn btn-primary1">Editar</button></td>
      
     
      <td><input type="text" class="form-control" id="${schedule.groupId}" value="${schedule.modId}" title="${schedule.modId}"> <button onclick="editarGroup(this,&quot;${schedule.groupId}&quot;,&quot;moderId&quot;,&quot;${param}&quot;)" class="btn btn-primary1">Editar</button></td>
      
     
      <td>${schedule.membersQty}</td>
      <td><input type="text" class="form-control" id="${schedule.groupId}" value="${schedule.maxQty}" title="${schedule.maxQty}"> <button onclick="editarGroup(this,&quot;${schedule.groupId}&quot;,&quot;maxQty&quot;,&quot;${param}&quot;)" class="btn btn-primary1">Editar</button></td>
      <td><input type="text" class="form-control" id="${schedule.groupId}" value="${schedule.isActive}" title="${schedule.isActive}"> <button onclick="editarGroup(this,&quot;${schedule.groupId}&quot;,&quot;isActive&quot;,&quot;${param}&quot;)" class="btn btn-primary1">Editar</button></td>
    
     
       
        
       
        
      `;

      
      

      publicgroupsTableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });
}

if(param=="block"){
	
	fetch(subprivategroups)
   
  .then(response => response.json())
  .then(data => {
    const publicgroupsTableBody = document.querySelector("#tablepgroups tbody");
    // Borramos los datos antiguos
    publicgroupsTableBody.innerHTML = "";
    data.groups.forEach(schedule => {
      const row = document.createElement("tr");
      row.innerHTML = `
     
   
     
      <td>
      
      

      <button onclick="sendPet(this,&quot;${schedule.groupId}&quot;,&quot;${schedule.ownerId}&quot;,&quot;unblock&quot;)" class="btn btn-primary1">Solicitud para desbloquear</button> </td>
    
   
    
      <td>${schedule.groupName}</td>
      <td>${schedule.comments}</td>
      <td>${schedule.isPublic}</td>
      <td>${schedule.freeJoin}</td>
      <td>${schedule.freePublic}</td>
      <td>${schedule.modId}</td>
       
      <td>${schedule.membersQty}</td>
      <td>${schedule.maxQty}</td>
        
       
        
      `;

      
      

      publicgroupsTableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });
}

if(param=="moderator"){
	
	fetch(subprivategroups)
   
  .then(response => response.json())
  .then(data => {
    const publicgroupsTableBody = document.querySelector("#tablepgroups tbody");
    // Borramos los datos antiguos
    publicgroupsTableBody.innerHTML = "";
    data.groups.forEach(schedule => {
      const row = document.createElement("tr");
      row.innerHTML = `
     
   
     
      <td>
      
      

<a href="group.php?groupId=${schedule.groupId}&profileId=${schedule.profileId}" class="btn btn-primary1" target="_blank">Ingresar</a>
<button onclick="openModTopicAccept();userTopics(&quot;${schedule.groupId}&quot;);" class="btn btn-primary1">Tópicos</button>
<button onclick="openModRequest();userRequest(&quot;${schedule.groupId}&quot;);" class="btn btn-primary1">Solicitudes</button>
</td>
    
   
    
      <td>${schedule.groupName}</td>
      <td>${schedule.comments}</td>
      <td>${schedule.isPublic}</td>
      <td>${schedule.freeJoin}</td>
      <td>${schedule.freePublic}</td>
      <td>${schedule.modId}</td>
       
        
      <td>${schedule.membersQty}</td>
      <td>${schedule.maxQty}</td>
       
        
      `;

      
      

      publicgroupsTableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });
}




if(param=="isPrivate" || param=="isPublic"){
	
	fetch(subprivategroups)
   
  .then(response => response.json())
  .then(data => {
    const publicgroupsTableBody = document.querySelector("#tablepgroups tbody");
    // Borramos los datos antiguos
    publicgroupsTableBody.innerHTML = "";
    data.groups.forEach(schedule => {
      const row = document.createElement("tr");
      row.innerHTML = `
     
   
     
      <td>
      
      <a href="group.php?groupId=${schedule.groupId}&profileId=${schedule.profileId}" class="btn btn-primary1" target="_blank">Ingresar</a>
   
    
      <td>${schedule.groupName}</td>
      <td>${schedule.comments}</td>
      <td>${schedule.isPublic}</td>
      <td>${schedule.freeJoin}</td>
      <td>${schedule.freePublic}</td>
      <td>${schedule.modId}</td>
       
      <td>${schedule.membersQty}</td>
      <td>${schedule.maxQty}</td>
        
       
        
      `;

      
      

      publicgroupsTableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });
}



if(param=="isPublicNotAssignation" || param=="isPrivateNotAssignation"){
	
	fetch(subprivategroups)
   
  .then(response => response.json())
  .then(data => {
    const publicgroupsTableBody = document.querySelector("#tablepgroups tbody");
    // Borramos los datos antiguos
    publicgroupsTableBody.innerHTML = "";
    data.groups.forEach(schedule => {
      const row = document.createElement("tr");
      row.innerHTML = `
     
   
     
      <td>
      
      
<button onclick="sendPet(this,&quot;${schedule.groupId}&quot;,&quot;${schedule.ownerId}&quot;,&quot;toJoin&quot;)" class="btn btn-primary1">Solicitud para unirte</button></td>
    
   
    
      <td>${schedule.groupName}</td>
      <td>${schedule.comments}</td>
      <td>${schedule.isPublic}</td>
      <td>${schedule.freeJoin}</td>
      <td>${schedule.freePublic}</td>
      <td>${schedule.modId}</td>
       
        
      <td>${schedule.membersQty}</td>
      <td>${schedule.maxQty}</td>
       
        
      `;

      
      

      publicgroupsTableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });
}






 }
 
 // Llamar a la función para obtener los datos del API
 //getPagesAssignModelsHislogs();
 


	</script>

';
  
?>  

  </tbody>
</table>



<script>








function editarGroup(button, id,dbType,param) {
  // Obtener el valor del campo de texto correspondiente al botón
  var input = button.previousElementSibling;
  var nombre = input.value;

  // Construir la URL con los parámetros de la petición GET
  var url = 'controller/editGroups.php?groupId=' + encodeURIComponent(id)  + '&value=' + encodeURIComponent(nombre)+ '&tvalue=' + encodeURIComponent(dbType);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página
      
      getGroups(param);
      
      obtenerVariablesPHP();
 
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
      
      getPersonalTask(param);
      
      obtenerVariablesPHP();
      
 
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
      
      getPersonalTask(param);
      
      obtenerVariablesPHP();
      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
}




function sendPet(button, id,param,type) {
  // Obtener el valor del campo de texto correspondiente al botón
  var input = button.previousElementSibling;
 // var nombre = input.value;

  // Construir la URL con los parámetros de la petición GET
  var url = 'controller/sendJoinRequest.php?groupId=' + encodeURIComponent(id)  + '&ownerId=' + encodeURIComponent(param)  + '&type=' + encodeURIComponent(type);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página
      
      //getPersonalTask(param);
      
      obtenerVariablesPHP();
      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
}

function obtenerVariablesPHP() {
  fetch('layout/getPHPVariables.php')
    .then(response => response.json())
    .then(data => {
      // Aquí obtienes los nuevos valores de las variables PHP en el objeto "data"
      // Puedes acceder a los valores como data.mensaje y data.error
      // Por ejemplo:
      var nuevoMensaje = data.mensaje;
      var nuevoError = data.error;

    

      if(nuevoError==="true"){
        
        var re="success";
        
      }
      if(nuevoError==="false"){
      
        var re="error";
        
      }

      mostrarNotificacion(nuevoMensaje, re);
     

    })
    .catch(error => {
      console.error('Error al obtener las variables PHP:', error);
    });
}
</script>


<script>
document.getElementById("crearButton1234").addEventListener("click", function() {
  // Obtén los valores de los campos
  var nombres = document.getElementById("filterNow1").value;

  getGroups(nombres);
  document.getElementById("filterNow1").value = "Filtro";
  // Construye la URL para la solicitud GET
 
  
  // Realizar la solicitud GET utilizando fetch
 
});
</script>
