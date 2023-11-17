

<!-- Modal -->
<div class="modal fade" id="closesession" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #<?php echo $_SESSION['bgColor'];?>; color: #<?php echo $_SESSION['txtColor'];?>;">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="<?php echo $_SESSION['imgIcon'];?>" alt="LUGMA" width="30" height="30">¡Cerrar sesión!</h1>
        
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" onclick="closeModCloseSession()"></button>
      </div>

      <style>
        /* Estilos para alinear el h2 horizontalmente */
        h2 {
            text-align: center; /* Alinea horizontalmente en el centro */
        }
    </style>
      <div class="modal-body" text-align="center">
        <h2>¿Seguro deseas cerrar sesión?</h2>

     
     
<!-- Agrega un identificador único al enlace para que sea más fácil seleccionarlo con JavaScript -->
<a id="cerrarSesionLink" href="../controller/controllerValidateLogOut.php" class="btn btn-primary1">Cerrar</a>

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
function openModCloseSession() {
  var myModal = new bootstrap.Modal(document.getElementById('closesession'));
  myModal.show();
}


function closeModCloseSession() {
  var myModal = new bootstrap.Modal(document.getElementById('closesession'));
  myModal.hide();
  
}
</script>