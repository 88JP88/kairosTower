
document.getElementById("postElement").addEventListener("click", function() {
 
            var apiData = {
              "clientId": sessionStorage.getItem('clientNow'),
              "name": document.getElementById("eName").value,
              "caract": document.getElementById("eCaract").value,
              "comments": document.getElementById("eCommentse").value,
              "brand": document.getElementById("eBrand").value,
              "type": document.getElementById("eType").value,
              "img": document.getElementById("eImg").value,
              "value": document.getElementById("eValue").value,

              "apiValues":{
                "apiName": "apiCompanies",
                "apiVersion": "v1",
                "endPoint": "postClientElement"
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
      
      document.getElementById("eName").value = "";
      document.getElementById("eCaract").value = "";
      document.getElementById("eCommentse").value = "";
      document.getElementById("eBrand").value = "";
      document.getElementById("eType").value = "";
      document.getElementById("eImg").value = "";
      document.getElementById("eValue").value = "";
      getMessage();
      var confirmCreateClient = window.confirm("¿Desea crear otro elemento?");

      // Verifica la respuesta del usuario
      if (confirmCreateClient) {
        openModClientElementsCreate();
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


