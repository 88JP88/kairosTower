

<!-- Modal -->
<div class="modal fade" id="clientDeliveryCreate" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-l">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #001219; color: #C70039;">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="public/KAIROS2.png" alt="LUGMA" width="30" height="30" style="background-color: #001219; color: #C70039;">Crear elemento</h1>
        
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" onclick="closeModClientDeliveryCreate()"></button>
      </div>
      <div class="modal-body">
     <?php 
     require_once 'layout/formCreateDelivery.php';
     ?>
</div>



      </div>
     
    </div>
  </div>
</div>




<script>
function openModClientDeliveryCreate() {
  var myModal = new bootstrap.Modal(document.getElementById('clientDeliveryCreate'));
  myModal.show();
}


function closeModClientDeliveryCreate() {
  var myModal = new bootstrap.Modal(document.getElementById('clientDeliveryCreate'));
  myModal.hide();
  
}
</script>