





// async function getApiData(getApiInfo,apiName,apiVersion,endPoint,contaiderData,containerInfo,filter,param,value) {
//  // document.getElementById("loading-container").style.display = "flex";
//  document.getElementById("loading-container").style.display = "flex";

//  const url = window.location.href;

//  // Crear un objeto URL a partir de la URL actual
//  const urlObj = new URL(url);
 
//  // Obtener el valor del parámetro "parametro1"
//  var st = urlObj.searchParams.get("clientId");
 
//  // Verificar si la variable st existe
//  if (st !== null) {
//      // La variable st existe y tiene un valor asignado
//     // console.log("La variable st existe y su valor es: " + st);
//      var clientId=st;
//  } else {
//      // La variable st no existe o tiene un valor null
//     // console.log("La variable st no existe o está vacía.");
//      var clientId=sessionStorage.getItem('clientNow');
//  }

//   var apiData = {
   
    
//       "clientId":clientId,
//       "filter": filter,
//       "param": param,
//       "value": value
    
    
//   };
//   var serviceName="kairosGateway";
  
//   // Construir la URL con los parámetros de la petición GET
  
//   const apiInfo = JSON.stringify(apiData);
//   fetch(sessionStorage.getItem('subDomain') +"/"+ serviceName+"/"+apiName+"/"+apiVersion+"/"+endPoint+"/"+sessionStorage.getItem('ranCode')+" "+sessionStorage.getItem('key')+"/"+apiInfo)     
//    .then(response => response.json())
//       .then(data => {
        
//         document.getElementById("loading-container").style.display = "flex";

//         getApiInfo(data,contaiderData,containerInfo);
//         document.getElementById("loading-container").style.display = "none";

//       })
//       .catch(error => {
//           console.error("Error:", error);
//           document.getElementById("loading-container").style.display = "none";
//       });

// }


function getApiData(getApiInfo, apiName, apiVersion, endPoint, contaiderData, containerInfo, filter, param, value) {
  return new Promise((resolve, reject) => {
      document.getElementById("loading-container").style.display = "flex";

      const url = window.location.href;
      const urlObj = new URL(url);
      var st = urlObj.searchParams.get("clientId");
      var clientId;

      if (st !== null) {
          clientId = st;
      } else {
          clientId = sessionStorage.getItem('clientNow');
      }

      var apiData = {
          "clientId": clientId,
          "filter": filter,
          "param": param,
          "value": value
      };

      var serviceName = "kairosGateway";
      const apiInfo = JSON.stringify(apiData);

      fetch(sessionStorage.getItem('subDomain') + "/" + serviceName + "/" + apiName + "/" + apiVersion + "/" + endPoint + "/" + sessionStorage.getItem('ranCode') + " " + sessionStorage.getItem('key') + "/" + apiInfo)
          .then(response => response.json())
          .then(data => {
              document.getElementById("loading-container").style.display = "none";
              getApiInfo(data, contaiderData, containerInfo);
              resolve(data); // Resuelve la promesa con los datos
          })
          .catch(error => {
              console.error("Error:", error);
              document.getElementById("loading-container").style.display = "none";
              reject(error); // Rechaza la promesa con el error
          });
  });
}

function getApiDataPromise(getApiInfo, apiName, apiVersion, endPoint, contaiderData, containerInfo, filter, param, value) {
// Uso de la función getApiData como una promesa
getApiData(getApiInfo, apiName, apiVersion, endPoint, contaiderData, containerInfo, filter, param, value)
  .then(data => {
      // Manejar el éxito de la promesa
      console.log("Datos recibidos:", data);
  })
  .catch(error => {
      // Manejar el error de la promesa
      console.error("Error:", error);
  });

}



    
document.getElementById("filtercatalogs").addEventListener("click", function() {
  // Obtén los valores de los campos
  var param = document.getElementById("repos-catalogClient").value;
  var value = document.getElementById("keywordsearchcatalog").value;
  
  //getClientCatalogs(param+'|param','param',value);
  getApiData(getCatalogs,'apiCom','v1','getCatalogs','containerCatalogsData','containerCatalogsInfo',param+'|param','param',value);

});


