
document.getElementById("postRoom").addEventListener("click", function() {
  // Obtén los valores de los campos
  var room = document.getElementById("cRoomc").value;
  
var clientIdNow=sessionStorage.getItem('clientNow');

  // Construye la URL para la solicitud GET
  var url = "../controller/postRoom.php?" +
            "clientId=" + encodeURIComponent(clientIdNow) +
            "&comments=" + encodeURIComponent(room);

  // Realizar la solicitud GET utilizando fetch
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página
      
      document.getElementById("cRoomc").value = "";
      getMessage();
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
});


