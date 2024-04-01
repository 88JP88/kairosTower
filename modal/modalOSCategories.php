






<!-- Modal -->
<div class="modal fade" id="OSCatCreate" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-l">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #001219; color: #C70039;">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="public/KAIROS2.png" alt="LUGMA" width="30" height="30" style="background-color: #001219; color: #C70039;">Crear Puesto</h1>
        
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" onclick="closeModal('clientDeliveryCreate')"></button>
      </div>
      <div class="modal-body">
     

  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Nombre del puesto</label>
  <input type="text" class="form-control" id="elementOSName" placeholder="Ingresa nombre de room">
</div>
  



<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Comentarios del puesto</label>
  <input type="mail" class="form-control" id="elementOSComments" placeholder="Ingresa nombre de room">
</div>



<div class="mb-3">
  <select id="list-OSCategories" class="form-control" name="lista1" required>
  <option selected>Selecciona ubicacion</option>

  </select>

</div>

<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Tipo de elemento del puesto</label>

  <select id="list-OSElementType" class="form-control" name="lista1" required>
<option selected>Selecciona tipo</option>
<option value="movil">Movil</option>
<option value="fixed">Fijo tipo</option>
</select>

</div>


<button type="button" class="btn btn-primary1 edit-button" id="postElementBtn" title="CREAR UBICACIÓN" data-bs-dismiss="modal"><i class="fas fa-plus"></i></button>







    

</div>



      </div>
     
    </div>
  </div>
</div>

<script  src="scripts/posts/os.postElements.js"></script>
<script  src="scripts/posts/os.postCategories.js"></script>