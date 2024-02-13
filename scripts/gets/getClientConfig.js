

















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
                  <div class="edit-container">Fondo:
      <input type="text" class="form-control label-input" id="${info.clientId}" value="${info.bgColor}" style="background-color: #${info.bgColor}; color: #${info.textColor};" onclick="makeEditable(this)" title="${info.textColor}"> <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;bgColor&quot;,&quot;style&quot;)" class="btn btn-primary1 edit-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
      </div>

      <div class="edit-container">Texto:
      <input type="text" class="form-control label-input" id="${info.clientId}" value="${info.textColor}" style="background-color: #${info.textColor}; color: #${info.bgColor};" onclick="makeEditable(this)" title="${info.bgColor}"> <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;textColor&quot;,&quot;style&quot;)" class="btn btn-primary1 edit-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
      </div>
      Icono:
      <div class="edit-container">
      <input type="text" class="form-control label-input" id="${info.clientId}" value="${info.imgIcon}" onclick="makeEditable(this)" title="${info.imgIcon}">

 <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;imgIcon&quot;,&quot;style&quot;)" class="btn btn-primary1 edit-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
      </div>
      <h5 class="card-title">
      
      <img src="${info.imgIcon}" alt="Icono" style="width: 100px; height: 100px; display: block; margin: 0 auto;">
  </h5>  
  Logo:
  <div class="edit-container">

  <input type="text" class="form-control label-input" id="${info.clientId}" value="${info.imgLogo}" onclick="makeEditable(this)" title="${info.imgLogo}"> <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;imgLogo&quot;,&quot;style&quot;)" class="btn btn-primary1 edit-button" title="EDITAR">
  <i class="fas fa-edit"></i>
  </button>
  </div>  

              <h5 class="card-title">
            
              <img src="${info.imgLogo}" alt="Icono" style="width: 100px; height: 100px; display: block; margin: 0 auto;">
          </h5>

          Gif:
          <div class="edit-container">

          <input type="text" class="form-control label-input" id="${info.clientId}" value="${info.imgGif}" onclick="makeEditable(this)" title="${info.imgGif}"> <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;imgGif&quot;,&quot;style&quot;)" class="btn btn-primary1 edit-button" title="EDITAR">
          <i class="fas fa-edit"></i>
          </button>
          </div>  

          <h5 class="card-title">
          
          <img src="${info.imgGif}" alt="Icono" style="width: 100px; height: 100px; display: block; margin: 0 auto;">
          </h5>

                      
                      
                   
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
function makeEditable(inputElement) {
  inputElement.removeAttribute("readonly");
}




