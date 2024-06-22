
async function getMessage() {
    fetch('controller/getPHPVariables.php')
      .then(response => response.json())
      .then(data => {
        // Aquí obtienes los nuevos valores de las variables PHP en el objeto "data"
        // Puedes acceder a los valores como data.mensaje y data.error
        // Por ejemplo:
        var nuevoMensaje = data.mensaje;
        var nuevoError = data.error;
  
      
  
        if(nuevoError==="true"){
          
          var re="success";
          
        }
        if(nuevoError==="false"){
        
          var re="error";
          
        }
  
        showNotify(nuevoMensaje, re);
       
  
      })
      .catch(error => {
        console.error('Error al obtener las variables PHP:', error);
      });
  }

  function getMessageOrder() {
    fetch('controller/getPHPVariablesOrders.php')
      .then(response => response.json())
      .then(data => {
        // Aquí obtienes los nuevos valores de las variables PHP en el objeto "data"
        // Puedes acceder a los valores como data.mensaje y data.error
        // Por ejemplo:
        var nuevoMensaje = data.mensaje;
        var nuevoError = data.error;
        var nuevoOrderNumber = data.orderNumber;
        var nuevoOrderId = data.orderId;
        var nuevoTotal = data.total;
        var nuevoSubTotal = data.subTotal;
        var nuevoSaver = data.saver;
        var nuevoPm = data.paymentMethod;
        var nuevoPtype = data.paymentType;
  
      
  
        if(nuevoError==="true"){
          
          var re="success";
          
        }
        if(nuevoError==="false"){
        
          var re="error";
          
        }
  
    //alert("Orden número: "+nuevoOrderNumber+". Id de orden: "+nuevoOrderId+". Total: $"+nuevoTotal+". Subtotal: $"+nuevoSubTotal+". Ahorro: $"+nuevoSaver+" tip "+nuevoPtype);
    //showNotify(nuevoMensaje, re);
    //showNotify(nuevoMensaje, re);
  if(nuevoPtype==="app" || nuevoPtype==="cc" || nuevoPtype==="dc" || nuevoPtype==="points_isCredit_mc" || nuevoPtype==="points_isCredit_vs" || nuevoPtype==="points_isDebit_mc" || nuevoPtype==="points_isDebit_vs" ){
   alert("Orden número: "+nuevoOrderNumber+". Id de orden: "+nuevoOrderId+". Total: $"+nuevoTotal+". Subtotal: $"+nuevoSubTotal+". Ahorro: $"+nuevoSaver+".");
   openModValPosShopBanking(); 
   showNotify(nuevoMensaje, re);
  }
  if(nuevoPtype==="cash"){
    alert("Orden número: "+nuevoOrderNumber+". Id de orden: "+nuevoOrderId+". Total: $"+nuevoTotal+". Subtotal: $"+nuevoSubTotal+". Ahorro: $"+nuevoSaver+".");
   // openModValPosShopBanking(); 
    showNotify(nuevoMensaje, re);
   }
        
       
  
      })
      .catch(error => {
        console.error('Error al obtener las variables PHP:', error);
      });
  }

  function getMessageOrderEcm() {
    fetch('controller/getPHPVariablesOrdersEcm.php')
      .then(response => response.json())
      .then(data => {
        // Aquí obtienes los nuevos valores de las variables PHP en el objeto "data"
        // Puedes acceder a los valores como data.mensaje y data.error
        // Por ejemplo:
        var nuevoMensaje = data.mensaje;
        var nuevoError = data.error;
        var statusCode = data.statusCode;
  
      
  
        if(nuevoError==="true"){
          
          var re="success";
          
        }
        if(nuevoError==="false"){
        
          var re="error";
          
        }
  
    //alert("Orden número: "+nuevoOrderNumber+". Id de orden: "+nuevoOrderId+". Total: $"+nuevoTotal+". Subtotal: $"+nuevoSubTotal+". Ahorro: $"+nuevoSaver+" tip "+nuevoPtype);
    //showNotify(nuevoMensaje, re);
    //showNotify(nuevoMensaje, re);
  if(statusCode==="validatedMail"){
   //alert("Orden número: "+nuevoOrderNumber+". Id de orden: "+nuevoOrderId+". Total: $"+nuevoTotal+". Subtotal: $"+nuevoSubTotal+". Ahorro: $"+nuevoSaver+".");
   //openModValPosShopBanking(); 
   showNotify(nuevoMensaje, re);
   openModValEcmData();
   getCustomerOrderData();
  }
  if(statusCode==="invalidDb"){
    //alert("Orden número: "+nuevoOrderNumber+". Id de orden: "+nuevoOrderId+". Total: $"+nuevoTotal+". Subtotal: $"+nuevoSubTotal+". Ahorro: $"+nuevoSaver+".");
    //openModValPosShopBanking(); 
    showNotify(nuevoMensaje, re);
   }
   if(statusCode==="codeAttemps"){
    //alert("Orden número: "+nuevoOrderNumber+". Id de orden: "+nuevoOrderId+". Total: $"+nuevoTotal+". Subtotal: $"+nuevoSubTotal+". Ahorro: $"+nuevoSaver+".");
    //openModValEcmCode(); 
    showNotify(nuevoMensaje, re);
    alert("Se reenviará el código a tu correo");
    sendEcmCode();
    openModValEcmCode();
   }
   if(statusCode==="invalidMailCode"){
  
    
    showNotify(nuevoMensaje, re);
    openModValEcmCode(); 
   }
  
       
  
      })
      .catch(error => {
        console.error('Error al obtener las variables PHP:', error);
      });
  }

  
  function getMessageOrderEcmValidated() {
    fetch('controller/getPHPVariablesOrders.php')
      .then(response => response.json())
      .then(data => {
        // Aquí obtienes los nuevos valores de las variables PHP en el objeto "data"
        // Puedes acceder a los valores como data.mensaje y data.error
        // Por ejemplo:
        var nuevoMensaje = data.mensaje;
        var nuevoError = data.error;
        var nuevoOrderNumber = data.orderNumber;
        var nuevoOrderId = data.orderId;
        var nuevoTotal = data.total;
        var nuevoSubTotal = data.subTotal;
        var nuevoSaver = data.saver;
        var nuevoPm = data.paymentMethod;
        var nuevoPtype = data.paymentType;
  
      
  
        if(nuevoError==="true"){
          
          var re="success";
          
        }
        if(nuevoError==="false"){
        
          var re="error";
          
        }
  
    //alert("Orden número: "+nuevoOrderNumber+". Id de orden: "+nuevoOrderId+". Total: $"+nuevoTotal+". Subtotal: $"+nuevoSubTotal+". Ahorro: $"+nuevoSaver+" tip "+nuevoPtype);
    //showNotify(nuevoMensaje, re);
    //showNotify(nuevoMensaje, re);
  if(nuevoPtype==="app" || nuevoPtype==="cc" || nuevoPtype==="dc" || nuevoPtype==="points_isCredit_mc" || nuevoPtype==="points_isCredit_vs" || nuevoPtype==="points_isDebit_mc" || nuevoPtype==="points_isDebit_vs" ){
   alert("Orden número: "+nuevoOrderNumber+". Id de orden: "+nuevoOrderId+". Total: $"+nuevoTotal+". Subtotal: $"+nuevoSubTotal+". Ahorro: $"+nuevoSaver+".");
  // openModValPosShopBanking(); 
   showNotify(nuevoMensaje, re);
  }
  if(nuevoPtype==="cash"){
    alert("Orden número: "+nuevoOrderNumber+". Id de orden: "+nuevoOrderId+". Total: $"+nuevoTotal+". Subtotal: $"+nuevoSubTotal+". Ahorro: $"+nuevoSaver+".");
   // openModValPosShopBanking(); 
    showNotify(nuevoMensaje, re);
   }
        
       
  
      })
      .catch(error => {
        console.error('Error al obtener las variables PHP:', error);
      });
  }
