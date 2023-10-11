

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Palabras de búsqueda</label>
  <input type="text" class="form-control" id="reponame1" placeholder="Ingresa palabras clave">
</div>


<div class="mb-3">
<select class="form-select" aria-label="Default select example" id="filterNowRepos">
  
  <option value="public">Repos públicos</option>
  <option value="owner">Mis repos</option>
  <option value="filter">Filtro personalizado</option>
</select>
</div>

<button type="button" class="btn btn-primary1" id="filterRepos">Filtrar</button>






<script>
  // Agregar un evento click al botón "Filtrar"
  const filterButton = document.getElementById("filterRepos");
  filterButton.addEventListener("click", function() {
    // Obtener el valor del campo de texto
    const searchText = document.getElementById("reponame1").value;
    const searchText1 = document.getElementById("filterNowRepos").value;
    
    // Llamar a la función getRepos con el valor obtenido como parámetro
    getRepos(searchText1,searchText);
  });
</script>



<table class="table" id ="tableRepos">
  <thead>
    <tr>
    <th scope="col"><i>Acciones</i></th>
      <th scope="col"><i>Repositorio</i></th>
      <th scope="col"><i>Comentarios</i></th>
      <th scope="col"><i>contenido</i></th>
      <th scope="col"><i>Recursos</i></th>
  
      <th scope="col"><i>Versión</i></th>
      <th scope="col"><i>Propietario</i></th>
      <th scope="col"><i>Público</i></th>
      <th scope="col"><i>Tipo</i></th>
    </tr>
  </thead>
  <tbody>



<script>
const my_profyletask = sessionStorage.getItem("profileId");
const ranCodetask = sessionStorage.getItem("ranCode");
const apiKeytask = sessionStorage.getItem("key");
const subDomain = sessionStorage.getItem("subDomain");
//const subPersonalTask = `https://dev-koiosgateway.lugma.tech/koiosGateway/apiIntegrations/v1/getPersonalTask/${ranCodetask} ${apiKeytask}/${my_profyletask}`;

  </script>


