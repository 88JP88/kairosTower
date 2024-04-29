

function createOsOrder(tableId) {
    let shoppingCartOS = [];
    // Inicializar el arreglo para el carrito de compras
    let productCounter=0;
    let selectCounter=0;
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
                categoryName,
                catalogId,
                productType,
                productPrice,
                sku,
                ean1,
                ean2,
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
                categoryName,
                catalogId,
                productType,
                productPrice,
                sku,
                ean1,
                ean2,
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
      'orderTrackId':sessionStorage.getItem("ot"+otid)
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
    const urlParam = window.location.href;
    const urlObj = new URL(urlParam);
  
    // Obtener el valor del parámetro "parametro1"
    urlObj.searchParams.get("clientId");
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

const apiInfo = JSON.stringify(apiData);
//console.log(apiInfo);
var url = 'controller/postController.php?data=' + encodeURIComponent(apiInfo);

  fetch(url)
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
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
    document.getElementById("loading-container").style.display = "none";

    
    
    
    return shoppingCartOS;
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

// Realizar la petición GET al archivo PHP
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
      'filter':'bySiteOrderStatusExcludeOne',
      'param':'finished',
      'value':sessionStorage.getItem('siteNow')
      }
      );

    

  })
  .catch(error => {
    // Aquí puedes manejar los errores en caso de que la petición falle
    console.log('Error en la petición:', error);
  });
  document.getElementById("loading-container").style.display = "none";

}

