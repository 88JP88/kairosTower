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
              const backgroundColor = info.isActive === "0" ? "  #cc0007" : info.counterId === "0" ? "  #008f39" : "#ffffff";
              const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
              card.innerHTML = `
                  <div class="card-body" style="background-color: ${backgroundColor};">
                      <h5 class "card-title"><i class="fas fa-calendar-alt"></i>${info.month}  / ${año}</h5>
                      <p class="card-text">Días del Mes: ${info.monthDays}</p>
                      <p class="card-text">Días disponibles: ${info.counterId}</p>
                      <p class="card-text">${info.isActive !== "0" ? `<button onclick="editClientCalendar(this,&quot;${info.calendarId}&quot;,&quot;isActive&quot;,&quot;calendarDays&quot;,&quot;0&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 edit-button" title="DEACTIVAR"><i class="fas fa-ban"></i></button>` : `<button onclick="editClientCalendar(this,&quot;${info.calendarId}&quot;,&quot;isActive&quot;,&quot;calendarDays&quot;,&quot;1&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 edit-button" title="ACTIVAR"><i class="fas fa-check"></i></button>`}${activo1}</p>
                      ${info.isActive !== "0" ? `<button onclick="openModCalendarDaysAssign();getCalendarDaysAssign(&quot;${info.calendarId}&quot;);" class="btn btn-primary1 edit-button" title="DÍAS DISPONIBLES"><i class="fas fa-calendar-alt"></i></button>` : ''}
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
  sessionStorage.setItem('calendarNow',param);
  fetch(epGetCalendarDaysAssign + param)
      .then(response => response.json())
      .then(data => {
          const cardContainer1 = document.getElementById("card-container1");
          cardContainer1.innerHTML = ""; // Borra las tarjetas antiguas
          data.calendarDaysAssign.forEach(info => {
              const card1 = document.createElement("div");
              card1.classList.add("card");
              const backgroundColor = info.isActive === "0" ? "  #cc0007" : info.counterId === "0" ? "  #008f39" : "#ffffff";
              const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
              card1.innerHTML = `
                  <div class="card-body"  style="background-color: ${backgroundColor};">
                      <h5 class="card-title"><i class="fas fa-calendar-alt"></i>${info.calendarDay} ${info.calendarNumber}</h5>
                     
                      <p class="card-text">Horas disponibles: ${info.counterId}</p>
                      <p class="card-text">${info.isActive !== "0" ? `<button onclick="editClientCalendar(this,&quot;${info.registId}&quot;,&quot;isActive&quot;,&quot;calendarDaysAssign&quot;,&quot;0&quot;,&quot;${info.calendarId}&quot;)" class="btn btn-primary1 edit-button" title="DESACTIVAR">  <i class="fas fa-ban"></i></button>` : `<button onclick="editClientCalendar(this,&quot;${info.registId}&quot;,&quot;isActive&quot;,&quot;calendarDaysAssign&quot;,&quot;1&quot;,&quot;${info.calendarId}&quot;)" class="btn btn-primary1 edit-button" title="ACTIVAR"><i class="fas fa-check"></i></button>`}${activo1}</p>
                     
                      ${info.isActive !== "0" ? ` <button onclick="openModCalendarTime();getCalendarTime(&quot;${info.registId}&quot;);" class="btn btn-primary1 edit-button" title="HORAS DISPONIBLES"><i class="fas fa-clock"></i></button>` : ''}
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
  sessionStorage.setItem('registNow',param);
  fetch(epGetCalendarTime + param)
      .then(response => response.json())
      .then(data => {
          const cardContainer11 = document.getElementById("card-container11");
          cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
          data.calendarTime.forEach(info => {
              const card11 = document.createElement("div");
              card11.classList.add("card");
              const backgroundColor = info.isActive === "0" ? "  #cc0007" : info.counterId === "0" ? "  #008f39" : "#ffffff";
              const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
              card11.innerHTML = `
                  <div class="card-body" style="background-color: ${backgroundColor};">
                      <h5 class="card-title"><i class="fas fa-clock"></i>${info.calendarTime}</h5>
                      <p class="card-text">Salas disponibles: ${info.counterId}</p>

                      <p class="card-text">${info.notApply == "free" ? `${info.isActive !== "0" ? `<button onclick="editClientCalendar(this,&quot;${info.timeId}&quot;,&quot;isActive&quot;,&quot;calendarTime&quot;,&quot;0&quot;,&quot;${info.registId}&quot;)" class="btn btn-primary1 edit-button" title="DESACTIVAR"><i class="fas fa-ban"></i></button>` : `<button onclick="editClientCalendar(this,&quot;${info.timeId}&quot;,&quot;isActive&quot;,&quot;calendarTime&quot;,&quot;1&quot;,&quot;${info.registId}&quot;)" class="btn btn-primary1 edit-button" title="ACTIVAR"><i class="fas fa-check"></i></button>`}` : ''}${activo1}</p>
                      <p class="card-text">${info.isActive == "1" ? ` ${info.counterId > 0 ? `<i class="fas fa-check-circle"></i> <button onclick="openModUserTime();getInternalUserList(&quot;all&quot;);getClientRoomsList(&quot;${info.timeId}&quot;);" class="btn btn-primary1 edit-button" title="ASIGNAR USUARIO"><i class="fas fa-user-plus"></i></button><button onclick="openModUserTimedes();getCalendarTimedes(&quot;${info.timeId}&quot;);" class="btn btn-primary1 edit-button" title="DESASIGNAR USUARIO"><i class="fas fa-unlink"></i></button>` : `<i class="fas fa-times-circle"></i><button onclick="openModUserTimedes();getCalendarTimedes(&quot;${info.timeId}&quot;);" class="btn btn-primary1 edit-button" title="DESASIGNAR USUARIO"><i class="fas fa-unlink"></i></button>`}` :''}</p>
                      <p class="card-text">Usuario: ${info.userApply}</p>
                      ${info.notApply !== "free" ? ` <button onclick="openModCalendarDaysAssign();getCalendarDaysAssign(&quot;${info.timeId}&quot;);" class="btn btn-primary1 edit-button"><i class="fas fa-info-circle"></i></button>` : ''}
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
  fetch(epGetClientRooms + param+"/all")
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
                  <p class="card-text"><i class="fas fa-home"></i>${info.comments}</p>
                  <p class="card-text"><div class="edit-container"><input type="text" class="form-control" id="${info.clientId}" value="${info.comments}" title="${info.comments}"> <button onclick="editClientRoom(this,&quot;${info.roomId}&quot;,&quot;comments&quot;,&quot;comments&quot;,&quot;0&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 edit-button" title="EDITAR"><i class="fas fa-edit"></i></button></div></p>

                      <p class="card-text">${info.isActive !== "0" ? `<button onclick="editClientRoom(this,&quot;${info.roomId}&quot;,&quot;isActive&quot;,&quot;isActive&quot;,&quot;0&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 edit-button" title="DESACTIVAR"><i class="fas fa-ban"></i></button><i class="fas fa-check-circle"></i>` : `<button onclick="editClientRoom(this,&quot;${info.roomId}&quot;,&quot;isActive&quot;,&quot;isActive&quot;,&quot;1&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 edit-button" title="ACTIVAR"><i class="fas fa-check"></i></button><i class="fas fa-times-circle"></i>`}</p>
                     
                      <p class="card-text"><button onclick="editClientRoom(this,&quot;${info.roomId}&quot;,&quot;del&quot;,&quot;del&quot;,&quot;0&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 delete-button" title="ELIMINAR"><i class="fas fa-trash"></i></button></p>
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


async function getClientElements() {
  document.getElementById("loading-container").style.display = "flex";
  var param=sessionStorage.getItem('clientNow');
  fetch(epGetClientElements + param+"/all/na")
      .then(response => response.json())
      .then(data => {
          const cardContainer11 = document.getElementById("card-clientElements");
          cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
          data.clientElement.forEach(info => {
              const card11 = document.createElement("div");
              card11.classList.add("card");
              const backgroundColor = info.isActive === "0" ? "  #cc0007" : "#ffffff";
              const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
              const assign1 = info.isApply === "0" ? assig="NO ASIGNADO" : assig="ASIGNADO";
              card11.innerHTML = `
                  <div class="card-body" style="background-color: ${backgroundColor};">
                  <h5 class="card-title">
                  <p class="card-text"> <i class="fas fa-guitar"></i></p>
                  <img src="${info.imgElements}" alt="Icono" style="max-width: 120px; max-height: 120px;">

                  <div class="edit-container">
                  <input type="text" class="form-control" id="${info.elementId}" value="${info.imgElements}" title="${info.imgElements}">
  <button onclick="editClientElement(this,&quot;${info.elementId}&quot;,&quot;imgElements&quot;,&quot;data&quot;,&quot;0&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 edit-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>

              </h5>
              <p class="card-text">Elemento:
              <div class="edit-container">
  <input type="text" class="form-control" id="${info.elementId}" value="${info.elementName}" title="${info.elementName}">
  <button onclick="editClientElement(this,&quot;${info.elementId}&quot;,&quot;elementName&quot;,&quot;data&quot;,&quot;0&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 edit-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>
              
              
              
              
             <p class="card-text">
              <div class="edit-container">
              ${info.isActive !== "0" ? `<button onclick="editClientElement(this,&quot;${info.elementId}&quot;,&quot;isActive&quot;,&quot;isActive&quot;,&quot;0&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 edit-button" title="DESACTIVAR">
  <i class="fas fa-ban"></i>
  </button>` 
  : `<button onclick="editClientElement(this,&quot;${info.elementId}&quot;,&quot;isActive&quot;,&quot;isActive&quot;,&quot;1&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 edit-button" title="ACTIVAR">
  <i class="fas fa-check"></i>
  </button>`}${activo1} 
    
</div>
                     
                      <p class="card-text">Caracteristicas:
              <div class="edit-container">
  <input type="text" class="form-control" id="${info.elementId}" value="${info.caracts}" title="${info.caracts}">
  <button onclick="editClientElement(this,&quot;${info.elementId}&quot;,&quot;caracts&quot;,&quot;data&quot;,&quot;0&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 edit-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>

              <p class="card-text">Marca:
              <div class="edit-container">
  <input type="text" class="form-control" id="${info.elementId}" value="${info.brand}" title="${info.brand}">
  <button onclick="editClientElement(this,&quot;${info.elementId}&quot;,&quot;brand&quot;,&quot;data&quot;,&quot;0&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 edit-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>

              <p class="card-text">Tipo de elemento:
              <div class="edit-container">
  <input type="text" class="form-control" id="${info.elementId}" value="${info.type}" title="${info.type}">
  <button onclick="editClientElement(this,&quot;${info.elementId}&quot;,&quot;type&quot;,&quot;data&quot;,&quot;0&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 edit-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>
                        
              <p class="card-text">Estado: ${assign1}</p>
                     


              <p class="card-text">Comentarios:
              <div class="edit-container">
  <input type="text" class="form-control" id="${info.elementId}" value="${info.comments}" title="${info.comments}">
  <button onclick="editClientElement(this,&quot;${info.elementId}&quot;,&quot;comments&quot;,&quot;data&quot;,&quot;0&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 edit-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>



              <p class="card-text">Valor por hora:
              <div class="edit-container">
  <input type="text" class="form-control" id="${info.elementId}" value="${info.amount}" title="${info.amount}">
  <button onclick="editClientElement(this,&quot;${info.elementId}&quot;,&quot;amount&quot;,&quot;data&quot;,&quot;0&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 edit-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>
              <p class="card-text">
              <div class="edit-container">
  
  <button onclick="editClientElement(this,&quot;${info.elementId}&quot;,&quot;del&quot;,&quot;del&quot;,&quot;0&quot;,&quot;${info.clientId}&quot;)" class="btn btn-primary1 delete-button" title="ELIMINAR">
    <i class="fas fa-trash"></i>
  </button>
</div>
              </p>
                      
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




async function getCalendarTimedes(param) {
  document.getElementById("loading-container").style.display = "flex";

  sessionStorage.setItem('timeNow',param)
  fetch(epGetCalendarTimedes + param)
      .then(response => response.json())
      .then(data => {
          const cardContainer11 = document.getElementById("card-usertimedes");
          cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
          data.assignRoom.forEach(info => {
              const card11 = document.createElement("div");
              card11.classList.add("card");
              const backgroundColor = info.isActive === "0" ? "  #cc0007" : "#ffffff";
              const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
              card11.innerHTML = `
                  <div class="card-body" style="background-color: ${backgroundColor};">
                      <h5 class="card-title"><i class="fas fa-clock"></i>${info.comments}</h5>
                      <p class="card-text">Usuario: ${info.userName}</p>
                      <p class="card-text">
<h3>Elementos actuales</h3>
                     
<div id="checkbox-des${info.assignId}" class="card-container">
<!-- Contenido de la sección expandible -->
</div>


<div class="edit-container">
<button onclick="assignDes(&quot;${info.assignId}&quot;)" class="btn btn-primary1 delete-button" title="DESASIGNAR">
<i class="fas fa-trash"></i>
</button>
</div>
</p>
<p class="card-text">
<h3>Asignar elemento</h3>
                     
<div id="checkbox-desa${info.roomId}" class="card-container">
<!-- Contenido de la sección expandible -->
</div>
<div class="edit-container">
<button onclick="openModAssigndesElement();getClientElemntCheckdes(&quot;${info.assignId}&quot;)" class="btn btn-primary1 edit-button" title="VERIFICAR">
<i class="fas fa-guitar"></i>
</button>

</div>
</p>
<p class="card-text">
                      <div class="edit-container">
                      <button onclick="openModAssigndesElement();getClientElemntCheckdes(&quot;${info.assignId}&quot;)" class="btn btn-primary1 edit-button" title="VERIFICAR">
                      <i class="fas fa-guitar"></i>
          </button>
          <button onclick="assignDes(&quot;${info.assignId}&quot;)" class="btn btn-primary1 delete-button" title="DESASIGNAR">
            <i class="fas fa-trash"></i>
          </button>
        </div>
                      </p>
                      
                        </div>
              `;
              getClientElemntCheckdes(info.assignId,info.roomId);
              getClientElemntCheck(info.roomId,'notassign',info.userId,info.assignId);
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

function editClientRoom(button, id,filter,reason,value,recharge) {
  // Obtener el valor del campo de texto correspondiente al botón

  if(reason=="comments"){

    var input = button.previousElementSibling;
    var value = input.value;

  }

 

  // Construir la URL con los parámetros de la petición GET
  var url = 'controller/putClientRoom.php?roomId=' + encodeURIComponent(id)  + '&filter=' + encodeURIComponent(filter)+ '&reason=' + encodeURIComponent(reason)+ '&value=' + encodeURIComponent(value);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

      getMessage();
      
        getClientRooms();

       
      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
}



function editClientElement(button, id,filter,reason,value,recharge) {
  // Obtener el valor del campo de texto correspondiente al botón

  if(reason=="data"){

    var input = button.previousElementSibling;
    var value = input.value;

  }

 

  // Construir la URL con los parámetros de la petición GET
  var url = 'controller/putClientElement.php?elementId=' + encodeURIComponent(id)  + '&filter=' + encodeURIComponent(filter)+ '&reason=' + encodeURIComponent(reason)+ '&value=' + encodeURIComponent(value);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

      getMessage();
      
        getClientElements();

       
      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
}


function createCheckbox(info) {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "assignCheckbox"; // Asigna un nombre a los checkboxes
  checkbox.value = info.elementId; // Asigna un valor (puedes usar un identificador único)
  checkbox.addEventListener("change", handleCheckboxChange); // Agrega un manejador de eventos para el cambio

  const label = document.createElement("label");
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(info.elementName+" $"+info.amount));

  return label;
}

async function getClientElemntCheck(filter,param,ids,ids1) {
  
  document.getElementById("loading-container").style.display = "flex";
if(param=="assign"){

  var param=sessionStorage.getItem('clientNow');
  fetch(epGetClientElements + param+"/free/"+filter+"/"+ids+"/"+ids1)
      .then(response => response.json())
      .then(data => {
        
          const checkboxContainer = document.getElementById("checkbox-container");
        
          checkboxContainer.innerHTML = ""; // Borra los checkboxes antiguos

          data.clientElement.forEach(info => {
              const checkbox = createCheckbox(info);
              checkboxContainer.appendChild(checkbox);
          });

          document.getElementById("loading-container").style.display = "none";
      })
      .catch(error => {
          console.error("Error:", error);
          document.getElementById("loading-container").style.display = "none";
      });

}if(param="notassign"){
  

  var param=sessionStorage.getItem('clientNow');
  fetch(epGetClientElements + param+"/assign/"+filter+"/"+ids+"/"+ids1)
      .then(response => response.json())
      .then(data => {
        
          const checkboxContainer = document.getElementById("checkbox-desa"+filter);
        
          checkboxContainer.innerHTML = ""; // Borra los checkboxes antiguos

          data.clientElement.forEach(info => {
              const checkbox = createCheckbox(info);
              checkboxContainer.appendChild(checkbox);
          });

          document.getElementById("loading-container").style.display = "none";
      })
      .catch(error => {
          console.error("Error:", error);
          document.getElementById("loading-container").style.display = "none";
      });

    }
}
const selectedAssignments = []; // Array para almacenar los elementos seleccionados

function handleCheckboxChange(event) {
    const assignId = event.target.value;

    if (event.target.checked) {
        // Checkbox seleccionado, agrega el assignId al array
        selectedAssignments.push(assignId);
       
    } else {
        // Checkbox deseleccionado, elimina el assignId del array
        const index = selectedAssignments.indexOf(assignId);
        if (index !== -1) {
            selectedAssignments.splice(index, 1);
            
        }
    }

    // Muestra el contenido del array
    console.log(selectedAssignments);
}

// Función para ejecutar al cambiar la selección en el select


// Función para ejecutar al cambiar la selección en el select
function onClientRoomSelect(param) {
  const selectElement = document.getElementById("list-clientroom");
  const selectedValue = selectElement.value;
  selectedAssignments.splice(0, selectedAssignments.length);

  // Verifica si se ha seleccionado un valor
  if (selectedValue) {
    // Ejecuta la función getClientElemntCheck con el valor seleccionado
    getClientElemntCheck(selectedValue,param,"1","1");

  }
}


















function createCheckboxdes(info) {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "assignCheckbox"; // Asigna un nombre a los checkboxes
  checkbox.value = info.elementId; // Asigna un valor (puedes usar un identificador único)
  checkbox.addEventListener("change", handleCheckboxChangedes); // Agrega un manejador de eventos para el cambio

  const label = document.createElement("label");
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(info.elementName+" $"+info.amount));

  return label;
}

async function getClientElemntCheckdes(filter,param) {
  document.getElementById("loading-container").style.display = "flex";

  var param=sessionStorage.getItem('clientNow');
  fetch(epGetClientElements + param+"/hold/"+filter)
      .then(response => response.json())
      .then(data => {
          const checkboxContainer = document.getElementById("checkbox-des"+filter);
          checkboxContainer.innerHTML = ""; // Borra los checkboxes antiguos

          data.clientElement.forEach(info => {
              const checkbox = createCheckboxdes(info);
              checkboxContainer.appendChild(checkbox);
          });

          document.getElementById("loading-container").style.display = "none";
      })
      .catch(error => {
          console.error("Error:", error);
          document.getElementById("loading-container").style.display = "none";
      });
}
const selectedAssignmentsdes = []; // Array para almacenar los elementos seleccionados

function handleCheckboxChangedes(event) {
    const assignId = event.target.value;

    if (event.target.checked) {
        // Checkbox seleccionado, agrega el assignId al array
        selectedAssignmentsdes.push(assignId);
       
    } else {
        // Checkbox deseleccionado, elimina el assignId del array
        const index = selectedAssignmentsdes.indexOf(assignId);
        if (index !== -1) {
          selectedAssignmentsdes.splice(index, 1);
            
        }
    }

    // Muestra el contenido del array
    console.log(selectedAssignmentsdes);
}

// Función para ejecutar al cambiar la selección en el select

