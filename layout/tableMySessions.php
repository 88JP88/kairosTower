

<table class="table" id ="tableMySession">
  <thead>
    <tr>
    <th scope="col"><i>Acciones</i></th>
      <th scope="col"><i>ID</i></th>
      <th scope="col"><i>Navegador</i></th>
      <th scope="col"><i>Fecha/Hora</i></th>
      <th scope="col"><i>IP</i></th>
    </tr>
  </thead>
  <tbody>



<script>
const my_profyle1 = sessionStorage.getItem("userId");
const apiKey1 = sessionStorage.getItem("key");
const rancode = sessionStorage.getItem("ranCode");
const subDomain2 = sessionStorage.getItem("subDomain");
const subdominiopagesmodelshislogs = `${subDomain2}/kairosGateway/apiCore/v1/getMySessionsInternal/${rancode}/${apiKey1}/${my_profyle1}`;

  </script>

<?php




	echo '
	<script>
		

 
 // Función para obtener los datos del API
 async function getPagesAssignModelsHislogs() {
  
  //const my_profyle = sessionStorage.getItem("profileId");
  //const subdominiopagesmodelshislogs = "https://dev-koiosgateway.lugma.tech/koiosGateway/apiCore/v1/getMySessions/317Mi5bpB2rvGy6K481x/93q89NnAwIUNiOn2mOl5DqbC8/${my_profyle}";

	
	fetch(subdominiopagesmodelshislogs)
   
  .then(response => response.json())
  .then(data => {
    const publicgroupsTableBody = document.querySelector("#tableMySession tbody");
    // Borramos los datos antiguos
    publicgroupsTableBody.innerHTML = "";
    data.sessions.forEach(student => {
      const row = document.createElement("tr");
      row.innerHTML = `
     
   
     
      <td><button onclick="cerrarSession(this,&quot;${student.sessionId}&quot)" class="btn btn-primary1">Cerrar</button></td>
      
      <td>${student.sessionId}</td>
      <td>${student.browser}</td>
      <td>${student.logInDate} ${student.logInTime}</td>
      
      <td>${student.ipId}</td>
        
        
       
        
      `;

      
      

      publicgroupsTableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });



 }
 
 // Llamar a la función para obtener los datos del API
 getPagesAssignModelsHislogs();
 


	</script>

';
  
?>  

  </tbody>
</table>


<script>
function cerrarSession(button, id) {
  var sessionNow = sessionStorage.getItem('sessionId');
  //console.log('sessionNow:', sessionNow);
 // console.log('id:', id);
  if (sessionNow === id) {
    mostrarNotificacion('¡No puedes cerrar tu propia sesión!', 'error');
  } else {
    // Construir la URL con los parámetros de la petición GET
    var url = 'controller/forceCloseSession.php?sessionId=' + encodeURIComponent(id);

    // Realizar la petición GET al archivo PHP
    fetch(url)
      .then(response => {
        // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
        // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

        getPagesAssignModelsHislogs();

         getPHPVariables();
      })
      .catch(error => {
        // Aquí puedes manejar los errores en caso de que la petición falle
        console.log('Error en la petición:', error);
      });
  }
}

</script>

