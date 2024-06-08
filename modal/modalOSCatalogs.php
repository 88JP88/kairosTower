


<!-- Modal -->
<div class="modal fade" id="OSCatalogCreate" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-l">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #001219; color: #C70039;">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="public/KAIROS2.png" alt="LUGMA" width="30" height="30" style="background-color: #001219; color: #C70039;">Crear Catálogo</h1>
        
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" onclick="closeModal('clientDeliveryCreate')"></button>
      </div>
      <div class="modal-body">
     


      <div class="mb-3">
<label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Establecimiento</label>

  <select id="list-OSPlaceList" class="form-control" name="lista1" required>
  <option value="">Seleccione establecimiento</option>
</select>

</div>

      <div class="mb-3">
<label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Producto</label>

  <select id="list-OSProductList" class="form-control" name="lista1" required>
  <option value="">Seleccione producto / servicio</option>
</select>

</div>

<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Categoría</label>

  <select id="list-OSCategoryList" class="form-control" name="lista1" required>
  <option value="">Seleccione categoría</option>
</select>

</div>



<div class="mb-3" >
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Comentarios del catálogo</label>
  <input type="mail" class="form-control" id="catalogOSComments" placeholder="Ingresa nombre de room">
</div>



<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Valor del producto / servicio</label>
  <input type="mail" class="form-control" id="catalogOSValue" placeholder="Ingresa nombre de room">
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Stock</label>
  <input type="mail" class="form-control" id="catalogOSStock" placeholder="Ingresa nombre de room">
</div>







<div class="mb-3">
  <input type="checkbox" id="checkDiscount1">
  <label for="checkDiscount">Opciones avanzadas</label>
</div>


<div class="mb-3" id="unidadSStock"  style="display: none;">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Stock de seguridad</label>
  <input type="number" class="form-control" id="catalogOSSStock" value="0">
</div>

<div class="mb-3" id="unidadMinqty"  style="display: none;">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Cantidad mínima de venta</label>
  <input type="number" class="form-control" id="catalogOSMinqty" value="1">
</div>

<div class="mb-3" id="unidadMaxQty"  style="display: none;">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Cantidad máxima de venta</label>
  <input type="number" class="form-control" id="catalogOSMaxqty" value="100">
</div>
<div class="mb-3" id="unidadIsdiscount"  style="display: none;">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Descuento</label>
  
  <select class="form-control" id="catalogOSIsdiscount" name="unidad" required>
  
    <option value="false">sin decuento</option>
    <option value="true">con descuento</option>
  </select>

</div>
<div class="mb-3" id="unidadDiscount"  style="display: none;">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>% Descuento</label>
  <input type="number" class="form-control" id="catalogOSDiscount" value="0">
</div>
<div class="mb-3" id="unidadIspromo"  style="display: none;">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Promoción</label>
  
  <select class="form-control" id="catalogOSIspromo" name="unidad" required>
  
  <option value="false">sin promoción</option>
  <option value="true">con promoción</option>
</select>
</div>
<div class="mb-3" id="unidadPromo"  style="display: none;">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>ID promoción</label>
  <input type="text" class="form-control" id="catalogOSPromo"value="0">
</div>

<div class="mb-3" id="unidadIsstocked"  style="display: none;">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Bodega</label>
 
  <select class="form-control" id="catalogOSIsstocked" name="unidad" required>
  
  <option value="false">no bodega</option>
  <option value="true">en bodega</option>
</select>
 
</div>
<div class="mb-3" id="unidadIsinternal"  style="display: none;">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Uso interno</label>
  
  <select class="form-control" id="catalogOSIsinternal" name="unidad" required>
  
  <option value="false">no uso interno</option>
  <option value="true">uso interno</option>
</select>
</div>

<button type="button" class="btn btn-primary1 edit-button" id="postCatalogOSBtn" title="CREAR UBICACIÓN" data-bs-dismiss="modal"><i class="fas fa-plus"></i></button>
</div>



      </div>
     
    </div>
  </div>
