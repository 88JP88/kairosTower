<! DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>KAIROS TOWER</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">

  
    <link rel="icon" type="image/x-icon" href="public/KAIROS2.png">
  </head>
  <body>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>

    
<div class="notification" id="notification">
        <p id="notificationText"></p>
    </div>
<ul class="nav nav-tabs" id="myTab" role="tablist" style="background-color: #001219; color: #C70039;">

<li class="nav-item" role="presentation" >
    <button class="nav-link active" onclick="changeSection('inbox');" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true" style="color: #C70039;"><a class="navbar-brand" href="#"><img src="public/KAIROS.png" alt="LUGMA" width="50" height="50"></a></button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" onclick="changeSection('copias');" id="api-tab" data-bs-toggle="tab" data-bs-target="#api-tab-pane" type="button" role="tab" aria-controls="api-tab-pane" aria-selected="false" style="color: #C70039;">Gestión de usuarios</button>
  </li>
  
  <li class="nav-item" role="presentation">
    <button class="nav-link" onclick="changeSection('tools');" id="tools-tab" data-bs-toggle="tab" data-bs-target="#tools-tab-pane" type="button" role="tab" aria-controls="tools-tab-pane" aria-selected="false" style="color: #C70039;">Clientes</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" onclick="changeSection('spam');" id="alerts-tab" data-bs-toggle="tab" data-bs-target="#alerts-tab-pane" type="button" role="tab" aria-controls="alerts-tab-pane" aria-selected="false" style="color: #C70039;">Soporte </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" onclick="changeSection('privgroups');" id="groups-tab" data-bs-toggle="tab" data-bs-target="#groups-tab-pane" type="button" role="tab" aria-controls="groups-tab-pane" aria-selected="false" style="color: #C70039;">Informes</button>
  </li>
  <li class="nav-item" role="presentation">

    <!-- Split dropstart button -->
<div class="btn-group nav-item">
  
  <ul class="dropdown-menu">
    <!-- Dropdown menu links -->
    <li><button class="dropdown-item nav-item" onclick="openModCloseSession();" type="button" role="tab" style="color: #C70039;">Salir</button></li>
        
        <li><a class="dropdown-item nav-item" href="#" style="color: #C70039;">Compartir</a></li>
        <li><a class="dropdown-item nav-item" href="#" style="color: #C70039;">Informe de errores</a></li>
  </ul>
  <button class="nav-link" id="actualizarButton" onclick="openModMyProfile('importantes');profileInfoLog();" type="button" role="tab" style="color: #C70039;">Perfil</button>
  <button type="button" class="btn nav-link dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" style="color: #C70039;">
    <span class="visually-hidden nav-link" >Toggle Dropstart</span>
  </button>
</div>


   
  </li>
  
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0"></div>
  <div class="tab-pane fade" id="api-tab-pane" role="tabpanel" aria-labelledby="api-tab" tabindex="0">..www.</div>
  <div class="tab-pane fade" id="tools-tab-pane" role="tabpanel" aria-labelledby="tools-tab" tabindex="0">qqq</div>
  <div class="tab-pane fade" id="alerts-tab-pane" role="tabpanel" aria-labelledby="alerts-tab" tabindex="0">..eeee.</div>
  <div class="tab-pane fade" id="groups-tab-pane" role="tabpanel" aria-labelledby="groups-tab" tabindex="0">..eeee.</div>
  <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">.ddf..</div>
</div>
</body>
</html>

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



function obtenerVariablesPHPSession() {

  fetch('layout/getPHPVariablesSession.php')
    .then(response => response.json())
    .then(data => {
      // Aquí obtienes los nuevos valores de las variables PHP en el objeto "data"
      // Puedes acceder a los valores como data.mensaje y data.error
      // Por ejemplo:
      var nuevoMensaje = data.mensaje;
      var nuevoError = data.error;


      if(nuevoError==="true"){
        

        
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
      var subDays = data.subDays;
      var subId = data.subId;
      var sessionId = data.sessionId;
      var key = data.key;
      var ranCode = data.ranCode;
      var isPublic = data.isPublic;
      var subDomain = data.subDomain;
    sessionStorage.setItem('profileId',profileId);
    sessionStorage.setItem('userName',userName);
    sessionStorage.setItem('mail',mail);
    sessionStorage.setItem('sessionCounter',sessionCounter);
    sessionStorage.setItem('name',name);
    sessionStorage.setItem('lastName',lastName);
    sessionStorage.setItem('rolId',rolId);
    sessionStorage.setItem('isActive',isActive);
    sessionStorage.setItem('status',status);
    sessionStorage.setItem('contact',contact);
    sessionStorage.setItem('subDays',subDays);
    sessionStorage.setItem('subId',subId);
    sessionStorage.setItem('sessionId',sessionId);
    sessionStorage.setItem('key',key);
    sessionStorage.setItem('ranCode',ranCode);
    sessionStorage.setItem('isPublic',isPublic);
    sessionStorage.setItem('subDomain',subDomain);
        var re="success";
        
      }
      if(nuevoError==="false"){
      
        var re="error";
        
      }
      

     
if(nuevoMensaje==""){
  if(subDays==0){
    openModSub();
  }if(subDays>0 && subDays<6){
    var mess="¡Tienes "+sessionStorage.getItem('subDays')+" días de suscripción!"
    mostrarNotificacion(mess, "error");

  }
}else{
  mostrarNotificacion(nuevoMensaje, re);
  if(subDays==0){
    openModSub();
    
  }if(subDays>0 && subDays<6){
    var mess="¡Tienes "+sessionStorage.getItem('subDays')+" días de suscripción!"
    mostrarNotificacion(mess, "error");
  }
}
     

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

<script>obtenerVariablesPHPSession();</script>





<script>

function sessionStatus() {
  
  fetch('controller/sessionStatus.php')
    .then(response => response.json())
    .then(data => {
      // Aquí obtienes los nuevos valores de las variables PHP en el objeto "data"
      // Puedes acceder a los valores como data.mensaje y data.error
      // Por ejemplo:
      var sessionStatus = data.sessionStatus;
      


    
        if(sessionStatus==0){


          sessionStorage.clear();
          openModCloseSessionf();

        }if(sessionStatus==1){


          //console.log("Ejecutando sessionStatus() cada 10 segundos");

        }


    
      

     
     

    })
    .catch(error => {
      console.error('Error al obtener las variables PHP:', error);
    });
}
sessionStatus();
setInterval(sessionStatus, 60000); // 10000 milisegundos = 10 segundos








function profileInfoLog() {
  
  fetch('controller/profileInfoLog.php')
    .then(response => response.json())
    .then(data => {
      // Aquí obtienes los nuevos valores de las variables PHP en el objeto "data"
      // Puedes acceder a los valores como data.mensaje y data.error
      // Por ejemplo:
      var name = data.name;
      var lastName = data.lastName;
      
      var sessionCounter = data.sessionCounter;
      
      var subDays = data.subDays;
      
      var subId = data.subId;
      var isPublic = data.isPublic;
      


      sessionStorage.setItem('sessionCounter',sessionCounter);
    sessionStorage.setItem('name',name);
    sessionStorage.setItem('lastName',lastName);
    sessionStorage.setItem('subDays',subDays);
    sessionStorage.setItem('subId',subId);
    sessionStorage.setItem('isPublic',isPublic);

    actualizarCampos();
      

     
     

    })
    .catch(error => {
      console.error('Error al obtener las variables PHP:', error);
    });
}
</script>