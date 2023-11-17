

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <link href="../style/styleSession.css" rel="stylesheet">
  
</head>
 
</html>


<div class="row g-3 align-items-center">
  <label for="exampleFormControlInput1" class="form-label">Nombre de cliente</label>
  <input type="text" required class="form-control" id="clientnames" placeholder="Ingresa empresa / cliente / local">
</div>

<div class="row g-3 align-items-center">
  <label for="exampleFormControlInput1" class="form-label">Comentarios</label>
  <input type="text" required class="form-control" id="clientcomments" placeholder="Ingresa comentarios">
</div>




  


<div class="row g-3 align-items-center">
  <label for="exampleFormControlInput1" class="form-label">Nombre del responsable</label>
  <input type="text" required class="form-control" id="names1" placeholder="Ingresa nombres del responsable / encargado">
</div>

<div class="row g-3 align-items-center">
  <label for="exampleFormControlInput1" class="form-label">apellido del responsable</label>
  <input type="text" required class="form-control" id="lastnames156" placeholder="Ingresa apellidos del responsable / encargado">
</div>

<div class="row g-3 align-items-center">
  <div class="col-auto">
    <label for="inputPassword6" class="col-form-label">Correo del responsable</label>
  </div>
  <div class="col-auto">
    <input type="email" required id="pmail134" class="form-control" aria-describedby="passwordHelpInline" placeholder="name@example.com">
  </div>
  

  <div class="row g-3 align-items-center">
  <label for="exampleFormControlInput1" class="form-label">Contacto</label>
  <input type="text" required class="form-control" id="lastnames123" placeholder="Ingresa contacto del responsable / encargado">
</div>
  





<div class="row g-3 align-items-center">
<select class="form-select" aria-label="Default select example" id="rol1">
  <option selected>Tipo de cliente</option>
  <option value="music">Musical</option>
  <option value="production">Producción</option>
  <option value="rent">Alquiler</option>
</select>

</div>

  
<div class="row g-3 align-items-center">
  <div class="col-auto">
    <label for="inputPassword6" class="col-form-label">Contraseña del responsable</label>
  </div>
  <div class="col-auto">
    <input type="password" required id="pass11" class="form-control" aria-describedby="passwordHelpInline" placeholder="Escribe contraseña del responsable / encargado">
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
    <input type="password" required id="pass22" class="form-control" aria-describedby="passwordHelpInline" placeholder="Confirma contraseña del responsable / encargado">
  </div>
 




<button type="button" class="btn btn-primary1 edit-button" id="postClient" title="CREAR CLIENTE"><i class="fas fa-folder-plus"></i></button>

<script  src="../scripts/posts/postExtClient.js"></script>

    
