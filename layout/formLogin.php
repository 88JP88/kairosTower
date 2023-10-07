

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <link href="style/styleSession.css" rel="stylesheet">
  
</head>
 
</html>
<!DOCTYPE html>
<html>
<head>
    <title>KAIROS TOWER</title>
    <style>
        /* Estilos para centrar el formulario */
        body {
            display: flex;
            justify-content: center; /* Centra horizontalmente */
            align-items: center; /* Centra verticalmente */
            height: 100vh; /* Establece la altura al 100% del viewport */
        }

        /* Estilos adicionales para el formulario y sus elementos */
        #loginForm {
            text-align: center; /* Alinea el contenido del formulario al centro */
        }

        .form-control {
            width: 100%;
        }

        /* En styleSession.css */
.center-image img {
    width: 200px; /* Cambia el tamaño según tus preferencias */
    height: auto;
}

    </style>
</head>


<body>
<div class="center-image">
    <img src="public/KAIROS.gif" alt="Descripción de la imagen" style="width: 150px; height: auto;">
</div>

    <form id="loginForm" action="controller/controllerValidateLogIn.php" method="post">
        <div class="row g-3 align-items-center">
            <div class="col-auto">
                <label for="inputPassword6" class="col-form-label"><h3><i>User:</i></h3></label>
            </div>
            <div class="col-auto">
                <input type="email" name="mail" id="mail" class="form-control" aria-describedby="passwordHelpInline" placeholder="name@example.com">
            </div>
        </div>

        <div class="row g-3 align-items-center">
            <div class="col-auto">
                <label for="inputPassword6" class="col-form-label"><h3><i>Password:</i></h3></label>
            </div>
            <div class="col-auto">
                <input type="password" name="pass" id="pass" class="form-control" aria-describedby="passwordHelpInline" placeholder="********">
            </div>
        </div>

        <button type="submit" class="btn btn-primary1">Iniciar</button>
    </form>
</body>
</html>

<?php

require_once 'env/option.php';
$sub_domaincon = new env_option();
$sub_domain = $sub_domaincon->envOption();


if($sub_domain==1){

echo "<B>ESTE ES UN AMBIENTE LOCAL</B>";

}
if($sub_domain==2){
  
  echo "<B>ESTE ES UN AMBIENTE DE DESARROLLO</B>";
  
  }
  if($sub_domain==3){
  
    echo "<B>ESTE ES UN AMBIENTE DE PRUEBAS</B>";
    
    }
   
?>