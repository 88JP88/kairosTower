

<!-- Modal view-->
<div class="modal fade" id="clientCatalogs" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #001219; color: #C70039;">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="public/KAIROS2.png" alt="LUGMA" width="30" height="30" style="background-color: #001219; color: #C70039;">Catálogos</h1>
        
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" onclick="closeModal('clientCatalogs')"></button>

      </div>
      <div class="modal-body">
      <button type="button" class="btn btn-primary1 edit-button1" onclick="getApiData(getCatalogs,'apiCom','v1','getCatalogs','containerCatalogsData','containerCatalogsInfo','all|all','all','all');"  style="color: #C70039;" title="VER USUARIOS ACTIVOS"><i class="fas fa-globe"></i></button>
      <button type="button" class="btn btn-primary1 edit-button1" onclick="getApiData(getCatalogs,'apiCom','v1','getCatalogs','containerCatalogsData','containerCatalogsInfo','deleted|all','all','all');"  style="color: #C70039;" title="VER USUARIOS ACTIVOS"><i class="fas fa-globe"></i></button>

      <div class="mb-3">
 <label for="currency">Busqueda por parámetro</label>
<select id="repos-catalogClient" class="form-control" name="currency" required>
<option selected>Selecciona parámetro</option>
<option value="ecm">Catalogo ecommerce</option>
<option value="pos">Catalogo punto de venta</option>
<option value="internal">Catalogo reserva interna</option>
<option value="stocked">Catalogo bodega</option>
<option value="browser">Busqueda por similitud</option>
<option value="filter">Busqueda exacta de producto</option>
</select>

</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Parámetro en especifico</label>
  <input type="text" class="form-control" id="keywordsearchcatalog" placeholder="Ingresa palabra a buscar">
</div>
    <button type="button" class="btn btn-primary1 edit-button1"  style="color: #C70039;" title="VER USUARIOS INACTIVOS"><i class="fas fa-sort" id="filtercatalogs"></i></button>
    
    <button type="button" class="btn btn-primary1 edit-button1"  style="color: #C70039;" title="VER USUARIOS INACTIVOS"><i class="fas fa-filter" id="searchcatalogs"></i></button>



    
<select id="list-storesListstoreq" class="form-control" name="lista1" required></select>
<option selected>Selecciona tienda</option>

<button type="button" class="btn btn-primary1 edit-button1" onClick="getApiData(getCatalogs,'apiCom','v1','getCatalogs','containerCatalogsData','containerCatalogsInfo','store|'+document.getElementById('list-storesListstoreq').value,'storeId','all');" style="color: #C70039;" title="VER USUARIOS INACTIVOS"><i class="fas fa-filter" id="filtercatalogsbystore"></i></button>

<button type="button" class="btn btn-primary1 edit-button1"  style="color: #C70039;" title="VER USUARIOS INACTIVOS"><i class="fas fa-filter" id="filtercatalogsbystoresimple"></i></button>



<div id="containerCatalogsInfo" class="card-container">
            <!-- Contenido de la sección expandible -->
        </div>
<div id="containerCatalogsData" class="card-container">
            <!-- Contenido de la sección expandible -->
        </div>
     
</div>



      </div>
     
    </div>
  </div>
</div>









<!-- Modal create -->
<div class="modal fade" id="clientCatalogCreate" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-l">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #001219; color: #C70039;">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="public/KAIROS2.png" alt="LUGMA" width="30" height="30" style="background-color: #001219; color: #C70039;">Crear elemento</h1>
        
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" onclick="closeModal('clientCatalogCreate')"></button>
      </div>
      <div class="modal-body">



      <div class="mb-3">
  <select id="list-productListstadd" class="form-control" name="lista1" required></select>
<option selected>Selecciona producto</option>
</div>
  

<div class="mb-3">
<select id="list-categoryListstadd" class="form-control" name="lista1" required></select>
<option selected>Selecciona categoria</option>
</div>
  

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Stock</label>
  <input type="text" class="form-control" id="cstock" placeholder="Ingresa nombre de room">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Stock de seguridad</label>
  <input type="text" class="form-control" id="cstocks" placeholder="Ingresa nombre de room">
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Cantidad minima de venta</label>
  <input type="text" class="form-control" id="cminqty" placeholder="Ingresa nombre de room">
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Cantidad maxima de venta</label>
  <input type="text" class="form-control" id="cmaxqty" placeholder="Ingresa nombre de room">
