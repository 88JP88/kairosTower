<div class="container email-section" id="internalClients" style="text-align: left;">

  <h1 class="fs-3">Mis Clientes</h1>

  <button type="button" class="btn btn-primary1 edit-button1" onclick="openModCreateExtClients();"  style="color: #C70039;" title="CREAR CLIENTE"><i class="fas fa-folder-plus"></i></button>
    <button type="button" class="btn btn-primary1 edit-button1" onclick="getInternalClients('unlock');"  style="color: #C70039;" title="CLIENTES ACTIVOS"><i class="fas fa-eye"></i></button>
    <button type="button" class="btn btn-primary1 edit-button1" onclick="getInternalClients('lock');" style="color: #C70039;" title="CLIENTES INACTIVOS"><i class="fas fa-eye-slash"></i></button>

    
<?php

require_once  'layout/tableInternalClients.php';
//require_once 'layout/tableInternalUsers.php';
?>


 
    
  
  
</div>



