<div class="container email-section" id="generalUsers" style="text-align: left;">

  <h1 class="fs-3">Usuarios Generales</h1>

 
  <button type="button" class="btn btn-primary1 edit-button1" onclick="openModCreateUser();getInternalClientsList();<?php echo $_SESSION['tipoUsuario'] = 2; ?>" style="color: #C70039;" title="CREAR USUARIO INTERNO"><i class="fas fa-user-plus"></i></button>
   
    <button type="button" class="btn btn-primary1 edit-button1" onclick="getGeneralUsers('unlock','all');"  style="color: #C70039;" title="VER USUARIOS ACTIVOS"><i class="fas fa-eye"></i></button>
    <button type="button" class="btn btn-primary1 edit-button1" onclick="getGeneralUsers('lock','all');" style="color: #C70039;" title="VER USUARIOS INACTIVOS"><i class="fas fa-eye-slash"></i></button>

 
    
<?php

require_once 'layout/tableGeneralUsers.php';
?>


 
    
  
  
</div>