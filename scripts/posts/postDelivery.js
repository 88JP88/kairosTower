
document.getElementById("postDeliverybtn").addEventListener("click", function() {
  // Obtén los valores de los campos
  document.getElementById("loading-container").style.display = "flex";
var apiData = {
  "clientId": sessionStorage.getItem('clientNow'),
  "deliveryName": document.getElementById("delNamedel").value,
  "deliveryLastName": document.getElementById("dellNamedel").value,
  "deliveryMail": document.getElementById("delMaildel").value,
  "deliveryContact": document.getElementById("delContactdel").value,
  "apiValues":{
    "apiName": "apiClient",
    "apiVersion": "v1",
    "endPoint": "postDelivery"
  }
  
};
// Construir la URL con los parámetros de la petición GET

const apiInfo = JSON.stringify(apiData);
var url = 'controller/postController.php?data=' + encodeURIComponent(apiInfo);

  fetch(url)
    .then(response => {
      getMessage();      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página
      document.getElementById("delNamedel").value = "";
      document.getElementById("dellNamedel").value = "";
      document.getElementById("delMaildel").value = "";
      document.getElementById("delContactdel").value = "";
      
      
      var confirmCreateClient = window.confirm("¿Desea crear otro repartidor?");

      // Verifica la respuesta del usuario
      if (confirmCreateClient) {
        openModClientDeliveryCreate();
          // Usuario hizo clic en "Aceptar", puedes ejecutar tu código aquí
         // console.log("No se ejecutó el código para crear otro cliente.");
      } else {
       
      }
      
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
    document.getElementById("loading-container").style.display = "none";

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