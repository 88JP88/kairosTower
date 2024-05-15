


<!-- Modal -->
<div class="modal fade" id="OSPlaceCreate" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-l">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #001219; color: #C70039;">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="public/KAIROS2.png" alt="LUGMA" width="30" height="30" style="background-color: #001219; color: #C70039;">Crear Ubicación</h1>
        
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" onclick="closeModal('clientDeliveryCreate')"></button>
      </div>
      <div class="modal-body">
     

  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Nombres de la ubicación</label>
  <input type="text" class="form-control" id="placeName" placeholder="Ingresa nombre de room">
</div>
  

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Dirección de la ubicación</label>
  <input type="text" class="form-control" id="placeAdd" placeholder="Ingresa nombre de room">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Comentarios de la ubicación</label>
  <input type="mail" class="form-control" id="placeComments" placeholder="Ingresa nombre de room">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Contacto de la ubicación</label>
  <input type="text" class="form-control" id="placeContact" placeholder="Ingresa nombre de room">
</div>
<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i> Tipo de establecimiento</label>
  <div id="infoContent"></div>
  


</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>E-mail de la ubicación</label>
  <input type="text" class="form-control" id="placeEmail" placeholder="Ingresa nombre de room">
</div>
<div class="mb-3">
  <input type="checkbox" id="checkDiscountPlace">
  <label for="checkDiscount">Opciones avanzadas</label>
</div>
<div id="unidadSelect2Place" class="mb-3" style="display: none;">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i> Sistema de puntos</label>
  <select class="form-control" id="list-OSProductDiscountPlace" name="unidad" required>
  
    <option value="false">No</option>
    <option value="true">Sí</option>
  </select>
</div>

<div class="mb-3" id="unidadSelect3Place"  style="display: none;">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Puntos por compra</label>
  <input type="number" class="form-control" id="pointBySale" value="0">
</div>
<div class="mb-3" id="unidadSelect4Place"  style="display: none;">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Valor minimo para puntos</label>
  <input type="number" class="form-control" id="minValBySale" value="0">
</div>
<div class="mb-3" id="unidadSelect5Place"  style="display: none;">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Valor minimo de puntos para redimir</label>
  <input type="number" class="form-control" id="minValToRedem" value="0">
</div>
<div class="mb-3" id="unidadSelect8Place"  style="display: none;">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Precio de cada punto</label>
  <input type="number" class="form-control" id="pointsPriceOS" value="0">
</div>
<div id="unidadSelect6Place" class="mb-3" style="display: none;">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i> Auto descuento de puntos</label>
  <select class="form-control" id="list-OSProductDiscount1Place" name="unidad" required>
  
    <option value="false">No</option>
    <option value="true">Sí</option>
  </select>
</div>
<div id="unidadSelect7Place" class="mb-3" style="display: none;">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i> Descontar total de puntos</label>
  <select class="form-control" id="list-OSProductDiscount2Place" name="unidad" required>
  
    <option value="false">No</option>
    <option value="true">Sí</option>
  </select>
</div>
<button type="button" class="btn btn-primary1 edit-button" id="postPlaceBtn" title="CREAR UBICACIÓN" data-bs-dismiss="modal"><i class="fas fa-plus"></i></button>


