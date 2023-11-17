

  

function assignelementbyuserroomadmin(room,user,assign) {
  // Obtén los valores de los campos
 
  
var clientIdNow=sessionStorage.getItem('clientNow');
var timeId=sessionStorage.getItem('timeNow');
var rId=sessionStorage.getItem('registNow');
var cId=sessionStorage.getItem('calendarNow');

var selectedAssignmentsString = selectedAssignmentselementbyusernot.join("|"); // Convierte el array en una cadena con valores separados por "|"

  // Construye la URL para la solicitud GET
  var url = "controller/postAssignRoom.php?" +
            "clientId=" + encodeURIComponent(clientIdNow) +
            "&roomId=" + encodeURIComponent(room) +
            "&userId=" + encodeURIComponent(user+"|"+assign)+
            "&timeId=" + encodeURIComponent(timeId)+
            "&param=" + encodeURIComponent('asigelementroom')+
            "&assignments=" + encodeURIComponent(selectedAssignmentsString); // Agrega los assignments a la URL

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
     
      getMessage();
      getClientElemntCheck1(room,'usedbyclient',room,room);
      getClientElemntCheck1(room,'notusedbyclient',room,room);
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });



};


