<!-- PHP - Archivo que establece la variable de sesión -->


<!-- Resto de tu HTML/PHP y JavaScript -->
<!-- Modal -->
<div class="modal fade" id="valEcmShop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-header" style="background-color: #001219; color: #C70039;">
                <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="public/KAIROS2.png" alt="LUGMA" width="30" height="30" style="background-color: #001219; color: #C70039;">Validar compra</h1>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" onclick="closeModValEcmShop()"></button>
            </div>
            <div class="modal-body">
                
 
  <p class="card-text">Tipo de pago:
  

           

  <div class="mb-3">
  
  <select id="list-paymentTypeEcm" class="form-control" name="lista" required>

  <option value="cash">Efectivo</option>
  <option value="transfer">Transacción</option>
  <option value="card">Tarjeta</option>
  <option value="points">Puntos</option>
  <option value="gc">Tarjeta regalo</option>
  <option value="pc">Código de promoción</option>
  </select>
 
    
  </div>
  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Paga con:</label>
  <input type="text" class="form-control" id="paymentcashEcm" placeholder="Ingresa valor">
</div>
  
  <div class="mb-3">
  
  <select id="list-paymentMethodEcm" class="form-control" name="lista" required>

  <option value="cash"></option>
  <option value="app">Aplicación (Transacción)</option>
  <option value="dc">Tarjeta débito (Tarjeta)</option>
  <option value="cc">Tarjeta crédito  (Tarjeta)</option>
  </select>
 
    
  </div>
                </p>
                


                
                <p class="card-text">Entidad bancaria:
  

           

  <div class="mb-3">
  
  <select id="list-bankMethodEcm" class="form-control" name="lista" required>

  <option value="cash"></option>
  <option value="neq">Nequi (Aplicación)</option>
  <option value="dvp">Daviplata débito (Aplicación)</option>
  <option value="tfy">Transfi YA (Aplicación)</option>
  <option value="vs">Visa (Tarjeta)</option>
  <option value="mc">Master Card (Tarjeta)</option>
  </select>
 
    
  </div>
                </p>
                <p class="card-text">Entrega:
  

           

  <div class="mb-3">
  
  <select id="list-deliverymethod" class="form-control" name="lista" required>

  
  <option value="delivery">Domicilio</option>
  <option value="pickup">Recoge en punto</option>
  </select>
 
    
  </div>
                </p>
                <p class="card-text">Correo de validación:
                <div class="mb-3">
  <input type="text" class="form-control" id="validationEcmMail" placeholder="Ingresa correo de validación">

    

              
              
       
        <div id="card-validateClientEcm" class="card-container">
            <!-- Contenido de la sección expandible -->
        </div>
  </div>
                </p>
                <button type="button" class="btn btn-primary" onclick="sendEcmCode();openModValEcmCode();">Validar código</button>
   
               <?php
                // PHP - Lógica para determinar qué formulario de usuario requerir
                
                    require_once 'layout/formValidateEcmShop.php';
                    //echo $_SESSION['tipoUsuario'];
               
                ?>
            </div>
        </div>
    </div>
</div>

<script>
    function openModValEcmShop() {
        var myModal = new bootstrap.Modal(document.getElementById('valEcmShop'));
        myModal.show();
    }

    function closeModValEcmShop() {
        var myModal = new bootstrap.Modal(document.getElementById('valEcmShop'));
        myModal.hide();
    }
</script>
<script src="scripts/posts/postSendEcmCode.js"></script>