<?php




	echo '
	<script>
		

 
 // Función para obtener los datos del API
 async function getRepos(filter,param) {
  






  //const my_profyle = sessionStorage.getItem("profileId");
  //const subdominiopagesmodelshislogs = "https://dev-koiosgateway.lugma.tech/koiosGateway/apiCore/v1/getMySessions/317Mi5bpB2rvGy6K481x/93q89NnAwIUNiOn2mOl5DqbC8/${my_profyle}/${param}";

	


if(filter=="filter"){
  const subrepos = `${subDomain}/koiosGateway/apiIntegrations/v1/getRepos/${ranCodetask} ${apiKeytask}/${my_profyletask}/${filter}/${param}/`;


	fetch(subrepos)
   
  .then(response => response.json())
  .then(data => {
    const publicgroupsTableBody = document.querySelector("#tableRepos tbody");
    // Borramos los datos antiguos
    publicgroupsTableBody.innerHTML = "";
    data.repos.forEach(schedule => {
      const row = document.createElement("tr");
      row.innerHTML = `
     
   
     
      <td>
      
      <a href="repo.php?repoId=${schedule.repoId}" class="btn btn-primary1" target="_blank">Verificar</a>
      </td>
    
      <td>${schedule.repoName}</td>
      <td>${schedule.comments}</td>
      <td>${schedule.content}</td>
      <td><a href="${schedule.links}" target="_blank">${schedule.links}</a></td>

      <td>${schedule.repoVersion}</td>
      <td>${schedule.userName}</td>
      <td>${schedule.isPublic}</td>
      <td>${schedule.repoType}</td>
      
       
        
       
        
      `;

      
      

      publicgroupsTableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });


}

if(filter=="owner"){

  const subrepos = `${subDomain}/koiosGateway/apiIntegrations/v1/getRepos/${ranCodetask} ${apiKeytask}/${my_profyletask}/${filter}/na/`;

	fetch(subrepos)
   
  .then(response => response.json())
  .then(data => {
    const publicgroupsTableBody = document.querySelector("#tableRepos tbody");
    // Borramos los datos antiguos
    publicgroupsTableBody.innerHTML = "";
    data.repos.forEach(schedule => {
      const row = document.createElement("tr");
      row.innerHTML = `
     
   
     
      <td>
      
      
      <a href="repo.php?repoId=${schedule.repoId}" class="btn btn-primary1" target="_blank">Verificar</a>
      <button onclick="editRepo(this,&quot;${schedule.repoId}&quot;,&quot;del&quot;)" class="btn btn-primary1">Eliminar</button>
     
      </td>
    
      <td><input type="text" class="form-control" id="${schedule.repoId}" value="${schedule.repoName}" title="${schedule.repoName}"> <button onclick="editRepo(this,&quot;${schedule.repoId}&quot;,&quot;repoName&quot;)" class="btn btn-primary1">Editar</button></td>
  
      <td><input type="text" class="form-control" id="${schedule.repoId}" value="${schedule.comments}" title="${schedule.comments}"> <button onclick="editRepo(this,&quot;${schedule.repoId}&quot;,&quot;comments&quot;)" class="btn btn-primary1">Editar</button></td>
      <td><input type="text" class="form-control" id="${schedule.repoId}" value="${schedule.content}" title="${schedule.content}"> <button onclick="editRepo(this,&quot;${schedule.repoId}&quot;,&quot;content&quot;)" class="btn btn-primary1">Editar</button></td>
  
      
      <td><a href="${schedule.links}" target="_blank">${schedule.links}</a>
      <input type="text" class="form-control" id="${schedule.repoId}" value="${schedule.links}" title="${schedule.links}"> <button onclick="editRepo(this,&quot;${schedule.repoId}&quot;,&quot;links&quot;)" class="btn btn-primary1">Editar</button>
      </td>

      <td>${schedule.repoVersion}</td>
      <td>${schedule.userName}</td>
      <td><input type="text" class="form-control" id="${schedule.repoId}" value="${schedule.isPublic}" title="${schedule.isPublic}"> <button onclick="editRepo(this,&quot;${schedule.repoId}&quot;,&quot;isPublic&quot;)" class="btn btn-primary1">Editar</button></td>
  
   
      <td>${schedule.repoType}</td>
       
        
       
        
      `;

      
      

      publicgroupsTableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });


}

if(filter=="public"){

  const subrepos = `${subDomain}/koiosGateway/apiIntegrations/v1/getRepos/${ranCodetask} ${apiKeytask}/${my_profyletask}/${filter}/na/`;

	fetch(subrepos)
   
  .then(response => response.json())
  .then(data => {
    const publicgroupsTableBody = document.querySelector("#tableRepos tbody");
    // Borramos los datos antiguos
    publicgroupsTableBody.innerHTML = "";
    data.repos.forEach(schedule => {
      const row = document.createElement("tr");
      row.innerHTML = `
     
   
     
      <td>
      
      
      <a href="repo.php?repoId=${schedule.repoId}" class="btn btn-primary1" target="_blank">Verificar</a>
      </td>
    
      <td>${schedule.repoName}</td>
      <td>${schedule.comments}</td>
      <td>${schedule.content}</td>
      <td><a href="${schedule.links}" target="_blank">${schedule.links}</a></td>

      <td>${schedule.repoVersion}</td>
      <td>${schedule.userName}</td>
      <td>${schedule.isPublic}</td>
      
      <td>${schedule.repoType}</td>
        
       
        
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








function editRepo(button, id,dbType) {
  // Obtener el valor del campo de texto correspondiente al botón
  var input = button.previousElementSibling;
  var nombre = input.value;

  // Construir la URL con los parámetros de la petición GET
  var url = 'controller/editRepo.php?repoId=' + encodeURIComponent(id)  + '&value=' + encodeURIComponent(nombre)+ '&tvalue=' + encodeURIComponent(dbType);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página
      
      getRepos('owner','');
      
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
      
      getInternalClients();
      
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
      
      getInternalClients();
      
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
document.getElementById("crearButton123").addEventListener("click", function() {
  // Obtén los valores de los campos
  var nombres = document.getElementById("filterNow").value;

  getInternalClients();
  document.getElementById("filterNow").value = "Filtro";
  // Construye la URL para la solicitud GET
 
  
  // Realizar la solicitud GET utilizando fetch
 
});
</script>
