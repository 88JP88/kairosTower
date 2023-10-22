
document.getElementById("postElement").addEventListener("click", function() {
  // Obtén los valores de los campos
  var name = document.getElementById("eName").value;
  var carac = document.getElementById("eCaract").value;
  var comments = document.getElementById("eCommentse").value;
  var brand = document.getElementById("eBrand").value;
  var type = document.getElementById("eType").value;
  var img = document.getElementById("eImg").value;
  var valu = document.getElementById("eValue").value;
  
var clientIdNow=sessionStorage.getItem('clientNow');

  // Construye la URL para la solicitud GET
  var url = "controller/postElement.php?" +
            "clientId=" + encodeURIComponent(clientIdNow) +
            "&name=" + encodeURIComponent(name) +
            "&caract=" + encodeURIComponent(carac) +
            "&comments=" + encodeURIComponent(comments)+
            "&brand=" + encodeURIComponent(brand)+
            "&type=" + encodeURIComponent(type)+
            "&img=" + encodeURIComponent(img)+
            "&value=" + encodeURIComponent(valu);

  // Realizar la solicitud GET utilizando fetch
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página
      
      document.getElementById("names1").value = "";
      document.getElementById("lastnames156").value = "";
      document.getElementById("lastnames123").value = "";
      document.getElementById("pmail134").value = "";
      document.getElementById("rol1").value = "Selecciona rol";
      document.getElementById("pass11").value = "";
      document.getElementById("pass22").value = "";
      document.getElementById("clientcomments").value = "";
      document.getElementById("clientnames").value = "";
      getMessage();
      
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
});


