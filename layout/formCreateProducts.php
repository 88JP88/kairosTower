

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <link href="style/styleSession.css" rel="stylesheet">
  
</head>
 
</html>




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

<script  src="scripts/posts/postProducts.js"></script>

    
