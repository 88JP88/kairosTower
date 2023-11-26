
<div class="container">

<div id="gtask" class="email-section" style="text-align: center;">
<p><H2><I>USUARIOS INTERNOS</I></H2>
    <h2>
  
  
    <button type="button" class="btn btn-primary1 edit-button1" onclick="openModCreateUser();<?php echo $_SESSION['tipoUsuario'] = 1; ?>" style="color: #C70039;" title="CREAR USUARIO INTERNO"><i class="fas fa-user-plus"></i></button>
    <button type="button" class="btn btn-primary1 edit-button1" onclick="getInternalUsers('unlock');"  style="color: #C70039;" title="VER USUARIOS ACTIVOS"><i class="fas fa-eye"></i></button>
    <button type="button" class="btn btn-primary1 edit-button1" onclick="getInternalUsers('lock');" style="color: #C70039;" title="VER USUARIOS INACTIVOS"><i class="fas fa-eye-slash"></i></button>

  </h2>

 


<!-- CONTENEDOR DEL CALENDARIO-->
<div class="container">
  
<div class="row mb-0 subMenu" style="background-color:#E4E4E4"> 

  <!-- CONTENEDOR DEL MODAL-->
              <!-- Button trigger modal -->
              <button type="button" class="btn btn-dark btn-lg" style="height: 100%;" data-bs-toggle="modal" data-bs-target="#modalEvent" data-target="#modalEvent" onclick="getClientRoomsList();getClientCalendarList('random');">
                Crear evento
              </button>
              

              <!-- Modal -->
              <div class="modal fade" id="modalEvent" tabindex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content" id="modalBackglound">
                      <div class="modal-header">
                      <div class="row">
                     <div class="col-2"></div>
                     <div class="col-2"><img class="mt-3" src="../public/KAIROS2.png" alt="" width="72" height="57"></div>
                     <div class="col-8"><h1 class="m-4 text-light">KAIROS</h1></div></div>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    <div class="modal-body">
                      <div class="container-fluid">
                        
                        <form action="../controller/controllerCreateEvent.php" method="post">
                            <div class="mb-3">
                           
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
                             
                              <input type="hidden" id="url" >

                              <label for="floatingInput" class="text-light">Seleccione el estado</label> 
                                <select class="form-select form-select-sm" aria-label="form-select-sm example" id="state">
                                  <option selected>Estado</option>
                                  <option value="Agendado">Agendado</option>
                                  <option value="Pendiente">Pendiente</option>
                                  <option value="Disponible">Disponible</option>
                                </select>

                          
                                
                              <select name="" id="random"></select>
                              <button type="button" class="btn btn-dark" style="height: 100%;"  onclick="miFuncion('random','selectClient');"> validar</button>

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

</div> 
    <div class="col md-8 m-2">

         <div id='calendar'></div>

    </div>
</div>

  
<script>
 /*
  
  document.getElementById("lectorEvento").addEventListener("click", function() {
  var eventName = document.getElementById("eventName").value;
  var dateStart = document.getElementById("dateStart").value;
  var dateEnd = document.getElementById("dateEnd").value;
  var url = document.getElementById("url").value;
  
  addNewEvent(eventName, dateStart, dateEnd, url);
});
*/
var calendar; // Declarar calendar fuera de la función

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  calendar = new FullCalendar.Calendar(calendarEl, {
	initialView: 'dayGridMonth',
	locale: "es",
	headerToolbar: {
  	left: 'prev,next today',
  	center: 'title',
  	right: 'dayGridMonth,timeGridWeek,listWeek'
	}
  });
  calendar.render();
});



function addNewEvent(eventId,eventName, dateStart, dateEnd, url) {
  calendar.addEvent({
  id:eventId,
	title: eventName,
	start: dateStart,
	end: dateEnd,
	url: url
  });
}

function getCalendarEvents() {
  var events = calendar.getEvents();
  console.log(events);
}

