
document.getElementById("postProductOSBtn").addEventListener("click", function() {
  // Obtén los valores de los campos
  document.getElementById("loading-container").style.display = "flex";

  if(document.getElementById("list-OSProductType").value=="product"){
    var pType="product";
    var pusint=document.getElementById("list-OSProductUnit").value;
  }
  if(document.getElementById("list-OSProductType").value=="service"){
    var pType="service";
    var pusint=document.getElementById("list-OSServiceUnit").value;
  }
var apiData = {
  "clientId": sessionStorage.getItem('clientNow'),
  "productName": document.getElementById("productOSName").value,
  "productComments": document.getElementById("productOSComments").value,
  "productImg": document.getElementById("productOSImg").value,
  "productValue": document.getElementById("productOSValue").value,
  "productCaracts": document.getElementById("productOSCaracts").value,
  "productType": pType,
  "productUnit": pusint,
  "productUnitCaracts": document.getElementById("productOSCaractsUnit").value,
  "productBydiscount": document.getElementById("list-OSProductDiscount").value,
  "productStockByUnit": document.getElementById("productOSStock").value,
  "productSku": document.getElementById("productOSSku").value,
  "productEan1": document.getElementById("productOSEan1").value,
  "productEan2": document.getElementById("productOSEan2").value,
  "apiValues":{
    "apiName": "apiOS",
    "apiVersion": "v1",
    "endPoint": "postProduct"
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





function editOSProduct(button, clientId,productId,param,value,reason) {
  // Obtener el valor del campo de texto correspondiente al botón
  document.getElementById("loading-container").style.display = "flex";
  if(reason=="data"){

    var input = button.previousElementSibling;
    var value = input.value;

    var apiData = {
      "productId": productId,
      "clientId": clientId,
      "param": param,
      "value": value,
      "apiValues":{
        "apiName": "apiOS",
        "apiVersion": "v1",
        "endPoint": "putProduct"
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


