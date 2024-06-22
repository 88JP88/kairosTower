
async function createElements(postFName,listenerFName,params,elementsToCreate,subFName){




  
   await Swal.fire({
        title: params.modalTitle,
        allowOutsideClick: false,
        html: `
        
         <div class="box" id="targetDiv">  </div>

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
      width: '400px',
      padding: '1rem',
      backdrop: `
          rgba(0,0,123,0.4)
          url("https://example.com/nyan-cat.gif")
          left top
          no-repeat
      `,
      position: 'center',
      grow: 'row',
      showConfirmButton: true,
      confirmButtonColor: '#3085d6',
      showCancelButton: true,
      showCloseButton: true,
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#d33',
        confirmButtonText: 'Crear',
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
      

          createHtmlElements(params.targetBody, elementsToCreate);
           subFName();
           listenerFName();
      }
    }).then((result) => {
        if (result.isConfirmed) {
            // Aquí puedes manejar los datos del formulario
            async function executeInOrder() {
              try {
                await postFName(); // Espera a que postFName termine
                // Espera a que getMessage termine
              //  await createElements(postFName, listenerFName, params, elementsToCreate, subFName); // Finalmente, llama a createElements
            } catch (error) {
                console.error('Error en la ejecución de funciones:', error);
            }
        
            }
          executeInOrder();
          }else{
            const clientCode = sessionStorage.getItem('clientModulesConfigNow'+sessionStorage.getItem('clientNow'));
            eval(clientCode);
            returnSaverResources();
            
          }
    });
  
  }

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
  
function modalCreateSites(){




  
  Swal.fire({
      title: 'Crear puesto',
      allowOutsideClick: false,
      html: `
      
      
  <div class="box">
  <label for="exampleFormControlInput1" class="tag"><i class="fas fa-guitar"></i>Nombre del puesto</label>
  <input type="text" class="input is-rounded" id="siteName" placeholder="...">

  




  <label for="exampleFormControlInput1" class="tag"><i class="fas fa-guitar"></i>Comentarios del puesto</label>
  <input type="mail" class="input is-rounded" id="siteComments" placeholder="...">



  <label for="exampleFormControlInput1" class="tag"><i class="fas fa-guitar"></i>Seleccione Ubicación</label>

<div class="select is-rounded">
  <select id="list-OSPlace" name="lista1" ></select>

</div>


  
<label for="exampleFormControlInput1" class="tag"><i class="fas fa-guitar"></i> Tipo de puesto</label>
 
<div id="infoContent1" class="select is-rounded"></div>

</div>


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
    width: '400px',
    padding: '1rem',
    backdrop: `
        rgba(0,0,123,0.4)
        url("https://example.com/nyan-cat.gif")
        left top
        no-repeat
    `,
    position: 'center',
    grow: 'row',
    showConfirmButton: true,
    confirmButtonColor: '#3085d6',
    showCancelButton: true,
    showCloseButton: true,
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
        listTypeSite();
    }
  }).then((result) => {
    if (result.isConfirmed) {
      // Aquí puedes manejar los datos del formulario
      osCreateSite();
      modalCreateSites();
    }else{
      const clientCode = sessionStorage.getItem('clientModulesConfigNow'+sessionStorage.getItem('clientNow'));
      eval(clientCode);
      returnSaverResources();
       }
  });

}


