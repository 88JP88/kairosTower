



document.getElementById("postAssignRoom1").addEventListener("click", function() {
  // Obtén los valores de los campos
  var room = document.getElementById("list-clientroom1").value;
  var user = document.getElementById("list-internalusers1").value;
  
  const url1 = window.location.href;

  // Crear un objeto URL a partir de la URL actual
  const urlObj = new URL(url1);
  
  // Obtener el valor del parámetro "parametro1"
  const clientIdNow = urlObj.searchParams.get("clientId");
  
//var clientIdNow=sessionStorage.getItem('clientNow');
var timeId=sessionStorage.getItem('timeNow');
var rId=sessionStorage.getItem('registNow');
var cId=sessionStorage.getItem('calendarNow');

var selectedAssignmentsString = selectedAssignments.join("|"); // Convierte el array en una cadena con valores separados por "|"

  // Construye la URL para la solicitud GET
  var url = "controller/postAssignRoom.php?" +
            "clientId=" + encodeURIComponent(clientIdNow) +
            "&roomId=" + encodeURIComponent(room) +
            "&userId=" + encodeURIComponent(user)+
            "&timeId=" + encodeURIComponent(timeId)+
            "&param=" + encodeURIComponent('assign')+
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
     
      const checkboxContainer = document.getElementById("checkbox-containerz");
      checkboxContainer.innerHTML = ""; 
      getMessage();
    
     
      console.log("here");
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
});


