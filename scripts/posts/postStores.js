
document.getElementById("postStoressbtn").addEventListener("click", function() {

  
var apiData = {
  "clientId": sessionStorage.getItem('clientNow'),
  "storeName": document.getElementById("sName").value,
  "comments": document.getElementById("sComments").value,
  "storeType": document.getElementById("list-storeType1").value,
  "apiValues":{
    "apiName": "apiCom",
    "apiVersion": "v1",
    "endPoint": "postStore"
  }
  
};
// Construir la URL con los parámetros de la petición GET

const apiInfo = JSON.stringify(apiData);
var url = 'controller/postController.php?data=' + encodeURIComponent(apiInfo);

  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página
      
      document.getElementById("sName").value = "";
      document.getElementById("sComments").value = "";
      document.getElementById("sComments").value = "";
      getMessage();
      var confirmCreateClient = window.confirm("¿Desea crear otra tienda?");

      // Verifica la respuesta del usuario
      if (confirmCreateClient) {
        openModClientStoreCreate();
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



function csvToJsonPostStore(csvData) {
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