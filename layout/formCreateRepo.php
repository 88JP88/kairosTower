

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <link href="style/styleSession.css" rel="stylesheet">
  
</head>
 
</html>


<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Nombre de repositorio</label>
  <input type="text" class="form-control" id="reponame" placeholder="Ingresa nombre del repo">
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Comentarios</label>
  <input type="tect" class="form-control" id="repocomments" placeholder="Ingresa comentarios">
</div>


<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Contenido</label>
  <textarea rows="3" cols="30" class="form-control" id="repocontent" placeholder="Ingresa contenido">

</textarea>

</div>



<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Palabras de búsqueda</label>
  <input type="tect" class="form-control" id="repokeywords" placeholder="Ingresa palabras clave">
</div>


<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Links separados por espacio</label>
  <input type="tect" class="form-control" id="repolinks" placeholder="Ingresa recursos">
</div>
<div class="row g-3 align-items-center">
  <select class="form-select" aria-label="Default select example" id="repotype">
    <option selected>Tipo de repositorio</option>
    <option value="student">Música</option>
    <option value="teacher">Arte</option>
    <option value="coordinate">Tecnología</option>
    <option value="other">Otro</option>
  </select>
</div>

<div class="row g-3 align-items-center" id="otherField" style="display: none;">
  <input type="text" class="form-control" id="otherText" placeholder="Especificar otro tipo">
</div>

<script>
  // Obtener el menú desplegable y el campo de texto
  const repotypeSelect = document.getElementById("repotype");
  const otherField = document.getElementById("otherField");

  // Escuchar cambios en el menú desplegable
  repotypeSelect.addEventListener("change", function() {
    // Obtener el valor seleccionado
    const selectedValue = repotypeSelect.value;

    // Mostrar u ocultar el campo de texto según la selección
    if (selectedValue === "other") {
      otherField.style.display = "block";
    } else {
      otherField.style.display = "none";
    }
  });
</script>


  

<button type="button" class="btn btn-primary1" id="crearButtonrepo">Crear</button>



<script>
document.getElementById("crearButtonrepo").addEventListener("click", function() {
  // Obtén los valores de los campos
  var reponame = document.getElementById("reponame").value;
  var repocomments = document.getElementById("repocomments").value;
  var repocontent = document.getElementById("repocontent").value;
  var repokeywors = document.getElementById("repokeywords").value;
  var repolinks = document.getElementById("repolinks").value;
  var repotype = document.getElementById("repotype").value;
  

  
  if(repotype=="Tipo de repositorio"){
mostrarNotificacion('¡Debes seleccionar tipo de repositorio!','error');

}

if(repotype!="Tipo de repositorio"){
  if(repotype=="other"){

    var repotype = document.getElementById("otherText").value;
  }
  // Construye la URL para la solicitud GET
  var url = "controller/postRepos.php?" +
            "name=" + encodeURIComponent(reponame) +
            "&comments=" + encodeURIComponent(repocomments) +
            "&content=" + encodeURIComponent(repocontent) +
            "&keywords=" + encodeURIComponent(repokeywors) +
            "&links=" + encodeURIComponent(repolinks)+
            "&type=" + encodeURIComponent(repotype);
  
  // Realizar la solicitud GET utilizando fetch
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página
      obtenerVariablesPHP();
      document.getElementById("reponame").value = "";
      document.getElementById("repocomments").value = "";
      document.getElementById("repocontent").value = "";
      document.getElementById("repokeywords").value ="";
      document.getElementById("repolinks").value = "";
      document.getElementById("repotype").value = "Tipo de repositorio";

         })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });



}

});
</script>




    

<script>
// Función para mostrar la notificación
function mostrarNotificacion(mensaje, tipo) {
    const notificacion = document.getElementById('notification');
    const notificacionText = document.getElementById('notificationText');

    notificacionText.textContent = mensaje;
    notificacion.classList.remove('error'); // Remover clase de error (en caso de que esté presente)

    if (tipo === 'error') {
        notificacion.classList.add('error');
    }

    notificacion.style.display = 'block';

    // Desaparecer la notificación después de 3 segundos
    setTimeout(() => {
        notificacion.style.display = 'none';
    }, 3000);
}


function obtenerVariablesPHP() {
  fetch('layout/getPHPVariables.php')
    .then(response => response.json())
    .then(data => {
      // Aquí obtienes los nuevos valores de las variables PHP en el objeto "data"
      // Puedes acceder a los valores como data.mensaje y data.error
      // Por ejemplo:
      var nuevoMensaje = data.mensaje;
      var nuevoError = data.error;

    

      if(nuevoError==="true"){
        
        var re="success";
        
      }
      if(nuevoError==="false"){
      
        var re="error";
        
      }

      mostrarNotificacion(nuevoMensaje, re);
     

    })
    .catch(error => {
      console.error('Error al obtener las variables PHP:', error);
    });
}
</script>
<style>
.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #4CAF50;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    display: none;
    z-index: 9999;
    animation: slideIn 8s forwards, slideOut 10s forwards;
}
.notification.error {
    background-color: #f44336;
}
@keyframes slideIn {
    0% {
        transform: translateX(100%);
        opacity: 0;
    }
    80% {
        transform: translateX(-10%);
        opacity: 1;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}
@keyframes slideOut {
    0% {
        transform: translateX(0);
        opacity: 1;
    }
    100% {
        transform: translateX(100%);
        opacity: 0;
    }
}
</style>
