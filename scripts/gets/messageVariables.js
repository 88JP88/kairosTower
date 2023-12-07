
function getMessage() {
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
  
      
  
        if(nuevoError==="true"){
          
          var re="success";
          
        }
        if(nuevoError==="false"){
        
          var re="error";
          
        }
  
        
        alert("Orden número: "+nuevoOrderNumber+". Id de orden: "+nuevoOrderId+". Total: $"+nuevoTotal+". Subtotal: $"+nuevoSubTotal+". Ahorro: $"+nuevoSaver+".");
        showNotify(nuevoMensaje, re);
  
      })
      .catch(error => {
        console.error('Error al obtener las variables PHP:', error);
      });
  }