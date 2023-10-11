
<div class="container">

<div id="gtask" class="email-section" style="text-align: center;">
    <h2>
    <button type="button" class="btn btn-primary1" onclick="openModCreateUser();" style="color: #C70039;">Crear usuario interno</button>
    <button type="button" class="btn btn-primary1" onclick="getInternalUsers('unlock');"  style="color: #C70039;">Usuarios activos</button>
    <button type="button" class="btn btn-primary1" onclick="getInternalUsers('lock');" style="color: #C70039;">Usuarios inactivos</button>

  </h2>
    
      
<?php

require_once 'layout/tableInternalUsers.php';
?>

    </p>
    
  </div>
  
</div>