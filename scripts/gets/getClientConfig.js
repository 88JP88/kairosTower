async function getCalendarDays(param) {
  const fechaActual = new Date();

  // Obtener la fecha actual en formato "Día-Mes-Año"
  const dia = fechaActual.getDate();
  const mes = fechaActual.getMonth() + 1; // Los meses comienzan desde 0, por lo que sumamos 1
  const año = fechaActual.getFullYear();

  document.getElementById("loading-container").style.display = "flex";
  fetch(epGetCalendarDays + param)
      .then(response => response.json())
      .then(data => {
          const cardContainer = document.getElementById("card-container");
          cardContainer.innerHTML = ""; // Borra las tarjetas antiguas
          data.calendarDays.forEach(info => {
              const card = document.createElement("div");
              card.classList.add("card");

              // Define un color de fondo basado en el valor de info.isActive
              var activo="";
              const backgroundColor = info.isActive === "0" ? "  #cc0007" : "#ffffff";
              const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
              card.innerHTML = `
                  <div class="card-body" style="background-color: ${backgroundColor};">
                      <h5 class "card-title">${info.month}  / ${año}</h5>
                      <p class="card-text">Días del Mes: ${info.monthDays}</p>
                      <p class="card-text">Estado: ${activo1} ${info.isActive !== "0" ? `<button onclick="editClientCalendar(this,&quot;${info.calendarId}&quot;,&quot;isActive&quot;,&quot;calendarDays&quot;,&quot;0&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1">Desactivar</button>` : `<button onclick="editClientCalendar(this,&quot;${info.calendarId}&quot;,&quot;isActive&quot;,&quot;calendarDays&quot;,&quot;1&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1">Activar</button>`}</p>
                      ${info.isActive !== "0" ? `<button onclick="openModCalendarDaysAssign();getCalendarDaysAssign(&quot;${info.calendarId}&quot;);" class="btn btn-primary1">Días disponibles</button>` : ''}
                  </div>
              `;

              cardContainer.appendChild(card);
          });

          // Agregar el botón fuera del bucle
          const createCalendarButton = document.createElement("button");
          createCalendarButton.textContent = "Crear Calendario";
          createCalendarButton.className = "btn btn-primary1";
          createCalendarButton.onclick = () => createCalendar(); // Supongo que es el primer elemento del array "calendarDays"

          cardContainer.appendChild(createCalendarButton);

          document.getElementById("loading-container").style.display = "none";
      })
      .catch(error => {
          console.error("Error:", error);
          document.getElementById("loading-container").style.display = "none";
      });
}

function createCalendar() {
  // Realiza la acción de creación de calendario utilizando el clientId
  // Puedes implementar esta función según tus necesidades

 
  openModCreateCalendar();
}














    

async function getCalendarDaysAssign(param) {
  

  document.getElementById("loading-container").style.display = "flex";
  fetch(epGetCalendarDaysAssign + param)
      .then(response => response.json())
      .then(data => {
          const cardContainer1 = document.getElementById("card-container1");
          cardContainer1.innerHTML = ""; // Borra las tarjetas antiguas
          data.calendarDaysAssign.forEach(info => {
              const card1 = document.createElement("div");
              card1.classList.add("card");
              const backgroundColor = info.isActive === "0" ? "  #cc0007" : "#ffffff";
              const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
              card1.innerHTML = `
                  <div class="card-body"  style="background-color: ${backgroundColor};">
                      <h5 class="card-title">${info.calendarDay} ${info.calendarNumber}</h5>
                      <p class="card-text">Estado: ${activo1} ${info.isActive !== "0" ? `<button onclick="editClientCalendar(this,&quot;${info.registId}&quot;,&quot;isActive&quot;,&quot;calendarDaysAssign&quot;,&quot;0&quot;,&quot;${info.calendarId}&quot;)" class="btn btn-primary1">Desactivar</button>` : `<button onclick="editClientCalendar(this,&quot;${info.registId}&quot;,&quot;isActive&quot;,&quot;calendarDaysAssign&quot;,&quot;1&quot;,&quot;${info.calendarId}&quot;)" class="btn btn-primary1">Activar</button>`}</p>
                     
                      ${info.isActive !== "0" ? ` <button onclick="openModCalendarTime();getCalendarTime(&quot;${info.registId}&quot;);" class="btn btn-primary1">Horas disponibles</button>` : ''}
                      </div>
              `;

              cardContainer1.appendChild(card1);
          });
          document.getElementById("loading-container").style.display = "none";
      })
      .catch(error => {
          console.error("Error:", error);
          document.getElementById("loading-container").style.display = "none";
      });
}




