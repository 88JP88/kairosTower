

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <link href="style/styleSession.css" rel="stylesheet">
  
</head>
 
</html>



<div class="row g-3 align-items-center">
<label for="exampleFormControlInput1" class="form-label">Mes</label>
<select class="form-select" aria-label="Default select example" id="cmonth">
  <option selected>Seleccione mes</option>
  <option value="Enero">Enero</option>
  <option value="Febrero">Febrero</option>
  <option value="Marzo">Marzo</option>
  <option value="Abril">Abril</option>
  <option value="Mayo">Mayo</option>
  <option value="Junio">Junio</option>
  <option value="Julio">Julio</option>
  <option value="Agosto">Agosto</option>
  <option value="Septiembre">Septiembre</option>
  <option value="Octubre">Octubre</option>
  <option value="Noviembre">Noviembre</option>
  <option value="Diciembre">Diciembre</option>
</select>

</div>

<div class="row g-3 align-items-center">
<label for="exampleFormControlInput1" class="form-label">Días del mes</label>
<select class="form-select" aria-label="Default select example" id="cday">
  <option selected>Seleccione días</option>
  <option value="28">28</option>
  <option value="29">29</option>
  <option value="30">30</option>
  <option value="31">31</option>
</select>

</div>


<div class="row g-3 align-items-center">
<label for="exampleFormControlInput1" class="form-label">Primer día del mes</label>
<select class="form-select" aria-label="Default select example" id="cweek">
  <option selected>Seleccione día de la semana</option>
  <option value="1">Domingo</option>
  <option value="2">Lunes</option>
  <option value="3">Martes</option>
  <option value="4">Miercoles</option>
  <option value="5">Jueves</option>
  <option value="6">Viernes</option>
  <option value="7">Sábado</option>
</select>

</div>


<button type="button" class="btn btn-primary1 edit-button" id="postCalendar"><i class="fas fa-plus"></i></button>

<script  src="scripts/posts/postCalendar.js"></script>

    
