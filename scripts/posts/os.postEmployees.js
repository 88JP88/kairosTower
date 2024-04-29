
document.getElementById("postEmployeesOSBtn").addEventListener("click", function() {
  // Obtén los valores de los campos
  document.getElementById("loading-container").style.display = "flex";

 
var apiData = {
  "clientId": sessionStorage.getItem('clientNow'),
  "employeeName": document.getElementById("employeeOSName").value,
  "employeeComments": document.getElementById("employeeOSComments").value,
  "employeeContact": document.getElementById("employeeOSContact").value,
  "employeeMail": document.getElementById("employeeOSMail").value,
  "employeePlace": document.getElementById("list-OSPlaceOwner").value,
  "employeeRol": document.getElementById("list-OSemployeeRol").value,
  "employeeLevel": document.getElementById("list-OSemployeeType").value,
  "employeeImg": document.getElementById("employeeOSImg").value,
  "apiValues":{
    "apiName": "apiOS",
    "apiVersion": "v1",
    "endPoint": "postEmployee"
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





function editOSEmployee(button, clientId,employeeId,param,value,reason) {
  // Obtener el valor del campo de texto correspondiente al botón
  document.getElementById("loading-container").style.display = "flex";
  if(reason=="data"){

    var input = button.previousElementSibling;
    var value = input.value;

  
  }
  var apiData = {
    "employeeId": employeeId,
    "clientId": clientId,
    "param": param,
    "value": value,
    "apiValues":{
      "apiName": "apiOS",
      "apiVersion": "v1",
      "endPoint": "putEmployee"
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
    
    getApiData(getEmployeesOS,
      {
        'apiService':'apiOS',
        'apiVersion':'v1',
        'endPoint':'getEmployees'
    },
      {
        'containerData':'containerOSData',
        'containerInfo':'containerOSInfo',
        'modelView':'table',
    },
      {
        'filter':'all',
        'param':'all',
        'value':'all'
    }
        );

    

  })
  .catch(error => {
    // Aquí puedes manejar los errores en caso de que la petición falle
    console.log('Error en la petición:', error);
  });
  document.getElementById("loading-container").style.display = "none";

}


