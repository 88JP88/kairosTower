

<!-- Modal -->
<div class="modal fade" id="logIn" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #fcc627;">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="idea3.png" alt="LUGMA" width="30" height="30">Iniciar sesión</h1>
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" onclick="closeModLogIn()"></button>
      </div>
      <div class="modal-body">
     <?php 
     require_once '../layout/formLogin.php';
     ?>
</div>



      </div>
      
    </div>
  </div>
</div>




<script>
function openModLogIn() {
  var myModal = new bootstrap.Modal(document.getElementById('logIn'));
  myModal.show();
}


function closeModLogIn() {
  var myModal = new bootstrap.Modal(document.getElementById('logIn'));
  myModal.hide();
  
}
</script>