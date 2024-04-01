


<!-- Modal -->
<div class="modal fade" id="OSProductCreate" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-l">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #001219; color: #C70039;">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="public/KAIROS2.png" alt="LUGMA" width="30" height="30" style="background-color: #001219; color: #C70039;">Crear Producto / Servicio</h1>
        
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" onclick="closeModal('clientDeliveryCreate')"></button>
      </div>
      <div class="modal-body">
     

  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Nombre del producto / servicio</label>
  <input type="text" class="form-control" id="productOSName" placeholder="Ingresa nombre de room">
</div>
  



<div class="mb-3" >
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Comentarios del puesto</label>
  <input type="mail" class="form-control" id="productOSComments" placeholder="Ingresa nombre de room">
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Imagen del producto / servicio</label>
  <input type="mail" class="form-control" id="productOSImg" placeholder="Ingresa nombre de room">
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Valor del producto / servicio</label>
  <input type="mail" class="form-control" id="productOSValue" placeholder="Ingresa nombre de room">
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Caracteristicas del producto / servicio</label>
  <input type="mail" class="form-control" id="productOSCaracts" placeholder="Ingresa nombre de room">
</div>


<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Tipo</label>

  <select id="list-OSProductType" class="form-control" name="lista1" required>
  <option value="">Seleccione tipo</option>
<option value="product">Producto</option>
<option value="service">Servicio</option>
</select>

</div>



<div id="unidadSelect" class="mb-3" style="display: none;">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i> Unidad</label>
  <select class="form-control"  id="list-OSServiceUnit" name="unidad" required>
   
    
    <option value="srv">Servicio</option>
    <option value="h">Hora</option>
  </select>
</div>

<div id="unidadSelect1" class="mb-3" style="display: none;">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i> Unidad</label>
  <select class="form-control" id="list-OSProductUnit" name="unidad" required>
    
    <option value="NA">N/A</option>
    <option value="un">Unidad (un)</option>
            <option value="cm">Centímetros (cm)</option>
            <option value="m">Metros (m)</option>
            <option value="km">Kilómetros (km)</option>
            <option value="in">Pulgadas (in)</option>
            <option value="ft">Pies (ft)</option>
            <option value="mi">Millas (mi)</option>
            <option value="g">Gramos (g)</option>
            <option value="kg">Kilogramos (kg)</option>
            <option value="oz">Onzas (oz)</option>
            <option value="lb">Libras (lb)</option>
            <option value="l">Litros (l)</option>
            <option value="ml">Mililitros (ml)</option>
            <option value="gal">Galones (gal)</option>
            <option value="s">Segundos (s)</option>
            <option value="min">Minutos (min)</option>
            <option value="h">Horas (h)</option>
            <option value="box">Caja (box)</option>
            <option value="pkg">Paquete (pkg)</option>
            <option value="bag">Bolsa (bag)</option>
  </select>
</div>
<div class="mb-3" id="divsku" style="display: none;">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>SKU</label>
  <input type="mail" class="form-control" id="productOSSku" placeholder="Ingresa nombre de room">
</div>
<div class="mb-3" id="divean1" style="display: none;">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>EAN1</label>
  <input type="mail" class="form-control" id="productOSEan1" placeholder="Ingresa nombre de room">
</div>
<div class="mb-3" id="divean2" style="display: none;">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>EAN2</label>
  <input type="mail" class="form-control" id="productOSEan2" placeholder="Ingresa nombre de room">
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Caracteristicas por unidad del producto / servicio</label>
  <input type="mail" class="form-control" id="productOSCaractsUnit" placeholder="Ingresa nombre de room">
</div>

<div class="mb-3">
  <input type="checkbox" id="checkDiscount">
  <label for="checkDiscount">Opciones avanzadas</label>
</div>

<div id="unidadSelect2" class="mb-3" style="display: none;">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i> Producto para descontar unidades</label>
  <select class="form-control" id="list-OSProductDiscount" name="unidad" required>
  
    <option value="0">No</option>
    <option value="1">Sí</option>
  </select>
</div>
<div class="mb-3" id="unidadSelect3"  style="display: none;">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Stock por unidad del producto / servicio</label>
  <input type="mail" class="form-control" id="productOSStock" placeholder="Ingresa nombre de room">
</div>



<button type="button" class="btn btn-primary1 edit-button" id="postProductOSBtn" title="CREAR UBICACIÓN" data-bs-dismiss="modal"><i class="fas fa-plus"></i></button>
</div>



      </div>
     
    </div>
  </div>
</div>
<script>
  document.getElementById('list-OSProductType').addEventListener('change', function() {
    var tipo = document.getElementById('list-OSProductType').value;
    
    if (tipo === 'service') {
   
      document.getElementById('unidadSelect1').style.display = 'none';
      document.getElementById('unidadSelect').style.display = 'block';
      document.getElementById('divsku').style.display = 'none';
      document.getElementById('divean1').style.display = 'none';
      document.getElementById('divean2').style.display = 'none';

      var sku=  document.getElementById('productOSSku');
    var ean1= document.getElementById('productOSEan1');
    var ean2= document.getElementById('productOSEan2');
      sku.value = '';
      ean1.value = '';
      ean2.value = '';
    } else if (tipo === 'product') {
      document.getElementById('unidadSelect1').style.display = 'block';
      document.getElementById('unidadSelect').style.display = 'none';
      document.getElementById('divsku').style.display = 'block';
      document.getElementById('divean1').style.display = 'block';
      document.getElementById('divean2').style.display = 'block';
    }
  });

  document.getElementById('list-OSProductDiscount').addEventListener('change', function() {
    var tipo = document.getElementById('list-OSProductDiscount').value;
    if (tipo === '1') {
      document.getElementById('unidadSelect3').style.display = 'block';
    } else if (tipo === '0') {
      document.getElementById('unidadSelect3').style.display = 'none';
      var inputStock = document.getElementById('productOSStock');
      inputStock.value = '';
    }
  });

  document.getElementById('checkDiscount').addEventListener('change', function() {
    var isChecked = this.checked;
    var select = document.getElementById('list-OSProductDiscount');
    var inputStock = document.getElementById('productOSStock');
    if (isChecked) {
      document.getElementById('unidadSelect2').style.display = 'block';
    } else {
      document.getElementById('unidadSelect2').style.display = 'none';
      document.getElementById('unidadSelect3').style.display = 'none';
      select.value = '0';
      inputStock.value = '';

    }
  });
</script>



<script  src="scripts/posts/os.postProducts.js"></script>