

  

function createEcmOrder() {
  // Obtén los valores de los campos
 
const cartData = JSON.stringify(shoppingCart);
var customer=document.getElementById('validationEcmMail').value;
var pType=document.getElementById('list-paymentTypeEcm').value;
var pMth=document.getElementById('list-paymentMethodEcm').value;
var payW=document.getElementById('paymentcashEcm').value;
var bEnt=document.getElementById('list-bankMethodEcm').value;
var delMeth=document.getElementById('list-deliverymethod').value;
var delAdd=document.getElementById('deliveryAddress').value;


const urlCart = window.location.href;

// Crear un objeto URL a partir de la URL actual
const urlObjCart = new URL(urlCart);

// Obtener el valor del parámetro "parametro1"
var clientId = urlObjCart.searchParams.get("clientId");
var user= sessionStorage.getItem('userId');
  // Construye la URL para la solicitud GET
  var url = "controller/postCreateEcmOrder.php?" +
            "clientId=" + encodeURIComponent(clientId) +
            "&cart=" + encodeURIComponent(cartData) +
            "&userId=" + encodeURIComponent(user) +
            "&customerId=" + encodeURIComponent(customer)+
            "&paymentType=" + encodeURIComponent(pType)+
            "&paymentMethod=" + encodeURIComponent(pMth)+
            "&payWith=" + encodeURIComponent(payW)+
            "&bankEntity=" + encodeURIComponent(bEnt)+
            "&deliveryMethod=" + encodeURIComponent(delMeth)+
            "&deliveryAddress=" + encodeURIComponent(delAdd); // Agrega los assignments a la URL
            
  // Realizar la solicitud GET utilizando fetch
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página
      console.log(encodeURIComponent(cartData));
      console.log(delAdd);

      fetch('controller/getPHPVariablesOrders.php')
      .then(response => response.json())
      .then(data => {
        // Aquí obtienes los nuevos valores de las variables PHP en el objeto "data"
        // Puedes acceder a los valores como data.mensaje y data.error
        // Por ejemplo:
        var nuevoMensaje = data.mensaje;
        var nuevoError = data.error;
        var nuevoOrderNumber = data.orderNumber;
        var nuevoOrderId = data.orderId;
        var nuevoTotal = data.total;
        var nuevoSubTotal = data.subTotal;
        var nuevoSaver = data.saver;
        var nuevoPm = data.paymentMethod;
        var nuevoPtype = data.paymentType;


        if(nuevoError==="true"){
          totality=0;
          subtotality=0;
           shoppingCart = [];
          shoppingCartPayment = [];
           shoppingProducts = [];
           products=[];
           getMessageOrderEcmValidated();
           updateCartView('9999');
           
           arrayToHTMLCards();
           arrayToHTMLCardsPayloadEcm();
        }
        if(nuevoError==="false"){
            alert(nuevoMensaje);
            getMessageOrder();
        }
      })
      .catch(error => {
        console.error('Error al obtener las variables PHP:', error);
      });
   
     
 //closeModValPosShop();
     
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });



};


