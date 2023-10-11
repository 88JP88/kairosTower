<div class="container">

<div id="generalUsers" class="email-section" style="text-align: center;">
    <h2>
    <button type="button" class="btn btn-primary1" onclick="openModCreateUserClient();getInternalClientsList();" style="color: #C70039;">Crear usuario cliente</button>
    <button type="button" class="btn btn-primary1" onclick="getGeneralUsers('unlock');"  style="color: #C70039;">Usuarios activos</button>
    <button type="button" class="btn btn-primary1" onclick="getGeneralUsers('lock');" style="color: #C70039;">Usuarios inactivos</button>

  </h2>
    
  <p><H2><I>USUARIOS GENERALES</I></H2>

 
    
<?php

require_once 'layout/tableGeneralUsers.php';
?>


   </p>
    
  </div>
  
</div>