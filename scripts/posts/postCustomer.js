
document.getElementById("postCustomerbtn").addEventListener("click", function() {
  // Obtén los valores de los campos
  

            var apiData = {
              "clientId": sessionStorage.getItem('clientNow'),
              "customerName": document.getElementById("cusName").value,
              "customerLastName": document.getElementById("cuslName").value,
              "customerMail": document.getElementById("cusMail").value,
              "customerPhone": document.getElementById("cusNumber").value,
              "customerType": document.getElementById("cusType").value,
              "apiValues":{
                "apiName": "apiClient",
                "apiVersion": "v1",
                "endPoint": "postCustomer"
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
      getMessage();
      document.getElementById("cusName").value = "";
      document.getElementById("cuslName").value = "";
      document.getElementById("cusMail").value = "";
      document.getElementById("cusNumber").value = "";
      document.getElementById("cusType").value = "";
      
      var confirmCreateClient = window.confirm("¿Desea crear otro cliente?");

      // Verifica la respuesta del usuario
      if (confirmCreateClient) {
        openModClientCustomerCreate();
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



function csvToJsonPostCustomer(csvData) {
  const lines = csvData.split('\n');
  const result = [];

  const headers = lines[0].split(',');
  for (let i = 1; i < lines.length; i++) {
      const obj = {};
      const currentLine = lines[i].split(',');

      for (let j = 0; j < headers.length; j++) {
          obj[headers[j]] = currentLine[j];
      }

      const namedObj = { "item": obj }; // Asignar el nombre "item" al objeto
      result.push(namedObj);
  }

  const encodedResult = encodeURIComponent(JSON.stringify(result)); // Convertir a JSON y luego codificar
  var clientIdNow=sessionStorage.getItem('clientNow');
  var url = "controller/postStoreBulk.php?"+
  "bulk=" + encodedResult+
  "&clientId=" + encodeURIComponent(clientIdNow);

  // Realizar la solicitud GET utilizando fetch
  fetch(url)
      .then(response => {
          getMessage();
          console.log(encodedResult);
          return encodedResult;
      })
      .catch(error => {
          console.log('Error en la petición:', error);
      });
}