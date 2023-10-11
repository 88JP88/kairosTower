
function getSessionInfo() {

    fetch('controller/getPHPVariablesSession.php')
      .then(response => response.json())
      .then(data => {
        // Aquí obtienes los nuevos valores de las variables PHP en el objeto "data"
        // Puedes acceder a los valores como data.mensaje y data.error
        // Por ejemplo:
        var nuevoMensaje = data.mensaje;
        var nuevoError = data.error;
  
  
        if(nuevoError==="true"){
          
  
          
        var userId = data.userId;
        var userName = data.userName;
        var mail = data.mail;
        var sessionCounter = data.sessionCounter;
        var name = data.name;
        var lastName = data.lastName;
        var rolId = data.rolId;
        var isActive = data.isActive;
        var status = data.status;
        var contact = data.contact;
        var sessionId = data.sessionId;
        var key = data.key;
        var ranCode = data.ranCode;
        var subDomain = data.subDomain;
        var clientId = data.clientId;
      sessionStorage.setItem('userId',userId);
      sessionStorage.setItem('userName',userName);
      sessionStorage.setItem('mail',mail);
      sessionStorage.setItem('sessionCounter',sessionCounter);
      sessionStorage.setItem('name',name);
      sessionStorage.setItem('lastName',lastName);
      sessionStorage.setItem('rolId',rolId);
      sessionStorage.setItem('isActive',isActive);
      sessionStorage.setItem('status',status);
      sessionStorage.setItem('contact',contact);
      sessionStorage.setItem('sessionId',sessionId);
      sessionStorage.setItem('key',key);
      sessionStorage.setItem('ranCode',ranCode);
      sessionStorage.setItem('subDomain',subDomain);
      sessionStorage.setItem('clientId',clientId);
          var re="success";
          
        }
        if(nuevoError==="false"){
        
          var re="error";
          
        }
        
  
       
  
      })
      .catch(error => {
        console.error('Error al obtener las variables PHP:', error);
      });
  }

  getSessionInfo();