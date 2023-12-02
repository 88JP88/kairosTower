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
	},
  dateClick: function (info,date) {
    openModal(info.dateStr);
 
  },
  eventClick: function(info) {
    
  
    alert('Event: ' + info.event.title + " Id: " + info.event.id);


    // change the border color just for fun
    info.el.style.borderColor = 'orange';

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

//ABRE UN MODAL AL HACER CLICK EN UN DIA DENTRO DEL CALENDARIO
 function openModal(date) {
        var modal = document.getElementById('myModal');
        var modalContent = document.getElementById('modalContent');
        var span = document.getElementsByClassName('close')[0];

        // Limpia el contenido anterior del modal
        modalContent.innerHTML = '';

        // Muestra el modal
        modal.style.display = 'block';

        // Cierra el modal si se hace clic en la "X"
        span.onclick = function() {
          modal.style.display = 'none';
        };

       // Cierra el modal si se hace clic fuera de él
       window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = 'none';
          }
        };

          // Puedes realizar acciones específicas con la fecha seleccionada
        // por ejemplo, puedes imprimir la fecha en el modal
        modalContent.innerHTML += '<p>Fecha seleccionada: ' + date + '</p>';

        // Puedes cargar y mostrar nuevos datos según la fecha seleccionada
        // Por ejemplo, aquí se agrega un contenido de ejemplo
        // Puedes reemplazar esto con tu lógica para cargar datos dinámicamente
        modalContent.innerHTML += '<p>Nuevos datos para la fecha: ' + date + '</p>';
      }
