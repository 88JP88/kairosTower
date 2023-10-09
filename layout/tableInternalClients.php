


<table class="table" id ="tableInternalClients">
  <thead>
    <tr>
    <th scope="col"><i>Acciones</i></th>
      <th scope="col"><i>ID</i></th>
      <th scope="col"><i>Cliente</i></th>
      <th scope="col"><i>Comentarios</i></th>
      <th scope="col"><i>Tipo cliente</i></th>
      <th scope="col"><i>Responsable</i></th>
      <th scope="col"><i>Contacto</i></th>
      <th scope="col"><i>Estado</i></th>
      <th scope="col"><i>Activo</i></th>
      <th scope="col"><i>Key</i></th>
    </tr>
  </thead>
  <tbody>



<script>
const my_profyletask = sessionStorage.getItem("userId");
const ranCodetask = sessionStorage.getItem("ranCode");
const apiKeytask = sessionStorage.getItem("key");
const subDomain = sessionStorage.getItem("subDomain");
//const subPersonalTask = `https://dev-koiosgateway.lugma.tech/koiosGateway/apiIntegrations/v1/getPersonalTask/${ranCodetask} ${apiKeytask}/${my_profyletask}`;

  </script>


<?php


/*

	echo '
	<script>
		

 
 // Función para obtener los datos del API
 async function getInternalClients() {
  
  //const my_profyle = sessionStorage.getItem("profileId");
  //const subdominiopagesmodelshislogs = "https://dev-koiosgateway.lugma.tech/koiosGateway/apiCore/v1/getMySessions/317Mi5bpB2rvGy6K481x/93q89NnAwIUNiOn2mOl5DqbC8/${my_profyle}/${param}";

	const subInternalClients = `${subDomain}/kairosGateway/apiCore/v1/getInternalClients/${ranCodetask} ${apiKeytask}/`;

	fetch(subInternalClients)
   
  .then(response => response.json())
  .then(data => {
    const publicgroupsTableBody = document.querySelector("#tableInternalClients tbody");
    // Borramos los datos antiguos
    publicgroupsTableBody.innerHTML = "";
    data.clients.forEach(schedule => {
      const row = document.createElement("tr");
      row.innerHTML = `
     
    
      <td><button onclick="editarStatusPTask(this,&quot;${schedule.clientId}&quot;,&quot;del&quot;)" class="btn btn-primary1">Remover</button></td>
      <td>${schedule.clientId}</td>
      <td>${schedule.clientName}</td>
      <td>${schedule.comments}</td>
      <td>${schedule.clientType}</td>
      <td>${schedule.name} ${schedule.lastName}</td>
      <td>${schedule.email} / ${schedule.contact}</td>
      
      <td>${schedule.status}</td>
      <td>${schedule.isActive}</td>
      <td>${schedule.key}</td>
        
       
        
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
  */
?>  


  </tbody>
</table>



<script src="../scripts/prueba.js">

let pruebas=getInternalClients();






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
