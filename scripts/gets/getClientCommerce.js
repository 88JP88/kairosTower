



function openModal(modalId) {
  var myModal = new bootstrap.Modal(document.getElementById(modalId));
  myModal.show();
}


function closeModal(modalId) {
  var myModal = new bootstrap.Modal(document.getElementById(modalId));
  myModal.hide();
  
}


async function getApiDataPromise(getApiInfo, apiData1, containers, params) {
  return new Promise(async (resolve, reject) => {
    try {
      document.getElementById("loading-container").style.display = "flex";

      const url = window.location.href;
      const urlObj = new URL(url);
      var st = urlObj.searchParams.get("clientId");
      var clientId;

      if (st !== null) {
        clientId = st;
      } else {
        
        if (sessionStorage.getItem('clientNow') !== null) {
          clientId = sessionStorage.getItem('clientNow');
        } else {
          clientId = sessionStorage.getItem('clientId');
        }
      }

      var apiData = params;
      apiData.clientId=clientId;

      var serviceName = "kairosGateway";
      const apiInfo = JSON.stringify(apiData);

      const response = await fetch(sessionStorage.getItem('subDomain') + "/" + serviceName + "/" + apiData1.apiService + "/" + apiData1.apiVersion + "/" + apiData1.endPoint + "/" + sessionStorage.getItem('ranCode') + " " + sessionStorage.getItem('key') + "/" + apiInfo);
      const data = await response.json();
      
      document.getElementById("loading-container").style.display = "none";
      getApiInfo(data, containers.containerData, containers.containerInfo,containers.modelView);
      resolve(data); // Resuelve la promesa con los datos
    } catch (error) {
      console.error("Error:", error);
      document.getElementById("loading-container").style.display = "none";
      reject(error); // Rechaza la promesa con el error
    }
  });
}

