<div class="container">

<div id="ptask" class="email-section" style="text-align: center;">
    <h2>
    <button type="button" class="btn btn-primary1" onclick="openModCreateExtClients();" id="schedule-tab" data-bs-toggle="tab" data-bs-target="#schedule-tab-pane" type="button" role="tab" aria-controls="schedule-tab-pane" aria-selected="true" style="color: #3c3c3b;">Crear cliente</button>
    <button type="button" class="btn btn-primary1" onclick="changeSection('gtask');" id="schedule-tab" data-bs-toggle="tab" data-bs-target="#schedule-tab-pane" type="button" role="tab" aria-controls="schedule-tab-pane" aria-selected="true" style="color: #3c3c3b;">Validar usuarios</button>

  </h2>
    
  <p><H2><I>MIS CLIENTES</I></H2>

    
<?php

require_once 'layout/tableInternalClients.php';
?>

   </p>
    
  </div>
  
</div>