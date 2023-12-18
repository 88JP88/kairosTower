<!-- PHP - Archivo que establece la variable de sesión -->


<!-- Resto de tu HTML/PHP y JavaScript -->
<!-- Modal -->
<div class="modal fade" id="valEcmCode" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-header" style="background-color: #001219; color: #C70039;">
                <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="public/KAIROS2.png" alt="LUGMA" width="30" height="30" style="background-color: #001219; color: #C70039;">Validar compra</h1>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" onclick="closeModValEcmCode()"></button>
            </div>
            <div class="modal-body">
                
 
                
<div class="mb-3">
    <h3>Enviamos un código de verificación a tu correo</h3>
  <label for="exampleFormControlInput1" class="form-label">Código de verificación de compra:</label>
  <input type="text" class="form-control" id="validationCodeSend" placeholder="Ingresa referencia, número de transacción o movimiento">
</div>

<button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="sendEcmCodeVal();">Validar referencia</button>
        
          
                <?php
                // PHP - Lógica para determinar qué formulario de usuario requerir
                
                    //require_once 'layout/formValidatePosShop.php';
                    //echo $_SESSION['tipoUsuario'];
               
                ?>
            </div>
        </div>
    </div>
</div>

<script>
    function openModValEcmCode() {
        var myModal = new bootstrap.Modal(document.getElementById('valEcmCode'));
        myModal.show();
    }

    function closeModValEcmCode() {
        var myModal = new bootstrap.Modal(document.getElementById('valEcmCode'));
        myModal.hide();
    }
</script>
<script src="scripts/posts/postValidateCodeEcm.js"></script>