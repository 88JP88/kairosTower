
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

