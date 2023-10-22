
document.getElementById("postAssignRoom").addEventListener("click", function() {
  // Obtén los valores de los campos
  var room = document.getElementById("list-clientroom").value;
  var user = document.getElementById("list-internalusers").value;
  
var clientIdNow=sessionStorage.getItem('clientNow');
var timeId=sessionStorage.getItem('timeNow');
var rId=sessionStorage.getItem('registNow');
var cId=sessionStorage.getItem('calendarNow');
  // Construye la URL para la solicitud GET
  var url = "controller/postAssignRoom.php?" +
            "clientId=" + encodeURIComponent(clientIdNow) +
            "&roomId=" + encodeURIComponent(room) +
            "&userId=" + encodeURIComponent(user)+
            "&timeId=" + encodeURIComponent(timeId)+
            "&param=" + encodeURIComponent('assign');

  // Realizar la solicitud GET utilizando fetch
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página
      
      
      getMessage();
      getCalendarTime(rId);
      getCalendarDaysAssign(cId);
      getClientRoomsList(timeId);
      getCalendarDays(clientIdNow);
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
});


