

  

function createPosOrder() {
  // Obtén los valores de los campos
 
const cartData = JSON.stringify(shoppingCart);



const urlCart = window.location.href;

// Crear un objeto URL a partir de la URL actual
const urlObjCart = new URL(urlCart);

// Obtener el valor del parámetro "parametro1"
var clientId = urlObjCart.searchParams.get("clientId");
  // Construye la URL para la solicitud GET
  var url = "controller/postCreatePosOrder.php?" +
            "clientId=" + encodeURIComponent(clientId) +
            "&cart=" + encodeURIComponent(cartData) +
            "&userId=" + encodeURIComponent(user+"|"+assign)+
            "&timeId=" + encodeURIComponent(timeId)+
            "&param=" + encodeURIComponent('asigelement')+
            "&assignments=" + encodeURIComponent(selectedAssignmentsString); // Agrega los assignments a la URL
            
  // Realizar la solicitud GET utilizando fetch
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página
     console.log(cartData);
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });



};


