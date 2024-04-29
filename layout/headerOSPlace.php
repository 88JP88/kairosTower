<! DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>KAIROS TOWER</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">

  
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
  


 
  <div class="btn-group">
      <button type="button" class="btn btn-primary1 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      <i class="fas fa-headset"></i> Soporte
      </button>
      <ul class="dropdown-menu dropdown-menu-lg-end">
        <li> <a class="dropdown-item" onclick="changeSection('ptask');getPersonalTask('created');" id="schedule-tab" data-bs-toggle="tab" data-bs-target="#schedule-tab-pane" type="button" role="tab" aria-controls="schedule-tab-pane" aria-selected="true" style="color: #3c3c3b;">Soporte externo</a></li>
        <li> <a class="dropdown-item" onclick="changeSection('gtask');getPagesAssignModelsHislogs();" id="schedule-tab" data-bs-toggle="tab" data-bs-target="#schedule-tab-pane" type="button" role="tab" aria-controls="schedule-tab-pane" aria-selected="true" style="color: #3c3c3b;">Soporte interno</a></li>
       
      </ul>
    </div> 
    <div class="btn-group">
      <button type="button" class="btn btn-primary1 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      <i class="fas fa-info"></i> Informes
      </button>
      <ul class="dropdown-menu dropdown-menu-lg-end">
        <li> <a class="dropdown-item" onclick="changeSection('ptask');getPersonalTask('created');" id="schedule-tab" data-bs-toggle="tab" data-bs-target="#schedule-tab-pane" type="button" role="tab" aria-controls="schedule-tab-pane" aria-selected="true" style="color: #3c3c3b;">Generar informe</a></li>
        <li> <a class="dropdown-item" onclick="changeSection('gtask');getPagesAssignModelsHislogs();" id="schedule-tab" data-bs-toggle="tab" data-bs-target="#schedule-tab-pane" type="button" role="tab" aria-controls="schedule-tab-pane" aria-selected="true" style="color: #3c3c3b;">Verificar informes</a></li>
       
      </ul>
    </div> 



  
  
</div>
    </div> 


   
  </li>
  
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home-tab-pane1" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
    rtyu
    <div class="cart-container">
      
  <h2>Carrito de Compras</h2>
  <div id="cartItems" class="cart-items">
  
  </div>
  
  <div id="cartItems1" class="cart-items1"></div>
 




  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Establecimiento con Mesas</title>
    <link rel="stylesheet" href="styleSession.css">
</head>
<body>

    <div class="establecimiento" id="placeOSInfo">
       
    </div>
   
    <div class="establecimiento" id="placeOSData">
       
       </div>
</body>
</html>
<script>

const url = window.location.href;
      const urlObj = new URL(url);
      var place = urlObj.searchParams.get("placeId");
</script>

  <button class="btn btn-primary" onClick="
  eraseContainers('placeOSData','placeOSInfo');
  getApiData(getSites,
             {
               'apiService':'apiOS',
               'apiVersion':'v1',
               'endPoint':'getSites'
           },
             {
               'containerData':'placeOSData',
               'containerInfo':'placeOSInfo',
               'modelView':'cardOS',
           },
             {
               'filter':'filter',
               'param':'placeIdCar',
               'value':  urlObj.searchParams.get('placeId')
           }
               );
  
  
  
  ">Validar compra</button>











  


  <p class="card-text">Filtro por categoría:
  

           

<div class="mb-3">

<select id="list-categoriesListECM" class="form-control" name="lista" required></select>
<button class="btn btn-primary" 
onClick="

getApiData(getCatalogsV2,
                            {
                              'apiService':'apiCom',
                              'apiVersion':'v1',
                              'endPoint':'getCatalogs'
                          },
                            {
                              'containerData':'card-container2',
                              'containerInfo':'card-container2info',
                          },
                            {
                              'filter':'store|'+urlObj.searchParams.get('storeId'),
                              'param':'categoryId',
                              'value':'all'
                          }
                              );
"><i class="fas fa-filter"></i></button>
          

  
</div>
              </p>


              <p class="card-text">Filtro por similitud:
  

           

<div class="mb-3">

<input type="text" id="simil" class="form-control" aria-describedby="passwordHelpInline" placeholder="">
 
