

<table class="table" id ="tableMySchedule">
  <thead>
    <tr>
    <th scope="col"><i>Hora</i></th>
      <th scope="col"><i>Lunes</i></th>
      <th scope="col"><i>Martes</i></th>
      <th scope="col"><i>Miercoles</i></th>
      <th scope="col"><i>Jueves</i></th>
      <th scope="col"><i>viernes</i></th>
      <th scope="col">Sábado</i></th>
      <th scope="col"><i>Domingo</i></th>
    </tr>
  </thead>
  <tbody>




<?php




	echo '
	<script>
		

 
 // Función para obtener los datos del API
 async function getMySchedule() {
  
  //const my_profyle = sessionStorage.getItem("profileId");
  //const subdominiopagesmodelshislogs = "https://dev-koiosgateway.lugma.tech/koiosGateway/apiCore/v1/getMySessions/317Mi5bpB2rvGy6K481x/93q89NnAwIUNiOn2mOl5DqbC8/${my_profyle}";

	
	fetch(subGetMySchedule)
   
  .then(response => response.json())
  .then(data => {
    const publicgroupsTableBody = document.querySelector("#tableMySchedule tbody");
    // Borramos los datos antiguos
    publicgroupsTableBody.innerHTML = "";
    data.schedule.forEach(schedule => {
      const row = document.createElement("tr");
      row.innerHTML = `
     
   
     
  
      <td><b>${schedule.time}</b></td>
      <td><input type="text" class="form-control" id="${schedule.scheId}" value="${schedule.mon}"> <button onclick="editar(this,&quot;${schedule.scheId}&quot;,&quot;mon&quot;)" class="btn btn-primary1">Editar</button></td>
      <td><input type="text" class="form-control" id="${schedule.scheId}" value="${schedule.tus}"> <button onclick="editar(this,&quot;${schedule.scheId}&quot;,&quot;tus&quot;)" class="btn btn-primary1">Editar</button></td>
      <td><input type="text" class="form-control" id="${schedule.scheId}" value="${schedule.wen}"> <button onclick="editar(this,&quot;${schedule.scheId}&quot;,&quot;wen&quot;)" class="btn btn-primary1">Editar</button></td>
      <td><input type="text" class="form-control" id="${schedule.scheId}" value="${schedule.thu}"> <button onclick="editar(this,&quot;${schedule.scheId}&quot;,&quot;thu&quot;)" class="btn btn-primary1">Editar</button></td>
      <td><input type="text" class="form-control" id="${schedule.scheId}" value="${schedule.fri}"> <button onclick="editar(this,&quot;${schedule.scheId}&quot;,&quot;fri&quot;)" class="btn btn-primary1">Editar</button></td>
      <td><input type="text" class="form-control" id="${schedule.scheId}" value="${schedule.sat}"> <button onclick="editar(this,&quot;${schedule.scheId}&quot;,&quot;sat&quot;)" class="btn btn-primary1">Editar</button></td>
      <td><input type="text" class="form-control" id="${schedule.scheId}" value="${schedule.sun}"> <button onclick="editar(this,&quot;${schedule.scheId}&quot;,&quot;sun&quot;)" class="btn btn-primary1">Editar</button></td>
      
        
       
        
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

function editar(button, id, day) {
  // Obtener el valor del campo de texto correspondiente al botón
  var input = button.previousElementSibling;
  var nombre = input.value;

  // Construir la URL con los parámetros de la petición GET
  var url = 'controller/editMySchedule.php?scheduleId=' + encodeURIComponent(id) + '&day=' + encodeURIComponent(day) + '&value=' + encodeURIComponent(nombre);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página
      
      getMySchedule();
      
      getMessage();
      
 
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

