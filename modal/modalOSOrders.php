






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

      <button onclick="

openModal('OSOrdersVerify');
      
createTable('tableInternalClients22','containerOrdersVerifyData', [
  
  'Acciones',
  'Estado',
'Total',
  'Sub-Total',
  
  'Ahorro',
  'Pago',
  'Responsable',
  'Cliente',
  'Catálogo'
]);

  
getApiData(getOrdersOS,
{
'apiService':'apiOS',
'apiVersion':'v1',
'endPoint':'getOrders'
},
{
'containerData':'containerOrdersVerifyData',
'containerInfo':'containerOrdersVerifyInfo',
'modelView':'tableOS',
},
{
'filter':'bySiteOrderStatus',
'param':'delivered',
'value': sessionStorage.getItem('siteNow')
}
);

"  title="EDITAR">
<i class="fas fa-plus"> Ver ordenes</i>
</button>
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




<script  src="scripts/posts/os.postCategories.js"></script>