async function getCalendarTimedes(param) {
  document.getElementById("loading-container").style.display = "flex";

  sessionStorage.setItem('timeNow',param)


  
  var apiData = {
   
    "clientId":sessionStorage.getItem('clientNow'),
    "filter": param,
    "param": 'all',
    "value": ""
  
  
};
var serviceName="kairosGateway";
var apiName="apiCompanies";
var apiVersion="v1";
var endPoint="getCalendarTimedes";
// Construir la URL con los parámetros de la petición GET

const apiInfo = JSON.stringify(apiData);
fetch(sessionStorage.getItem('subDomain') +"/"+ serviceName+"/"+apiName+"/"+apiVersion+"/"+endPoint+"/"+sessionStorage.getItem('ranCode')+" "+sessionStorage.getItem('key')+"/"+apiInfo)

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
<button onclick="assignDeselement(&quot;${info.assignId}&quot;)" class="btn btn-primary1 delete-button" title="DESASIGNAR">
<i class="fas fa-ban"></i>
</button>
</div>
</p>
<p class="card-text">
<h3>Asignar elemento</h3>
                     
<div id="checkbox-desa${info.roomId}" class="card-container">
<!-- Contenido de la sección expandible -->
</div>
<div class="edit-container">
<button onclick="assignelementbyuser(&quot;${info.roomId}&quot;,&quot;${info.userId}&quot;,&quot;${info.assignId}&quot;)" class="btn btn-primary1 edit-button" title="VERIFICAR">
<i class="fas fa-plus"></i>
</button>

</div>
</p>
<p class="card-text">
                      <div class="edit-container">
                    
          <button onclick="assignDes(&quot;${info.assignId}&quot;)" class="btn btn-primary1 delete-button" title="DESASIGNAR ROOM">
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

 
  var apiData = {
    "roomId": id,
    "reason": reason,
    "filter": filter,
    "value": value,
    "apiValues":{
      "apiName": "apiCompanies",
      "apiVersion": "v1",
      "endPoint": "putClientRoom"
    }
    
  };
// Construir la URL con los parámetros de la petición GET

const apiInfo = JSON.stringify(apiData);
var url = 'controller/postController.php?data=' + encodeURIComponent(apiInfo);

  // Construir la URL con los parámetros de la petición GET
  //var url = 'controller/putClientRoom.php?roomId=' + encodeURIComponent(id)  + '&filter=' + encodeURIComponent(filter)+ '&reason=' + encodeURIComponent(reason)+ '&value=' + encodeURIComponent(value);

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


// Define una función para mostrar el modal de confirmación cerca del botón
function showConfirmationModalNearButton(message, onConfirm, button) {
  const modalContent = document.createElement('div');
  modalContent.className = 'confirm-modal-content-near-button';

  const messageElement = document.createElement('p');
  messageElement.textContent = message;

  const confirmButton = document.createElement('button');
  confirmButton.textContent = 'Aceptar';
  confirmButton.className = 'confirm-button';

  const cancelButton = document.createElement('button');
  cancelButton.textContent = 'Cancelar';
  cancelButton.className = 'cancel-button';

  // Agrega los elementos al modal
  modalContent.appendChild(messageElement);
  modalContent.appendChild(confirmButton);
  modalContent.appendChild(cancelButton);
  document.body.appendChild(modalContent);

  // Calcula la posición del modal cerca del botón
  const buttonRect = button.getBoundingClientRect();
  const modalRect = modalContent.getBoundingClientRect();

  // Calcula la posición derecha del botón
  const buttonRight = buttonRect.left + buttonRect.width;

  // Calcula la posición del modal para que esté a la derecha del botón
  const top = buttonRect.top + window.scrollY;
  const left = buttonRight + 350; // Agrega un margen a la derecha del botón

  modalContent.style.top = top + 'px';
  modalContent.style.left = left + 'px';

  // Agrega eventos a los botones
  confirmButton.addEventListener('click', () => {
    onConfirm();
    document.body.removeChild(modalContent);
  });

  cancelButton.addEventListener('click', () => {
    document.body.removeChild(modalContent);
  });
}


function editClientElement(button, id,filter,reason,value,recharge) {
  // Obtener el valor del campo de texto correspondiente al botón

  if(reason=="data"){

    var input = button.previousElementSibling;
    var value = input.value;

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
  if(reason=="del"){
    var confirmMessage = '¿Seguro quieres eliminar el elemento?';
    showConfirmationModalNearButton(confirmMessage, () => {


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
  },button);
  }
 

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
  label.classList.add("custom-checkbox-label"); // Agrega una clase CSS al label

  return label;
}

function createCheckbox1(info) {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "assignCheckboxelement"; // Asigna un nombre a los checkboxes
  checkbox.value = info.elementId; // Asigna un valor (puedes usar un identificador único)
  checkbox.addEventListener("change", handleCheckboxChangeAssignElement); // Agrega un manejador de eventos para el cambio

  const label = document.createElement("label");
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(info.elementName+" $"+info.amount));

  label.classList.add("custom-checkbox-label"); // Agrega una clase CSS al label
  return label;
}

function createCheckbox3(info) {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "assignCheckboxelementbyadmin"; // Asigna un nombre a los checkboxes
  checkbox.value = info.elementId; // Asigna un valor (puedes usar un identificador único)
  checkbox.addEventListener("change", handleCheckboxChangeAssignElementbyuser); // Agrega un manejador de eventos para el cambio

  const label = document.createElement("label");
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(info.elementName+" / "+info.comments));

  label.classList.add("custom-checkbox-label"); // Agrega una clase CSS al label
  return label;
}

function createCheckbox4(info) {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "assignCheckboxelementbyadminnot"; // Asigna un nombre a los checkboxes
  checkbox.value = info.elementId; // Asigna un valor (puedes usar un identificador único)
  checkbox.addEventListener("change", handleCheckboxChangeAssignElementbyusernot); // Agrega un manejador de eventos para el cambio

  const label = document.createElement("label");
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(info.elementName+" / "+info.comments));

  label.classList.add("custom-checkbox-label"); // Agrega una clase CSS al label
  return label;
}

