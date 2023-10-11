
function profileInfoLog() {
  
    fetch('controller/profileInfoLog.php')
      .then(response => response.json())
      .then(data => {
        // Aquí obtienes los nuevos valores de las variables PHP en el objeto "data"
        // Puedes acceder a los valores como data.mensaje y data.error
        // Por ejemplo:
        var name = data.name;
        var lastName = data.lastName;
        
        var sessionCounter = data.sessionCounter;
        
        
  
  
        sessionStorage.setItem('sessionCounter',sessionCounter);
      sessionStorage.setItem('name',name);
      sessionStorage.setItem('lastName',lastName);
  
      actualizarCampos();
        
  
       
       
  
      })
      .catch(error => {
        console.error('Error al obtener las variables PHP:', error);
      });
  }