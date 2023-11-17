
document.getElementById("postCalendar").addEventListener("click", function() {
  // Obtén los valores de los campos
  var month = document.getElementById("cmonth").value;
  var day = document.getElementById("cday").value;
  var week = document.getElementById("cweek").value;
  
var clientIdNow=sessionStorage.getItem('clientNow');

  // Construye la URL para la solicitud GET
  var url = "../controller/postCalendar.php?" +
            "clientId=" + encodeURIComponent(clientIdNow) +
            "&month=" + encodeURIComponent(month) +
            "&monthDays=" + encodeURIComponent(day) +
            "&dayWeek=" + encodeURIComponent(week);

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


