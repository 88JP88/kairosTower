

<!-- Modal -->
<div class="modal fade" id="closesessions" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #<?php echo $_SESSION['bgColor'];?>;">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="<?php echo $_SESSION['imgLogo'];?>" alt="LUGMA" width="30" height="30">¡Cerrar sesión!</h1>
        
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" onclick="closeModCloseSessions()"></button>
      </div>
      <div class="modal-body">
        <h2>¿Seguro deseas cerrar sesión?</h2>

        <?php 
     require_once '../layout/formLoginClose.php';
     ?>
     

<script>
document.addEventListener("DOMContentLoaded", function() {
  // Obtén una referencia al enlace por su identificador único
  var cerrarSesionLink = document.getElementById("cerrarSesionLink");

  // Agrega un evento de clic al enlace
  cerrarSesionLink.addEventListener("click", function(event) {
    // Evita el comportamiento predeterminado del enlace (evitar navegación inmediata)
    event.preventDefault();

    // Borrar las variables de sessionStorage
    sessionStorage.clear();

    // Redirigir a la URL del archivo PHP
    window.location.href = cerrarSesionLink.getAttribute("href");
  });
});
</script>

    
</div>



      </div>
      
    </div>
  </div>
</div>




<script>
function openModCloseSessions() {
  var myModal = new bootstrap.Modal(document.getElementById('closesessions'));
  myModal.show();
}


function closeModCloseSessions() {
  var myModal = new bootstrap.Modal(document.getElementById('closesessions'));
  myModal.hide();
  
}
</script>