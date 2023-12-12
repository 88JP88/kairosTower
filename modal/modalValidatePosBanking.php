<!-- PHP - Archivo que establece la variable de sesión -->


<!-- Resto de tu HTML/PHP y JavaScript -->
<!-- Modal -->
<div class="modal fade" id="valPosShopBanking" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-header" style="background-color: #001219; color: #C70039;">
                <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="public/KAIROS2.png" alt="LUGMA" width="30" height="30" style="background-color: #001219; color: #C70039;">Validar compra</h1>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" onclick="closeModValPosShopBanking()"></button>
            </div>
            <div class="modal-body">
                
 
                
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Referencia de pago:</label>
  <input type="text" class="form-control" id="paymentReference" placeholder="Ingresa referencia, número de transacción o movimiento">
</div>

<button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="putOrderPaymentStatus();closeModValPosShopBanking()">Validar referencia</button>
        
          
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
    function openModValPosShopBanking() {
        var myModal = new bootstrap.Modal(document.getElementById('valPosShopBanking'));
        myModal.show();
    }

    function closeModValPosShopBanking() {
        var myModal = new bootstrap.Modal(document.getElementById('valPosShopBanking'));
        myModal.hide();
    }
</script>
