
document.getElementById("postSiteBtn").addEventListener("click", function() {
  // Obtén los valores de los campos
  document.getElementById("loading-container").style.display = "flex";
var apiData = {
  "clientId": sessionStorage.getItem('clientNow'),
  "siteName": document.getElementById("siteName").value,
  "siteComments": document.getElementById("siteComments").value,
  "sitePlace": document.getElementById("list-OSPlace").value,
  "apiValues":{
    "apiName": "apiOS",
    "apiVersion": "v1",
    "endPoint": "postSite"
  }
  
};
// Construir la URL con los parámetros de la petición GET

const apiInfo = JSON.stringify(apiData);
var url = 'controller/postController.php?data=' + encodeURIComponent(apiInfo);

  fetch(url)
    .then(response => {
      getMessage();      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página
    
      
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





function editOSSite(button, clientId,siteId,param,value,reason) {
  // Obtener el valor del campo de texto correspondiente al botón
  document.getElementById("loading-container").style.display = "flex";
  if(reason=="data"){

    var input = button.previousElementSibling;
    var value = input.value;
  }
  
    var apiData = {
      "siteId": siteId,
      "clientId": clientId,
      "param": param,
      "value": value,
      "apiValues":{
        "apiName": "apiOS",
        "apiVersion": "v1",
        "endPoint": "putSite"
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
      
       if(reason=="osdata")
       {
        
const url = window.location.href;
const urlObj = new URL(url);
var place = urlObj.searchParams.get("placeId");
//eraseContainers('placeOSData','placeOSInfo');
        getApiData(getSites,
          {
            'apiService':'apiOS',
            'apiVersion':'v1',
            'endPoint':'getSites'
        },
          {
            'containerData':'placeOSData',
            'containerInfo':'placeOSInfo',
            'modelView':'cardOS',
        },
          {
            'filter':'filter',
            'param':'placeIdCar',
            'value':  place
        }
            );
       }

      

    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
  
  document.getElementById("loading-container").style.display = "none";

}


function editSiteHtml(){
  const urlObj = new URL(url);
      
  editOSSite(this,urlObj.searchParams.get('clientId'),sessionStorage.getItem('siteNow'),'isOrder',true,'osdata');

}

