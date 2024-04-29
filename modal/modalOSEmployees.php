


<!-- Modal -->
<div class="modal fade" id="OSEmployeeCreate" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-l">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #001219; color: #C70039;">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="public/KAIROS2.png" alt="LUGMA" width="30" height="30" style="background-color: #001219; color: #C70039;">Crear Empleado</h1>
        
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" onclick="closeModal('clientDeliveryCreate')"></button>
      </div>
      <div class="modal-body">
     

  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Nombre del empleado</label>
  <input type="text" class="form-control" id="employeeOSName" placeholder="Ingresa nombre de room">
</div>
  



<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Comentarios del empleado</label>
  <input type="mail" class="form-control" id="employeeOSComments" placeholder="Ingresa nombre de room">
</div>


<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Contacto del empleado</label>
  <input type="mail" class="form-control" id="employeeOSContact" placeholder="Ingresa nombre de room">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Correo del empleado</label>
  <input type="mail" class="form-control" id="employeeOSMail" placeholder="Ingresa nombre de room">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Imágen del empleado</label>
  <input type="mail" class="form-control" id="employeeOSImg" placeholder="Ingresa nombre de room">
</div>

<div class="mb-3">
  <select id="list-OSPlaceOwner" class="form-control" name="lista1" required></select>
<option selected>Selecciona ubicacion</option>
</div>

<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Rol del empleado</label>

  <select id="list-OSemployeeRol" class="form-control" name="lista1" required>
<option selected>Selecciona tipo</option>
<option value="operations">Operativo</option>
<option value="admin">Administrador</option>
<option value="security">Seguridad</option>
<option value="back">Preparador</option>
<option value="box">Caja</option>
<option value="superAdmin">Super Administrador</option>
</select>

</div>
<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Categoría del empleado</label>

  <select id="list-OSemployeeType" class="form-control" name="lista1" required>
<option selected>Selecciona tipo</option>
<option value="boss">Jefe</option>
<option value="sup">Supervisor</option>
<option value="thirdLevel">Tercer nivel</option>
<option value="secondLevel">Segundo nivel</option>
<option value="firstLevel">Primer nivel</option>
<option value="practice">Practicante</option>

</select>

</div>


<button type="button" class="btn btn-primary1 edit-button" id="postEmployeesOSBtn" title="CREAR UBICACIÓN" data-bs-dismiss="modal"><i class="fas fa-plus"></i></button>







    

</div>



      </div>
     
    </div>
  </div>
</div>

<script  src="scripts/posts/os.postEmployees.js"></script>