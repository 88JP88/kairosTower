






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








<!-- Modal bySiteOrderStatus   editOSOrder(this,&quot;${info.clientId}&quot;,&quot;${info.orderId}&quot;,&quot;orderStatus&quot;,&quot;finished&quot;,&quot;status&quot;)-->
<div class="modal fade" id="OSOrdersVerifyPayment" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #001219; color: #C70039;">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="public/KAIROS2.png" alt="LUGMA" width="30" height="30" style="background-color: #001219; color: #C70039;">Crear Puesto</h1>
        
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" onclick="closeModal('clientDeliveryCreate')"></button>
      </div>
      <div class="modal-body">
<div id="contaionerBtnPay"></div>

      <p>Tipo de pago</p>
<select id="os-payment-type" class="form-control" name="lista1" required>
<option selected value=""></option>   
<option value="cash">Efectivo</option>
    <option value="transfer">Transferencia</option>
    <option value="card">Tarjeta</option>
    <option value="points">Puntos</option>
    <option value="crypto">Crypto</option>
</select>

<!-- Elementos adicionales a mostrar según la selección de tipo de pago -->
<div id="additional-elements">
    <div id="transfer-elements" style="display: none;">
        <p>Método de pago para Transferencia</p>
        <select id="os-payment-method2" class="form-control" name="lista1" required>
        <option selected value=""></option>  
        <option value="neq">NEQUI</option>
            <option value="dap">DAVIPLATA</option>
            <option value="bac">BANCOLOMBIA</option>
            <option value="nuB">NUBANK</option>
            <option value="ot">OTRO</option>
        </select>

        <p>Código de transacción</p>
        <input type="text" class="" id="os-input-trcode" value="" title="">    </div>

    </div>
    
    <div id="card-elements" style="display: none;">
        <p>Método de pago para Tarjeta</p>
        <select id="os-payment-method1" class="form-control" name="lista1" required>
        <option selected value=""></option>
        <option value="cv">VISA - DÉBITO</option>
            <option value="dv">VISA - CRÉDITO</option>
            <option value="dm">MASTERCARD - DÉBITO</option>
            <option value="cm">MASTERCARD - CREDITO</option>
            <option value="cd">DINNERS - CRÉDITO</option>
            <option value="ot">OTRO</option>
        </select>
    </div>
    <div id="otmeth-elements" style="display: none;">
        <p>Detalles de metodo</p>
        <p>Nombre de método</p>
        <input type="text" class="" id="os-input-otmethod" step="1.000"value="" title="">
       
      </div>
    <div id="crypto-elements" style="display: none;">
        <p>Detalles de Crypto</p>
        <p>Nombre de Crypto</p>
        <input type="text" class="" id="os-input-crypto-coin" value="" title="">
        <p>Usuario de Crypto</p>
        <input type="text" class="" id="os-input-crypto-user" value="" title="">
        <p>Cantidad de Crypto</p>
        <input type="number" class="" id="os-input-crypto-cointotal" step="0.0000000000001" value="" title="">    </div>

      </div>

      <div id="cash-elements" style="display: none;">
        <p>Detalles de Efectivo</p>
        <p>Paga con</p>
        <input type="number" class="" id="os-input-cash-paywith" step="1.000"value="" title="">
        <p>Cambio</p>
        <input type="number" class="" id="os-input-cash-paywithchange" value="" title="">    </div>

      </div>


