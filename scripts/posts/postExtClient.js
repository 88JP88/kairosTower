


const pass1Input1 = document.getElementById("pass11");
const pass2Input1= document.getElementById("pass22");
const pass2Help1 = document.getElementById("passwordHelpInline22");
const pass2Help21 = document.getElementById("passwordHelpInline33");

pass1Input.addEventListener("input", () => {
  validatePasswords();
});

pass2Input.addEventListener("input", () => {
  validatePasswords();
});

function validatePasswords() {
  const pass1Value1 = pass1Input1.value;
  const pass2Value1 = pass2Input1.value;
  
  // Validar si las contraseñas coinciden
  if (pass1Value1 === pass2Value1) {
    pass2Help1.textContent = "Mensaje 1: Las contraseñas coinciden.";
    pass2Help1.style.color = "green";
    
    // Resto del código de validación cuando las contraseñas coinciden
    
  } else {
    pass2Help1.textContent = "Mensaje 1: Las contraseñas no coinciden.";
    pass2Help1.style.color = "red";
    
    // Validar longitud mínima de 8 caracteres
    if (pass2Value1.length < 8) {
      pass2Help21.textContent = "La contraseña debe tener al menos 8 caracteres.";
      pass2Help21.style.color = "red";
    } else {
      const pass2Value1 = pass2Input1.value;

// Validar al menos una mayúscula, una minúscula, un número y un carácter especial
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

if (!passwordRegex.test(pass2Value1)) {
  pass2Help21.textContent = "La contraseña debe contener al menos una mayúscula, una minúscula, un número y un carácter especial.";
  pass2Help21.style.color = "red";
} else {
  pass2Help21.textContent = "La contraseña contiene al menos una mayúscula, una minúscula, un número y un carácter especial.";
  pass2Help21.style.color = "green";
}
    }
  }
}




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
  var url = "controller/postClients.php?" +
            "nombres=" + encodeURIComponent(nombres) +
            "&apellidos=" + encodeURIComponent(apellidos) +
            "&correo=" + encodeURIComponent(correo) +
            "&type=" + encodeURIComponent(rol) +
            "&contrasena=" + encodeURIComponent(contrasena)+
            "&contacto=" + encodeURIComponent(contact)+
            "&comments=" + encodeURIComponent(ccomments)+
            "&clientname=" + encodeURIComponent(cnames);
  
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


