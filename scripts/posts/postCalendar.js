
document.getElementById("postCalendar").addEventListener("click", function() {
  // Obtén los valores de los campos
  var month = document.getElementById("cmonth").value;
  var day = document.getElementById("cday").value;
  var week = document.getElementById("cweek").value;
  
var clientIdNow=sessionStorage.getItem('clientNow');

  // Construye la URL para la solicitud GET
  var url = "controller/postCalendar.php?" +
            "clientId=" + encodeURIComponent(clientIdNow) +
            "&month=" + encodeURIComponent(month) +
            "&monthDays=" + encodeURIComponent(day) +
            "&dayWeek=" + encodeURIComponent(week);

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


