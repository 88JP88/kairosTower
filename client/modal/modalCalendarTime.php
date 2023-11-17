

<!-- Modal -->
<div class="modal fade" id="calendarTime" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #<?php echo $_SESSION['bgColor'];?>; color: #<?php echo $_SESSION['txtColor'];?>;">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="<?php echo $_SESSION['imgIcon'];?>" alt="LUGMA" width="30" height="30" style="background-color: #<?php echo $_SESSION['bgColor'];?>; color: #<?php echo $_SESSION['txtColor'];?>;">Horas disponibles</h1>
        
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" onclick="closeModCalendarTime();"></button>
      </div>
      <div class="modal-body">
     <?php 
     require_once '../layout/formCalendarTime.php';
     ?>
</div>



      </div>
     
    </div>
  </div>
</div>




<script>
function openModCalendarTime() {
  var myModal = new bootstrap.Modal(document.getElementById('calendarTime'));
  myModal.show();
}


function closeModCalendarTime() {
  var myModal = new bootstrap.Modal(document.getElementById('calendarTime'));
  myModal.hide();
  
}
</script>