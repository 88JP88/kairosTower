<div class="container">

<div id="internalClients" class="email-section" style="text-align: center;">
    <h2>
    <button type="button" class="btn btn-primary1" onclick="openModCreateExtClients();"  style="color: #C70039;">Crear cliente</button>
    <button type="button" class="btn btn-primary1" onclick="getInternalClients('unlock');"  style="color: #C70039;">Clientes activos</button>
    <button type="button" class="btn btn-primary1" onclick="getInternalClients('lock');" style="color: #C70039;">Clientes inactivos</button>

  </h2>
    
  <p><H2><I>MIS CLIENTES</I></H2>

    
<?php

require_once 'layout/tableInternalClients.php';
//require_once 'layout/tableInternalUsers.php';
?>

   </p>
    
  </div>
  
</div>