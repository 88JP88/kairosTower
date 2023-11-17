

<!-- Modal -->
<div class="modal fade" id="asUserTimedes" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-l">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #<?php echo $_SESSION['bgColor'];?>; color: #<?php echo $_SESSION['txtColor'];?>;">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="<?php echo $_SESSION['imgIcon'];?>" alt="LUGMA" width="30" height="30" style="background-color: #<?php echo $_SESSION['bgColor'];?>; color: #<?php echo $_SESSION['txtColor'];?>;">Rooms ocupados</h1>
        
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" onclick="closeModUserTimedes();"></button>
      </div>
      <div class="modal-body">
     <?php 
     require_once '../layout/formUserTimedes.php';
     ?>
</div>



      </div>
     
    </div>
  </div>
</div>




<script>
function openModUserTimedes() {
  var myModal = new bootstrap.Modal(document.getElementById('asUserTimedes'));
  myModal.show();
}


function closeModUserTimedes() {
  var myModal = new bootstrap.Modal(document.getElementById('asUserTimedes'));
  myModal.hide();
  
}
</script>