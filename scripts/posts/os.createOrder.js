
function generarCodigoAleatorio(longitud) {
  const caracteresValidos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  let codigo = '';
  for (let i = 0; i < longitud; i++) {
    const indice = Math.floor(Math.random() * caracteresValidos.length);
    codigo += caracteresValidos.charAt(indice);
  }
  return codigo;
}
function createOsOrder(tableId,parametter) {
  const urlParam = window.location.href;
  const urlObj = new URL(urlParam);

  // Obtener el valor del parámetro "parametro1"
  urlObj.searchParams.get("clientId");
    let shoppingCartOS = [];
    // Inicializar el arreglo para el carrito de compras
    let productCounter=0;
    let selectCounter=0;
   
var codigoAleatorio = generarCodigoAleatorio(8);
  sessionStorage.setItem("orderRandomCodeNow",codigoAleatorio);
    if(parametter=="createBtn"){
//var clientId=urlObj.searchParams.get("clientId");
     // editOSOrder(this,clientId,sessionStorage.getItem('orderRandomCodeNow'),'orderStatus','fromMarketOpened','status');
var tableid1="createBtn";

    }else{
      var tableid1="";

}
tableId=sessionStorage.getItem('siteNow');
    // Verificar si hay elementos seleccionados para esta mesa
    if (selectedItemsByTable[tableId] && Array.isArray(selectedItemsByTable[tableId])) {
        const selectedItems = selectedItemsByTable[tableId];

        // Iterar sobre los elementos seleccionados para esta mesa
        selectedItems.forEach(item => {
            const {
                uniqueId,
                isDiscount,
                productName,
                catalogPrice,
                qty,
                discount,
                catalogId,
                productType,
                productPrice,
                sku,
                productCaracts,
                placeName,
                catalogComments,
                isPromo,
                promo

            } = item;

            // Crear el objeto de producto para esta mesa
            const productObj = {
                product:{
                  uniqueId,
                isDiscount,
                productName,
                catalogPrice,
                qty,
                discount,
                catalogId,
                productType,
                productPrice,
                sku,
                productCaracts,
                placeName,
                catalogComments,
                isPromo,
                promo}
            };
productCounter=productCounter+qty;
selectCounter++;
            // Agregar el producto al carrito de compras
            shoppingCartOS.push(productObj);
        });
    }
    var totall={
        'infoPayment':{
        'total':sessionStorage.getItem('totalFounds'),
        'subTotal':sessionStorage.getItem('subTotalFounds'),
        'saver':sessionStorage.getItem('saver'),
        'productCounter':productCounter,
        'selectCounter':selectCounter
      }
    };
    const selectElement = document.getElementById('list-OSEmployeesList');
const selectedOption = selectElement.options[selectElement.selectedIndex];
const selectedText = selectedOption.textContent;

const selectElement1 = document.getElementById('list-OSCustomerListOS');
const selectedOption1 = selectElement1.options[selectElement1.selectedIndex];
const selectedText1 = selectedOption1.textContent;
var otid=sessionStorage.getItem('siteNow');

var orderStatus={
      'orderStatus':{
      'status':'created',
      'orderTrackId':sessionStorage.getItem("ot"+otid),
      'oderType':urlObj.searchParams.get("st"),
      'isDelivery':'',
      'frontId': codigoAleatorio
    },
    'paymentStatus':{
      
      'status':'unPayed'
    },
    'ownerStatus':{
      'ownerId':document.getElementById('list-OSEmployeesList').value,
      'status':'active',
      'name':selectedText,
      'tip':0

    },
    'customerStatus':{
      'customerId':document.getElementById('list-OSCustomerListOS').value,
      'name':selectedText1

    }
  };

    // Devolver el carrito de compras con los productos de la mesa especificada
    
    document.getElementById("loading-container").style.display = "flex";
   
var apiData = {
  "clientId": urlObj.searchParams.get("clientId"),
  "siteId": sessionStorage.getItem('siteNow'),
 "products":JSON.stringify(shoppingCartOS),
"payload":JSON.stringify(totall),
"order":JSON.stringify(orderStatus),
  "apiValues":{
    "apiName": "apiOS",
    "apiVersion": "v1",
    "endPoint": "postOrder"
  }
  
  
};
// Construir la URL con los parámetros de la petición GET

var apiInfo = JSON.stringify(apiData);

var url = 'controller/postController.php';
//console.log('logguer UTF8: '+encodeURIComponent(compressedData));
  fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'data=' + encodeURIComponent(apiInfo)+'&apiKey=' + encodeURIComponent(sessionStorage.getItem('key')) + '&ranCode=' + encodeURIComponent(sessionStorage.getItem('ranCode'))
})
    .then(response => {
      getMessage();      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página
    
      selectedItemsByTable={};
      shoppingCartOS = [];
    totall={};
    orderStatus={};
    productCounter=0;
     selectCounter=0;
     shoppingCartOS.length = 0; // Vacía el array
    
      // Verifica la respuesta del usuario
      updateCarContainer(sessionStorage.getItem('siteNow'));
     // console.log("shoppingCartOS");
      //console.log(shoppingCartOS);

       if(tableid1=="createBtn"){
var clientId=urlObj.searchParams.get("clientId");
return new Promise((resolve, reject) => {
  // Lógica de tu función editOSOrder
  // Aquí deberías llamar a la API o ejecutar la acción asincrónica
  // Luego, resuelve o rechaza la Promise según el resultado
  // Ejemplo de llamada a la API ficticia
  executeEditOSOrderSequence(clientId, codigoAleatorio)
      .then(response => {
          resolve(response);
      })
      .catch(error => {
          reject(error);
      });
});
     

    }else{
      
}
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
    document.getElementById("loading-container").style.display = "none";

    
    
    
    return shoppingCartOS;
}


async function executeEditOSOrderSequence(clientId,codigoAleatorio) {
  try {
      await editOSOrder(this, clientId, codigoAleatorio, 'orderStatus', 'fromMarketOpened', 'status');
      await editOSOrder(this, clientId, codigoAleatorio, 'orderStatus', 'fromMarketInProgress', 'status');
      await editOSOrder(this, clientId, codigoAleatorio, 'orderStatus', 'fromMarketReady', 'status');
      await editOSOrder(this, clientId, codigoAleatorio, 'orderStatus', 'fromMarketDelivered', 'status');
    //  openModal('OSOrdersVerifyPayment');
    modalPaymentMethod();
      createResourceBtnPay('contaionerBtnPay');
    
      //  await editOSOrder(this, clientId, codigoAleatorio, 'orderStatus', 'fromMarketFinished', 'status');
     // await editOSOrder(this, clientId, codigoAleatorio, 'orderStatus', 'fromMarketFinished', 'status');

    } catch (error) {
      console.error('Error executing sequence:', error);
  }
}
// Algoritmo LZ77 simplificado para compresión
function compress(uncompressed) {
  let dictionary = {}, c, wc, w = "", result = [], dictSize = 256;
  for (let i = 0; i < 256; i++) dictionary[String.fromCharCode(i)] = i;
  for (let i = 0; i < uncompressed.length; i++) {
      c = uncompressed.charAt(i);
      wc = w + c;
      if (dictionary[wc] !== undefined) {
          w = wc;
      } else {
          result.push(dictionary[w]);
          dictionary[wc] = dictSize++;
          w = String(c);
      }
  }
  if (w !== "") result.push(dictionary[w]);
  return result;
}






function lzwCompress(uncompressed) {
    // Build the dictionary.
   const dictionary = {};
    const data = (uncompressed + "").split("");
    const out = [];
    let currChar;
    let phrase = data[0];
    let code = 256;
    for (let i = 1; i < data.length; i++) {
        currChar = data[i];
        if (dictionary[phrase + currChar] != null) {
            phrase += currChar;
        } else {
            out.push(phrase.length > 1 ? dictionary[phrase] : phrase.charCodeAt(0));
            dictionary[phrase + currChar] = code;
            code++;
            phrase = currChar;
        }
    }
    out.push(phrase.length > 1 ? dictionary[phrase] : phrase.charCodeAt(0));
    for (let i = 0; i < out.length; i++) {
        out[i] = String.fromCharCode(out[i]);
    }
    return out.join("");
}

// Codificar en Base64
function toBase64(input) {
  return btoa(input);
}

function editOSOrder(button, clientId,orderId,param,value,reason) {
  // Obtener el valor del campo de texto correspondiente al botón
  document.getElementById("loading-container").style.display = "flex";
  if(reason=="data"){

    var input = button.previousElementSibling;
    var value = input.value;

  
  }
  var apiData = {
    "orderId": orderId,
    "clientId": clientId,
    "param": param,
    "value": value,
    "apiValues":{
      "apiName": "apiOS",
      "apiVersion": "v1",
      "endPoint": "putOrder"
    }
    
  };
// Construir la URL con los parámetros de la petición GET

const apiInfo = JSON.stringify(apiData);
var url = 'controller/postController.php?data=' + encodeURIComponent(apiInfo);
//var url = 'controller/putClientDelivery.php?data=' + apiData;


if(value=="finishedAll"){
  fetch(url)
  .then(response => response.json()) // Convertir la respuesta a JSON
  .then(data => {
    createTable('tableInternalClients222','containerOrdersVerificationData', [
  
      'Total',
      'SubTotal',
      'Ahorro',
      'Ahorro con puntos',
      'Total previo',
      '#Productos',
      '#Selecciones',
      '$Puntos',
      '#Puntos',
      'Aplica puntos',
      'No aplica puntos',
      'Sin puntuación',
    ]);
    getApiData(getOrdersCalculateOS,
      {
      'apiService':'apiOS',
      'apiVersion':'v1',
      'endPoint':'getOrdersCalculate'
      },
      {
      'containerData':'containerOrdersVerificationData',
      'containerInfo':'containerOrdersVerificationInfo1',
      'modelView':'table',
      },
      {
      'filter':'calculateOrdersByOrderTrackId',
      'param':'finished',
      'value':orderId
      }
      );
  })
  .catch(error => {
      console.log('Error en la petición:', error);
  })
  .finally(() => {
      document.getElementById("loading-container").style.display = "none";
  });

}else{
  fetch(url)
  .then(response => {
    // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
    // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

    getMessage();
    
    getApiData(getOrdersOS,
      {
      'apiService':'apiOS',
      'apiVersion':'v1',
      'endPoint':'getOrders'
      },
      {
      'containerData':'containerOrdersData',
      'containerInfo':'containerOrdersInfo',
      'modelView':'tableOS',
      },
      {
      'filter':'bySiteOrderTrackIdStatusAll',
      'param': sessionStorage.getItem('ot'+sessionStorage.getItem('siteNow')),
      'value': sessionStorage.getItem('siteNow')
      }
      );

    
    

  })
  .catch(error => {
    // Aquí puedes manejar los errores en caso de que la petición falle
    console.log('Error en la petición:', error);
  });

}
// Realizar la petición GET al archivo PHP

  document.getElementById("loading-container").style.display = "none";

}

