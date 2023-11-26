<! DOCTYPE html>

<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>KAIROS TOWER</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">

  
    <link rel="icon" type="image/x-icon" href="public/KAIROS2.png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
 
   <!--links fullcalendar-->
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fullcalendar@5.6.0/main.css">
     <!--<script src="https://cdn.jsdelivr.net/npm/fullcalendar@6.1.9/index.global.min.js"></script>-->
   <script src="https://cdn.jsdelivr.net/npm/fullcalendar@5.6.0/main.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/fullcalendar@5.6.0/locales-all.js"></script>
    <link rel="stylesheet" href="style/styleSession.php">
  </head>
  <body>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
<script></script>
    
<div class="notification" id="notification">
        <p id="notificationText"></p>
    </div>



       <!--BARRA DE NAVEGACION DE PRUEBA-->
<nav class="navbar navbar-expand-lg  navbarBootstrap">
  <div class="container-fluid">
    
    <button class="nav-link active" onclick="changeSection('inbox');" id="home-tab" 
    data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" 
    aria-controls="home-tab-pane" aria-selected="true" style="color: #C70039;">
      <a class="navbar-brand btn-primary1 text-light mt-4 fs-3 " href="#">
        <img src="public/KAIROS2.png" alt="LUGMA" class="me-1" width="45" height="45">
        Kairos Tower
      </a>
    </button>
   

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
     aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>


    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

      <li class="nav-item dropdown br-0 btn-primary1" >
          <a class="btn btn-primary1 dropdown-toggle" href="#" role="button" type="button"
            data-bs-toggle="dropdown" aria-expanded="false"  >
            <i class="fas fa-users"></i> Usuarios
          </a>
          <ul class="dropdown-menu br-0">
            <li>
              <a class="dropdown-item" onclick="changeSection('generalUsers');
                getGeneralUsers('unlock','free');" id="schedule-tab" data-bs-toggle="tab" 
                data-bs-target="#schedule-tab-pane" type="button" role="tab" 
                aria-controls="schedule-tab-pane" aria-selected="true" 
                style="color: #3c3c3b;">
                <i class="fas fa-users"></i> 
                Usuarios generales
              </a>
            </li>
            
            <li>
              <a class="dropdown-item" onclick="changeSection('internalUsers');
              getInternalUsers('unlock');" id="schedule-tab" data-bs-toggle="tab"
               data-bs-target="#schedule-tab-pane" type="button" role="tab"
                aria-controls="schedule-tab-pane" aria-selected="true" style="color: #3c3c3b;">
                <i class="fas fa-toolbox"></i> 
                Usuarios internos
              </a>
            </li>

          </ul>
      </li>

      <li class="nav-item dropdown br-0 btn-primary1" >
          <a class="btn btn-primary1 dropdown-toggle" href="#" role="button" type="button"
            data-bs-toggle="dropdown" aria-expanded="false"  >
            <i class="fas fa-users"></i> 
            Clientes
          </a>
          <ul class="dropdown-menu br-0">
            <li> 
              <a class="dropdown-item" onclick="changeSection('internalClients');
                getInternalClients('unlock');" id="schedule-tab" data-bs-toggle="tab" 
                data-bs-target="#schedule-tab-pane" type="button" role="tab" 
                aria-controls="schedule-tab-pane" aria-selected="true" style="color: #3c3c3b;">
                <i class="fas fa-building"></i> 
                Clientes externos
              </a>
            </li>

            <li> 
              <a class="dropdown-item" onclick="changeSection('gtask');getIndentFullCalendar();"
               id="schedule-tab" data-bs-toggle="tab" data-bs-target="#schedule-tab-pane" type="button" 
               role="tab" aria-controls="schedule-tab-pane" aria-selected="true" style="color: #3c3c3b;">
               <i class="fas fa-warehouse"></i> 
               Clientes internos
              </a>
            </li>
          </ul>
      </li>

      <li class="nav-item dropdown br-0 btn-primary1" >
          <a class="btn btn-primary1 dropdown-toggle" href="#" role="button" type="button"
            data-bs-toggle="dropdown" aria-expanded="false"  >
            <i class="fas fa-headset"></i> 
             Soporte
          </a>
          <ul class="dropdown-menu br-0">
            <li> 
              <a class="dropdown-item" onclick="changeSection('ptask');getPersonalTask('created');" 
                id="schedule-tab" data-bs-toggle="tab" data-bs-target="#schedule-tab-pane" type="button" 
                role="tab" aria-controls="schedule-tab-pane" aria-selected="true" style="color: #3c3c3b;">
                Soporte externo
              </a>
            </li>
         
            <li> 
              <a class="dropdown-item" onclick="changeSection('gtask');getPagesAssignModelsHislogs();" 
                id="schedule-tab" data-bs-toggle="tab" data-bs-target="#schedule-tab-pane" type="button" 
                role="tab" aria-controls="schedule-tab-pane" aria-selected="true" style="color: #3c3c3b;">
                Soporte interno
              </a>
            </li>
       
          </ul>
      </li>

      <li class="nav-item dropdown br-0 btn-primary1" >
          <a class="btn btn-primary1 dropdown-toggle" href="#" role="button" type="button"
            data-bs-toggle="dropdown" aria-expanded="false"  >
            <i class="fas fa-info"></i> Informes
          </a>
          <ul class="dropdown-menu br-0">
            <li> 
              <a class="dropdown-item" onclick="changeSection('ptask');getPersonalTask('created');" id="schedule-tab" 
                data-bs-toggle="tab" data-bs-target="#schedule-tab-pane" type="button" role="tab" aria-controls="schedule-tab-pane"
                 aria-selected="true" style="color: #3c3c3b;">
                 Generar informe
              </a>
            </li>
      
         
            <li> 
              <a class="dropdown-item" onclick="changeSection('gtask');getPagesAssignModelsHislogs();" id="schedule-tab"
               data-bs-toggle="tab" data-bs-target="#schedule-tab-pane" type="button" role="tab" 
               aria-controls="schedule-tab-pane" aria-selected="true" style="color: #3c3c3b;">
               Verificar informes
              </a>
            </li>
       
          </ul>
      </li>
    
  
      <li class="nav-item dropdown br-0 btn-primary1" >
          <a class="btn btn-primary1 dropdown-toggle" onclick="openModMyProfile('importantes');profileInfoLog();"
           href="#" role="button" type="button" id="actualizarButton"
            data-bs-toggle="dropdown" aria-expanded="false"  >
            <i class="fas fa-user-check"></i> 
            Perfil
          </a>
      </li>

      <li class="nav-item dropdown br-0 btn-primary1" >
          <a class="btn btn-primary1 dropdown-toggle" href="#" role="button" type="button"
           data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fas fa-exclamation"></i>
            <span class="visually-hidden nav-link" >Toggle Dropstart</span>
          </a>
      </li>
      
   
      </div>
  </div> 
</nav>


    


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
<script  src="scripts/data/credentials.js"></script>
<script  src="scripts/data/endPoints.js"></script>
<script  src="scripts/data/showNotify.js"></script>
<script  src="scripts/gets/messageVariables.js"></script>
<script  src="scripts/gets/getSessionVariables.js"></script>
<script  src="scripts/gets/sessionStatus.js"></script>
<script  src="scripts/gets/profileInfoLog.js"></script>
<script  src="scripts/gets/getMySessions.js"></script>
<script  src="scripts/posts/postFullCalendar.js"></script>


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
