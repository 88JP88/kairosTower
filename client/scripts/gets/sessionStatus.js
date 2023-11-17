
function sessionStatus() {
  
    fetch('../controller/sessionStatus.php')
      .then(response => response.json())
      .then(data => {
       
        var sessionStatus = data.sessionStatus;
        
  
          if(sessionStatus==0){
  
  
            sessionStorage.clear();
            openModCloseSessionf();
  
          }if(sessionStatus==1){
  
  
            //console.log("Ejecutando sessionStatus() cada 10 segundos");
  
          }
  
      })
      .catch(error => {
        console.error('Error al obtener las variables PHP:', error);
      });
  }
  sessionStatus();
  setInterval(sessionStatus, 60000); // 10000 milisegundos = 10 segundos
  
  
  
  
  
  