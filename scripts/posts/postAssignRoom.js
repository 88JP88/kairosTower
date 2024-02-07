
document.getElementById("postAssignRoom").addEventListener("click", function() {
  // Obtén los valores de los campos


var selectedAssignmentsString = selectedAssignments.join("|"); // Convierte el array en una cadena con valores separados por "|"

  // Construye la URL para la solicitud GET
   var apiData = {
              "clientId": sessionStorage.getItem('clientNow'),
              "roomId": document.getElementById("list-clientroom").value,
              "userId": document.getElementById("list-internalusers").value,
              "timeId": sessionStorage.getItem('timeNow'),
              "param": "assign",
              "assignments": selectedAssignmentsString,

              "apiValues":{
                "apiName": "apiCompanies",
                "apiVersion": "v1",
                "endPoint": "postAssignRoom"
              }
              
            };
            // Construir la URL con los parámetros de la petición GET
            
            const apiInfo = JSON.stringify(apiData);
            var url = 'controller/postController.php?data=' + encodeURIComponent(apiInfo);
            
  // Realizar la solicitud GET utilizando fetch
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página
    
      selectedAssignments.splice(0, selectedAssignments.length);
      selectedAssignmentsdes.splice(0, selectedAssignmentsdes.length);
      selectedAssignmentselement.splice(0, selectedAssignmentsdes.length);
      
      selectedAssignmentselementbyuser.splice(0, selectedAssignmentselementbyuser.length);
      selectedAssignmentselementbyusernot.splice(0, selectedAssignmentselementbyusernot.length);
     
      const checkboxContainer = document.getElementById("checkbox-container");
      checkboxContainer.innerHTML = ""; 
      getMessage();
      getCalendarTime(sessionStorage.getItem('registNow'));
      getCalendarDaysAssign(sessionStorage.getItem('calendarNow'));
      getClientRoomsList(sessionStorage.getItem('timeNow'));
      getCalendarDays(sessionStorage.getItem('clientNow'));
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
});



