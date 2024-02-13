

















function putOrderPaymentStatus(button,id,param) {
  // Obtener el valor del campo de texto correspondiente al botón
  const url1 = window.location.href;
  //value= document.getElementById('list-customerget').value;
    // Crear un objeto URL a partir de la URL actual
    const urlObj = new URL(url1);
    
    // Obtener el valor del parámetro "parametro1"
    var clientId = urlObj.searchParams.get("clientId");
//  if(param=="validateModal"){
//   var input = document.getElementById('paymentReference').value;
//   var url = 'controller/putClientOrderPayment.php?reference=' + encodeURIComponent(input)  + '&clientId=' + encodeURIComponent(clientId);

//  }
 if(param=="validateList"){
  var nombre = button.previousElementSibling;
  var input = nombre.value;    
  var url = 'controller/putClientOrderPayment1.php?reference=' + encodeURIComponent(input)  + '&clientId=' + encodeURIComponent(clientId)+ '&orderId=' + encodeURIComponent(id);

 }
    

  // Construir la URL con los parámetros de la petición GET
 
  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

      getMessage();
      
       // getClientStores('filter',param,value);
       getClientOrders('clientId','byStore','storeId','value','tableClientOrders');
      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
  
 
  }
 

  function putOrderStatusStatus(button,id,param,delPerson) {
    // Obtener el valor del campo de texto correspondiente al botón
    const url1 = window.location.href;
    //value= document.getElementById('list-customerget').value;
      // Crear un objeto URL a partir de la URL actual
      const urlObj = new URL(url1);
      
      // Obtener el valor del parámetro "parametro1"
      var clientId = urlObj.searchParams.get("clientId");
      

  if(param==="deliveryStatus"){

    var input = delPerson; 

    var apiData = {
      "orderId": id,
      "clientId": urlObj.searchParams.get("clientId"),
      "param": param,
      "value": input,
      "apiValues":{
        "apiName": "apiClient",
        "apiVersion": "v1",
        "endPoint": "putClientOrderStatus"
      }
      
    };
  // Construir la URL con los parámetros de la petición GET
  
  const apiInfo = JSON.stringify(apiData);
  var url = 'controller/postController.php?data=' + encodeURIComponent(apiInfo);
  
  }else{

    var nombre = button.previousElementSibling;
    var input = nombre.value;  
    var apiData = {
      "orderId": id,
      "clientId": urlObj.searchParams.get("clientId"),
      "param": param,
      "value": input,
      "apiValues":{
        "apiName": "apiClient",
        "apiVersion": "v1",
        "endPoint": "putClientOrderStatus"
      }
      
    };
  // Construir la URL con los parámetros de la petición GET
  
  const apiInfo = JSON.stringify(apiData);
  var url = 'controller/postController.php?data=' + encodeURIComponent(apiInfo);
  
  }
   

   // var url = 'controller/putClientOrderStatus.php?orderId=' + encodeURIComponent(id)  + '&clientId=' + encodeURIComponent(clientId)+ '&param=' + encodeURIComponent(param)+ '&value=' + encodeURIComponent(input);
  
   
      
  
    // Construir la URL con los parámetros de la petición GET
   
    // Realizar la petición GET al archivo PHP
    fetch(url)
      .then(response => {
        // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
        // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página
  console.log(id,param,input);
        getMessage();
        getClientOrders('clientId','byStore','storeId','value','tableClientOrders');

         // getClientStores('filter',param,value);
  //console.log(input);
        
   
      })
      .catch(error => {
        // Aquí puedes manejar los errores en caso de que la petición falle
        console.log('Error en la petición:', error);
      });
    
   
    }
   
  

   function getCustomerOrderData(){


    var delMeth=document.getElementById('list-deliverymethod').value;

    
      if(delMeth==="delivery"){
        const card11 = document.createElement("div");
        const cardContainer11 = document.getElementById("orderData");
        cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas  
              card11.classList.add("card");
           
             
              card11.innerHTML = `
                  <div class="card-body">
                  <h5 class="card-title">
                  <p class="card-text"> <i class="fas fa-guitar"></i></p>
                
                 

              </h5>
              <div class="edit-container">
              <p class="card-text">Primer parámetro:
              <select id="selprimerparametro">
              <option value="AC">Avenida Calle</option>
              <option value="CL">Calle</option>
              <option value="DG">Diagonal</option>
              <option value="AK">Avenida Karrera</option>
              <option value="KR">Karrera</option>
              <option value="TV">Transversal</option>
              </select>
             
              </p>
              </div>
         <input type="text" class="form-control" id="deliveryAddress" value="" title="" onclick="makeEditable(this)">
         <div class="edit-container">
         <p class="card-text">
         <select id="letras1">
         <option value="">Seleccionar</option>
         <option value="A">A</option>
         <option value="B">B</option>
         <option value="C">C</option>
         <option value="D">D</option>
         <option value="E">E</option>
         <option value="F">F</option>
         <option value="G">G</option>
         <option value="H">H</option>
         <option value="I">I</option>
         <option value="J">J</option>
         <option value="K">K</option>
         <option value="L">L</option>
         <option value="M">M</option>
         <option value="N">N</option>
         <option value="O">O</option>
         <option value="P">P</option>
         <option value="Q">Q</option>
         <option value="R">R</option>
         <option value="S">S</option>
         <option value="T">T</option>
         <option value="U">U</option>
         <option value="V">V</option>
         <option value="W">W</option>
         <option value="X">X</option>
         <option value="Y">Y</option>
         <option value="Z">Z</option>
       </select>
       </p>
       </div>

       <div class="edit-container">
       <p class="card-text">Cardinalidad:
       <select id="selprimercardinalidad">
       <option value="">No aplica</option>
       <option value="N">Norte</option>
       <option value="S">Sur</option>
       <option value="EST">Este</option>
       <option value="OEST">Oeste Karrera</option>
       </select>
      
       </p>
       </div>
       <div class="edit-container">
       <p class="card-text">
         <select id="selprimerparametrobis">
         <option value=""></option>
         <option value="BIS">Bis</option>
         </select>
         </div>
         </p>
         <div class="edit-container">
         <p class="card-text">Segundo parámetro:
         <select id="selsegundoparametro">
         <option value="AK">Avenida Karrera</option>
         <option value="KR">Karrera</option>
         <option value="TV">Transversal</option>
         <option value="AC">Avenida Calle</option>
              <option value="CL">Calle</option>
              <option value="DG">Diagonal</option>
         </select>
         </p>
         </div>
    <input type="text" class="form-control" id="deliveryAddressAv" value="" title="" onclick="makeEditable(this)">
    <div class="edit-container">
    <p class="card-text">
    <select id="letras2">
    <option value="">Seleccionar</option>
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    <option value="D">D</option>
    <option value="E">E</option>
    <option value="F">F</option>
    <option value="G">G</option>
    <option value="H">H</option>
    <option value="I">I</option>
    <option value="J">J</option>
    <option value="K">K</option>
    <option value="L">L</option>
    <option value="M">M</option>
    <option value="N">N</option>
    <option value="O">O</option>
    <option value="P">P</option>
    <option value="Q">Q</option>
    <option value="R">R</option>
    <option value="S">S</option>
    <option value="T">T</option>
    <option value="U">U</option>
    <option value="V">V</option>
    <option value="W">W</option>
    <option value="X">X</option>
    <option value="Y">Y</option>
    <option value="Z">Z</option>
  </select>
  </p>
  </div>
  <div class="edit-container">
       <p class="card-text">Cardinalidad:
       <select id="selsegundocardinalidad">
       <option value="">No aplica</option>
       <option value="N">Norte</option>
       <option value="S">Sur</option>
       <option value="EST">Este</option>
       <option value="OEST">Oeste Karrera</option>
       </select>
      
       </p>
       </div>
  <div class="edit-container">
  <p class="card-text">
    <select id="selsegundoparametrobis">
         <option value=""></option>
         <option value="BIS">Bis</option>
         </select>
         </p>
    </div>
    <div class="edit-container">

    <p class="card-text">Número de locación:
   
    </p>
    </div>
<input type="text" class="form-control" id="deliveryAddressHm" value="" title="" onclick="makeEditable(this)">

</div>
<div class="edit-container">

<p class="card-text">Descripción de locación:

</p>
</div>
<input type="text" class="form-control" id="deliveryAddressdes" value="" title="" onclick="makeEditable(this)">

</div>

             
             
              
          
                      
                  </div>
                  
              `;

              cardContainer11.appendChild(card11);
           //   getClientCategoriesList3('all','all','all',idin1);
              //getClientStoresList13('all','all','all',idin1);
      }
      if(delMeth==="pickup"){

        const url1 = window.location.href;
        //value= document.getElementById('list-customerget').value;
          // Crear un objeto URL a partir de la URL actual
          const urlObj = new URL(url1);
          
          // Obtener el valor del parámetro "parametro1"
         
         var clientId = urlObj.searchParams.get("clientId");
        fetch(epGetClientPickupPoints  + clientId+"/all/all/all")
      .then(response => response.json())
      .then(data => {
          const cardContainer11 = document.getElementById("orderData");
          cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
          data.pickupPoints.forEach(info => {
              const card11 = document.createElement("div");
              card11.classList.add("card");
              const backgroundColor = info.isActive === "0" ? "  #cc0007" : "#ffffff";
              const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
             
              card11.innerHTML = `
                  <div class="card-body" style="background-color: ${backgroundColor};">
                  <h5 class="card-title">
                  <p class="card-text"> <i class="fas fa-guitar"></i></p>
                
                 

              </h5>
              <p class="card-text">${info.pointName}
             
              </p>
              <p class="card-text">${info.pointAdd}
              
              </p>

              <p class="card-text">${info.cityPoint}
            
              </p>
             

             
             
              
          
                      
                  </div>
                  
              `;

              cardContainer11.appendChild(card11);
           //   getClientCategoriesList3('all','all','all',idin1);
              //getClientStoresList13('all','all','all',idin1);

              idin1++;
          });
          
          document.getElementById("loading-container").style.display = "none";
      })
      .catch(error => {
          console.error("Error:", error);
          document.getElementById("loading-container").style.display = "none";
      });

        
      }
   }






   
   function getClientDelivery1(containerId){


    const url1 = window.location.href;
    //value= document.getElementById('list-customerget').value;
      // Crear un objeto URL a partir de la URL actual
      const urlObj = new URL(url1);
      
      // Obtener el valor del parámetro "parametro1"
    // console.log(containerId);
     var clientId = urlObj.searchParams.get("clientId");
    var reposSelect = document.getElementById(containerId);


  
 // console.log(epGetClientDelivery + clientId+'/all/all/all');
  
  var apiData = {
   
    
      "clientId":urlObj.searchParams.get("clientId"),
      "filter": "filter",
      "param": "param",
      "value": "value"
    
    
  };
  var serviceName="kairosGateway";
  var apiName="apiClient";
  var apiVersion="v1";
  var endPoint="getDelivery";
  // Construir la URL con los parámetros de la petición GET
  
  const apiInfo = JSON.stringify(apiData);
  fetch(sessionStorage.getItem('subDomain') +"/"+ serviceName+"/"+apiName+"/"+apiVersion+"/"+endPoint+"/"+sessionStorage.getItem('ranCode')+" "+sessionStorage.getItem('key')+"/"+apiInfo)      .then(response => response.json())
   
  
   
    
    .then(data => {
      data.delivery.forEach(info => {
        const option = document.createElement("option");
        option.value = info.deliveryId;
        option.text = info.deliveryName+" "+info.deliveryLastName;
        reposSelect.add(option);
      });
    })
    .catch(error => {
      console.error("Error:", error);
    });
     
   }

