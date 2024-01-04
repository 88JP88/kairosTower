

<!-- Modal -->
<div class="modal fade" id="clientDelivery" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #001219; color: #C70039;">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="public/KAIROS2.png" alt="LUGMA" width="30" height="30" style="background-color: #001219; color: #C70039;">Elementos</h1>
        
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" onclick="closeModClientDelivery()"></button>

      </div>
      <div class="modal-body">
      <button type="button" class="btn btn-primary1 edit-button1" onclick="getClientCustomers('all','all','all');"  style="color: #C70039;" title="VER USUARIOS ACTIVOS"><i class="fas fa-globe"></i></button>
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

     <?php 
     require_once 'layout/formClientDelivery.php';
     ?>
</div>



      </div>
     
    </div>
  </div>
</div>




<script>
function openModClientDelivery() {
  var myModal = new bootstrap.Modal(document.getElementById('clientDelivery'));
  myModal.show();
}


function closeModClientDelivery() {
  var myModal = new bootstrap.Modal(document.getElementById('clientDelivery'));
  myModal.hide();
  
}
</script>