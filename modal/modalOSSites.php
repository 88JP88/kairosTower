


<!-- Modal -->
<div class="modal fade" id="OSSiteCreate" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-l">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #001219; color: #C70039;">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="public/KAIROS2.png" alt="LUGMA" width="30" height="30" style="background-color: #001219; color: #C70039;">Crear Puesto</h1>
        
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" onclick="closeModal('clientDeliveryCreate')"></button>
      </div>
      <div class="modal-body">
     

  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Nombre del puesto</label>
  <input type="text" class="form-control" id="siteName" placeholder="Ingresa nombre de room">
</div>
  



<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Comentarios del puesto</label>
  <input type="mail" class="form-control" id="siteComments" placeholder="Ingresa nombre de room">
</div>



<div class="mb-3">
  <select id="list-OSPlace" class="form-control" name="lista1" required></select>
<option selected>Selecciona ubicacion</option>
</div>

<div class="mb-3">
  
<label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i> Tipo de puesto</label>
 
<div id="infoContent1"></div>
</div>
<button type="button" class="btn btn-primary1 edit-button" id="postSiteBtn" title="CREAR UBICACIÓN" data-bs-dismiss="modal"><i class="fas fa-plus"></i></button>




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

<script  src="scripts/posts/os.postSites.js"></script>



<script>
function listTypeSite(){

  var infoContent = document.getElementById('infoContent1');

  // Crear el elemento select
  var selectElement = document.createElement('select');
  infoContent.innerHTML='';
  selectElement.classList.add('form-control');
  selectElement.id = 'list-OSSiteType';
  selectElement.name = 'unidad';
  selectElement.setAttribute('required', '');
  var options = [];

  // Crear las opciones y agregarlas al select
  if (sessionStorage.getItem('isMarketNow') == "true") {
    options.push(
      { value: 'marketbox', text: 'Caja Registradora (Mercado)' }
    );
  }
  if (sessionStorage.getItem('isSiteNow') == "true") {
    options.push(
      { value: 'site', text: 'Mesa (Con mesas)' }
    );
  }
  if (sessionStorage.getItem('isWorkNow') == "true") {
    options.push(
      { value: 'siteswork', text: 'Puesto de trabajo (Con puestos de trabajo)' }
    );
  }
  if (sessionStorage.getItem('isEcommerceNow') == "true") {
    options.push(
      { value: 'ecommerce', text: 'Operador E-Commerce (E-Commerce)' }
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