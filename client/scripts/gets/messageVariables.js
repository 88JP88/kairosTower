
function getMessage() {
    fetch('../controller/getPHPVariables.php')
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