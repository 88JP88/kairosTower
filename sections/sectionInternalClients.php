<div class="container">

<div id="internalClients" class="email-section" style="text-align: center;">
    
    
  <p><H2><I>MIS CLIENTES</I></H2>
  <h2>
    <button type="button" class="btn btn-primary1 edit-button1" onclick="openModCreateExtClients();"  style="color: #C70039;" title="CREAR CLIENTE"><i class="fas fa-folder-plus"></i></button>
    <button type="button" class="btn btn-primary1 edit-button1" onclick="getInternalClients('unlock');"  style="color: #C70039;" title="CLIENTES ACTIVOS"><i class="fas fa-eye"></i></button>
    <button type="button" class="btn btn-primary1 edit-button1" onclick="getInternalClients('lock');" style="color: #C70039;" title="CLIENTES INACTIVOS"><i class="fas fa-eye-slash"></i></button>

  </h2>
    
<?php

require_once 'layout/tableInternalClients.php';
//require_once 'layout/tableInternalUsers.php';
?>

   </p>
    
  </div>
  
</div>