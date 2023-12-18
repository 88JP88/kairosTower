<!-- PHP - Archivo que establece la variable de sesión -->


<!-- Resto de tu HTML/PHP y JavaScript -->
<!-- Modal -->
<div class="modal fade" id="clientOrdersMod" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl">
        <div class="modal-content">
            <div class="modal-header" style="background-color: #001219; color: #C70039;">
                <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="public/KAIROS2.png" alt="LUGMA" width="30" height="30" style="background-color: #001219; color: #C70039;">Validar compra</h1>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" onclick="closeModClientOrders()"></button>
            </div>
            <div class="modal-body">
                
 
     
          
                <?php
                // PHP - Lógica para determinar qué formulario de usuario requerir
                
                    require_once 'layout/tableClientOrders.php';
                    //echo $_SESSION['tipoUsuario'];
               
                ?>
            </div>
        </div>
    </div>
</div>

<script>
    function openModClientOrders() {
        var myModal = new bootstrap.Modal(document.getElementById('clientOrdersMod'));
        myModal.show();
    }

    function closeModClientOrders() {
        var myModal = new bootstrap.Modal(document.getElementById('clientOrdersMod'));
        myModal.hide();
    }
</script>
