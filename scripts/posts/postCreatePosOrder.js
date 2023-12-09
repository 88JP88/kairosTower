

  

function createPosOrder() {
  // Obtén los valores de los campos
 
const cartData = JSON.stringify(shoppingCart);
var customer=document.getElementById('list-customerget').value;
var pType=document.getElementById('list-paymentType').value;
var pMth=document.getElementById('list-paymentMethod').value;
var payW=document.getElementById('paymentcash').value;
var bEnt=document.getElementById('list-bankMethod').value;


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
            "&userId=" + encodeURIComponent(user) +
            "&customerId=" + encodeURIComponent(customer)+
            "&paymentType=" + encodeURIComponent(pType)+
            "&paymentMethod=" + encodeURIComponent(pMth)+
            "&payWith=" + encodeURIComponent(payW)+
            "&bankEntity=" + encodeURIComponent(bEnt); // Agrega los assignments a la URL
            
  // Realizar la solicitud GET utilizando fetch
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página
      console.log(encodeURIComponent(cartData));
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
     
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });



};


