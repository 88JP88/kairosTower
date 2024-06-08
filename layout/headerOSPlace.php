<! DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>KAIROS TOWER</title>

  
    <link rel="icon" type="image/x-icon" href="public/KAIROS2.png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
  
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
   
  </head>
  <body>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>


    
<div class="notification" id="notification">
        <p id="notificationText"></p>
    </div>
<ul class="nav nav-tabs" id="myTab" role="tablist" style="background-color: #001219; color: #C70039;">

<li class="nav-item" role="presentation" >
    <button class="nav-link active" onclick="changeSection('inbox');" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true" style="color: #C70039;"><a class="navbar-brand" href="#"><img src="public/KAIROS.png" alt="LUGMA" width="50" height="50"></a></button>
  </li>
  


 
  

  
  
</div>
    </div> 


   
  </li>
  
</ul>



  
  
 
  <script>
const url = window.location.href;
      const urlObj = new URL(url);
      var place = urlObj.searchParams.get("placeId");
      var placeNAME = urlObj.searchParams.get("placeName");
      var placeType = urlObj.searchParams.get("st");

      // Crear el elemento <head>


// Crear el elemento <meta> para el charset


// Crea


// Crear el elemento <link> para la hoja de estilos




var heading = document.createElement('h2');

// Agregar el texto "Establecimiento" al elemento h2
heading.textContent = placeNAME;

// Agregar el elemento h2 al body del documento
document.body.appendChild(heading);

if (placeType == "sites") {
    // Crear elementos div para el establecimiento
    var divEstablecimientoInfo = document.createElement('div');
    divEstablecimientoInfo.classList.add('establecimiento');
    divEstablecimientoInfo.id = 'placeOSInfo';

    var divEstablecimientoData = document.createElement('div');
    divEstablecimientoData.classList.add('establecimiento');
    divEstablecimientoData.id = 'placeOSData';

    // Agregar los elementos div al body
    document.body.appendChild(divEstablecimientoInfo);
    document.body.appendChild(divEstablecimientoData);

    // Crear el botón de validar compra
    var buttonValidarCompra = document.createElement('button');
    buttonValidarCompra.classList.add('btn', 'btn-primary');
    buttonValidarCompra.textContent = 'Validar compra';
    buttonValidarCompra.onclick = function() {
        eraseContainers('placeOSData', 'placeOSInfo');
        getApiData(getSites, {
                'apiService': 'apiOS',
                'apiVersion': 'v1',
                'endPoint': 'getSites'
            }, {
                'containerData': 'placeOSData',
                'containerInfo': 'placeOSInfo',
                'modelView': 'cardOS',
            }, {
                'filter': 'filter',
                'param': 'placeIdCarSites',
                'value': urlObj.searchParams.get('placeId')
            }
        );
    };

    // Agregar el botón al body
    document.body.appendChild(buttonValidarCompra);
}

if (placeType == "market") {
    // Agrega aquí el código para la opción "market" si es diferente
    var divEstablecimientoInfo = document.createElement('div');
    divEstablecimientoInfo.classList.add('establecimiento');
    divEstablecimientoInfo.id = 'placeOSInfo';

    var divEstablecimientoData = document.createElement('div');
    divEstablecimientoData.classList.add('establecimiento');
    divEstablecimientoData.id = 'placeOSData';

    // Agregar los elementos div al body
    document.body.appendChild(divEstablecimientoInfo);
    document.body.appendChild(divEstablecimientoData);
    var buttonValidarCompra = document.createElement('button');
    buttonValidarCompra.classList.add('btn', 'btn-primary');
    buttonValidarCompra.textContent = 'Validar compra';
    buttonValidarCompra.onclick = function() {
        eraseContainers('placeOSData', 'placeOSInfo');
       
    getApiData(getSites, {
                'apiService': 'apiOS',
                'apiVersion': 'v1',
                'endPoint': 'getSites'
            }, {
                'containerData': 'placeOSData',
                'containerInfo': 'placeOSInfo',
                'modelView': 'cardOSmarket',
            }, {
                'filter': 'filter',
                'param': 'placeIdCarMarket',
                'value': urlObj.searchParams.get('placeId')
            }
        );

    // Agregar el botón al body
};
document.body.appendChild(buttonValidarCompra);
}

