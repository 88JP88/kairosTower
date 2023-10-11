

 async function getMySessions() {
  

  document.getElementById("loading-container").style.display = "flex";
      fetch(epGetMySessionsInternal)
     
    .then(response => response.json())
    .then(data => {
      const publicgroupsTableBody = document.querySelector("#tableMySession tbody");
      // Borramos los datos antiguos
      publicgroupsTableBody.innerHTML = "";
      data.sessions.forEach(info => {
        const row = document.createElement("tr");
        row.innerHTML = `
       
     
       
        <td><button onclick="cerrarSession(this,&quot;${info.sessionId}&quot)" class="btn btn-primary1">Cerrar</button></td>
        
        <td>${info.sessionId}</td>
        <td>${info.browser}</td>
        <td>${info.logInDate} ${info.logInTime}</td>
        
        <td>${info.ipId}</td>
          
          
         
          
        `;
  
        
        
  
        publicgroupsTableBody.appendChild(row);
      });
      document.getElementById("loading-container").style.display = "none";
    })
    .catch(error => {
      console.error("Error:", error);
      document.getElementById("loading-container").style.display = "none";
    });
  
  
  
   }
   
   // Llamar a la función para obtener los datos del API
   getMySessions();
   
  
function cerrarSession(button, id) {
    var sessionNow = sessionStorage.getItem('sessionId');
    //console.log('sessionNow:', sessionNow);
   // console.log('id:', id);
    if (sessionNow === id) {
      mostrarNotificacion('¡No puedes cerrar tu propia sesión!', 'error');
    } else {
      // Construir la URL con los parámetros de la petición GET
      var url = 'controller/forceCloseSession.php?sessionId=' + encodeURIComponent(id);
  
      // Realizar la petición GET al archivo PHP
      fetch(url)
        .then(response => {
          // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
          // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página
  
          getMySessions();
  
          getMessage();
        })
        .catch(error => {
          // Aquí puedes manejar los errores en caso de que la petición falle
          console.log('Error en la petición:', error);
        });
    }
  }
  