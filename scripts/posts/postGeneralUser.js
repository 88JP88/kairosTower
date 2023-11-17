


const pass1InputCLIENT = document.getElementById("pass1CLIENT");
const pass2InputCLIENT = document.getElementById("pass2CLIENT");
const pass2HelpCLIENT = document.getElementById("passwordHelpInline2CLIENT");
const pass2Help2CLIENT = document.getElementById("passwordHelpInline3CLIENT");

pass1InputCLIENT.addEventListener("input", () => {
  validatePasswords();
});

pass2InputCLIENT.addEventListener("input", () => {
  validatePasswords();
});

function validatePasswords() {
  const pass1ValueCLIENT = pass1InputCLIENT.value;
  const pass2ValueCLIENT = pass2InputCLIENT.value;
  
  // Validar si las contraseñas coinciden
  if (pass1ValueCLIENT === pass2ValueCLIENT) {
    pass2HelpCLIENT.textContent = "Mensaje 1: Las contraseñas coinciden.";
    pass2HelpCLIENT.style.color = "green";
    
    // Resto del código de validación cuando las contraseñas coinciden
    
  } else {
    pass2HelpCLIENT.textContent = "Mensaje 1: Las contraseñas no coinciden.";
    pass2HelpCLIENT.style.color = "red";
    
    // Validar longitud mínima de 8 caracteres
    if (pass2ValueCLIENT.length < 8) {
      pass2Help2CLIENT.textContent = "La contraseña debe tener al menos 8 caracteres.";
      pass2Help2CLIENT.style.color = "red";
    } else {
      const pass2ValueCLIENT = pass2InputCLIENT.value;

// Validar al menos una mayúscula, una minúscula, un número y un carácter especial
const passwordRegexCLIENT = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

if (!passwordRegexCLIENT.test(pass2ValueCLIENT)) {
  pass2Help2CLIENT.textContent = "La contraseña debe contener al menos una mayúscula, una minúscula, un número y un carácter especial.";
  pass2Help2CLIENT.style.color = "red";
} else {
  pass2Help2CLIENT.textContent = "La contraseña contiene al menos una mayúscula, una minúscula, un número y un carácter especial.";
  pass2Help2CLIENT.style.color = "green";
}
    }
  }
}

document.getElementById("postClientUser").addEventListener("click", function() {
  // Obtén los valores de los campos
  var nombres = document.getElementById("namesCLIENT").value;
  var apellidos = document.getElementById("lastnamesCLIENT").value;
  var contact = document.getElementById("lastnames1CLIENT").value;
  var correo = document.getElementById("pmailCLIENT").value;
  var rol = document.getElementById("rolCLIENT").value;
  var contrasena = document.getElementById("pass1CLIENT").value;
  var clientId = document.getElementById("repos-select234666").value;
  


if(nombres=="" || apellidos=="" || contact=="" || correo=="" || rol=="" || contrasena=="" || clientId==""){
  showNotify("¡Faltan campos por llenar!","error");

}else{




  // Construye la URL para la solicitud GET
  var url = "controller/postUsersIntegrations.php?" +
            "nombres=" + encodeURIComponent(nombres) +
            "&apellidos=" + encodeURIComponent(apellidos) +
            "&correo=" + encodeURIComponent(correo) +
            "&rol=" + encodeURIComponent(rol) +
            "&contrasena=" + encodeURIComponent(contrasena)+
            "&contacto=" + encodeURIComponent(contact)+
            "&clientId=" + encodeURIComponent(clientId);
            document.getElementById("loading-container").style.display = "flex";
  // Realizar la solicitud GET utilizando fetch
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página
      
      document.getElementById("namesCLIENT").value = "";
      document.getElementById("lastnamesCLIENT").value = "";
      document.getElementById("lastnames1CLIENT").value = "";
      document.getElementById("pmailCLIENT").value = "";
      document.getElementById("rolCLIENT").value = "Selecciona rol";
      document.getElementById("repos-select234666").value = "Selecciona cliente";
      document.getElementById("pass1CLIENT").value = "";
      document.getElementById("pass2CLIENT").value = "";
      getMessage();
      getInternalUsers();
      document.getElementById("loading-container").style.display = "none";
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
  }
});