if (placeType == "siteswork") {
    // Agrega aquí el código para la opción "market" si es diferente
    var divEstablecimientoInfo = document.createElement('div');
    divEstablecimientoInfo.classList.add('establecimiento');
    divEstablecimientoInfo.id = 'placeOSInfo';

    var divEstablecimientoData = document.createElement('div');
    divEstablecimientoData.classList.add('establecimiento');
    divEstablecimientoData.id = 'placeOSData';

    // Agregar los elementos div al body
    document.body.appendChild(divEstablecimientoInfo);
    document.body.appendChild(divEstablecimientoData);
    var buttonValidarCompra = document.createElement('button');
    buttonValidarCompra.classList.add('btn', 'btn-primary');
    buttonValidarCompra.textContent = 'Validar compra';
    buttonValidarCompra.onclick = function() {
        eraseContainers('placeOSData', 'placeOSInfo');
       
    getApiData(getSites, {
                'apiService': 'apiOS',
                'apiVersion': 'v1',
                'endPoint': 'getSites'
            }, {
                'containerData': 'placeOSData',
                'containerInfo': 'placeOSInfo',
                'modelView': 'cardOSwork',
            }, {
                'filter': 'filter',
                'param': 'placeIdCarSitesWork',
                'value': urlObj.searchParams.get('placeId')
            }
        );

    // Agregar el botón al body
};
document.body.appendChild(buttonValidarCompra);
}
if (placeType == "ecommerce") {
    // Agrega aquí el código para la opción "market" si es diferente
    var divEstablecimientoInfo = document.createElement('div');
    divEstablecimientoInfo.classList.add('establecimiento');
    divEstablecimientoInfo.id = 'placeOSInfo';

    var divEstablecimientoData = document.createElement('div');
    divEstablecimientoData.classList.add('establecimiento');
    divEstablecimientoData.id = 'placeOSData';

    // Agregar los elementos div al body
    document.body.appendChild(divEstablecimientoInfo);
    document.body.appendChild(divEstablecimientoData);
    var buttonValidarCompra = document.createElement('button');
    buttonValidarCompra.classList.add('btn', 'btn-primary');
    buttonValidarCompra.textContent = 'Validar compra';
    buttonValidarCompra.onclick = function() {
        eraseContainers('placeOSData', 'placeOSInfo');
       
    getApiData(getSites, {
                'apiService': 'apiOS',
                'apiVersion': 'v1',
                'endPoint': 'getSites'
            }, {
                'containerData': 'placeOSData',
                'containerInfo': 'placeOSInfo',
                'modelView': 'cardOSecommerce',
            }, {
                'filter': 'filter',
                'param': 'placeIdCarEcommerce',
                'value': urlObj.searchParams.get('placeId')
            }
        );

    // Agregar el botón al body
};
document.body.appendChild(buttonValidarCompra);
}

</script>



</html>
<script  src="scripts/data/credentials.js"></script>
<script  src="scripts/data/endPoints.js"></script>
<script  src="scripts/data/showNotify.js"></script>
<script  src="scripts/gets/messageVariables.js"></script>
<script  src="scripts/gets/getSessionVariables.js"></script>
<script  src="scripts/gets/sessionStatus.js"></script>
<script  src="scripts/gets/profileInfoLog.js"></script>
<script  src="scripts/gets/getMySessions.js"></script>
<script  src="scripts/gets/getClientCommerceAdmin.js"></script>
<script  src="scripts/gets/getClientCommerce.js"></script>



<script  src="scripts/gets/os.getSites.js"></script>
<script  src="scripts/posts/os.postSites.js"></script>
<script  src="scripts/gets/os.getOrders.js"></script>


<div id="loading-container" class="loading-container">
  <div class="loading-icon"></div>
</div>


<style>
  .cart-container {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  margin-bottom: 20px;
}

.cart-items {
  margin-top: 10px;
}

.cart-item {
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}

.cart-item:last-child {
  border-bottom: none;
}

.cart-item-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-item-details p {
  margin: 0;
}

.cart-item-name {
  font-weight: bold;
  color: #333;
}

.cart-item-price {
  color: #777;
}

.cart-item-quantity {
  color: #555;
}

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
<style>
    .password-container {
        position: relative;
    }

    .toggle-password {
        display: block; /* Muestra el botón como un bloque, debajo del campo de contraseña */
        margin-top: 5px; /* Agrega un margen superior para separar el botón del campo de contraseña */
        cursor: pointer;
    }
</style>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SweetAlert2 Form Submit Example</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css">
</head>
<body>

<button id="swalBtn" onClick="">Open Modal</button>

<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script>
document.getElementById('swalBtn').onclick = function() {
    Swal.fire({
        title: 'Formulario',
        html: `
            <div id="placeOSCar"></div>
            <div id="placeOSCarTotal"></div>
            <div id="placeOSCarsubTotal"></div>
            <div id="placeOSCarSaver"></div>

            <div class="card-container">
                Responsable:
                <select id="list-OSEmployeesList" class="form-control" name="lista1" required>
                    <option value="1">Empleado 1</option>
                    <option value="2">Empleado 2</option>
                    <option value="3">Empleado 3</option>
                </select>
            </div>

            <div class="card-container">
                Cliente:
                <select id="list-OSCustomerListOS" class="form-control" name="lista1" required>
                    <option value="1">Cliente 1</option>
                    <option value="2">Cliente 2</option>
                    <option value="3">Cliente 3</option>
                </select>
            </div>

            <div id="OSCatalogViewInfo" class="card-container">
                <!-- Contenido de la sección expandible -->
            </div>

            <div id="OSCatalogViewData" class="scard-container">
                <!-- Contenido de la sección expandible -->
            </div>

            <div id="containerBtnCreateOrder"></div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Submit',
        preConfirm: () => {
            const selectedEmployee = document.getElementById('list-OSEmployeesList').value;
            const selectedCustomer = document.getElementById('list-OSCustomerListOS').value;
            if (!selectedEmployee || !selectedCustomer) {
                Swal.showValidationMessage(`Please select both an employee and a customer`);
            }
            return {
                selectedEmployee: selectedEmployee,
                selectedCustomer: selectedCustomer
            };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // Aquí puedes manejar los datos del formulario
            console.log('Submitted Data:', result.value);
            Swal.fire(`Empleado seleccionado: ${result.value.selectedEmployee}\nCliente seleccionado: ${result.value.selectedCustomer}`);
        }
    });
};
</script>

</body>
</html>