</div>
<div class="mb-3">
<select id="list-storeListstadd" class="form-control" name="lista1" required></select>
<option selected>Selecciona tienda</option>
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Precio de venta</label>
  <input type="text" class="form-control" id="coutprice" placeholder="Ingresa valor por hora">
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Promoción</label>
  <input type="text" class="form-control" id="cpromo" placeholder="Ingresa valor por hora">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Descuento %</label>
  <input type="text" class="form-control" id="cdiscount" placeholder="Ingresa valor por hora">
</div>

<div class="mb-3">
  <select id="list-unidad" class="form-control" name="lista1" required>
  <option value="cm">Centímetros (cm)</option>
  <option value="m">Metros (m)</option>
  <option value="km">Kilómetros (km)</option>
  <option value="in">Pulgadas (in)</option>
  <option value="ft">Pies (ft)</option>
  <option value="mi">Millas (mi)</option>
  <option value="g">Gramos (g)</option>
  <option value="kg">Kilogramos (kg)</option>
  <option value="oz">Onzas (oz)</option>
  <option value="lb">Libras (lb)</option>
  <option value="l">Litros (l)</option>
  <option value="ml">Mililitros (ml)</option>
  <option value="gal">Galones (gal)</option>
  <option value="s">Segundos (s)</option>
  <option value="min">Minutos (min)</option>
  <option value="h">Horas (h)</option>
  <option value="h">Caja (box)</option>
  <option value="h">Paquete (pkg)</option>
  <option value="h">Bolsa (pk)</option>
  </select>
<option selected>Selecciona Unidad</option>
</div>

<div class="mb-3">
  <select id="list-unidadcalculo" class="form-control" name="lista1" required>
  <option value="cm">Centímetros (cm)</option>
  <option value="m">Metros (m)</option>
  <option value="km">Kilómetros (km)</option>
  <option value="in">Pulgadas (in)</option>
  <option value="ft">Pies (ft)</option>
  <option value="mi">Millas (mi)</option>
  <option value="g">Gramos (g)</option>
  <option value="kg">Kilogramos (kg)</option>
  <option value="oz">Onzas (oz)</option>
  <option value="lb">Libras (lb)</option>
  <option value="l">Litros (l)</option>
  <option value="ml">Mililitros (ml)</option>
  <option value="gal">Galones (gal)</option>
  <option value="s">Segundos (s)</option>
  <option value="min">Minutos (min)</option>
  <option value="h">Horas (h)</option>
  <option value="h">Caja (box)</option>
  <option value="h">Paquete (pkg)</option>
  <option value="h">Bolsa (pk)</option>
  </select>
<option selected>Selecciona Unidad de calculo</option>
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><i class="fas fa-guitar"></i>Cantidad por Unidad</label>
  <input type="text" class="form-control" id="cunitqty" placeholder="Ingresa valor por hora">
</div>

<div class="mb-3">
  <select id="list-unitunit" class="form-control" name="lista1" required>
  <option value="cm">Centímetros (cm)</option>
  <option value="m">Metros (m)</option>
  <option value="km">Kilómetros (km)</option>
  <option value="in">Pulgadas (in)</option>
  <option value="ft">Pies (ft)</option>
  <option value="mi">Millas (mi)</option>
  <option value="g">Gramos (g)</option>
  <option value="kg">Kilogramos (kg)</option>
  <option value="oz">Onzas (oz)</option>
  <option value="lb">Libras (lb)</option>
  <option value="l">Litros (l)</option>
  <option value="ml">Mililitros (ml)</option>
  <option value="gal">Galones (gal)</option>
  <option value="s">Segundos (s)</option>
  <option value="min">Minutos (min)</option>
  <option value="h">Horas (h)</option>
  <option value="h">Caja (box)</option>
  <option value="h">Paquete (pkg)</option>
  <option value="h">Bolsa (pk)</option>
  </select>
<option selected>Selecciona Unidad dentro de unidad</option>
</div>
<button type="button" data-bs-dismiss="modal" class="btn btn-primary1 edit-button" id="postCatalogbtn" title="CREAR ELEMENTO"><i class="fas fa-plus"></i></button>



<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Cargar archivo CSV y convertirlo en JSON</title>
</head>
<body>
  <h3>CARGA MASIVA</h3>
    <input type="file" id="fileInput">
    <div id="result"></div>

    <script>
        document.getElementById('fileInput').addEventListener('change', function(event) {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = function(event) {
                const csvData = event.target.result;
                const json = csvToJson(csvData);
                document.getElementById('result').innerText = JSON.stringify(json, null, 2);
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

