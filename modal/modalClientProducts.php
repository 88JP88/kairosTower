

<!-- Modal -->
<div class="modal fade" id="clientProducts" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #001219; color: #C70039;">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="public/KAIROS2.png" alt="LUGMA" width="30" height="30" style="background-color: #001219; color: #C70039;">Elementos</h1>
        
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" onclick="closeModClientProducts()"></button>

      </div>
      <div class="modal-body">
      <button type="button" class="btn btn-primary1 edit-button1" onclick="getClientProducts('all','all','all');"  style="color: #C70039;" title="VER USUARIOS ACTIVOS"><i class="fas fa-globe"></i></button>

      <div class="mb-3">
 <label for="currency">Busqueda por parámetro</label>
<select id="repos-select234666" class="form-control" name="currency" required>
<option selected>Selecciona parámetro</option>
<option value="">Nombre de producto</option>
<option value="">Estado de producto</option>
<option value="">Descripción de producto</option>
</select>

</div>
    <button type="button" class="btn btn-primary1 edit-button1" onclick="getInternalUsers('lock');" style="color: #C70039;" title="VER USUARIOS INACTIVOS"><i class="fas fa-eye-slash"></i></button>

     <?php 
     require_once 'layout/formClientProducts.php';
     ?>
</div>



      </div>
     
    </div>
  </div>
</div>




<script>
function openModClientProducts() {
  var myModal = new bootstrap.Modal(document.getElementById('clientProducts'));
  myModal.show();
}


function closeModClientProducts() {
  var myModal = new bootstrap.Modal(document.getElementById('clientProducts'));
  myModal.hide();
  
}
</script>