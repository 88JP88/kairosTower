

  

function createPosOrder() {
  // Obtén los valores de los campos
 
const cartData = JSON.stringify(shoppingCart);



const urlCart = window.location.href;

// Crear un objeto URL a partir de la URL actual
const urlObjCart = new URL(urlCart);

// Obtener el valor del parámetro "parametro1"
var clientId = urlObjCart.searchParams.get("clientId");
var user= sessionStorage.getItem('userId');
  // Construye la URL para la solicitud GET
  var url = "controller/postCreatePosOrder.php?" +
            "clientId=" + encodeURIComponent(clientId) +
            "&cart=" + encodeURIComponent(cartData) +
            "&userId=" + encodeURIComponent(user); // Agrega los assignments a la URL
            
  // Realizar la solicitud GET utilizando fetch
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página
      
      getMessageOrder();
      totality=0;
subtotality=0;
 shoppingCart = [];
shoppingCartPayment = [];
 shoppingProducts = [];
 products=[];
 updateCartView('9999');
 
 arrayToHTMLCards();
 arrayToHTMLCardsPayload();
 //closeModValPosShop();
 location.reload();
 location.href = location.href;
    // console.log(encodeURIComponent(cartData));
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });



};