//LLAMAR LISTA ROOMS  DISPONIBLES
async function getClientRoomsList56() {

  var reposSelect = document.getElementById("list-clientroom4589");
  while (reposSelect.firstChild) {
    reposSelect.removeChild(reposSelect.firstChild);
  }




	fetch('https://dev-kairosGateway.lugma.tech/kairosGateway/apiCompanies/v1/getClientRooms/UfbHdZaJ 6WclAmsaP9H7SR2WmpDbl1OL9/4e6baba0/all')
  .then(response => response.json())
  .then(data => {
    data.clientRoom.forEach(info => {
      const option = document.createElement("option");
      option.value = info.roomId;
      option.text = info.comments;
      reposSelect.add(option);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });

 }



</script> 
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

<!-- Barra de navegacion original -->
<!--
<nav class="navbar bg-dark m-0 p-0 fixed-top" style="background-color: #001219;">
  <div class="container-fluid m-0" style="background-color: #001219;">
    <a class="navbar-brand" href="#"><img src="public/KAIROS.png" alt="KAIROS" width="60" height="60"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header" style="background-color: #001219;">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><img src="public/KAIROS2.png" alt="KAIROS" width="60" height="60"></h5>
        <button type="button" class="btn-close" style="border-radius: 5px;" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body" >
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item" style="border-radius: 5px; padding-left: 10px;">
            <a class="nav-link active" aria-current="page" href="#" style="color: #C70039;border-radius: 5px;">Home</a>
          </li>
          <li class="nav-item" style="border-radius: 5px; padding-left: 10px;">
          <button class="nav-link" onclick="changeSection('spam1');" id="alerts-tab1" data-bs-toggle="tab" data-bs-target="#alerts-tab-pane1" type="button" role="tab" aria-controls="alerts-tab-pane1" aria-selected="false" style="color: #C70039;">Repositorios</button>
          </li>
          <li class="nav-item" style="border-radius: 5px; padding-left: 10px;">
            <a class="nav-link" href="#" style="color: #C70039; border-radius: 5px;">Foros</a>
          </li>
          <li class="nav-item dropdown" style="border-radius: 5px; padding-left: 10px; padding-right: 10px; padding-bottom: 5px;">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color: #C70039; border-radius: 5px;">
              Más
            </a>
            <ul class="dropdown-menu">
            <li><button type="button" style="border-radius: 0px;" class="dropdown-item" onclick="openModLogIn()" data-bs-toggle="tooltip" title="Tooltip">Iniciar Sesión</button></li>
              
              
              <li><button type="button" style="border-radius: 0px;" class="dropdown-item" onclick="openModCreateUser()" data-bs-toggle="tooltip" title="Tooltip">Crear cuenta</button></li>
              <li><button type="button" style="border-radius: 0px;" class="dropdown-item" onclick="openModValCode()" data-bs-toggle="tooltip" title="Tooltip">Código de validación</button></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item m-0" style="border-radius: 0px;" href="#">Acerca de nosotros</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
-->


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

    
<script>
// Función para mostrar la notificación
function mostrarNotificacion(mensaje, tipo) {
    const notificacion = document.getElementById('notification');
    const notificacionText = document.getElementById('notificationText');

    notificacionText.textContent = mensaje;
    notificacion.classList.remove('error'); // Remover clase de error (en caso de que esté presente)

    if (tipo === 'error') {
        notificacion.classList.add('error');
    }
   
    notificacion.style.display = 'block';

    // Desaparecer la notificación después de 3 segundos
    setTimeout(() => {
        notificacion.style.display = 'none';
    }, 3000);
}



function obtenerVariablesPHPSession() {
  fetch('layout/getPHPVariablesIndex.php')
    .then(response => response.json())
    .then(data => {
      // Aquí obtienes los nuevos valores de las variables PHP en el objeto "data"
      // Puedes acceder a los valores como data.mensaje y data.error
      // Por ejemplo:
      var nuevoMensaje = data.mensaje;
      var nuevoError = data.error;

    

      if(nuevoError==="true"){
        
        var re="success";
        
      }
      if(nuevoError==="false"){
      
        var re="error";
        
      }
      
if(nuevoMensaje==""){

}else{
  mostrarNotificacion(nuevoMensaje, re);
}
      
     

    })
    .catch(error => {
      console.error('Error al obtener las variables PHP:', error);
    });
}
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
  
</div>