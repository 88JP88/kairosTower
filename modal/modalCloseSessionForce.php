

<!-- Modal -->
<div class="modal fade" id="closesessionf" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #001219; color: #C70039;">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="public/KAIROS2.png" alt="LUGMA" width="30" height="30">¡Cierre remoto!</h1>
        
        
      </div>
      <div class="modal-body">
        <h2>¡Esta sesión ha sido cerrada de manera remota!</h2>

     
     
<!-- Agrega un identificador único al enlace para que sea más fácil seleccionarlo con JavaScript -->
<a id="cerrarSesionLinkf" href="controller/forceClose.php" class="btn btn-primary1">Aceptar</a>

<script>
document.addEventListener("DOMContentLoaded", function() {
  // Obtén una referencia al enlace por su identificador único
  var cerrarSesionLink = document.getElementById("cerrarSesionLinkf");

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
function openModCloseSessionf() {
  var myModal = new bootstrap.Modal(document.getElementById('closesessionf'));
  myModal.show();
}


function closeModCloseSessionf() {
  var myModal = new bootstrap.Modal(document.getElementById('closesessionf'));
  myModal.hide();
  
}
</script>