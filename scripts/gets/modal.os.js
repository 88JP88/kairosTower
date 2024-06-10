
function modalCreatePlaces(){




  
    Swal.fire({
        title: 'Formulario',
        html: `
        
        

  <div class="box">
  <label for="exampleFormControlInput1" class="tag"><i class="fas fa-guitar"></i>Nombres de la ubicación</label>
  <input type="text" class="input is-rounded" id="placeName" placeholder="Ingresa nombre de room">

  <label for="exampleFormControlInput1" class="tag"><i class="fas fa-guitar"></i>Dirección de la ubicación</label>
  <input type="text" class="input is-rounded" id="placeAdd" placeholder="Ingresa nombre de room">

  <label for="exampleFormControlInput1" class="tag"><i class="fas fa-guitar"></i>Comentarios de la ubicación</label>
  <input type="mail" class="input is-rounded" id="placeComments" placeholder="Ingresa nombre de room">

  <label for="exampleFormControlInput1" class="tag"><i class="fas fa-guitar"></i>Contacto de la ubicación</label>
  <input type="text" class="input is-rounded" id="placeContact" placeholder="Ingresa nombre de room">

<label for="exampleFormControlInput1" class="tag"><i class="fas fa-guitar"></i> Tipo de establecimiento</label>
  <div id="infoContent" class="select is-rounded"></div><br>
  



  <label for="exampleFormControlInput1" class="tag"><i class="fas fa-guitar"></i>E-mail de la ubicación</label>
  <input type="mail" class="input is-rounded" id="placeEmail" placeholder="Ingresa nombre de room">

  <input type="checkbox" id="checkDiscountPlace">
  <label for="checkDiscount" class="tag is-medium">Opciones avanzadas</label>

<div id="unidadSelect2Place" class="mb-3" style="display: none;">

  <label for="exampleFormControlInput1" class="tag"><i class="fas fa-guitar"></i> Sistema de puntos</label>
  <div class="select is-rounded">
  <select id="list-OSProductDiscountPlace" name="unidad" required>
  
    <option value="false">No</option>
    <option value="true">Sí</option>
  </select>
  </div>
</div>

<div class="mb-3" id="unidadSelect3Place"  style="display: none;">
  <label for="exampleFormControlInput1" class="tag"><i class="fas fa-guitar"></i>Puntos por compra</label>
  <input type="number" class="input is-rounded" id="pointBySale" value="0">
</div>
<div class="mb-3" id="unidadSelect4Place"  style="display: none;">
  <label for="exampleFormControlInput1" class="tag"><i class="fas fa-guitar"></i>Valor minimo para puntos</label>
  <input type="number" class="input is-rounded" id="minValBySale" value="0">
</div>
<div class="mb-3" id="unidadSelect5Place"  style="display: none;">
  <label for="exampleFormControlInput1" class="tag"><i class="fas fa-guitar"></i>Valor minimo de puntos para redimir</label>
  <input type="number" class="input is-rounded" id="minValToRedem" value="0">
</div>
<div class="mb-3" id="unidadSelect8Place"  style="display: none;">
  <label for="exampleFormControlInput1" class="tag"><i class="fas fa-guitar"></i>Precio de cada punto</label>
  <input type="number" class="input is-rounded" id="pointsPriceOS" value="0">
</div>
<div id="unidadSelect6Place" class="mb-3" style="display: none;">
  <label for="exampleFormControlInput1" class="ftag"><i class="fas fa-guitar"></i> Auto descuento de puntos</label>
 <div class="select is-rounded">
  <select  id="list-OSProductDiscount1Place" name="unidad" required>
  
    <option value="false">No</option>
    <option value="true">Sí</option>
  </select>
  </div>
</div>
<div id="unidadSelect7Place" class="mb-3" style="display: none;">
  <label for="exampleFormControlInput1" class="tag"><i class="fas fa-guitar"></i> Descontar total de puntos</label>
 <div class="select is-rounded">
  <select  id="list-OSProductDiscount2Place" name="unidad" required>
  
    <option value="false">No</option>
    <option value="true">Sí</option>
  </select>
  </div>
</div>
<button id="postPlaceBtn" title="CREAR UBICACIÓN" class="button is-rounded"><i class="fas fa-plus"></i></button></div>
        `,customClass: {
          container: 'custom-container',
          popup: 'custom-popup',
          header: 'custom-header',
          title: 'custom-title',
          closeButton: 'custom-close-button',
          icon: 'custom-icon',
          image: 'custom-image',
          content: 'custom-content',
          input: 'custom-input',
          actions: 'custom-actions',
          confirmButton: 'custom-confirm-button',
          denyButton: 'custom-deny-button',
          cancelButton: 'custom-cancel-button',
          footer: 'custom-footer'
      },
      background: '#222',
      color: '#fff',
      width: '900px',
      padding: '1rem',
      backdrop: `
          rgba(0,0,123,0.4)
          url("https://example.com/nyan-cat.gif")
          left top
          no-repeat
      `,
      position: 'center',
      grow: 'row',
      showConfirmButton: false,
      confirmButtonColor: '#3085d6',
      showCancelButton: false,
      cancelButtonText: 'Cancel',
      cancelButtonColor: '#d33',
        confirmButtonText: 'Submit',
        showClass: {
          popup: `
            animate__animated
            animate__rotateIn
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__rotateOut
            animate__faster
          `
        },
        didOpen: () => {
          // Configurar eventos de cambio para los selectores dentro del modal
          document.getElementById('list-OSProductDiscount1Place').addEventListener('change', function() {
            var tipo = document.getElementById('list-OSProductDiscount1Place').value;
            
            if (tipo === "true") {
           
              document.getElementById('unidadSelect7Place').style.display = 'block';
              
             
            } else if (tipo === "false") {
             
              document.getElementById('unidadSelect7Place').style.display = 'none';
              document.getElementById('list-OSProductDiscount2Place').value = 'false';
        
            
            }
          });
        
          document.getElementById('list-OSProductDiscountPlace').addEventListener('change', function() {
            var tipo = document.getElementById('list-OSProductDiscountPlace').value;
            if (tipo === "true") {
              document.getElementById('unidadSelect3Place').style.display = 'block';
              document.getElementById('unidadSelect4Place').style.display = 'block';
              document.getElementById('unidadSelect5Place').style.display = 'block';
              document.getElementById('unidadSelect6Place').style.display = 'block';
              document.getElementById('unidadSelect8Place').style.display = 'block';
        
        
            } else if (tipo === "false") {
             
              document.getElementById('unidadSelect3Place').style.display = 'none';
              document.getElementById('pointBySale').value = '0';
        
              document.getElementById('unidadSelect4Place').style.display = 'none';
              document.getElementById('minValBySale').value = '0';
        
              
              document.getElementById('unidadSelect5Place').style.display = 'none';
              document.getElementById('minValToRedem').value = '0';
              document.getElementById('unidadSelect8Place').style.display = 'block';
              document.getElementById('pointsPriceOS').value = '0';
             
              document.getElementById('unidadSelect6Place').style.display = 'none';
              document.getElementById('list-OSProductDiscount1Place').value = 'false';
        
        
        
              document.getElementById('unidadSelect7Place').style.display = 'none';
              document.getElementById('list-OSProductDiscount2Place').value = 'false';
        
             
            }
          });
        
          document.getElementById('checkDiscountPlace').addEventListener('change', function() {
            var isChecked = this.checked;
            var select = document.getElementById('list-OSProductDiscount');
            var inputStock = document.getElementById('productOSStock');
            if (isChecked) {
              document.getElementById('unidadSelect2Place').style.display = 'block';
            } else {
              document.getElementById('unidadSelect2Place').style.display = 'none';
              document.getElementById('list-OSProductDiscountPlace').value = 'false';
        
             
               
              document.getElementById('unidadSelect3Place').style.display = 'none';
              document.getElementById('pointBySale').value = '0';
        
              document.getElementById('unidadSelect4Place').style.display = 'none';
              document.getElementById('minValBySale').value = '0';
        
              
              document.getElementById('unidadSelect5Place').style.display = 'none';
              document.getElementById('minValToRedem').value = '0';
              document.getElementById('unidadSelect8Place').style.display = 'block';
              document.getElementById('pointsPriceOS').value = '0';
             
              document.getElementById('unidadSelect6Place').style.display = 'none';
              document.getElementById('list-OSProductDiscount1Place').value = 'false';
        
        
        
              document.getElementById('unidadSelect7Place').style.display = 'none';
              document.getElementById('list-OSProductDiscount2Place').value = 'false';
        
            }
          });
          
document.getElementById("postPlaceBtn").addEventListener("click", function() {
    // Obtén los valores de los campos
    document.getElementById("loading-container").style.display = "flex";
  var apiData = {
    "clientId": sessionStorage.getItem('clientNow'),
    "placeName": document.getElementById("placeName").value,
    "placeAddress": document.getElementById("placeAdd").value,
    "placeType": document.getElementById("list-OSplaceType").value,
    "placeComments": document.getElementById("placeComments").value,
    "placeContact": document.getElementById("placeContact").value,
    "placeEmail": document.getElementById("placeEmail").value,
    "isPoint": document.getElementById("list-OSProductDiscountPlace").value,
    "points": document.getElementById("pointBySale").value,
    "pointsValue": document.getElementById("minValBySale").value,
    "pointsOut": document.getElementById("minValToRedem").value,
    "pointsAutoDiscount": document.getElementById("list-OSProductDiscount1Place").value,
    "pointsDiscountTotal": document.getElementById("list-OSProductDiscount2Place").value,
    "pointsPrice": document.getElementById("pointsPriceOS").value,
  
    "apiValues":{
      "apiName": "apiOS",
      "apiVersion": "v1",
      "endPoint": "postPlace"
    }
    
  };
  // Construir la URL con los parámetros de la petición GET
  
  const apiInfo = JSON.stringify(apiData);
  var url = 'controller/postController.php?data=' + encodeURIComponent(apiInfo);
  
    fetch(url)
      .then(response => {
        getMessage();      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
        // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página
      
        
      })
      .catch(error => {
        // Aquí puedes manejar los errores en caso de que la petición falle
        console.log('Error en la petición:', error);
      });
      document.getElementById("loading-container").style.display = "none";
  
  });
  

          function listTypePlace(){

            var infoContent = document.getElementById('infoContent');
          
            // Crear el elemento select
            var selectElement = document.createElement('select');
            infoContent.innerHTML='';
           
            selectElement.id = 'list-OSplaceType';
            selectElement.name = 'unidad';
            selectElement.setAttribute('required', '');
            var options = [];
          
            // Crear las opciones y agregarlas al select
            if (sessionStorage.getItem('isMarketNow') == "true") {
              options.push(
                { value: 'market', text: 'Mercado' }
              );
            }
            if (sessionStorage.getItem('isSiteNow') == "true") {
              options.push(
                { value: 'withSites', text: 'Con mesas' }
              );
            }
            if (sessionStorage.getItem('isWorkNow') == "true") {
              options.push(
                { value: 'withSitesWork', text: 'Con puestos de trabajo' }
              );
            }
            if (sessionStorage.getItem('isEcommerceNow') == "true") {
              options.push(
                { value: 'ecommerce', text: 'E-Commerce' }
              );
            }
          
            options.forEach(function(optionData) {
              var optionElement = document.createElement('option');
              optionElement.value = optionData.value;
              optionElement.textContent = optionData.text;
              selectElement.appendChild(optionElement);
            });
          
            // Agregar el select al contenedor deseado
            infoContent.appendChild(selectElement);
          }
          listTypePlace();
      },
        preConfirm: () => {
            const selectedEmployee = document.getElementById('list-OSEmployeesList').value;
            const selectedCustomer = document.getElementById('list-OSCustomerListOS').value;
            if (!selectedEmployee || !selectedCustomer) {
                Swal.showValidationMessage(`Please select both an employee and a customer`);
            }
            return {
                selectedEmployee: selectedEmployee,
                selectedCustomer: selectedCustomer
            };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // Aquí puedes manejar los datos del formulario
            console.log('Submitted Data:', result.value);
            Swal.fire(`Empleado seleccionado: ${result.value.selectedEmployee}\nCliente seleccionado: ${result.value.selectedCustomer}`);
        }
    });
  
  }