async function getApiData(getApiInfo, apiData, containers, params) {
  try {
    const data = await getApiDataPromise(getApiInfo, apiData, containers, params);
    console.log("Datos recibidos:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}




    
document.getElementById("filtercatalogs").addEventListener("click", function() {
  // Obtén los valores de los campos
  var param = document.getElementById("repos-catalogClient").value;
  var value = document.getElementById("keywordsearchcatalog").value;
  
  //getClientCatalogs(param+'|param','param',value);
  getApiData(getCatalogs,'apiCom','v1','getCatalogs','containerCatalogsData','containerCatalogsInfo',param+'|param','param',value);

});


document.getElementById("searchcatalogs").addEventListener("click", function() {
  // Obtén los valores de los campos
  var param = document.getElementById("repos-catalogClient").value;
  var value = document.getElementById("keywordsearchcatalog").value;
  
  //getClientCatalogs('browser|param','param',value);
  getApiData(getCatalogs,'apiCom','v1','getCatalogs','containerCatalogsData','containerCatalogsInfo','browser|param','param',value);

});



document.getElementById("filtercatalogsbystore").addEventListener("click", function() {
  // Obtén los valores de los campos
  var param = document.getElementById("list-storesListstoreq").value;
  var value = document.getElementById("keywordsearchcatalog").value;
  
  // getClientCatalogs('filter|'+param,'param',value);
  getApiData(getCatalogs,'apiCom','v1','getCatalogs','containerCatalogsData','containerCatalogsInfo','filter|'+param,'param',value);

});



document.getElementById("filtercatalogsbystoresimple").addEventListener("click", function() {
  // Obtén los valores de los campos
  var param = document.getElementById("list-storesListstoreq").value;
  var value = document.getElementById("keywordsearchcatalog").value;
  
 // getClientCatalogs('store|'+param,'param','param');
  getApiData(getCatalogs,'apiCom','v1','getCatalogs','containerCatalogsData','containerCatalogsInfo','store|'+param,'param','param');
});

function openPopup(idelemento) {
  var popup = document.getElementById(idelemento);
  popup.style.display = "block";
}

// Función para cerrar el popup
function closePopup(idelemento) {
  var popup = document.getElementById(idelemento);
  popup.style.display = "none";
}

// Event listener para el ícono de información





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

async function eraseTable(tableId){
  const existingTable = document.getElementById(tableId);
  if (existingTable) {
    existingTable.parentNode.removeChild(existingTable);
    //resolve(existingTable);
    return;
  }
}

async function eraseContainers(containerdata, containerinfo) {
  // Eliminar el contenido de los contenedores si existen
  const containerInternalClientsInfo = document.getElementById(containerinfo);
  if (containerInternalClientsInfo) {
    containerInternalClientsInfo.innerHTML = '';
  }
  
  const containerInternalClientsData = document.getElementById(containerdata);
  if (containerInternalClientsData) {
    containerInternalClientsData.innerHTML = '';
  }
}



function createButton(container,functionsData,titulo) {
  // Crear el elemento de botón
  var button = document.createElement("button");
  button.type = "button";
  button.classList.add("btn", "btn-primary1", "edit-button1");
  button.setAttribute("onclick", functionsData);
  button.setAttribute("style", "color: #C70039;");
  button.setAttribute("title", titulo);

  // Agregar icono al botón
  var icon = document.createElement("i");
  icon.classList.add("fas", "fa-user-plus");
  button.appendChild(icon);

  // Agregar el botón al contenedor
  container.appendChild(button);
}


async function createTablePromise(tableId, container, header) {
  return new Promise((resolve, reject) => {
    eraseTable(tableId);
      const tableContainer = document.getElementById(container);


      const existingTable = document.getElementById(tableId);
      if (existingTable) {
          existingTable.querySelector('tbody').innerHTML = '';
          existingTable.parentNode.removeChild(existingTable);
          resolve(existingTable);
          return;
      }
      // Crear la tabla
      const table = document.createElement('table');
      table.className = 'table table-hover table-striped';
      table.id = tableId;

      // Crear el encabezado de la tabla
      const thead = document.createElement('thead');
      const headerRow = document.createElement('tr');
      const headers = header;

      headers.forEach(headerText => {
          const th = document.createElement('th');
          th.scope = 'col';
          th.innerHTML = `<i>${headerText}</i>`;
          headerRow.appendChild(th);
      });

      thead.appendChild(headerRow);
      table.appendChild(thead);

      // Crear el cuerpo de la tabla
      const tbody = document.createElement('tbody');

      // Agregar el cuerpo de la tabla a la tabla
      table.appendChild(tbody);

      // Agregar la tabla al contenedor
      tableContainer.appendChild(table);

      resolve(table); // Resolvemos la promesa con la tabla creada
  });
}

 
async function createTable(tableId, container, header) {
  try {
      const message = await createTablePromise(tableId, container, header);
      console.log(message); // Manejar el mensaje de éxito
  } catch (error) {
      console.error(error); // Manejar el error
  }
}

function generarID() {
  // Generar un número aleatorio y convertirlo a cadena
  let numeroAleatorio = Math.floor(Math.random() * 100000000); // Genera un número aleatorio entre 0 y 99999999
  let idAleatorio = numeroAleatorio.toString().padStart(8, '0'); // Asegura que tenga 8 dígitos completando con ceros a la izquierda si es necesario
  return idAleatorio;
}

document.getElementById("filterproducts").addEventListener("click", function() {
    // Obtén los valores de los campos
    var param = document.getElementById("repos-productClient").value;
    var value = document.getElementById("keywordsearch").value;
    getApiData(getProducts,'apiCom','v1','getProducts','containerProductsData','containerProductsInfo','filter',param,value);
    console.log("press");
    //getClientProducts('filter',param,value);
  });
  
  
  document.getElementById("searchproducts").addEventListener("click", function() {
    // Obtén los valores de los campos
    var param = document.getElementById("repos-productClient").value;
    var value = document.getElementById("keywordsearch").value;
    getApiData(getProducts,'apiCom','v1','getProducts','containerProductsData','containerProductsInfo','browser','param',value);
    //getClientProducts('browser','param',value);
  });

 async function genCode(modelView,valor,caseUse,btnId){
    //console.log(modelView,valor);

    if(caseUse=="view"){
      const codigoQRDiv = document.getElementById(modelView);
      codigoQRDiv.innerHTML = '';
      var btnbc = document.getElementById("btn"+btnId+modelView);
    var btncbc = document.getElementById("btnc"+btnId+modelView);
      
      btnbc.style.display = "none";
      btncbc.style.display = "block";
      const codigoQR = new QRCode(codigoQRDiv, {
        text: valor,
        width: 80,
        height: 80
      });
    }
    if(caseUse=="unview"){
      const codigoQRDiv = document.getElementById(modelView);
      codigoQRDiv.innerHTML = '';
      var btnbc = document.getElementById("btn"+btnId+modelView);
    var btncbc = document.getElementById("btnc"+btnId+modelView);
    
      btnbc.style.display = "block";
      btncbc.style.display = "none";
      
    }
}


function generarCodigoDeBarras(modelView,codigo,caseUse,btnId) {
  // Obtiene el valor del input
 // var codigo = document.getElementById("codigoInput").value;
  // Genera el código de barras en el elemento SVG con el ID "barcode"
  if(caseUse=="view"){
    var svgElement = document.getElementById(modelView);
    var btnbc = document.getElementById("btn"+btnId+modelView);
    var btncbc = document.getElementById("btnc"+btnId+modelView);
      svgElement.style.display = "block";
      btnbc.style.display = "none";
      btncbc.style.display = "block";
    JsBarcode("#" + modelView, codigo, {
      width: 1.0,
      height: 30
    });

  }
  if(caseUse=="unview"){
    var svgElement = document.getElementById(modelView);
    var btnbc = document.getElementById("btn"+btnId+modelView);
    var btncbc = document.getElementById("btnc"+btnId+modelView);
    svgElement.style.display = "none";
    //  svgElement.style.display = "block";
      btnbc.style.display = "block";
      btncbc.style.display = "none";
    

  }
 
}

function openClose(element,useCase){

  var elemento = document.getElementById(element);
    if(useCase=="unview"){
    elemento.style.display = "none";
    }
    if(useCase=="view"){
      elemento.style.display = "block";
      }
    


}