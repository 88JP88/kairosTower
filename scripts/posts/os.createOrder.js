

function createOsOrder(tableId) {
    let shoppingCartOS = [];
    // Inicializar el arreglo para el carrito de compras
    shoppingCartOS = [];
tableId=sessionStorage.getItem('siteNow');
    // Verificar si hay elementos seleccionados para esta mesa
    if (selectedItemsByTable[tableId] && Array.isArray(selectedItemsByTable[tableId])) {
        const selectedItems = selectedItemsByTable[tableId];

        // Iterar sobre los elementos seleccionados para esta mesa
        selectedItems.forEach(item => {
            const {
                uniqueId,
                isDiscount
            } = item;

            // Crear el objeto de producto para esta mesa
            const productObj = {
                product:{
                uniqueId,
                isDiscount}
            };

            // Agregar el producto al carrito de compras
            shoppingCartOS.push(productObj);
        });
    }
    var totall={
        'paymentInfo':{
        'total':sessionStorage.getItem('totalFounds'),
        'subTotal':sessionStorage.getItem('subTotalFounds')}
    };
    shoppingCartOS.push(totall);

    // Devolver el carrito de compras con los productos de la mesa especificada
    
    document.getElementById("loading-container").style.display = "flex";
    const urlParam = window.location.href;
    const urlObj = new URL(urlParam);
  
    // Obtener el valor del parámetro "parametro1"
    urlObj.searchParams.get("clientId");
var apiData = {
  "clientId": urlObj.searchParams.get("clientId"),
  "siteId": sessionStorage.getItem('siteNow'),
  "payload": JSON.stringify(shoppingCartOS),

  "apiValues":{
    "apiName": "apiOS",
    "apiVersion": "v1",
    "endPoint": "postOrder"
  }
  
};
// Construir la URL con los parámetros de la petición GET

const apiInfo = JSON.stringify(apiData);
console.log(apiInfo);
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

    
    
    
    return shoppingCartOS;
}