document.getElementById("searchcatalogs").addEventListener("click", function() {
  // Obtén los valores de los campos
  var param = document.getElementById("repos-catalogClient").value;
  var value = document.getElementById("keywordsearchcatalog").value;
  
  //getClientCatalogs('browser|param','param',value);
  getApiData(getCatalogs,'apiCom','v1','getCatalogs','containerCatalogsData','containerCatalogsInfo','browser|param','param',value);

});



document.getElementById("filtercatalogsbystore").addEventListener("click", function() {
  // Obtén los valores de los campos
  var param = document.getElementById("list-storesListstoreq").value;
  var value = document.getElementById("keywordsearchcatalog").value;
  
  // getClientCatalogs('filter|'+param,'param',value);
  getApiData(getCatalogs,'apiCom','v1','getCatalogs','containerCatalogsData','containerCatalogsInfo','filter|'+param,'param',value);

});



document.getElementById("filtercatalogsbystoresimple").addEventListener("click", function() {
  // Obtén los valores de los campos
  var param = document.getElementById("list-storesListstoreq").value;
  var value = document.getElementById("keywordsearchcatalog").value;
  
 // getClientCatalogs('store|'+param,'param','param');
  getApiData(getCatalogs,'apiCom','v1','getCatalogs','containerCatalogsData','containerCatalogsInfo','store|'+param,'param','param');
});

function openPopup(idelemento) {
  var popup = document.getElementById(idelemento);
  popup.style.display = "block";
}

// Función para cerrar el popup
function closePopup(idelemento) {
  var popup = document.getElementById(idelemento);
  popup.style.display = "none";
}

// Event listener para el ícono de información





// Define una función para mostrar el modal de confirmación cerca del botón
function showConfirmationModalNearButton(message, onConfirm, button) {
  const modalContent = document.createElement('div');
  modalContent.className = 'confirm-modal-content-near-button';

  const messageElement = document.createElement('p');
  messageElement.textContent = message;

  const confirmButton = document.createElement('button');
  confirmButton.textContent = 'Aceptar';
  confirmButton.className = 'confirm-button';

  const cancelButton = document.createElement('button');
  cancelButton.textContent = 'Cancelar';
  cancelButton.className = 'cancel-button';

  // Agrega los elementos al modal
  modalContent.appendChild(messageElement);
  modalContent.appendChild(confirmButton);
  modalContent.appendChild(cancelButton);
  document.body.appendChild(modalContent);

  // Calcula la posición del modal cerca del botón
  const buttonRect = button.getBoundingClientRect();
  const modalRect = modalContent.getBoundingClientRect();

  // Calcula la posición derecha del botón
  const buttonRight = buttonRect.left + buttonRect.width;

  // Calcula la posición del modal para que esté a la derecha del botón
  const top = buttonRect.top + window.scrollY;
  const left = buttonRight + 350; // Agrega un margen a la derecha del botón

  modalContent.style.top = top + 'px';
  modalContent.style.left = left + 'px';

  // Agrega eventos a los botones
  confirmButton.addEventListener('click', () => {
    onConfirm();
    document.body.removeChild(modalContent);
  });

  cancelButton.addEventListener('click', () => {
    document.body.removeChild(modalContent);
  });
}


