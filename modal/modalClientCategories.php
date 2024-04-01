


<!-- Modal -->
<div class="modal fade" id="clientCategorieCreate" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-l">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #001219; color: #C70039;">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="public/KAIROS2.png" alt="LUGMA" width="30" height="30" style="background-color: #001219; color: #C70039;">Crear elemento</h1>
        
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" onclick="closeModal('clientCategorieCreate')"></button>
      </div>
      <div class="modal-body">
     
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Categoria</label>
  <input type="text" class="form-control" id="catname" placeholder="Ingresa nombre de room">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Imagen Categoria</label>
  <input type="text" class="form-control" id="catimg" placeholder="Ingresa imagen de categoría">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Comentarios</label>
  <input type="text" class="form-control" id="catcomments" placeholder="Ingresa nombre de room">
</div>


<div class="mb-3">
  <select id="list-cattipe" class="form-control" name="lista1" required>
  <option value="main">Principal</option>
  <option value="sec">Secundaria</option>
  </select>
<option selected>Tipo de categoria</option>
</div>

<div class="mb-3">
<select id="list-categoryListstadd96" class="form-control" name="lista1" required></select>
<option selected>Selecciona categoria</option>
</div>

<button type="button" class="btn btn-primary1 edit-button" id="postCategoriebtn" title="CREAR ELEMENTO" data-bs-dismiss="modal"><i class="fas fa-plus"></i></button>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Cargar archivo CSV y convertirlo en JSON</title>
</head>
<body>
  <h3>CARGA MASIVA</h3>
    <input type="file" id="fileInputCategorieb">
    <div id="resultcategorie"></div>

    <script>
        document.getElementById('fileInputCategorieb').addEventListener('change', function(event) {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = function(event) {
                const csvData = event.target.result;
                const json = csvToJsonPostCategorie(csvData);
                document.getElementById('resultcategorie').innerText = JSON.stringify(json, null, 2);
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


<script  src="scripts/posts/postCategories.js"></script>