</div>
<script>
 
 document.getElementById('catalogOSIsdiscount').addEventListener('change', function() {
    var tipo = document.getElementById('catalogOSIsdiscount').value;
    
    if (tipo === 'true') {
   
      document.getElementById('unidadDiscount').style.display = 'block';
      var discount= document.getElementById('catalogOSDiscount');
      document.getElementById('unidadDiscount').style.display = 'block';
      discount.value=0;

    } else if (tipo === 'false') {
      var discount= document.getElementById('catalogOSDiscount');
      document.getElementById('unidadDiscount').style.display = 'block';
      discount.value=0;
      document.getElementById('unidadDiscount').style.display = 'none';
    }
  });

  document.getElementById('catalogOSIspromo').addEventListener('change', function() {
    var tipo = document.getElementById('catalogOSIspromo').value;
    
    if (tipo === 'true') {
   
      document.getElementById('unidadPromo').style.display = 'block';
      var discount= document.getElementById('catalogOSPromo');
      document.getElementById('unidadPromo').style.display = 'block';
      discount.value=0;

    } else if (tipo === 'false') {
      var discount= document.getElementById('catalogOSPromo');
      document.getElementById('unidadPromo').style.display = 'block';
      discount.value=0;
      document.getElementById('unidadPromo').style.display = 'none';
    }
  });



  document.getElementById('catalogOSIsstocked').addEventListener('change', function() {
    var tipo = document.getElementById('catalogOSIsstocked').value;
    
    if (tipo === 'true') {
   
    
      var discount= document.getElementById('catalogOSIsinternal');

      discount.value=false;

    } else if (tipo === 'false') {
     
    }
  });

  
  document.getElementById('catalogOSIsinternal').addEventListener('change', function() {
    var tipo = document.getElementById('catalogOSIsinternal').value;
    
    if (tipo === 'true') {
   
    
      var discount= document.getElementById('catalogOSIsstocked');

      discount.value=false;

    } else if (tipo === 'false') {
     
    }
  });


  document.getElementById('checkDiscount1').addEventListener('change', function() {
    var isChecked = this.checked;
    var secStock=  document.getElementById('catalogOSSStock');
  var minqty= document.getElementById('catalogOSMinqty');
  var maxqty=   document.getElementById('catalogOSMaxqty');
  var isdiscount=  document.getElementById('catalogOSIsdiscount');
  var discount= document.getElementById('catalogOSDiscount');
  var ispromo= document.getElementById('catalogOSIspromo');
  var promo= document.getElementById('catalogOSPromo');
  var isstocked= document.getElementById('catalogOSIsstocked');
  var isinternal= document.getElementById('catalogOSIsinternal');
      

    if (isChecked) {
      document.getElementById('unidadSStock').style.display = 'block';
      document.getElementById('unidadMinqty').style.display = 'block';
      document.getElementById('unidadMaxQty').style.display = 'block';
      document.getElementById('unidadIsdiscount').style.display = 'block';
      document.getElementById('unidadDiscount').style.display = 'none';
      document.getElementById('unidadIspromo').style.display = 'block';
      document.getElementById('unidadPromo').style.display = 'none';
      document.getElementById('unidadIsstocked').style.display = 'block';
      document.getElementById('unidadIsinternal').style.display = 'block';
      secStock.value=0;
      minqty.value=1;
      maxqty.value=100;
      isdiscount.value=false;
      discount.value=0;
      ispromo.value=false;
      promo.value=0;
      isstocked.value=false;
      isinternal.value=false;
   
   
    } else {
      document.getElementById('unidadSStock').style.display = 'none';
      document.getElementById('unidadMinqty').style.display = 'none';
      document.getElementById('unidadMaxQty').style.display = 'none';
      document.getElementById('unidadIsdiscount').style.display = 'none';
      document.getElementById('unidadDiscount').style.display = 'none';

      document.getElementById('unidadIspromo').style.display = 'none';
      document.getElementById('unidadPromo').style.display = 'none';
      document.getElementById('unidadIsstocked').style.display = 'none';
      document.getElementById('unidadIsinternal').style.display = 'none';
   
      secStock.value=0;
      minqty.value=1;
      maxqty.value=100;
      isdiscount.value=false;
      discount.value=0;
      ispromo.value=false;
      promo.value=0;
      isstocked.value=false;
      isinternal.value=false;

    }
  });
</script>
























<!-- Modal -->
<div class="modal fade" id="OSCatalogViewOS" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-Xl">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #001219; color: #C70039;">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="public/KAIROS2.png" alt="LUGMA" width="30" height="30" style="background-color: #001219; color: #C70039;">Crear Catálogo</h1>
        
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" onclick="closeModal('OSCatalogViewOS')"></button>
      </div>
      <div class="modal-body">
      <div id="placeOSCar">
       
       </div>
       <div id="placeOSCarTotal">
       
       </div>
       <div id="placeOSCarsubTotal">
       
       </div>
       <div id="placeOSCarSaver">
       
       </div>
       <div class="card-container">
Responsable:
       <select id="list-OSEmployeesList" class="form-control" name="lista1" required></select>
       </div>
       <div class="card-container">
Cliente:
       <select id="list-OSCustomerListOS" class="form-control" name="lista1" required></select>
       </div>

      <div id="OSCatalogViewInfo" class="card-container">

            <!-- Contenido de la sección expandible -->
        </div>
        <div id="OSCatalogViewData" class="scard-container">
            <!-- Contenido de la sección expandible -->
        </div>


<div id="containerBtnCreateOrder"></div>
      
    
</div>



      </div>
     
    </div>
  </div>
</div>





<script  src="scripts/posts/os.postCatalogs.js"></script>

<script  src="scripts/posts/os.postSites.js"></script>

<script  src="scripts/posts/os.createOrder.js"></script>
<script  src="scripts/gets/main.createResources.js"></script>