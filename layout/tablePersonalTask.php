

<div class="mb-3">
<select class="form-select" aria-label="Default select example" id="filterNow">
  
  <option value="all">Todos</option>
  <option value="created">Creadas</option>
  <option value="start">Iniciadas</option>
  <option value="finished">Finalizadas</option>
  <option value="pause">Pausadas</option>
  <option value="block">Bloqueadas</option>
</select>
</div>


<button type="button" class="btn btn-primary1" id="crearButton123">Filtrar</button>


<table class="table" id ="tablePersonalTask">
  <thead>
    <tr>
    <th scope="col"><i>Acciones</i></th>
      <th scope="col"><i>Tarea</i></th>
      <th scope="col"><i>Inicio</i></th>
      <th scope="col"><i>Entrega</i></th>
      <th scope="col"><i>Recordar(1=sí,2=no)</i></th>
      <th scope="col"><i>Recordatorio</i></th>
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
 async function getPersonalTask(param) {
  
  //const my_profyle = sessionStorage.getItem("profileId");
  //const subdominiopagesmodelshislogs = "https://dev-koiosgateway.lugma.tech/koiosGateway/apiCore/v1/getMySessions/317Mi5bpB2rvGy6K481x/93q89NnAwIUNiOn2mOl5DqbC8/${my_profyle}/${param}";

	const subPersonalTask = `${subDomain}/koiosGateway/apiIntegrations/v1/getPersonalTask/${ranCodetask} ${apiKeytask}/${my_profyletask}/${param}`;

	fetch(subPersonalTask)
   
  .then(response => response.json())
  .then(data => {
    const publicgroupsTableBody = document.querySelector("#tablePersonalTask tbody");
    // Borramos los datos antiguos
    publicgroupsTableBody.innerHTML = "";
    data.task.forEach(schedule => {
      const row = document.createElement("tr");
      row.innerHTML = `
     
   
     
      <td>
      <select class="form-select" aria-label="Default select example" id="rol11" value="${schedule.status}">
  <option selected>${schedule.status}</option>
  <option value="start">Iniciar</option>
  <option value="finished">Finalizar</option>
  <option value="pause">Pausar</option>
  <option value="block">Bloqueo</option>
</select>
      
<button onclick="editarStatusPTask1(this,&quot;${schedule.taskId}&quot;,&quot;${param}&quot;)" class="btn btn-primary1">Estado</button>
    
      <button onclick="editarStatusPTask(this,&quot;${schedule.taskId}&quot;,&quot;del&quot;)" class="btn btn-primary1">Remover</button></td>
    
      <td><input type="text" class="form-control" id="${schedule.taskId}" value="${schedule.taskValue}"> <button onclick="editarPTask(this,&quot;${schedule.taskId}&quot;,&quot;taskValue&quot;,&quot;${param}&quot;)" class="btn btn-primary1">Editar</button></td>
      <td><input type="date" class="form-control" id="${schedule.taskId}" value="${schedule.startDate}"> <button onclick="editarPTask(this,&quot;${schedule.taskId}&quot;,&quot;startDate&quot;,&quot;${param}&quot;)" class="btn btn-primary1">Editar</button></td>
      <td><input type="date" class="form-control" id="${schedule.taskId}" value="${schedule.endDate}"> <button onclick="editarPTask(this,&quot;${schedule.taskId}&quot;,&quot;endDate&quot;,&quot;${param}&quot;)" class="btn btn-primary1">Editar</button></td>
    
     
      <td><input type="text" class="form-control" id="${schedule.taskId}" value="${schedule.isRemember}"> <button onclick="editarPTask(this,&quot;${schedule.taskId}&quot;,&quot;isRemember&quot;,&quot;${param}&quot;)" class="btn btn-primary1">Editar</button></td>
      <td><input type="date" class="form-control" id="${schedule.taskId}" value="${schedule.rememberDate}"> <button onclick="editarPTask(this,&quot;${schedule.taskId}&quot;,&quot;rememberDate&quot;,&quot;${param}&quot;)" class="btn btn-primary1">Editar</button></td>
    
      
       
        
       
        
      `;

      
      

      publicgroupsTableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });



 }
 
 // Llamar a la función para obtener los datos del API
 //getPagesAssignModelsHislogs();
 


	</script>

';
  
?>  

  </tbody>
</table>



<script>








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
      
      getPersonalTask(param);
      
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

  getPersonalTask(nombres);
  document.getElementById("filterNow").value = "Filtro";
  // Construye la URL para la solicitud GET
 
  
  // Realizar la solicitud GET utilizando fetch
 
});
</script>
