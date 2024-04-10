
document.getElementById("postCatOSBtn").addEventListener("click", function() {
  // Obtén los valores de los campos
  document.getElementById("loading-container").style.display = "flex";

 
var apiData = {
  "clientId": sessionStorage.getItem('clientNow'),
  "categoryName": document.getElementById("catOSName").value,
  "categoryComments": document.getElementById("catOSComments").value,
  "categoryImg": document.getElementById("catOSImg").value,
  "categoryParent": document.getElementById("list-OSCategories").value,
  "apiValues":{
    "apiName": "apiOS",
    "apiVersion": "v1",
    "endPoint": "postCategory"
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
      
      
      var confirmCreateClient = window.confirm("¿Desea crear otra ubicación?");

      // Verifica la respuesta del usuario
      if (confirmCreateClient) {
       // openModClientDeliveryCreate();
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





function editOSCategory(button, clientId,categoryId,param,value,reason) {
  // Obtener el valor del campo de texto correspondiente al botón
  document.getElementById("loading-container").style.display = "flex";
  if(reason=="data"){

    var input = button.previousElementSibling;
    var value = input.value;

    var apiData = {
      "categoryId": categoryId,
      "clientId": clientId,
      "param": param,
      "value": value,
      "apiValues":{
        "apiName": "apiOS",
        "apiVersion": "v1",
        "endPoint": "putCategory"
      }
      
    };
  // Construir la URL con los parámetros de la petición GET

  const apiInfo = JSON.stringify(apiData);
  var url = 'controller/postController.php?data=' + encodeURIComponent(apiInfo);
  //var url = 'controller/putClientDelivery.php?data=' + apiData;

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

      getMessage();
      
        getClientDelivery('filter',param,value);

      

    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
  }
  if(reason=="isActive"){

    
    var apiData = {
      "deliveryId": customerId,
      "clientId": clientId,
      "param": param,
      "value": value,
      "apiValues":{
        "apiName": "apiClient",
        "apiVersion": "v1",
        "endPoint": "putDelivery"
      }
      
    };
  // Construir la URL con los parámetros de la petición GET

  const apiInfo = JSON.stringify(apiData);
  var url = 'controller/postController.php?data=' + encodeURIComponent(apiInfo);
 
  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

      getMessage();
      
      getClientCustomers('filter',param,value);
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
  }
  if(reason=="del"){
    var confirmMessage = '¿Seguro quieres eliminar el elemento?';
    showConfirmationModalNearButton(confirmMessage, () => {
param="del";
var apiData = {
  "deliveryId": customerId,
  "clientId": clientId,
  "param": param,
  "value": value,
  "apiValues":{
    "apiName": "apiClient",
    "apiVersion": "v1",
    "endPoint": "putDelivery"
  }
  
};
// Construir la URL con los parámetros de la petición GET

const apiInfo = JSON.stringify(apiData);
var url = 'controller/postController.php?data=' + encodeURIComponent(apiInfo);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

      getMessage();
      
      getClientDelivery('filter','clientId',clientId);
      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
  },button);
  }
  document.getElementById("loading-container").style.display = "none";

}