<script>

 async function payEditOrder(paymentSource){
if (paymentSource=="fromMarket") {
 await editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('orderRandomCodeNow'), 'paymentType_Market', document.getElementById('os-payment-type').value, 'status');
   
}
if (paymentSource=="fromSite") {
  await editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('ot'+sessionStorage.getItem('siteNow')), 'paymentType', document.getElementById('os-payment-type').value, 'status');
   
}
   

    var transferElements = document.getElementById('transfer-elements');
    var cardElements = document.getElementById('card-elements');
    var cryptoElements = document.getElementById('crypto-elements');
    var cashElements = document.getElementById('cash-elements');
    var otmet = document.getElementById('otmeth-elements');
   
   // Ocultar todos los elementos adicionales

   
    // Ocultar todos los elementos adicionales
    if(transferElements.style.display = 'block'){


      if (paymentSource=="fromMarket") {
        await editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('orderRandomCodeNow'), 'paymentMethod_Market', document.getElementById('os-payment-method2').value, 'status');
        await editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('orderRandomCodeNow'), 'transactionCode_Market', document.getElementById('os-input-trcode').value, 'status');
      if(document.getElementById('os-payment-method2').value=='ot'){
        await editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('orderRandomCodeNow'), 'otherMethod_Market', document.getElementById('os-input-otmethod').value, 'status');
      }      
}
if (paymentSource=="fromSite") {
  await editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('ot'+sessionStorage.getItem('siteNow')), 'paymentMethod', document.getElementById('os-payment-method2').value, 'status');
  await editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('ot'+sessionStorage.getItem('siteNow')), 'transactionCode', document.getElementById('os-input-trcode').value, 'status');
      if(document.getElementById('os-payment-method2').value=='ot'){
        await editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('ot'+sessionStorage.getItem('siteNow')), 'otherMethod', document.getElementById('os-input-otmethod').value, 'status');
      }   
}
     

    }
    if(cardElements.style.display = 'block'){
      if (paymentSource=="fromMarket") {
        await editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('orderRandomCodeNow'), 'paymentMethod_Market', document.getElementById('os-payment-method1').value, 'status');
      if(document.getElementById('os-payment-method1').value=='ot'){
        await editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('orderRandomCodeNow'), 'otherMethod_Market', document.getElementById('os-input-otmethod').value, 'status');
      }      
}

      if (paymentSource=="fromSite") {
        await  editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('ot'+sessionStorage.getItem('siteNow')), 'paymentMethod', document.getElementById('os-payment-method1').value, 'status');
      if(document.getElementById('os-payment-method1').value=='ot'){
        await editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('ot'+sessionStorage.getItem('siteNow')), 'otherMethod', document.getElementById('os-input-otmethod').value, 'status');
      }   
}
      
    }

    if(document.getElementById('os-payment-type').value=='crypto'){

      if (paymentSource=="fromMarket") {
        await editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('orderRandomCodeNow'), 'cryptoName_Market', document.getElementById('os-input-crypto-coin').value, 'status');
        await editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('orderRandomCodeNow'), 'cryptoUser_Market', document.getElementById('os-input-crypto-user').value, 'status');
        await editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('orderRandomCodeNow'), 'cryptoValue_Market', document.getElementById('os-input-crypto-cointotal').value, 'status');
   
}
      if (paymentSource=="fromSite") {
        await  editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('ot'+sessionStorage.getItem('siteNow')), 'cryptoName', document.getElementById('os-input-crypto-coin').value, 'status');
        await editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('ot'+sessionStorage.getItem('siteNow')), 'cryptoUser', document.getElementById('os-input-crypto-user').value, 'status');
        await editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('ot'+sessionStorage.getItem('siteNow')), 'cryptoValue', document.getElementById('os-input-crypto-cointotal').value, 'status');
   
}
     

    }
    if(document.getElementById('os-payment-type').value=='cash'){
      if (paymentSource=="fromMarket") {
        await  editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('orderRandomCodeNow'), 'payWith_Market', document.getElementById('os-input-cash-paywith').value, 'status');
        await  editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('orderRandomCodeNow'), 'change_Market', document.getElementById('os-input-cash-paywithchange').value, 'status');

}

      if (paymentSource=="fromSite") {
        await  editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('ot'+sessionStorage.getItem('siteNow')), 'payWith', document.getElementById('os-input-cash-paywith').value, 'status');
        await editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('ot'+sessionStorage.getItem('siteNow')), 'change', document.getElementById('os-input-cash-paywithchange').value, 'status');

}


}
 


if (paymentSource=="fromMarket") {
  await  editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('orderRandomCodeNow'), 'paymentStatus_Market', 'payed', 'status');
  await editOSOrder(this, urlObj.searchParams.get('clientId'), sessionStorage.getItem('orderRandomCodeNow'), 'orderStatus', 'fromMarketFinished', 'status');
}
if (paymentSource=="fromSite") {
  await editOSOrder(this, urlObj.searchParams.get('clientId'),sessionStorage.getItem('ot'+sessionStorage.getItem('siteNow')), 'paymentStatus', 'payed', 'status');

}
    


  }


document.addEventListener('DOMContentLoaded', function() {

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

});
</script>

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


<script  src="scripts/posts/os.CreateOrder.js"></script>