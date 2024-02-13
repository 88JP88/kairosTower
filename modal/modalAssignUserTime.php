

<!-- Modal -->
<div class="modal fade" id="asUserTime" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #001219; color: #C70039;">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="public/KAIROS2.png" alt="LUGMA" width="30" height="30" style="background-color: #001219; color: #C70039;">Usuarios disponibles</h1>
        
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" onclick="closeModUserTime();"></button>
      </div>
      <div class="modal-body">
    
<form>

<div class="mb-3">
 <label for="currency">Usuario</label>
<select id="list-internalusers" class="form-control" name="currency" required></select>
<option selected>Selecciona usuario</option>
</div>
<div class="mb-3">
 <label for="currency">Room</label>
<select id="list-clientroom" class="form-control" name="currency" required onclick="onClientRoomSelect('assign')"></select>
<option value="0">Selecciona room</option>
</div>
<div id="checkbox-container" class="card-container">
            <!-- Contenido de la sección expandible -->
        </div>
        
<button type="button" class="btn btn-primary1 edit-button" id="postAssignRoom" title="ASIGNAR USUARIO"><i class="fas fa-user-plus"></i></button>

</form>
<script  src="scripts/posts/postAssignRoom.js"></script>
</div>



      </div>
     
    </div>
  </div>
</div>




<script>
function openModUserTime() {
  var myModal = new bootstrap.Modal(document.getElementById('asUserTime'));
  myModal.show();
}


function closeModUserTime() {
  var myModal = new bootstrap.Modal(document.getElementById('asUserTime'));
  myModal.hide();
  
}
</script>