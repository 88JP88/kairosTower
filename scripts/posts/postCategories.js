
document.getElementById("postCategoriebtn").addEventListener("click", function() {
  // Obtén los valores de los campos
  var categoryName = document.getElementById("catname").value;
  var comments = document.getElementById("catcomments").value;
  var catType = document.getElementById("list-cattipe").value;
  var parentId = document.getElementById("list-categoryListstadd96").value;
  
var clientIdNow=sessionStorage.getItem('clientNow');

  // Construye la URL para la solicitud GET
  var url = "controller/postCategorie.php?" +
            "clientId=" + encodeURIComponent(clientIdNow) +
            "&categoryName=" + encodeURIComponent(categoryName) +
            "&comments=" + encodeURIComponent(comments) +
            "&catType=" + encodeURIComponent(catType)+
            "&parentId=" + encodeURIComponent(parentId);

  // Realizar la solicitud GET utilizando fetch
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página
      
    
      getMessage();
      
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
});


