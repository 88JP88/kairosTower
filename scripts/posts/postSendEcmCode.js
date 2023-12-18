

  

function sendEcmCode() {
  // Obtén los valores de los campos
 
var codeMail=document.getElementById('validationEcmMail').value;


const urlCart = window.location.href;


// Obtener el valor del parámetro "parametro1"
const urlObj = new URL(urlCart);
var clientId = urlObj.searchParams.get("clientId");

  // Construye la URL para la solicitud GET
  var url = "controller/postSendEcmCode.php?" +
            "clientId=" + encodeURIComponent(clientId) +
            "&customerMail=" + encodeURIComponent(codeMail) ; // Agrega los assignments a la URL
            
  // Realizar la solicitud GET utilizando fetch
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página
     getMessage();
     console.log(codeMail);
     console.log(clientId);
 //closeModValPosShop();
     
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });



};