function editClientProduct(button, clientId,productId,param,value,reason) {
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
        "apiName": "apiCom",
        "apiVersion": "v1",
        "endPoint": "putProduct"
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
      
      //  getClientProducts('filter',param,value);
      getApiData(getProducts,'apiCom','v1','getProducts','containerProductsData','containerProductsInfo','all','all','all');
      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
  }
  if(reason=="isActive"){

    

  // Construir la URL con los parámetros de la petición GET
  var apiData = {
    "prductId": productId,
    "clientId": clientId,
    "param": param,
    "value": value,
    "apiValues":{
      "apiName": "apiCom",
      "apiVersion": "v1",
      "endPoint": "putProduct"
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
      
       // getClientProducts('filter',param,value);
       getApiData(getProducts,'apiCom','v1','getProducts','containerProductsData','containerProductsInfo','all','all','all');
 
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
        "prductId": productId,
        "clientId": clientId,
        "param": param,
        "value": value,
        "apiValues":{
          "apiName": "apiCom",
          "apiVersion": "v1",
          "endPoint": "putProduct"
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
      
     // getClientProducts('filter',param,value);
     getApiData(getProducts,'apiCom','v1','getProducts','containerProductsData','containerProductsInfo','all','all','all');
      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
  },button);
  }
  document.getElementById("loading-container").style.display = "none";


}

