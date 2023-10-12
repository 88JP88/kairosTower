

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <link href="style/styleSession.css" rel="stylesheet">
  
</head>
 
</html>


<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Nombre de cliente</label>
  <input type="text" class="form-control" id="clientnames" placeholder="Ingresa tus nombres">
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Comentarios</label>
  <input type="tect" class="form-control" id="clientcomments" placeholder="Ingresa tus nombres">
</div>




  


  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Nombre del responsable</label>
  <input type="tect" class="form-control" id="names1" placeholder="Ingresa tus nombres">
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">apellido del responsable</label>
  <input type="tect" class="form-control" id="lastnames156" placeholder="Ingresa tus nombres">
</div>

<div class="row g-3 align-items-center">
  <div class="col-auto">
    <label for="inputPassword6" class="col-form-label">Correo del responsable</label>
  </div>
  <div class="col-auto">
    <input type="email" id="pmail134" class="form-control" aria-describedby="passwordHelpInline" placeholder="name@example.com">
  </div>
  <div class="col-auto">
    <span id="passwordHelpInline" class="form-text">
    Escribe el correo de la cuenta LUGMA.  Si aún no tiene cuenta <p><a class="link-opacity-75" href="https://localhost/lugma/#">Click aquí</a></p>.
    </span>
  </div>
</div>

  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Contacto</label>
  <input type="tect" class="form-control" id="lastnames123" placeholder="Ingresa contacto">
</div>
  





<div class="row g-3 align-items-center">
<select class="form-select" aria-label="Default select example" id="rol1">
  <option selected>Tipo de cliente</option>
  <option value="hadmin">Administrador (root)</option>
  <option value="admin">Administrador (restircciones)</option>
  <option value="invite">Invitado</option>
  <option value="client">Cliente</option>
</select>

</div>

  
<div class="row g-3 align-items-center">
  <div class="col-auto">
    <label for="inputPassword6" class="col-form-label">Contraseña del responsable</label>
  </div>
  <div class="col-auto">
    <input type="password" id="pass11" class="form-control" aria-describedby="passwordHelpInline" placeholder="Escribe tu contraseña">
  </div>
  <div class="col-auto">
    <span id="passwordHelpInline" class="form-text">
    Mayuscula, minusculas, números y caracteres especiales.
    </span>
  </div>
</div>

<div class="row g-3 align-items-center">
  <div class="col-auto">
    <label for="inputPassword6" class="col-form-label">Confirma contraseña</label>
  </div>
  <div class="col-auto">
    <input type="password" id="pass22" class="form-control" aria-describedby="passwordHelpInline" placeholder="Confirma tu contraseña">
  </div>
  <div class="col-auto">
    <span id="passwordHelpInline22" class="form-text">
      -
    </span>
  </div>
  <div class="col-auto">
    <span id="passwordHelpInline33" class="form-text">
      -
    </span>
  </div>
</div>

<button type="button" class="btn btn-primary1" id="postClient">Crear cliente</button>

<script  src="scripts/gets/getClientConfig.js"></script>

    
<div id="card-container" class="card-container">
        <!-- Las tarjetas se agregarán aquí -->
    </div>

   