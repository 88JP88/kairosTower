
<div class="container-fluid email-section" style="text-align: left;" id="gtask">


<!-- CONTENEDOR DEL CALENDARIO-->

<div id="calendar" class="mt-2" style="width: 100%; height: 100%;"></div>
    


  </div>


  <div class="subMenu" >
  <h1 class="fs-3">Clientes Internos</h1>
    
  
   <button type="button" class="btn btn-dark btn-lg" onclick="openModCreateUser();
      <?php echo $_SESSION['tipoUsuario'] = 1; ?>" title="CREAR USUARIO INTERNO"><i 
      class="fas fa-user-plus"></i>
   </button>
   <button type="button" class="btn btn-dark btn-lg" onclick="getInternalUsers('unlock');"
     style="color: #C70039;" title="VER USUARIOS ACTIVOS"><i class="fas fa-eye"></i>
   </button>
   <button type="button" class="btn btn-dark btn-lg" onclick="getInternalUsers('lock');"
    style="color: #C70039;" title="VER USUARIOS INACTIVOS"><i class="fas fa-eye-slash"></i>
  </button>
      <!-- Button trigger modal -->
   <button type="button" class="btn btn-dark btn-lg m-2" style="width: 100%;" data-bs-toggle="modal" 
   data-bs-target="#modalEvent" data-target="#modalEvent" 
   onclick="getClientRoomsList();getClientCalendarList('random');">
            Crear evento
   </button>
              


 
  <!-- CONTENEDOR DEL MODAL-->
           

              <!-- Modal -->
              <div class="modal fade" id="modalEvent" tabindex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content" id="modalBackglound" style="background-color: #001219;">
                      <div class="modal-header">
                      <div class="row">
                     <div class="col-2"></div>
                     <div class="col-2"><img class="" src="public/KAIROS2.png" style="height: 45px; width: 45px;" ></div>
                     <div class="col-8"><h1 class="ms-4 fs-3 text-light">Crear evento</h1></div></div>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    <div class="modal-body">
                      <div class="container-fluid">
                        
                        <form action="../controller/controllerCreateEvent.php" method="post">
                            <div class="mb-3 ">
                           
                              <input type="hidden" id="idEvent">

                              <label for="" class="form-label text-light">Nombre del evento</label>
                              <input type="text" class="form-control" id="eventName">

                              <label for="" class="form-label text-light">Descripcion</label>
                              <input type="text" class="form-control" id="eventDescription">

                              <label for="" class="form-label text-light">Nombre del cliente</label>
                              <input type="text" class="form-control" id="eventClientName">

                              
                              <label for="" class="text-light">fecha inicio</label>
                              <input type="datetime-local" class="form-control"  id="dateStart">

                              <label for="" class="text-light">fecha final</label>  
                              <input type="datetime-local" class="form-control" id="dateEnd">
                             
                              <input type="hidden" id="url" value="localhost/kairosTower/index.php">

                              <label for="floatingInput" class="text-light">Seleccione el estado</label> 
                                <select class="form-select form-select-sm" aria-label="form-select-sm example" id="state">
                                  <option selected>Estado</option>
                                  <option value="Agendado">Agendado</option>
                                  <option value="Pendiente">Pendiente</option>
                                  <option value="Disponible">Disponible</option>
                                </select>

                          
                              <label for="floatingInput" class="text-light">Seleccione el cliente</label>  
                              <select class="form-select form-select-sm" name="" id="random"></select>
                              <button type="button" class="btn btn-dark mt-1" style="width: 100%;"  onclick="miFuncion('random','selectClient');"> validar</button>

                               <label for="floatingInput" class="text-light">Seleccione el sala</label>  
                              <select id="selectClient" class="form-control" name="currency"> </select>

                            </div>
                        </form>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                      <button type="button" class="btn btn-primary" id="lectorEvento">Guardar</button>
                    </div>
                  </div>
                </div>
              </div>


              <!-- MODAL DE PRUEBA DATECLICK  -->
              <div id="myModal" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <div id="modalContent"></div>
    </div>
  </div>
<script src="script/calendar.js"></script>


<script>
  var modalId = document.getElementById('modalId');

  modalId.addEventListener('show.bs.modal', function (event) {
      // Button that triggered the modal
      let button = event.relatedTarget;
      // Extract info from data-bs-* attributes
      let recipient = button.getAttribute('data-bs-whatever');

    // Use above variables to manipulate the DOM
  });
</script>




<!-- Optional: Place to the bottom of scripts -->
<script>
  const myModal = new bootstrap.Modal(document.getElementById('modalId'), options)

</script>                               


<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0"></div>
  <div class="tab-pane fade" id="api-tab-pane" role="tabpanel" aria-labelledby="api-tab" tabindex="0">..www.</div>
  <div class="tab-pane fade" id="tools-tab-pane" role="tabpanel" aria-labelledby="tools-tab" tabindex="0">qqq</div>
  <div class="tab-pane fade" id="alerts-tab-pane1" role="tabpanel" aria-labelledby="alerts-tab1" tabindex="0">..eeee.</div>
  <div class="tab-pane fade" id="groups-tab-pane" role="tabpanel" aria-labelledby="groups-tab" tabindex="0">..eeee.</div>
  <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">.ddf..</div>
</div>
<div class="notification" id="notification">
        <p id="notificationText"></p>
    </div>

    
<script src="script/notification.js">

</script>
<style>
.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #4CAF50;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    display: none;
    z-index: 9999;
    animation: slideIn 8s forwards, slideOut 10s forwards;
}
.notification.error {
    background-color: #f44336;
}
@keyframes slideIn {
    0% {
        transform: translateX(100%);
        opacity: 0;
    }
    80% {
        transform: translateX(-10%);
        opacity: 1;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}
@keyframes slideOut {
    0% {
        transform: translateX(0);
        opacity: 1;
    }
    100% {
        transform: translateX(100%);
        opacity: 0;
    }
}
</style>
<script> obtenerVariablesPHPSession();</script>
<script src="scripts/posts/postFullCalendar.js"></script>


    </p>
    
  
  
</div>