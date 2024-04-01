

<!-- Modal -->
<div class="modal fade" id="clientProducts" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #001219; color: #C70039;">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="public/KAIROS2.png" alt="LUGMA" width="30" height="30" style="background-color: #001219; color: #C70039;">Productos</h1>
        
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" onclick="closeModal('clientProducts')"></button>

      </div>
      <div class="modal-body">
      <button type="button" class="btn btn-primary1 edit-button1" onclick="getApiData(getProducts,'apiCom','v1','getProducts','containerProductsData','containerProductsInfo','all','all','all');"  style="color: #C70039;" title="VER USUARIOS ACTIVOS"><i class="fas fa-globe"></i></button>

      <div class="mb-3">
 <label for="currency">Busqueda por parámetro</label>
<select id="repos-productClient" class="form-control" name="currency" required>
<option selected>Selecciona parámetro</option>
<option value="productName">Nombre de producto</option>
<option value="isActive">Estado de producto</option>
<option value="description">Descripción de producto</option>
</select>

</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Parámetro en especifico</label>
  <input type="text" class="form-control" id="keywordsearch" placeholder="Ingresa palabra a buscar">
</div>
    <button type="button" class="btn btn-primary1 edit-button1"  style="color: #C70039;" title="VER USUARIOS INACTIVOS"><i class="fas fa-sort" id="filterproducts"></i></button>
    
    <button type="button" class="btn btn-primary1 edit-button1"  style="color: #C70039;" title="VER USUARIOS INACTIVOS"><i class="fas fa-filter" id="searchproducts"></i></button>

   
<div id="containerProductsInfo" class="card-container">
            <!-- Contenido de la sección expandible -->
        </div>
<div id="containerProductsData" class="card-container">
            <!-- Contenido de la sección expandible -->
        </div>
</div>



      </div>
     
    </div>
  </div>
</div>


<!-- Modal -->
<div class="modal fade" id="clientProductCreate" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-l">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #001219; color: #C70039;">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="../public/KAIROS2.png" alt="LUGMA" width="30" height="30" style="background-color: #001219; color: #C70039;">Crear elemento</h1>
        
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" onclick="closeModal('clientProductCreate')"></button>
      </div>
      <div class="modal-body">
     
  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Nombre del producto</label>
  <input type="text" class="form-control" id="pName" placeholder="Ingresa nombre de room">
</div>
  

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Descripción del producto</label>
  <input type="text" class="form-control" id="pDesc" placeholder="Ingresa nombre de room">
</div>
  

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>ean1</label>
  <input type="text" class="form-control" id="pean1" placeholder="Ingresa nombre de room">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>ean2</label>
  <input type="text" class="form-control" id="pean2" placeholder="Ingresa nombre de room">
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>SKU</label>
  <input type="text" class="form-control" id="psku" placeholder="Ingresa nombre de room">
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Tipo de producto</label>
  <input type="text" class="form-control" id="ptype" placeholder="Ingresa nombre de room">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Valor de compra a proveedor</label>
  <input type="text" class="form-control" id="pvalue" placeholder="Ingresa valor por hora">
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Proveedor</label>
  <input type="text" class="form-control" id="pprovider" placeholder="Ingresa valor por hora">
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Imágen de producto</label>
  <input type="text" class="form-control" id="pimageurl" placeholder="Ingresa valor por hora">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Especificaciones técnicas</label>
  <input type="text" class="form-control" id="pspc" placeholder="Ingresa valor por hora">
</div>
<button type="button" data-bs-dismiss="modal" class="btn btn-primary1 edit-button" id="postProductsbtn" title="CREAR ELEMENTO"><i class="fas fa-plus"></i></button>



<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Cargar archivo CSV y convertirlo en JSON</title>
</head>
<body>
  <h3>CARGA MASIVA</h3>
    <input type="file" id="fileInputProduct">
    <div id="resultProduct"></div>

    <script>
        document.getElementById('fileInputProduct').addEventListener('change', function(event) {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = function(event) {
                const csvData = event.target.result;
                const json = csvToJsonPostProduct(csvData);
                document.getElementById('resultProduct').innerText = JSON.stringify(json, null, 2);
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




