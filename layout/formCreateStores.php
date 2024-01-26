

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <link href="style/styleSession.css" rel="stylesheet">
  
</head>
 
</html>




  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Nombre de la tienda</label>
  <input type="text" class="form-control" id="sName" placeholder="Ingresa nombre de room">
</div>
  

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Comentarios</label>
  <input type="text" class="form-control" id="sComments" placeholder="Ingresa nombre de room">
</div>
  
<div class="mb-3">
  <select id="list-storeType1" class="form-control" name="lista1" required>
  <option value="ecm">E-commerce</option>
  <option value="pos">Punto de venta</option>
  <option value="ecm_pos">E-commerce y punto de venta</option>
  </select>
<option selected>Tipo de tienda</option>
</div>
<button type="button" data-bs-dismiss="modal" class="btn btn-primary1 edit-button" id="postStoressbtn" title="CREAR ELEMENTO"><i class="fas fa-plus"></i></button>




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
<script  src="scripts/posts/postStores.js"></script>

    
