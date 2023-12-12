<!-- PHP - Archivo que establece la variable de sesión -->


<!-- Resto de tu HTML/PHP y JavaScript -->
<!-- Modal -->
<div class="modal fade" id="valPosShop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-header" style="background-color: #001219; color: #C70039;">
                <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="public/KAIROS2.png" alt="LUGMA" width="30" height="30" style="background-color: #001219; color: #C70039;">Validar compra</h1>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" onclick="closeModValPosShop()"></button>
            </div>
            <div class="modal-body">
                
 
  <p class="card-text">Tipo de pago:
  

           

  <div class="mb-3">
  
  <select id="list-paymentType" class="form-control" name="lista" required>

  <option value="cash">Efectivo</option>
  <option value="transfer">Transacción</option>
  <option value="card">Tarjeta</option>
  <option value="points">Puntos</option>
  <option value="gc">Tarjeta regalo</option>
  <option value="pc">Código de promoción</option>
  </select>
 
    
  </div>
                </p>
                
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Paga con:</label>
  <input type="text" class="form-control" id="paymentcash" placeholder="Ingresa valor">
</div>

                <p class="card-text">Método de pago:
  

           

  <div class="mb-3">
  
  <select id="list-paymentMethod" class="form-control" name="lista" required>

  <option value="cash"></option>
  <option value="app">Aplicación (Transacción)</option>
  <option value="dc">Tarjeta débito (Tarjeta)</option>
  <option value="cc">Tarjeta crédito  (Tarjeta)</option>
  </select>
 
    
  </div>
                </p>
                <p class="card-text">Entidad bancaria:
  

           

  <div class="mb-3">
  
  <select id="list-bankMethod" class="form-control" name="lista" required>

  <option value="cash"></option>
  <option value="neq">Nequi (Aplicación)</option>
  <option value="dvp">Daviplata débito (Aplicación)</option>
  <option value="tfy">Transfi YA (Aplicación)</option>
  <option value="vs">Visa (Tarjeta)</option>
  <option value="mc">Master Card (Tarjeta)</option>
  </select>
 
    
  </div>
                </p>
                <p class="card-text">Cliente:
  

           

  <div class="mb-3">
  
  <select id="list-customerget" class="form-control" name="lista" required>

  </select>
  <button class="btn btn-primary" onClick="getClientCustomersPos('filter','customerId','value');">Validar cliente</button>
  <div id="card-validateClientPos" class="card-container">
            <!-- Contenido de la sección expandible -->
        </div>
  </div>
                </p>
                <button type="button" class="btn btn-primary" onclick="arrayToHTMLCardsPayload();createPosOrder();">Validar compra</button>
      
               <?php
                // PHP - Lógica para determinar qué formulario de usuario requerir
                
                    require_once 'layout/formValidatePosShop.php';
                    //echo $_SESSION['tipoUsuario'];
               
                ?>
            </div>
        </div>
    </div>
</div>

<script>
    function openModValPosShop() {
        var myModal = new bootstrap.Modal(document.getElementById('valPosShop'));
        myModal.show();
    }

    function closeModValPosShop() {
        var myModal = new bootstrap.Modal(document.getElementById('valPosShop'));
        myModal.hide();
    }
</script>
