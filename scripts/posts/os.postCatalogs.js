
document.getElementById("postCatalogOSBtn").addEventListener("click", function() {
  // Obtén los valores de los campos
  document.getElementById("loading-container").style.display = "flex";

  
var apiData = {
  "clientId": sessionStorage.getItem('clientNow'),
  "placeId": document.getElementById("list-OSPlaceList").value,
  "productId": document.getElementById("list-OSProductList").value,
  "categoryId": document.getElementById("list-OSCategoryList").value,
  "catalogComments": document.getElementById("catalogOSComments").value,
  "stock": parseFloat(document.getElementById("catalogOSStock").value),
  "price": parseFloat(document.getElementById("catalogOSValue").value),
  "secStock": parseFloat(document.getElementById("catalogOSSStock").value),
  "maxQty": parseFloat(document.getElementById("catalogOSMinqty").value),
  "minQty": parseFloat(document.getElementById("catalogOSMaxqty").value),
  "isDiscount": document.getElementById("catalogOSIsdiscount").value,
  "discount": parseFloat(document.getElementById("catalogOSDiscount").value),
  "isPromo": document.getElementById("catalogOSIspromo").value,
  "promo": document.getElementById("catalogOSPromo").value,
  "isStocked": document.getElementById("catalogOSIsstocked").value,
  "isInternal": document.getElementById("catalogOSIsinternal").value,

  "apiValues":{
    "apiName": "apiOS",
    "apiVersion": "v1",
    "endPoint": "postCatalog"
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





function editOSCatalog(button, clientId,catalogId,param,value,reason) {
  // Obtener el valor del campo de texto correspondiente al botón
  document.getElementById("loading-container").style.display = "flex";
  if(reason=="data"){

    var input = button.previousElementSibling;
    var value = input.value;

   
  }
 
  var apiData = {
    "catalogId": catalogId,
    "clientId": clientId,
    "param": param,
    "value": value,
    "apiValues":{
      "apiName": "apiOS",
      "apiVersion": "v1",
      "endPoint": "putCatalog"
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
  
  document.getElementById("loading-container").style.display = "none";

}


