<div class="container">

<div id="privgroups" class="email-section" style="text-align: center;">
    <h2>
    <button type="button" class="btn btn-primary1" onclick="changeSection('tools');" id="schedule-tab" data-bs-toggle="tab" data-bs-target="#schedule-tab-pane" type="button" role="tab" aria-controls="schedule-tab-pane" aria-selected="true" style="color: #3c3c3b;">Herramientas</button>

  </h2>
    
  <p><H2><I>GRUPOS</I></H2>

  <button class="btn btn-primary1" onclick="openModCreateGroup();" type="button" role="tab" style="color: #3c3c3b;">Crear grupo</button>
    
<?php

require_once 'layout/tablePrivateGroups.php';
?>


   </p>
    
  </div>
  
</div>