

<!-- Modal -->
<div class="modal fade" id="clientRooms" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #001219; color: #C70039;">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="public/KAIROS2.png" alt="LUGMA" width="30" height="30" style="background-color: #001219; color: #C70039;">Rooms</h1>
        
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" onclick="closeModClientRooms()"></button>
      </div>
      <div class="modal-body">
     <?php 
     require_once 'layout/formClientRooms.php';
     ?>
</div>



      </div>
     
    </div>
  </div>
</div>




<script>
function openModClientRooms() {
  var myModal = new bootstrap.Modal(document.getElementById('clientRooms'));
  myModal.show();
}


function closeModClientRooms() {
  var myModal = new bootstrap.Modal(document.getElementById('clientRooms'));
  myModal.hide();
  
}
</script>