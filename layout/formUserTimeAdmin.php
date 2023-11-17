

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <link href="style/styleSession.css" rel="stylesheet">
    
</head>
 
</html>

<form>

<div class="mb-3">
 <label for="currency">Usuario</label>
<select id="list-internalusers1" class="form-control" name="currency" required></select>
<option selected>Selecciona usuario</option>
</div>
<div class="mb-3">
 <label for="currency">Room</label>
<select id="list-clientroom1" class="form-control" name="currency" required onclick="onClientRoomSelect1('assign')"></select>
<option value="0">Selecciona room</option>
</div>

        <div id="checkbox-containerz" class="card-container">
            <!-- Contenido de la sección expandible -->
        </div>
<button type="button" class="btn btn-primary1 edit-button" id="postAssignRoom1" title="ASIGNAR USUARIO"><i class="fas fa-user-plus"></i></button>

</form>
<script  src="scripts/posts/postAssignRoomAdmin.js"></script>
