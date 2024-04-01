<! DOCTYPE html>
<style>
  :root {
    --color-hover: #C70039;        /* Define una variable CSS para el color de hover */
    --bg-color-hover: #001219;     /* Define una variable CSS para el fondo de hover */
    --border-color-hover: #001219; /* Define una variable CSS para el borde de hover */
  }

 
</style>

<script>
  
    document.addEventListener("DOMContentLoaded", function () {
      // Obtén los valores de sessionStorage o establece valores predeterminados
      var colorHover = sessionStorage.getItem("txtColor") || "#C70039";
      var bgColorHover = sessionStorage.getItem("bgColor") || "#001219";
      var borderColorHover = sessionStorage.getItem("borderColorHover") || "#001219";

      // Establece las variables CSS con los valores obtenidos
      document.documentElement.style.setProperty('--color-hover', colorHover);
      document.documentElement.style.setProperty('--bg-color-hover', bgColorHover);
      document.documentElement.style.setProperty('--border-color-hover', borderColorHover);
    });
    profileInfoLog();
  </script>
<script  src="../scripts/gets/getMySessions.js"></script>
<!-- ... -->




<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php session_start();echo $_SESSION['clientNameResponse'];?></title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">

  
    <link rel="icon" type="image/x-icon" href="<?php echo $_SESSION['imgIcon'];?>">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
  </head>
  <body>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
<script></script>
    
<div class="notification" id="notification">
        <p id="notificationText"></p>
    </div>
<ul class="nav nav-tabs" id="myTab" role="tablist" style="background-color: #<?php echo $_SESSION['bgColor'];?>; color: #<?php echo $_SESSION['txtColor'];?>;">

<li class="nav-item" role="presentation" >
    <button class="nav-link active" onclick="changeSection('inbox');" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true" style="color: #<?php echo $_SESSION['txtColor']?>;"><a class="navbar-brand" href="#"><img src="<?php echo $_SESSION['imgLogo']?>" alt="LUGMA" width="50" height="50"></a></button>
  </li>
  


  <div class="btn-group">
      <button type="button" class="btn btn-primary1 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      <i class="fas fa-users"></i> Gestión de usuarios
      </button>
      <ul class="dropdown-menu dropdown-menu-lg-end">
        <li><a class="dropdown-item" onclick="changeSection('generalUsers');getGeneralUsers('unlock','free');" id="schedule-tab" data-bs-toggle="tab" data-bs-target="#schedule-tab-pane" type="button" role="tab" aria-controls="schedule-tab-pane" aria-selected="true" style="color: #<?php echo $_SESSION['txtColor']?>;"><i class="fas fa-users"></i> Usuarios sin cuenta</a></li>
        <li><a class="dropdown-item" onclick="changeSection('internalUsers');getInternalUsers('unlock');" id="schedule-tab" data-bs-toggle="tab" data-bs-target="#schedule-tab-pane" type="button" role="tab" aria-controls="schedule-tab-pane" aria-selected="true" style="color: #<?php echo $_SESSION['txtColor']?>;"><i class="fas fa-toolbox"></i> Usuarios con cuenta</a></li>
       
      </ul>
    </div> 

    <div class="btn-group">
      <button type="button" class="btn btn-primary1 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      <i class="fas fa-building"></i> Gestión
      </button>
      <ul class="dropdown-menu dropdown-menu-lg-end">
        <li> <a class="dropdown-item" onclick="changeSection('internalClients');getInternalClients('unlock');" id="schedule-tab" data-bs-toggle="tab" data-bs-target="#schedule-tab-pane" type="button" role="tab" aria-controls="schedule-tab-pane" aria-selected="true" style="color: #<?php echo $_SESSION['txtColor']?>;"><i class="fas fa-building"></i> Mi cliente</a></li>
        <li> <a class="dropdown-item" onclick="changeSection('internalUsers1');getClientStyle(sessionStorage.getItem('clientId'));" id="schedule-tab" data-bs-toggle="tab" data-bs-target="#schedule-tab-pane" type="button" role="tab" aria-controls="schedule-tab-pane" aria-selected="true" style="color: #<?php echo $_SESSION['txtColor']?>;"><i class="fas fa-building"></i> Comercio</a></li>
       
       
      </ul>
     
    </div> 


    
  <div class="btn-group">
      <button type="button" class="btn btn-primary1 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      <i class="fas fa-headset"></i> Soporte
      </button>
      <ul class="dropdown-menu dropdown-menu-lg-end">
        <li> <a class="dropdown-item" onclick="changeSection('ptask');getPersonalTask('created');" id="schedule-tab" data-bs-toggle="tab" data-bs-target="#schedule-tab-pane" type="button" role="tab" aria-controls="schedule-tab-pane" aria-selected="true" style="color: #<?php echo $_SESSION['txtColor']?>;">Soporte externo</a></li>
        <li> <a class="dropdown-item" onclick="changeSection('gtask');getPagesAssignModelsHislogs();" id="schedule-tab" data-bs-toggle="tab" data-bs-target="#schedule-tab-pane" type="button" role="tab" aria-controls="schedule-tab-pane" aria-selected="true" style="color: #<?php echo $_SESSION['txtColor']?>;">Soporte interno</a></li>
       
      </ul>
    </div> 
    <div class="btn-group">
      <button type="button" class="btn btn-primary1 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      <i class="fas fa-info"></i> Informes
      </button>
      <ul class="dropdown-menu dropdown-menu-lg-end">
        <li> <a class="dropdown-item" onclick="changeSection('ptask');getPersonalTask('created');" id="schedule-tab" data-bs-toggle="tab" data-bs-target="#schedule-tab-pane" type="button" role="tab" aria-controls="schedule-tab-pane" aria-selected="true" style="color: #<?php echo $_SESSION['txtColor']?>;">Generar informe</a></li>
        <li> <a class="dropdown-item" onclick="changeSection('gtask');getPagesAssignModelsHislogs();" id="schedule-tab" data-bs-toggle="tab" data-bs-target="#schedule-tab-pane" type="button" role="tab" aria-controls="schedule-tab-pane" aria-selected="true" style="color: #<?php echo $_SESSION['txtColor']?>;">Verificar informes</a></li>
       
      </ul>
    </div> 



  
  <ul class="dropdown-menu">
    <!-- Dropdown menu links -->
    <li><button class="dropdown-item nav-item" onclick="openModCloseSession();" type="button" role="tab" style="color: #<?php echo $_SESSION['txtColor']?>;">Salir</button></li>
    <li><a class="dropdown-item" onclick="changeSection('sessions');getMySessions();" id="schedule-tab" data-bs-toggle="tab" data-bs-target="#schedule-tab-pane" type="button" role="tab" aria-controls="schedule-tab-pane" aria-selected="true" style="color: #<?php echo $_SESSION['txtColor']?>;">Sesiones activas</a></li>
        <li><a class="dropdown-item nav-item" href="#" style="color: #<?php echo $_SESSION['txtColor']?>;">Informe de errores</a></li>
  </ul>
  <button class="nav-link" id="actualizarButton" onclick="openModMyProfile('importantes');profileInfoLog();" type="button" role="tab" style="color: #<?php echo $_SESSION['txtColor']?>;"><i class="fas fa-user-check"></i> Perfil</button>
  <button type="button" class="btn nav-link dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" style="color: #<?php echo $_SESSION['txtColor']?>;">
  <i class="fas fa-exclamation"></i><span class="visually-hidden nav-link" >Toggle Dropstart</span>
  </button>
