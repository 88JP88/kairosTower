






<!-- Modal -->
<div class="modal fade" id="OSOrdersView" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #001219; color: #C70039;">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="public/KAIROS2.png" alt="LUGMA" width="30" height="30" style="background-color: #001219; color: #C70039;">Crear Puesto</h1>
        
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" onclick="closeModal('clientDeliveryCreate')"></button>
      </div>
      <div class="modal-body">
      <div id="chart_div_Orders_os" style="width: 400px; height: 200px;"></div>

   
      <div id="containerOrdersInfo" class="card-container">
            <!-- Contenido de la sección expandible -->
        </div>
        <div id="containerOrdersData" class="card-container">
            <!-- Contenido de la sección expandible -->
        </div>


    

</div>



      </div>
     
    </div>
  </div>
</div>




<!-- Modal -->
<div class="modal fade" id="OSOrdersProductsView" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #001219; color: #C70039;">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="public/KAIROS2.png" alt="LUGMA" width="30" height="30" style="background-color: #001219; color: #C70039;">Crear Puesto</h1>
        
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" onclick="closeModal('clientDeliveryCreate')"></button>
      </div>
      <div class="modal-body">
     
      
      <div id="containerOrdersProductsInfo" class="card-container">
  
            <!-- Contenido de la sección expandible -->
        </div>
        <div id="containerOrdersProductsData" class="card-container">
            <!-- Contenido de la sección expandible -->
        </div>


    

</div>



      </div>
     
    </div>
  </div>
</div>







<!-- Modal bySiteOrderStatus   editOSOrder(this,&quot;${info.clientId}&quot;,&quot;${info.orderId}&quot;,&quot;orderStatus&quot;,&quot;finished&quot;,&quot;status&quot;)-->
<div class="modal fade" id="OSOrdersVerify" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #001219; color: #C70039;">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="public/KAIROS2.png" alt="LUGMA" width="30" height="30" style="background-color: #001219; color: #C70039;">Crear Puesto</h1>
        
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" onclick="closeModal('clientDeliveryCreate')"></button>
      </div>
      <div class="modal-body">
      <div id="containerOrdersVerificationInfo" class="card-container">
  
  <!-- Contenido de la sección expandible -->
</div>
<div id="containerOrdersVerificationInfo1" class="card-container">
  
  <!-- Contenido de la sección expandible -->
</div>
<div id="containerOrdersVerificationData" class="card-container">
  
  <!-- Contenido de la sección expandible -->
</div>
<script>
// Obtener el valor del parámetro "clientId" de la URL
const urlParam = window.location.href;
const urlObj = new URL(urlParam);
var clientId = urlObj.searchParams.get("clientId");
var siteNow = sessionStorage.getItem('siteNow');
var trackNow = 'ot'+sessionStorage.getItem('siteNow');
var trackId = sessionStorage.getItem(trackNow);
console.log(trackId);

</script>

<!-- Botón con el evento onClick para llamar a la función -->

<button onclick="editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('ot'+sessionStorage.getItem('siteNow')), 'orderStatus', 'finishedAll', 'status');">Calcular</button>
<button onclick="openModal('OSOrdersVerifyPayment');createResourceBtnPay('contaionerBtnPay');">Validar pago</button>


      <div id="containerOrdersVerifyInfo" class="card-container">
            <!-- Contenido de la sección expandible -->
        </div>
        <div id="containerOrdersVerifyData" class="card-container">
            <!-- Contenido de la sección expandible -->
        </div>


    

</div>



      </div>
     
    </div>
  </div>
</div>






<script>
  
  document.getElementById('os-payment-type').addEventListener('change', function() {
      var selectedValue = this.value;
      var transferElements = document.getElementById('transfer-elements');
      var cardElements = document.getElementById('card-elements');
      var cryptoElements = document.getElementById('crypto-elements');
      var cashElements = document.getElementById('cash-elements');
      var otmet = document.getElementById('otmeth-elements');
     
     // Ocultar todos los elementos adicionales
     otmet.style.display = 'none';
     
      // Ocultar todos los elementos adicionales
      transferElements.style.display = 'none';
      cardElements.style.display = 'none';
      cryptoElements.style.display = 'none';
      cashElements.style.display = 'none';
    
  
      // Mostrar los elementos adicionales según la selección del tipo de pago
      if (selectedValue == 'transfer') {
          transferElements.style.display = 'block';
      } else if (selectedValue == 'card') {
          cardElements.style.display = 'block';
      } else if (selectedValue == 'crypto') {
          cryptoElements.style.display = 'block';
      }
      else if (selectedValue == 'cash') {
          cashElements.style.display = 'block';
      }
  });
  
  document.getElementById('os-payment-method1').addEventListener('change', function() {
    
      var selectedValue = this.value;
      var otmet = document.getElementById('otmeth-elements');
     
      // Ocultar todos los elementos adicionales
      otmet.style.display = 'none';
      
  
      // Mostrar los elementos adicionales según la selección del tipo de pago
      if (selectedValue == 'ot') {
        otmet.style.display = 'block';
      } 
  
  
  });
  document.getElementById('os-payment-method2').addEventListener('change', function() {
    
      var selectedValue = this.value;
      var otmet = document.getElementById('otmeth-elements');
     
      // Ocultar todos los elementos adicionales
      otmet.style.display = 'none';
      
  
      // Mostrar los elementos adicionales según la selección del tipo de pago
      if (selectedValue == 'ot') {
        otmet.style.display = 'block';
      } 
  
  
  });
  
  </script>

<script  src="scripts/posts/os.CreateOrder.js"></script>