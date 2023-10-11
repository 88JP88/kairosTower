

<!-- Modal -->
<div class="modal fade" id="createUserClient" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #001219; color: #C70039;">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="public/KAIROS2.png" alt="LUGMA" width="30" height="30" style="background-color: #001219; color: #C70039;">Crear usuario (cliente)</h1>
        
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" onclick="closeModCreateUserClient()"></button>

      </div>
      <div class="modal-body">
     <?php 
     require_once 'layout/formCreateUserClient.php';
     ?>
</div>



      </div>
     
    </div>
  </div>
</div>




<script>
function openModCreateUserClient() {
  var myModal = new bootstrap.Modal(document.getElementById('createUserClient'));
  myModal.show();
}


function closeModCreateUserClient() {
  var myModal = new bootstrap.Modal(document.getElementById('createUserClient'));
  myModal.hide();
  
}
</script>