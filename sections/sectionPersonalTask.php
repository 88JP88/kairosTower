<div class="container">

<div id="ptask" class="email-section" style="text-align: center;">
    <h2>
    <button type="button" class="btn btn-primary1" onclick="changeSection('tools');" id="schedule-tab" data-bs-toggle="tab" data-bs-target="#schedule-tab-pane" type="button" role="tab" aria-controls="schedule-tab-pane" aria-selected="true" style="color: #3c3c3b;">Herramientas</button>
    <button type="button" class="btn btn-primary1" onclick="changeSection('gtask');" id="schedule-tab" data-bs-toggle="tab" data-bs-target="#schedule-tab-pane" type="button" role="tab" aria-controls="schedule-tab-pane" aria-selected="true" style="color: #3c3c3b;">Tareas generales</button>

  </h2>
    
  <p><H2><I>MIS TAREAS</I></H2>

  <button class="btn btn-primary1" onclick="openModPersonalTask();" type="button" role="tab" style="color: #3c3c3b;">Crear tarea</button>
    
<?php

require_once 'layout/tablePersonalTask.php';
?>

   </p>
    
  </div>
  
</div>