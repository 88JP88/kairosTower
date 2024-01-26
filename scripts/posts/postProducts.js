
document.getElementById("postProductsbtn").addEventListener("click", function() {


            var apiData = {
              "clientId": sessionStorage.getItem('clientNow'),
              "productName": document.getElementById("pName").value,
              "description": document.getElementById("pDesc").value,
              "ean1": document.getElementById("pean1").value,
              "ean2": document.getElementById("pean2").value,
              "sku": document.getElementById("psku").value,
              "productType": document.getElementById("ptype").value,
              "providerId": document.getElementById("pprovider").value,
              "imgUrl": document.getElementById("pimageurl").value,
              "techSpef": document.getElementById("pspc").value,
              "inPrice": document.getElementById("pvalue").value,

              "apiValues":{
                "apiName": "apiCom",
                "apiVersion": "v1",
                "endPoint": "postProduct"
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
      
      document.getElementById("pName").value = "";
      document.getElementById("pDesc").value = "";
      document.getElementById("pean1").value = "";
      document.getElementById("pean2").value = "";
      document.getElementById("psku").value = "";
      document.getElementById("ptype").value = "";
      document.getElementById("pprovider").value = "";
      document.getElementById("pimageurl").value = "";
      document.getElementById("pspc").value = "";
      document.getElementById("pvalue").value = "";
      getMessage();
      var confirmCreateClient = window.confirm("¿Desea crear otro producto?");

      // Verifica la respuesta del usuario
      if (confirmCreateClient) {
        openModClientProductsCreate();
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



function csvToJsonPostProduct(csvData) {
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
  var url = "controller/postProductBulk.php?"+
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