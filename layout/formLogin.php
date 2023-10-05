

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <link href="style/styleSession.css" rel="stylesheet">
  
</head>
 
</html>

<form id="loginForm" action="controller/controllerValidateLogIn.php" method="post">
  <div class="row g-3 align-items-center">
    <div class="col-auto">
      <label for="inputPassword6" class="col-form-label">Correo</label>
    </div>
    <div class="col-auto">
      <input type="email" name="mail" id="mail" class="form-control" aria-describedby="passwordHelpInline" placeholder="name@example.com">
    </div>
  </div>

  <div class="row g-3 align-items-center">
    <div class="col-auto">
      <label for="inputPassword6" class="col-form-label">Contraseña</label>
    </div>
    <div class="col-auto">
      <input type="password" name="pass" id="pass" class="form-control" aria-describedby="passwordHelpInline" placeholder="Escribe tu contraseña">
    </div>
  </div>

  <button type="submit" class="btn btn-primary1">Iniciar</button>

 
</form>
<button class="btn btn-primary1" onclick="openModCloseSessions();">Cerrar sesion en otros dispositivos</button>