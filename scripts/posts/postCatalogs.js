
document.getElementById("postCatalogbtn").addEventListener("click", function() {
  // Obtén los valores de los campos

            var apiData = {
              "clientId": sessionStorage.getItem('clientNow'),
              "productId": document.getElementById("list-productListstadd").value,
              "categoryId": document.getElementById("list-categoryListstadd").value,
              "stock": document.getElementById("cstock").value,
              "secStock": document.getElementById("cstocks").value,
              "minQty": document.getElementById("cminqty").value,
              "maxQty": document.getElementById("cmaxqty").value,
              "storeId": document.getElementById("list-storeListstadd").value,
              "outPrice": document.getElementById("coutprice").value,
              "promoId": document.getElementById("cpromo").value,
              "discount": document.getElementById("cdiscount").value,
              "unit": document.getElementById("list-unidad").value,
              "readUnit": document.getElementById("list-unidadcalculo").value,
              "unitQty": document.getElementById("cunitqty").value,
              "unitUnit": document.getElementById("list-unitunit").value,

              "apiValues":{
                "apiName": "apiCom",
                "apiVersion": "v1",
                "endPoint": "postCatalog"
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
      
      document.getElementById("cstock").value = "";
      document.getElementById("cstocks").value = "";
      document.getElementById("cminqty").value = "";
      document.getElementById("cmaxqty").value = "";
      document.getElementById("coutprice").value = "";
      document.getElementById("cpromo").value = "";
      document.getElementById("cdiscount").value = "";
      document.getElementById("cunitqty").value = "";
    
      getMessage();
      var confirmCreateClient = window.confirm("¿Desea crear otro catálogo?");

      // Verifica la respuesta del usuario
      if (confirmCreateClient) {
        openModClientCatalogCreate();
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



function csvToJson(csvData) {
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
  var url = "controller/postCatalogBulk.php?"+
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






function editClientCatalog(button, clientId,catalogId,param,value,reason) {
  // Obtener el valor del campo de texto correspondiente al botón
  document.getElementById("loading-container").style.display = "flex";

  if(reason=="data"){

    var input = button.previousElementSibling;
    var value = input.value;

    var apiData = {
      "catalogId": catalogId,
      "clientId": clientId,
      "param": param,
      "value": value,
      "apiValues":{
        "apiName": "apiCom",
        "apiVersion": "v1",
        "endPoint": "putCatalog"
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
      
      getClientCatalogs('basic|'+catalogId,'catalogId',catalogId);

      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
  }
  if(reason=="isActive"){

    

    var apiData = {
      "catalogId": catalogId,
      "clientId": clientId,
      "param": param,
      "value": value,
      "apiValues":{
        "apiName": "apiCom",
        "apiVersion": "v1",
        "endPoint": "putCatalog"
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
      getClientCatalogs('basic|'+catalogId,'catalogId',catalogId);
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
  }
  if(reason=="del"){
    var confirmMessage = '¿Seguro quieres eliminar el elemento?';
    showConfirmationModalNearButton(confirmMessage, () => {


      var apiData = {
        "catalogId": catalogId,
        "clientId": clientId,
        "param": param,
        "value": value,
        "apiValues":{
          "apiName": "apiCom",
          "apiVersion": "v1",
          "endPoint": "putCatalog"
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
      
      getClientProducts('filter',param,value);
       
      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
  },button);
  }
  document.getElementById("loading-container").style.display = "none";


}





function csvToJsonPutCatalog(csvData) {
  const lines1 = csvData.split('\n');
  const result1 = [];

  const headers = lines1[0].split(',');
  for (let i = 1; i < lines1.length; i++) {
      const obj1 = {};
      const currentLine = lines1[i].split(',');

      for (let j = 0; j < headers.length; j++) {
          obj1[headers[j]] = currentLine[j];
      }

      const namedObj1 = { "item": obj1 }; // Asignar el nombre "item" al objeto
      result1.push(namedObj1);
  }

  const encodedResult1 = encodeURIComponent(JSON.stringify(result1)); // Convertir a JSON y luego codificar
  var clientIdNow=sessionStorage.getItem('clientNow');
  var url = "controller/putCatalogBulk.php?"+
  "bulk=" + encodedResult1+
  "&clientId=" + encodeURIComponent(clientIdNow);

  // Realizar la solicitud GET utilizando fetch
  fetch(url)
      .then(response => {
          getMessage();
          console.log(encodedResult1);
          return encodedResult1;
      })
      .catch(error => {
          console.log('Error en la petición:', error);
      });
}