function listTypeSite(){

  var infoContent = document.getElementById('infoContent1');

  // Crear el elemento select
  var selectElement = document.createElement('select');
  infoContent.innerHTML='';
 
  selectElement.id = 'list-OSSiteType';
  selectElement.name = 'unidad';
  selectElement.setAttribute('required', '');
  var options = [];

  // Crear las opciones y agregarlas al select
  if (sessionStorage.getItem('isMarketNow') == "true") {
    options.push(
      { value: 'marketbox', text: 'Caja Registradora (Mercado)' }
    );
  }
  if (sessionStorage.getItem('isSiteNow') == "true") {
    options.push(
      { value: 'site', text: 'Mesa (Con mesas)' }
    );
  }
  if (sessionStorage.getItem('isWorkNow') == "true") {
    options.push(
      { value: 'siteswork', text: 'Puesto de trabajo (Con puestos de trabajo)' }
    );
  }
  if (sessionStorage.getItem('isEcommerceNow') == "true") {
    options.push(
      { value: 'ecommerce', text: 'Operador E-Commerce (E-Commerce)' }
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


function modalClientModules(){




  
  Swal.fire({
      title: 'Módulos',
      allowOutsideClick: false,
      html: `
      
      

<div class="box">

     <div id="trackingResource" class="box"></div>
     <div id="resourceResource" class="box"></div>
     <div id="onSiteResource" class="box"></div>
      <div id="card-clientStyle" class="card-container">
            <!-- Contenido de la sección expandible -->
        </div>
</div>
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
    width: '1500px',
    padding: '1rem',
    backdrop: `
        rgba(0,0,123,0.4)
        url("https://example.com/nyan-cat.gif")
        left top
        no-repeat
    `,
    position: 'center',
   
    grow: 'row',
    showConfirmButton: true,
    confirmButtonColor: '#3085d6',
    showCancelButton: false,
    showCloseButton: true,
    cancelButtonText: 'Retroceder',
    cancelButtonColor: '#d33',
      confirmButtonText: 'Retroceder',
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
        function toggleExpandableSection() {
          const expandableSection = document.getElementById("expandable-section");
          if (expandableSection.style.display === "block") {
              expandableSection.style.display = "none";
          } else {
              expandableSection.style.display = "block";
          }
      }






      function toggleExpandableSection1() {
          const expandableSection1 = document.getElementById("expandable-section1");
          if (expandableSection1.style.display === "block") {
              expandableSection1.style.display = "none";
          } else {
              expandableSection1.style.display = "block";
          }
      }
 
      function toggleExpandableSection3() {
          const expandableSection1 = document.getElementById("expandable-section3");
          if (expandableSection1.style.display === "block") {
              expandableSection1.style.display = "none";
          } else {
              expandableSection1.style.display = "block";
          }
      }
 
      function toggleExpandableSection4() {
          const expandableSection1 = document.getElementById("expandable-section4");
          if (expandableSection1.style.display === "block") {
              expandableSection1.style.display = "none";
          } else {
              expandableSection1.style.display = "block";
          }
      }
    }
      
  }).then((result) => {
      if (result.isConfirmed) {
          // Aquí puedes manejar los datos del formulario
              createTable('tableInternalClients','containerGeneralUsersData', [
                                'Acciones',
                                'Id',
                                'Cliente',
                                'Comentarios',
                                'Tipo de Cliente',
                                'Responsable',
                                'Contacto',
                                'Activo',
                                'Parámetros'
                            ]);
              getApiData(getInternalClients,
                      {
                        'apiService':'apiCore',
                        'apiVersion':'v1',
                        'endPoint':'getInternalClients'
                    },
                      {
                        'containerData':'tableInternalClients',
                        'containerInfo':'containerGeneralUsersInfo'
                    },
                      {
                        'filter':'unlock',
                        'param':'unlock',
                        'value':'all'
                    }
                        );
      }else{
        createTable('tableInternalClients','containerGeneralUsersData', [
          'Acciones',
          'Id',
          'Cliente',
          'Comentarios',
          'Tipo de Cliente',
          'Responsable',
          'Contacto',
          'Activo',
          'Parámetros'
      ]);
getApiData(getInternalClients,
{
  'apiService':'apiCore',
  'apiVersion':'v1',
  'endPoint':'getInternalClients'
},
{
  'containerData':'tableInternalClients',
  'containerInfo':'containerGeneralUsersInfo'
},
{
  'filter':'unlock',
  'param':'unlock',
  'value':'all'
}
  );
      }
  });

}





function modalClientVisualizer(){




  
  Swal.fire({
      title: '',
      allowOutsideClick: false,
      html: `
      
         <div id="containerOSInfo" class="card-container">
                <!-- Contenido de la sección expandible -->
            </div>
            <div id="containerOSData" class="card-container">
                <!-- Contenido de la sección expandible -->
            </div>
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
    width: '1500px',
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
    showCancelButton: true,
    showCloseButton: true,
    cancelButtonText: 'Retroceder',
    cancelButtonColor: '#d33',
      confirmButtonText: 'Retroceder',
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
      
    }
      
  }).then((result) => {
      if (result.isConfirmed) {
          // Aquí puedes manejar los datos del formulario
          
      }else{
        const clientCode = sessionStorage.getItem('clientModulesConfigNow'+sessionStorage.getItem('clientNow'));
        eval(clientCode);
        returnSaverResources();
      }
  });

}


function listenerPlaces(){


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
  

}