<script>
  document.getElementById('list-OSProductDiscount1Place').addEventListener('change', function() {
    var tipo = document.getElementById('list-OSProductDiscount1Place').value;
    
    if (tipo === "true") {
   
      document.getElementById('unidadSelect7Place').style.display = 'block';
      
     
    } else if (tipo === "false") {
     
      document.getElementById('unidadSelect7Place').style.display = 'none';
      document.getElementById('list-OSProductDiscount2Place').value = 'false';

    
    }
  });

  document.getElementById('list-OSProductDiscountPlace').addEventListener('change', function() {
    var tipo = document.getElementById('list-OSProductDiscountPlace').value;
    if (tipo === "true") {
      document.getElementById('unidadSelect3Place').style.display = 'block';
      document.getElementById('unidadSelect4Place').style.display = 'block';
      document.getElementById('unidadSelect5Place').style.display = 'block';
      document.getElementById('unidadSelect6Place').style.display = 'block';
      document.getElementById('unidadSelect8Place').style.display = 'block';


    } else if (tipo === "false") {
     
      document.getElementById('unidadSelect3Place').style.display = 'none';
      document.getElementById('pointBySale').value = '0';

      document.getElementById('unidadSelect4Place').style.display = 'none';
      document.getElementById('minValBySale').value = '0';

      
      document.getElementById('unidadSelect5Place').style.display = 'none';
      document.getElementById('minValToRedem').value = '0';
      document.getElementById('unidadSelect8Place').style.display = 'block';
      document.getElementById('pointsPriceOS').value = '0';
     
      document.getElementById('unidadSelect6Place').style.display = 'none';
      document.getElementById('list-OSProductDiscount1Place').value = 'false';



      document.getElementById('unidadSelect7Place').style.display = 'none';
      document.getElementById('list-OSProductDiscount2Place').value = 'false';

     
    }
  });

  document.getElementById('checkDiscountPlace').addEventListener('change', function() {
    var isChecked = this.checked;
    var select = document.getElementById('list-OSProductDiscount');
    var inputStock = document.getElementById('productOSStock');
    if (isChecked) {
      document.getElementById('unidadSelect2Place').style.display = 'block';
    } else {
      document.getElementById('unidadSelect2Place').style.display = 'none';
      document.getElementById('list-OSProductDiscountPlace').value = 'false';

     
       
      document.getElementById('unidadSelect3Place').style.display = 'none';
      document.getElementById('pointBySale').value = '0';

      document.getElementById('unidadSelect4Place').style.display = 'none';
      document.getElementById('minValBySale').value = '0';

      
      document.getElementById('unidadSelect5Place').style.display = 'none';
      document.getElementById('minValToRedem').value = '0';
      document.getElementById('unidadSelect8Place').style.display = 'block';
      document.getElementById('pointsPriceOS').value = '0';
     
      document.getElementById('unidadSelect6Place').style.display = 'none';
      document.getElementById('list-OSProductDiscount1Place').value = 'false';



      document.getElementById('unidadSelect7Place').style.display = 'none';
      document.getElementById('list-OSProductDiscount2Place').value = 'false';

    }
  });
</script>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Cargar archivo CSV y convertirlo en JSON</title>
</head>
<body>
  <h3>CARGA MASIVA</h3>
    <input type="file" id="fileInputStore">
    <div id="resultStore"></div>

    <script>
        document.getElementById('fileInputStore').addEventListener('change', function(event) {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = function(event) {
                const csvData = event.target.result;
                const json = csvToJsonPostStore(csvData);
                document.getElementById('resultStore').innerText = JSON.stringify(json, null, 2);
            };

            reader.readAsText(file);
        });

        
    </script>
</body>
</html>


    

</div>



      </div>
     
    </div>
  </div>
</div>

<script  src="scripts/posts/os.postPlaces.js"></script>


<script>
function listTypePlace(){

  var infoContent = document.getElementById('infoContent');

  // Crear el elemento select
  var selectElement = document.createElement('select');
  infoContent.innerHTML='';
  selectElement.classList.add('form-control');
  selectElement.id = 'list-OSplaceType';
  selectElement.name = 'unidad';
  selectElement.setAttribute('required', '');
  var options = [];

  // Crear las opciones y agregarlas al select
  if (sessionStorage.getItem('isMarketNow') == "true") {
    options.push(
      { value: 'market', text: 'Mercado' }
    );
  }
  if (sessionStorage.getItem('isSiteNow') == "true") {
    options.push(
      { value: 'withSites', text: 'Con mesas' }
    );
  }
  if (sessionStorage.getItem('isWorkNow') == "true") {
    options.push(
      { value: 'withSitesWork', text: 'Con puestos de trabajo' }
    );
  }
  if (sessionStorage.getItem('isEcommerceNow') == "true") {
    options.push(
      { value: 'ecommerce', text: 'E-Commerce' }
    );
  }

  options.forEach(function(optionData) {
    var optionElement = document.createElement('option');
    optionElement.value = optionData.value;
    optionElement.textContent = optionData.text;
    selectElement.appendChild(optionElement);
  });

  // Agregar el select al contenedor deseado
  infoContent.appendChild(selectElement);
}
</script>