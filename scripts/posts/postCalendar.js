



document.getElementById("postClient").addEventListener("click", function() {
  // Obtén los valores de los campos
  var nombres = document.getElementById("names1").value;
  var apellidos = document.getElementById("lastnames156").value;
  var contact = document.getElementById("lastnames123").value;
  var correo = document.getElementById("pmail134").value;
  var rol = document.getElementById("rol1").value;
  var contrasena = document.getElementById("pass11").value;
  var ccomments = document.getElementById("clientcomments").value;
  var cnames = document.getElementById("clientnames").value;
  



  if(nombres=="" || apellidos=="" || contact=="" || correo=="" || rol=="" || contrasena=="" || ccomments=="" || cnames=="" ){
    showNotify("¡Faltan campos por llenar!","error");
  
  }
else{

  // Construye la URL para la solicitud GET
  var url = "controller/postCalendar.php?" +
            "clientId=" + encodeURIComponent(nombres) +
            "&month=" + encodeURIComponent(apellidos) +
            "&monthDays=" + encodeURIComponent(correo) +
            "&dayWeek=" + encodeURIComponent(rol);
  
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
      getInternalClients('unlock');
      
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
}
});