</div>
    </div> 


   
  </li>
  
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">rtyu</div>
  <div class="tab-pane fade" id="api-tab-pane" role="tabpanel" aria-labelledby="api-tab" tabindex="0">..www.</div>
  <div class="tab-pane fade" id="tools-tab-pane" role="tabpanel" aria-labelledby="tools-tab" tabindex="0">qqq</div>
  <div class="tab-pane fade" id="alerts-tab-pane" role="tabpanel" aria-labelledby="alerts-tab" tabindex="0">..eeee.</div>
  <div class="tab-pane fade" id="groups-tab-pane" role="tabpanel" aria-labelledby="groups-tab" tabindex="0">..eeee.</div>
  <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">.ddf..</div>
</div>
</body>
</html>
<script  src="../scripts/data/credentials.js"></script>
<script  src="../scripts/data/endPoints.js"></script>
<script  src="../scripts/data/showNotify.js"></script>
<script  src="../scripts/gets/messageVariables.js"></script>
<script  src="../scripts/gets/getSessionVariables.js"></script>
<script  src="../scripts/gets/sessionStatus.js"></script>
<script  src="../scripts/gets/profileInfoLog.js"></script>
<script  src="../scripts/gets/getMySessions.js"></script>
<script  src="../../scripts/posts/postStores.js"></script>

<script  src="../../scripts/posts/postAssignRoom.js"></script>
<script  src="../../scripts/posts/postCatalogs.js"></script>
<script  src="../../scripts/posts/postCategories.js"></script>
<script  src="../../scripts/posts/postCustomer.js"></script>
<script  src="../../scripts/posts/postDelivery.js"></script>
<script  src="../../scripts/posts/postProducts.js"></script>
<script src="../../qrcodejs/qrcode.min.js"></script>


<div id="loading-container" class="loading-container">
  <div class="loading-icon"></div>
</div>



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
<style>
    .password-container {
        position: relative;
    }

    .toggle-password {
        display: block; /* Muestra el botón como un bloque, debajo del campo de contraseña */
        margin-top: 5px; /* Agrega un margen superior para separar el botón del campo de contraseña */
        cursor: pointer;
    }
</style>
<script></script>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    // Verifica si la página ya se recargó una vez
    var recargada = sessionStorage.getItem("recargada");

    // Si no se ha recargado, recarga la página y marca como recargada
    if (!recargada) {
      sessionStorage.setItem("recargada", "true");
      profileInfoLog();
      location.reload();
      
    }
  });
</script>