<button class="btn btn-primary" onClick="getApiData(getCatalogsV2,'apiCom','v1','getCatalogs','card-container2','card-container2info','store|'+urlObj.searchParams.get('storeId'),'simil','all');"><i class="fas fa-filter"></i></button>
          

  
</div>
              </p>

  <button class="btn btn-primary" onClick="openModal('clientOrdersMod');createTable('tableClientOrders','containerOrdersTable', [
        'Acciones',
        'ID de orden',
        'ID de carro',
        'Número de orden',
        'Vendedor',
        'Cliente',
        'Tienda',
        'Total',
        'Sub-Total',
        'Descuento',
        'Paga con',
        'Cambio',
        'Referencia de pago',
        'Estado de orden',
        'Estado de pago',
        'Entidad de pago',
        'Método de pago',
        'Número de productos',
        'Número de paquetes',
        'Fecha y hora',
        'Método de entrega',
        'Dirección de entrega',
        'Domiciliario'
    ]);
    getApiData(getClientOrders,
                            {
                              'apiService':'apiClient',
                              'apiVersion':'v1',
                              'endPoint':'getClientOrders'
                          },
                            {
                              'containerData':'tableClientOrders',
                              'containerInfo':'clientId',
                          },
                            {
                              'filter':'byStore',
                              'param':'storeId',
                              'value':urlObj.searchParams.get('storeId')
                          }
                              );
    
">VER ORDENES</button>

    
  </div>
                </p>

</div>

<script> const url = window.location.href;

// Crear un objeto URL a partir de la URL actual
const urlObj = new URL(url);

// Obtener el valor del parámetro "parametro1"
var st = urlObj.searchParams.get("storeId");</script>
<div id="card-container2info" class="card-container">
            <!-- Contenido de la sección expandible -->
            
        </div>
    <div id="card-container2" class="card-container">
            <!-- Contenido de la sección expandible -->
            
        </div>
        
        

        <a class="dropdown-item" 
        onclick="
        profileInfoLog();
        getApiData(getCatalogsV2,
                            {
                              'apiService':'apiCom',
                              'apiVersion':'v1',
                              'endPoint':'getCatalogs'
                          },
                            {
                              'containerData':'card-container2',
                              'containerInfo':'card-container2info',
                          },
                            {
                              'filter':'store|'+urlObj.searchParams.get('storeId'),
                              'param':'all',
                              'value':'all'
                          }
                              );
          getApiData(getClientCategoriesListBtn,
        {
          'apiService':'apiCom',
          'apiVersion':'v1',
          'endPoint':'getCategories'
      },
        {
          'containerData':'list-categoriesListECM',
          'containerInfo':'containerCatalogsInfo',
      },
        {
          'filter':'all',
          'param':'all',
          'value':'all'
      }
          );
       ">Todos los productos</a>
  </div>

  <div class="tab-pane fade" id="api-tab-pane1" role="tabpanel" aria-labelledby="api-tab" tabindex="0">..www.</div>
  <div class="tab-pane fade" id="tools-tab-pane" role="tabpanel" aria-labelledby="tools-tab" tabindex="0">qqq</div>
  <div class="tab-pane fade" id="alerts-tab-pane" role="tabpanel" aria-labelledby="alerts-tab" tabindex="0">..eeee.</div>
  <div class="tab-pane fade" id="groups-tab-pane" role="tabpanel" aria-labelledby="groups-tab" tabindex="0">..eeee.</div>
  <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">.ddf..</div>
</div>
</body>
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
<script  src="scripts/gets/getOrders.js"></script>
<script  src="scripts/posts/cart.js"></script>
<script  src="scripts/posts/postCreateEcmOrder.js"></script>
<script  src="scripts/gets/os.getSites.js"></script>
<script  src="scripts/posts/os.postSites.js"></script>
<script  src="scripts/gets/os.getOrders.js"></script>


<div id="loading-container" class="loading-container">
  <div class="loading-icon"></div>
</div>
<script  src="scripts/gets/getClientCommerce.js"></script>
<script>
document.addEventListener("DOMContentLoaded", function() {
  profileInfoLog();

  getApiData(getClientCategoriesListBtn,
        {
          'apiService':'apiCom',
          'apiVersion':'v1',
          'endPoint':'getCategories'
      },
        {
          'containerData':'list-categoriesListECM',
          'containerInfo':'containerCatalogsInfo',
      },
        {
          'filter':'all',
          'param':'all',
          'value':'all'
      }
          );
   // getApiData(getClientCategoriesListBtn, 'apiCom', 'v1', 'getCategories', 'list-categoriesListECM', 'containerCatalogsInfo', 'all', 'all', 'all');
   getApiData(getCatalogsV2,
                            {
                              'apiService':'apiCom',
                              'apiVersion':'v1',
                              'endPoint':'getCatalogs'
                          },
                            {
                              'containerData':'card-container2',
                              'containerInfo':'card-container2info',
                          },
                            {
                              'filter':'store|'+urlObj.searchParams.get('storeId'),
                              'param':'all',
                              'value':'all'
                          }
                              );
    //getApiData(getCatalogsV2,'apiCom','v1','getCatalogs','card-container2','card-container2info','store|'+urlObj.searchParams.get('storeId'),'all','all');
});
</script>


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