async function getClientElemntCheck(filter,param,ids,ids1) {
  
  document.getElementById("loading-container").style.display = "flex";
if(param=="assign"){

  var param=sessionStorage.getItem('clientNow');


  var apiData = {
   
    "clientId":sessionStorage.getItem('clientNow'),
    "filter": "",
    "param": "free",
    "value": filter,
    "value1": ids,
    "value2": ids1
  
  
};
var serviceName="kairosGateway";
var apiName="apiCompanies";
var apiVersion="v1";
var endPoint="getClientElements";
// Construir la URL con los parámetros de la petición GET

const apiInfo = JSON.stringify(apiData);
fetch(sessionStorage.getItem('subDomain') +"/"+ serviceName+"/"+apiName+"/"+apiVersion+"/"+endPoint+"/"+sessionStorage.getItem('ranCode')+" "+sessionStorage.getItem('key')+"/"+apiInfo)


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
  


  var apiData = {
   
    "clientId":sessionStorage.getItem('clientNow'),
    "filter": "",
    "param": "assign",
    "value": filter,
    "value1": ids,
    "value2": ids1
  
  
};
var serviceName="kairosGateway";
var apiName="apiCompanies";
var apiVersion="v1";
var endPoint="getClientElements";
// Construir la URL con los parámetros de la petición GET

const apiInfo = JSON.stringify(apiData);
fetch(sessionStorage.getItem('subDomain') +"/"+ serviceName+"/"+apiName+"/"+apiVersion+"/"+endPoint+"/"+sessionStorage.getItem('ranCode')+" "+sessionStorage.getItem('key')+"/"+apiInfo)

      .then(response => response.json())
      .then(data => {
        
          const checkboxContainer = document.getElementById("checkbox-desa"+filter);
        
          checkboxContainer.innerHTML = ""; // Borra los checkboxes antiguos

          data.clientElement.forEach(info => {
              const checkbox = createCheckbox1(info);
              checkboxContainer.appendChild(checkbox);
          });

          document.getElementById("loading-container").style.display = "none";
      })
      .catch(error => {
          console.error("Error:", error);
          document.getElementById("loading-container").style.display = "none";
      });

    }
    if(param="usedbyclient"){
  

     
      var apiData = {
   
        "clientId":sessionStorage.getItem('clientNow'),
        "filter": "",
        "param": "usedbyclient",
        "value": filter,
        "value1": ids,
        "value2": ids1
      
      
    };
    var serviceName="kairosGateway";
    var apiName="apiCompanies";
    var apiVersion="v1";
    var endPoint="getClientElements";
    // Construir la URL con los parámetros de la petición GET
    
    const apiInfo = JSON.stringify(apiData);
    fetch(sessionStorage.getItem('subDomain') +"/"+ serviceName+"/"+apiName+"/"+apiVersion+"/"+endPoint+"/"+sessionStorage.getItem('ranCode')+" "+sessionStorage.getItem('key')+"/"+apiInfo)
    


          .then(response => response.json())
          .then(data => {
            
              const checkboxContainer = document.getElementById("checkbox-roomid"+filter);
            
              checkboxContainer.innerHTML = ""; // Borra los checkboxes antiguos
    
              data.clientElement.forEach(info => {
                  const checkbox = createCheckbox3(info);
                  checkboxContainer.appendChild(checkbox);
              });
    
              document.getElementById("loading-container").style.display = "none";
          })
          .catch(error => {
              console.error("Error:", error);
              document.getElementById("loading-container").style.display = "none";
          });
    
        }

        if(param="notusedbyclient"){
  

          var apiData = {
   
            "clientId":sessionStorage.getItem('clientNow'),
            "filter": "",
            "param": "notusedbyclient",
            "value": filter,
            "value1": ids,
            "value2": ids1
          
          
        };
        var serviceName="kairosGateway";
        var apiName="apiCompanies";
        var apiVersion="v1";
        var endPoint="getClientElements";
        // Construir la URL con los parámetros de la petición GET
        
        const apiInfo = JSON.stringify(apiData);
        fetch(sessionStorage.getItem('subDomain') +"/"+ serviceName+"/"+apiName+"/"+apiVersion+"/"+endPoint+"/"+sessionStorage.getItem('ranCode')+" "+sessionStorage.getItem('key')+"/"+apiInfo)
        

              .then(response => response.json())
              .then(data => {
                
                  const checkboxContainer = document.getElementById("checkbox-roomid1"+filter);
                
                  checkboxContainer.innerHTML = ""; // Borra los checkboxes antiguos
        
                  data.clientElement.forEach(info => {
                      const checkbox = createCheckbox4(info);
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
var selectedAssignments = []; // Array para almacenar los elementos seleccionados

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


  var apiData = {
   
    "clientId":sessionStorage.getItem('clientNow'),
    "filter": "",
    "param": "hold",
    "value": filter,
    "value1": "1",
    "value2": "1"
  
  
};
var serviceName="kairosGateway";
var apiName="apiCompanies";
var apiVersion="v1";
var endPoint="getClientElements";
// Construir la URL con los parámetros de la petición GET

const apiInfo = JSON.stringify(apiData);
fetch(sessionStorage.getItem('subDomain') +"/"+ serviceName+"/"+apiName+"/"+apiVersion+"/"+endPoint+"/"+sessionStorage.getItem('ranCode')+" "+sessionStorage.getItem('key')+"/"+apiInfo)


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
var selectedAssignmentsdes = []; // Array para almacenar los elementos seleccionados

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



var selectedAssignmentselement = [];

function handleCheckboxChangeAssignElement(event) {
  const assignId = event.target.value;

  if (event.target.checked) {
      // Checkbox seleccionado, agrega el assignId al array
      selectedAssignmentselement.push(assignId);
     
  } else {
      // Checkbox deseleccionado, elimina el assignId del array
      const index = selectedAssignmentselement.indexOf(assignId);
      if (index !== -1) {
        selectedAssignmentselement.splice(index, 1);
          
      }
  }

  // Muestra el contenido del array
  console.log(selectedAssignmentselement);
}

// Función para ejecutar al cambiar la selección en el select



var selectedAssignmentselementbyuser = [];

function handleCheckboxChangeAssignElementbyuser(event) {
  const assignId = event.target.value;

  if (event.target.checked) {
      // Checkbox seleccionado, agrega el assignId al array
      selectedAssignmentselementbyuser.push(assignId);
     
  } else {
      // Checkbox deseleccionado, elimina el assignId del array
      const index = selectedAssignmentselementbyuser.indexOf(assignId);
      if (index !== -1) {
        selectedAssignmentselementbyuser.splice(index, 1);
          
      }
  }

  // Muestra el contenido del array
  console.log(selectedAssignmentselementbyuser);
}



var selectedAssignmentselementbyusernot = [];

function handleCheckboxChangeAssignElementbyusernot(event) {
  const assignId = event.target.value;

  if (event.target.checked) {
      // Checkbox seleccionado, agrega el assignId al array
      selectedAssignmentselementbyusernot.push(assignId);
     
  } else {
      // Checkbox deseleccionado, elimina el assignId del array
      const index = selectedAssignmentselementbyusernot.indexOf(assignId);
      if (index !== -1) {
        selectedAssignmentselementbyusernot.splice(index, 1);
          
      }
  }

  // Muestra el contenido del array
  console.log(selectedAssignmentselementbyusernot);
}







function postTest () {
  // URL de la API a la que enviarás la solicitud POST
const apiUrl = 'https://dev-kairosGateway.lugma.tech/kairosGateway/apiCore/v1/putExtClient/fL2jz91ptFMA3UwVkBbu/6WclAmsaP9H7SR2WmpDbl1OL9';


// Datos que deseas enviar al servidor en el cuerpo de la solicitud
const data = {
  clientId: '2e44d504',
  filter: "clientName",
  value: 'client',
  param: 'test react-php'
};


// Configurar la solicitud POST
const requestOptions = {
method: 'POST', // Método de la solicitud
headers: {
'Content-Type': 'application/json' // Tipo de contenido del cuerpo (JSON en este caso)
},
body: JSON.stringify(data) // Convertir el objeto a una cadena JSON
};


// Enviar la solicitud POST utilizando fetch()
fetch(apiUrl, requestOptions)
.then(response => {
if (!response.ok) {
  throw new Error('Error en la solicitud');
}
return response.json(); // Parsear la respuesta a JSON si es aplicable
})
.then(data => {
console.log('Respuesta recibida:', data);
// Aquí puedes trabajar con la respuesta de la API
})
.catch(error => {
console.error('Error:', error);
// Manejar errores si la solicitud falla
});






 }
