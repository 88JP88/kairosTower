

<!-- Modal -->
<div class="modal fade" id="clientStores" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #001219; color: #C70039;">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="public/KAIROS2.png" alt="LUGMA" width="30" height="30" style="background-color: #001219; color: #C70039;">Tiendas</h1>
        
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" onclick="closeModal('clientStores')"></button>

      </div>
      <div class="modal-body">
      <button type="button" class="btn btn-primary1 edit-button1" onclick="getClientStores('all','all','all');"  style="color: #C70039;" title="VER USUARIOS ACTIVOS"><i class="fas fa-globe"></i></button>
      <button type="button" class="btn btn-primary1 edit-button1" onclick="getClientCatalogs('deleted|all','all','all');"  style="color: #C70039;" title="VER USUARIOS ACTIVOS"><i class="fas fa-globe"></i></button>

      <div class="mb-3">
 <label for="currency">Busqueda por parámetro</label>
<select id="repos-catalogClient" class="form-control" name="currency" required>
<option selected>Selecciona parámetro</option>
<option value="ecm">Catalogo ecommerce</option>
<option value="pos">Catalogo punto de venta</option>
<option value="internal">Catalogo reserva interna</option>
<option value="stocked">Catalogo bodega</option>
<option value="browser">Busqueda por similitud</option>
<option value="filter">Busqueda exacta de producto</option>
</select>

</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Parámetro en especifico</label>
  <input type="text" class="form-control" id="keywordsearchcatalog" placeholder="Ingresa palabra a buscar">
</div>
    <button type="button" class="btn btn-primary1 edit-button1"  style="color: #C70039;" title="VER USUARIOS INACTIVOS"><i class="fas fa-sort" id="filtercatalogs"></i></button>
    
    <button type="button" class="btn btn-primary1 edit-button1"  style="color: #C70039;" title="VER USUARIOS INACTIVOS"><i class="fas fa-filter" id="searchcatalogs"></i></button>



    
<select id="list-storesListstoreq" class="form-control" name="lista1" required></select>
<option selected>Selecciona tienda</option>

<button type="button" class="btn btn-primary1 edit-button1"  style="color: #C70039;" title="VER USUARIOS INACTIVOS"><i class="fas fa-filter" id="filtercatalogsbystore"></i></button>

<button type="button" class="btn btn-primary1 edit-button1"  style="color: #C70039;" title="VER USUARIOS INACTIVOS"><i class="fas fa-filter" id="filtercatalogsbystoresimple"></i></button>

<div id="containerStoresInfo" class="card-container">
            <!-- Contenido de la sección expandible -->
        </div>
<div id="containerStoresData" class="card-container">
            <!-- Contenido de la sección expandible -->
        </div>
</div>



      </div>
     
    </div>
  </div>
</div>




<!-- Modal -->
<div class="modal fade" id="clientStoreCreate" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-l">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #001219; color: #C70039;">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="public/KAIROS2.png" alt="LUGMA" width="30" height="30" style="background-color: #001219; color: #C70039;">Crear elemento</h1>
        
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" onclick="closeModal('clientStoreCreate')"></button>
      </div>
      <div class="modal-body">
     

  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Nombre de la tienda</label>
  <input type="text" class="form-control" id="sName" placeholder="Ingresa nombre de room">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Imagen de la tienda</label>
  <input type="text" class="form-control" id="sNameImg" placeholder="Ingresa imagen de la tienda">
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Comentarios</label>
  <input type="text" class="form-control" id="sComments" placeholder="Ingresa nombre de room">
</div>
  
<div class="mb-3">
  <select id="list-storeType1" class="form-control" name="lista1" required>
  <option value="ecm">E-commerce</option>
  <option value="pos">Punto de venta</option>
  <option value="ecm_pos">E-commerce y punto de venta</option>
  </select>
<option selected>Tipo de tienda</option>
</div>
<button type="button" data-bs-dismiss="modal" class="btn btn-primary1 edit-button" id="postStoressbtn" title="CREAR ELEMENTO"><i class="fas fa-plus"></i></button>




<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Cargar archivo CSV y convertirlo en JSON</title>
</head>
<body>
  <h3>CARGA MASIVA</h3>
    <input type="file" id="fileInputStore">
    <div id="resultStore"></div>

    <script>
        document.getElementById('fileInputStore').addEventListener('change', function(event) {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = function(event) {
                const csvData = event.target.result;
                const json = csvToJsonPostStore(csvData);
                document.getElementById('resultStore').innerText = JSON.stringify(json, null, 2);
            };

            reader.readAsText(file);
        });

        
    </script>
</body>
</html>


</div>



      </div>
     
    </div>
  </div>
</div>

<script  src="scripts/posts/postStores.js"></script>