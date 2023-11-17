<div class="container">

<div id="generalUsers" class="email-section" style="text-align: center;">
   
    
  <p><H2><I>USUARIOS GENERALES</I></H2>

  <h2>
  <button type="button" class="btn btn-primary1 edit-button1" onclick="openModCreateUser();getInternalClientsList();<?php echo $_SESSION['tipoUsuario'] = 2; ?>" style="color: #C70039;" title="CREAR USUARIO INTERNO"><i class="fas fa-user-plus"></i></button>
   
    <button type="button" class="btn btn-primary1 edit-button1" onclick="getGeneralUsers('unlock','all');"  style="color: #C70039;" title="VER USUARIOS ACTIVOS"><i class="fas fa-eye"></i></button>
    <button type="button" class="btn btn-primary1 edit-button1" onclick="getGeneralUsers('lock','all');" style="color: #C70039;" title="VER USUARIOS INACTIVOS"><i class="fas fa-eye-slash"></i></button>

  </h2>
    
<?php

require_once 'layout/tableGeneralUsers.php';
?>


   </p>
    
  </div>
  
</div>