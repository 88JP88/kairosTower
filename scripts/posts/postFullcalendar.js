
document.getElementById("lectorEvento").addEventListener("click", function() {
 
 
  // Construye la URL para la solicitud GET
  var url = "controller/postFullCalendar.php?" +
           
            "eventName=" + encodeURIComponent(document.getElementById("eventName").value) +
            "&eventDescription=" + encodeURIComponent(document.getElementById("eventDescription").value) +
            "&eventClientId=" + encodeURIComponent(document.getElementById("eventClientName").value) +
            "&dateStart=" + encodeURIComponent(document.getElementById("dateStart").value)+
            "&dateEnd=" + encodeURIComponent(document.getElementById("dateEnd").value)+
            "&urlEvent=" + encodeURIComponent(document.getElementById("urlEvent").value)+
            "&roomEvent=" + encodeURIComponent(document.getElementById("list-clientroom").value);
 

  // Realizar la solicitud GET utilizando fetch
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página
      
    
      getMessage();
      
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
});


