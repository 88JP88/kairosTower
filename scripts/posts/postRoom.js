
document.getElementById("postRoom").addEventListener("click", function() {

            

            var apiData = {
              "clientId": sessionStorage.getItem('clientNow'),
              "comments": document.getElementById("cRoomc").value,

              "apiValues":{
                "apiName": "apiCompanies",
                "apiVersion": "v1",
                "endPoint": "postClientRoom"
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
      
      document.getElementById("cRoomc").value = "";
      getMessage();

      var confirmCreateClient = window.confirm("¿Desea crear otro room?");

      // Verifica la respuesta del usuario
      if (confirmCreateClient) {
        openModClientRoomsCreate();
          // Usuario hizo clic en "Aceptar", puedes ejecutar tu código aquí
         // console.log("No se ejecutó el código para crear otro cliente.");
      } else {
       
      }
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
});