function editClientStore(button, clientId,productId,param,value,reason) {
  // Obtener el valor del campo de texto correspondiente al botón
  document.getElementById("loading-container").style.display = "flex";

  if(reason=="data"){

    var input = button.previousElementSibling;
    var value = input.value;
    var apiData = {
      "storeId": productId,
      "clientId": clientId,
      "param": param,
      "value": value,
      "apiValues":{
        "apiName": "apiCom",
        "apiVersion": "v1",
        "endPoint": "putStore"
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
      
        //getClientStores('filter',param,value);
        getApiData(getStores,'apiCom','v1','getStores','containerStoresData','containerStoresInfo','all','all','all');

      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
  }
  if(reason=="isActive"){

    
    var apiData = {
      "storeId": productId,
      "clientId": clientId,
      "param": param,
      "value": value,
      "apiValues":{
        "apiName": "apiCom",
        "apiVersion": "v1",
        "endPoint": "putStore"
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
      
       // getClientProducts('filter',param,value);
       getApiData(getStores,'apiCom','v1','getStores','containerStoresData','containerStoresInfo','all','all','all');

 
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
        "storeId": productId,
        "clientId": clientId,
        "param": param,
        "value": value,
        "apiValues":{
          "apiName": "apiCom",
          "apiVersion": "v1",
          "endPoint": "putStore"
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
      
     // getClientProducts('filter',param,value);
     getApiData(getStores,'apiCom','v1','getStores','containerStoresData','containerStoresInfo','all','all','all');

      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
  },button);
  }
  document.getElementById("loading-container").style.display = "none";


}


function editClientCustomer(button, clientId,customerId,param,value,reason) {
  // Obtener el valor del campo de texto correspondiente al botón
  document.getElementById("loading-container").style.display = "flex";

  if(reason=="data"){


    var input = button.previousElementSibling;
    var value = input.value;
    var apiData = {
      "customerId": customerId,
      "clientId": clientId,
      "param": param,
      "value": value,
      "apiValues":{
        "apiName": "apiClient",
        "apiVersion": "v1",
        "endPoint": "putCustomer"
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
  if(reason=="isActive"){

    

    var apiData = {
      "customerId": customerId,
      "clientId": clientId,
      "param": param,
      "value": value,
      "apiValues":{
        "apiName": "apiClient",
        "apiVersion": "v1",
        "endPoint": "putCustomer"
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

      var apiData = {
        "customerId": customerId,
        "clientId": clientId,
        "param": param,
        "value": value,
        "apiValues":{
          "apiName": "apiClient",
          "apiVersion": "v1",
          "endPoint": "putCustomer"
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
  },button);
  }
 
  document.getElementById("loading-container").style.display = "none";

}


function editClientDelivery(button, clientId,customerId,param,value,reason) {
  // Obtener el valor del campo de texto correspondiente al botón
  document.getElementById("loading-container").style.display = "flex";
  if(reason=="data"){

    var input = button.previousElementSibling;
    var value = input.value;

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
        "endPoint": "putProduct"
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
        "endPoint": "putProduct"
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
          "endPoint": "putProduct"
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


function editClientCategorie(button, clientId,catalogId,param,value,reason) {
  // Obtener el valor del campo de texto correspondiente al botón
  document.getElementById("loading-container").style.display = "flex";

  if(reason=="data"){

    var input = button.previousElementSibling;
    var value = input.value;
    var apiData = {
      "categoryId": catalogId,
      "clientId": clientId,
      "param": param,
      "value": value,
      "apiValues":{
        "apiName": "apiCom",
        "apiVersion": "v1",
        "endPoint": "putCategorie"
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
      console.log(catalogId+" "+value);
      getClientCategories('filter','catId',catalogId);

      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
  }
  if(reason=="isActive"){

    
    var apiData = {
      "categoryId": catalogId,
      "clientId": clientId,
      "param": param,
      "value": value,
      "apiValues":{
        "apiName": "apiCom",
        "apiVersion": "v1",
        "endPoint": "putCategorie"
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
      getClientCategories('filter','catId',catalogId);
 
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
        "categoryId": catalogId,
        "clientId": clientId,
        "param": param,
        "value": value,
        "apiValues":{
          "apiName": "apiCom",
          "apiVersion": "v1",
          "endPoint": "putCategorie"
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
      
      getClientCategories('filter',param,value);
       
      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
  },button);
  }
 
  document.getElementById("loading-container").style.display = "none";

}

function createCheckbox(info) {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "assignCheckbox"; // Asigna un nombre a los checkboxes
  checkbox.value = info.elementId; // Asigna un valor (puedes usar un identificador único)
  checkbox.addEventListener("change", handleCheckboxChange); // Agrega un manejador de eventos para el cambio

  const label = document.createElement("label");
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(info.elementName+" $"+info.amount));
  label.classList.add("custom-checkbox-label"); // Agrega una clase CSS al label

  return label;
}

function createCheckbox1(info) {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "assignCheckboxelement"; // Asigna un nombre a los checkboxes
  checkbox.value = info.elementId; // Asigna un valor (puedes usar un identificador único)
  checkbox.addEventListener("change", handleCheckboxChangeAssignElement); // Agrega un manejador de eventos para el cambio

  const label = document.createElement("label");
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(info.elementName+" $"+info.amount));

  label.classList.add("custom-checkbox-label"); // Agrega una clase CSS al label
  return label;
}

function createCheckbox3(info) {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "assignCheckboxelementbyadmin"; // Asigna un nombre a los checkboxes
  checkbox.value = info.elementId; // Asigna un valor (puedes usar un identificador único)
  checkbox.addEventListener("change", handleCheckboxChangeAssignElementbyuser); // Agrega un manejador de eventos para el cambio

  const label = document.createElement("label");
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(info.elementName+" / "+info.comments));

  label.classList.add("custom-checkbox-label"); // Agrega una clase CSS al label
  return label;
}

function createCheckbox4(info) {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "assignCheckboxelementbyadminnot"; // Asigna un nombre a los checkboxes
  checkbox.value = info.elementId; // Asigna un valor (puedes usar un identificador único)
  checkbox.addEventListener("change", handleCheckboxChangeAssignElementbyusernot); // Agrega un manejador de eventos para el cambio

  const label = document.createElement("label");
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(info.elementName+" / "+info.comments));

  label.classList.add("custom-checkbox-label"); // Agrega una clase CSS al label
  return label;
}

async function getClientElemntCheck(filter,param,ids,ids1) {
  
  document.getElementById("loading-container").style.display = "flex";
if(param=="assign"){

  var param=sessionStorage.getItem('clientNow');
  fetch(epGetClientElements + param+"/free/"+filter+"/"+ids+"/"+ids1)
      .then(response => response.json())
      .then(data => {
        
          const checkboxContainer = document.getElementById("checkbox-container");
        
          checkboxContainer.innerHTML = ""; // Borra los checkboxes antiguos

          data.clientElement.forEach(info => {
              const checkbox = createCheckbox(info);
              checkboxContainer.appendChild(checkbox);
          });

          document.getElementById("loading-container").style.display = "none";
      })
      .catch(error => {
          console.error("Error:", error);
          document.getElementById("loading-container").style.display = "none";
      });

}if(param="notassign"){
  

  var param=sessionStorage.getItem('clientNow');
  fetch(epGetClientElements + param+"/assign/"+filter+"/"+ids+"/"+ids1)
      .then(response => response.json())
      .then(data => {
        
          const checkboxContainer = document.getElementById("checkbox-desa"+filter);
        
          checkboxContainer.innerHTML = ""; // Borra los checkboxes antiguos

          data.clientElement.forEach(info => {
              const checkbox = createCheckbox1(info);
              checkboxContainer.appendChild(checkbox);
          });

          document.getElementById("loading-container").style.display = "none";
      })
      .catch(error => {
          console.error("Error:", error);
          document.getElementById("loading-container").style.display = "none";
      });

    }
    if(param="usedbyclient"){
  

      var param=sessionStorage.getItem('clientNow');
      fetch(epGetClientElements + param+"/usedbyclient/"+filter+"/"+ids+"/"+ids1)
          .then(response => response.json())
          .then(data => {
            
              const checkboxContainer = document.getElementById("checkbox-roomid"+filter);
            
              checkboxContainer.innerHTML = ""; // Borra los checkboxes antiguos
    
              data.clientElement.forEach(info => {
                  const checkbox = createCheckbox3(info);
                  checkboxContainer.appendChild(checkbox);
              });
    
              document.getElementById("loading-container").style.display = "none";
          })
          .catch(error => {
              console.error("Error:", error);
              document.getElementById("loading-container").style.display = "none";
          });
    
        }

        if(param="notusedbyclient"){
  

          var param=sessionStorage.getItem('clientNow');
          fetch(epGetClientElements + param+"/notusedbyclient/"+filter+"/"+ids+"/"+ids1)
              .then(response => response.json())
              .then(data => {
                
                  const checkboxContainer = document.getElementById("checkbox-roomid1"+filter);
                
                  checkboxContainer.innerHTML = ""; // Borra los checkboxes antiguos
        
                  data.clientElement.forEach(info => {
                      const checkbox = createCheckbox4(info);
                      checkboxContainer.appendChild(checkbox);
                  });
        
                  document.getElementById("loading-container").style.display = "none";
              })
              .catch(error => {
                  console.error("Error:", error);
                  document.getElementById("loading-container").style.display = "none";
              });
        
            }
}
var selectedAssignments = []; // Array para almacenar los elementos seleccionados

function handleCheckboxChange(event) {
    const assignId = event.target.value;

    if (event.target.checked) {
        // Checkbox seleccionado, agrega el assignId al array
        selectedAssignments.push(assignId);
       
    } else {
        // Checkbox deseleccionado, elimina el assignId del array
        const index = selectedAssignments.indexOf(assignId);
        if (index !== -1) {
            selectedAssignments.splice(index, 1);
            
        }
    }

    // Muestra el contenido del array
    console.log(selectedAssignments);
}

// Función para ejecutar al cambiar la selección en el select


// Función para ejecutar al cambiar la selección en el select
function onClientRoomSelect(param) {
  const selectElement = document.getElementById("list-clientroom");
  const selectedValue = selectElement.value;
  selectedAssignments.splice(0, selectedAssignments.length);

  // Verifica si se ha seleccionado un valor
  if (selectedValue) {
    // Ejecuta la función getClientElemntCheck con el valor seleccionado
    getClientElemntCheck(selectedValue,param,"1","1");

  }
}
















 

function createCheckboxdes(info) {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "assignCheckbox"; // Asigna un nombre a los checkboxes
  checkbox.value = info.elementId; // Asigna un valor (puedes usar un identificador único)
  checkbox.addEventListener("change", handleCheckboxChangedes); // Agrega un manejador de eventos para el cambio

  const label = document.createElement("label");
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(info.elementName+" $"+info.amount));

  return label;
}

async function getClientElemntCheckdes(filter,param) {
  document.getElementById("loading-container").style.display = "flex";

  var param=sessionStorage.getItem('clientNow');
  fetch(epGetClientElements + param+"/hold/"+filter+"/1/1")
      .then(response => response.json())
      .then(data => {
          const checkboxContainer = document.getElementById("checkbox-des"+filter);
          checkboxContainer.innerHTML = ""; // Borra los checkboxes antiguos

          data.clientElement.forEach(info => {
              const checkbox = createCheckboxdes(info);
              checkboxContainer.appendChild(checkbox);
          });

          document.getElementById("loading-container").style.display = "none";
      })
      .catch(error => {
          console.error("Error:", error);
          document.getElementById("loading-container").style.display = "none";
      });
}
var selectedAssignmentsdes = []; // Array para almacenar los elementos seleccionados

function handleCheckboxChangedes(event) {
    const assignId = event.target.value;

    if (event.target.checked) {
        // Checkbox seleccionado, agrega el assignId al array
        selectedAssignmentsdes.push(assignId);
       
    } else {
        // Checkbox deseleccionado, elimina el assignId del array
        const index = selectedAssignmentsdes.indexOf(assignId);
        if (index !== -1) {
          selectedAssignmentsdes.splice(index, 1);
            
        }
    }

    // Muestra el contenido del array
    console.log(selectedAssignmentsdes);
}

// Función para ejecutar al cambiar la selección en el select



var selectedAssignmentselement = [];

function handleCheckboxChangeAssignElement(event) {
  const assignId = event.target.value;

  if (event.target.checked) {
      // Checkbox seleccionado, agrega el assignId al array
      selectedAssignmentselement.push(assignId);
     
  } else {
      // Checkbox deseleccionado, elimina el assignId del array
      const index = selectedAssignmentselement.indexOf(assignId);
      if (index !== -1) {
        selectedAssignmentselement.splice(index, 1);
          
      }
  }

  // Muestra el contenido del array
  console.log(selectedAssignmentselement);
}

// Función para ejecutar al cambiar la selección en el select



var selectedAssignmentselementbyuser = [];

function handleCheckboxChangeAssignElementbyuser(event) {
  const assignId = event.target.value;

  if (event.target.checked) {
      // Checkbox seleccionado, agrega el assignId al array
      selectedAssignmentselementbyuser.push(assignId);
     
  } else {
      // Checkbox deseleccionado, elimina el assignId del array
      const index = selectedAssignmentselementbyuser.indexOf(assignId);
      if (index !== -1) {
        selectedAssignmentselementbyuser.splice(index, 1);
          
      }
  }

  // Muestra el contenido del array
  console.log(selectedAssignmentselementbyuser);
}



var selectedAssignmentselementbyusernot = [];

function handleCheckboxChangeAssignElementbyusernot(event) {
  const assignId = event.target.value;

  if (event.target.checked) {
      // Checkbox seleccionado, agrega el assignId al array
      selectedAssignmentselementbyusernot.push(assignId);
     
  } else {
      // Checkbox deseleccionado, elimina el assignId del array
      const index = selectedAssignmentselementbyusernot.indexOf(assignId);
      if (index !== -1) {
        selectedAssignmentselementbyusernot.splice(index, 1);
          
      }
  }

  // Muestra el contenido del array
  console.log(selectedAssignmentselementbyusernot);
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



function csvToJsonPutProduct(csvData) {
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
  var url = "controller/putProductBulk.php?"+
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


function csvToJsonPutStore(csvData) {
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
  var url = "controller/putStoreBulk.php?"+
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



function csvToJsonPutCategorie(csvData) {
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
  var url = "controller/putCategorieBulk.php?"+
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