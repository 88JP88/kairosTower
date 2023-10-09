

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <link href="style/styleSession.css" rel="stylesheet">
  
</head>
 
</html>


<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Nombre de cliente</label>
  <input type="text" class="form-control" id="names" placeholder="Ingresa tus nombres">
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Comentarios</label>
  <input type="tect" class="form-control" id="lastnames" placeholder="Ingresa tus nombres">
</div>




  


  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Nombre del responsable</label>
  <input type="tect" class="form-control" id="lastnames" placeholder="Ingresa tus nombres">
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">apellido del responsable</label>
  <input type="tect" class="form-control" id="lastnames" placeholder="Ingresa tus nombres">
</div>

<div class="row g-3 align-items-center">
  <div class="col-auto">
    <label for="inputPassword6" class="col-form-label">Correo del responsable</label>
  </div>
  <div class="col-auto">
    <input type="email" id="pmail" class="form-control" aria-describedby="passwordHelpInline" placeholder="name@example.com">
  </div>
  <div class="col-auto">
    <span id="passwordHelpInline" class="form-text">
    Escribe el correo de la cuenta LUGMA.  Si aún tiene cuenta <p><a class="link-opacity-75" href="https://localhost/lugma/#">Click aquí</a></p>.
    </span>
  </div>
</div>

  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Contacto</label>
  <input type="tect" class="form-control" id="lastnames1" placeholder="Ingresa contacto">
</div>
  





<div class="row g-3 align-items-center">
<select class="form-select" aria-label="Default select example" id="rol">
  <option selected>Tipo de cliente</option>
  <option value="hadmin">Administrador (root)</option>
  <option value="admin">Administrador (restircciones)</option>
  <option value="invite">Invitado</option>
  <option value="client">Cliente</option>
</select>

</div>

  
<div class="row g-3 align-items-center">
  <div class="col-auto">
    <label for="inputPassword6" class="col-form-label">Contraseña del responsable</label>
  </div>
  <div class="col-auto">
    <input type="password" id="pass1" class="form-control" aria-describedby="passwordHelpInline" placeholder="Escribe tu contraseña">
  </div>
  <div class="col-auto">
    <span id="passwordHelpInline" class="form-text">
    Mayuscula, minusculas, números y caracteres especiales.
    </span>
  </div>
</div>

<div class="row g-3 align-items-center">
  <div class="col-auto">
    <label for="inputPassword6" class="col-form-label">Confirma contraseña</label>
  </div>
  <div class="col-auto">
    <input type="password" id="pass2" class="form-control" aria-describedby="passwordHelpInline" placeholder="Confirma tu contraseña">
  </div>
  <div class="col-auto">
    <span id="passwordHelpInline2" class="form-text">
      -
    </span>
  </div>
  <div class="col-auto">
    <span id="passwordHelpInline3" class="form-text">
      -
    </span>
  </div>
</div>

<button type="button" class="btn btn-primary1" id="crearButton">Crear cliente</button>


<script>

const pass1Input = document.getElementById("pass1");
const pass2Input = document.getElementById("pass2");
const pass2Help = document.getElementById("passwordHelpInline2");
const pass2Help2 = document.getElementById("passwordHelpInline3");

pass1Input.addEventListener("input", () => {
  validatePasswords();
});

pass2Input.addEventListener("input", () => {
  validatePasswords();
});

function validatePasswords() {
  const pass1Value = pass1Input.value;
  const pass2Value = pass2Input.value;
  
  // Validar si las contraseñas coinciden
  if (pass1Value === pass2Value) {
    pass2Help.textContent = "Mensaje 1: Las contraseñas coinciden.";
    pass2Help.style.color = "green";
    
    // Resto del código de validación cuando las contraseñas coinciden
    
  } else {
    pass2Help.textContent = "Mensaje 1: Las contraseñas no coinciden.";
    pass2Help.style.color = "red";
    
    // Validar longitud mínima de 8 caracteres
    if (pass2Value.length < 8) {
      pass2Help2.textContent = "La contraseña debe tener al menos 8 caracteres.";
      pass2Help2.style.color = "red";
    } else {
      const pass2Value = pass2Input.value;

// Validar al menos una mayúscula, una minúscula, un número y un carácter especial
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

if (!passwordRegex.test(pass2Value)) {
  pass2Help2.textContent = "La contraseña debe contener al menos una mayúscula, una minúscula, un número y un carácter especial.";
  pass2Help2.style.color = "red";
} else {
  pass2Help2.textContent = "La contraseña contiene al menos una mayúscula, una minúscula, un número y un carácter especial.";
  pass2Help2.style.color = "green";
}
    }
  }
}

</script>


<script>
document.getElementById("crearButton").addEventListener("click", function() {
  // Obtén los valores de los campos
  var nombres = document.getElementById("names").value;
  var apellidos = document.getElementById("lastnames").value;
  var contact = document.getElementById("lastnames1").value;
  var correo = document.getElementById("pmail").value;
  var rol = document.getElementById("rol").value;
  var contrasena = document.getElementById("pass1").value;
  
  // Construye la URL para la solicitud GET
  var url = "controller/postInternalUsersIntegrations.php?" +
            "nombres=" + encodeURIComponent(nombres) +
            "&apellidos=" + encodeURIComponent(apellidos) +
            "&correo=" + encodeURIComponent(correo) +
            "&rol=" + encodeURIComponent(rol) +
            "&contrasena=" + encodeURIComponent(contrasena)+
            "&contacto=" + encodeURIComponent(contact);
  
  // Realizar la solicitud GET utilizando fetch
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página
      obtenerVariablesPHP();
      document.getElementById("names").value = "";
      document.getElementById("lastnames").value = "";
      document.getElementById("lastnames1").value = "";
      document.getElementById("pmail").value = "";
      document.getElementById("rol").value = "Selecciona rol";
      document.getElementById("pass1").value = "";
      document.getElementById("pass2").value = "";
      getInternalUsers();
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
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
