
document.getElementById("lectorEvento").addEventListener("click", function() {
 
 
  // Construye la URL para la solicitud GET
  var url = "controller/postFullCalendar.php?" +
           
            "eventName=" + encodeURIComponent(document.getElementById("eventName").value) +
            "&eventDescription=" + encodeURIComponent(document.getElementById("eventDescription").value) +
            "&eventClientId=" + encodeURIComponent(document.getElementById("eventClientName").value) +
            "&dateStart=" + encodeURIComponent(document.getElementById("dateStart").value)+
            "&dateEnd=" + encodeURIComponent(document.getElementById("dateEnd").value)+
           
            "&roomEvent=" + encodeURIComponent(document.getElementById("list-clientroom").value);
 

  // Realizar la solicitud GET utilizando fetch
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página
      
    
      getMessage();

      fetch(epGetFullCalendar+"1234")
  
      .then(response => response.json())
      .then(data => {
        const publicgroupsTableBody = document.querySelector("#tableInternalClients tbody");
        // Borramos los datos antiguos
        publicgroupsTableBody.innerHTML = "";
        data.fullCalendar.forEach(info => {
          removeCalendarEvents(info.eventId);
          
          addNewEvent(info.eventId,info.eventName, info.startDate, info.endDate, info.eventUrl);


          
        });
        document.getElementById("loading-container").style.display = "none";
      })
      .catch(error => {
        console.error("Error:", error);
        document.getElementById("loading-container").style.display = "none";
      });
     
    

      var eventName = document.getElementById("eventName").value;
      var dateStart = document.getElementById("dateStart").value;
      var dateEnd = document.getElementById("dateEnd").value;
      var url = document.getElementById("url").value;
      
      

    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
});


//LLAMAR LISTA ROOMS  DISPONIBLES
async function getClientRoomsList() {

  var reposSelect = document.getElementById("list-clientroom");
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

 function getIndentFullCalendar () {
  // Realizar la solicitud GET utilizando fetch
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página
      
    
      getMessage();

      fetch(epGetFullCalendar+"1234")
  
      .then(response => response.json())
      .then(data => {
        const publicgroupsTableBody = document.querySelector("#tableInternalClients tbody");
        // Borramos los datos antiguos
        publicgroupsTableBody.innerHTML = "";
        data.fullCalendar.forEach(info => {
          
          removeCalendarEvents(info.eventId);

          addNewEvent(info.eventId,info.eventName, info.startDate, info.endDate, info.eventUrl);


          
        });
        document.getElementById("loading-container").style.display = "none";
      })
      .catch(error => {
        console.error("Error:", error);
        document.getElementById("loading-container").style.display = "none";
      });
       
 }
)
}

function removeCalendarEvents (eventId) {
  const eventToRemove = calendar.getEventById(eventId);

// Verificar si se encontró el evento
if (eventToRemove) {
  // Remover el evento del calendario
  eventToRemove.remove();
} else {
  console.log('El evento no se encontró en el calendario.');
}
}
