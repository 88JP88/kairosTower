


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

document.getElementById("postInternalUser").addEventListener("click", function() {
  // Obtén los valores de los campos
  var nombres = document.getElementById("names").value;
  var apellidos = document.getElementById("lastnames").value;
  var contact = document.getElementById("lastnames1").value;
  var correo = document.getElementById("pmail").value;
  var rol = document.getElementById("rol").value;
  var contrasena = document.getElementById("pass1").value;

  if(nombres=="" || apellidos=="" || contact=="" || correo=="" || rol=="" || contrasena==""){
    showNotify("¡Faltan campos por llenar!","error");
  
  }else{
  // Construye la URL para la solicitud GET
  var url = "controller/postInternalUsersIntegrations.php?" +
            "nombres=" + encodeURIComponent(nombres) +
            "&apellidos=" + encodeURIComponent(apellidos) +
            "&correo=" + encodeURIComponent(correo) +
            "&rol=" + encodeURIComponent(rol) +
            "&contrasena=" + encodeURIComponent(contrasena)+
            "&contacto=" + encodeURIComponent(contact);
            document.getElementById("loading-container").style.display = "flex";
  // Realizar la solicitud GET utilizando fetch
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página
      
      document.getElementById("names").value = "";
      document.getElementById("lastnames").value = "";
      document.getElementById("lastnames1").value = "";
      document.getElementById("pmail").value = "";
      document.getElementById("rol").value = "Selecciona rol";
      document.getElementById("pass1").value = "";
      document.getElementById("pass2").value = "";
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



