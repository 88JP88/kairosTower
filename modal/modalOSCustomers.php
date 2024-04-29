


<!-- Modal -->
<div class="modal fade" id="OSCustomerCreate" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-l">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #001219; color: #C70039;">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="public/KAIROS2.png" alt="LUGMA" width="30" height="30" style="background-color: #001219; color: #C70039;">Crear Empleado</h1>
        
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" onclick="closeModal('clientDeliveryCreate')"></button>
      </div>
      <div class="modal-body">
     

  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Nombre del cliente</label>
  <input type="text" class="form-control" id="customerOSName" placeholder="">
</div>
  



<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Comentarios del cliente</label>
  <input type="mail" class="form-control" id="customerOSComments" placeholder="">
</div>


<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Contacto del cliente</label>
  <input type="mail" class="form-control" id="customerOSContact" placeholder="">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Correo del cliente</label>
  <input type="mail" class="form-control" id="customerOSMail" placeholder="">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Imágen del cliente</label>
  <input type="mail" class="form-control" id="customerOSImg" placeholder="">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Dirección del cliente</label>
  <input type="mail" class="form-control" id="customerOSAddress" placeholder="">
</div>
<div class="mb-3">
  <select id="list-OSPlaceOwnerCustomer" class="form-control" name="lista1" required></select>
<option selected>Selecciona ubicacion</option>
</div>



<button type="button" class="btn btn-primary1 edit-button" id="postCustomersOSBtn" title="CREAR UBICACIÓN" data-bs-dismiss="modal"><i class="fas fa-plus"></i></button>







    

</div>



      </div>
     
    </div>
  </div>
</div>

<script  src="scripts/posts/os.postCustomers.js"></script>