async function getCalendarTime(param) {
  document.getElementById("loading-container").style.display = "flex";
  fetch(epGetCalendarTime + param)
      .then(response => response.json())
      .then(data => {
          const cardContainer11 = document.getElementById("card-container11");
          cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
          data.calendarTime.forEach(info => {
              const card11 = document.createElement("div");
              card11.classList.add("card");
              const backgroundColor = info.isActive === "0" ? "  #cc0007" : "#ffffff";
              const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
              card11.innerHTML = `
                  <div class="card-body" style="background-color: ${backgroundColor};">
                      <h5 class="card-title">${info.calendarTime}</h5>
                      <p class="card-text">Estado: ${activo1} ${info.notApply == "free" ? `${info.isActive !== "0" ? `<button onclick="editClientCalendar(this,&quot;${info.timeId}&quot;,&quot;isActive&quot;,&quot;calendarTime&quot;,&quot;0&quot;,&quot;${info.registId}&quot;)" class="btn btn-primary1">Desactivar</button>` : `<button onclick="editClientCalendar(this,&quot;${info.timeId}&quot;,&quot;isActive&quot;,&quot;calendarTime&quot;,&quot;1&quot;,&quot;${info.registId}&quot;)" class="btn btn-primary1">Activar</button>`}` : ''}</p>
                      <p class="card-text">Disponible: ${info.notApply} ${info.isActive == "1" ? ` ${info.notApply == "free" ? ` <button onclick="openModCalendarDaysAssign();getCalendarDaysAssign(&quot;${info.timeId}&quot;);" class="btn btn-primary1">Asignar</button>` : `<button onclick="openModCalendarDaysAssign();getCalendarDaysAssign(&quot;${info.timeId}&quot;);" class="btn btn-primary1">Liberar</button>`}` :''}</p>
                      <p class="card-text">Usuario: ${info.userApply}</p>
                      ${info.notApply !== "free" ? ` <button onclick="openModCalendarDaysAssign();getCalendarDaysAssign(&quot;${info.timeId}&quot;);" class="btn btn-primary1">Información de evento</button>` : ''}
                  </div>
              `;

              cardContainer11.appendChild(card11);
          });
          document.getElementById("loading-container").style.display = "none";
      })
      .catch(error => {
          console.error("Error:", error);
          document.getElementById("loading-container").style.display = "none";
      });
}


async function getClientRooms() {
  document.getElementById("loading-container").style.display = "flex";
  var param=sessionStorage.getItem('clientNow');
  fetch(epGetClientRooms + param)
      .then(response => response.json())
      .then(data => {
          const cardContainer11 = document.getElementById("card-clientRooms");
          cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
          data.clientRoom.forEach(info => {
              const card11 = document.createElement("div");
              card11.classList.add("card");
              const backgroundColor = info.isActive === "0" ? "  #cc0007" : "#ffffff";
              const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
              card11.innerHTML = `
                  <div class="card-body" style="background-color: ${backgroundColor};">
                      <h5 class="card-title">${info.comments}</h5>
                      <p class="card-text">Estado: ${activo1} ${info.isActive !== "0" ? `<button onclick="editClientCalendar(this,&quot;${info.roomId}&quot;,&quot;isActive&quot;,&quot;calendarTime&quot;,&quot;0&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1">Desactivar</button>` : `<button onclick="editClientCalendar(this,&quot;${info.roomId}&quot;,&quot;isActive&quot;,&quot;calendarTime&quot;,&quot;1&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1">Activar</button>`}</p>
                     
                     
                  </div>
              `;

              cardContainer11.appendChild(card11);
          });
          document.getElementById("loading-container").style.display = "none";
      })
      .catch(error => {
          console.error("Error:", error);
          document.getElementById("loading-container").style.display = "none";
      });
}



async function getClientStyle(param) {
  document.getElementById("loading-container").style.display = "flex";
  fetch(epGetClientStyle + param)
      .then(response => response.json())
      .then(data => {
          const cardContainer11 = document.getElementById("card-clientStyle");
          cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
          data.clientStyle.forEach(info => {
              const card11 = document.createElement("div");
              card11.classList.add("card");

              card11.innerHTML = `
                  <div class="card-body">
                 
                  <h5 class="card-title">Color de fondo: <input type="text" id="${info.clientId}" value="${info.bgColor}" style="background-color: #${info.bgColor}; color: #${info.textColor};"> <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;comments&quot;)" class="btn btn-primary1">Editar</button></h5>
                  <h5 class="card-title">Color de texto: <input type="text" id="${info.clientId}" value="${info.textColor}" style="background-color: #${info.textColor}; color: #${info.bgColor};"> <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;comments&quot;)" class="btn btn-primary1">Editar</button></h5>
       
                 
                  <h5 class="card-title">
                  Icono:
                  <img src="${info.imgIcon}" alt="Icono" style="width: 50px; height: 50px;">
              </h5>

              <h5 class="card-title">
              Logo:
              <img src="${info.imgLogo}" alt="Icono" style="width: 50px; height: 50px;">
          </h5>
          <h5 class="card-title">
          Gif:
          <img src="${info.imgGif}" alt="Icono" style="width: 50px; height: 50px;">
      </h5>

                      
                      
                      <button onclick="openModCalendarDaysAssign();getCalendarDaysAssign(&quot;${info.calendarId}&quot;);" class="btn btn-primary1">Días disponibles</button>
                  </div>
              `;

              cardContainer11.appendChild(card11);
          });
          document.getElementById("loading-container").style.display = "none";
      })
      .catch(error => {
          console.error("Error:", error);
          document.getElementById("loading-container").style.display = "none";
      });
      
}






function editClientCalendar(button, id,filter,reason,value,recharge) {
  // Obtener el valor del campo de texto correspondiente al botón
  var input = button.previousElementSibling;
  //var nombre = input.value;

  // Construir la URL con los parámetros de la petición GET
  var url = 'controller/putClientCalendar.php?calendarId=' + encodeURIComponent(id)  + '&filter=' + encodeURIComponent(filter)+ '&reason=' + encodeURIComponent(reason)+ '&value=' + encodeURIComponent(value);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

      getMessage();
      if(reason=="calendarDays"){

        getCalendarDays(recharge);

       
      }
      if(reason=="calendarDaysAssign"){

        getCalendarDaysAssign(recharge);

       
      }
      if(reason=="calendarTime"){

        getCalendarTime(recharge);

       
      }
      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
}
