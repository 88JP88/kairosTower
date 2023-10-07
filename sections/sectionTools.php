
<div class="container">
<div id="tools" class="email-section" style="text-align: center;">
    



<!-- Split dropstart button -->
<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropstart</span>
  </button>
  <ul class="dropdown-menu">
    <!-- Dropdown menu links -->
    <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
  <button type="button" class="btn btn-secondary">
    Split dropstart
  </button>
</div>

   
    <div class="btn-group">
      <button type="button" class="btn btn-primary1 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Horarios
      </button>
      <ul class="dropdown-menu">
        <li>  <a class="dropdown-item" onclick="changeSection('schedule');getMySchedule();" id="schedule-tab" data-bs-toggle="tab" data-bs-target="#schedule-tab-pane" type="button" role="tab" aria-controls="schedule-tab-pane" aria-selected="true" style="color: #3c3c3b;">Mi horario</a></li>
      </ul>
    </div>
    <div class="btn-group">
      <button type="button" class="btn btn-primary1 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Sesiones
      </button>
      <ul class="dropdown-menu">
        <li>  <a class="dropdown-item" onclick="changeSection('sessions');getPagesAssignModelsHislogs();" id="schedule-tab" data-bs-toggle="tab" data-bs-target="#schedule-tab-pane" type="button" role="tab" aria-controls="schedule-tab-pane" aria-selected="true" style="color: #3c3c3b;">Sesiones activas</a></li>
      </ul>
    </div>
    <div class="btn-group">
      <button type="button" class="btn btn-primary1 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Tareas
      </button>
      <ul class="dropdown-menu dropdown-menu-lg-end">
        <li> <a class="dropdown-item" onclick="changeSection('ptask');getPersonalTask('created');" id="schedule-tab" data-bs-toggle="tab" data-bs-target="#schedule-tab-pane" type="button" role="tab" aria-controls="schedule-tab-pane" aria-selected="true" style="color: #3c3c3b;">Tareas personales</a></li>
        <li> <a class="dropdown-item" onclick="changeSection('gtask');getPagesAssignModelsHislogs();" id="schedule-tab" data-bs-toggle="tab" data-bs-target="#schedule-tab-pane" type="button" role="tab" aria-controls="schedule-tab-pane" aria-selected="true" style="color: #3c3c3b;">Tareas generales</a></li>
       
      </ul>
    </div>

    <div class="btn-group">
      <button type="button" class="btn btn-primary1 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Grupos
      </button>
      <ul class="dropdown-menu dropdown-menu-lg-end">
        <li> <a class="dropdown-item" onclick="changeSection('privgroups');getPagesAssignModelsHislogs();" id="schedule-tab" data-bs-toggle="tab" data-bs-target="#schedule-tab-pane" type="button" role="tab" aria-controls="schedule-tab-pane" aria-selected="true" style="color: #3c3c3b;">Ver</a></li>
       
      </ul>
    </div>
  
    <div class="btn-group">
      <button type="button" class="btn btn-primary1 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Alertas
      </button>
      <ul class="dropdown-menu dropdown-menu-lg-end">
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
      </ul>
    </div>

    <div class="btn-group">
      <button type="button" class="btn btn-primary1 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Correo
      </button>
      <ul class="dropdown-menu dropdown-menu-lg-end">
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
      </ul>
    </div>





        <p>Contenido de los correos enviadosssss...</p>
        <p></p>
      </div>

      
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0"></div>
  <div class="tab-pane fade" id="schedule-tab-pane" role="tabpanel" aria-labelledby="schedule-tab" tabindex="0">contenido de sesiones</div>
  <div class="tab-pane fade" id="tools-tab-pane" role="tabpanel" aria-labelledby="tools-tab" tabindex="0"></div>
  <div class="tab-pane fade" id="alerts-tab-pane" role="tabpanel" aria-labelledby="alerts-tab" tabindex="0">..eeee.</div>
  <div class="tab-pane fade" id="groups-tab-pane" role="tabpanel" aria-labelledby="groups-tab" tabindex="0">..eeee.</div>
  <div class="tab-pane fade" id="sessions-tab-pane" role="tabpanel" aria-labelledby="sessions-tab" tabindex="0">..wwwqqqq.</div>
  <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">.ddf..</div>
</div>

</div>