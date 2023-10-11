

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <link href="style/styleSession.css" rel="stylesheet">
  
</head>
 
</html>

<div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label"><i>Usuario</i></label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
      
    </div>
    <label for="staticProfileId" class="col-sm-2 col-form-label"><i>Id de usuario</i></label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticProfileId" value="">
    </div>
    <label for="staticEmail2" class="col-sm-2 col-form-label"><i>Email</i></label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com">
    </div>

  


    <label for="staticSubscriptionDays" class="col-sm-2 col-form-label"><i>Sesiones activas</i></label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticSubscriptionDaysac" value="">
      <button type="button" class="btn btn-primary1" id="" onclick="changeSection('sessions');getMySessions();">Verificar</button>
    </div>


    <label for="staticEmail" class="col-sm-2 col-form-label"><i>Tipo de perfil</i></i></label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticPerfil" value="email@example.com">
    </div>
</div>







<div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label"><i>Nombres</i></label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputPassword">
    </div>
</div>
<div class="mb-3 row">
    <label for="inputPassword2" class="col-sm-2 col-form-label"><i>Apellidos</i></label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputPassword2">
    </div>
</div>

<button type="button" class="btn btn-primary1" id="updateButton9">Actualizar</button>

<script>
document.addEventListener("DOMContentLoaded", function() {
  // Obtener los elementos del DOM
  const staticProfileIdInput = document.getElementById("staticProfileId");
  const inputPasswordInput = document.getElementById("inputPassword");
  const inputPassword2Input = document.getElementById("inputPassword2");
  const inputPassword2Input1 = document.getElementById("staticEmail2");
  const inputPassword2Input2 = document.getElementById("staticEmail");
  const staticProfileIdInput1 = document.getElementById("staticPerfil");
  const staticSubscriptionDaysInputac = document.getElementById("staticSubscriptionDaysac");

  // Asignar valores desde sessionStorage a los campos
  staticProfileIdInput.value = sessionStorage.getItem("userId");
  inputPasswordInput.value = sessionStorage.getItem("name");
  inputPassword2Input.value = sessionStorage.getItem("lastName");
  inputPassword2Input1.value = sessionStorage.getItem("mail");
  inputPassword2Input2.value = sessionStorage.getItem("userName");
  staticProfileIdInput1.value = sessionStorage.getItem("rolId");
  staticSubscriptionDaysInputac.value = sessionStorage.getItem("sessionCounter");
  

  // Agregar evento al botón de actualizar
  const updateButton = document.getElementById("updateButton9");
  updateButton.addEventListener("click", function() {
    // Obtener valores de los campos y hacer algo con ellos (por ejemplo, enviar a PHP)
    const inputValue = ispublic.value;
    const input2Value = inputPassword.value;
    const input2Value1 = inputPassword2.value;

  // Construir la URL con los parámetros de la petición GET
  var url = 'controller/editMyProfile.php?name=' + encodeURIComponent(input2Value)  + '&lastName=' + encodeURIComponent(input2Value1)+ '&isPublic=' + encodeURIComponent(inputValue);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página
      
      



      obtenerVariablesPHPSession1();
   //actualizarCampos();

   
   ispublic.value = sessionStorage.getItem("isPublic");
   inputPassword.value = sessionStorage.getItem("name");
   inputPassword2.value = sessionStorage.getItem("lastName");
      obtenerVariablesPHP();
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });

    // ...
    // Luego puedes realizar acciones adicionales, como enviar datos a PHP
  });
});


function obtenerVariablesPHPSession1() {

fetch('layout/getPHPVariablesSession.php')
  .then(response => response.json())
  .then(data => {
    // Aquí obtienes los nuevos valores de las variables PHP en el objeto "data"
    // Puedes acceder a los valores como data.mensaje y data.error
    // Por ejemplo:
  

      
    var profileId = data.profileId;
    var userName = data.userName;
    var mail = data.mail;
    var sessionCounter = data.sessionCounter;
    var name = data.name;
    var lastName = data.lastName;
    var rolId = data.rolId;
    var isActive = data.isActive;
    var status = data.status;
    var contact = data.contact;
    var sessionId = data.sessionId;
    var key = data.key;
    var ranCode = data.ranCode;
  sessionStorage.setItem('userId',userId);
  sessionStorage.setItem('userName',userName);
  sessionStorage.setItem('mail',mail);
  sessionStorage.setItem('sessionCounter',sessionCounter);
  sessionStorage.setItem('name',name);
  sessionStorage.setItem('lastName',lastName);
  sessionStorage.setItem('rolId',rolId);
  sessionStorage.setItem('isActive',isActive);
  sessionStorage.setItem('status',status);
  sessionStorage.setItem('contact',contact);
  sessionStorage.setItem('sessionId',sessionId);
  sessionStorage.setItem('key',key);
  sessionStorage.setItem('ranCode',ranCode);
     
      
  //actualizarCampos();
   
   

  })
  .catch(error => {
    console.error('Error al obtener las variables PHP:', error);
  });
}



// Función que se ejecutará al presionar el botón de actualizar
function actualizarCampos() {
  // Obtener los elementos del DOM
  const staticProfileIdInput = document.getElementById("staticProfileId");
  const staticSubscriptionDaysInput = document.getElementById("staticSubscriptionDays");
  const inputPasswordInput = document.getElementById("inputPassword");
  const inputPasswordInputpublic = document.getElementById("ispublic");
  const inputPassword2Input = document.getElementById("inputPassword2");
  const inputPassword2Input1 = document.getElementById("staticEmail2");
  const inputPassword2Input2 = document.getElementById("staticEmail");
  const staticProfileIdInput1 = document.getElementById("staticPerfil");
  const staticSubscriptionDaysInputac = document.getElementById("staticSubscriptionDaysac");

  // Asignar valores desde sessionStorage a los campos
  staticProfileIdInput.value = sessionStorage.getItem("userId");
  inputPasswordInput.value = sessionStorage.getItem("name");
  inputPassword2Input.value = sessionStorage.getItem("lastName");
  inputPassword2Input1.value = sessionStorage.getItem("mail");
  inputPassword2Input2.value = sessionStorage.getItem("userName");
  staticProfileIdInput1.value = sessionStorage.getItem("rolId");
  staticSubscriptionDaysInputac.value = sessionStorage.getItem("sessionCounter");
  // Realizar acciones adicionales si es necesario

  // Por ejemplo, redirigir a una nueva página
 // window.location.href = "nueva_pagina.php";
}

document.addEventListener("DOMContentLoaded", function() {
  // Agregar evento al botón de actualizar
  const actualizarButton = document.getElementById("actualizarButton9");
 //  actualizarButton.addEventListener("click", actualizarCampos);
});
</script>
